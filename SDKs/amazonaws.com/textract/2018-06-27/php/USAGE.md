<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Shared\FeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HumanLoopConfig;
use \OpenAPI\OpenAPI\Models\Shared\HumanLoopDataAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ContentClassifierEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueriesConfig;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyzeDocumentRequest();
    $request->analyzeDocumentRequest = new AnalyzeDocumentRequest();
    $request->analyzeDocumentRequest->document = new Document();
    $request->analyzeDocumentRequest->document->bytes = 'corrupti';
    $request->analyzeDocumentRequest->document->s3Object = new S3Object();
    $request->analyzeDocumentRequest->document->s3Object->bucket = 'provident';
    $request->analyzeDocumentRequest->document->s3Object->name = 'Ellis Mitchell';
    $request->analyzeDocumentRequest->document->s3Object->version = 'illum';
    $request->analyzeDocumentRequest->featureTypes = [
        FeatureTypeEnum::QUERIES,
        FeatureTypeEnum::QUERIES,
    ];
    $request->analyzeDocumentRequest->humanLoopConfig = new HumanLoopConfig();
    $request->analyzeDocumentRequest->humanLoopConfig->dataAttributes = new HumanLoopDataAttributes();
    $request->analyzeDocumentRequest->humanLoopConfig->dataAttributes->contentClassifiers = [
        ContentClassifierEnum::FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION,
        ContentClassifierEnum::FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION,
    ];
    $request->analyzeDocumentRequest->humanLoopConfig->flowDefinitionArn = 'debitis';
    $request->analyzeDocumentRequest->humanLoopConfig->humanLoopName = 'ipsa';
    $request->analyzeDocumentRequest->queriesConfig = new QueriesConfig();
    $request->analyzeDocumentRequest->queriesConfig->queries = [
        new Query(),
        new Query(),
        new Query(),
        new Query(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = AnalyzeDocumentXAmzTargetEnum::TEXTRACT_ANALYZE_DOCUMENT;

    $response = $sdk->analyzeDocument($request);

    if ($response->analyzeDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->