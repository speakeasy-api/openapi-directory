import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RateIncreaseCriteria:
    r"""RateIncreaseCriteria
    Allows you to define a criteria to initiate the increase in rate of rollout for a job.
    """
    
    number_of_notified_things: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfNotifiedThings') }})
    number_of_succeeded_things: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfSucceededThings') }})
    
