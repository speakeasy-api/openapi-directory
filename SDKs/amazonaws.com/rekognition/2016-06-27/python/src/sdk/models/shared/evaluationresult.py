import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import summary as shared_summary


@dataclass_json
@dataclasses.dataclass
class EvaluationResult:
    r"""EvaluationResult
    The evaluation results for the training of a model.
    """
    
    f1_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('F1Score') }})
    summary: Optional[shared_summary.Summary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
