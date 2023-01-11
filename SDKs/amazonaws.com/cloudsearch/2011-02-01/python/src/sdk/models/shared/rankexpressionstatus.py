import dataclasses
from ..shared import namedrankexpression as shared_namedrankexpression
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class RankExpressionStatus:
    r"""RankExpressionStatus
    The value of a <code>RankExpression</code> and its current status.
    """
    
    options: shared_namedrankexpression.NamedRankExpression = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
