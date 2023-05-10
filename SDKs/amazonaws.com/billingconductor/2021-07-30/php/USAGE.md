<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAccountsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateAccountsRequest();
    $request->requestBody = new AssociateAccountsRequestBody();
    $request->requestBody->accountIds = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->arn = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->associateAccounts($request);

    if ($response->associateAccountsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->