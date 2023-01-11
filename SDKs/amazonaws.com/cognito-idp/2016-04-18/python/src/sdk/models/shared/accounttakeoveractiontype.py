import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttakeovereventactiontype_enum as shared_accounttakeovereventactiontype_enum


@dataclass_json
@dataclasses.dataclass
class AccountTakeoverActionType:
    r"""AccountTakeoverActionType
    Account takeover action type.
    """
    
    event_action: shared_accounttakeovereventactiontype_enum.AccountTakeoverEventActionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventAction') }})
    notify: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notify') }})
    
