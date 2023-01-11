import dataclasses
from ..shared import stemmingoptionsstatus as shared_stemmingoptionsstatus


@dataclasses.dataclass
class DescribeStemmingOptionsResponse:
    r"""DescribeStemmingOptionsResponse
    A response message that contains the stemming options for a search domain.
    """
    
    stems: shared_stemmingoptionsstatus.StemmingOptionsStatus = dataclasses.field()
    
