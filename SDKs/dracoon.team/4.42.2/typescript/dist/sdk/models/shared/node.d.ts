import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionInfo } from "./encryptioninfo";
import { NodePermissions } from "./nodepermissions";
import { UserInfo } from "./userinfo";
/**
 * Classification ID:
 *
 * @remarks
 *
 * * `1` - public
 *
 * * `2` - internal
 *
 * * `3` - confidential
 *
 * * `4` - strictly confidential
 */
export declare enum NodeClassificationEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Node type
 */
export declare enum NodeTypeEnum {
    Room = "room",
    Folder = "folder",
    File = "file"
}
/**
 * Node information (Node can be a room, folder or file)
 */
export declare class Node extends SpeakeasyBase {
    /**
     * &#128640; Since v4.15.0
     *
     * @remarks
     *
     * Auth parent room ID
     */
    authParentId?: number;
    /**
     * Version of last change in this node or a node further down the tree.
     */
    branchVersion?: number;
    /**
     * &#128679; Deprecated since v4.10.0
     *
     * @remarks
     *
     * Child nodes list (if requested)
     *
     * (for rooms / folders only)
     */
    children?: Node[];
    /**
     * Classification ID:
     *
     * @remarks
     *
     * * `1` - public
     *
     * * `2` - internal
     *
     * * `3` - confidential
     *
     * * `4` - strictly confidential
     */
    classification?: NodeClassificationEnum;
    /**
     * &#128679; Deprecated since v4.11.0
     *
     * @remarks
     *
     * Number of direct children
     *
     * (no recursion; for rooms / folders only)
     */
    cntChildren?: number;
    /**
     * Returns the number of comments of this node.
     */
    cntComments?: number;
    /**
     * Number of deleted versions of this file / folder
     *
     * @remarks
     *
     * (for rooms / folders only)
     */
    cntDeletedVersions?: number;
    /**
     * Returns the number of Download Shares of this node.
     */
    cntDownloadShares?: number;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Amount of direct child files where this node is the parent node
     *
     * (no recursion; for rooms / folders only)
     */
    cntFiles?: number;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Amount of direct child folders where this node is the parent node
     *
     * (no recursion; for rooms / folders only)
     */
    cntFolders?: number;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Amount of direct child rooms where this node is the parent node
     *
     * (no recursion; for rooms only)
     */
    cntRooms?: number;
    /**
     * Returns the number of Upload Shares of this node.
     */
    cntUploadShares?: number;
    /**
     * Creation date
     */
    createdAt?: Date;
    /**
     * User information
     */
    createdBy?: UserInfo;
    /**
     * Encryption states
     */
    encryptionInfo?: EncryptionInfo;
    /**
     * Expiration date
     */
    expireAt?: Date;
    /**
     * File type / extension (for files only)
     */
    fileType?: string;
    /**
     * Is activities log active (for rooms only)
     */
    hasActivitiesLog?: boolean;
    /**
     * MD5 hash of file
     */
    hash?: string;
    /**
     * Node ID
     */
    id: number;
    /**
     * Inherit permissions from parent room
     *
     * @remarks
     *
     * (default: `false` if `parentId` is `0`; otherwise: `true`)
     */
    inheritPermissions?: boolean;
    /**
     * &#128640; Since v4.11.0
     *
     * @remarks
     *
     * Determines whether node is browsable by client (for rooms only)
     */
    isBrowsable?: boolean;
    /**
     * Encryption state
     */
    isEncrypted?: boolean;
    /**
     * Node is marked as favorite (for rooms / folders only)
     */
    isFavorite?: boolean;
    /**
     * Media server media token
     */
    mediaToken?: string;
    /**
     * File media type (for files only)
     */
    mediaType?: string;
    /**
     * Name
     */
    name: string;
    /**
     * User notes
     */
    notes?: string;
    /**
     * Parent node ID (room or folder)
     */
    parentId?: number;
    /**
     * Parent node path
     *
     * @remarks
     *
     * `/` if node is a root node (room)
     */
    parentPath?: string;
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
    recycleBinRetentionPeriod?: number;
    /**
     * &#128640; Since v4.37.0
     *
     * @remarks
     *
     * Reference ID. Identical across all versions of a file
     */
    referenceId?: number;
    /**
     * Node size in byte
     */
    size?: number;
    /**
     * &#128640; Since v4.22.0
     *
     * @remarks
     *
     * Time the node was created on external file system
     */
    timestampCreation?: Date;
    /**
     * &#128640; Since v4.22.0
     *
     * @remarks
     *
     * Time the content of a node was last modified on external file system
     */
    timestampModification?: Date;
    /**
     * Node type
     */
    type: NodeTypeEnum;
    /**
     * Modification date
     */
    updatedAt?: Date;
    /**
     * User information
     */
    updatedBy?: UserInfo;
}
