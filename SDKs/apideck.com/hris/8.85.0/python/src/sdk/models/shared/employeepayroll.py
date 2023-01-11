import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import employee as shared_employee
from ..shared import payroll as shared_payroll


@dataclass_json
@dataclasses.dataclass
class EmployeePayroll:
    employee: Optional[shared_employee.Employee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    payroll: Optional[shared_payroll.Payroll] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payroll') }})
    
