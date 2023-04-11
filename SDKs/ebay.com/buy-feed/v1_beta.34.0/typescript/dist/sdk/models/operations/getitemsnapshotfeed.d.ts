import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItemSnapshotFeedSecurity extends SpeakeasyBase {
    clientCredentials: string;
}
export declare class GetItemSnapshotFeedRequest extends SpeakeasyBase {
    /**
     * The formats that the client accepts for the response.<br><br>A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate error codes that are returned in JSON format.<br><br><b>Default:</b> <code>application/json,text/tab-separated-values</code>
     */
    accept: string;
    /**
     * <a name="range-header"></a>This header specifies the range in bytes of the chunks of the gzip file being returned. <br><br><b> Format:</b> <code>bytes=<em>startpos</em>-<em>endpos</em></code><br><br>  For example, the following retrieves the first 10 MBs of the feed file. <br><br>&nbsp;&nbsp;<code>Range bytes=0-10485760</code> <br><br>For more information about using this header, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>. <br><br><b>Maximum:</b> 100 MB (10MB in the Sandbox)
     */
    range: string;
    /**
     * The ID of the eBay marketplace where the item is hosted. <b>Note: </b> This value is case sensitive.<br><br>For example: <br>&nbsp;&nbsp;<code>X-EBAY-C-MARKETPLACE-ID = EBAY_US</code>  <br><br> For a list of supported sites see, <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.
     */
    xEbayCMarketplaceId: string;
    /**
     * An eBay top-level category ID  of the items to be returned in the feed file.<br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplace, you can use the Taxonomy API <a href="/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field.<br><br><b>For example:</b><br>&nbsp;&nbsp;<code>"categoryTreeNodeLevel": 1</code> <br><br>For details see <a href="/api-docs/buy/buy-categories.html">Get Categories for Buy APIs</a>.</li>  </ul> <br><br>   <b>Restriction:</b> Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
     */
    categoryId: string;
    /**
     * The date and hour of the snapshot feed file you want. Each file contains the items that changed within the hour in the specified category. So, the 9AM file contains the items that changed between 9AM and 9:59AM on the day specified.  It takes 2 hours to generate a snapshot file, which means to get the file for 9AM the earliest you could submit the call is at 11AM.<br><br>There are 7 days of <b> Hourly Snapshot</b> feed files available.<p><span class="tablenote"><b>Note: </b> The Feed API uses GMT, so you must convert your local time to GMT. For example, if you lived in California and wanted the September 15th 7pm file, you would submit the following call: <br> <br><code>item_snapshot?category_id=625&snapshot_date=2017-09-16T02:00:00.000Z</code> </span></p>  <b>Format: </b>UTC <code>yyyy-MM-ddThh:00:00.000Z</code> <br><br>Files are generated on the hour, so minutes and seconds are <em> always</em> zeros.
     */
    snapshotDate: string;
}
export declare class GetItemSnapshotFeedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Partial Content
     */
    itemSnapshotResponse?: shared.ItemSnapshotResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
