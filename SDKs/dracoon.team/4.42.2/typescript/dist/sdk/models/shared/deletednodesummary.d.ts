import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Node type
 */
export declare enum DeletedNodeSummaryTypeEnum {
    Folder = "folder",
    File = "file"
}
/**
 * Deleted node information (Deleted node can be a folder or file)
 */
export declare class DeletedNodeSummary extends SpeakeasyBase {
    /**
     * Number of deleted versions of this file
     */
    cntVersions: number;
    /**
     * First deleted version
     */
    firstDeletedAt: Date;
    /**
     * Last deleted version
     */
    lastDeletedAt: Date;
    /**
     * Node ID of last deleted version
     */
    lastDeletedNodeId: number;
    /**
     * Node name
     */
    name: string;
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
    type: DeletedNodeSummaryTypeEnum;
}
