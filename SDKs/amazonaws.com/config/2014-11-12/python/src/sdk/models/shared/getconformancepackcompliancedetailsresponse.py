import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackevaluationresult as shared_conformancepackevaluationresult


@dataclass_json
@dataclasses.dataclass
class GetConformancePackComplianceDetailsResponse:
    conformance_pack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    conformance_pack_rule_evaluation_results: Optional[list[shared_conformancepackevaluationresult.ConformancePackEvaluationResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackRuleEvaluationResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
