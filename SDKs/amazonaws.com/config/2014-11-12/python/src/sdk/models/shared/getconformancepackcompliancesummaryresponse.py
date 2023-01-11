import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackcompliancesummary as shared_conformancepackcompliancesummary


@dataclass_json
@dataclasses.dataclass
class GetConformancePackComplianceSummaryResponse:
    conformance_pack_compliance_summary_list: Optional[list[shared_conformancepackcompliancesummary.ConformancePackComplianceSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackComplianceSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
