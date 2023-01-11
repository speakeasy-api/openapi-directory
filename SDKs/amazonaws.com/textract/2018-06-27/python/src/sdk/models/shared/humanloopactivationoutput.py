import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HumanLoopActivationOutput:
    r"""HumanLoopActivationOutput
    Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.
    """
    
    human_loop_activation_conditions_evaluation_results: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationConditionsEvaluationResults') }})
    human_loop_activation_reasons: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationReasons') }})
    human_loop_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopArn') }})
    
