import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import rankexpressionstatus as shared_rankexpressionstatus


@dataclasses.dataclass
class DefineRankExpressionResponse:
    r"""DefineRankExpressionResponse
    A response message that contains the status of an updated <code>RankExpression</code>.
    """
    
    rank_expression: shared_rankexpressionstatus.RankExpressionStatus = dataclasses.field()
    
