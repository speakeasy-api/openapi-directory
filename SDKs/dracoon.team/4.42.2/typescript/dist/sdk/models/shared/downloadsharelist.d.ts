import { SpeakeasyBase } from "../../../internal/utils";
import { DownloadShare } from "./downloadshare";
import { Range } from "./range";
/**
 * List of Download Shares
 */
export declare class DownloadShareList extends SpeakeasyBase {
    /**
     * List of Download Shares
     */
    items: DownloadShare[];
    /**
     * Range information
     */
    range: Range;
}
