import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The interface accessed
 */
export declare enum UserCipherUseEntityInterfaceEnum {
    Web = "web",
    Ftp = "ftp",
    Sftp = "sftp",
    Dav = "dav",
    Desktop = "desktop",
    Restapi = "restapi",
    Robot = "robot",
    Jsapi = "jsapi"
}
/**
 * List User Cipher Uses
 */
export declare class UserCipherUseEntity extends SpeakeasyBase {
    /**
     * The earliest recorded use of this combination of interface and protocol and cipher (for this user)
     */
    createdAt?: Date;
    /**
     * UserCipherUse ID
     */
    id?: number;
    /**
     * The interface accessed
     */
    interface?: UserCipherUseEntityInterfaceEnum;
    /**
     * The protocol and cipher employed
     */
    protocolCipher?: string;
    /**
     * The most recent use of this combination of interface and protocol and cipher (for this user)
     */
    updatedAt?: Date;
    /**
     * ID of the user who performed this access
     */
    userId?: number;
}
