import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttakeoveractiontype as shared_accounttakeoveractiontype


@dataclass_json
@dataclasses.dataclass
class AccountTakeoverActionsType:
    r"""AccountTakeoverActionsType
    Account takeover actions type.
    """
    
    high_action: Optional[shared_accounttakeoveractiontype.AccountTakeoverActionType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HighAction') }})
    low_action: Optional[shared_accounttakeoveractiontype.AccountTakeoverActionType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LowAction') }})
    medium_action: Optional[shared_accounttakeoveractiontype.AccountTakeoverActionType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediumAction') }})
    
