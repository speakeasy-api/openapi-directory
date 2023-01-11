import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintoutsQueryParams:
    letter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'letter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    printer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printer_id', 'style': 'form', 'explode': True }})
    printout_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printout_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutPrinter:
    r"""GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutPrinter
    The printer.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutStatus:
    r"""GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutStatus
    Status of the printout (Pending/Printed/Canceled).
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintout:
    r"""GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintout
    Printout Object.
    """
    
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    letter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('letter') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    printer: Optional[GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutPrinter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printer') }})
    printout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printout') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintouts200ApplicationJSON:
    r"""GetAlmawsV1TaskListsPrintouts200ApplicationJSON
    A list of printouts.
    """
    
    printout: Optional[list[GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintout]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printout') }})
    total_record_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_record_count') }})
    

@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintoutsRequest:
    query_params: GetAlmawsV1TaskListsPrintoutsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintoutsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_almaws_v1_task_lists_printouts_200_application_json_object: Optional[GetAlmawsV1TaskListsPrintouts200ApplicationJSON] = dataclasses.field(default=None)
    
