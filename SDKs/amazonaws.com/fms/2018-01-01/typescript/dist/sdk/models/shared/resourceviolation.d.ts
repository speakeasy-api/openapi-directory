import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2InstanceViolation } from "./awsec2instanceviolation";
import { AwsEc2NetworkInterfaceViolation } from "./awsec2networkinterfaceviolation";
import { AwsVPCSecurityGroupViolation } from "./awsvpcsecuritygroupviolation";
import { DnsDuplicateRuleGroupViolation } from "./dnsduplicaterulegroupviolation";
import { DnsRuleGroupLimitExceededViolation } from "./dnsrulegrouplimitexceededviolation";
import { DnsRuleGroupPriorityConflictViolation } from "./dnsrulegrouppriorityconflictviolation";
import { FirewallSubnetIsOutOfScopeViolation } from "./firewallsubnetisoutofscopeviolation";
import { FirewallSubnetMissingVPCEndpointViolation } from "./firewallsubnetmissingvpcendpointviolation";
import { NetworkFirewallBlackHoleRouteDetectedViolation } from "./networkfirewallblackholeroutedetectedviolation";
import { NetworkFirewallInternetTrafficNotInspectedViolation } from "./networkfirewallinternettrafficnotinspectedviolation";
import { NetworkFirewallInvalidRouteConfigurationViolation } from "./networkfirewallinvalidrouteconfigurationviolation";
import { NetworkFirewallMissingExpectedRoutesViolation } from "./networkfirewallmissingexpectedroutesviolation";
import { NetworkFirewallMissingExpectedRTViolation } from "./networkfirewallmissingexpectedrtviolation";
import { NetworkFirewallMissingFirewallViolation } from "./networkfirewallmissingfirewallviolation";
import { NetworkFirewallMissingSubnetViolation } from "./networkfirewallmissingsubnetviolation";
import { NetworkFirewallPolicyModifiedViolation } from "./networkfirewallpolicymodifiedviolation";
import { NetworkFirewallUnexpectedFirewallRoutesViolation } from "./networkfirewallunexpectedfirewallroutesviolation";
import { NetworkFirewallUnexpectedGatewayRoutesViolation } from "./networkfirewallunexpectedgatewayroutesviolation";
import { PossibleRemediationActions } from "./possibleremediationactions";
import { RouteHasOutOfScopeEndpointViolation } from "./routehasoutofscopeendpointviolation";
import { ThirdPartyFirewallMissingExpectedRouteTableViolation } from "./thirdpartyfirewallmissingexpectedroutetableviolation";
import { ThirdPartyFirewallMissingFirewallViolation } from "./thirdpartyfirewallmissingfirewallviolation";
import { ThirdPartyFirewallMissingSubnetViolation } from "./thirdpartyfirewallmissingsubnetviolation";
/**
 * Violation detail based on resource type.
 */
export declare class ResourceViolation extends SpeakeasyBase {
    awsEc2InstanceViolation?: AwsEc2InstanceViolation;
    awsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;
    awsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation;
    dnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation;
    dnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation;
    dnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation;
    firewallSubnetIsOutOfScopeViolation?: FirewallSubnetIsOutOfScopeViolation;
    firewallSubnetMissingVPCEndpointViolation?: FirewallSubnetMissingVPCEndpointViolation;
    /**
     * Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
     */
    networkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation;
    networkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation;
    networkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation;
    networkFirewallMissingExpectedRTViolation?: NetworkFirewallMissingExpectedRTViolation;
    networkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation;
    networkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;
    networkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;
    networkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;
    networkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation;
    networkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation;
    possibleRemediationActions?: PossibleRemediationActions;
    routeHasOutOfScopeEndpointViolation?: RouteHasOutOfScopeEndpointViolation;
    thirdPartyFirewallMissingExpectedRouteTableViolation?: ThirdPartyFirewallMissingExpectedRouteTableViolation;
    thirdPartyFirewallMissingFirewallViolation?: ThirdPartyFirewallMissingFirewallViolation;
    thirdPartyFirewallMissingSubnetViolation?: ThirdPartyFirewallMissingSubnetViolation;
}
