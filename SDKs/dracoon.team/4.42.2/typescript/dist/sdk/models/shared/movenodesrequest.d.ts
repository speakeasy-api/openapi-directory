import { SpeakeasyBase } from "../../../internal/utils";
import { MoveNode } from "./movenode";
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
export declare enum MoveNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for moving nodes
 */
export declare class MoveNodesRequest extends SpeakeasyBase {
    /**
     * List of nodes to be moved
     */
    items?: MoveNode[];
    /**
     * Preserve Download Share Links and point them to the new node.
     */
    keepShareLinks?: boolean;
    /**
     * &#128679; Deprecated since v4.5.0
     *
     * @remarks
     *
     * Node IDs
     *
     * Please use `items` instead.
     */
    nodeIds?: number[];
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
    resolutionStrategy?: MoveNodesRequestResolutionStrategyEnum;
}
