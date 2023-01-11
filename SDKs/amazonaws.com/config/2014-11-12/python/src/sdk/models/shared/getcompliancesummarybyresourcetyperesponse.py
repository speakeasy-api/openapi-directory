import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancesummarybyresourcetype as shared_compliancesummarybyresourcetype


@dataclass_json
@dataclasses.dataclass
class GetComplianceSummaryByResourceTypeResponse:
    r"""GetComplianceSummaryByResourceTypeResponse
    <p/>
    """
    
    compliance_summaries_by_resource_type: Optional[list[shared_compliancesummarybyresourcetype.ComplianceSummaryByResourceType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummariesByResourceType') }})
    
