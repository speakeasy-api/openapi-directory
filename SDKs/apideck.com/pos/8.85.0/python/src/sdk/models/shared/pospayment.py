import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentcard as shared_paymentcard
from ..shared import paymentcard as shared_paymentcard
from ..shared import posbankaccount as shared_posbankaccount
from ..shared import currency_enum as shared_currency_enum
from ..shared import servicecharge as shared_servicecharge
from ..shared import servicecharge as shared_servicecharge


@dataclass_json
@dataclasses.dataclass
class PosPaymentCardDetails:
    card: Optional[shared_paymentcard.PaymentCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    

@dataclass_json
@dataclasses.dataclass
class PosPaymentCashDetails:
    r"""PosPaymentCashDetails
    Cash details for this payment
    """
    
    amount: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    charge_back_amount: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charge_back_amount') }})
    
class PosPaymentExternalDetailsTypeEnum(str, Enum):
    CHECK = "check"
    BANK_TRANSFER = "bank_transfer"
    OTHER_GIFT_CARD = "other_gift_card"
    CRYPTO = "crypto"
    SQUARE_CASH = "square_cash"
    SOCIAL = "social"
    EXTERNAL = "external"
    EMONEY = "emoney"
    CARD = "card"
    STORED_BALANCE = "stored_balance"
    FOOD_VOUCHER = "food_voucher"
    OTHER = "other"


@dataclass_json
@dataclasses.dataclass
class PosPaymentExternalDetails:
    r"""PosPaymentExternalDetails
    Details about an external payment.
    """
    
    source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: PosPaymentExternalDetailsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    source_fee_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_fee_amount') }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_id') }})
    
class PosPaymentSourceEnum(str, Enum):
    CARD = "card"
    BANK_ACCOUNT = "bank_account"
    WALLET = "wallet"
    BNPL = "bnpl"
    CASH = "cash"
    EXTERNAL = "external"
    OTHER = "other"

class PosPaymentStatusEnum(str, Enum):
    APPROVED = "approved"
    PENDING = "pending"
    COMPLETED = "completed"
    CANCELED = "canceled"
    FAILED = "failed"
    OTHER = "other"

class PosPaymentWalletDetailsStatusEnum(str, Enum):
    AUTHORIZED = "authorized"
    CAPTURED = "captured"
    VOIDED = "voided"
    FAILED = "failed"
    OTHER = "other"


@dataclass_json
@dataclasses.dataclass
class PosPaymentWalletDetails:
    r"""PosPaymentWalletDetails
    Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
    """
    
    status: Optional[PosPaymentWalletDetailsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PosPaymentCardDetailsInput:
    card: Optional[shared_paymentcard.PaymentCardInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    

@dataclass_json
@dataclasses.dataclass
class PosPayment:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    customer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_id') }})
    source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_id') }})
    tender_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tender_id') }})
    app_fee: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_fee') }})
    approved: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    bank_account: Optional[shared_posbankaccount.PosBankAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_account') }})
    card_details: Optional[PosPaymentCardDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_details') }})
    cash: Optional[PosPaymentCashDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cash') }})
    change_back_cash_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_back_cash_amount') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_id') }})
    employee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    external_details: Optional[PosPaymentExternalDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_details') }})
    external_payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_payment_id') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant_id') }})
    processing_fees: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_fees') }})
    refunded: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunded') }})
    service_charges: Optional[list[shared_servicecharge.ServiceCharge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_charges') }})
    source: Optional[PosPaymentSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[PosPaymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    tip: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tip') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    wallet: Optional[PosPaymentWalletDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wallet') }})
    

@dataclass_json
@dataclasses.dataclass
class PosPaymentInput:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    customer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_id') }})
    source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_id') }})
    tender_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tender_id') }})
    app_fee: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_fee') }})
    approved: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    bank_account: Optional[shared_posbankaccount.PosBankAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_account') }})
    card_details: Optional[PosPaymentCardDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_details') }})
    cash: Optional[PosPaymentCashDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cash') }})
    change_back_cash_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_back_cash_amount') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_id') }})
    employee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    external_details: Optional[PosPaymentExternalDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_details') }})
    external_payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_payment_id') }})
    idempotency_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant_id') }})
    processing_fees: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_fees') }})
    refunded: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunded') }})
    service_charges: Optional[list[shared_servicecharge.ServiceChargeInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_charges') }})
    source: Optional[PosPaymentSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[PosPaymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    tip: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tip') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    wallet: Optional[PosPaymentWalletDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wallet') }})
    
