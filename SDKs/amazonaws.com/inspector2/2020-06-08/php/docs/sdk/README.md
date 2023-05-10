# SDK

## Overview

Amazon Inspector is a vulnerability discovery service that automates continuous scanning for security vulnerabilities within your Amazon EC2 and Amazon ECR environments.

Amazon Web Services documentation
<https://docs.aws.amazon.com/inspector2/>
### Available Operations

* [associateMember](#associatemember) - Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
* [batchGetAccountStatus](#batchgetaccountstatus) - Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
* [batchGetFreeTrialInfo](#batchgetfreetrialinfo) - Gets free trial status for multiple Amazon Web Services accounts.
* [cancelFindingsReport](#cancelfindingsreport) - Cancels the given findings report.
* [createFilter](#createfilter) - Creates a filter resource using specified filter criteria.
* [createFindingsReport](#createfindingsreport) - Creates a finding report.
* [deleteFilter](#deletefilter) - Deletes a filter resource.
* [describeOrganizationConfiguration](#describeorganizationconfiguration) - Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
* [disable](#disable) - Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
* [disableDelegatedAdminAccount](#disabledelegatedadminaccount) - Disables the Amazon Inspector delegated administrator for your organization.
* [disassociateMember](#disassociatemember) - Disassociates a member account from an Amazon Inspector delegated administrator.
* [enable](#enable) - Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
* [enableDelegatedAdminAccount](#enabledelegatedadminaccount) - Enables the Amazon Inspector delegated administrator for your Organizations organization.
* [getConfiguration](#getconfiguration) - Retrieves setting configurations for Inspector scans.
* [getDelegatedAdminAccount](#getdelegatedadminaccount) - Retrieves information about the Amazon Inspector delegated administrator for your organization.
* [getFindingsReportStatus](#getfindingsreportstatus) - Gets the status of a findings report.
* [getMember](#getmember) - Gets member information for your organization.
* [listAccountPermissions](#listaccountpermissions) - Lists the permissions an account has to configure Amazon Inspector.
* [listCoverage](#listcoverage) - Lists coverage details for you environment.
* [listCoverageStatistics](#listcoveragestatistics) - Lists Amazon Inspector coverage statistics for your environment.
* [listDelegatedAdminAccounts](#listdelegatedadminaccounts) - Lists information about the Amazon Inspector delegated administrator of your organization.
* [listFilters](#listfilters) - Lists the filters associated with your account.
* [listFindingAggregations](#listfindingaggregations) - Lists aggregated finding data for your environment based on specific criteria.
* [listFindings](#listfindings) - Lists findings for your environment.
* [listMembers](#listmembers) - List members associated with the Amazon Inspector delegated administrator for your organization.
* [listTagsForResource](#listtagsforresource) - Lists all tags attached to a given resource.
* [listUsageTotals](#listusagetotals) - Lists the Amazon Inspector usage totals over the last 30 days.
* [tagResource](#tagresource) - Adds tags to a resource.
* [untagResource](#untagresource) - Removes tags from a resource.
* [updateConfiguration](#updateconfiguration) - Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
* [updateFilter](#updatefilter) - Specifies the action that is to be applied to the findings that match the filter.
* [updateOrganizationConfiguration](#updateorganizationconfiguration) - Updates the configurations for your Amazon Inspector organization.

## associateMember

Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateMemberRequest();
    $request->requestBody = new AssociateMemberRequestBody();
    $request->requestBody->accountId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->associateMember($request);

    if ($response->associateMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetAccountStatus

Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAccountStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAccountStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetAccountStatusRequest();
    $request->requestBody = new BatchGetAccountStatusRequestBody();
    $request->requestBody->accountIds = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->batchGetAccountStatus($request);

    if ($response->batchGetAccountStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetFreeTrialInfo

Gets free trial status for multiple Amazon Web Services accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFreeTrialInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFreeTrialInfoRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetFreeTrialInfoRequest();
    $request->requestBody = new BatchGetFreeTrialInfoRequestBody();
    $request->requestBody->accountIds = [
        'quis',
    ];
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->batchGetFreeTrialInfo($request);

    if ($response->batchGetFreeTrialInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelFindingsReport

Cancels the given findings report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelFindingsReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelFindingsReportRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelFindingsReportRequest();
    $request->requestBody = new CancelFindingsReportRequestBody();
    $request->requestBody->reportId = 'odit';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->cancelFindingsReport($request);

    if ($response->cancelFindingsReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFilter

Creates a filter resource using specified filter criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilterRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFilterRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateFilter;
use \OpenAPI\OpenAPI\Models\Shared\NumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\PortRangeFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFilterRequest();
    $request->requestBody = new CreateFilterRequestBody();
    $request->requestBody->action = CreateFilterRequestBodyActionEnum::SUPPRESS;
    $request->requestBody->description = 'porro';
    $request->requestBody->filterCriteria = new CreateFilterRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->awsAccountId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->componentId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->componentType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceImageId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceSubnetId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceVpcId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageArchitecture = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageHash = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImagePushedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageRegistry = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageRepositoryName = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageTags = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->exploitAvailable = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingArn = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingStatus = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->firstObservedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->fixAvailable = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->inspectorScore = [
        new NumberFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionExecutionRoleArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionLastModifiedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionLayers = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionRuntime = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lastObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->networkProtocol = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->portRange = [
        new PortRangeFilter(),
    ];
    $request->requestBody->filterCriteria->relatedVulnerabilities = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceTags = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filterCriteria->resourceType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->severity = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->title = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->updatedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->vendorSeverity = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerabilityId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerabilitySource = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerablePackages = [
        new PackageFilter(),
        new PackageFilter(),
        new PackageFilter(),
    ];
    $request->requestBody->name = 'Brenda Wisozk';
    $request->requestBody->reason = 'laborum';
    $request->requestBody->tags = [
        'dolorem' => 'corporis',
    ];
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->createFilter($request);

    if ($response->createFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFindingsReport

Creates a finding report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsReportRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsReportRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateFilter;
use \OpenAPI\OpenAPI\Models\Shared\NumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\PortRangeFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageFilter;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsReportRequestBodyReportFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsReportRequestBodyS3Destination;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFindingsReportRequest();
    $request->requestBody = new CreateFindingsReportRequestBody();
    $request->requestBody->filterCriteria = new CreateFindingsReportRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->awsAccountId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->componentId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->componentType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceImageId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceSubnetId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceVpcId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageArchitecture = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageHash = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImagePushedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageRegistry = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageRepositoryName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageTags = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->exploitAvailable = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingArn = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingStatus = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingType = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->firstObservedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->fixAvailable = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->inspectorScore = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionExecutionRoleArn = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionLastModifiedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionLayers = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionRuntime = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lastObservedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->networkProtocol = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->portRange = [
        new PortRangeFilter(),
        new PortRangeFilter(),
        new PortRangeFilter(),
        new PortRangeFilter(),
    ];
    $request->requestBody->filterCriteria->relatedVulnerabilities = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceTags = [
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filterCriteria->resourceType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->severity = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->title = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->updatedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->vendorSeverity = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerabilityId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerabilitySource = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerablePackages = [
        new PackageFilter(),
    ];
    $request->requestBody->reportFormat = CreateFindingsReportRequestBodyReportFormatEnum::JSON;
    $request->requestBody->s3Destination = new CreateFindingsReportRequestBodyS3Destination();
    $request->requestBody->s3Destination->bucketName = 'voluptatibus';
    $request->requestBody->s3Destination->keyPrefix = 'vero';
    $request->requestBody->s3Destination->kmsKeyArn = 'nihil';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->createFindingsReport($request);

    if ($response->createFindingsReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFilter

Deletes a filter resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFilterRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFilterRequest();
    $request->requestBody = new DeleteFilterRequestBody();
    $request->requestBody->arn = 'doloremque';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->deleteFilter($request);

    if ($response->deleteFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationConfiguration

Describe Amazon Inspector configuration settings for an Amazon Web Services organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationConfigurationRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->describeOrganizationConfiguration($request);

    if ($response->describeOrganizationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disable

Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResourceScanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableRequest();
    $request->requestBody = new DisableRequestBody();
    $request->requestBody->accountIds = [
        'quidem',
    ];
    $request->requestBody->resourceTypes = [
        ResourceScanTypeEnum::ECR,
        ResourceScanTypeEnum::LAMBDA,
        ResourceScanTypeEnum::EC2,
    ];
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->disable($request);

    if ($response->disableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableDelegatedAdminAccount

Disables the Amazon Inspector delegated administrator for your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableDelegatedAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableDelegatedAdminAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableDelegatedAdminAccountRequest();
    $request->requestBody = new DisableDelegatedAdminAccountRequestBody();
    $request->requestBody->delegatedAdminAccountId = 'itaque';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->disableDelegatedAdminAccount($request);

    if ($response->disableDelegatedAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateMember

Disassociates a member account from an Amazon Inspector delegated administrator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMemberRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateMemberRequest();
    $request->requestBody = new DisassociateMemberRequestBody();
    $request->requestBody->accountId = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->disassociateMember($request);

    if ($response->disassociateMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enable

Enables Amazon Inspector scans for one or more Amazon Web Services accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResourceScanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableRequest();
    $request->requestBody = new EnableRequestBody();
    $request->requestBody->accountIds = [
        'magni',
    ];
    $request->requestBody->clientToken = 'assumenda';
    $request->requestBody->resourceTypes = [
        ResourceScanTypeEnum::EC2,
        ResourceScanTypeEnum::EC2,
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->enable($request);

    if ($response->enableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableDelegatedAdminAccount

Enables the Amazon Inspector delegated administrator for your Organizations organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableDelegatedAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableDelegatedAdminAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableDelegatedAdminAccountRequest();
    $request->requestBody = new EnableDelegatedAdminAccountRequestBody();
    $request->requestBody->clientToken = 'eum';
    $request->requestBody->delegatedAdminAccountId = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->enableDelegatedAdminAccount($request);

    if ($response->enableDelegatedAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfiguration

Retrieves setting configurations for Inspector scans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigurationRequest();
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->getConfiguration($request);

    if ($response->getConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDelegatedAdminAccount

Retrieves information about the Amazon Inspector delegated administrator for your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDelegatedAdminAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDelegatedAdminAccountRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->getDelegatedAdminAccount($request);

    if ($response->getDelegatedAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindingsReportStatus

Gets the status of a findings report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsReportStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsReportStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingsReportStatusRequest();
    $request->requestBody = new GetFindingsReportStatusRequestBody();
    $request->requestBody->reportId = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getFindingsReportStatus($request);

    if ($response->getFindingsReportStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMember

Gets member information for your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMemberRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMemberRequest();
    $request->requestBody = new GetMemberRequestBody();
    $request->requestBody->accountId = 'quidem';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getMember($request);

    if ($response->getMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountPermissions

Lists the permissions an account has to configure Amazon Inspector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountPermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountPermissionsRequestBodyServiceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountPermissionsRequest();
    $request->requestBody = new ListAccountPermissionsRequestBody();
    $request->requestBody->maxResults = 643990;
    $request->requestBody->nextToken = 'nisi';
    $request->requestBody->service = ListAccountPermissionsRequestBodyServiceEnum::ECR;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->maxResults = 'id';
    $request->nextToken = 'labore';

    $response = $sdk->sdk->listAccountPermissions($request);

    if ($response->listAccountPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCoverage

Lists coverage details for you environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCoverageRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCoverageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListCoverageRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\CoverageStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\CoverageStringComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\CoverageMapFilter;
use \OpenAPI\OpenAPI\Models\Shared\CoverageMapComparisonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCoverageRequest();
    $request->requestBody = new ListCoverageRequestBody();
    $request->requestBody->filterCriteria = new ListCoverageRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->accountId = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceTags = [
        new CoverageMapFilter(),
        new CoverageMapFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageTags = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrRepositoryName = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionName = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionRuntime = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionTags = [
        new CoverageMapFilter(),
    ];
    $request->requestBody->filterCriteria->resourceId = [
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceType = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->scanStatusCode = [
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->scanStatusReason = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->scanType = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->maxResults = 590873;
    $request->requestBody->nextToken = 'quos';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->maxResults = 'dolor';
    $request->nextToken = 'necessitatibus';

    $response = $sdk->sdk->listCoverage($request);

    if ($response->listCoverageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCoverageStatistics

Lists Amazon Inspector coverage statistics for your environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCoverageStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCoverageStatisticsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListCoverageStatisticsRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\CoverageStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\CoverageStringComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\CoverageMapFilter;
use \OpenAPI\OpenAPI\Models\Shared\CoverageMapComparisonEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCoverageStatisticsRequestBodyGroupByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCoverageStatisticsRequest();
    $request->requestBody = new ListCoverageStatisticsRequestBody();
    $request->requestBody->filterCriteria = new ListCoverageStatisticsRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->accountId = [
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceTags = [
        new CoverageMapFilter(),
        new CoverageMapFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageTags = [
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrRepositoryName = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionName = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionRuntime = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionTags = [
        new CoverageMapFilter(),
        new CoverageMapFilter(),
    ];
    $request->requestBody->filterCriteria->resourceId = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceType = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->scanStatusCode = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->scanStatusReason = [
        new CoverageStringFilter(),
        new CoverageStringFilter(),
    ];
    $request->requestBody->filterCriteria->scanType = [
        new CoverageStringFilter(),
    ];
    $request->requestBody->groupBy = ListCoverageStatisticsRequestBodyGroupByEnum::SCAN_STATUS_CODE;
    $request->requestBody->nextToken = 'repudiandae';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';
    $request->nextToken = 'pariatur';

    $response = $sdk->sdk->listCoverageStatistics($request);

    if ($response->listCoverageStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDelegatedAdminAccounts

Lists information about the Amazon Inspector delegated administrator of your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDelegatedAdminAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDelegatedAdminAccountsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDelegatedAdminAccountsRequest();
    $request->requestBody = new ListDelegatedAdminAccountsRequestBody();
    $request->requestBody->maxResults = 37559;
    $request->requestBody->nextToken = 'consequuntur';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->maxResults = 'maxime';
    $request->nextToken = 'ea';

    $response = $sdk->sdk->listDelegatedAdminAccounts($request);

    if ($response->listDelegatedAdminAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFilters

Lists the filters associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFiltersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFiltersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListFiltersRequestBodyActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFiltersRequest();
    $request->requestBody = new ListFiltersRequestBody();
    $request->requestBody->action = ListFiltersRequestBodyActionEnum::SUPPRESS;
    $request->requestBody->arns = [
        'ea',
    ];
    $request->requestBody->maxResults = 33222;
    $request->requestBody->nextToken = 'ab';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';
    $request->maxResults = 'pariatur';
    $request->nextToken = 'nemo';

    $response = $sdk->sdk->listFilters($request);

    if ($response->listFiltersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFindingAggregations

Lists aggregated finding data for your environment based on specific criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingAggregationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingAggregationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringComparisonEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingAggregationsRequestBodyAggregationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountAggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregationFindingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregationResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AmiAggregation;
use \OpenAPI\OpenAPI\Models\Shared\AmiSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcrContainerAggregation;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcrContainerSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2InstanceAggregation;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\Ec2InstanceSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\FindingTypeAggregation;
use \OpenAPI\OpenAPI\Models\Shared\FindingTypeSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageLayerAggregation;
use \OpenAPI\OpenAPI\Models\Shared\ImageLayerSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFunctionAggregation;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFunctionSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaLayerAggregation;
use \OpenAPI\OpenAPI\Models\Shared\LambdaLayerSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageAggregation;
use \OpenAPI\OpenAPI\Models\Shared\PackageSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryAggregation;
use \OpenAPI\OpenAPI\Models\Shared\RepositorySortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\TitleAggregation;
use \OpenAPI\OpenAPI\Models\Shared\TitleSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingAggregationsRequestBodyAggregationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFindingAggregationsRequest();
    $request->requestBody = new ListFindingAggregationsRequestBody();
    $request->requestBody->accountIds = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest = new ListFindingAggregationsRequestBodyAggregationRequest();
    $request->requestBody->aggregationRequest->accountAggregation = new AccountAggregation();
    $request->requestBody->aggregationRequest->accountAggregation->findingType = AggregationFindingTypeEnum::NETWORK_REACHABILITY;
    $request->requestBody->aggregationRequest->accountAggregation->resourceType = AggregationResourceTypeEnum::AWS_LAMBDA_FUNCTION;
    $request->requestBody->aggregationRequest->accountAggregation->sortBy = AccountSortByEnum::CRITICAL;
    $request->requestBody->aggregationRequest->accountAggregation->sortOrder = SortOrderEnum::ASC;
    $request->requestBody->aggregationRequest->amiAggregation = new AmiAggregation();
    $request->requestBody->aggregationRequest->amiAggregation->amis = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->amiAggregation->sortBy = AmiSortByEnum::HIGH;
    $request->requestBody->aggregationRequest->amiAggregation->sortOrder = SortOrderEnum::DESC;
    $request->requestBody->aggregationRequest->awsEcrContainerAggregation = new AwsEcrContainerAggregation();
    $request->requestBody->aggregationRequest->awsEcrContainerAggregation->architectures = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->awsEcrContainerAggregation->imageShas = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->awsEcrContainerAggregation->imageTags = [
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->awsEcrContainerAggregation->repositories = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->awsEcrContainerAggregation->resourceIds = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->awsEcrContainerAggregation->sortBy = AwsEcrContainerSortByEnum::HIGH;
    $request->requestBody->aggregationRequest->awsEcrContainerAggregation->sortOrder = SortOrderEnum::ASC;
    $request->requestBody->aggregationRequest->ec2InstanceAggregation = new Ec2InstanceAggregation();
    $request->requestBody->aggregationRequest->ec2InstanceAggregation->amis = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->ec2InstanceAggregation->instanceIds = [
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->ec2InstanceAggregation->instanceTags = [
        new MapFilter(),
    ];
    $request->requestBody->aggregationRequest->ec2InstanceAggregation->operatingSystems = [
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->ec2InstanceAggregation->sortBy = Ec2InstanceSortByEnum::NETWORK_FINDINGS;
    $request->requestBody->aggregationRequest->ec2InstanceAggregation->sortOrder = SortOrderEnum::DESC;
    $request->requestBody->aggregationRequest->findingTypeAggregation = new FindingTypeAggregation();
    $request->requestBody->aggregationRequest->findingTypeAggregation->findingType = AggregationFindingTypeEnum::NETWORK_REACHABILITY;
    $request->requestBody->aggregationRequest->findingTypeAggregation->resourceType = AggregationResourceTypeEnum::AWS_EC2_INSTANCE;
    $request->requestBody->aggregationRequest->findingTypeAggregation->sortBy = FindingTypeSortByEnum::ALL;
    $request->requestBody->aggregationRequest->findingTypeAggregation->sortOrder = SortOrderEnum::ASC;
    $request->requestBody->aggregationRequest->imageLayerAggregation = new ImageLayerAggregation();
    $request->requestBody->aggregationRequest->imageLayerAggregation->layerHashes = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->imageLayerAggregation->repositories = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->imageLayerAggregation->resourceIds = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->imageLayerAggregation->sortBy = ImageLayerSortByEnum::ALL;
    $request->requestBody->aggregationRequest->imageLayerAggregation->sortOrder = SortOrderEnum::DESC;
    $request->requestBody->aggregationRequest->lambdaFunctionAggregation = new LambdaFunctionAggregation();
    $request->requestBody->aggregationRequest->lambdaFunctionAggregation->functionNames = [
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->lambdaFunctionAggregation->functionTags = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->aggregationRequest->lambdaFunctionAggregation->resourceIds = [
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->lambdaFunctionAggregation->runtimes = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->lambdaFunctionAggregation->sortBy = LambdaFunctionSortByEnum::HIGH;
    $request->requestBody->aggregationRequest->lambdaFunctionAggregation->sortOrder = SortOrderEnum::ASC;
    $request->requestBody->aggregationRequest->lambdaLayerAggregation = new LambdaLayerAggregation();
    $request->requestBody->aggregationRequest->lambdaLayerAggregation->functionNames = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->lambdaLayerAggregation->layerArns = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->lambdaLayerAggregation->resourceIds = [
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->lambdaLayerAggregation->sortBy = LambdaLayerSortByEnum::ALL;
    $request->requestBody->aggregationRequest->lambdaLayerAggregation->sortOrder = SortOrderEnum::DESC;
    $request->requestBody->aggregationRequest->packageAggregation = new PackageAggregation();
    $request->requestBody->aggregationRequest->packageAggregation->packageNames = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->packageAggregation->sortBy = PackageSortByEnum::HIGH;
    $request->requestBody->aggregationRequest->packageAggregation->sortOrder = SortOrderEnum::DESC;
    $request->requestBody->aggregationRequest->repositoryAggregation = new RepositoryAggregation();
    $request->requestBody->aggregationRequest->repositoryAggregation->repositories = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->repositoryAggregation->sortBy = RepositorySortByEnum::AFFECTED_IMAGES;
    $request->requestBody->aggregationRequest->repositoryAggregation->sortOrder = SortOrderEnum::DESC;
    $request->requestBody->aggregationRequest->titleAggregation = new TitleAggregation();
    $request->requestBody->aggregationRequest->titleAggregation->resourceType = AggregationResourceTypeEnum::AWS_LAMBDA_FUNCTION;
    $request->requestBody->aggregationRequest->titleAggregation->sortBy = TitleSortByEnum::ALL;
    $request->requestBody->aggregationRequest->titleAggregation->sortOrder = SortOrderEnum::DESC;
    $request->requestBody->aggregationRequest->titleAggregation->titles = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationRequest->titleAggregation->vulnerabilityIds = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->aggregationType = ListFindingAggregationsRequestBodyAggregationTypeEnum::AMI;
    $request->requestBody->maxResults = 212390;
    $request->requestBody->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->maxResults = 'dignissimos';
    $request->nextToken = 'reiciendis';

    $response = $sdk->sdk->listFindingAggregations($request);

    if ($response->listFindingAggregationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFindings

Lists findings for your environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateFilter;
use \OpenAPI\OpenAPI\Models\Shared\NumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\PortRangeFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsRequestBodySortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SortFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFindingsRequest();
    $request->requestBody = new ListFindingsRequestBody();
    $request->requestBody->filterCriteria = new ListFindingsRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->awsAccountId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->componentId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->componentType = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceImageId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceSubnetId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceVpcId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageArchitecture = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageHash = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImagePushedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageRegistry = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageRepositoryName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageTags = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->exploitAvailable = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingStatus = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->firstObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->fixAvailable = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->inspectorScore = [
        new NumberFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionExecutionRoleArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionLastModifiedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionLayers = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionRuntime = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lastObservedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->networkProtocol = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->portRange = [
        new PortRangeFilter(),
        new PortRangeFilter(),
        new PortRangeFilter(),
        new PortRangeFilter(),
    ];
    $request->requestBody->filterCriteria->relatedVulnerabilities = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceTags = [
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filterCriteria->resourceType = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->severity = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->title = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->updatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->vendorSeverity = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerabilityId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerabilitySource = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerablePackages = [
        new PackageFilter(),
    ];
    $request->requestBody->maxResults = 758379;
    $request->requestBody->nextToken = 'accusamus';
    $request->requestBody->sortCriteria = new ListFindingsRequestBodySortCriteria();
    $request->requestBody->sortCriteria->field = SortFieldEnum::FINDING_STATUS;
    $request->requestBody->sortCriteria->sortOrder = SortOrderEnum::DESC;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';
    $request->maxResults = 'alias';
    $request->nextToken = 'at';

    $response = $sdk->sdk->listFindings($request);

    if ($response->listFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMembers

List members associated with the Amazon Inspector delegated administrator for your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMembersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMembersRequest();
    $request->requestBody = new ListMembersRequestBody();
    $request->requestBody->maxResults = 311860;
    $request->requestBody->nextToken = 'tempora';
    $request->requestBody->onlyAssociated = false;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'esse';
    $request->maxResults = 'harum';
    $request->nextToken = 'iusto';

    $response = $sdk->sdk->listMembers($request);

    if ($response->listMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags attached to a given resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';
    $request->resourceArn = 'enim';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageTotals

Lists the Amazon Inspector usage totals over the last 30 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageTotalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageTotalsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageTotalsRequest();
    $request->requestBody = new ListUsageTotalsRequestBody();
    $request->requestBody->accountIds = [
        'sapiente',
    ];
    $request->requestBody->maxResults = 518201;
    $request->requestBody->nextToken = 'nihil';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->maxResults = 'deserunt';
    $request->nextToken = 'quam';

    $response = $sdk->sdk->listUsageTotals($request);

    if ($response->listUsageTotalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'incidunt' => 'qui',
    ];
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->resourceArn = 'incidunt';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';
    $request->resourceArn = 'temporibus';
    $request->tagKeys = [
        'neque',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfiguration

Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationRequestBodyEcrConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EcrRescanDurationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfigurationRequest();
    $request->requestBody = new UpdateConfigurationRequestBody();
    $request->requestBody->ecrConfiguration = new UpdateConfigurationRequestBodyEcrConfiguration();
    $request->requestBody->ecrConfiguration->rescanDuration = EcrRescanDurationEnum::LIFETIME;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->updateConfiguration($request);

    if ($response->updateConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFilter

Specifies the action that is to be applied to the findings that match the filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFilterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFilterRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFilterRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateFilter;
use \OpenAPI\OpenAPI\Models\Shared\NumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\PortRangeFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\PackageFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFilterRequest();
    $request->requestBody = new UpdateFilterRequestBody();
    $request->requestBody->action = UpdateFilterRequestBodyActionEnum::SUPPRESS;
    $request->requestBody->description = 'soluta';
    $request->requestBody->filterArn = 'nobis';
    $request->requestBody->filterCriteria = new UpdateFilterRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->awsAccountId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->componentId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->componentType = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceImageId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceSubnetId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ec2InstanceVpcId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageArchitecture = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageHash = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImagePushedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageRegistry = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageRepositoryName = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->ecrImageTags = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->exploitAvailable = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingArn = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingStatus = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->findingType = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->firstObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->fixAvailable = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->inspectorScore = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionExecutionRoleArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionLastModifiedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionLayers = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lambdaFunctionRuntime = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->lastObservedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->networkProtocol = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->portRange = [
        new PortRangeFilter(),
        new PortRangeFilter(),
        new PortRangeFilter(),
    ];
    $request->requestBody->filterCriteria->relatedVulnerabilities = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceId = [
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->resourceTags = [
        new MapFilter(),
    ];
    $request->requestBody->filterCriteria->resourceType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->severity = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->title = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->updatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filterCriteria->vendorSeverity = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerabilityId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerabilitySource = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filterCriteria->vulnerablePackages = [
        new PackageFilter(),
        new PackageFilter(),
    ];
    $request->requestBody->name = 'Dixie Klocko';
    $request->requestBody->reason = 'tenetur';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->updateFilter($request);

    if ($response->updateFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfiguration

Updates the configurations for your Amazon Inspector organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequestBodyAutoEnable;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigurationRequest();
    $request->requestBody = new UpdateOrganizationConfigurationRequestBody();
    $request->requestBody->autoEnable = new UpdateOrganizationConfigurationRequestBodyAutoEnable();
    $request->requestBody->autoEnable->ec2 = false;
    $request->requestBody->autoEnable->ecr = false;
    $request->requestBody->autoEnable->lambda = false;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->updateOrganizationConfiguration($request);

    if ($response->updateOrganizationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
