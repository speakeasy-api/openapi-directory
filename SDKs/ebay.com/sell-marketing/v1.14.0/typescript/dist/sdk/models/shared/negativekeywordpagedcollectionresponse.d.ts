import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeyword } from "./negativekeyword";
/**
 * A type that defines the negative keywords, returned in a paged collection.
 */
export declare class NegativeKeywordPagedCollectionResponse extends SpeakeasyBase {
    /**
     * The URI of the current page of results from the result set.
     */
    href?: string;
    /**
     * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
     */
    limit?: number;
    /**
     * A list of negative keywords returned in the paginated collection.
     */
    negativeKeywords?: NegativeKeyword[];
    /**
     * The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set.
     */
    next?: string;
    /**
     * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><b>Default:</b> <code>0</code><br /><br /><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>
     */
    offset?: number;
    /**
     * The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results.
     */
    prev?: string;
    /**
     * The total number of result sets in the paginated collection.
     */
    total?: number;
}
