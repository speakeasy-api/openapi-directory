import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancesummaryinfo as shared_compliancesummaryinfo


@dataclass_json
@dataclasses.dataclass
class ComplianceSummary:
    r"""ComplianceSummary
    This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.
    """
    
    violation_summaries: Optional[list[shared_compliancesummaryinfo.ComplianceSummaryInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationSummaries') }})
    
