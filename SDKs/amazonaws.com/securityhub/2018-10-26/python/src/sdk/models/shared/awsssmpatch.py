import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsssmcompliancesummary as shared_awsssmcompliancesummary


@dataclass_json
@dataclasses.dataclass
class AwsSsmPatch:
    r"""AwsSsmPatch
    Provides details about the compliance for a patch.
    """
    
    compliance_summary: Optional[shared_awsssmcompliancesummary.AwsSsmComplianceSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    
