# itemSnapshot

### Available Operations

* [getItemSnapshotFeed](#getitemsnapshotfeed) -  <p>The <b> Hourly Snapshot</b> feed file is generated each hour every day for most categories. This method lets you download an <b> Hourly Snapshot</b> TSV_GZIP (tab-separated value gzip) feed file containing the details of all the items that have <a href="/api-docs/buy/static/api-feed.html#changed-items">changed</a> <i> within</i> the specified day and hour for a specific category.  This means to generate the 8AM file of items that have changed from 8AM and 8:59AM, the service starts at 9AM. You can retrieve the 8AM snapshot file at 10AM.</p>    <p>Snapshot feeds now include new listings. You can check <a href="/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemCreationDate">itemCreationDate</a> to identify listings that were newly created within the specified hour.</p>     <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>.  When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p>                  <p>You can use the response from this method to update the item details of items stored in your database. By looking at the value of <a href="/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemSnapshotDate">itemSnapshotDate</a> for a given item, you will be able to tell which information is the latest.</p>   <p><span class="tablenote"><span style="color:#FF0000"> <b> Important:</b> </span> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated. </span></p><h3><b>Downloading feed files </b></h3><p>Hourly snapshot feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.  </p>                                <p><span class="tablenote">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span></p><h3><b>Restrictions </b></h3><p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>  

## getItemSnapshotFeed

 <p>The <b> Hourly Snapshot</b> feed file is generated each hour every day for most categories. This method lets you download an <b> Hourly Snapshot</b> TSV_GZIP (tab-separated value gzip) feed file containing the details of all the items that have <a href="/api-docs/buy/static/api-feed.html#changed-items">changed</a> <i> within</i> the specified day and hour for a specific category.  This means to generate the 8AM file of items that have changed from 8AM and 8:59AM, the service starts at 9AM. You can retrieve the 8AM snapshot file at 10AM.</p>    <p>Snapshot feeds now include new listings. You can check <a href="/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemCreationDate">itemCreationDate</a> to identify listings that were newly created within the specified hour.</p>     <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>.  When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p>                  <p>You can use the response from this method to update the item details of items stored in your database. By looking at the value of <a href="/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemSnapshotDate">itemSnapshotDate</a> for a given item, you will be able to tell which information is the latest.</p>   <p><span class="tablenote"><span style="color:#FF0000"> <b> Important:</b> </span> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated. </span></p><h3><b>Downloading feed files </b></h3><p>Hourly snapshot feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.  </p>                                <p><span class="tablenote">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span></p><h3><b>Restrictions </b></h3><p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>  

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemSnapshotFeedRequest;
import org.openapis.openapi.models.operations.GetItemSnapshotFeedResponse;
import org.openapis.openapi.models.operations.GetItemSnapshotFeedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemSnapshotFeedRequest req = new GetItemSnapshotFeedRequest("temporibus", "ab", "quis", "veritatis", "deserunt");            

            GetItemSnapshotFeedResponse res = sdk.itemSnapshot.getItemSnapshotFeed(req, new GetItemSnapshotFeedSecurity("perferendis") {{
                clientCredentials = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
