import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimeoutConfig:
    r"""TimeoutConfig
    Tunnel timeout configuration.
    """
    
    max_lifetime_timeout_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLifetimeTimeoutMinutes') }})
    
