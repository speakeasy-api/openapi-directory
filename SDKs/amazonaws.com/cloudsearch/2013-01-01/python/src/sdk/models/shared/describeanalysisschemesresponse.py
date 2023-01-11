import dataclasses
from ..shared import analysisschemestatus as shared_analysisschemestatus


@dataclasses.dataclass
class DescribeAnalysisSchemesResponse:
    r"""DescribeAnalysisSchemesResponse
    The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.
    """
    
    analysis_schemes: list[shared_analysisschemestatus.AnalysisSchemeStatus] = dataclasses.field()
    
