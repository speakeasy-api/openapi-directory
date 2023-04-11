import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The path component.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsLoadBalancers extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * Describes the rule options for a stateful rule group.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsRuleGroupRuleOptionsPairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleOptions?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions[];
}
/**
 * Describes the type of a stateful rule group.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsRuleGroupTypePairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleGroupType?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * The VPC endpoint service.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsVpcEndpointService extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an additional detail for a path analysis. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/additional-detail-codes.html">Reachability Analyzer additional detail codes</a>.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetails extends SpeakeasyBase {
    additionalDetailType?: string;
    component?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsComponent;
    loadBalancers?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsLoadBalancers[];
    ruleGroupRuleOptionsPairs?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsRuleGroupRuleOptionsPairs[];
    ruleGroupTypePairs?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsRuleGroupTypePairs[];
    ruleOptions?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsRuleOptions[];
    serviceName?: string;
    vpcEndpointService?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetailsVpcEndpointService;
}
/**
 * The resource to which the path component is attached.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The component.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network ACL.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsAcl extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The resource to which the component is attached.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The listener for a Classic Load Balancer.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsClassicLoadBalancerListener extends SpeakeasyBase {
    instancePort?: number;
    loadBalancerPort?: number;
}
/**
 * The component.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The customer gateway.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsCustomerGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsDestination extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * The route table.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsIngressRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The internet gateway.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsInternetGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Information about the instance.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsLoadBalancerTargetInstance extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The target.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsLoadBalancerTarget extends SpeakeasyBase {
    address?: string;
    availabilityZone?: string;
    instance?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsLoadBalancerTargetInstance;
    port?: number;
}
/**
 * The target group.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsLoadBalancerTargetGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsLoadBalancerTargetGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The NAT gateway.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsNatGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network interface.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsNetworkInterface extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The prefix list.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsPrefixList extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table route.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsRouteTableRoute extends SpeakeasyBase {
    carrierGatewayId?: string;
    coreNetworkArn?: string;
    destinationCidr?: string;
    destinationPrefixListId?: string;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    localGatewayId?: string;
    natGatewayId?: string;
    networkInterfaceId?: string;
    origin?: string;
    state?: string;
    transitGatewayId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * The security group.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSecurityGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The port range.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * Describes a path component.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSecurityGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The source VPC.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table for the subnet.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSubnetRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway attachment.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsTransitGatewayAttachment extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsTransitGatewayRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table route.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsTransitGatewayRouteTableRoute extends SpeakeasyBase {
    attachmentId?: string;
    destinationCidr?: string;
    prefixListId?: string;
    resourceId?: string;
    resourceType?: string;
    routeOrigin?: string;
    state?: string;
}
/**
 * The component VPC.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC endpoint.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpcEndpoint extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC peering connection.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpcPeeringConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN connection.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpnConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN gateway.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpnGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanations extends SpeakeasyBase {
    acl?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsAcl;
    aclRule?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsAclRule;
    address?: string;
    addresses?: string[];
    attachedTo?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsAttachedTo;
    availabilityZones?: string[];
    cidrs?: string[];
    classicLoadBalancerListener?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsClassicLoadBalancerListener;
    component?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsComponent;
    componentAccount?: string;
    componentRegion?: string;
    customerGateway?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsCustomerGateway;
    destination?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsDestination;
    destinationVpc?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsDestinationVpc;
    direction?: string;
    elasticLoadBalancerListener?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsElasticLoadBalancerListener;
    explanationCode?: string;
    firewallStatefulRule?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatefulRule;
    firewallStatelessRule?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsFirewallStatelessRule;
    ingressRouteTable?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsIngressRouteTable;
    internetGateway?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsInternetGateway;
    loadBalancerArn?: string;
    loadBalancerListenerPort?: number;
    loadBalancerTarget?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsLoadBalancerTarget;
    loadBalancerTargetGroup?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsLoadBalancerTargetGroup;
    loadBalancerTargetGroups?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsLoadBalancerTargetGroups[];
    loadBalancerTargetPort?: number;
    missingComponent?: string;
    natGateway?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsNatGateway;
    networkInterface?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsNetworkInterface;
    packetField?: string;
    port?: number;
    portRanges?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsPortRanges[];
    prefixList?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsPrefixList;
    protocols?: string[];
    routeTable?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsRouteTable;
    routeTableRoute?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsRouteTableRoute;
    securityGroup?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSecurityGroup;
    securityGroupRule?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSecurityGroupRule;
    securityGroups?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSecurityGroups[];
    sourceVpc?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSourceVpc;
    state?: string;
    subnet?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSubnet;
    subnetRouteTable?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsSubnetRouteTable;
    transitGateway?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsTransitGateway;
    transitGatewayAttachment?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsTransitGatewayAttachment;
    transitGatewayRouteTable?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsTransitGatewayRouteTable;
    transitGatewayRouteTableRoute?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsTransitGatewayRouteTableRoute;
    vpc?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpc;
    vpcEndpoint?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpcEndpoint;
    vpcPeeringConnection?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpcPeeringConnection;
    vpnConnection?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpnConnection;
    vpnGateway?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanationsVpnGateway;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsInboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsInboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The inbound header.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsInboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsInboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsInboundHeaderSourcePortRanges[];
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsOutboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsOutboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The outbound header.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsOutboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsOutboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsOutboundHeaderSourcePortRanges[];
}
/**
 * The route table route.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsRouteTableRoute extends SpeakeasyBase {
    carrierGatewayId?: string;
    coreNetworkArn?: string;
    destinationCidr?: string;
    destinationPrefixListId?: string;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    localGatewayId?: string;
    natGatewayId?: string;
    networkInterfaceId?: string;
    origin?: string;
    state?: string;
    transitGatewayId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * The port range.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * The source VPC.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route in a transit gateway route table.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsTransitGatewayRouteTableRoute extends SpeakeasyBase {
    attachmentId?: string;
    destinationCidr?: string;
    prefixListId?: string;
    resourceId?: string;
    resourceType?: string;
    routeOrigin?: string;
    state?: string;
}
/**
 * The component VPC.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponents extends SpeakeasyBase {
    aclRule?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAclRule;
    additionalDetails?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAdditionalDetails[];
    attachedTo?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsAttachedTo;
    component?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsComponent;
    destinationVpc?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsDestinationVpc;
    elasticLoadBalancerListener?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsElasticLoadBalancerListener;
    explanations?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsExplanations[];
    firewallStatefulRule?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatefulRule;
    firewallStatelessRule?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsFirewallStatelessRule;
    inboundHeader?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsInboundHeader;
    outboundHeader?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsOutboundHeader;
    routeTableRoute?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsRouteTableRoute;
    securityGroupRule?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsSecurityGroupRule;
    sequenceNumber?: number;
    serviceName?: string;
    sourceVpc?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsSourceVpc;
    subnet?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsSubnet;
    transitGateway?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsTransitGateway;
    transitGatewayRouteTableRoute?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsTransitGatewayRouteTableRoute;
    vpc?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponentsVpc;
}
/**
 * Describes a finding for a Network Access Scope.
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindings extends SpeakeasyBase {
    findingComponents?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindingsFindingComponents[];
    findingId?: string;
    networkInsightsAccessScopeAnalysisId?: string;
    networkInsightsAccessScopeId?: string;
}
/**
 * The status of Network Access Scope Analysis.
 */
export declare enum GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisStatusEnum {
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Success
 */
export declare class GetNetworkInsightsAccessScopeAnalysisFindingsResult extends SpeakeasyBase {
    analysisFindings?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisFindings[];
    analysisStatus?: GetNetworkInsightsAccessScopeAnalysisFindingsResultAnalysisStatusEnum;
    networkInsightsAccessScopeAnalysisId?: string;
    nextToken?: string;
}
