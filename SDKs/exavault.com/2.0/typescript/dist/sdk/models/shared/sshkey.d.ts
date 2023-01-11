import { SpeakeasyBase } from "../../../internal/utils";
import { SshKeyAttributes } from "./sshkeyattributes";
export declare class SshKeyRelationshipsOwnerUserData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class SshKeyRelationshipsOwnerUser extends SpeakeasyBase {
    data?: SshKeyRelationshipsOwnerUserData;
}
export declare class SshKeyRelationships extends SpeakeasyBase {
    ownerUser?: SshKeyRelationshipsOwnerUser;
}
export declare enum SshKeyTypeEnum {
    SshKey = "sshKey"
}
/**
 * Object representing an SSH Key associated with a user.
**/
export declare class SshKey extends SpeakeasyBase {
    attributes?: SshKeyAttributes;
    id?: number;
    relationships?: SshKeyRelationships;
    type?: SshKeyTypeEnum;
}
