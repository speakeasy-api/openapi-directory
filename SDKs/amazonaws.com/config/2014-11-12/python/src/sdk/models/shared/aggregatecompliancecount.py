import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancesummary as shared_compliancesummary


@dataclass_json
@dataclasses.dataclass
class AggregateComplianceCount:
    r"""AggregateComplianceCount
    Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
    """
    
    compliance_summary: Optional[shared_compliancesummary.ComplianceSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    
