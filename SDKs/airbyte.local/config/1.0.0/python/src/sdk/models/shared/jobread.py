import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobconfigtype_enum as shared_jobconfigtype_enum
from ..shared import jobstatus_enum as shared_jobstatus_enum


@dataclass_json
@dataclasses.dataclass
class JobRead:
    config_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    config_type: shared_jobconfigtype_enum.JobConfigTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    created_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: shared_jobstatus_enum.JobStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    
