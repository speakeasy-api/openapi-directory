import dataclasses
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class StemmingOptionsStatus:
    r"""StemmingOptionsStatus
    The stemming options configured for this search domain and the current status of those options.
    """
    
    options: str = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
