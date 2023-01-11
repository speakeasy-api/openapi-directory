import dataclasses
from typing import Optional
from ..shared import distributionlist as shared_distributionlist


@dataclasses.dataclass
class ListDistributionsResult:
    r"""ListDistributionsResult
    The returned result of the corresponding request. 
    """
    
    distribution_list: Optional[shared_distributionlist.DistributionList] = dataclasses.field(default=None)
    
