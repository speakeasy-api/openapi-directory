import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { SubscribedDownloadShare } from "./subscribeddownloadshare";
/**
 * List of subscribed download shares
 */
export declare class SubscribedDownloadShareList extends SpeakeasyBase {
    /**
     * List of subscribed download shares
     */
    items: SubscribedDownloadShare[];
    /**
     * Range information
     */
    range: Range;
}
