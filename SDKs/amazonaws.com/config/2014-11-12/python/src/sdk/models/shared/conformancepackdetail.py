import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackinputparameter as shared_conformancepackinputparameter


@dataclass_json
@dataclasses.dataclass
class ConformancePackDetail:
    r"""ConformancePackDetail
    Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.
    """
    
    conformance_pack_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackArn') }})
    conformance_pack_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackId') }})
    conformance_pack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    conformance_pack_input_parameters: Optional[list[shared_conformancepackinputparameter.ConformancePackInputParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackInputParameters') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    delivery_s3_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryS3Bucket') }})
    delivery_s3_key_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryS3KeyPrefix') }})
    last_update_requested_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateRequestedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
