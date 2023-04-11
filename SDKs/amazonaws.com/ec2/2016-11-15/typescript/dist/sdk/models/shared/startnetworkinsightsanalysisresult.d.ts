import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an potential intermediate component of a feasible path.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisAlternatePathHints extends SpeakeasyBase {
    componentArn?: string;
    componentId?: string;
}
/**
 * The network ACL.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsAcl extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The resource to which the component is attached.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The listener for a Classic Load Balancer.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsClassicLoadBalancerListener extends SpeakeasyBase {
    instancePort?: number;
    loadBalancerPort?: number;
}
/**
 * The component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The customer gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsCustomerGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsDestination extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * The route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsIngressRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The internet gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsInternetGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Information about the instance.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The target.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsLoadBalancerTarget extends SpeakeasyBase {
    address?: string;
    availabilityZone?: string;
    instance?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance;
    port?: number;
}
/**
 * The target group.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The NAT gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsNatGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network interface.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsNetworkInterface extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The prefix list.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsPrefixList extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table route.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSecurityGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The port range.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSecurityGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The source VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table for the subnet.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSubnetRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway attachment.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsTransitGatewayAttachment extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsTransitGatewayRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table route.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC endpoint.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpcEndpoint extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC peering connection.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpcPeeringConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN connection.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpnConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpnGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanations extends SpeakeasyBase {
    acl?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsAcl;
    aclRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsAclRule;
    address?: string;
    addresses?: string[];
    attachedTo?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsAttachedTo;
    availabilityZones?: string[];
    cidrs?: string[];
    classicLoadBalancerListener?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsClassicLoadBalancerListener;
    component?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsComponent;
    componentAccount?: string;
    componentRegion?: string;
    customerGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsCustomerGateway;
    destination?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsDestination;
    destinationVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsDestinationVpc;
    direction?: string;
    elasticLoadBalancerListener?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsElasticLoadBalancerListener;
    explanationCode?: string;
    firewallStatefulRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatefulRule;
    firewallStatelessRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsFirewallStatelessRule;
    ingressRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsIngressRouteTable;
    internetGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsInternetGateway;
    loadBalancerArn?: string;
    loadBalancerListenerPort?: number;
    loadBalancerTarget?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsLoadBalancerTarget;
    loadBalancerTargetGroup?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup;
    loadBalancerTargetGroups?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups[];
    loadBalancerTargetPort?: number;
    missingComponent?: string;
    natGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsNatGateway;
    networkInterface?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsNetworkInterface;
    packetField?: string;
    port?: number;
    portRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsPortRanges[];
    prefixList?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsPrefixList;
    protocols?: string[];
    routeTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsRouteTable;
    routeTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsRouteTableRoute;
    securityGroup?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSecurityGroup;
    securityGroupRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSecurityGroupRule;
    securityGroups?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSecurityGroups[];
    sourceVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSourceVpc;
    state?: string;
    subnet?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSubnet;
    subnetRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsSubnetRouteTable;
    transitGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsTransitGateway;
    transitGatewayAttachment?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsTransitGatewayAttachment;
    transitGatewayRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsTransitGatewayRouteTable;
    transitGatewayRouteTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute;
    vpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpc;
    vpcEndpoint?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpcEndpoint;
    vpcPeeringConnection?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpcPeeringConnection;
    vpnConnection?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpnConnection;
    vpnGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanationsVpnGateway;
}
/**
 * The range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsLoadBalancers extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * Describes the rule options for a stateful rule group.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleOptions?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions[];
}
/**
 * Describes the type of a stateful rule group.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsRuleGroupTypePairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleGroupType?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * The VPC endpoint service.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsVpcEndpointService extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an additional detail for a path analysis. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/additional-detail-codes.html">Reachability Analyzer additional detail codes</a>.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetails extends SpeakeasyBase {
    additionalDetailType?: string;
    component?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent;
    loadBalancers?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsLoadBalancers[];
    ruleGroupRuleOptionsPairs?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairs[];
    ruleGroupTypePairs?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsRuleGroupTypePairs[];
    ruleOptions?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsRuleOptions[];
    serviceName?: string;
    vpcEndpointService?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsVpcEndpointService;
}
/**
 * The resource to which the path component is attached.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network ACL.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsAcl extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The resource to which the component is attached.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The listener for a Classic Load Balancer.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsClassicLoadBalancerListener extends SpeakeasyBase {
    instancePort?: number;
    loadBalancerPort?: number;
}
/**
 * The component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The customer gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsCustomerGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsDestination extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * The route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsIngressRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The internet gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsInternetGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Information about the instance.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsLoadBalancerTargetInstance extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The target.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsLoadBalancerTarget extends SpeakeasyBase {
    address?: string;
    availabilityZone?: string;
    instance?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsLoadBalancerTargetInstance;
    port?: number;
}
/**
 * The target group.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsLoadBalancerTargetGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsLoadBalancerTargetGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The NAT gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsNatGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network interface.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsNetworkInterface extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The prefix list.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsPrefixList extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table route.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSecurityGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The port range.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSecurityGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The source VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table for the subnet.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSubnetRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway attachment.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsTransitGatewayAttachment extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsTransitGatewayRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table route.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC endpoint.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpcEndpoint extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC peering connection.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpcPeeringConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN connection.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpnConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpnGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanations extends SpeakeasyBase {
    acl?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsAcl;
    aclRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsAclRule;
    address?: string;
    addresses?: string[];
    attachedTo?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsAttachedTo;
    availabilityZones?: string[];
    cidrs?: string[];
    classicLoadBalancerListener?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsClassicLoadBalancerListener;
    component?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsComponent;
    componentAccount?: string;
    componentRegion?: string;
    customerGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsCustomerGateway;
    destination?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsDestination;
    destinationVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsDestinationVpc;
    direction?: string;
    elasticLoadBalancerListener?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsElasticLoadBalancerListener;
    explanationCode?: string;
    firewallStatefulRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatefulRule;
    firewallStatelessRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsFirewallStatelessRule;
    ingressRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsIngressRouteTable;
    internetGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsInternetGateway;
    loadBalancerArn?: string;
    loadBalancerListenerPort?: number;
    loadBalancerTarget?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsLoadBalancerTarget;
    loadBalancerTargetGroup?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsLoadBalancerTargetGroup;
    loadBalancerTargetGroups?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsLoadBalancerTargetGroups[];
    loadBalancerTargetPort?: number;
    missingComponent?: string;
    natGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsNatGateway;
    networkInterface?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsNetworkInterface;
    packetField?: string;
    port?: number;
    portRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsPortRanges[];
    prefixList?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsPrefixList;
    protocols?: string[];
    routeTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsRouteTable;
    routeTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsRouteTableRoute;
    securityGroup?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSecurityGroup;
    securityGroupRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSecurityGroupRule;
    securityGroups?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSecurityGroups[];
    sourceVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSourceVpc;
    state?: string;
    subnet?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSubnet;
    subnetRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsSubnetRouteTable;
    transitGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsTransitGateway;
    transitGatewayAttachment?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsTransitGatewayAttachment;
    transitGatewayRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsTransitGatewayRouteTable;
    transitGatewayRouteTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsTransitGatewayRouteTableRoute;
    vpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpc;
    vpcEndpoint?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpcEndpoint;
    vpcPeeringConnection?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpcPeeringConnection;
    vpnConnection?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpnConnection;
    vpnGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanationsVpnGateway;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The inbound header.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsInboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The outbound header.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsOutboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges[];
}
/**
 * The route table route.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * The source VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route in a transit gateway route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponents extends SpeakeasyBase {
    aclRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAclRule;
    additionalDetails?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAdditionalDetails[];
    attachedTo?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsAttachedTo;
    component?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsComponent;
    destinationVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsDestinationVpc;
    elasticLoadBalancerListener?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsElasticLoadBalancerListener;
    explanations?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsExplanations[];
    firewallStatefulRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatefulRule;
    firewallStatelessRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsFirewallStatelessRule;
    inboundHeader?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsInboundHeader;
    outboundHeader?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsOutboundHeader;
    routeTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsRouteTableRoute;
    securityGroupRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule;
    sequenceNumber?: number;
    serviceName?: string;
    sourceVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsSourceVpc;
    subnet?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsSubnet;
    transitGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsTransitGateway;
    transitGatewayRouteTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute;
    vpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponentsVpc;
}
/**
 * The range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsLoadBalancers extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * Describes the rule options for a stateful rule group.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleOptions?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairsRuleOptions[];
}
/**
 * Describes the type of a stateful rule group.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsRuleGroupTypePairs extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleGroupType?: string;
}
/**
 * Describes additional settings for a stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsRuleOptions extends SpeakeasyBase {
    keyword?: string;
    settings?: string[];
}
/**
 * The VPC endpoint service.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsVpcEndpointService extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an additional detail for a path analysis. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/additional-detail-codes.html">Reachability Analyzer additional detail codes</a>.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetails extends SpeakeasyBase {
    additionalDetailType?: string;
    component?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent;
    loadBalancers?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsLoadBalancers[];
    ruleGroupRuleOptionsPairs?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsRuleGroupRuleOptionsPairs[];
    ruleGroupTypePairs?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsRuleGroupTypePairs[];
    ruleOptions?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsRuleOptions[];
    serviceName?: string;
    vpcEndpointService?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsVpcEndpointService;
}
/**
 * The resource to which the path component is attached.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network ACL.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsAcl extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsAclRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The network ACL rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsAclRulePortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
/**
 * The resource to which the component is attached.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsAttachedTo extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The listener for a Classic Load Balancer.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsClassicLoadBalancerListener extends SpeakeasyBase {
    instancePort?: number;
    loadBalancerPort?: number;
}
/**
 * The component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsComponent extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The customer gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsCustomerGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsDestination extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The destination VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsDestinationVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The load balancer listener.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsElasticLoadBalancerListener extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * The route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsIngressRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The internet gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsInternetGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Information about the instance.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsLoadBalancerTargetInstance extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The target.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsLoadBalancerTarget extends SpeakeasyBase {
    address?: string;
    availabilityZone?: string;
    instance?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsLoadBalancerTargetInstance;
    port?: number;
}
/**
 * The target group.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsLoadBalancerTargetGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsLoadBalancerTargetGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The NAT gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsNatGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The network interface.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsNetworkInterface extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The prefix list.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsPrefixList extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table route.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSecurityGroup extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The port range.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSecurityGroups extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The source VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route table for the subnet.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSubnetRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway attachment.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsTransitGatewayAttachment extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsTransitGatewayRouteTable extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway route table route.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC endpoint.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpcEndpoint extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPC peering connection.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpcPeeringConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN connection.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpnConnection extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The VPN gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpnGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes an explanation code for an unreachable path. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html">Reachability Analyzer explanation codes</a>.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanations extends SpeakeasyBase {
    acl?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsAcl;
    aclRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsAclRule;
    address?: string;
    addresses?: string[];
    attachedTo?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsAttachedTo;
    availabilityZones?: string[];
    cidrs?: string[];
    classicLoadBalancerListener?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsClassicLoadBalancerListener;
    component?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsComponent;
    componentAccount?: string;
    componentRegion?: string;
    customerGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsCustomerGateway;
    destination?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsDestination;
    destinationVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsDestinationVpc;
    direction?: string;
    elasticLoadBalancerListener?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsElasticLoadBalancerListener;
    explanationCode?: string;
    firewallStatefulRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatefulRule;
    firewallStatelessRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsFirewallStatelessRule;
    ingressRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsIngressRouteTable;
    internetGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsInternetGateway;
    loadBalancerArn?: string;
    loadBalancerListenerPort?: number;
    loadBalancerTarget?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsLoadBalancerTarget;
    loadBalancerTargetGroup?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsLoadBalancerTargetGroup;
    loadBalancerTargetGroups?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsLoadBalancerTargetGroups[];
    loadBalancerTargetPort?: number;
    missingComponent?: string;
    natGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsNatGateway;
    networkInterface?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsNetworkInterface;
    packetField?: string;
    port?: number;
    portRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsPortRanges[];
    prefixList?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsPrefixList;
    protocols?: string[];
    routeTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsRouteTable;
    routeTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsRouteTableRoute;
    securityGroup?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSecurityGroup;
    securityGroupRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSecurityGroupRule;
    securityGroups?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSecurityGroups[];
    sourceVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSourceVpc;
    state?: string;
    subnet?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSubnet;
    subnetRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsSubnetRouteTable;
    transitGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsTransitGateway;
    transitGatewayAttachment?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsTransitGatewayAttachment;
    transitGatewayRouteTable?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsTransitGatewayRouteTable;
    transitGatewayRouteTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsTransitGatewayRouteTableRoute;
    vpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpc;
    vpcEndpoint?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpcEndpoint;
    vpcPeeringConnection?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpcPeeringConnection;
    vpnConnection?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpnConnection;
    vpnGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanationsVpnGateway;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatefulRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatefulRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateful rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatefulRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatefulRuleDestinationPorts[];
    destinations?: string[];
    direction?: string;
    protocol?: string;
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatefulRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatelessRuleDestinationPorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatelessRuleSourcePorts extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The Network Firewall stateless rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatelessRule extends SpeakeasyBase {
    destinationPorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatelessRuleDestinationPorts[];
    destinations?: string[];
    priority?: number;
    protocols?: number[];
    ruleAction?: string;
    ruleGroupArn?: string;
    sourcePorts?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatelessRuleSourcePorts[];
    sources?: string[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The inbound header.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsInboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges[];
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Describes a range of ports.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The outbound header.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsOutboundHeader extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPortRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges[];
    protocol?: string;
    sourceAddresses?: string[];
    sourcePortRanges?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges[];
}
/**
 * The route table route.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * The security group rule.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
/**
 * The source VPC.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsSourceVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The subnet.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsSubnet extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The transit gateway.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsTransitGateway extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * The route in a transit gateway route table.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute extends SpeakeasyBase {
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
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsVpc extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
/**
 * Describes a path component.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponents extends SpeakeasyBase {
    aclRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAclRule;
    additionalDetails?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAdditionalDetails[];
    attachedTo?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsAttachedTo;
    component?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsComponent;
    destinationVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsDestinationVpc;
    elasticLoadBalancerListener?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsElasticLoadBalancerListener;
    explanations?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsExplanations[];
    firewallStatefulRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatefulRule;
    firewallStatelessRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsFirewallStatelessRule;
    inboundHeader?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsInboundHeader;
    outboundHeader?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsOutboundHeader;
    routeTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsRouteTableRoute;
    securityGroupRule?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule;
    sequenceNumber?: number;
    serviceName?: string;
    sourceVpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsSourceVpc;
    subnet?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsSubnet;
    transitGateway?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsTransitGateway;
    transitGatewayRouteTableRoute?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute;
    vpc?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponentsVpc;
}
/**
 * The status of the network insights analysis.
 */
export declare enum StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisStatusEnum {
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Describes a tag.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the network insights analysis.
 */
export declare class StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis extends SpeakeasyBase {
    additionalAccounts?: string[];
    alternatePathHints?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisAlternatePathHints[];
    explanations?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisExplanations[];
    filterInArns?: string[];
    forwardPathComponents?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisForwardPathComponents[];
    networkInsightsAnalysisArn?: string;
    networkInsightsAnalysisId?: string;
    networkInsightsPathId?: string;
    networkPathFound?: boolean;
    returnPathComponents?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisReturnPathComponents[];
    startDate?: Date;
    status?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisStatusEnum;
    statusMessage?: string;
    suggestedAccounts?: string[];
    tags?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysisTags[];
    warningMessage?: string;
}
/**
 * Success
 */
export declare class StartNetworkInsightsAnalysisResult extends SpeakeasyBase {
    networkInsightsAnalysis?: StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis;
}
