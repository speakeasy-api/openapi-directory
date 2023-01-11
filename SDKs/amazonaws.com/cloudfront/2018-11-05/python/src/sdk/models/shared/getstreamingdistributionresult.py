import dataclasses
from typing import Optional
from ..shared import streamingdistribution as shared_streamingdistribution


@dataclasses.dataclass
class GetStreamingDistributionResult:
    r"""GetStreamingDistributionResult
    The returned result of the corresponding request.
    """
    
    streaming_distribution: Optional[shared_streamingdistribution.StreamingDistribution] = dataclasses.field(default=None)
    
