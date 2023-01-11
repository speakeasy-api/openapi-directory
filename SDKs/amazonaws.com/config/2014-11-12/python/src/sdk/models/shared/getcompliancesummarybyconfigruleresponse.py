import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancesummary as shared_compliancesummary


@dataclass_json
@dataclasses.dataclass
class GetComplianceSummaryByConfigRuleResponse:
    r"""GetComplianceSummaryByConfigRuleResponse
    <p/>
    """
    
    compliance_summary: Optional[shared_compliancesummary.ComplianceSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    
