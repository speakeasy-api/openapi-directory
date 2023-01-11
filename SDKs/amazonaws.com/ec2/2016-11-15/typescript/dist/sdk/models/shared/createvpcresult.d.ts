import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the VPC.
**/
export declare class CreateVpcResultVpc extends SpeakeasyBase {
    cidrBlock?: Record<string, any>;
    cidrBlockAssociationSet?: Record<string, any>;
    dhcpOptionsId?: Record<string, any>;
    instanceTenancy?: Record<string, any>;
    ipv6CidrBlockAssociationSet?: Record<string, any>;
    isDefault?: Record<string, any>;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    vpcId?: Record<string, any>;
}
export declare class CreateVpcResult extends SpeakeasyBase {
    vpc?: CreateVpcResultVpc;
}
