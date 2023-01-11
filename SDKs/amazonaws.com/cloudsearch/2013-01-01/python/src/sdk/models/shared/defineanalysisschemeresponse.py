import dataclasses
from ..shared import analysisschemestatus as shared_analysisschemestatus


@dataclasses.dataclass
class DefineAnalysisSchemeResponse:
    r"""DefineAnalysisSchemeResponse
    The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.
    """
    
    analysis_scheme: shared_analysisschemestatus.AnalysisSchemeStatus = dataclasses.field()
    
