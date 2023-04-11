import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The association information for an Elastic IP address (IPv4) associated with the network interface.
 */
export declare class CreateNetworkInterfaceResultNetworkInterfaceAssociation extends SpeakeasyBase {
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
export declare class CreateNetworkInterfaceResultNetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification extends SpeakeasyBase {
    enaSrdUdpEnabled?: boolean;
}
/**
 * Configures ENA Express for the network interface that this action attaches to the instance.
 */
export declare class CreateNetworkInterfaceResultNetworkInterfaceAttachmentEnaSrdSpecification extends SpeakeasyBase {
    enaSrdEnabled?: boolean;
    enaSrdUdpSpecification?: CreateNetworkInterfaceResultNetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification;
}
/**
 * The attachment state.
 */
export declare enum CreateNetworkInterfaceResultNetworkInterfaceAttachmentStatusEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * The network interface attachment.
 */
export declare class CreateNetworkInterfaceResultNetworkInterfaceAttachment extends SpeakeasyBase {
    attachTime?: Date;
    attachmentId?: string;
    deleteOnTermination?: boolean;
    deviceIndex?: number;
    enaSrdSpecification?: CreateNetworkInterfaceResultNetworkInterfaceAttachmentEnaSrdSpecification;
    instanceId?: string;
    instanceOwnerId?: string;
    networkCardIndex?: number;
    status?: CreateNetworkInterfaceResultNetworkInterfaceAttachmentStatusEnum;
}
/**
 * Describes a security group.
 */
export declare class CreateNetworkInterfaceResultNetworkInterfaceGroups extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
}
/**
 * The type of network interface.
 */
export declare enum CreateNetworkInterfaceResultNetworkInterfaceInterfaceTypeEnum {
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
export declare class CreateNetworkInterfaceResultNetworkInterfaceIpv4Prefixes extends SpeakeasyBase {
    ipv4Prefix?: string;
}
/**
 * Describes an IPv6 address associated with a network interface.
 */
export declare class CreateNetworkInterfaceResultNetworkInterfaceIpv6Addresses extends SpeakeasyBase {
    ipv6Address?: string;
}
/**
 * Describes the IPv6 prefix.
 */
export declare class CreateNetworkInterfaceResultNetworkInterfaceIpv6Prefixes extends SpeakeasyBase {
    ipv6Prefix?: string;
}
/**
 * The association information for an Elastic IP address (IPv4) associated with the network interface.
 */
export declare class CreateNetworkInterfaceResultNetworkInterfacePrivateIpAddressesAssociation extends SpeakeasyBase {
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
export declare class CreateNetworkInterfaceResultNetworkInterfacePrivateIpAddresses extends SpeakeasyBase {
    association?: CreateNetworkInterfaceResultNetworkInterfacePrivateIpAddressesAssociation;
    primary?: boolean;
    privateDnsName?: string;
    privateIpAddress?: string;
}
/**
 * The status of the network interface.
 */
export declare enum CreateNetworkInterfaceResultNetworkInterfaceStatusEnum {
    Available = "available",
    Associated = "associated",
    Attaching = "attaching",
    InUse = "in-use",
    Detaching = "detaching"
}
/**
 * Describes a tag.
 */
export declare class CreateNetworkInterfaceResultNetworkInterfaceTagSet extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the network interface.
 */
export declare class CreateNetworkInterfaceResultNetworkInterface extends SpeakeasyBase {
    association?: CreateNetworkInterfaceResultNetworkInterfaceAssociation;
    attachment?: CreateNetworkInterfaceResultNetworkInterfaceAttachment;
    availabilityZone?: string;
    denyAllIgwTraffic?: boolean;
    description?: string;
    groups?: CreateNetworkInterfaceResultNetworkInterfaceGroups[];
    interfaceType?: CreateNetworkInterfaceResultNetworkInterfaceInterfaceTypeEnum;
    ipv4Prefixes?: CreateNetworkInterfaceResultNetworkInterfaceIpv4Prefixes[];
    ipv6Address?: string;
    ipv6Addresses?: CreateNetworkInterfaceResultNetworkInterfaceIpv6Addresses[];
    ipv6Native?: boolean;
    ipv6Prefixes?: CreateNetworkInterfaceResultNetworkInterfaceIpv6Prefixes[];
    macAddress?: string;
    networkInterfaceId?: string;
    outpostArn?: string;
    ownerId?: string;
    privateDnsName?: string;
    privateIpAddress?: string;
    privateIpAddresses?: CreateNetworkInterfaceResultNetworkInterfacePrivateIpAddresses[];
    requesterId?: string;
    requesterManaged?: boolean;
    sourceDestCheck?: boolean;
    status?: CreateNetworkInterfaceResultNetworkInterfaceStatusEnum;
    subnetId?: string;
    tagSet?: CreateNetworkInterfaceResultNetworkInterfaceTagSet[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateNetworkInterfaceResult extends SpeakeasyBase {
    clientToken?: string;
    networkInterface?: CreateNetworkInterfaceResultNetworkInterface;
}
