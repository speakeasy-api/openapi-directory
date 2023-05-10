# merchandisedProduct

### Available Operations

* [getMerchandisedProducts](#getmerchandisedproducts) - This method returns an array of products based on the category and metric specified. This includes details of the product, such as the eBay product ID (EPID), title, and user reviews and ratings for the product. You can use the <code>epid</code> returned by this method in the Browse API <b>search</b> method to retrieve items for this product. <h3><b>Restrictions </b></h3> <ul><li>To test <b> getMerchandisedProducts</b> in Sandbox, you must use category ID 9355 and the response will be mock data.  </li>   <li>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/marketing/overview.html#API">API Restrictions</a>.</li>  </ul>

## getMerchandisedProducts

This method returns an array of products based on the category and metric specified. This includes details of the product, such as the eBay product ID (EPID), title, and user reviews and ratings for the product. You can use the <code>epid</code> returned by this method in the Browse API <b>search</b> method to retrieve items for this product. <h3><b>Restrictions </b></h3> <ul><li>To test <b> getMerchandisedProducts</b> in Sandbox, you must use category ID 9355 and the response will be mock data.  </li>   <li>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/marketing/overview.html#API">API Restrictions</a>.</li>  </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchandisedProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchandisedProductsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchandisedProductsRequest();
    $request->aspectFilter = 'unde';
    $request->categoryId = 'nulla';
    $request->limit = 'corrupti';
    $request->metricName = 'illum';

    $requestSecurity = new GetMerchandisedProductsSecurity();
    $requestSecurity->clientCredentials = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->merchandisedProduct->getMerchandisedProducts($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
