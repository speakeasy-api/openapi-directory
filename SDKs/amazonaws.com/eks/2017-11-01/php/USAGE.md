<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEncryptionConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEncryptionConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\Provider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateEncryptionConfigRequest();
    $request->requestBody = new AssociateEncryptionConfigRequestBody();
    $request->requestBody->clientRequestToken = 'corrupti';
    $request->requestBody->encryptionConfig = [
        new EncryptionConfig(),
        new EncryptionConfig(),
        new EncryptionConfig(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->name = 'Doug Hoppe';

    $response = $sdk->associateEncryptionConfig($request);

    if ($response->associateEncryptionConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->