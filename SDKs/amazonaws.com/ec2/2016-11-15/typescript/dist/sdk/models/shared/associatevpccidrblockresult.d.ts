import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the state of the CIDR block.
**/
export declare class AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState extends SpeakeasyBase {
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
/**
 * Information about the IPv4 CIDR block association.
**/
export declare class AssociateVpcCidrBlockResultCidrBlockAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    cidrBlock?: Record<string, any>;
    cidrBlockState?: AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState;
}
/**
 * Information about the state of the CIDR block.
**/
export declare class AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
/**
 * Information about the IPv6 CIDR block association.
**/
export declare class AssociateVpcCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    ipv6CidrBlock?: Record<string, any>;
    ipv6CidrBlockState?: AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
    ipv6Pool?: Record<string, any>;
    networkBorderGroup?: Record<string, any>;
}
export declare class AssociateVpcCidrBlockResult extends SpeakeasyBase {
    cidrBlockAssociation?: AssociateVpcCidrBlockResultCidrBlockAssociation;
    ipv6CidrBlockAssociation?: AssociateVpcCidrBlockResultIpv6CidrBlockAssociation;
    vpcId?: Record<string, any>;
}
