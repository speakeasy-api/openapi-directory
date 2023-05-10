# classificationInclusion

### Available Operations

* [getClassificationInclusions](#getclassificationinclusions) - Get ClassificationInclusion records
* [getClassificationInclusionsId](#getclassificationinclusionsid) - Get a specific classification inclusion

## getClassificationInclusions

Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.

In order to retrieve a set of classification inclusions, at least one of the following filter parameters must
be provided. Failing to do so renders a `400 Bad Request` response.

- `ids[]`
- `classified_id` and `classified_type`
- `classified_id` and `classification_type`
- `classification_id` and `classified_type`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationInclusionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationInclusionsClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationInclusionsClassifiedTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationInclusionsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationInclusionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationInclusionsRequest();
    $request->classificationId = 'f63c969e-9a3e-4fa7-bdfb-14cd66ae395e';
    $request->classificationType = GetClassificationInclusionsClassificationTypeEnum::MEDIA_RATING;
    $request->classifiedId = 'b9ba88f3-a669-4970-b4ba-4469b6e21419';
    $request->classifiedType = GetClassificationInclusionsClassifiedTypeEnum::SEASON;
    $request->ids = [
        '890afa56-3e25-416f-a4c8-b711e5b7fd2e',
        'd028921c-ddc6-4926-81fb-576b0d5f0d30',
        'c5fbb258-7053-4202-873d-5fe9b90c2890',
    ];
    $request->pageNumber = 577229;
    $request->pageSize = 699098;
    $request->q = 'adipisci';
    $request->sort = [
        GetClassificationInclusionsSortEnum::POSITION,
        GetClassificationInclusionsSortEnum::CLASSIFICATION_VALUE,
        GetClassificationInclusionsSortEnum::CREATED_AT,
        GetClassificationInclusionsSortEnum::POSITION,
    ];

    $requestSecurity = new GetClassificationInclusionsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->classificationInclusion->getClassificationInclusions($request, $requestSecurity);

    if ($response->getClassificationInclusions200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClassificationInclusionsId

Get a specific classification inclusion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationInclusionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationInclusionsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationInclusionsIdRequest();
    $request->id = '8d9cbf48-6333-423f-9b77-f3a4100674eb';

    $requestSecurity = new GetClassificationInclusionsIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->classificationInclusion->getClassificationInclusionsId($request, $requestSecurity);

    if ($response->getClassificationInclusionsId200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
