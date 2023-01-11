import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobconfigtype_enum as shared_jobconfigtype_enum
from ..shared import logread as shared_logread


@dataclass_json
@dataclasses.dataclass
class SynchronousJobRead:
    config_type: shared_jobconfigtype_enum.JobConfigTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    created_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    ended_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endedAt') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    succeeded: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeeded') }})
    config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    logs: Optional[shared_logread.LogRead] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    
