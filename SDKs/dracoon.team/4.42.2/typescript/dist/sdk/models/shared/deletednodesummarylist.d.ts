import { SpeakeasyBase } from "../../../internal/utils";
import { DeletedNodeSummary } from "./deletednodesummary";
import { Range } from "./range";
/**
 * List of deleted nodes
 */
export declare class DeletedNodeSummaryList extends SpeakeasyBase {
    /**
     * List of deleted nodes (summary)
     */
    items: DeletedNodeSummary[];
    /**
     * Range information
     */
    range: Range;
}
