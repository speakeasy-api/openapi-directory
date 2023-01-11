import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency as shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency


@dataclasses.dataclass
class GetTransactionsByIDPathParams:
    ican: int = dataclasses.field(metadata={'path_param': { 'field_name': 'ican', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedCard:
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    card_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardId') }})
    emboss_business_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embossBusinessName') }})
    emboss_card_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embossCardName') }})
    expiry_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    masked_pan: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskedPan') }})
    provider: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionFxTrade:
    buy_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyAmount') }})
    buy_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyCurrency') }})
    fixed_side: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedSide') }})
    rate4d: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate4d') }})
    sell_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellAmount') }})
    sell_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellCurrency') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountAccount:
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    nsc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsc') }})
    
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountTypeEnum(str, Enum):
    FIRE_ACCOUNT = "FIRE_ACCOUNT"


@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccount:
    account: Optional[GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    type: Optional[GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountAccount:
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    nsc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsc') }})
    
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum(str, Enum):
    EXTERNAL_ACCOUNT = "EXTERNAL_ACCOUNT"


@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccount:
    account: Optional[GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    type: Optional[GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeAccount:
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    nsc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsc') }})
    
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeTypeEnum(str, Enum):
    WITHDRAWAL_ACCOUNT = "WITHDRAWAL_ACCOUNT"


@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayee:
    account: Optional[GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    type: Optional[GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant:
    acquirer_id_de32: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquirerIdDe32') }})
    additional_amt_de54: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAmtDe54') }})
    additional_data_de124: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDataDe124') }})
    additional_data_de48: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDataDe48') }})
    auth_code_de38: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authCodeDe38') }})
    authorised_by_gps: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorisedByGps') }})
    avs_result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avsResult') }})
    bill_amt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billAmt') }})
    bill_ccy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billCcy') }})
    expiry_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDate') }})
    mcc_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mccCode') }})
    merch_id_de42: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchIdDe42') }})
    merch_name_de43: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchNameDe43') }})
    mt_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtId') }})
    pos_data_de22: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataDe22') }})
    pos_data_de61: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataDe61') }})
    pos_termnl_de41: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posTermnlDe41') }})
    proc_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('procCode') }})
    record_data_de120: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordDataDe120') }})
    resp_code_de39: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respCodeDe39') }})
    ret_ref_no_de37: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retRefNoDe37') }})
    status_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    txn_amt4d: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnAmt4d') }})
    txn_ccy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnCcy') }})
    txn_ctry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnCtry') }})
    txn_desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnDesc') }})
    txn_stat_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnStatCode') }})
    txn_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnType') }})
    
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum(str, Enum):
    CARD_MERCHANT = "CARD_MERCHANT"
    CARD_ATM = "CARD_ATM"


@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPayment:
    card_merchant: Optional[GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardMerchant') }})
    type: Optional[GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransactionsByIDTransaction:
    amount_after_charges: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountAfterCharges') }})
    amount_before_charges: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountBeforeCharges') }})
    balance: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    card: Optional[GetTransactionsByIDTransactionRelatedCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    currency: Optional[shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_acknowledged: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateAcknowledged'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fee_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeAmount') }})
    fx_trade_details: Optional[GetTransactionsByIDTransactionFxTrade] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fxTradeDetails') }})
    ican: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ican') }})
    my_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myRef') }})
    payment_request_public_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentRequestPublicCode') }})
    ref_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refId') }})
    related_party: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedParty') }})
    tax_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    txn_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class GetTransactionsByIDRequest:
    path_params: GetTransactionsByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transaction: Optional[GetTransactionsByIDTransaction] = dataclasses.field(default=None)
    
