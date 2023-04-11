import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { SubscribedNode } from "./subscribednode";
/**
 * List of subscribed nodes
 */
export declare class SubscribedNodeList extends SpeakeasyBase {
    /**
     * List of subscribed nodes
     */
    items: SubscribedNode[];
    /**
     * Range information
     */
    range: Range;
}
