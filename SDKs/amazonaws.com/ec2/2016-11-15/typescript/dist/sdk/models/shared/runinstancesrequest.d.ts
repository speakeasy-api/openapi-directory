import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationSpecification } from "./capacityreservationspecification";
import { CpuOptionsRequest } from "./cpuoptionsrequest";
import { CreditSpecificationRequest } from "./creditspecificationrequest";
import { ElasticGpuSpecifications } from "./elasticgpuspecifications";
import { EnclaveOptionsRequest } from "./enclaveoptionsrequest";
import { HibernationOptionsRequest } from "./hibernationoptionsrequest";
import { InstanceMaintenanceOptionsRequest } from "./instancemaintenanceoptionsrequest";
import { InstanceMarketOptionsRequest } from "./instancemarketoptionsrequest";
import { InstanceMetadataOptionsRequest } from "./instancemetadataoptionsrequest";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { Placement } from "./placement";
import { PrivateDnsNameOptionsRequest } from "./privatednsnameoptionsrequest";
import { RunInstancesMonitoringEnabled } from "./runinstancesmonitoringenabled";
/**
 * The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the <i>Amazon EC2 User Guide</i>. If the volume type is <code>io1</code> or <code>io2</code>, you must specify the IOPS that the volume supports.
 */
export declare enum RunInstancesRequestBlockDeviceMappingsEbsVolumeTypeEnum {
    Standard = "standard",
    Io1 = "io1",
    Io2 = "io2",
    Gp2 = "gp2",
    Sc1 = "sc1",
    St1 = "st1",
    Gp3 = "gp3"
}
/**
 * Parameters used to automatically set up EBS volumes when the instance is launched.
 */
export declare class RunInstancesRequestBlockDeviceMappingsEbs extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    kmsKeyId?: string;
    outpostArn?: string;
    snapshotId?: string;
    throughput?: number;
    volumeSize?: number;
    volumeType?: RunInstancesRequestBlockDeviceMappingsEbsVolumeTypeEnum;
}
/**
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
 */
export declare class RunInstancesRequestBlockDeviceMappings extends SpeakeasyBase {
    deviceName?: string;
    ebs?: RunInstancesRequestBlockDeviceMappingsEbs;
    noDevice?: string;
    virtualName?: string;
}
/**
 *  Describes an elastic inference accelerator.
 */
export declare class RunInstancesRequestElasticInferenceAccelerators extends SpeakeasyBase {
    count?: number;
    type: string;
}
/**
 * The name or Amazon Resource Name (ARN) of an IAM instance profile.
 */
export declare class RunInstancesRequestIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    name?: string;
}
/**
 * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</p> <p>Default: <code>stop</code> </p>
 */
export declare enum RunInstancesRequestInstanceInitiatedShutdownBehaviorEnum {
    Stop = "stop",
    Terminate = "terminate"
}
/**
 * Describes an IPv6 address.
 */
export declare class RunInstancesRequestIpv6Addresses extends SpeakeasyBase {
    ipv6Address?: string;
}
/**
 * Describes a license configuration.
 */
export declare class RunInstancesRequestLicenseSpecifications extends SpeakeasyBase {
    licenseConfigurationArn?: string;
}
/**
 * Describes the IPv4 prefix option for a network interface.
 */
export declare class RunInstancesRequestNetworkInterfacesIpv4Prefixes extends SpeakeasyBase {
    ipv4Prefix?: string;
}
/**
 * Describes an IPv6 address.
 */
export declare class RunInstancesRequestNetworkInterfacesIpv6Addresses extends SpeakeasyBase {
    ipv6Address?: string;
}
/**
 * Describes the IPv4 prefix option for a network interface.
 */
export declare class RunInstancesRequestNetworkInterfacesIpv6Prefixes extends SpeakeasyBase {
    ipv6Prefix?: string;
}
/**
 * Describes a secondary private IPv4 address for a network interface.
 */
export declare class RunInstancesRequestNetworkInterfacesPrivateIpAddresses extends SpeakeasyBase {
    primary?: boolean;
    privateIpAddress?: string;
}
/**
 * Describes a network interface.
 */
