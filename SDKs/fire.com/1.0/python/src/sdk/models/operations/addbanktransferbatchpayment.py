import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onebatches_1percent_7bbatchuuidpercent_7d_1internaltransfers_post_responses_200_content_application_1json_schema as shared_onebatches_1percent_7bbatchuuidpercent_7d_1internaltransfers_post_responses_200_content_application_1json_schema


@dataclasses.dataclass
class AddBankTransferBatchPaymentPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    
class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum(str, Enum):
    ACCOUNT_DETAILS = "ACCOUNT_DETAILS"


@dataclass_json
@dataclasses.dataclass
class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2:
    amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    dest_account_holder_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destAccountHolderName') }})
    dest_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destAccountNumber') }})
    dest_iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destIban') }})
    dest_nsc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destNsc') }})
    ican_from: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanFrom') }})
    my_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myRef') }})
    payee_type: Optional[AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    your_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yourRef') }})
    
class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum(str, Enum):
    PAYEE_ID = "PAYEE_ID"


@dataclass_json
@dataclasses.dataclass
class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1:
    amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    ican_from: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanFrom') }})
    my_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myRef') }})
    payee_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payee_type: Optional[AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    your_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yourRef') }})
    

@dataclasses.dataclass
class AddBankTransferBatchPaymentRequest:
    path_params: AddBankTransferBatchPaymentPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddBankTransferBatchPaymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onebatches_1_percent_7_bbatch_uuid_percent_7_d_1internaltransfers_post_responses_200_content_application_1json_schema: Optional[shared_onebatches_1percent_7bbatchuuidpercent_7d_1internaltransfers_post_responses_200_content_application_1json_schema.Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
