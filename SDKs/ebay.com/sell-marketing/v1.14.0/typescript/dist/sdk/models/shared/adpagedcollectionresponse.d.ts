import { SpeakeasyBase } from "../../../internal/utils";
import { Ad } from "./ad";
/**
 * This type defines the fields that paginate the ads returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.
 */
export declare class AdPagedCollectionResponse extends SpeakeasyBase {
    /**
     * The list of ads that matched the request criteria.
     */
    ads?: Ad[];
    /**
     * The URI of the current page of results from the result set.
     */
    href?: string;
    /**
     * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.<p><b>Default</b>: <code>10</code>
     */
    limit?: number;
    /**
     * The call URI that can be used to retrieve the next page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be increased to retrieve the next page of results. <br><br><b>Max length</b>: 2048
     */
    next?: string;
    /**
     * The number of results skipped in the result set before listing the first result on the current page. This value can be set in the request with the <b>offset</b> query parameter. If the <b>offset</b> value is not set, it defaults to zero.<p><b>Default</b>: <code>0</code></p><p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
     */
    offset?: number;
    /**
     * The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048
     */
    prev?: string;
    /**
     * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
     */
    total?: number;
}
