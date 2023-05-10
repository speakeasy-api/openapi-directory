<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddClientIDToOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddClientIDToOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddClientIDToOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddClientIDToOpenIDConnectProviderRequest();
    $request->action = GETAddClientIDToOpenIDConnectProviderActionEnum::ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER;
    $request->clientID = 'corrupti';
    $request->openIDConnectProviderArn = 'provident';
    $request->version = GETAddClientIDToOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->getAddClientIDToOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->