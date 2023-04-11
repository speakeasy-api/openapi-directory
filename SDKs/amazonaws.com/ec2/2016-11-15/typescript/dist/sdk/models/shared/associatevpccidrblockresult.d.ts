import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the CIDR block.
 */
export declare enum AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockStateStateEnum {
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
export declare class AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState extends SpeakeasyBase {
    state?: AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Information about the IPv4 CIDR block association.
 */
export declare class AssociateVpcCidrBlockResultCidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    cidrBlock?: string;
    cidrBlockState?: AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState;
}
/**
 * The state of the CIDR block.
 */
export declare enum AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockStateStateEnum {
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
export declare class AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
    state?: AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Information about the IPv6 CIDR block association.
 */
export declare class AssociateVpcCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
    ipv6Pool?: string;
    networkBorderGroup?: string;
}
/**
 * Success
 */
export declare class AssociateVpcCidrBlockResult extends SpeakeasyBase {
    cidrBlockAssociation?: AssociateVpcCidrBlockResultCidrBlockAssociation;
    ipv6CidrBlockAssociation?: AssociateVpcCidrBlockResultIpv6CidrBlockAssociation;
    vpcId?: string;
}
