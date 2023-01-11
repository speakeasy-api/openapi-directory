import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclasses.dataclass
class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency:
    code: Optional[OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum(str, Enum):
    LIVE = "LIVE"
    MIGRATED = "MIGRATED"


@dataclass_json
@dataclasses.dataclass
class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems:
    balance: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    cbic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cbic') }})
    ccan: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccan') }})
    ciban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciban') }})
    cnsc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cnsc') }})
    colour: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colour') }})
    currency: Optional[OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    default_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAccount') }})
    direct_debits_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDebitsAllowed') }})
    ican: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ican') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
