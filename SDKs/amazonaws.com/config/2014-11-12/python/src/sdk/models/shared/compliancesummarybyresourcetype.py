import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancesummary as shared_compliancesummary


@dataclass_json
@dataclasses.dataclass
class ComplianceSummaryByResourceType:
    r"""ComplianceSummaryByResourceType
    The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.
    """
    
    compliance_summary: Optional[shared_compliancesummary.ComplianceSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
