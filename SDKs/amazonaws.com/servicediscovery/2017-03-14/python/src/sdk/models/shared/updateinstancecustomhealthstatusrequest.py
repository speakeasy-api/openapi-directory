import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customhealthstatus_enum as shared_customhealthstatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdateInstanceCustomHealthStatusRequest:
    instance_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    service_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceId') }})
    status: shared_customhealthstatus_enum.CustomHealthStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
