import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for deleting nodes from recycle bin
 */
export declare class DeleteDeletedNodesRequest extends SpeakeasyBase {
    /**
     * List of deleted node IDs
     */
    deletedNodeIds: number[];
}
