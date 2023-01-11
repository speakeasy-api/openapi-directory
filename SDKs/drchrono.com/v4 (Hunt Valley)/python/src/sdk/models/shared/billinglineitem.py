import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BillingLineItemBillingStatusEnum(str, Enum):
    UNKNOWN = ""
    INCOMPLETE_INFORMATION = "Incomplete Information"
    IN_PROCESS_EMDEON = "In Process Emdeon"
    IN_PROCESS_I_HCFA = "In Process iHCFA"
    IN_PROCESS_GATEWAY = "In Process Gateway"
    IN_PROCESS_JOPARI = "In Process Jopari"
    IN_PROCESS_WAYSTAR = "In Process Waystar"
    REJECTED_EMDEON = "Rejected Emdeon"
    REJECTED_I_HCFA = "Rejected iHCFA"
    REJECTED_GATEWAY = "Rejected Gateway"
    REJECTED_JOPARI = "Rejected Jopari"
    REJECTED_WAYSTAR = "Rejected Waystar"
    IN_PROCESS_PAYER = "In Process Payer"
    PAYER_ACKNOWLEDGED = "Payer Acknowledged"
    REJECTED_PAYER = "Rejected Payer"
    PAID_IN_FULL = "Paid in Full"
    PARTIALLY_PAID = "Partially Paid"
    COORDINATION_OF_BENEFITS = "Coordination of Benefits"
    ERA_RECEIVED = "ERA Received"
    ERA_DENIED = "ERA Denied"

class BillingLineItemProcedureTypeEnum(str, Enum):
    C = "C"
    H = "H"
    U = "U"
    S = "S"


@dataclass_json
@dataclasses.dataclass
class BillingLineItem:
    appointment: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment') }})
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    diagnosis_pointers: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosis_pointers') }})
    procedure_type: BillingLineItemProcedureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('procedure_type') }})
    adjustment: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustment') }})
    allowed: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed') }})
    balance_ins: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance_ins') }})
    balance_pt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance_pt') }})
    balance_total: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance_total') }})
    billed: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billed') }})
    billing_status: Optional[BillingLineItemBillingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_status') }})
    denied_flag: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denied_flag') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    doctor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    expected_reimbursement: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expected_reimbursement') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ins1_paid: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ins1_paid') }})
    ins2_paid: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ins2_paid') }})
    ins3_paid: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ins3_paid') }})
    ins_total: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ins_total') }})
    insurance_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_status') }})
    modifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiers') }})
    paid_total: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paid_total') }})
    patient: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    posted_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posted_date') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    pt_paid: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pt_paid') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    service_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_date') }})
    units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
