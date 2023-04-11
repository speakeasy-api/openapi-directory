import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The association information for an Elastic IP address (IPv4) associated with the network interface.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesAssociation extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    carrierIp?: string;
    customerOwnedIp?: string;
    ipOwnerId?: string;
    publicDnsName?: string;
    publicIp?: string;
}
/**
 * ENA Express configuration for UDP network traffic.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesAttachmentEnaSrdSpecificationEnaSrdUdpSpecification extends SpeakeasyBase {
    enaSrdUdpEnabled?: boolean;
}
/**
 * Configures ENA Express for the network interface that this action attaches to the instance.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesAttachmentEnaSrdSpecification extends SpeakeasyBase {
    enaSrdEnabled?: boolean;
    enaSrdUdpSpecification?: DescribeNetworkInterfacesResultNetworkInterfacesAttachmentEnaSrdSpecificationEnaSrdUdpSpecification;
}
/**
 * The attachment state.
 */
export declare enum DescribeNetworkInterfacesResultNetworkInterfacesAttachmentStatusEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * The network interface attachment.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesAttachment extends SpeakeasyBase {
    attachTime?: Date;
    attachmentId?: string;
    deleteOnTermination?: boolean;
    deviceIndex?: number;
    enaSrdSpecification?: DescribeNetworkInterfacesResultNetworkInterfacesAttachmentEnaSrdSpecification;
    instanceId?: string;
    instanceOwnerId?: string;
    networkCardIndex?: number;
    status?: DescribeNetworkInterfacesResultNetworkInterfacesAttachmentStatusEnum;
}
/**
 * Describes a security group.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesGroups extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
}
/**
 * The type of network interface.
 */
export declare enum DescribeNetworkInterfacesResultNetworkInterfacesInterfaceTypeEnum {
    Interface = "interface",
    NatGateway = "natGateway",
    Efa = "efa",
    Trunk = "trunk",
    LoadBalancer = "load_balancer",
    NetworkLoadBalancer = "network_load_balancer",
    VpcEndpoint = "vpc_endpoint",
    Branch = "branch",
    TransitGateway = "transit_gateway",
    Lambda = "lambda",
    Quicksight = "quicksight",
    GlobalAcceleratorManaged = "global_accelerator_managed",
    ApiGatewayManaged = "api_gateway_managed",
    GatewayLoadBalancer = "gateway_load_balancer",
    GatewayLoadBalancerEndpoint = "gateway_load_balancer_endpoint",
    IotRulesManaged = "iot_rules_managed",
    AwsCodestarConnectionsManaged = "aws_codestar_connections_managed"
}
/**
 * Describes an IPv4 prefix.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesIpv4Prefixes extends SpeakeasyBase {
    ipv4Prefix?: string;
}
/**
 * Describes an IPv6 address associated with a network interface.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesIpv6Addresses extends SpeakeasyBase {
    ipv6Address?: string;
}
/**
 * Describes the IPv6 prefix.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesIpv6Prefixes extends SpeakeasyBase {
    ipv6Prefix?: string;
}
/**
 * The association information for an Elastic IP address (IPv4) associated with the network interface.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesPrivateIpAddressesAssociation extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    carrierIp?: string;
    customerOwnedIp?: string;
    ipOwnerId?: string;
    publicDnsName?: string;
    publicIp?: string;
}
/**
 * Describes the private IPv4 address of a network interface.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesPrivateIpAddresses extends SpeakeasyBase {
    association?: DescribeNetworkInterfacesResultNetworkInterfacesPrivateIpAddressesAssociation;
    primary?: boolean;
    privateDnsName?: string;
    privateIpAddress?: string;
}
/**
 * The status of the network interface.
 */
export declare enum DescribeNetworkInterfacesResultNetworkInterfacesStatusEnum {
    Available = "available",
    Associated = "associated",
    Attaching = "attaching",
    InUse = "in-use",
    Detaching = "detaching"
}
/**
 * Describes a tag.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfacesTagSet extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a network interface.
 */
export declare class DescribeNetworkInterfacesResultNetworkInterfaces extends SpeakeasyBase {
    association?: DescribeNetworkInterfacesResultNetworkInterfacesAssociation;
    attachment?: DescribeNetworkInterfacesResultNetworkInterfacesAttachment;
    availabilityZone?: string;
    denyAllIgwTraffic?: boolean;
    description?: string;
    groups?: DescribeNetworkInterfacesResultNetworkInterfacesGroups[];
    interfaceType?: DescribeNetworkInterfacesResultNetworkInterfacesInterfaceTypeEnum;
    ipv4Prefixes?: DescribeNetworkInterfacesResultNetworkInterfacesIpv4Prefixes[];
    ipv6Address?: string;
    ipv6Addresses?: DescribeNetworkInterfacesResultNetworkInterfacesIpv6Addresses[];
    ipv6Native?: boolean;
    ipv6Prefixes?: DescribeNetworkInterfacesResultNetworkInterfacesIpv6Prefixes[];
    macAddress?: string;
    networkInterfaceId?: string;
    outpostArn?: string;
    ownerId?: string;
    privateDnsName?: string;
    privateIpAddress?: string;
    privateIpAddresses?: DescribeNetworkInterfacesResultNetworkInterfacesPrivateIpAddresses[];
    requesterId?: string;
    requesterManaged?: boolean;
    sourceDestCheck?: boolean;
    status?: DescribeNetworkInterfacesResultNetworkInterfacesStatusEnum;
    subnetId?: string;
    tagSet?: DescribeNetworkInterfacesResultNetworkInterfacesTagSet[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeNetworkInterfacesResult extends SpeakeasyBase {
    networkInterfaces?: DescribeNetworkInterfacesResultNetworkInterfaces[];
    nextToken?: string;
}
