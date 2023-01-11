import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the state of the CIDR block.
**/
export declare class DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState extends SpeakeasyBase {
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
/**
 * Information about the IPv4 CIDR block association.
**/
export declare class DisassociateVpcCidrBlockResultCidrBlockAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    cidrBlock?: Record<string, any>;
    cidrBlockState?: DisassociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState;
}
/**
 * Information about the state of the CIDR block.
**/
export declare class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState extends SpeakeasyBase {
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
/**
 * Information about the IPv6 CIDR block association.
**/
export declare class DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    ipv6CidrBlock?: Record<string, any>;
    ipv6CidrBlockState?: DisassociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
    ipv6Pool?: Record<string, any>;
    networkBorderGroup?: Record<string, any>;
}
export declare class DisassociateVpcCidrBlockResult extends SpeakeasyBase {
    cidrBlockAssociation?: DisassociateVpcCidrBlockResultCidrBlockAssociation;
    ipv6CidrBlockAssociation?: DisassociateVpcCidrBlockResultIpv6CidrBlockAssociation;
    vpcId?: Record<string, any>;
}
