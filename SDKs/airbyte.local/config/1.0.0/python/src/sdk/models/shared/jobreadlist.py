import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobwithattemptsread as shared_jobwithattemptsread


@dataclass_json
@dataclasses.dataclass
class JobReadList:
    jobs: list[shared_jobwithattemptsread.JobWithAttemptsRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    
