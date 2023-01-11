import dataclasses
from typing import Optional
from ..shared import distributionlist as shared_distributionlist


@dataclasses.dataclass
class ListDistributionsByWebACLIDResult:
    r"""ListDistributionsByWebACLIDResult
    The response to a request to list the distributions that are associated with a specified AWS WAF web ACL. 
    """
    
    distribution_list: Optional[shared_distributionlist.DistributionList] = dataclasses.field(default=None)
    
