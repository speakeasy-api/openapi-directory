import dataclasses
from ..shared import analysisschemestatus as shared_analysisschemestatus


@dataclasses.dataclass
class DeleteAnalysisSchemeResponse:
    r"""DeleteAnalysisSchemeResponse
    The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.
    """
    
    analysis_scheme: shared_analysisschemestatus.AnalysisSchemeStatus = dataclasses.field()
    
