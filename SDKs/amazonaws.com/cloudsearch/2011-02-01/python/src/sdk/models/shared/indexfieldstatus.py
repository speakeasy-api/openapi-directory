import dataclasses
from ..shared import indexfield as shared_indexfield
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class IndexFieldStatus:
    r"""IndexFieldStatus
    The value of an <code>IndexField</code> and its current status.
    """
    
    options: shared_indexfield.IndexField = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
