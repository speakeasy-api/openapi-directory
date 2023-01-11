import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportgrouptrendfieldtype_enum as shared_reportgrouptrendfieldtype_enum


@dataclass_json
@dataclasses.dataclass
class GetReportGroupTrendInput:
    report_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGroupArn') }})
    trend_field: shared_reportgrouptrendfieldtype_enum.ReportGroupTrendFieldTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trendField') }})
    num_of_reports: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfReports') }})
    
