import { SpeakeasyBase } from "../../../internal/utils";
import { Text } from "./text";
/**
 * Represents a page with results returned by query operation. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
 */
export declare class TextPage extends SpeakeasyBase {
    items?: Text[];
    /**
     * A maximum number of returned items. If items.size() < limit assume no more items
     */
    limit?: number;
    /**
     * An offset from a start of paging source
     */
    offset?: number;
    /**
     * Total count of available results. -1 if unknown
     */
    totalCount?: number;
}
