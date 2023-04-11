import { SpeakeasyBase } from "../../../internal/utils";
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
 *
 *
 *
 * (default: classification from parent room)
 */
export declare enum DeletedNodeClassificationEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Node type
 */
export declare enum DeletedNodeTypeEnum {
    Folder = "folder",
    File = "file"
}
/**
 * Deleted node information (Deleted node can be a folder or file)
 */
export declare class DeletedNode extends SpeakeasyBase {
    /**
     * Last access date
     */
    accessedAt?: Date;
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
     *
     *
     *
     * (default: classification from parent room)
     */
    classification?: DeletedNodeClassificationEnum;
    /**
     * Creation date
     */
    createdAt?: Date;
    /**
     * User information
     */
    createdBy?: UserInfo;
    /**
     * Deletion date
     */
    deletedAt?: Date;
    /**
     * User information
     */
    deletedBy?: UserInfo;
    /**
     * Expiration date
     */
    expireAt?: Date;
    /**
     * Node ID
     */
    id?: number;
    /**
     * Encryption state
     */
    isEncrypted?: boolean;
    /**
     * Node name
     */
    name: string;
    /**
     * User notes
     */
    notes?: string;
    /**
     * Parent node ID (room or folder)
     */
    parentId: number;
    /**
     * Parent node path
     *
     * @remarks
     *
     * `/` if node is a root node (room)
     */
    parentPath: string;
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
     * Node type
     */
    type: DeletedNodeTypeEnum;
    /**
     * Modification date
     */
    updatedAt?: Date;
    /**
     * User information
     */
    updatedBy?: UserInfo;
}
