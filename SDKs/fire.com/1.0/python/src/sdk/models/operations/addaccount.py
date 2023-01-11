import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items as shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items

class AddAccountNewAccountCurrencyEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclasses.dataclass
class AddAccountNewAccount:
    accept_fees_and_charges: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptFeesAndCharges') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    currency: Optional[AddAccountNewAccountCurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclasses.dataclass
class AddAccountRequest:
    request: AddAccountNewAccount = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items: Optional[shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems] = dataclasses.field(default=None)
    
