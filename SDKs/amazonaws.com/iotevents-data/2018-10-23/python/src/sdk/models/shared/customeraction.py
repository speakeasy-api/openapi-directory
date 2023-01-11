import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acknowledgeactionconfiguration as shared_acknowledgeactionconfiguration
from ..shared import customeractionname_enum as shared_customeractionname_enum
from ..shared import disableactionconfiguration as shared_disableactionconfiguration
from ..shared import enableactionconfiguration as shared_enableactionconfiguration
from ..shared import resetactionconfiguration as shared_resetactionconfiguration
from ..shared import snoozeactionconfiguration as shared_snoozeactionconfiguration


@dataclass_json
@dataclasses.dataclass
class CustomerAction:
    r"""CustomerAction
    Contains information about the action that you can take to respond to the alarm.
    """
    
    acknowledge_action_configuration: Optional[shared_acknowledgeactionconfiguration.AcknowledgeActionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgeActionConfiguration') }})
    action_name: Optional[shared_customeractionname_enum.CustomerActionNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    disable_action_configuration: Optional[shared_disableactionconfiguration.DisableActionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableActionConfiguration') }})
    enable_action_configuration: Optional[shared_enableactionconfiguration.EnableActionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableActionConfiguration') }})
    reset_action_configuration: Optional[shared_resetactionconfiguration.ResetActionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetActionConfiguration') }})
    snooze_action_configuration: Optional[shared_snoozeactionconfiguration.SnoozeActionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snoozeActionConfiguration') }})
    
