import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of a CIDR block.
 */
export declare enum AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockStateStateEnum {
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
export declare class AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
    state?: AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockStateStateEnum;
    statusMessage?: string;
}
/**
 * Information about the IPv6 association.
 */
export declare class AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
}
/**
 * Success
 */
export declare class AssociateSubnetCidrBlockResult extends SpeakeasyBase {
    ipv6CidrBlockAssociation?: AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation;
    subnetId?: string;
}
