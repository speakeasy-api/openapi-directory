import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PatientLabResultSetAbnormalFlagEnum(str, Enum):
    UNKNOWN = ""
    L = "L"
    H = "H"
    LL = "LL"
    HH = "HH"
    LESS_THAN_ = "<"
    GREATER_THAN_ = ">"
    N = "N"
    A = "A"
    AA = "AA"
    NULL = "null"
    U = "U"
    D = "D"
    B = "B"
    W = "W"
    S = "S"
    R = "R"
    I = "I"
    MS = "MS"
    VS = "VS"

class PatientLabResultSetStatusEnum(str, Enum):
    UNKNOWN = ""
    ORDER_ENTERED = "Order Entered"
    DISCONTINUED = "Discontinued"
    IN_PROGRESS = "In Progress"
    RESULTS_RECEIVED = "Results Received"
    RESULTS_REVIEWED_WITH_PATIENT = "Results Reviewed with Patient"
    PAPER_ORDER = "Paper Order"


@dataclass_json
@dataclasses.dataclass
class PatientLabResultSet:
    ordering_doctor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordering_doctor') }})
    patient: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    date_test_performed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_test_performed') }})
    doctor_comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor_comments') }})
    doctor_signoff: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor_signoff') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lab_abnormal_flag: Optional[PatientLabResultSetAbnormalFlagEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_abnormal_flag') }})
    lab_imported_from_ccr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_imported_from_ccr') }})
    lab_normal_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_normal_range') }})
    lab_normal_range_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_normal_range_units') }})
    lab_order_status: Optional[PatientLabResultSetStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_order_status') }})
    lab_result_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_result_value') }})
    lab_result_value_as_float: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_result_value_as_float') }})
    lab_result_value_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_result_value_units') }})
    loinc_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loinc_code') }})
    scanned_in_result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanned_in_result') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
