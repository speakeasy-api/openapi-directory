import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iotjobexponentialrolloutrate as shared_iotjobexponentialrolloutrate


@dataclass_json
@dataclasses.dataclass
class IoTJobExecutionsRolloutConfig:
    r"""IoTJobExecutionsRolloutConfig
    Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
    """
    
    exponential_rate: Optional[shared_iotjobexponentialrolloutrate.IoTJobExponentialRolloutRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialRate') }})
    maximum_per_minute: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPerMinute') }})
    
