import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudcomponentstatus as shared_cloudcomponentstatus


@dataclass_json
@dataclasses.dataclass
class CreateComponentVersionResponse:
    component_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    creation_timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: shared_cloudcomponentstatus.CloudComponentStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
