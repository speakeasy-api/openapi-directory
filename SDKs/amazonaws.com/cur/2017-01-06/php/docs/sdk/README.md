# SDK

## Overview

<p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete AWS Cost and Usage report definitions.</p> <p>AWS Cost and Usage reports track the monthly AWS costs and usage associated with your AWS account. The report contains line items for each unique combination of AWS product, usage type, and operation that your AWS account uses. You can configure the AWS Cost and Usage report to show only the data that you want, using the AWS Cost and Usage API.</p> <p>Service Endpoint</p> <p>The AWS Cost and Usage Report API provides the following endpoint:</p> <ul> <li> <p>cur.us-east-1.amazonaws.com</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cur/>
### Available Operations

* [deleteReportDefinition](#deletereportdefinition) - Deletes the specified report.
* [describeReportDefinitions](#describereportdefinitions) - Lists the AWS Cost and Usage reports available to this account.
* [modifyReportDefinition](#modifyreportdefinition) - Allows you to programatically update your report preferences.
* [putReportDefinition](#putreportdefinition) - Creates a new report using the description that you provide.

## deleteReportDefinition

Deletes the specified report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportDefinitionRequest();
    $request->deleteReportDefinitionRequest = new DeleteReportDefinitionRequest();
    $request->deleteReportDefinitionRequest->reportName = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeleteReportDefinitionXAmzTargetEnum::AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DELETE_REPORT_DEFINITION;

    $response = $sdk->sdk->deleteReportDefinition($request);

    if ($response->deleteReportDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeReportDefinitions

Lists the AWS Cost and Usage reports available to this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReportDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeReportDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeReportDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeReportDefinitionsRequest();
    $request->describeReportDefinitionsRequest = new DescribeReportDefinitionsRequest();
    $request->describeReportDefinitionsRequest->maxResults = 963663;
    $request->describeReportDefinitionsRequest->nextToken = 'tempora';
    $request->maxResults = 'suscipit';
    $request->nextToken = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = DescribeReportDefinitionsXAmzTargetEnum::AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DESCRIBE_REPORT_DEFINITIONS;

    $response = $sdk->sdk->describeReportDefinitions($request);

    if ($response->describeReportDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyReportDefinition

Allows you to programatically update your report preferences.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinition;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalArtifactEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompressionFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportVersioningEnum;
use \OpenAPI\OpenAPI\Models\Shared\AWSRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyReportDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyReportDefinitionRequest();
    $request->modifyReportDefinitionRequest = new ModifyReportDefinitionRequest();
    $request->modifyReportDefinitionRequest->reportDefinition = new ReportDefinition();
    $request->modifyReportDefinitionRequest->reportDefinition->additionalArtifacts = [
        AdditionalArtifactEnum::REDSHIFT,
        AdditionalArtifactEnum::QUICKSIGHT,
        AdditionalArtifactEnum::REDSHIFT,
        AdditionalArtifactEnum::QUICKSIGHT,
    ];
    $request->modifyReportDefinitionRequest->reportDefinition->additionalSchemaElements = [
        SchemaElementEnum::RESOURCES,
    ];
    $request->modifyReportDefinitionRequest->reportDefinition->billingViewArn = 'ipsam';
    $request->modifyReportDefinitionRequest->reportDefinition->compression = CompressionFormatEnum::PARQUET;
    $request->modifyReportDefinitionRequest->reportDefinition->format = ReportFormatEnum::PARQUET;
    $request->modifyReportDefinitionRequest->reportDefinition->refreshClosedReports = false;
    $request->modifyReportDefinitionRequest->reportDefinition->reportName = 'quo';
    $request->modifyReportDefinitionRequest->reportDefinition->reportVersioning = ReportVersioningEnum::CREATE_NEW_REPORT;
    $request->modifyReportDefinitionRequest->reportDefinition->s3Bucket = 'at';
    $request->modifyReportDefinitionRequest->reportDefinition->s3Prefix = 'at';
    $request->modifyReportDefinitionRequest->reportDefinition->s3Region = AWSRegionEnum::CN_NORTHWEST1;
    $request->modifyReportDefinitionRequest->reportDefinition->timeUnit = TimeUnitEnum::DAILY;
    $request->modifyReportDefinitionRequest->reportName = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = ModifyReportDefinitionXAmzTargetEnum::AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_MODIFY_REPORT_DEFINITION;

    $response = $sdk->sdk->modifyReportDefinition($request);

    if ($response->modifyReportDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putReportDefinition

Creates a new report using the description that you provide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportDefinition;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalArtifactEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompressionFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportVersioningEnum;
use \OpenAPI\OpenAPI\Models\Shared\AWSRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutReportDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutReportDefinitionRequest();
    $request->putReportDefinitionRequest = new PutReportDefinitionRequest();
    $request->putReportDefinitionRequest->reportDefinition = new ReportDefinition();
    $request->putReportDefinitionRequest->reportDefinition->additionalArtifacts = [
        AdditionalArtifactEnum::QUICKSIGHT,
        AdditionalArtifactEnum::REDSHIFT,
        AdditionalArtifactEnum::QUICKSIGHT,
    ];
    $request->putReportDefinitionRequest->reportDefinition->additionalSchemaElements = [
        SchemaElementEnum::RESOURCES,
        SchemaElementEnum::RESOURCES,
        SchemaElementEnum::RESOURCES,
        SchemaElementEnum::RESOURCES,
    ];
    $request->putReportDefinitionRequest->reportDefinition->billingViewArn = 'optio';
    $request->putReportDefinitionRequest->reportDefinition->compression = CompressionFormatEnum::GZIP;
    $request->putReportDefinitionRequest->reportDefinition->format = ReportFormatEnum::TEXT_O_RCSV;
    $request->putReportDefinitionRequest->reportDefinition->refreshClosedReports = false;
    $request->putReportDefinitionRequest->reportDefinition->reportName = 'commodi';
    $request->putReportDefinitionRequest->reportDefinition->reportVersioning = ReportVersioningEnum::CREATE_NEW_REPORT;
    $request->putReportDefinitionRequest->reportDefinition->s3Bucket = 'modi';
    $request->putReportDefinitionRequest->reportDefinition->s3Prefix = 'qui';
    $request->putReportDefinitionRequest->reportDefinition->s3Region = AWSRegionEnum::US_EAST1;
    $request->putReportDefinitionRequest->reportDefinition->timeUnit = TimeUnitEnum::MONTHLY;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = PutReportDefinitionXAmzTargetEnum::AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_PUT_REPORT_DEFINITION;

    $response = $sdk->sdk->putReportDefinition($request);

    if ($response->putReportDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
