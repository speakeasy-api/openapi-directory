import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import evaluateonexit as shared_evaluateonexit


@dataclass_json
@dataclasses.dataclass
class RetryStrategy:
    r"""RetryStrategy
    The retry strategy associated with a job. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html\">Automated job retries</a> in the <i>Batch User Guide</i>.
    """
    
    attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    evaluate_on_exit: Optional[list[shared_evaluateonexit.EvaluateOnExit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluateOnExit') }})
    
