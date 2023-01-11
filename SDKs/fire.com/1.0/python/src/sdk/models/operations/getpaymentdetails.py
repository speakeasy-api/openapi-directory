import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency as shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency
from ..shared import onepaymentrequests_post_requestbody_content_application_1json_schema_properties_orderdetails as shared_onepaymentrequests_post_requestbody_content_application_1json_schema_properties_orderdetails


@dataclasses.dataclass
class GetPaymentDetailsPathParams:
    payment_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentUuid', 'style': 'simple', 'explode': False }})
    
class GetPaymentDetailsPaymentRequestStatusEnum(str, Enum):
    AWAITING_AUTHORISATION = "AWAITING_AUTHORISATION"
    AUTHORISED = "AUTHORISED"
    AWAITING_MULTI_AUTHORISATION = "AWAITING_MULTI_AUTHORISATION"
    NOT_AUTHORISED = "NOT_AUTHORISED"
    PAID = "PAID"
    REJECTED = "REJECTED"
    ACCEPTED = "ACCEPTED"
    RECEIVED = "RECEIVED"

class GetPaymentDetailsPaymentRequestTransactionTypeEnum(str, Enum):
    REFUND_REQUEST = "REFUND_REQUEST"
    PAYMENT = "PAYMENT"

class GetPaymentDetailsPaymentRequestTypeEnum(str, Enum):
    OTHER = "OTHER"


@dataclass_json
@dataclasses.dataclass
class GetPaymentDetailsPaymentRequest:
    additional_fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalFields') }})
    amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    collect_fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectFields') }})
    currency: Optional[shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expiry: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ican_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanTo') }})
    mandatory_fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatoryFields') }})
    max_number_payments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberPayments') }})
    my_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myRef') }})
    order_details: Optional[shared_onepaymentrequests_post_requestbody_content_application_1json_schema_properties_orderdetails.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDetails') }})
    payment_request_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentRequestCode') }})
    payment_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentUuid') }})
    return_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnUrl') }})
    status: Optional[GetPaymentDetailsPaymentRequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transaction_type: Optional[GetPaymentDetailsPaymentRequestTransactionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionType') }})
    type: Optional[GetPaymentDetailsPaymentRequestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookUrl') }})
    

@dataclasses.dataclass
class GetPaymentDetailsRequest:
    path_params: GetPaymentDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_request: Optional[GetPaymentDetailsPaymentRequest] = dataclasses.field(default=None)
    
