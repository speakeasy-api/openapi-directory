import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Node conflict resolution strategy:
 *
 * @remarks
 *
 * * `autorename`
 *
 * * `overwrite`
 *
 * * `fail`
 */
export declare enum RestoreDeletedNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for restoring deleted nodes
 */
export declare class RestoreDeletedNodesRequest extends SpeakeasyBase {
    /**
     * List of deleted node IDs
     */
    deletedNodeIds: number[];
    /**
     * Preserve Download Share Links and point them to the new node.
     */
    keepShareLinks?: boolean;
    /**
     * Node parent ID
     *
     * @remarks
     *
     * (default: previous parent ID)
     */
    parentId?: number;
    /**
     * Node conflict resolution strategy:
     *
     * @remarks
     *
     * * `autorename`
     *
     * * `overwrite`
     *
     * * `fail`
     */
    resolutionStrategy?: RestoreDeletedNodesRequestResolutionStrategyEnum;
}
