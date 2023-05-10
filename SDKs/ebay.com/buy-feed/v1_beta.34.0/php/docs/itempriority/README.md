# itemPriority

### Available Operations

* [getItemPriorityFeed](#getitempriorityfeed) - <p>Using this method, you can download a TSV_GZIP (tab separated value gzip) <b>Item Priority</b> feed file, which allows you to track changes (deltas) in the status of your priority items, such as when an item is added or removed from a campaign.  The delta feed tracks the changes to the status of items within a category you specify in the input URI. You can also specify a specific date for the feed you want returned.</p><p><span class="tablenote"><span style="color:#FF0000"> <b> Important:</b> </span> You must consume the daily feeds (<b>Item</b>, <b>Item Group</b>) before consuming the <b>Item Priority</b> feed. This ensures that your inventory is up to date.</span></p><h3><b>Downloading feed files </b></h3>             <p><span class="tablenote"><b>Note: </b> Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><p>Priority Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href="https://github.com/eBay/FeedSDK" target="_blank">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class="tablenote">  <b> Note:</b>  A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>

## getItemPriorityFeed

<p>Using this method, you can download a TSV_GZIP (tab separated value gzip) <b>Item Priority</b> feed file, which allows you to track changes (deltas) in the status of your priority items, such as when an item is added or removed from a campaign.  The delta feed tracks the changes to the status of items within a category you specify in the input URI. You can also specify a specific date for the feed you want returned.</p><p><span class="tablenote"><span style="color:#FF0000"> <b> Important:</b> </span> You must consume the daily feeds (<b>Item</b>, <b>Item Group</b>) before consuming the <b>Item Priority</b> feed. This ensures that your inventory is up to date.</span></p><h3><b>Downloading feed files </b></h3>             <p><span class="tablenote"><b>Note: </b> Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><p>Priority Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href="https://github.com/eBay/FeedSDK" target="_blank">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class="tablenote">  <b> Note:</b>  A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemPriorityFeedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItemPriorityFeedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemPriorityFeedRequest();
    $request->accept = 'suscipit';
    $request->range = 'molestiae';
    $request->xEbayCMarketplaceId = 'minus';
    $request->categoryId = 'placeat';
    $request->date = 'voluptatum';

    $requestSecurity = new GetItemPriorityFeedSecurity();
    $requestSecurity->clientCredentials = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itemPriority->getItemPriorityFeed($request, $requestSecurity);

    if ($response->itemPriorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
