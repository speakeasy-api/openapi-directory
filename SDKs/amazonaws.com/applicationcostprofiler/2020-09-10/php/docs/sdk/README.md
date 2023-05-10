# SDK

## Overview

<p>This reference provides descriptions of the AWS Application Cost Profiler API.</p> <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete application cost report definitions, as well as to import your usage data into the Application Cost Profiler service.</p> <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost Profiler User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/application-cost-profiler/>
### Available Operations

* [deleteReportDefinition](#deletereportdefinition) - Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.
* [getReportDefinition](#getreportdefinition) - Retrieves the definition of a report already configured in AWS Application Cost Profiler.
* [importApplicationUsage](#importapplicationusage) - <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>
* [listReportDefinitions](#listreportdefinitions) - <p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>
* [putReportDefinition](#putreportdefinition) - Creates the report definition for a report in Application Cost Profiler.
* [updateReportDefinition](#updatereportdefinition) - Updates existing report in AWS Application Cost Profiler.

## deleteReportDefinition

Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportDefinitionRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->reportId = 'ipsa';

    $response = $sdk->sdk->deleteReportDefinition($request);

    if ($response->deleteReportDefinitionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportDefinition

Retrieves the definition of a report already configured in AWS Application Cost Profiler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportDefinitionRequest();
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->reportId = 'iusto';

    $response = $sdk->sdk->getReportDefinition($request);

    if ($response->getReportDefinitionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importApplicationUsage

<p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportApplicationUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportApplicationUsageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportApplicationUsageRequestBodySourceS3Location;
use \OpenAPI\OpenAPI\Models\Shared\S3BucketRegionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportApplicationUsageRequest();
    $request->requestBody = new ImportApplicationUsageRequestBody();
    $request->requestBody->sourceS3Location = new ImportApplicationUsageRequestBodySourceS3Location();
    $request->requestBody->sourceS3Location->bucket = 'excepturi';
    $request->requestBody->sourceS3Location->key = 'nisi';
    $request->requestBody->sourceS3Location->region = S3BucketRegionEnum::AF_SOUTH1;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->importApplicationUsage($request);

    if ($response->importApplicationUsageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReportDefinitions

<p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReportDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReportDefinitionsRequest();
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->maxResults = 473608;
    $request->nextToken = 'quod';

    $response = $sdk->sdk->listReportDefinitions($request);

    if ($response->listReportDefinitionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putReportDefinition

Creates the report definition for a report in Application Cost Profiler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutReportDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutReportDefinitionRequestBodyDestinationS3Location;
use \OpenAPI\OpenAPI\Models\Operations\PutReportDefinitionRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutReportDefinitionRequestBodyReportFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutReportDefinitionRequest();
    $request->requestBody = new PutReportDefinitionRequestBody();
    $request->requestBody->destinationS3Location = new PutReportDefinitionRequestBodyDestinationS3Location();
    $request->requestBody->destinationS3Location->bucket = 'quod';
    $request->requestBody->destinationS3Location->prefix = 'esse';
    $request->requestBody->format = PutReportDefinitionRequestBodyFormatEnum::PARQUET;
    $request->requestBody->reportDescription = 'porro';
    $request->requestBody->reportFrequency = PutReportDefinitionRequestBodyReportFrequencyEnum::ALL;
    $request->requestBody->reportId = 'dicta';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->putReportDefinition($request);

    if ($response->putReportDefinitionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReportDefinition

Updates existing report in AWS Application Cost Profiler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReportDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReportDefinitionRequestBodyDestinationS3Location;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReportDefinitionRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReportDefinitionRequestBodyReportFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReportDefinitionRequest();
    $request->requestBody = new UpdateReportDefinitionRequestBody();
    $request->requestBody->destinationS3Location = new UpdateReportDefinitionRequestBodyDestinationS3Location();
    $request->requestBody->destinationS3Location->bucket = 'totam';
    $request->requestBody->destinationS3Location->prefix = 'beatae';
    $request->requestBody->format = UpdateReportDefinitionRequestBodyFormatEnum::CSV;
    $request->requestBody->reportDescription = 'molestiae';
    $request->requestBody->reportFrequency = UpdateReportDefinitionRequestBodyReportFrequencyEnum::MONTHLY;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->reportId = 'perferendis';

    $response = $sdk->sdk->updateReportDefinition($request);

    if ($response->updateReportDefinitionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
