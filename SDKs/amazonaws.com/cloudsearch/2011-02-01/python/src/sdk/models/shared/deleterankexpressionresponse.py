import dataclasses
from ..shared import rankexpressionstatus as shared_rankexpressionstatus


@dataclasses.dataclass
class DeleteRankExpressionResponse:
    r"""DeleteRankExpressionResponse
    A response message that contains the status of a deleted <code>RankExpression</code>.
    """
    
    rank_expression: shared_rankexpressionstatus.RankExpressionStatus = dataclasses.field()
    
