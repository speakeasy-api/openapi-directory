import dataclasses
from ..shared import rankexpressionstatus as shared_rankexpressionstatus


@dataclasses.dataclass
class DescribeRankExpressionsResponse:
    r"""DescribeRankExpressionsResponse
    A response message that contains the rank expressions for a search domain.
    """
    
    rank_expressions: list[shared_rankexpressionstatus.RankExpressionStatus] = dataclasses.field()
    
