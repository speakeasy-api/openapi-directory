import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { SubscribedUploadShare } from "./subscribeduploadshare";
/**
 * List of subscribed upload shares
 */
export declare class SubscribedUploadShareList extends SpeakeasyBase {
    /**
     * List of subscribed upload shares
     */
    items: SubscribedUploadShare[];
    /**
     * Range information
     */
    range: Range;
}
