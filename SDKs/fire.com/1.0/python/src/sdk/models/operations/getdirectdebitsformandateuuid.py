import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency as shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency


@dataclasses.dataclass
class GetDirectDebitsForMandateUUIDQueryParams:
    mandate_uuid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'mandateUuid', 'style': 'form', 'explode': True }})
    
class GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"
    EIGHT = "8"
    NINE = "9"
    A = "A"
    B = "B"

class GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum(str, Enum):
    RECIEVED = "RECIEVED"
    REJECT_REQUESTED = "REJECT_REQUESTED"
    REJECT_READY_FOR_PROCESSING = "REJECT_READY_FOR_PROCESSING"
    REJECT_RECORD_IN_PROGRESS = "REJECT_RECORD_IN_PROGRESS"
    REJECT_RECORDED = "REJECT_RECORDED"
    REJECT_FILE_CREATED = "REJECT_FILE_CREATED"
    REJECT_FILE_SENT = "REJECT_FILE_SENT"
    COLLECTED = "COLLECTED"
    REFUND_REQUESTED = "REFUND_REQUESTED"
    REFUND_RECORD_IN_PROGRESS = "REFUND_RECORD_IN_PROGRESS"
    REFUND_RECORDED = "REFUND_RECORDED"
    REFUND_FILE_CREATED = "REFUND_FILE_CREATED"
    REFUND_FILE_SENT = "REFUND_FILE_SENT"

class GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnum(str, Enum):
    FIRST_COLLECTION = "FIRST_COLLECTION"
    ONGOING_COLLECTION = "ONGOING_COLLECTION"
    REPRESENTED_COLLECTION = "REPRESENTED_COLLECTION"
    FINAL_COLLECTION = "FINAL_COLLECTION"


@dataclass_json
@dataclasses.dataclass
class GetDirectDebitsForMandateUUIDDirectDebitsDirectDebit:
    amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direct_debit_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDebitReference') }})
    direct_debit_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDebitUuid') }})
    is_ddic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDDIC') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mandate_u_uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandateUUid') }})
    originator_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorAlias') }})
    originator_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorName') }})
    originator_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorReference') }})
    scheme_reject_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeRejectReason') }})
    scheme_reject_reason_code: Optional[GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeRejectReasonCode') }})
    status: Optional[GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_ican: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetIcan') }})
    target_payee_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPayeeId') }})
    type: Optional[GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDirectDebitsForMandateUUIDDirectDebits:
    directdebits: Optional[list[GetDirectDebitsForMandateUUIDDirectDebitsDirectDebit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directdebits') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class GetDirectDebitsForMandateUUIDRequest:
    query_params: GetDirectDebitsForMandateUUIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDirectDebitsForMandateUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    direct_debits: Optional[GetDirectDebitsForMandateUUIDDirectDebits] = dataclasses.field(default=None)
    
