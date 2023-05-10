# SDK

## Overview

Provides AWS Marketplace business intelligence data on-demand.

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplacecommerceanalytics/>
### Available Operations

* [generateDataSet](#generatedataset) - Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
* [startSupportDataExport](#startsupportdataexport) - Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

## generateDataSet

Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDataSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerateDataSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDataSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateDataSetRequest();
    $request->generateDataSetRequest = new GenerateDataSetRequest();
    $request->generateDataSetRequest->customerDefinedValues = [
        'voluptatum' => 'iusto',
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->generateDataSetRequest->dataSetPublicationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T10:00:51.349Z');
    $request->generateDataSetRequest->dataSetType = DataSetTypeEnum::CUSTOMER_SUBSCRIBER_HOURLY_MONTHLY_SUBSCRIPTIONS;
    $request->generateDataSetRequest->destinationS3BucketName = 'ipsam';
    $request->generateDataSetRequest->destinationS3Prefix = 'repellendus';
    $request->generateDataSetRequest->roleNameArn = 'sapiente';
    $request->generateDataSetRequest->snsTopicArn = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = GenerateDataSetXAmzTargetEnum::MARKETPLACE_COMMERCE_ANALYTICS20150701_GENERATE_DATA_SET;

    $response = $sdk->sdk->generateDataSet($request);

    if ($response->generateDataSetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSupportDataExport

Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSupportDataExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSupportDataExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\SupportDataSetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartSupportDataExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSupportDataExportRequest();
    $request->startSupportDataExportRequest = new StartSupportDataExportRequest();
    $request->startSupportDataExportRequest->customerDefinedValues = [
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->startSupportDataExportRequest->dataSetType = SupportDataSetTypeEnum::TEST_CUSTOMER_SUPPORT_CONTACTS_DATA;
    $request->startSupportDataExportRequest->destinationS3BucketName = 'officia';
    $request->startSupportDataExportRequest->destinationS3Prefix = 'occaecati';
    $request->startSupportDataExportRequest->fromDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-18T20:36:37.412Z');
    $request->startSupportDataExportRequest->roleNameArn = 'hic';
    $request->startSupportDataExportRequest->snsTopicArn = 'optio';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = StartSupportDataExportXAmzTargetEnum::MARKETPLACE_COMMERCE_ANALYTICS20150701_START_SUPPORT_DATA_EXPORT;

    $response = $sdk->sdk->startSupportDataExport($request);

    if ($response->startSupportDataExportResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
