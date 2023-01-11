import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compensation as shared_compensation
from ..shared import payrolltotals as shared_payrolltotals


@dataclass_json
@dataclasses.dataclass
class Payroll:
    check_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_date') }})
    end_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    processed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processed') }})
    start_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_id') }})
    compensations: Optional[list[shared_compensation.Compensation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensations') }})
    processed_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processed_date') }})
    totals: Optional[shared_payrolltotals.PayrollTotals] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totals') }})
    
