import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclass_json
@dataclasses.dataclass
class Stage:
    r"""Stage
    A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
    """
    
    duration_in_minutes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInMinutes') }})
    targets: list[shared_target.Target] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
