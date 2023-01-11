import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CashPaymentLogActionEnum(str, Enum):
    C = "C"
    U = "U"
    D = "D"
    F = "F"
    A = "A"

class CashPaymentLogPaymentMethodEnum(str, Enum):
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


@dataclass_json
@dataclasses.dataclass
class CashPaymentLog:
    action: Optional[CashPaymentLogActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    appointment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    doctor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    patient: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    payment_method: Optional[CashPaymentLogPaymentMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_method') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
