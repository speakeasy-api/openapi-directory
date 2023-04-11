import { SpeakeasyBase } from "../../../internal/utils";
import { SSHKeyAttributes } from "./sshkeyattributes";
export declare class SSHKeyRelationshipsOwnerUserData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class SSHKeyRelationshipsOwnerUser extends SpeakeasyBase {
    data?: SSHKeyRelationshipsOwnerUserData;
}
export declare class SSHKeyRelationships extends SpeakeasyBase {
    ownerUser?: SSHKeyRelationshipsOwnerUser;
}
/**
 * Type of the object.
 */
export declare enum SSHKeyTypeEnum {
    SshKey = "sshKey"
}
/**
 * Object representing an SSH Key associated with a user.
 */
export declare class SSHKey extends SpeakeasyBase {
    attributes?: SSHKeyAttributes;
    /**
     * ID of the key.
     */
    id?: number;
    relationships?: SSHKeyRelationships;
    /**
     * Type of the object.
     */
    type?: SSHKeyTypeEnum;
}
