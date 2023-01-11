import dataclasses
from typing import Optional
from ..shared import distributionidlist as shared_distributionidlist


@dataclasses.dataclass
class ListDistributionsByCachePolicyIDResult:
    distribution_id_list: Optional[shared_distributionidlist.DistributionIDList] = dataclasses.field(default=None)
    
