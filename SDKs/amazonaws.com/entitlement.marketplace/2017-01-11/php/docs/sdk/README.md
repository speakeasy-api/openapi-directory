# SDK

## Overview

<fullname>AWS Marketplace Entitlement Service</fullname> <p>This reference provides descriptions of the AWS Marketplace Entitlement Service API.</p> <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p> <p> <b>Getting Entitlement Records</b> </p> <ul> <li> <p> <i>GetEntitlements</i>- Gets the entitlements for a Marketplace product.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplace/>
### Available Operations

* [getEntitlements](#getentitlements) - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.

## getEntitlements

GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitlementsRequest();
    $request->getEntitlementsRequest = new GetEntitlementsRequest();
    $request->getEntitlementsRequest->filter = [
        'temporibus' => [
            'quis',
        ],
        'veritatis' => [
            'perferendis',
            'ipsam',
            'repellendus',
        ],
        'sapiente' => [
            'odit',
            'at',
            'at',
            'maiores',
        ],
        'molestiae' => [
            'quod',
            'esse',
            'totam',
            'porro',
        ],
    ];
    $request->getEntitlementsRequest->maxResults = 678880;
    $request->getEntitlementsRequest->nextToken = 'dicta';
    $request->getEntitlementsRequest->productCode = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = GetEntitlementsXAmzTargetEnum::AWSMP_ENTITLEMENT_SERVICE_GET_ENTITLEMENTS;

    $response = $sdk->sdk->getEntitlements($request);

    if ($response->getEntitlementsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
