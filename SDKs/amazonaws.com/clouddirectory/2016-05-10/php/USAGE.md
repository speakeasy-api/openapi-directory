<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFacetToObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddFacetToObjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKeyAndValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\AddFacetToObjectRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\AddFacetToObjectRequestBodySchemaFacet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFacetToObjectRequest();
    $request->requestBody = new AddFacetToObjectRequestBody();
    $request->requestBody->objectAttributeList = [
        new AttributeKeyAndValue(),
        new AttributeKeyAndValue(),
        new AttributeKeyAndValue(),
    ];
    $request->requestBody->objectReference = new AddFacetToObjectRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'provident';
    $request->requestBody->schemaFacet = new AddFacetToObjectRequestBodySchemaFacet();
    $request->requestBody->schemaFacet->facetName = 'distinctio';
    $request->requestBody->schemaFacet->schemaArn = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzDataPartition = 'suscipit';

    $response = $sdk->addFacetToObject($request);

    if ($response->addFacetToObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->