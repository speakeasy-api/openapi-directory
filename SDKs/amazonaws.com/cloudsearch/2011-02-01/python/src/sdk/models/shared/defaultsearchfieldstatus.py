import dataclasses
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class DefaultSearchFieldStatus:
    r"""DefaultSearchFieldStatus
    The value of the <code>DefaultSearchField</code> configured for this search domain and its current status.
    """
    
    options: str = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
