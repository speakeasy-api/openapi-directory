import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttakeoveractionstype as shared_accounttakeoveractionstype
from ..shared import notifyconfigurationtype as shared_notifyconfigurationtype


@dataclass_json
@dataclasses.dataclass
class AccountTakeoverRiskConfigurationType:
    r"""AccountTakeoverRiskConfigurationType
    Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
    """
    
    actions: shared_accounttakeoveractionstype.AccountTakeoverActionsType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    notify_configuration: Optional[shared_notifyconfigurationtype.NotifyConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotifyConfiguration') }})
    
