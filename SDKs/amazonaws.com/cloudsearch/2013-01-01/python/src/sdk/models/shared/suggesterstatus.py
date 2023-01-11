import dataclasses
from ..shared import suggester as shared_suggester
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class SuggesterStatus:
    r"""SuggesterStatus
    The value of a <code>Suggester</code> and its current status.
    """
    
    options: shared_suggester.Suggester = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
