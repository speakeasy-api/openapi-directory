import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import evaluationresult as shared_evaluationresult


@dataclass_json
@dataclasses.dataclass
class GetComplianceDetailsByResourceResponse:
    r"""GetComplianceDetailsByResourceResponse
    <p/>
    """
    
    evaluation_results: Optional[list[shared_evaluationresult.EvaluationResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
