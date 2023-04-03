# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetItemFeedSecurity;
import org.openapis.openapi.models.operations.GetItemFeedRequest;
import org.openapis.openapi.models.operations.GetItemFeedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemFeedRequest req = new GetItemFeedRequest() {{
                accept = "corrupti";
                range = "provident";
                xEbayCMarketplaceId = "distinctio";
                categoryId = "quibusdam";
                date = "unde";
                feedScope = "nulla";
            }}            

            GetItemFeedResponse res = sdk.item.getItemFeed(req, new GetItemFeedSecurity() {{
                clientCredentials = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### item

* `getItemFeed` - <p>This method lets you download a TSV_GZIP (tab separated value gzip) <b> Item</b> feed file. The feed file contains all the items from <b> all</b> the child categories of the specified category.  The first line of the file is the header, which labels the columns and indicates the order of the values on each line.  Each header is described in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed#h3-response-fields">Response fields</a> section.  </p> <p> There are two types of item feed files generated: <ul> <li>A daily <b>Item</b> feed file containing all the newly listed items for a specific category, date, and marketplace (<b>feed_scope</b> = <code>NEWLY_LISTED</code>)</li>  <li>A weekly <b>Item Bootstrap</b> feed file containing <i> all</i> the items in a specific category and marketplace (<b>feed_scope</b> = <code>ALL_ACTIVE</code>)</li>  </ul>  </p>   <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed_beta.html#Feed2">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><h3><b>Downloading feed files </b></h3>             <p>Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href="https://github.com/eBay/FeedSDK" target="_blank">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class="tablenote">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>

### itemGroup

* `getItemGroupFeed` - <p>This method lets you download a TSV_GZIP (tab separated value gzip) <b> Item Group</b> feed file. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. </p> <p>There are two types of item group feed files generated: <ul> <li>A daily <b>Item Group</b> feed file containing the item group variation information associated with items returned in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item</a> feed file for a specific day, category, and marketplace. (<b>feed_scope</b> = <code>NEWLY_LISTED</code>)</li>  <li>A weekly <b>Item Group Bootstrap</b> feed file containing all the item group variation information associated with items returned in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item Bootstrap</a> feed file for all the items in a specific category.  (<b>feed_scope</b> = <code>ALL_ACTIVE</code>)</li>  </ul></p>  <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>.  When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p>    <p>The contents of these feed files are based on the contents of the corresponding daily <b> Item</b> or <b>Item Bootstrap</b> feed file. When a new <b> Item</b> or <b>Item Bootstrap</b> feed file is generated, the service reads the file and if an item in the file has a <b> primaryItemGroupId</b> value, which indicates the item is part of an item group, it uses that value to return the item group (parent item) information for that item in the corresponding <b> Item Group</b> or <b> Item Group Bootstrap</b> feed file.</p>  <p>  This information includes the  name/value pair of the aspects of the items in this group returned in the <b> variesByLocalizedAspects </b> column. For example, if the item was a shirt some of the variation names could be Size, Color, etc. Also the images for the various aspects are returned in the <b>additionalImageUrls</b> column.</p>              <p>The first line in any feed file is the header, which labels the columns and indicates the order of the values on each line.  Each header is described in the <a href="/api-docs/buy/feed/resources/item_group/methods/getItemGroupFeed#h3-response-fields">Response fields</a> section.</p>                                  <h3><b>Combining the Item Group and Item feed files</b></h3>              <p>The <b> Item Group</b> or <b> Item Group Bootstrap</b> feed file contains details about the item group (parent item), including the item group ID <b> itemGroupId</b>.  You match the value of <b> itemGroupId</b> from the <b> Item Group</b> feed file with the value of <b> primaryItemGroupId</b> from the corresponding daily <b> Item</b> or <b>Item Bootstrap</b> feed file.</p><h3><b>Downloading feed files </b></h3>                          <p>Item Group feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/{swift-folder}/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>. </p>                 <p><span class="tablenote">  <b> Note:</b>  A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>          </p>                        <h3><b>Restrictions </b></h3>                        <p>For a list of supported sites and other restrictions, see <a href="/api-docs/{swift-folder}/buy/feed/overview.html#API">API Restrictions</a>.  </p>

### itemPriority

* `getItemPriorityFeed` - <p>Using this method, you can download a TSV_GZIP (tab separated value gzip) <b>Item Priority</b> feed file, which allows you to track changes (deltas) in the status of your priority items, such as when an item is added or removed from a campaign.  The delta feed tracks the changes to the status of items within a category you specify in the input URI. You can also specify a specific date for the feed you want returned.</p><p><span class="tablenote"><span style="color:#FF0000"> <b> Important:</b> </span> You must consume the daily feeds (<b>Item</b>, <b>Item Group</b>) before consuming the <b>Item Priority</b> feed. This ensures that your inventory is up to date.</span></p><h3><b>Downloading feed files </b></h3>             <p><span class="tablenote"><b>Note: </b> Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><p>Priority Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href="https://github.com/eBay/FeedSDK" target="_blank">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class="tablenote">  <b> Note:</b>  A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>

### itemSnapshot

* `getItemSnapshotFeed` -  <p>The <b> Hourly Snapshot</b> feed file is generated each hour every day for most categories. This method lets you download an <b> Hourly Snapshot</b> TSV_GZIP (tab-separated value gzip) feed file containing the details of all the items that have <a href="/api-docs/buy/static/api-feed.html#changed-items">changed</a> <i> within</i> the specified day and hour for a specific category.  This means to generate the 8AM file of items that have changed from 8AM and 8:59AM, the service starts at 9AM. You can retrieve the 8AM snapshot file at 10AM.</p>    <p>Snapshot feeds now include new listings. You can check <a href="/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemCreationDate">itemCreationDate</a> to identify listings that were newly created within the specified hour.</p>     <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>.  When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p>                  <p>You can use the response from this method to update the item details of items stored in your database. By looking at the value of <a href="/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemSnapshotDate">itemSnapshotDate</a> for a given item, you will be able to tell which information is the latest.</p>   <p><span class="tablenote"><span style="color:#FF0000"> <b> Important:</b> </span> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated. </span></p><h3><b>Downloading feed files </b></h3><p>Hourly snapshot feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.  </p>                                <p><span class="tablenote">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span></p><h3><b>Restrictions </b></h3><p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>  
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
