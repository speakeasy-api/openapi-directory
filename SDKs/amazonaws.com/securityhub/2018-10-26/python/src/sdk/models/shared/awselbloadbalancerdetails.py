import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awselbloadbalancerbackendserverdescription as shared_awselbloadbalancerbackendserverdescription
from ..shared import awselbloadbalancerhealthcheck as shared_awselbloadbalancerhealthcheck
from ..shared import awselbloadbalancerinstance as shared_awselbloadbalancerinstance
from ..shared import awselbloadbalancerlistenerdescription as shared_awselbloadbalancerlistenerdescription
from ..shared import awselbloadbalancerattributes as shared_awselbloadbalancerattributes
from ..shared import awselbloadbalancerpolicies as shared_awselbloadbalancerpolicies
from ..shared import awselbloadbalancersourcesecuritygroup as shared_awselbloadbalancersourcesecuritygroup


@dataclass_json
@dataclasses.dataclass
class AwsElbLoadBalancerDetails:
    r"""AwsElbLoadBalancerDetails
    Contains details about a Classic Load Balancer.
    """
    
    availability_zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    backend_server_descriptions: Optional[list[shared_awselbloadbalancerbackendserverdescription.AwsElbLoadBalancerBackendServerDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackendServerDescriptions') }})
    canonical_hosted_zone_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanonicalHostedZoneName') }})
    canonical_hosted_zone_name_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanonicalHostedZoneNameID') }})
    created_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime') }})
    dns_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsName') }})
    health_check: Optional[shared_awselbloadbalancerhealthcheck.AwsElbLoadBalancerHealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheck') }})
    instances: Optional[list[shared_awselbloadbalancerinstance.AwsElbLoadBalancerInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    listener_descriptions: Optional[list[shared_awselbloadbalancerlistenerdescription.AwsElbLoadBalancerListenerDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerDescriptions') }})
    load_balancer_attributes: Optional[shared_awselbloadbalancerattributes.AwsElbLoadBalancerAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBalancerAttributes') }})
    load_balancer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBalancerName') }})
    policies: Optional[shared_awselbloadbalancerpolicies.AwsElbLoadBalancerPolicies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    scheme: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scheme') }})
    security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    source_security_group: Optional[shared_awselbloadbalancersourcesecuritygroup.AwsElbLoadBalancerSourceSecurityGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceSecurityGroup') }})
    subnets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
