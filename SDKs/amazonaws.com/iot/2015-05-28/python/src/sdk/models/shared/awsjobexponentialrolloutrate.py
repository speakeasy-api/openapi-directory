import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsjobrateincreasecriteria as shared_awsjobrateincreasecriteria


@dataclass_json
@dataclasses.dataclass
class AwsJobExponentialRolloutRate:
    r"""AwsJobExponentialRolloutRate
    The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
    """
    
    base_rate_per_minute: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseRatePerMinute') }})
    increment_factor: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementFactor') }})
    rate_increase_criteria: shared_awsjobrateincreasecriteria.AwsJobRateIncreaseCriteria = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateIncreaseCriteria') }})
    