export declare class RunInstancesRequestNetworkInterfaces extends SpeakeasyBase {
    associateCarrierIpAddress?: boolean;
    associatePublicIpAddress?: boolean;
    deleteOnTermination?: boolean;
    description?: string;
    deviceIndex?: number;
    groups?: string[];
    interfaceType?: string;
    ipv4PrefixCount?: number;
    ipv4Prefixes?: RunInstancesRequestNetworkInterfacesIpv4Prefixes[];
    ipv6AddressCount?: number;
    ipv6Addresses?: RunInstancesRequestNetworkInterfacesIpv6Addresses[];
    ipv6PrefixCount?: number;
    ipv6Prefixes?: RunInstancesRequestNetworkInterfacesIpv6Prefixes[];
    networkCardIndex?: number;
    networkInterfaceId?: string;
    privateIpAddress?: string;
    privateIpAddresses?: RunInstancesRequestNetworkInterfacesPrivateIpAddresses[];
    secondaryPrivateIpAddressCount?: number;
    subnetId?: string;
}
/**
 * The type of resource to tag on creation.
 */
export declare enum RunInstancesRequestTagSpecificationsResourceTypeEnum {
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
export declare class RunInstancesRequestTagSpecificationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * <p>The tags to apply to a resource when the resource is being created. When you specify a tag, you must specify the resource type to tag, otherwise the request will fail.</p> <note> <p>The <code>Valid Values</code> lists all the resource types that can be tagged. However, the action you're using might not support tagging all of these resource types. If you try to tag a resource type that is unsupported for the action you're using, you'll get an error.</p> </note>
 */
export declare class RunInstancesRequestTagSpecifications extends SpeakeasyBase {
    resourceType?: RunInstancesRequestTagSpecificationsResourceTypeEnum;
    tags?: RunInstancesRequestTagSpecificationsTags[];
}
export declare class RunInstancesRequest extends SpeakeasyBase {
    additionalInfo?: string;
    blockDeviceMappings?: RunInstancesRequestBlockDeviceMappings[];
    capacityReservationSpecification?: CapacityReservationSpecification;
    clientToken?: string;
    cpuOptions?: CpuOptionsRequest;
    creditSpecification?: CreditSpecificationRequest;
    disableApiStop?: boolean;
    disableApiTermination?: boolean;
    dryRun?: boolean;
    ebsOptimized?: boolean;
    elasticGpuSpecification?: ElasticGpuSpecifications[];
    elasticInferenceAccelerators?: RunInstancesRequestElasticInferenceAccelerators[];
    enclaveOptions?: EnclaveOptionsRequest;
    hibernationOptions?: HibernationOptionsRequest;
    iamInstanceProfile?: RunInstancesRequestIamInstanceProfile;
    imageId?: string;
    instanceInitiatedShutdownBehavior?: RunInstancesRequestInstanceInitiatedShutdownBehaviorEnum;
    instanceMarketOptions?: InstanceMarketOptionsRequest;
    instanceType?: InstanceTypeEnum;
    ipv6AddressCount?: number;
    ipv6Addresses?: RunInstancesRequestIpv6Addresses[];
    kernelId?: string;
    keyName?: string;
    launchTemplate?: LaunchTemplateSpecification;
    licenseSpecifications?: RunInstancesRequestLicenseSpecifications[];
    maintenanceOptions?: InstanceMaintenanceOptionsRequest;
    maxCount: number;
    metadataOptions?: InstanceMetadataOptionsRequest;
    minCount: number;
    monitoring?: RunInstancesMonitoringEnabled;
    networkInterfaces?: RunInstancesRequestNetworkInterfaces[];
    placement?: Placement;
    privateDnsNameOptions?: PrivateDnsNameOptionsRequest;
    privateIpAddress?: string;
    ramdiskId?: string;
    securityGroupIds?: string[];
    securityGroups?: string[];
    subnetId?: string;
    tagSpecifications?: RunInstancesRequestTagSpecifications[];
    userData?: string;
}
