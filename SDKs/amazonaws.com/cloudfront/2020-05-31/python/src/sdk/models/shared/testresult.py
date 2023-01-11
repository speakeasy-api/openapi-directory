import dataclasses
from typing import Optional
from ..shared import functionsummary as shared_functionsummary


@dataclasses.dataclass
class TestResult:
    r"""TestResult
    Contains the result of testing a CloudFront function with <code>TestFunction</code>.
    """
    
    compute_utilization: Optional[str] = dataclasses.field(default=None)
    function_error_message: Optional[str] = dataclasses.field(default=None)
    function_execution_logs: Optional[list[str]] = dataclasses.field(default=None)
    function_output: Optional[str] = dataclasses.field(default=None)
    function_summary: Optional[shared_functionsummary.FunctionSummary] = dataclasses.field(default=None)
    
