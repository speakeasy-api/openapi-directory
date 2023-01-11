import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsec2instanceviolation as shared_awsec2instanceviolation
from ..shared import awsec2networkinterfaceviolation as shared_awsec2networkinterfaceviolation
from ..shared import awsvpcsecuritygroupviolation as shared_awsvpcsecuritygroupviolation
from ..shared import dnsduplicaterulegroupviolation as shared_dnsduplicaterulegroupviolation
from ..shared import dnsrulegrouplimitexceededviolation as shared_dnsrulegrouplimitexceededviolation
from ..shared import dnsrulegrouppriorityconflictviolation as shared_dnsrulegrouppriorityconflictviolation
from ..shared import networkfirewallblackholeroutedetectedviolation as shared_networkfirewallblackholeroutedetectedviolation
from ..shared import networkfirewallinternettrafficnotinspectedviolation as shared_networkfirewallinternettrafficnotinspectedviolation
from ..shared import networkfirewallinvalidrouteconfigurationviolation as shared_networkfirewallinvalidrouteconfigurationviolation
from ..shared import networkfirewallmissingexpectedrtviolation as shared_networkfirewallmissingexpectedrtviolation
from ..shared import networkfirewallmissingexpectedroutesviolation as shared_networkfirewallmissingexpectedroutesviolation
from ..shared import networkfirewallmissingfirewallviolation as shared_networkfirewallmissingfirewallviolation
from ..shared import networkfirewallmissingsubnetviolation as shared_networkfirewallmissingsubnetviolation
from ..shared import networkfirewallpolicymodifiedviolation as shared_networkfirewallpolicymodifiedviolation
from ..shared import networkfirewallunexpectedfirewallroutesviolation as shared_networkfirewallunexpectedfirewallroutesviolation
from ..shared import networkfirewallunexpectedgatewayroutesviolation as shared_networkfirewallunexpectedgatewayroutesviolation
from ..shared import possibleremediationactions as shared_possibleremediationactions


@dataclass_json
@dataclasses.dataclass
class ResourceViolation:
    r"""ResourceViolation
    Violation detail based on resource type.
    """
    
    aws_ec2_instance_violation: Optional[shared_awsec2instanceviolation.AwsEc2InstanceViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2InstanceViolation') }})
    aws_ec2_network_interface_violation: Optional[shared_awsec2networkinterfaceviolation.AwsEc2NetworkInterfaceViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2NetworkInterfaceViolation') }})
    aws_vpc_security_group_violation: Optional[shared_awsvpcsecuritygroupviolation.AwsVpcSecurityGroupViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsVPCSecurityGroupViolation') }})
    dns_duplicate_rule_group_violation: Optional[shared_dnsduplicaterulegroupviolation.DNSDuplicateRuleGroupViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsDuplicateRuleGroupViolation') }})
    dns_rule_group_limit_exceeded_violation: Optional[shared_dnsrulegrouplimitexceededviolation.DNSRuleGroupLimitExceededViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRuleGroupLimitExceededViolation') }})
    dns_rule_group_priority_conflict_violation: Optional[shared_dnsrulegrouppriorityconflictviolation.DNSRuleGroupPriorityConflictViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRuleGroupPriorityConflictViolation') }})
    network_firewall_black_hole_route_detected_violation: Optional[shared_networkfirewallblackholeroutedetectedviolation.NetworkFirewallBlackHoleRouteDetectedViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallBlackHoleRouteDetectedViolation') }})
    network_firewall_internet_traffic_not_inspected_violation: Optional[shared_networkfirewallinternettrafficnotinspectedviolation.NetworkFirewallInternetTrafficNotInspectedViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallInternetTrafficNotInspectedViolation') }})
    network_firewall_invalid_route_configuration_violation: Optional[shared_networkfirewallinvalidrouteconfigurationviolation.NetworkFirewallInvalidRouteConfigurationViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallInvalidRouteConfigurationViolation') }})
    network_firewall_missing_expected_rt_violation: Optional[shared_networkfirewallmissingexpectedrtviolation.NetworkFirewallMissingExpectedRtViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallMissingExpectedRTViolation') }})
    network_firewall_missing_expected_routes_violation: Optional[shared_networkfirewallmissingexpectedroutesviolation.NetworkFirewallMissingExpectedRoutesViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallMissingExpectedRoutesViolation') }})
    network_firewall_missing_firewall_violation: Optional[shared_networkfirewallmissingfirewallviolation.NetworkFirewallMissingFirewallViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallMissingFirewallViolation') }})
    network_firewall_missing_subnet_violation: Optional[shared_networkfirewallmissingsubnetviolation.NetworkFirewallMissingSubnetViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallMissingSubnetViolation') }})
    network_firewall_policy_modified_violation: Optional[shared_networkfirewallpolicymodifiedviolation.NetworkFirewallPolicyModifiedViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallPolicyModifiedViolation') }})
    network_firewall_unexpected_firewall_routes_violation: Optional[shared_networkfirewallunexpectedfirewallroutesviolation.NetworkFirewallUnexpectedFirewallRoutesViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallUnexpectedFirewallRoutesViolation') }})
    network_firewall_unexpected_gateway_routes_violation: Optional[shared_networkfirewallunexpectedgatewayroutesviolation.NetworkFirewallUnexpectedGatewayRoutesViolation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkFirewallUnexpectedGatewayRoutesViolation') }})
    possible_remediation_actions: Optional[shared_possibleremediationactions.PossibleRemediationActions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PossibleRemediationActions') }})
    
