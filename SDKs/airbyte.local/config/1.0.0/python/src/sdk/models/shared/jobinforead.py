import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attemptinforead as shared_attemptinforead
from ..shared import jobread as shared_jobread


@dataclass_json
@dataclasses.dataclass
class JobInfoRead:
    attempts: list[shared_attemptinforead.AttemptInfoRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    job: shared_jobread.JobRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    
