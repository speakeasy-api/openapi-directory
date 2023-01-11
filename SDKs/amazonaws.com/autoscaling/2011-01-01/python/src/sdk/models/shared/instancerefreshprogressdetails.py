import dataclasses
from typing import Optional
from ..shared import instancerefreshlivepoolprogress as shared_instancerefreshlivepoolprogress
from ..shared import instancerefreshwarmpoolprogress as shared_instancerefreshwarmpoolprogress


@dataclasses.dataclass
class InstanceRefreshProgressDetails:
    r"""InstanceRefreshProgressDetails
    Reports the progress of an instance refresh on an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).
    """
    
    live_pool_progress: Optional[shared_instancerefreshlivepoolprogress.InstanceRefreshLivePoolProgress] = dataclasses.field(default=None)
    warm_pool_progress: Optional[shared_instancerefreshwarmpoolprogress.InstanceRefreshWarmPoolProgress] = dataclasses.field(default=None)
    
