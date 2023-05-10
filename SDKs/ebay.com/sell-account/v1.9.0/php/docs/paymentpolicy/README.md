# paymentPolicy

### Available Operations

* [createPaymentPolicy](#createpaymentpolicy) - This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
* [deletePaymentPolicy](#deletepaymentpolicy) - This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter. 
* [getPaymentPolicies](#getpaymentpolicies) - This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [getPaymentPolicy](#getpaymentpolicy) - This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.
* [getPaymentPolicyByName](#getpaymentpolicybyname) - This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [updatePaymentPolicy](#updatepaymentpolicy) - This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## createPaymentPolicy

This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PaymentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryType;
use \OpenAPI\OpenAPI\Models\Shared\Deposit;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\TimeDuration;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethod;
use \OpenAPI\OpenAPI\Models\Shared\RecipientAccountReference;
use \OpenAPI\OpenAPI\Models\Operations\CreatePaymentPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentPolicyRequest();
    $request->categoryTypes = [
        new CategoryType(),
    ];
    $request->deposit = new Deposit();
    $request->deposit->amount = new Amount();
    $request->deposit->amount->currency = 'excepturi';
    $request->deposit->amount->value = 'aspernatur';
    $request->deposit->dueIn = new TimeDuration();
    $request->deposit->dueIn->unit = 'perferendis';
    $request->deposit->dueIn->value = 324141;
    $request->deposit->paymentMethods = [
        new PaymentMethod(),
        new PaymentMethod(),
        new PaymentMethod(),
    ];
    $request->description = 'sed';
    $request->fullPaymentDueIn = new TimeDuration();
    $request->fullPaymentDueIn->unit = 'iste';
    $request->fullPaymentDueIn->value = 222321;
    $request->immediatePay = false;
    $request->marketplaceId = 'natus';
    $request->name = 'May Turcotte';
    $request->paymentInstructions = 'corporis';
    $request->paymentMethods = [
        new PaymentMethod(),
        new PaymentMethod(),
        new PaymentMethod(),
    ];

    $requestSecurity = new CreatePaymentPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentPolicy->createPaymentPolicy($request, $requestSecurity);

    if ($response->setPaymentPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePaymentPolicy

This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePaymentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePaymentPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePaymentPolicyRequest();
    $request->paymentPolicyId = 'iure';

    $requestSecurity = new DeletePaymentPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentPolicy->deletePaymentPolicy($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentPolicies

This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentPoliciesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentPoliciesRequest();
    $request->marketplaceId = 'saepe';

    $requestSecurity = new GetPaymentPoliciesSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentPolicy->getPaymentPolicies($request, $requestSecurity);

    if ($response->paymentPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentPolicy

This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentPolicyRequest();
    $request->paymentPolicyId = 'quidem';

    $requestSecurity = new GetPaymentPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentPolicy->getPaymentPolicy($request, $requestSecurity);

    if ($response->paymentPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentPolicyByName

This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentPolicyByNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentPolicyByNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentPolicyByNameRequest();
    $request->marketplaceId = 'architecto';
    $request->name = 'Lela Orn';

    $requestSecurity = new GetPaymentPolicyByNameSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentPolicy->getPaymentPolicyByName($request, $requestSecurity);

    if ($response->paymentPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePaymentPolicy

This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryType;
use \OpenAPI\OpenAPI\Models\Shared\Deposit;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\TimeDuration;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethod;
use \OpenAPI\OpenAPI\Models\Shared\RecipientAccountReference;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentPolicyRequest();
    $request->paymentPolicyRequest = new PaymentPolicyRequest();
    $request->paymentPolicyRequest->categoryTypes = [
        new CategoryType(),
    ];
    $request->paymentPolicyRequest->deposit = new Deposit();
    $request->paymentPolicyRequest->deposit->amount = new Amount();
    $request->paymentPolicyRequest->deposit->amount->currency = 'dolorem';
    $request->paymentPolicyRequest->deposit->amount->value = 'corporis';
    $request->paymentPolicyRequest->deposit->dueIn = new TimeDuration();
    $request->paymentPolicyRequest->deposit->dueIn->unit = 'explicabo';
    $request->paymentPolicyRequest->deposit->dueIn->value = 750686;
    $request->paymentPolicyRequest->deposit->paymentMethods = [
        new PaymentMethod(),
        new PaymentMethod(),
    ];
    $request->paymentPolicyRequest->description = 'omnis';
    $request->paymentPolicyRequest->fullPaymentDueIn = new TimeDuration();
    $request->paymentPolicyRequest->fullPaymentDueIn->unit = 'nemo';
    $request->paymentPolicyRequest->fullPaymentDueIn->value = 325047;
    $request->paymentPolicyRequest->immediatePay = false;
    $request->paymentPolicyRequest->marketplaceId = 'excepturi';
    $request->paymentPolicyRequest->name = 'Charlene Nicolas';
    $request->paymentPolicyRequest->paymentInstructions = 'architecto';
    $request->paymentPolicyRequest->paymentMethods = [
        new PaymentMethod(),
        new PaymentMethod(),
        new PaymentMethod(),
    ];
    $request->paymentPolicyId = 'dolorem';

    $requestSecurity = new UpdatePaymentPolicySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentPolicy->updatePaymentPolicy($request, $requestSecurity);

    if ($response->setPaymentPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
