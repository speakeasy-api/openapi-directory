<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequestBodyComponentToCreate;
use \OpenAPI\OpenAPI\Models\Shared\ComponentBindingPropertiesValue;
use \OpenAPI\OpenAPI\Models\Shared\ComponentBindingPropertiesValueProperties;
use \OpenAPI\OpenAPI\Models\Shared\Predicate;
use \OpenAPI\OpenAPI\Models\Shared\ComponentChild;
use \OpenAPI\OpenAPI\Models\Shared\ComponentEvent;
use \OpenAPI\OpenAPI\Models\Shared\ActionParameters;
use \OpenAPI\OpenAPI\Models\Shared\ComponentProperty;
use \OpenAPI\OpenAPI\Models\Shared\ComponentPropertyBindingProperties;
use \OpenAPI\OpenAPI\Models\Shared\FormBindingElement;
use \OpenAPI\OpenAPI\Models\Shared\ComponentConditionProperty;
use \OpenAPI\OpenAPI\Models\Shared\MutationActionSetStateParameter;
use \OpenAPI\OpenAPI\Models\Shared\ComponentDataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SortProperty;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComponentVariant;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComponentRequest();
    $request->requestBody = new CreateComponentRequestBody();
    $request->requestBody->componentToCreate = new CreateComponentRequestBodyComponentToCreate();
    $request->requestBody->componentToCreate->bindingProperties = [
        'provident' => new ComponentBindingPropertiesValue(),
        'distinctio' => new ComponentBindingPropertiesValue(),
        'quibusdam' => new ComponentBindingPropertiesValue(),
    ];
    $request->requestBody->componentToCreate->children = [
        new ComponentChild(),
        new ComponentChild(),
        new ComponentChild(),
    ];
    $request->requestBody->componentToCreate->collectionProperties = [
        'corrupti' => new ComponentDataConfiguration(),
        'illum' => new ComponentDataConfiguration(),
        'vel' => new ComponentDataConfiguration(),
        'error' => new ComponentDataConfiguration(),
    ];
    $request->requestBody->componentToCreate->componentType = 'deserunt';
    $request->requestBody->componentToCreate->events = [
        'iure' => new ComponentEvent(),
        'magnam' => new ComponentEvent(),
    ];
    $request->requestBody->componentToCreate->name = 'Larry Windler';
    $request->requestBody->componentToCreate->overrides = [
        'minus' => [
            'voluptatum' => 'iusto',
            'excepturi' => 'nisi',
            'recusandae' => 'temporibus',
            'ab' => 'quis',
        ],
        'veritatis' => [
            'perferendis' => 'ipsam',
            'repellendus' => 'sapiente',
            'quo' => 'odit',
        ],
    ];
    $request->requestBody->componentToCreate->properties = 'at';
    $request->requestBody->componentToCreate->schemaVersion = 'at';
    $request->requestBody->componentToCreate->sourceId = 'maiores';
    $request->requestBody->componentToCreate->tags = [
        'quod' => 'quod',
        'esse' => 'totam',
    ];
    $request->requestBody->componentToCreate->variants = [
        new ComponentVariant(),
        new ComponentVariant(),
        new ComponentVariant(),
        new ComponentVariant(),
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->appId = 'hic';
    $request->clientToken = 'optio';
    $request->environmentName = 'totam';

    $response = $sdk->createComponent($request);

    if ($response->createComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->