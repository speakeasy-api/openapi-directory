import dataclasses
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class SynonymOptionsStatus:
    r"""SynonymOptionsStatus
    The synonym options configured for this search domain and the current status of those options.
    """
    
    options: str = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
