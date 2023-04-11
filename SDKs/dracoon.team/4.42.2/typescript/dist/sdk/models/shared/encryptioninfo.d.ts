import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DRACOON key state
 */
export declare enum EncryptionInfoDataSpaceKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}
/**
 * Room key state
 */
export declare enum EncryptionInfoRoomKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}
/**
 * User key state
 */
export declare enum EncryptionInfoUserKeyStateEnum {
    None = "none",
    Available = "available",
    Pending = "pending"
}
/**
 * Encryption states
 */
export declare class EncryptionInfo extends SpeakeasyBase {
    /**
     * DRACOON key state
     */
    dataSpaceKeyState: EncryptionInfoDataSpaceKeyStateEnum;
    /**
     * Room key state
     */
    roomKeyState: EncryptionInfoRoomKeyStateEnum;
    /**
     * User key state
     */
    userKeyState: EncryptionInfoUserKeyStateEnum;
}
