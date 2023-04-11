import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an potential intermediate component of a feasible path.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesAlternatePathHints extends SpeakeasyBase {
    componentArn?: string;
    componentId?: string;
}
/**
 * The network ACL.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsAcl extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The resource to which the component is attached.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The listener for a Classic Load Balancer.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsClassicLoadBalancerListener extends SpeakeasyBase {
    instancePort?: number;
    loadBalancerPort?: number;
}
/**
 * The component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The customer gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsCustomerGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsDestination extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * The route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsIngressRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The internet gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsInternetGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Information about the instance.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsLoadBalancerTargetInstance extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The target.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsLoadBalancerTarget extends SpeakeasyBase {
    address?: string;
    availabilityZone?: string;
    instance?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsLoadBalancerTargetInstance;
    port?: number;
}
/**
 * The target group.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsLoadBalancerTargetGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsLoadBalancerTargetGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The NAT gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsNatGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network interface.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsNetworkInterface extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The prefix list.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsPrefixList extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table route.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSecurityGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The port range.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSecurityGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The source VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table for the subnet.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSubnetRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway attachment.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsTransitGatewayAttachment extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsTransitGatewayRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table route.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC endpoint.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpcEndpoint extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC peering connection.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpcPeeringConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN connection.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpnConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpnGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanations extends SpeakeasyBase {
    acl?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsAcl;
    aclRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsAclRule;
    address?: string;
    addresses?: string[];
    attachedTo?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsAttachedTo;
    availabilityZones?: string[];
    cidrs?: string[];
    classicLoadBalancerListener?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsClassicLoadBalancerListener;
    component?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsComponent;
    componentAccount?: string;
    componentRegion?: string;
    customerGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsCustomerGateway;
    destination?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsDestination;
    destinationVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsDestinationVpc;
    direction?: string;
    elasticLoadBalancerListener?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsElasticLoadBalancerListener;
    explanationCode?: string;
    firewallStatefulRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatefulRule;
    firewallStatelessRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsFirewallStatelessRule;
    ingressRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsIngressRouteTable;
    internetGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsInternetGateway;
    loadBalancerArn?: string;
    loadBalancerListenerPort?: number;
    loadBalancerTarget?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsLoadBalancerTarget;
    loadBalancerTargetGroup?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsLoadBalancerTargetGroup;
    loadBalancerTargetGroups?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsLoadBalancerTargetGroups[];
    loadBalancerTargetPort?: number;
    missingComponent?: string;
    natGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsNatGateway;
    networkInterface?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsNetworkInterface;
    packetField?: string;
    port?: number;
    portRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsPortRanges[];
    prefixList?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsPrefixList;
    protocols?: string[];
    routeTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsRouteTable;
    routeTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsRouteTableRoute;
    securityGroup?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSecurityGroup;
    securityGroupRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSecurityGroupRule;
    securityGroups?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSecurityGroups[];
    sourceVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSourceVpc;
    state?: string;
    subnet?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSubnet;
    subnetRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsSubnetRouteTable;
    transitGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsTransitGateway;
    transitGatewayAttachment?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsTransitGatewayAttachment;
    transitGatewayRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsTransitGatewayRouteTable;
    transitGatewayRouteTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsTransitGatewayRouteTableRoute;
    vpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpc;
    vpcEndpoint?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpcEndpoint;
    vpcPeeringConnection?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpcPeeringConnection;
    vpnConnection?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpnConnection;
    vpnGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanationsVpnGateway;
}
/**
 * The range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsLoadBalancers extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * Describes the rule options for a stateful rule group.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleOptions?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions[];
}
/**
 * Describes the type of a stateful rule group.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsRuleGroupTypePairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleGroupType?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * The VPC endpoint service.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsVpcEndpointService extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an additional detail for a path analysis. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/additional-detail-codes.html">Reachability Analyzer additional detail codes</a>.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetails extends SpeakeasyBase {
    additionalDetailType?: string;
    component?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsComponent;
    loadBalancers?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsLoadBalancers[];
    ruleGroupRuleOptionsPairs?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairs[];
    ruleGroupTypePairs?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsRuleGroupTypePairs[];
    ruleOptions?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsRuleOptions[];
    serviceName?: string;
    vpcEndpointService?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetailsVpcEndpointService;
}
/**
 * The resource to which the path component is attached.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network ACL.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsAcl extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The resource to which the component is attached.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The listener for a Classic Load Balancer.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsClassicLoadBalancerListener extends SpeakeasyBase {
    instancePort?: number;
    loadBalancerPort?: number;
}
/**
 * The component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The customer gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsCustomerGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsDestination extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * The route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsIngressRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The internet gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsInternetGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Information about the instance.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsLoadBalancerTargetInstance extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The target.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsLoadBalancerTarget extends SpeakeasyBase {
    address?: string;
    availabilityZone?: string;
    instance?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsLoadBalancerTargetInstance;
    port?: number;
}
/**
 * The target group.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsLoadBalancerTargetGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsLoadBalancerTargetGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The NAT gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsNatGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network interface.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsNetworkInterface extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The prefix list.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsPrefixList extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table route.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSecurityGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The port range.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSecurityGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The source VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table for the subnet.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSubnetRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway attachment.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsTransitGatewayAttachment extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsTransitGatewayRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table route.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC endpoint.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpcEndpoint extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC peering connection.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpcPeeringConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN connection.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpnConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpnGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanations extends SpeakeasyBase {
    acl?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsAcl;
    aclRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsAclRule;
    address?: string;
    addresses?: string[];
    attachedTo?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsAttachedTo;
    availabilityZones?: string[];
    cidrs?: string[];
    classicLoadBalancerListener?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsClassicLoadBalancerListener;
    component?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsComponent;
    componentAccount?: string;
    componentRegion?: string;
    customerGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsCustomerGateway;
    destination?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsDestination;
    destinationVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsDestinationVpc;
    direction?: string;
    elasticLoadBalancerListener?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsElasticLoadBalancerListener;
    explanationCode?: string;
    firewallStatefulRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatefulRule;
    firewallStatelessRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsFirewallStatelessRule;
    ingressRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsIngressRouteTable;
    internetGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsInternetGateway;
    loadBalancerArn?: string;
    loadBalancerListenerPort?: number;
    loadBalancerTarget?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsLoadBalancerTarget;
    loadBalancerTargetGroup?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsLoadBalancerTargetGroup;
    loadBalancerTargetGroups?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsLoadBalancerTargetGroups[];
    loadBalancerTargetPort?: number;
    missingComponent?: string;
    natGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsNatGateway;
    networkInterface?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsNetworkInterface;
    packetField?: string;
    port?: number;
    portRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsPortRanges[];
    prefixList?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsPrefixList;
    protocols?: string[];
    routeTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsRouteTable;
    routeTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsRouteTableRoute;
    securityGroup?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSecurityGroup;
    securityGroupRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSecurityGroupRule;
    securityGroups?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSecurityGroups[];
    sourceVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSourceVpc;
    state?: string;
    subnet?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSubnet;
    subnetRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsSubnetRouteTable;
    transitGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsTransitGateway;
    transitGatewayAttachment?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsTransitGatewayAttachment;
    transitGatewayRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsTransitGatewayRouteTable;
    transitGatewayRouteTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsTransitGatewayRouteTableRoute;
    vpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpc;
    vpcEndpoint?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpcEndpoint;
    vpcPeeringConnection?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpcPeeringConnection;
    vpnConnection?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpnConnection;
    vpnGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanationsVpnGateway;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsInboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsInboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The inbound header.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsInboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsInboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsInboundHeaderSourcePortRanges[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsOutboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsOutboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The outbound header.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsOutboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsOutboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsOutboundHeaderSourcePortRanges[];
}
/**
 * The route table route.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * The source VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route in a transit gateway route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponents extends SpeakeasyBase {
    aclRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAclRule;
    additionalDetails?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAdditionalDetails[];
    attachedTo?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsAttachedTo;
    component?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsComponent;
    destinationVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsDestinationVpc;
    elasticLoadBalancerListener?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsElasticLoadBalancerListener;
    explanations?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsExplanations[];
    firewallStatefulRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatefulRule;
    firewallStatelessRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsFirewallStatelessRule;
    inboundHeader?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsInboundHeader;
    outboundHeader?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsOutboundHeader;
    routeTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsRouteTableRoute;
    securityGroupRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsSecurityGroupRule;
    sequenceNumber?: number;
    serviceName?: string;
    sourceVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsSourceVpc;
    subnet?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsSubnet;
    transitGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsTransitGateway;
    transitGatewayRouteTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsTransitGatewayRouteTableRoute;
    vpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponentsVpc;
}
/**
 * The range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsLoadBalancers extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * Describes the rule options for a stateful rule group.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleOptions?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions[];
}
/**
 * Describes the type of a stateful rule group.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsRuleGroupTypePairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleGroupType?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * The VPC endpoint service.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsVpcEndpointService extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an additional detail for a path analysis. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/additional-detail-codes.html">Reachability Analyzer additional detail codes</a>.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetails extends SpeakeasyBase {
    additionalDetailType?: string;
    component?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsComponent;
    loadBalancers?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsLoadBalancers[];
    ruleGroupRuleOptionsPairs?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairs[];
    ruleGroupTypePairs?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsRuleGroupTypePairs[];
    ruleOptions?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsRuleOptions[];
    serviceName?: string;
    vpcEndpointService?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetailsVpcEndpointService;
}
/**
 * The resource to which the path component is attached.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network ACL.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsAcl extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The resource to which the component is attached.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The listener for a Classic Load Balancer.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsClassicLoadBalancerListener extends SpeakeasyBase {
    instancePort?: number;
    loadBalancerPort?: number;
}
/**
 * The component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The customer gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsCustomerGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsDestination extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * The route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsIngressRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The internet gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsInternetGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Information about the instance.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsLoadBalancerTargetInstance extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The target.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsLoadBalancerTarget extends SpeakeasyBase {
    address?: string;
    availabilityZone?: string;
    instance?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsLoadBalancerTargetInstance;
    port?: number;
}
/**
 * The target group.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsLoadBalancerTargetGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsLoadBalancerTargetGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The NAT gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsNatGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network interface.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsNetworkInterface extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The prefix list.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsPrefixList extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table route.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSecurityGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The port range.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSecurityGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The source VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table for the subnet.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSubnetRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway attachment.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsTransitGatewayAttachment extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsTransitGatewayRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table route.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC endpoint.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpcEndpoint extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC peering connection.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpcPeeringConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN connection.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpnConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpnGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanations extends SpeakeasyBase {
    acl?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsAcl;
    aclRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsAclRule;
    address?: string;
    addresses?: string[];
    attachedTo?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsAttachedTo;
    availabilityZones?: string[];
    cidrs?: string[];
    classicLoadBalancerListener?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsClassicLoadBalancerListener;
    component?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsComponent;
    componentAccount?: string;
    componentRegion?: string;
    customerGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsCustomerGateway;
    destination?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsDestination;
    destinationVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsDestinationVpc;
    direction?: string;
    elasticLoadBalancerListener?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsElasticLoadBalancerListener;
    explanationCode?: string;
    firewallStatefulRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatefulRule;
    firewallStatelessRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsFirewallStatelessRule;
    ingressRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsIngressRouteTable;
    internetGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsInternetGateway;
    loadBalancerArn?: string;
    loadBalancerListenerPort?: number;
    loadBalancerTarget?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsLoadBalancerTarget;
    loadBalancerTargetGroup?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsLoadBalancerTargetGroup;
    loadBalancerTargetGroups?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsLoadBalancerTargetGroups[];
    loadBalancerTargetPort?: number;
    missingComponent?: string;
    natGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsNatGateway;
    networkInterface?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsNetworkInterface;
    packetField?: string;
    port?: number;
    portRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsPortRanges[];
    prefixList?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsPrefixList;
    protocols?: string[];
    routeTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsRouteTable;
    routeTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsRouteTableRoute;
    securityGroup?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSecurityGroup;
    securityGroupRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSecurityGroupRule;
    securityGroups?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSecurityGroups[];
    sourceVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSourceVpc;
    state?: string;
    subnet?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSubnet;
    subnetRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsSubnetRouteTable;
    transitGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsTransitGateway;
    transitGatewayAttachment?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsTransitGatewayAttachment;
    transitGatewayRouteTable?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsTransitGatewayRouteTable;
    transitGatewayRouteTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsTransitGatewayRouteTableRoute;
    vpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpc;
    vpcEndpoint?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpcEndpoint;
    vpcPeeringConnection?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpcPeeringConnection;
    vpnConnection?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpnConnection;
    vpnGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanationsVpnGateway;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsInboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsInboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The inbound header.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsInboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsInboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsInboundHeaderSourcePortRanges[];
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsOutboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsOutboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The outbound header.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsOutboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsOutboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsOutboundHeaderSourcePortRanges[];
}
/**
 * The route table route.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * The source VPC.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route in a transit gateway route table.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponents extends SpeakeasyBase {
    aclRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAclRule;
    additionalDetails?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAdditionalDetails[];
    attachedTo?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsAttachedTo;
    component?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsComponent;
    destinationVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsDestinationVpc;
    elasticLoadBalancerListener?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsElasticLoadBalancerListener;
    explanations?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsExplanations[];
    firewallStatefulRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatefulRule;
    firewallStatelessRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsFirewallStatelessRule;
    inboundHeader?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsInboundHeader;
    outboundHeader?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsOutboundHeader;
    routeTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsRouteTableRoute;
    securityGroupRule?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsSecurityGroupRule;
    sequenceNumber?: number;
    serviceName?: string;
    sourceVpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsSourceVpc;
    subnet?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsSubnet;
    transitGateway?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsTransitGateway;
    transitGatewayRouteTableRoute?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsTransitGatewayRouteTableRoute;
    vpc?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponentsVpc;
}
/**
 * The status of the network insights analysis.
 */
export declare enum DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesStatusEnum {
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Describes a tag.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a network insights analysis.
 */
export declare class DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalyses extends SpeakeasyBase {
    additionalAccounts?: string[];
    alternatePathHints?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesAlternatePathHints[];
    explanations?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesExplanations[];
    filterInArns?: string[];
    forwardPathComponents?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesForwardPathComponents[];
    networkInsightsAnalysisArn?: string;
    networkInsightsAnalysisId?: string;
    networkInsightsPathId?: string;
    networkPathFound?: boolean;
    returnPathComponents?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesReturnPathComponents[];
    startDate?: Date;
    status?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesStatusEnum;
    statusMessage?: string;
    suggestedAccounts?: string[];
    tags?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalysesTags[];
    warningMessage?: string;
}
/**
 * Success
 */
export declare class DescribeNetworkInsightsAnalysesResult extends SpeakeasyBase {
    networkInsightsAnalyses?: DescribeNetworkInsightsAnalysesResultNetworkInsightsAnalyses[];
    nextToken?: string;
}
