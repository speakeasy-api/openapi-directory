import { SpeakeasyBase } from "../../../internal/utils";
import { CopyNode } from "./copynode";
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
export declare enum CopyNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for copying nodes
 */
export declare class CopyNodesRequest extends SpeakeasyBase {
    /**
     * List of nodes to be copied
     */
    items?: CopyNode[];
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
    resolutionStrategy?: CopyNodesRequestResolutionStrategyEnum;
}
