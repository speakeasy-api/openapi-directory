# fulfillmentPolicy

### Available Operations

* [createFulfillmentPolicy](#createfulfillmentpolicy) - This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>
* [deleteFulfillmentPolicy](#deletefulfillmentpolicy) - This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.
* [getFulfillmentPolicies](#getfulfillmentpolicies) - This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [getFulfillmentPolicy](#getfulfillmentpolicy) - This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.
* [getFulfillmentPolicyByName](#getfulfillmentpolicybyname) - This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [updateFulfillmentPolicy](#updatefulfillmentpolicy) - This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## createFulfillmentPolicy

This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\FulfillmentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryType;
use \OpenAPI\OpenAPI\Models\Shared\TimeDuration;
use \OpenAPI\OpenAPI\Models\Shared\RegionSet;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\ShippingOption;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\ShippingService;
use \OpenAPI\OpenAPI\Models\Operations\CreateFulfillmentPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FulfillmentPolicyRequest();
    $request->categoryTypes = [
        new CategoryType(),
        new CategoryType(),
        new CategoryType(),
        new CategoryType(),
    ];
    $request->description = 'temporibus';
    $request->freightShipping = false;
    $request->globalShipping = false;
    $request->handlingTime = new TimeDuration();
    $request->handlingTime->unit = 'ab';
    $request->handlingTime->value = 337396;
    $request->localPickup = false;
    $request->marketplaceId = 'veritatis';
    $request->name = 'Christopher Hills';
    $request->pickupDropOff = false;
    $request->shipToLocations = new RegionSet();
    $request->shipToLocations->regionExcluded = [
        new Region(),
        new Region(),
        new Region(),
        new Region(),
    ];
    $request->shipToLocations->regionIncluded = [
        new Region(),
    ];
    $request->shippingOptions = [
        new ShippingOption(),
        new ShippingOption(),
        new ShippingOption(),
        new ShippingOption(),
    ];

    $requestSecurity = new CreateFulfillmentPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fulfillmentPolicy->createFulfillmentPolicy($request, $requestSecurity);

    if ($response->setFulfillmentPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFulfillmentPolicy

This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFulfillmentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFulfillmentPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFulfillmentPolicyRequest();
    $request->fulfillmentPolicyId = 'at';

    $requestSecurity = new DeleteFulfillmentPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fulfillmentPolicy->deleteFulfillmentPolicy($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFulfillmentPolicies

This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentPoliciesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFulfillmentPoliciesRequest();
    $request->marketplaceId = 'maiores';

    $requestSecurity = new GetFulfillmentPoliciesSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fulfillmentPolicy->getFulfillmentPolicies($request, $requestSecurity);

    if ($response->fulfillmentPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFulfillmentPolicy

This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFulfillmentPolicyRequest();
    $request->fulfillmentPolicyId = 'molestiae';

    $requestSecurity = new GetFulfillmentPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fulfillmentPolicy->getFulfillmentPolicy($request, $requestSecurity);

    if ($response->fulfillmentPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFulfillmentPolicyByName

This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentPolicyByNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFulfillmentPolicyByNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFulfillmentPolicyByNameRequest();
    $request->marketplaceId = 'quod';
    $request->name = 'Erik Lebsack';

    $requestSecurity = new GetFulfillmentPolicyByNameSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fulfillmentPolicy->getFulfillmentPolicyByName($request, $requestSecurity);

    if ($response->fulfillmentPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFulfillmentPolicy

This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFulfillmentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\FulfillmentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryType;
use \OpenAPI\OpenAPI\Models\Shared\TimeDuration;
use \OpenAPI\OpenAPI\Models\Shared\RegionSet;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\ShippingOption;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\ShippingService;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFulfillmentPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFulfillmentPolicyRequest();
    $request->fulfillmentPolicyRequest = new FulfillmentPolicyRequest();
    $request->fulfillmentPolicyRequest->categoryTypes = [
        new CategoryType(),
    ];
    $request->fulfillmentPolicyRequest->description = 'nam';
    $request->fulfillmentPolicyRequest->freightShipping = false;
    $request->fulfillmentPolicyRequest->globalShipping = false;
    $request->fulfillmentPolicyRequest->handlingTime = new TimeDuration();
    $request->fulfillmentPolicyRequest->handlingTime->unit = 'officia';
    $request->fulfillmentPolicyRequest->handlingTime->value = 582020;
    $request->fulfillmentPolicyRequest->localPickup = false;
    $request->fulfillmentPolicyRequest->marketplaceId = 'fugit';
    $request->fulfillmentPolicyRequest->name = 'Irvin Rosenbaum III';
    $request->fulfillmentPolicyRequest->pickupDropOff = false;
    $request->fulfillmentPolicyRequest->shipToLocations = new RegionSet();
    $request->fulfillmentPolicyRequest->shipToLocations->regionExcluded = [
        new Region(),
        new Region(),
    ];
    $request->fulfillmentPolicyRequest->shipToLocations->regionIncluded = [
        new Region(),
        new Region(),
    ];
    $request->fulfillmentPolicyRequest->shippingOptions = [
        new ShippingOption(),
    ];
    $request->fulfillmentPolicyId = 'impedit';

    $requestSecurity = new UpdateFulfillmentPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->fulfillmentPolicy->updateFulfillmentPolicy($request, $requestSecurity);

    if ($response->setFulfillmentPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
