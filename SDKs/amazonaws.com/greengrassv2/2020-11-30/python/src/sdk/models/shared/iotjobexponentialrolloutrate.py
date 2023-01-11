import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iotjobrateincreasecriteria as shared_iotjobrateincreasecriteria


@dataclass_json
@dataclasses.dataclass
class IoTJobExponentialRolloutRate:
    r"""IoTJobExponentialRolloutRate
    Contains information about an exponential rollout rate for a configuration deployment job.
    """
    
    base_rate_per_minute: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseRatePerMinute') }})
    increment_factor: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementFactor') }})
    rate_increase_criteria: shared_iotjobrateincreasecriteria.IoTJobRateIncreaseCriteria = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateIncreaseCriteria') }})
    
