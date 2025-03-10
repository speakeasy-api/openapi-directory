# item

### Available Operations

* [getItemFeed](#getitemfeed) - <p>This method lets you download a TSV_GZIP (tab separated value gzip) <b> Item</b> feed file. The feed file contains all the items from <b> all</b> the child categories of the specified category.  The first line of the file is the header, which labels the columns and indicates the order of the values on each line.  Each header is described in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed#h3-response-fields">Response fields</a> section.  </p> <p> There are two types of item feed files generated: <ul> <li>A daily <b>Item</b> feed file containing all the newly listed items for a specific category, date, and marketplace (<b>feed_scope</b> = <code>NEWLY_LISTED</code>)</li>  <li>A weekly <b>Item Bootstrap</b> feed file containing <i> all</i> the items in a specific category and marketplace (<b>feed_scope</b> = <code>ALL_ACTIVE</code>)</li>  </ul>  </p>   <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed_beta.html#Feed2">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><h3><b>Downloading feed files </b></h3>             <p>Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href="https://github.com/eBay/FeedSDK" target="_blank">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class="tablenote">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>

## getItemFeed

<p>This method lets you download a TSV_GZIP (tab separated value gzip) <b> Item</b> feed file. The feed file contains all the items from <b> all</b> the child categories of the specified category.  The first line of the file is the header, which labels the columns and indicates the order of the values on each line.  Each header is described in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed#h3-response-fields">Response fields</a> section.  </p> <p> There are two types of item feed files generated: <ul> <li>A daily <b>Item</b> feed file containing all the newly listed items for a specific category, date, and marketplace (<b>feed_scope</b> = <code>NEWLY_LISTED</code>)</li>  <li>A weekly <b>Item Bootstrap</b> feed file containing <i> all</i> the items in a specific category and marketplace (<b>feed_scope</b> = <code>ALL_ACTIVE</code>)</li>  </ul>  </p>   <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed_beta.html#Feed2">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><h3><b>Downloading feed files </b></h3>             <p>Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href="https://github.com/eBay/FeedSDK" target="_blank">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class="tablenote">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemFeedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItemFeedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemFeedRequest();
    $request->accept = 'corrupti';
    $request->range = 'illum';
    $request->xEbayCMarketplaceId = 'vel';
    $request->categoryId = 'error';
    $request->date = 'deserunt';
    $request->feedScope = 'suscipit';

    $requestSecurity = new GetItemFeedSecurity();
    $requestSecurity->clientCredentials = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->item->getItemFeed($request, $requestSecurity);

    if ($response->itemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
