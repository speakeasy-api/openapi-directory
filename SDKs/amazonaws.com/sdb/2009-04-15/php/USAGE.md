<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDomainRequest();
    $request->awsAccessKeyId = 'corrupti';
    $request->action = GETCreateDomainActionEnum::CREATE_DOMAIN;
    $request->domainName = 'provident';
    $request->signature = 'distinctio';
    $request->signatureMethod = 'quibusdam';
    $request->signatureVersion = 'unde';
    $request->timestamp = 'nulla';
    $request->version = GETCreateDomainVersionEnum::TWO_THOUSAND_AND_NINE0415;

    $response = $sdk->getCreateDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->