import dataclasses
from typing import Optional
from ..shared import distributionidlist as shared_distributionidlist


@dataclasses.dataclass
class ListDistributionsByOriginRequestPolicyIDResult:
    distribution_id_list: Optional[shared_distributionidlist.DistributionIDList] = dataclasses.field(default=None)
    
