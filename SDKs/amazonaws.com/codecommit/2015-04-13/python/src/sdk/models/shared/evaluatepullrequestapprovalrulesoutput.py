import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import evaluation as shared_evaluation


@dataclass_json
@dataclasses.dataclass
class EvaluatePullRequestApprovalRulesOutput:
    evaluation: shared_evaluation.Evaluation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluation') }})
    
