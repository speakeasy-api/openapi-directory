import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testwindowsummary as shared_testwindowsummary


@dataclass_json
@dataclasses.dataclass
class PredictorExecution:
    r"""PredictorExecution
    The algorithm used to perform a backtest and the status of those tests.
    """
    
    algorithm_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmArn') }})
    test_windows: Optional[list[shared_testwindowsummary.TestWindowSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestWindows') }})
    
