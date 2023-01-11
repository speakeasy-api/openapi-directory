import dataclasses
from typing import Optional
from ..shared import evaluationresult as shared_evaluationresult


@dataclasses.dataclass
class SimulatePolicyResponse:
    r"""SimulatePolicyResponse
    Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request.
    """
    
    evaluation_results: Optional[list[shared_evaluationresult.EvaluationResult]] = dataclasses.field(default=None)
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
