import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetAccountsAccountsAccountCurrencyCodeEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclasses.dataclass
class GetAccountsAccountsAccountCurrency:
    code: Optional[GetAccountsAccountsAccountCurrencyCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
class GetAccountsAccountsAccountStatusEnum(str, Enum):
    LIVE = "LIVE"
    MIGRATED = "MIGRATED"


@dataclass_json
@dataclasses.dataclass
class GetAccountsAccountsAccount:
    balance: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    cbic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cbic') }})
    ccan: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccan') }})
    ciban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciban') }})
    cnsc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cnsc') }})
    colour: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colour') }})
    currency: Optional[GetAccountsAccountsAccountCurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    default_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAccount') }})
    direct_debits_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDebitsAllowed') }})
    ican: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ican') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[GetAccountsAccountsAccountStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAccountsAccounts:
    accounts: Optional[list[GetAccountsAccountsAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    

@dataclasses.dataclass
class GetAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts: Optional[GetAccountsAccounts] = dataclasses.field(default=None)
    
