import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the CIDR block.
 */
export declare enum DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockStateStateEnum {
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
export declare class DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState extends SpeakeasyBase {
    state?: DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Information about the IPv4 CIDR block association.
 */
export declare class DisassociateVpcCidrBlockResultCidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    cidrBlock?: string;
    cidrBlockState?: DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState;
}
/**
 * The state of the CIDR block.
 */
export declare enum DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockStateStateEnum {
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
export declare class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
    state?: DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Information about the IPv6 CIDR block association.
 */
export declare class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
    ipv6Pool?: string;
    networkBorderGroup?: string;
}
/**
 * Success
 */
export declare class DisassociateVpcCidrBlockResult extends SpeakeasyBase {
    cidrBlockAssociation?: DisassociateVpcCidrBlockResultCidrBlockAssociation;
    ipv6CidrBlockAssociation?: DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation;
    vpcId?: string;
}
