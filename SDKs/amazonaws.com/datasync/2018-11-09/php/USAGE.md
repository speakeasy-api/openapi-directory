<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddStorageSystemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Credentials;
use \OpenAPI\OpenAPI\Models\Shared\DiscoveryServerConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiscoverySystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagListEntry;
use \OpenAPI\OpenAPI\Models\Operations\AddStorageSystemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddStorageSystemRequest();
    $request->addStorageSystemRequest = new AddStorageSystemRequest();
    $request->addStorageSystemRequest->agentArns = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->addStorageSystemRequest->clientToken = 'unde';
    $request->addStorageSystemRequest->cloudWatchLogGroupArn = 'nulla';
    $request->addStorageSystemRequest->credentials = new Credentials();
    $request->addStorageSystemRequest->credentials->password = 'corrupti';
    $request->addStorageSystemRequest->credentials->username = 'illum';
    $request->addStorageSystemRequest->name = 'Sabrina Oberbrunner';
    $request->addStorageSystemRequest->serverConfiguration = new DiscoveryServerConfiguration();
    $request->addStorageSystemRequest->serverConfiguration->serverHostname = 'magnam';
    $request->addStorageSystemRequest->serverConfiguration->serverPort = 891773;
    $request->addStorageSystemRequest->systemType = DiscoverySystemTypeEnum::NET_APP_ONTAP;
    $request->addStorageSystemRequest->tags = [
        new TagListEntry(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = AddStorageSystemXAmzTargetEnum::FMRS_SERVICE_ADD_STORAGE_SYSTEM;

    $response = $sdk->addStorageSystem($request);

    if ($response->addStorageSystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->