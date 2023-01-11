import dataclasses
from typing import Optional
from ..shared import functionsummary as shared_functionsummary


@dataclasses.dataclass
class PublishFunctionResult:
    function_summary: Optional[shared_functionsummary.FunctionSummary] = dataclasses.field(default=None)
    
