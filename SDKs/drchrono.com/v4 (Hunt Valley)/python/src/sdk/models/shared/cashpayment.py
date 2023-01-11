import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CashPaymentPaymentMethodEnum(str, Enum):
    CASH = "CASH"
    CHCK = "CHCK"
    DBIT = "DBIT"
    CRDT = "CRDT"
    AMEX = "AMEX"
    VISA = "VISA"
    MSTR = "MSTR"
    DISC = "DISC"
    SQR1 = "SQR1"
    SQRE = "SQRE"
    PTPA = "PTPA"
    ONPT = "ONPT"
    OTHR = "OTHR"

class CashPaymentPaymentTransactionTypeEnum(str, Enum):
    UNKNOWN = ""
    REF = "REF"
    COR = "COR"
    COPAY = "COPAY"
    COINSR = "COINSR"
    OTHR = "OTHR"


@dataclass_json
@dataclasses.dataclass
class CashPayment:
    patient: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    line_item: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_item') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    payment_method: Optional[CashPaymentPaymentMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_method') }})
    payment_transaction_type: Optional[CashPaymentPaymentTransactionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_transaction_type') }})
    posted_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posted_date') }})
    received_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_date') }})
    trace_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trace_number') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
