import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbyday as shared_reportbyday
from ..shared import reportbydayglobal as shared_reportbydayglobal


@dataclass_json
@dataclasses.dataclass
class ReportByDayResponse:
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    days: Optional[list[shared_reportbyday.ReportByDay]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('days') }})
    global_performance_indicators: Optional[shared_reportbydayglobal.ReportByDayGlobal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalPerformanceIndicators') }})
    
