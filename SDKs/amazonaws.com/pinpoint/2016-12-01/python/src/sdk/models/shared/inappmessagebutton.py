import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import overridebuttonconfiguration as shared_overridebuttonconfiguration
from ..shared import defaultbuttonconfiguration as shared_defaultbuttonconfiguration


@dataclass_json
@dataclasses.dataclass
class InAppMessageButton:
    r"""InAppMessageButton
    Button Config for an in-app message.
    """
    
    android: Optional[shared_overridebuttonconfiguration.OverrideButtonConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Android') }})
    default_config: Optional[shared_defaultbuttonconfiguration.DefaultButtonConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultConfig') }})
    ios: Optional[shared_overridebuttonconfiguration.OverrideButtonConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IOS') }})
    web: Optional[shared_overridebuttonconfiguration.OverrideButtonConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Web') }})
    
