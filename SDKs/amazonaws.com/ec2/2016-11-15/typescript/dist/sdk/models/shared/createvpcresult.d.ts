import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the CIDR block.
 */
export declare enum CreateVpcResultVpcCidrBlockAssociationSetCidrBlockStateStateEnum {
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
export declare class CreateVpcResultVpcCidrBlockAssociationSetCidrBlockState extends SpeakeasyBase {
    state?: CreateVpcResultVpcCidrBlockAssociationSetCidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an IPv4 CIDR block associated with a VPC.
 */
export declare class CreateVpcResultVpcCidrBlockAssociationSet extends SpeakeasyBase {
    associationId?: string;
    cidrBlock?: string;
    cidrBlockState?: CreateVpcResultVpcCidrBlockAssociationSetCidrBlockState;
}
/**
 * The allowed tenancy of instances launched into the VPC.
 */
export declare enum CreateVpcResultVpcInstanceTenancyEnum {
    Default = "default",
    Dedicated = "dedicated",
    Host = "host"
}
/**
 * The state of the CIDR block.
 */
export declare enum CreateVpcResultVpcIpv6CidrBlockAssociationSetIpv6CidrBlockStateStateEnum {
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
export declare class CreateVpcResultVpcIpv6CidrBlockAssociationSetIpv6CidrBlockState extends SpeakeasyBase {
    state?: CreateVpcResultVpcIpv6CidrBlockAssociationSetIpv6CidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an IPv6 CIDR block associated with a VPC.
 */
export declare class CreateVpcResultVpcIpv6CidrBlockAssociationSet extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: CreateVpcResultVpcIpv6CidrBlockAssociationSetIpv6CidrBlockState;
    ipv6Pool?: string;
    networkBorderGroup?: string;
}
/**
 * The current state of the VPC.
 */
export declare enum CreateVpcResultVpcStateEnum {
    Pending = "pending",
    Available = "available"
}
/**
 * Describes a tag.
 */
export declare class CreateVpcResultVpcTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the VPC.
 */
export declare class CreateVpcResultVpc extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockAssociationSet?: CreateVpcResultVpcCidrBlockAssociationSet[];
    dhcpOptionsId?: string;
    instanceTenancy?: CreateVpcResultVpcInstanceTenancyEnum;
    ipv6CidrBlockAssociationSet?: CreateVpcResultVpcIpv6CidrBlockAssociationSet[];
    isDefault?: boolean;
    ownerId?: string;
    state?: CreateVpcResultVpcStateEnum;
    tags?: CreateVpcResultVpcTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateVpcResult extends SpeakeasyBase {
    vpc?: CreateVpcResultVpc;
}
