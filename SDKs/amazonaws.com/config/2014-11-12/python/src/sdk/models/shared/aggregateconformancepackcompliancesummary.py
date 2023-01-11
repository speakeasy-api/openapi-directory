import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregateconformancepackcompliancecount as shared_aggregateconformancepackcompliancecount


@dataclass_json
@dataclasses.dataclass
class AggregateConformancePackComplianceSummary:
    r"""AggregateConformancePackComplianceSummary
    Provides a summary of compliance based on either account ID or region. 
    """
    
    compliance_summary: Optional[shared_aggregateconformancepackcompliancecount.AggregateConformancePackComplianceCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    
