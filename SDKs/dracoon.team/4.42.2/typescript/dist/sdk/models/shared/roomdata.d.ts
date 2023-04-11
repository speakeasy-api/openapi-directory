import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
import { UserInfo } from "./userinfo";
/**
 * Node type
 */
export declare enum RoomDataTypeEnum {
    Room = "room"
}
/**
 * Room information
 */
export declare class RoomData extends SpeakeasyBase {
    /**
     * &#128679; Deprecated since v4.10.0
     *
     * @remarks
     *
     * List of rooms, where this room is a parent (if exist)
     */
    children?: RoomData[];
    /**
     * Returns the number of Download Shares of this node.
     */
    cntDownloadShares?: number;
    /**
     * Returns the number of Upload Shares of this node.
     */
    cntUploadShares?: number;
    /**
     * Expiration date
     */
    createdAt?: Date;
    /**
     * User information
     */
    createdBy?: UserInfo;
    /**
     * &#128679; Deprecated since v4.10.0
     *
     * @remarks
     *
     * Is recycle bin active (for rooms only)
     *
     * Recycle bin is always on (disabling is not possible).
     */
    hasRecycleBin: boolean;
    /**
     * Room ID
     */
    id: number;
    /**
     * Encryption state
     */
    isEncrypted: boolean;
    /**
     * Node is marked as favorite (for rooms / folders only)
     */
    isFavorite?: boolean;
    /**
     * Is user granted room permissions
     */
    isGranted: boolean;
    /**
     * Name
     */
    name: string;
    /**
     * Parent node ID (room or folder)
     */
    parentId?: number;
    /**
     * Node permissions
     */
    permissions?: NodePermissions;
    /**
     * Quota in byte
     */
    quota?: number;
    /**
     * Retention period for deleted nodes in days
     */
    recycleBinRetentionPeriod: number;
    /**
     * Room size
     */
    size?: number;
    /**
     * Node type
     */
    type?: RoomDataTypeEnum;
    /**
     * Modification date
     */
    updatedAt?: Date;
    /**
     * User information
     */
    updatedBy?: UserInfo;
}
