import dataclasses
from ..shared import expressionstatus as shared_expressionstatus


@dataclasses.dataclass
class DescribeExpressionsResponse:
    r"""DescribeExpressionsResponse
    The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.
    """
    
    expressions: list[shared_expressionstatus.ExpressionStatus] = dataclasses.field()
    
