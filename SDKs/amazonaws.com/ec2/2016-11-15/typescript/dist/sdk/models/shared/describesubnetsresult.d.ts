import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of a CIDR block.
 */
export declare enum DescribeSubnetsResultSubnetsIpv6CidrBlockAssociationSetIpv6CidrBlockStateStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Failing = "failing",
    Failed = "failed"
}
/**
 * The state of the CIDR block.
 */
export declare class DescribeSubnetsResultSubnetsIpv6CidrBlockAssociationSetIpv6CidrBlockState extends SpeakeasyBase {
    state?: DescribeSubnetsResultSubnetsIpv6CidrBlockAssociationSetIpv6CidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an association between a subnet and an IPv6 CIDR block.
 */
export declare class DescribeSubnetsResultSubnetsIpv6CidrBlockAssociationSet extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: DescribeSubnetsResultSubnetsIpv6CidrBlockAssociationSetIpv6CidrBlockState;
}
/**
 * The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.
 */
export declare enum DescribeSubnetsResultSubnetsPrivateDnsNameOptionsOnLaunchHostnameTypeEnum {
    IpName = "ip-name",
    ResourceName = "resource-name"
}
/**
 * The type of hostnames to assign to instances in the subnet at launch. An instance hostname is based on the IPv4 address or ID of the instance.
 */
export declare class DescribeSubnetsResultSubnetsPrivateDnsNameOptionsOnLaunch extends SpeakeasyBase {
    enableResourceNameDnsAAAARecord?: boolean;
    enableResourceNameDnsARecord?: boolean;
    hostnameType?: DescribeSubnetsResultSubnetsPrivateDnsNameOptionsOnLaunchHostnameTypeEnum;
}
/**
 * The current state of the subnet.
 */
export declare enum DescribeSubnetsResultSubnetsStateEnum {
    Pending = "pending",
    Available = "available"
}
/**
 * Describes a tag.
 */
export declare class DescribeSubnetsResultSubnetsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a subnet.
 */
export declare class DescribeSubnetsResultSubnets extends SpeakeasyBase {
    assignIpv6AddressOnCreation?: boolean;
    availabilityZone?: string;
    availabilityZoneId?: string;
    availableIpAddressCount?: number;
    cidrBlock?: string;
    customerOwnedIpv4Pool?: string;
    defaultForAz?: boolean;
    enableDns64?: boolean;
    enableLniAtDeviceIndex?: number;
    ipv6CidrBlockAssociationSet?: DescribeSubnetsResultSubnetsIpv6CidrBlockAssociationSet[];
    ipv6Native?: boolean;
    mapCustomerOwnedIpOnLaunch?: boolean;
    mapPublicIpOnLaunch?: boolean;
    outpostArn?: string;
    ownerId?: string;
    privateDnsNameOptionsOnLaunch?: DescribeSubnetsResultSubnetsPrivateDnsNameOptionsOnLaunch;
    state?: DescribeSubnetsResultSubnetsStateEnum;
    subnetArn?: string;
    subnetId?: string;
    tags?: DescribeSubnetsResultSubnetsTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeSubnetsResult extends SpeakeasyBase {
    nextToken?: string;
    subnets?: DescribeSubnetsResultSubnets[];
}
