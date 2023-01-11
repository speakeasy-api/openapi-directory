import dataclasses
from typing import Optional
from ..shared import accesslog as shared_accesslog
from ..shared import additionalattribute as shared_additionalattribute
from ..shared import connectiondraining as shared_connectiondraining
from ..shared import connectionsettings as shared_connectionsettings
from ..shared import crosszoneloadbalancing as shared_crosszoneloadbalancing


@dataclasses.dataclass
class LoadBalancerAttributes:
    r"""LoadBalancerAttributes
    The attributes for a load balancer.
    """
    
    access_log: Optional[shared_accesslog.AccessLog] = dataclasses.field(default=None)
    additional_attributes: Optional[list[shared_additionalattribute.AdditionalAttribute]] = dataclasses.field(default=None)
    connection_draining: Optional[shared_connectiondraining.ConnectionDraining] = dataclasses.field(default=None)
    connection_settings: Optional[shared_connectionsettings.ConnectionSettings] = dataclasses.field(default=None)
    cross_zone_load_balancing: Optional[shared_crosszoneloadbalancing.CrossZoneLoadBalancing] = dataclasses.field(default=None)
    
