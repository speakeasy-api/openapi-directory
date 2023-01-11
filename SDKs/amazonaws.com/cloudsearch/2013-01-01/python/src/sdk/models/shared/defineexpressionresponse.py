import dataclasses
from ..shared import expressionstatus as shared_expressionstatus


@dataclasses.dataclass
class DefineExpressionResponse:
    r"""DefineExpressionResponse
    The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.
    """
    
    expression: shared_expressionstatus.ExpressionStatus = dataclasses.field()
    
