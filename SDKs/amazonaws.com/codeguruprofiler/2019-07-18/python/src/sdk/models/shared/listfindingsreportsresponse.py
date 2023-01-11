import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingsreportsummary as shared_findingsreportsummary


@dataclass_json
@dataclasses.dataclass
class ListFindingsReportsResponse:
    r"""ListFindingsReportsResponse
    The structure representing the ListFindingsReportsResponse.
    """
    
    findings_report_summaries: list[shared_findingsreportsummary.FindingsReportSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingsReportSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
