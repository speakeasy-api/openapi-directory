<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyFederationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyFederationParameters;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodySuperuserParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->requestBody = new CreateEnvironmentRequestBody();
    $request->requestBody->dataBundles = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->description = 'unde';
    $request->requestBody->federationMode = CreateEnvironmentRequestBodyFederationModeEnum::LOCAL;
    $request->requestBody->federationParameters = new CreateEnvironmentRequestBodyFederationParameters();
    $request->requestBody->federationParameters->applicationCallBackURL = 'corrupti';
    $request->requestBody->federationParameters->attributeMap = [
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->requestBody->federationParameters->federationProviderName = 'delectus';
    $request->requestBody->federationParameters->federationURN = 'tempora';
    $request->requestBody->federationParameters->samlMetadataDocument = 'suscipit';
    $request->requestBody->federationParameters->samlMetadataURL = 'molestiae';
    $request->requestBody->kmsKeyId = 'minus';
    $request->requestBody->name = 'Ken Kshlerin';
    $request->requestBody->superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters();
    $request->requestBody->superuserParameters->emailAddress = 'recusandae';
    $request->requestBody->superuserParameters->firstName = 'Rocky';
    $request->requestBody->superuserParameters->lastName = 'Bernier';
    $request->requestBody->tags = [
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->createEnvironment($request);

    if ($response->createEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->