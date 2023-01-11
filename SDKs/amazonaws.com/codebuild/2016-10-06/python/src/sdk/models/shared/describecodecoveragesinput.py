import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportcodecoveragesortbytype_enum as shared_reportcodecoveragesortbytype_enum
from ..shared import sortordertype_enum as shared_sortordertype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeCodeCoveragesInput:
    report_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportArn') }})
    max_line_coverage_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLineCoveragePercentage') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    min_line_coverage_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLineCoveragePercentage') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_by: Optional[shared_reportcodecoveragesortbytype_enum.ReportCodeCoverageSortByTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    sort_order: Optional[shared_sortordertype_enum.SortOrderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
