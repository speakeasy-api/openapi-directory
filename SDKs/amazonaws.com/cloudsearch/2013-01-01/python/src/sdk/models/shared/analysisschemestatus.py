import dataclasses
from ..shared import analysisscheme as shared_analysisscheme
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class AnalysisSchemeStatus:
    r"""AnalysisSchemeStatus
    The status and configuration of an <code>AnalysisScheme</code>.
    """
    
    options: shared_analysisscheme.AnalysisScheme = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
