import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rateincreasecriteria as shared_rateincreasecriteria


@dataclass_json
@dataclasses.dataclass
class ExponentialRolloutRate:
    r"""ExponentialRolloutRate
    Allows you to create an exponential rate of rollout for a job.
    """
    
    base_rate_per_minute: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseRatePerMinute') }})
    increment_factor: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementFactor') }})
    rate_increase_criteria: shared_rateincreasecriteria.RateIncreaseCriteria = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateIncreaseCriteria') }})
    
