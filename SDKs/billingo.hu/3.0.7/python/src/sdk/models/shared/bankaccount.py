import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency_enum as shared_currency_enum


@dataclass_json
@dataclasses.dataclass
class BankAccount:
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    account_number_iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number_iban') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    need_qr: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('need_qr') }})
    swift: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('swift') }})
    

@dataclass_json
@dataclasses.dataclass
class BankAccountInput:
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    account_number_iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number_iban') }})
    need_qr: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('need_qr') }})
    swift: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('swift') }})
    
