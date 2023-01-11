import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import windowsummary as shared_windowsummary


@dataclass_json
@dataclasses.dataclass
class EvaluationResult:
    r"""EvaluationResult
    The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.
    """
    
    algorithm_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmArn') }})
    test_windows: Optional[list[shared_windowsummary.WindowSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestWindows') }})
    
