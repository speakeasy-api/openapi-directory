import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the CIDR block.
 */
export declare enum DescribeVpcsResultVpcsCidrBlockAssociationSetCidrBlockStateStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Failing = "failing",
    Failed = "failed"
}
/**
 * Information about the state of the CIDR block.
 */
export declare class DescribeVpcsResultVpcsCidrBlockAssociationSetCidrBlockState extends SpeakeasyBase {
    state?: DescribeVpcsResultVpcsCidrBlockAssociationSetCidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an IPv4 CIDR block associated with a VPC.
 */
export declare class DescribeVpcsResultVpcsCidrBlockAssociationSet extends SpeakeasyBase {
    associationId?: string;
    cidrBlock?: string;
    cidrBlockState?: DescribeVpcsResultVpcsCidrBlockAssociationSetCidrBlockState;
}
/**
 * The allowed tenancy of instances launched into the VPC.
 */
export declare enum DescribeVpcsResultVpcsInstanceTenancyEnum {
    Default = "default",
    Dedicated = "dedicated",
    Host = "host"
}
/**
 * The state of the CIDR block.
 */
export declare enum DescribeVpcsResultVpcsIpv6CidrBlockAssociationSetIpv6CidrBlockStateStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Failing = "failing",
    Failed = "failed"
}
/**
 * Information about the state of the CIDR block.
 */
export declare class DescribeVpcsResultVpcsIpv6CidrBlockAssociationSetIpv6CidrBlockState extends SpeakeasyBase {
    state?: DescribeVpcsResultVpcsIpv6CidrBlockAssociationSetIpv6CidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an IPv6 CIDR block associated with a VPC.
 */
export declare class DescribeVpcsResultVpcsIpv6CidrBlockAssociationSet extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: DescribeVpcsResultVpcsIpv6CidrBlockAssociationSetIpv6CidrBlockState;
    ipv6Pool?: string;
    networkBorderGroup?: string;
}
/**
 * The current state of the VPC.
 */
export declare enum DescribeVpcsResultVpcsStateEnum {
    Pending = "pending",
    Available = "available"
}
/**
 * Describes a tag.
 */
export declare class DescribeVpcsResultVpcsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a VPC.
 */
export declare class DescribeVpcsResultVpcs extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockAssociationSet?: DescribeVpcsResultVpcsCidrBlockAssociationSet[];
    dhcpOptionsId?: string;
    instanceTenancy?: DescribeVpcsResultVpcsInstanceTenancyEnum;
    ipv6CidrBlockAssociationSet?: DescribeVpcsResultVpcsIpv6CidrBlockAssociationSet[];
    isDefault?: boolean;
    ownerId?: string;
    state?: DescribeVpcsResultVpcsStateEnum;
    tags?: DescribeVpcsResultVpcsTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeVpcsResult extends SpeakeasyBase {
    nextToken?: string;
    vpcs?: DescribeVpcsResultVpcs[];
}
