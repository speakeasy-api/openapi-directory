<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAwsLogSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAwsLogSourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAwsLogSourceRequest();
    $request->requestBody = new CreateAwsLogSourceRequestBody();
    $request->requestBody->enableAllDimensions = [
        'provident' => [
            'quibusdam' => [
                'nulla',
                'corrupti',
                'illum',
            ],
            'vel' => [
                'deserunt',
                'suscipit',
                'iure',
            ],
            'magnam' => [
                'ipsa',
                'delectus',
                'tempora',
                'suscipit',
            ],
        ],
        'molestiae' => [
            'placeat' => [
                'iusto',
                'excepturi',
                'nisi',
            ],
            'recusandae' => [
                'ab',
                'quis',
                'veritatis',
                'deserunt',
            ],
            'perferendis' => [
                'repellendus',
                'sapiente',
            ],
            'quo' => [
                'at',
            ],
        ],
        'at' => [
            'molestiae' => [
                'quod',
                'esse',
                'totam',
                'porro',
            ],
            'dolorum' => [
                'nam',
            ],
            'officia' => [
                'fugit',
                'deleniti',
                'hic',
            ],
            'optio' => [
                'beatae',
                'commodi',
                'molestiae',
            ],
        ],
    ];
    $request->requestBody->enableSingleDimension = [
        'qui',
        'impedit',
    ];
    $request->requestBody->enableTwoDimensions = [
        'esse' => [
            'excepturi',
        ],
        'aspernatur' => [
            'ad',
        ],
        'natus' => [
            'iste',
        ],
    ];
    $request->requestBody->inputOrder = [
        DimensionEnum::SOURCE_TYPE,
    ];
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->createAwsLogSource($request);

    if ($response->createAwsLogSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->