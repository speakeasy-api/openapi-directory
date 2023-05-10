<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDomainTransferFromAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptDomainTransferFromAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptDomainTransferFromAnotherAwsAccountRequest();
    $request->acceptDomainTransferFromAnotherAwsAccountRequest = new AcceptDomainTransferFromAnotherAwsAccountRequest();
    $request->acceptDomainTransferFromAnotherAwsAccountRequest->domainName = 'corrupti';
    $request->acceptDomainTransferFromAnotherAwsAccountRequest->password = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT;

    $response = $sdk->acceptDomainTransferFromAnotherAwsAccount($request);

    if ($response->acceptDomainTransferFromAnotherAwsAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->