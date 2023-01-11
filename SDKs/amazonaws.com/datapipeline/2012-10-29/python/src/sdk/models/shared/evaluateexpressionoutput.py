import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EvaluateExpressionOutput:
    r"""EvaluateExpressionOutput
    Contains the output of EvaluateExpression.
    """
    
    evaluated_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatedExpression') }})
    
