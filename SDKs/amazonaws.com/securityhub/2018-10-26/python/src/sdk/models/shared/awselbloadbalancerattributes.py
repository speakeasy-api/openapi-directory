import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awselbloadbalanceraccesslog as shared_awselbloadbalanceraccesslog
from ..shared import awselbloadbalancerconnectiondraining as shared_awselbloadbalancerconnectiondraining
from ..shared import awselbloadbalancerconnectionsettings as shared_awselbloadbalancerconnectionsettings
from ..shared import awselbloadbalancercrosszoneloadbalancing as shared_awselbloadbalancercrosszoneloadbalancing


@dataclass_json
@dataclasses.dataclass
class AwsElbLoadBalancerAttributes:
    r"""AwsElbLoadBalancerAttributes
    Contains attributes for the load balancer.
    """
    
    access_log: Optional[shared_awselbloadbalanceraccesslog.AwsElbLoadBalancerAccessLog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLog') }})
    connection_draining: Optional[shared_awselbloadbalancerconnectiondraining.AwsElbLoadBalancerConnectionDraining] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionDraining') }})
    connection_settings: Optional[shared_awselbloadbalancerconnectionsettings.AwsElbLoadBalancerConnectionSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionSettings') }})
    cross_zone_load_balancing: Optional[shared_awselbloadbalancercrosszoneloadbalancing.AwsElbLoadBalancerCrossZoneLoadBalancing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrossZoneLoadBalancing') }})
    
