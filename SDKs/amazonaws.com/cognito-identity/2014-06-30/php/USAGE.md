<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateIdentityPoolInput;
use \OpenAPI\OpenAPI\Models\Shared\CognitoIdentityProvider;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIdentityPoolRequest();
    $request->createIdentityPoolInput = new CreateIdentityPoolInput();
    $request->createIdentityPoolInput->allowClassicFlow = false;
    $request->createIdentityPoolInput->allowUnauthenticatedIdentities = false;
    $request->createIdentityPoolInput->cognitoIdentityProviders = [
        new CognitoIdentityProvider(),
        new CognitoIdentityProvider(),
        new CognitoIdentityProvider(),
    ];
    $request->createIdentityPoolInput->developerProviderName = 'provident';
    $request->createIdentityPoolInput->identityPoolName = 'distinctio';
    $request->createIdentityPoolInput->identityPoolTags = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->createIdentityPoolInput->openIdConnectProviderARNs = [
        'magnam',
        'debitis',
    ];
    $request->createIdentityPoolInput->samlProviderARNs = [
        'delectus',
    ];
    $request->createIdentityPoolInput->supportedLoginProviders = [
        'suscipit' => 'molestiae',
        'minus' => 'placeat',
    ];
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = CreateIdentityPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_CREATE_IDENTITY_POOL;

    $response = $sdk->createIdentityPool($request);

    if ($response->identityPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->