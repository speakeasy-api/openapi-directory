import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of a CIDR block.
 */
export declare enum DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockStateStateEnum {
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
export declare class DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
    state?: DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Information about the IPv6 CIDR block association.
 */
export declare class DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
}
/**
 * Success
 */
export declare class DisassociateSubnetCidrBlockResult extends SpeakeasyBase {
    ipv6CidrBlockAssociation?: DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation;
    subnetId?: string;
}
