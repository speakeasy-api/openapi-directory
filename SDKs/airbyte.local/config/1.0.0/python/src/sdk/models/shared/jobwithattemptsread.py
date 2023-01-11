import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attemptread as shared_attemptread
from ..shared import jobread as shared_jobread


@dataclass_json
@dataclasses.dataclass
class JobWithAttemptsRead:
    attempts: Optional[list[shared_attemptread.AttemptRead]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    job: Optional[shared_jobread.JobRead] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    
