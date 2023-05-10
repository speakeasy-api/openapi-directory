# returnPolicy

### Available Operations

* [createReturnPolicy](#createreturnpolicy) - This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
* [deleteReturnPolicy](#deletereturnpolicy) - This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.
* [getReturnPolicies](#getreturnpolicies) - This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [getReturnPolicy](#getreturnpolicy) - This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.
* [getReturnPolicyByName](#getreturnpolicybyname) - This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [updateReturnPolicy](#updatereturnpolicy) - This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## createReturnPolicy

This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryType;
use \OpenAPI\OpenAPI\Models\Shared\InternationalReturnOverrideType;
use \OpenAPI\OpenAPI\Models\Shared\TimeDuration;
use \OpenAPI\OpenAPI\Models\Operations\CreateReturnPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReturnPolicyRequest();
    $request->categoryTypes = [
        new CategoryType(),
        new CategoryType(),
    ];
    $request->description = 'commodi';
    $request->extendedHolidayReturnsOffered = false;
    $request->internationalOverride = new InternationalReturnOverrideType();
    $request->internationalOverride->returnMethod = 'quam';
    $request->internationalOverride->returnPeriod = new TimeDuration();
    $request->internationalOverride->returnPeriod->unit = 'molestiae';
    $request->internationalOverride->returnPeriod->value = 244425;
    $request->internationalOverride->returnShippingCostPayer = 'error';
    $request->internationalOverride->returnsAccepted = false;
    $request->marketplaceId = 'quia';
    $request->name = 'Gloria Padberg';
    $request->refundMethod = 'odit';
    $request->restockingFeePercentage = 'quo';
    $request->returnInstructions = 'sequi';
    $request->returnMethod = 'tenetur';
    $request->returnPeriod = new TimeDuration();
    $request->returnPeriod->unit = 'ipsam';
    $request->returnPeriod->value = 662527;
    $request->returnShippingCostPayer = 'possimus';
    $request->returnsAccepted = false;

    $requestSecurity = new CreateReturnPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnPolicy->createReturnPolicy($request, $requestSecurity);

    if ($response->setReturnPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReturnPolicy

This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReturnPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReturnPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReturnPolicyRequest();
    $request->returnPolicyId = 'aut';

    $requestSecurity = new DeleteReturnPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnPolicy->deleteReturnPolicy($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReturnPolicies

This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReturnPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReturnPoliciesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReturnPoliciesRequest();
    $request->marketplaceId = 'quasi';

    $requestSecurity = new GetReturnPoliciesSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnPolicy->getReturnPolicies($request, $requestSecurity);

    if ($response->returnPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReturnPolicy

This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReturnPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReturnPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReturnPolicyRequest();
    $request->returnPolicyId = 'error';

    $requestSecurity = new GetReturnPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnPolicy->getReturnPolicy($request, $requestSecurity);

    if ($response->returnPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReturnPolicyByName

This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReturnPolicyByNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReturnPolicyByNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReturnPolicyByNameRequest();
    $request->marketplaceId = 'temporibus';
    $request->name = 'Ryan Witting';

    $requestSecurity = new GetReturnPolicyByNameSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnPolicy->getReturnPolicyByName($request, $requestSecurity);

    if ($response->returnPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReturnPolicy

This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReturnPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReturnPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryType;
use \OpenAPI\OpenAPI\Models\Shared\InternationalReturnOverrideType;
use \OpenAPI\OpenAPI\Models\Shared\TimeDuration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReturnPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReturnPolicyRequest();
    $request->returnPolicyRequest = new ReturnPolicyRequest();
    $request->returnPolicyRequest->categoryTypes = [
        new CategoryType(),
        new CategoryType(),
    ];
    $request->returnPolicyRequest->description = 'praesentium';
    $request->returnPolicyRequest->extendedHolidayReturnsOffered = false;
    $request->returnPolicyRequest->internationalOverride = new InternationalReturnOverrideType();
    $request->returnPolicyRequest->internationalOverride->returnMethod = 'voluptatibus';
    $request->returnPolicyRequest->internationalOverride->returnPeriod = new TimeDuration();
    $request->returnPolicyRequest->internationalOverride->returnPeriod->unit = 'ipsa';
    $request->returnPolicyRequest->internationalOverride->returnPeriod->value = 604846;
    $request->returnPolicyRequest->internationalOverride->returnShippingCostPayer = 'voluptate';
    $request->returnPolicyRequest->internationalOverride->returnsAccepted = false;
    $request->returnPolicyRequest->marketplaceId = 'cum';
    $request->returnPolicyRequest->name = 'Sharon Kiehn';
    $request->returnPolicyRequest->refundMethod = 'dicta';
    $request->returnPolicyRequest->restockingFeePercentage = 'corporis';
    $request->returnPolicyRequest->returnInstructions = 'dolore';
    $request->returnPolicyRequest->returnMethod = 'iusto';
    $request->returnPolicyRequest->returnPeriod = new TimeDuration();
    $request->returnPolicyRequest->returnPeriod->unit = 'dicta';
    $request->returnPolicyRequest->returnPeriod->value = 688661;
    $request->returnPolicyRequest->returnShippingCostPayer = 'enim';
    $request->returnPolicyRequest->returnsAccepted = false;
    $request->returnPolicyId = 'accusamus';

    $requestSecurity = new UpdateReturnPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returnPolicy->updateReturnPolicy($request, $requestSecurity);

    if ($response->setReturnPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
