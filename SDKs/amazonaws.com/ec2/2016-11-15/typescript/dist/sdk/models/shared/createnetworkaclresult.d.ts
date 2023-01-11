import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the network ACL.
**/
export declare class CreateNetworkAclResultNetworkAcl extends SpeakeasyBase {
    associations?: Record<string, any>;
    entries?: Record<string, any>;
    isDefault?: Record<string, any>;
    networkAclId?: Record<string, any>;
    ownerId?: Record<string, any>;
    tags?: Record<string, any>;
    vpcId?: Record<string, any>;
}
export declare class CreateNetworkAclResult extends SpeakeasyBase {
    networkAcl?: CreateNetworkAclResultNetworkAcl;
}
