import dataclasses
from typing import Optional
from ..shared import loadbalancerdescription as shared_loadbalancerdescription


@dataclasses.dataclass
class EnvironmentResourcesDescription:
    r"""EnvironmentResourcesDescription
    Describes the AWS resources in use by this environment. This data is not live data.
    """
    
    load_balancer: Optional[shared_loadbalancerdescription.LoadBalancerDescription] = dataclasses.field(default=None)
    
