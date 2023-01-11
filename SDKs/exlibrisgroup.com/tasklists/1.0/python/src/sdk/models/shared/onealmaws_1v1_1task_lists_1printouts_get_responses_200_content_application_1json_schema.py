import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter:
    r"""Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter
    The printer.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus:
    r"""Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus
    Status of the printout (Pending/Printed/Canceled).
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout:
    r"""Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout
    Printout Object.
    """
    
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    letter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('letter') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    printer: Optional[Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printer') }})
    printout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printout') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema:
    r"""Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema
    A list of printouts.
    """
    
    printout: Optional[list[Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printout') }})
    total_record_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_record_count') }})
    
