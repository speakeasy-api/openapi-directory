import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the CIDR block.
 */
export declare enum CreateDefaultVpcResultVpcCidrBlockAssociationSetCidrBlockStateStateEnum {
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
export declare class CreateDefaultVpcResultVpcCidrBlockAssociationSetCidrBlockState extends SpeakeasyBase {
    state?: CreateDefaultVpcResultVpcCidrBlockAssociationSetCidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an IPv4 CIDR block associated with a VPC.
 */
export declare class CreateDefaultVpcResultVpcCidrBlockAssociationSet extends SpeakeasyBase {
    associationId?: string;
    cidrBlock?: string;
    cidrBlockState?: CreateDefaultVpcResultVpcCidrBlockAssociationSetCidrBlockState;
}
/**
 * The allowed tenancy of instances launched into the VPC.
 */
export declare enum CreateDefaultVpcResultVpcInstanceTenancyEnum {
    Default = "default",
    Dedicated = "dedicated",
    Host = "host"
}
/**
 * The state of the CIDR block.
 */
export declare enum CreateDefaultVpcResultVpcIpv6CidrBlockAssociationSetIpv6CidrBlockStateStateEnum {
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
export declare class CreateDefaultVpcResultVpcIpv6CidrBlockAssociationSetIpv6CidrBlockState extends SpeakeasyBase {
    state?: CreateDefaultVpcResultVpcIpv6CidrBlockAssociationSetIpv6CidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an IPv6 CIDR block associated with a VPC.
 */
export declare class CreateDefaultVpcResultVpcIpv6CidrBlockAssociationSet extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: CreateDefaultVpcResultVpcIpv6CidrBlockAssociationSetIpv6CidrBlockState;
    ipv6Pool?: string;
    networkBorderGroup?: string;
}
/**
 * The current state of the VPC.
 */
export declare enum CreateDefaultVpcResultVpcStateEnum {
    Pending = "pending",
    Available = "available"
}
/**
 * Describes a tag.
 */
export declare class CreateDefaultVpcResultVpcTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the VPC.
 */
export declare class CreateDefaultVpcResultVpc extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockAssociationSet?: CreateDefaultVpcResultVpcCidrBlockAssociationSet[];
    dhcpOptionsId?: string;
    instanceTenancy?: CreateDefaultVpcResultVpcInstanceTenancyEnum;
    ipv6CidrBlockAssociationSet?: CreateDefaultVpcResultVpcIpv6CidrBlockAssociationSet[];
    isDefault?: boolean;
    ownerId?: string;
    state?: CreateDefaultVpcResultVpcStateEnum;
    tags?: CreateDefaultVpcResultVpcTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateDefaultVpcResult extends SpeakeasyBase {
    vpc?: CreateDefaultVpcResultVpc;
}
