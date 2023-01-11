import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shutdowneventconfiguration as shared_shutdowneventconfiguration


@dataclass_json
@dataclasses.dataclass
class LifecycleEventConfiguration:
    r"""LifecycleEventConfiguration
    Specifies the lifecycle event configuration
    """
    
    shutdown: Optional[shared_shutdowneventconfiguration.ShutdownEventConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shutdown') }})
    
