import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IoTJobTimeoutConfig:
    r"""IoTJobTimeoutConfig
    Contains information about the timeout configuration for a job.
    """
    
    in_progress_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inProgressTimeoutInMinutes') }})
    
