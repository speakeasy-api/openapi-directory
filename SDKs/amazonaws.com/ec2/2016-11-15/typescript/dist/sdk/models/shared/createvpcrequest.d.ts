import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The tenancy options for instances launched into the VPC. For <code>default</code>, instances are launched with shared tenancy by default. You can launch instances with any tenancy into a shared tenancy VPC. For <code>dedicated</code>, instances are launched as dedicated tenancy instances by default. You can only launch instances with a tenancy of <code>dedicated</code> or <code>host</code> into a dedicated tenancy VPC. </p> <p> <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p> <p>Default: <code>default</code> </p>
 */
export declare enum CreateVpcRequestInstanceTenancyEnum {
    Default = "default",
    Dedicated = "dedicated",
    Host = "host"
}
/**
 * The type of resource to tag on creation.
 */
export declare enum CreateVpcRequestTagSpecificationsResourceTypeEnum {
    CapacityReservation = "capacity-reservation",
    ClientVpnEndpoint = "client-vpn-endpoint",
    CustomerGateway = "customer-gateway",
    CarrierGateway = "carrier-gateway",
    CoipPool = "coip-pool",
    DedicatedHost = "dedicated-host",
    DhcpOptions = "dhcp-options",
    EgressOnlyInternetGateway = "egress-only-internet-gateway",
    ElasticIp = "elastic-ip",
    ElasticGpu = "elastic-gpu",
    ExportImageTask = "export-image-task",
    ExportInstanceTask = "export-instance-task",
    Fleet = "fleet",
    FpgaImage = "fpga-image",
    HostReservation = "host-reservation",
    Image = "image",
    ImportImageTask = "import-image-task",
    ImportSnapshotTask = "import-snapshot-task",
    Instance = "instance",
    InstanceEventWindow = "instance-event-window",
    InternetGateway = "internet-gateway",
    Ipam = "ipam",
    IpamPool = "ipam-pool",
    IpamScope = "ipam-scope",
    Ipv4poolEc2 = "ipv4pool-ec2",
    Ipv6poolEc2 = "ipv6pool-ec2",
    KeyPair = "key-pair",
    LaunchTemplate = "launch-template",
    LocalGateway = "local-gateway",
    LocalGatewayRouteTable = "local-gateway-route-table",
    LocalGatewayVirtualInterface = "local-gateway-virtual-interface",
    LocalGatewayVirtualInterfaceGroup = "local-gateway-virtual-interface-group",
    LocalGatewayRouteTableVpcAssociation = "local-gateway-route-table-vpc-association",
    LocalGatewayRouteTableVirtualInterfaceGroupAssociation = "local-gateway-route-table-virtual-interface-group-association",
    Natgateway = "natgateway",
    NetworkAcl = "network-acl",
    NetworkInterface = "network-interface",
    NetworkInsightsAnalysis = "network-insights-analysis",
    NetworkInsightsPath = "network-insights-path",
    NetworkInsightsAccessScope = "network-insights-access-scope",
    NetworkInsightsAccessScopeAnalysis = "network-insights-access-scope-analysis",
    PlacementGroup = "placement-group",
    PrefixList = "prefix-list",
    ReplaceRootVolumeTask = "replace-root-volume-task",
    ReservedInstances = "reserved-instances",
    RouteTable = "route-table",
    SecurityGroup = "security-group",
    SecurityGroupRule = "security-group-rule",
    Snapshot = "snapshot",
    SpotFleetRequest = "spot-fleet-request",
    SpotInstancesRequest = "spot-instances-request",
    Subnet = "subnet",
    SubnetCidrReservation = "subnet-cidr-reservation",
    TrafficMirrorFilter = "traffic-mirror-filter",
    TrafficMirrorSession = "traffic-mirror-session",
    TrafficMirrorTarget = "traffic-mirror-target",
    TransitGateway = "transit-gateway",
    TransitGatewayAttachment = "transit-gateway-attachment",
    TransitGatewayConnectPeer = "transit-gateway-connect-peer",
    TransitGatewayMulticastDomain = "transit-gateway-multicast-domain",
    TransitGatewayPolicyTable = "transit-gateway-policy-table",
    TransitGatewayRouteTable = "transit-gateway-route-table",
    TransitGatewayRouteTableAnnouncement = "transit-gateway-route-table-announcement",
    Volume = "volume",
    Vpc = "vpc",
    VpcEndpoint = "vpc-endpoint",
    VpcEndpointConnection = "vpc-endpoint-connection",
    VpcEndpointService = "vpc-endpoint-service",
    VpcEndpointServicePermission = "vpc-endpoint-service-permission",
    VpcPeeringConnection = "vpc-peering-connection",
    VpnConnection = "vpn-connection",
    VpnGateway = "vpn-gateway",
    VpcFlowLog = "vpc-flow-log",
    CapacityReservationFleet = "capacity-reservation-fleet",
    TrafficMirrorFilterRule = "traffic-mirror-filter-rule",
    VpcEndpointConnectionDeviceType = "vpc-endpoint-connection-device-type",
    VerifiedAccessInstance = "verified-access-instance",
    VerifiedAccessGroup = "verified-access-group",
    VerifiedAccessEndpoint = "verified-access-endpoint",
    VerifiedAccessPolicy = "verified-access-policy",
    VerifiedAccessTrustProvider = "verified-access-trust-provider",
    VpnConnectionDeviceType = "vpn-connection-device-type",
    VpcBlockPublicAccessExclusion = "vpc-block-public-access-exclusion",
    IpamResourceDiscovery = "ipam-resource-discovery",
    IpamResourceDiscoveryAssociation = "ipam-resource-discovery-association"
}
/**
 * Describes a tag.
 */
export declare class CreateVpcRequestTagSpecificationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * <p>The tags to apply to a resource when the resource is being created. When you specify a tag, you must specify the resource type to tag, otherwise the request will fail.</p> <note> <p>The <code>Valid Values</code> lists all the resource types that can be tagged. However, the action you're using might not support tagging all of these resource types. If you try to tag a resource type that is unsupported for the action you're using, you'll get an error.</p> </note>
 */
export declare class CreateVpcRequestTagSpecifications extends SpeakeasyBase {
    resourceType?: CreateVpcRequestTagSpecificationsResourceTypeEnum;
    tags?: CreateVpcRequestTagSpecificationsTags[];
}
export declare class CreateVpcRequest extends SpeakeasyBase {
    amazonProvidedIpv6CidrBlock?: boolean;
    cidrBlock?: string;
    dryRun?: boolean;
    instanceTenancy?: CreateVpcRequestInstanceTenancyEnum;
    ipv4IpamPoolId?: string;
    ipv4NetmaskLength?: number;
    ipv6CidrBlock?: string;
    ipv6CidrBlockNetworkBorderGroup?: string;
    ipv6IpamPoolId?: string;
    ipv6NetmaskLength?: number;
    ipv6Pool?: string;
    tagSpecifications?: CreateVpcRequestTagSpecifications[];
}
