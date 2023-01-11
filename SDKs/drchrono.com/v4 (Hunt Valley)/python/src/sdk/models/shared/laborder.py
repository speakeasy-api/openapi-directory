import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LabOrderIcd10Code:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
class LabOrderPriorityEnum(str, Enum):
    N = "N"
    S = "S"


@dataclass_json
@dataclasses.dataclass
class LabOrder:
    doctor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    patient: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    sublab: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sublab') }})
    accession_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accession_number') }})
    documents: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    icd10_codes: Optional[list[LabOrderIcd10Code]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icd10_codes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    priority: Optional[LabOrderPriorityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    requisition_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requisition_id') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
