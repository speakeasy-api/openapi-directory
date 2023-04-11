import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItemGroupFeedSecurity extends SpeakeasyBase {
    clientCredentials: string;
}
export declare class GetItemGroupFeedRequest extends SpeakeasyBase {
    /**
     * The formats that the client accepts for the response.<br><br>A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate error codes that are returned in JSON format.<br><br><b>Default:</b> <code>application/json,text/tab-separated-values</code>
     */
    accept: string;
    /**
     * <a name="range-header"></a>This header specifies the range in bytes of the chunks of the gzip file being returned. <br><br><b> Format:</b> <code>bytes=<em>startpos</em>-<em>endpos</em></code><br><br>  For example, the following retrieves the first 10 MBs of the feed file. <br><br>&nbsp;&nbsp;<code>Range bytes=0-10485760</code> <br><br>For more information about using this header, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>. <br><br><b>Maximum:</b> 100 MB (10MB in the Sandbox)
     */
    range?: string;
    /**
     * The ID of the eBay marketplace where the item is hosted. <b>Note: </b> This value is case sensitive.<br><br>For example: <br>&nbsp;&nbsp;<code>X-EBAY-C-MARKETPLACE-ID = EBAY_US</code>  <br><br> For a list of supported sites see, <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.
     */
    xEbayCMarketplaceId: string;
    /**
     * An eBay top-level category ID of the items to be returned in the feed file.<br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplaces, you can use the Taxonomy API <a href="/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field. <br><br><b>For example:</b><br>&nbsp;&nbsp;<code>"categoryTreeNodeLevel": 1</code> <br><br>For details see <a href="/api-docs/buy/buy-categories.html">Get Categories for Buy APIs</a>. </li>  </ul> <br><br>   <b>Restriction:</b> Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
     */
    categoryId: string;
    /**
     *  The date of the daily <b>Item Group</b> feed file (<b>feed_scope</b>=<code>NEWLY_LISTED</code>) you want. <p>The <b> date</b> is required only for the daily <b>Item Group</b> feed file. If you specify a date for the <b>Item Group Bootstrap</b> file (<b>feed_scope</b>=<code>ALL_ACTIVE</code>), the date is ignored and the latest file is returned. The date the <b>Item Group Bootstrap</b> feed file was generated is returned in the <b>Last-Modified</b> response header.</code></p>    <p>The <b> Item Group</b> feed files are generated every day and there are 14 daily files available.</p> <p>There is a 48 hour latency when generating the files. This means on July 10, the latest feed file you can download is July 8.</p>  <span class="tablenote"><b>Note: </b> The generated files are stored using MST (US Mountain Standard Time), which is -7 hours UTC time.</span><br> <br><b> Format: </b><code>yyyyMMdd</code><br><br><b> Requirements: </b> <ul>  <li>Required only when <b>feed_scope</b>=<code>NEWLY_LISTED</code> </li>   <li>Must be within 3-14 days in the past</li>    </ul>
     */
    date?: string;
    /**
     * Specifies the type of file to return. <br><br><b>Valid Values: </b>   <ul> <li><b> NEWLY_LISTED</b> - Returns the <b>Item Group</b> feed file containing the  item group variation information for items in the daily <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item</a> feed file that were associated with an item group. <br><br>The items in this type of <b>Item</b> feed file are items that were listed on the day specified by the <b> date</b> parameter in the category specified by the <b>category_id</b> parameter. <br><br><code>/item_group?feed_scope=NEWLY_LISTED&category_id=15032&date=20170925</code></li> <li><b>ALL_ACTIVE</b> - Returns the weekly <b>Item Group Bootstrap</b> file containing the item group  variation information for items in the weekly <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item Bootstrap</a> feed file that were associated with an item group. The items are Good 'Til Cancelled items in the category specified by the <b> category_id</b> parameter.  <br><br>  <span class="tablenote"><b>Note: </b> Bootstrap files are generated every Tuesday and the file is available on Wednesday. However, the exact time the file is available can vary so we recommend you download the Bootstrap file on Thursday. The item groups in the file are for the items that were in the specified category on Sunday.</span><br><br><code>/item_group?feed_scope=ALL_ACTIVE&category_id=15032</code> <br><br>
     */
    feedScope: string;
}
export declare class GetItemGroupFeedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Partial Content
     */
    itemGroupResponse?: shared.ItemGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
