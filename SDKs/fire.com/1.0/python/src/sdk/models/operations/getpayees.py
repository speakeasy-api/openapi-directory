import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency as shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency

class GetPayeesPayeeCreatedByEnum(str, Enum):
    CUSTOMER = "CUSTOMER"
    LODGEMENT = "LODGEMENT"
    DIRECT_DEBIT = "DIRECT DEBIT"
    OPEN_BANKING = "OPEN BANKING"
    FIRE_OPEN_PAYMENT = "FIRE OPEN PAYMENT"
    FIRE_DIRECT = "FIRE DIRECT"

class GetPayeesPayeeStatusEnum(str, Enum):
    CREATED = "CREATED"
    LIVE = "LIVE"
    CLOSED = "CLOSED"
    ARCHIVED = "ARCHIVED"


@dataclass_json
@dataclasses.dataclass
class GetPayeesPayee:
    account_holder_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountHolderName') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    created_by: Optional[GetPayeesPayeeCreatedByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    currency: Optional[shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    nsc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsc') }})
    status: Optional[GetPayeesPayeeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetPayeesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payee: Optional[GetPayeesPayee] = dataclasses.field(default=None)
    
