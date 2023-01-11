import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deltatimesessionwindowconfiguration as shared_deltatimesessionwindowconfiguration


@dataclass_json
@dataclasses.dataclass
class LateDataRuleConfiguration:
    r"""LateDataRuleConfiguration
    The information needed to configure a delta time session window.
    """
    
    delta_time_session_window_configuration: Optional[shared_deltatimesessionwindowconfiguration.DeltaTimeSessionWindowConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaTimeSessionWindowConfiguration') }})
    
