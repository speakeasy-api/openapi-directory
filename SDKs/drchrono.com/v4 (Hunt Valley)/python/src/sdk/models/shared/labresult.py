import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LabResultAbnormalStatusEnum(str, Enum):
    L = "L"
    LL = "LL"
    H = "H"
    HH = "HH"
    LESS_THAN_ = "<"
    GREATER_THAN_ = ">"
    A = "A"
    AA = "AA"
    S = "S"
    R = "R"
    I = "I"
    NEG = "NEG"
    POS = "POS"
    N = "N"
    UNKNOWN = ""

class LabResultStatusEnum(str, Enum):
    P = "P"
    I = "I"
    C = "C"
    F = "F"
    X = "X"


@dataclass_json
@dataclasses.dataclass
class LabResult:
    document: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    lab_test: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_test') }})
    status: LabResultStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    test_performed: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('test_performed') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    abnormal_status: Optional[LabResultAbnormalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abnormal_status') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    group_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_code') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_abnormal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_abnormal') }})
    lab_order: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_order') }})
    normal_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normal_range') }})
    observation_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observation_code') }})
    observation_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observation_description') }})
    specimen_received: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specimen_received') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value_is_numeric: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value_is_numeric') }})
    
