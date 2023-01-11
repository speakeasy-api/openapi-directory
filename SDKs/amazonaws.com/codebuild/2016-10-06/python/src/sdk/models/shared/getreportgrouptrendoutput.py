import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportwithrawdata as shared_reportwithrawdata
from ..shared import reportgrouptrendstats as shared_reportgrouptrendstats


@dataclass_json
@dataclasses.dataclass
class GetReportGroupTrendOutput:
    raw_data: Optional[list[shared_reportwithrawdata.ReportWithRawData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawData') }})
    stats: Optional[shared_reportgrouptrendstats.ReportGroupTrendStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
