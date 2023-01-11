import dataclasses
from typing import Optional
from ..shared import launchconfiguration as shared_launchconfiguration


@dataclasses.dataclass
class LaunchConfigurationsType:
    launch_configurations: list[shared_launchconfiguration.LaunchConfiguration] = dataclasses.field()
    next_token: Optional[str] = dataclasses.field(default=None)
    
