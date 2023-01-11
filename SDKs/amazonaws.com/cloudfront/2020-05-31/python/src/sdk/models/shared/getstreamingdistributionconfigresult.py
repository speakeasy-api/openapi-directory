import dataclasses
from typing import Optional
from ..shared import streamingdistributionconfig as shared_streamingdistributionconfig


@dataclasses.dataclass
class GetStreamingDistributionConfigResult:
    r"""GetStreamingDistributionConfigResult
    The returned result of the corresponding request.
    """
    
    streaming_distribution_config: Optional[shared_streamingdistributionconfig.StreamingDistributionConfig] = dataclasses.field(default=None)
    
