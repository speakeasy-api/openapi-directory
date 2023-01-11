import dataclasses
from typing import Optional
from ..shared import streamingdistributionlist as shared_streamingdistributionlist


@dataclasses.dataclass
class ListStreamingDistributionsResult:
    r"""ListStreamingDistributionsResult
    The returned result of the corresponding request. 
    """
    
    streaming_distribution_list: Optional[shared_streamingdistributionlist.StreamingDistributionList] = dataclasses.field(default=None)
    
