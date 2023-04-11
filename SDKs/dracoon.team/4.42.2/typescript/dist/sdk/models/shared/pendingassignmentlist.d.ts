import { SpeakeasyBase } from "../../../internal/utils";
import { PendingAssignmentData } from "./pendingassignmentdata";
import { Range } from "./range";
/**
 * List of pending assignments
 */
export declare class PendingAssignmentList extends SpeakeasyBase {
    /**
     * List of pending assignment information
     */
    items: PendingAssignmentData[];
    /**
     * Range information
     */
    range?: Range;
}
