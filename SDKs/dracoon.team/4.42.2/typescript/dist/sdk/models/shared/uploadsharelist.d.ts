import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { UploadShare } from "./uploadshare";
/**
 * List of Upload Shares
 */
export declare class UploadShareList extends SpeakeasyBase {
    /**
     * List of Upload Shares
     */
    items: UploadShare[];
    /**
     * Range information
     */
    range: Range;
}
