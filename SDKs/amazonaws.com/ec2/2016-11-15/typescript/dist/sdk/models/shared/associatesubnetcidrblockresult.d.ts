import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the state of the CIDR block.
**/
export declare class AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
/**
 * Information about the IPv6 CIDR block association.
**/
export declare class AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    ipv6CidrBlock?: Record<string, any>;
    ipv6CidrBlockState?: AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
}
export declare class AssociateSubnetCidrBlockResult extends SpeakeasyBase {
    ipv6CidrBlockAssociation?: AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation;
    subnetId?: Record<string, any>;
}
