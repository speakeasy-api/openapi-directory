import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import benefit as shared_benefit
from ..shared import deduction as shared_deduction
from ..shared import tax as shared_tax


@dataclass_json
@dataclasses.dataclass
class Compensation:
    employee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    benefits: Optional[list[shared_benefit.Benefit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefits') }})
    deductions: Optional[list[shared_deduction.Deduction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deductions') }})
    gross_pay: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross_pay') }})
    net_pay: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_pay') }})
    taxes: Optional[list[shared_tax.Tax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    
