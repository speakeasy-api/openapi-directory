import dataclasses
from ..shared import stopwordoptionsstatus as shared_stopwordoptionsstatus


@dataclasses.dataclass
class DescribeStopwordOptionsResponse:
    r"""DescribeStopwordOptionsResponse
    A response message that contains the stopword options for a search domain.
    """
    
    stopwords: shared_stopwordoptionsstatus.StopwordOptionsStatus = dataclasses.field()
    
