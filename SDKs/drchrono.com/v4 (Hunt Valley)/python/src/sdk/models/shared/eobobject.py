import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EobObjectPaymentMethodEnum(str, Enum):
    UNKNOWN = ""
    ACH = "ACH"
    BOPCCP = "BOPCCP"
    BOPCTX = "BOPCTX"
    CHK = "CHK"
    FWT = "FWT"
    VPAY = "VPAY"
    NON = "NON"


@dataclass_json
@dataclasses.dataclass
class EobObject:
    doctor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    insurance_payer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_payer_id') }})
    insurance_payer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_payer_name') }})
    insurance_payer_trace_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_payer_trace_number') }})
    check_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_date') }})
    deposit_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit_date') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    payment_method: Optional[EobObjectPaymentMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_method') }})
    posted_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posted_date') }})
    scanned_eob: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanned_eob') }})
    total_paid: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_paid') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
