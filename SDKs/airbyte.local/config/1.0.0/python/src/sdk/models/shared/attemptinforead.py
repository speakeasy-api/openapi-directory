import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attemptread as shared_attemptread
from ..shared import logread as shared_logread


@dataclass_json
@dataclasses.dataclass
class AttemptInfoRead:
    attempt: shared_attemptread.AttemptRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempt') }})
    logs: shared_logread.LogRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    
