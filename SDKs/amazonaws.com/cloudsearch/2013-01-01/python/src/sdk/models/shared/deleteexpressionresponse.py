import dataclasses
from ..shared import expressionstatus as shared_expressionstatus


@dataclasses.dataclass
class DeleteExpressionResponse:
    r"""DeleteExpressionResponse
    The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.
    """
    
    expression: shared_expressionstatus.ExpressionStatus = dataclasses.field()
    
