import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItemPriorityFeedSecurity extends SpeakeasyBase {
    clientCredentials: string;
}
export declare class GetItemPriorityFeedRequest extends SpeakeasyBase {
    /**
     * The formats that the client accepts for the response.<br><br>A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate error codes that are returned in JSON format.<br><br><b>Default:</b> <code>application/json,text/tab-separated-values</code>
     */
    accept: string;
    /**
     * Header specifying content range to be retrieved. Only supported range is bytes.<br> <br><b>Example</b> : <code>bytes = 0-102400</code>.
     */
    range: string;
    /**
     * The ID of the eBay marketplace where the item is hosted. <b>Note: </b> This value is case sensitive.<br><br>For example: <br>&nbsp;&nbsp;<code>X-EBAY-C-MARKETPLACE-ID = EBAY_US</code>  <br><br> For a list of supported sites see, <a href="/api-docs/buy/static/ref-marketplace-supported.html">Buy API Support by Marketplace</a>.
     */
    xEbayCMarketplaceId: string;
    /**
     * An eBay top-level category ID of the items to be returned in the feed file.<br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplaces, you can use the Taxonomy API <a href="/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field.<br><br><b>For example:</b><br>&nbsp;&nbsp;<code>"categoryTreeNodeLevel": 1</code> <br><br>For details see <a href="/api-docs/buy/api-feed.html#Getcat">Get the eBay categories of a marketplace</a>.</li></ul><br><br><b>Restriction:</b> Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
     */
    categoryId: string;
    /**
     * The date of the feed you want returned. This can be up to 14 days in the past but cannot be set to a date in the future.<br> <br><b>Format:</b> <code>yyyyMMdd</code><br ><br><span class="tablenote"> <b>Note: </b><ul>  <li>The daily <b>Item</b> feed files are available each day after 9AM MST (US Mountain Standard Time), which is -7 hours UTC time.</li>    <li>There is a 48 hour latency when generating the <b> Item</b> feed files. This means you can download the file for July 10th on July 12 after 9AM MST. <br><br><b>Note: </b> For categories with a large number of items, the latency can be up to 72 hours.</li> </ul></span>
     */
    date: string;
}
export declare class GetItemPriorityFeedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Partial Content
     */
    itemPriorityResponse?: shared.ItemPriorityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
