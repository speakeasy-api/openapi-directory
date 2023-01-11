import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency as shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency

class GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum(str, Enum):
    ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS = "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS"
    DDIC = "DDIC"
    ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND"
    ACCOUNT_NOT_LIVE = "ACCOUNT_NOT_LIVE"
    CUSTOMER_NOT_FOUND = "CUSTOMER_NOT_FOUND"
    BUSINESS_NOT_LIVE = "BUSINESS_NOT_LIVE"
    BUSINESS_NOT_FULL = "BUSINESS_NOT_FULL"
    PERSONAL_USER_NOT_LIVE = "PERSONAL_USER_NOT_LIVE"
    PERSONAL_USER_NOT_FULL = "PERSONAL_USER_NOT_FULL"
    MANDATE_ALREADY_EXISTS = "MANDATE_ALREADY_EXISTS"
    MANDATE_WITH_DIFERENT_ACCOUNT = "MANDATE_WITH_DIFERENT_ACCOUNT"
    NULL_MANDATE_REFERENCE = "NULL_MANDATE_REFERENCE"
    INVALID_ACCOUNT_CURRENCY = "INVALID_ACCOUNT_CURRENCY"
    INVALID_MANDATE_REFERENCE = "INVALID_MANDATE_REFERENCE"
    REQUESTED_BY_CUSTOMER_VIA_SUPPORT = "REQUESTED_BY_CUSTOMER_VIA_SUPPORT"
    CUSTOMER_ACCOUNT_CLOSED = "CUSTOMER_ACCOUNT_CLOSED"
    CUSTOMER_DECEASED = "CUSTOMER_DECEASED"
    ACCOUNT_TRANSFERRED = "ACCOUNT_TRANSFERRED"
    MANDATE_NOT_FOUND = "MANDATE_NOT_FOUND"
    ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT = "ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT"
    INVALID_ACCOUNT_TYPE = "INVALID_ACCOUNT_TYPE"
    MANDATE_EXPIRED = "MANDATE_EXPIRED"
    MANDATE_CANCELLED = "MANDATE_CANCELLED"
    REQUESTED_BY_CUSTOMER = "REQUESTED_BY_CUSTOMER"

class GetDirectDebitMandatesMandatesMandateStatusEnum(str, Enum):
    CREATED = "CREATED"
    LIVE = "LIVE"
    REJECT_REQUESTED = "REJECT_REQUESTED"
    REJECT_RECORD_IN_PROGRESS = "REJECT_RECORD_IN_PROGRESS"
    REJECT_RECORDED = "REJECT_RECORDED"
    REJECT_FILE_CREATED = "REJECT_FILE_CREATED"
    REJECT_FILE_SENT = "REJECT_FILE_SENT"
    CANCEL_REQUESTED = "CANCEL_REQUESTED"
    CANCEL_RECORD_IN_PROGRESS = "CANCEL_RECORD_IN_PROGRESS"
    CANCEL_RECORDED = "CANCEL_RECORDED"
    CANCEL_FILE_CREATED = "CANCEL_FILE_CREATED"
    CANCEL_FILE_SENT = "CANCEL_FILE_SENT"
    COMPLETE = "COMPLETE"
    DORMANT = "DORMANT"


@dataclass_json
@dataclasses.dataclass
class GetDirectDebitMandatesMandatesMandate:
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    currency: Optional[shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_cancelled: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCancelled'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_completed: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCompleted'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fire_rejection_reason: Optional[GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fireRejectionReason') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_direct_debit_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestDirectDebitAmount') }})
    latest_direct_debit_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestDirectDebitDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mandate_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateReference') }})
    mandate_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateUuid') }})
    number_of_direct_debit_collected: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDirectDebitCollected') }})
    originator_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorAlias') }})
    originator_logo_url_large: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorLogoUrlLarge') }})
    originator_logo_url_small: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorLogoUrlSmall') }})
    originator_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorName') }})
    originator_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorReference') }})
    scheme_cancel_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeCancelReason') }})
    scheme_cancel_reason_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeCancelReasonCode') }})
    status: Optional[GetDirectDebitMandatesMandatesMandateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_ican: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetIcan') }})
    value_of_direct_debit_collected: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueOfDirectDebitCollected') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDirectDebitMandatesMandates:
    mandates: Optional[list[GetDirectDebitMandatesMandatesMandate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandates') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class GetDirectDebitMandatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    mandates: Optional[GetDirectDebitMandatesMandates] = dataclasses.field(default=None)
    
