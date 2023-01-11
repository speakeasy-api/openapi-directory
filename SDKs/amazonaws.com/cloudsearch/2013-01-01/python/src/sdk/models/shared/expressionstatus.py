import dataclasses
from ..shared import expression as shared_expression
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class ExpressionStatus:
    r"""ExpressionStatus
    The value of an <code>Expression</code> and its current status.
    """
    
    options: shared_expression.Expression = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
