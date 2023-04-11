import { SpeakeasyBase } from "../../../internal/utils";
import { PromotionDetail } from "./promotiondetail";
/**
 * This type defines the fields in a paginated result set of seller promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items.
 */
export declare class PromotionsPagedCollection extends SpeakeasyBase {
    /**
     * The URI of the current page of results from the result set.
     */
    href?: string;
    /**
     * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
     */
    limit?: number;
    /**
     * The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048
     */
    next?: string;
    /**
     * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
     */
    offset?: number;
    /**
     * The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048
     */
    prev?: string;
    /**
     * A list containing the details of each returned promotion. This includes all the information about the promotions except for the listings that are part of the promotions.
     */
    promotions?: PromotionDetail[];
    /**
     * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
     */
    total?: number;
}
