# SDK

## Overview

Amazon Macie

Amazon Web Services documentation
<https://docs.aws.amazon.com/macie2/>
### Available Operations

* [acceptInvitation](#acceptinvitation) - Accepts an Amazon Macie membership invitation that was received from a specific account.
* [batchGetCustomDataIdentifiers](#batchgetcustomdataidentifiers) - Retrieves information about one or more custom data identifiers.
* [createAllowList](#createallowlist) - Creates and defines the settings for an allow list.
* [createClassificationJob](#createclassificationjob) - Creates and defines the settings for a classification job.
* [createCustomDataIdentifier](#createcustomdataidentifier) - Creates and defines the criteria and other settings for a custom data identifier.
* [createFindingsFilter](#createfindingsfilter) - Creates and defines the criteria and other settings for a findings filter.
* [createInvitations](#createinvitations) - Sends an Amazon Macie membership invitation to one or more accounts.
* [createMember](#createmember) - Associates an account with an Amazon Macie administrator account.
* [createSampleFindings](#createsamplefindings) - Creates sample findings.
* [declineInvitations](#declineinvitations) - Declines Amazon Macie membership invitations that were received from specific accounts.
* [deleteAllowList](#deleteallowlist) - Deletes an allow list.
* [deleteCustomDataIdentifier](#deletecustomdataidentifier) - Soft deletes a custom data identifier.
* [deleteFindingsFilter](#deletefindingsfilter) - Deletes a findings filter.
* [deleteInvitations](#deleteinvitations) - Deletes Amazon Macie membership invitations that were received from specific accounts.
* [deleteMember](#deletemember) - Deletes the association between an Amazon Macie administrator account and an account.
* [describeBuckets](#describebuckets) - Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
* [describeClassificationJob](#describeclassificationjob) - Retrieves the status and settings for a classification job.
* [describeOrganizationConfiguration](#describeorganizationconfiguration) - Retrieves the Amazon Macie configuration settings for an organization in Organizations.
* [disableMacie](#disablemacie) - Disables Amazon Macie and deletes all settings and resources for a Macie account.
* [disableOrganizationAdminAccount](#disableorganizationadminaccount) - Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [disassociateFromAdministratorAccount](#disassociatefromadministratoraccount) - Disassociates a member account from its Amazon Macie administrator account.
* [disassociateFromMasterAccount](#disassociatefrommasteraccount) - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* [disassociateMember](#disassociatemember) - Disassociates an Amazon Macie administrator account from a member account.
* [enableMacie](#enablemacie) - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* [enableOrganizationAdminAccount](#enableorganizationadminaccount) - Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [getAdministratorAccount](#getadministratoraccount) - Retrieves information about the Amazon Macie administrator account for an account.
* [getAllowList](#getallowlist) - Retrieves the settings and status of an allow list.
* [getAutomatedDiscoveryConfiguration](#getautomateddiscoveryconfiguration) - Retrieves the configuration settings and status of automated sensitive data discovery for an account.
* [getBucketStatistics](#getbucketstatistics) - Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
* [getClassificationExportConfiguration](#getclassificationexportconfiguration) - Retrieves the configuration settings for storing data classification results.
* [getClassificationScope](#getclassificationscope) - Retrieves the classification scope settings for an account.
* [getCustomDataIdentifier](#getcustomdataidentifier) - Retrieves the criteria and other settings for a custom data identifier.
* [getFindingStatistics](#getfindingstatistics) -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* [getFindings](#getfindings) - Retrieves the details of one or more findings.
* [getFindingsFilter](#getfindingsfilter) - Retrieves the criteria and other settings for a findings filter.
* [getFindingsPublicationConfiguration](#getfindingspublicationconfiguration) - Retrieves the configuration settings for publishing findings to Security Hub.
* [getInvitationsCount](#getinvitationscount) - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* [getMacieSession](#getmaciesession) - Retrieves the status and configuration settings for an Amazon Macie account.
* [getMasterAccount](#getmasteraccount) - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* [getMember](#getmember) - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* [getResourceProfile](#getresourceprofile) - Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
* [getRevealConfiguration](#getrevealconfiguration) - Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [getSensitiveDataOccurrences](#getsensitivedataoccurrences) - Retrieves occurrences of sensitive data reported by a finding.
* [getSensitiveDataOccurrencesAvailability](#getsensitivedataoccurrencesavailability) - Checks whether occurrences of sensitive data can be retrieved for a finding.
* [getSensitivityInspectionTemplate](#getsensitivityinspectiontemplate) -  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
* [getUsageStatistics](#getusagestatistics) - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* [getUsageTotals](#getusagetotals) - Retrieves (queries) aggregated usage data for an account.
* [listAllowLists](#listallowlists) - Retrieves a subset of information about all the allow lists for an account.
* [listClassificationJobs](#listclassificationjobs) - Retrieves a subset of information about one or more classification jobs.
* [listClassificationScopes](#listclassificationscopes) - Retrieves a subset of information about the classification scope for an account.
* [listCustomDataIdentifiers](#listcustomdataidentifiers) - Retrieves a subset of information about all the custom data identifiers for an account.
* [listFindings](#listfindings) - Retrieves a subset of information about one or more findings.
* [listFindingsFilters](#listfindingsfilters) - Retrieves a subset of information about all the findings filters for an account.
* [listInvitations](#listinvitations) - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* [listManagedDataIdentifiers](#listmanageddataidentifiers) - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* [listMembers](#listmembers) - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* [listOrganizationAdminAccounts](#listorganizationadminaccounts) - Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
* [listResourceProfileArtifacts](#listresourceprofileartifacts) - Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
* [listResourceProfileDetections](#listresourceprofiledetections) - Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
* [listSensitivityInspectionTemplates](#listsensitivityinspectiontemplates) -  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
* [listTagsForResource](#listtagsforresource) - Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
* [putClassificationExportConfiguration](#putclassificationexportconfiguration) - Creates or updates the configuration settings for storing data classification results.
* [putFindingsPublicationConfiguration](#putfindingspublicationconfiguration) - Updates the configuration settings for publishing findings to Security Hub.
* [searchResources](#searchresources) - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* [tagResource](#tagresource) - Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
* [testCustomDataIdentifier](#testcustomdataidentifier) - Tests a custom data identifier.
* [untagResource](#untagresource) - Removes one or more tags (keys and values) from an Amazon Macie resource.
* [updateAllowList](#updateallowlist) - Updates the settings for an allow list.
* [updateAutomatedDiscoveryConfiguration](#updateautomateddiscoveryconfiguration) - Enables or disables automated sensitive data discovery for an account.
* [updateClassificationJob](#updateclassificationjob) - Changes the status of a classification job.
* [updateClassificationScope](#updateclassificationscope) - Updates the classification scope settings for an account.
* [updateFindingsFilter](#updatefindingsfilter) - Updates the criteria and other settings for a findings filter.
* [updateMacieSession](#updatemaciesession) - Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
* [updateMemberSession](#updatemembersession) - Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
* [updateOrganizationConfiguration](#updateorganizationconfiguration) - Updates the Amazon Macie configuration settings for an organization in Organizations.
* [updateResourceProfile](#updateresourceprofile) - Updates the sensitivity score for an S3 bucket.
* [updateResourceProfileDetections](#updateresourceprofiledetections) - Updates the sensitivity scoring settings for an S3 bucket.
* [updateRevealConfiguration](#updaterevealconfiguration) - Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [updateSensitivityInspectionTemplate](#updatesensitivityinspectiontemplate) -  <p>Updates the settings for the sensitivity inspection template for an account.</p>

## acceptInvitation

Accepts an Amazon Macie membership invitation that was received from a specific account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptInvitationRequest();
    $request->requestBody = new AcceptInvitationRequestBody();
    $request->requestBody->administratorAccountId = 'deserunt';
    $request->requestBody->invitationId = 'suscipit';
    $request->requestBody->masterAccount = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->acceptInvitation($request);

    if ($response->acceptInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetCustomDataIdentifiers

Retrieves information about one or more custom data identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCustomDataIdentifiersRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCustomDataIdentifiersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetCustomDataIdentifiersRequest();
    $request->requestBody = new BatchGetCustomDataIdentifiersRequestBody();
    $request->requestBody->ids = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->batchGetCustomDataIdentifiers($request);

    if ($response->batchGetCustomDataIdentifiersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAllowList

Creates and defines the settings for an allow list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAllowListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAllowListRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAllowListRequestBodyCriteria;
use \OpenAPI\OpenAPI\Models\Shared\S3WordsList;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAllowListRequest();
    $request->requestBody = new CreateAllowListRequestBody();
    $request->requestBody->clientToken = 'perferendis';
    $request->requestBody->criteria = new CreateAllowListRequestBodyCriteria();
    $request->requestBody->criteria->regex = 'ipsam';
    $request->requestBody->criteria->s3WordsList = new S3WordsList();
    $request->requestBody->criteria->s3WordsList->bucketName = 'repellendus';
    $request->requestBody->criteria->s3WordsList->objectKey = 'sapiente';
    $request->requestBody->description = 'quo';
    $request->requestBody->name = 'Teri Strosin';
    $request->requestBody->tags = [
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
        'nam' => 'officia',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->createAllowList($request);

    if ($response->createAllowListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createClassificationJob

Creates and defines the settings for a classification job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassificationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassificationJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassificationJobRequestBodyJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassificationJobRequestBodyS3JobDefinition;
use \OpenAPI\OpenAPI\Models\Shared\S3BucketCriteriaForJob;
use \OpenAPI\OpenAPI\Models\Shared\CriteriaBlockForJob;
use \OpenAPI\OpenAPI\Models\Shared\CriteriaForJob;
use \OpenAPI\OpenAPI\Models\Shared\SimpleCriterionForJob;
use \OpenAPI\OpenAPI\Models\Shared\JobComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimpleCriterionKeyForJobEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagCriterionForJob;
use \OpenAPI\OpenAPI\Models\Shared\TagCriterionPairForJob;
use \OpenAPI\OpenAPI\Models\Shared\S3BucketDefinitionForJob;
use \OpenAPI\OpenAPI\Models\Shared\Scoping;
use \OpenAPI\OpenAPI\Models\Shared\JobScopingBlock;
use \OpenAPI\OpenAPI\Models\Shared\JobScopeTerm;
use \OpenAPI\OpenAPI\Models\Shared\SimpleScopeTerm;
use \OpenAPI\OpenAPI\Models\Shared\ScopeFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagScopeTerm;
use \OpenAPI\OpenAPI\Models\Shared\TagValuePair;
use \OpenAPI\OpenAPI\Models\Shared\TagTargetEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassificationJobRequestBodyScheduleFrequency;
use \OpenAPI\OpenAPI\Models\Shared\MonthlySchedule;
use \OpenAPI\OpenAPI\Models\Shared\WeeklySchedule;
use \OpenAPI\OpenAPI\Models\Shared\DayOfWeekEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClassificationJobRequest();
    $request->requestBody = new CreateClassificationJobRequestBody();
    $request->requestBody->allowListIds = [
        'molestiae',
        'modi',
    ];
    $request->requestBody->clientToken = 'qui';
    $request->requestBody->customDataIdentifierIds = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->requestBody->description = 'aspernatur';
    $request->requestBody->initialRun = false;
    $request->requestBody->jobType = CreateClassificationJobRequestBodyJobTypeEnum::ONE_TIME;
    $request->requestBody->managedDataIdentifierIds = [
        'natus',
        'sed',
    ];
    $request->requestBody->managedDataIdentifierSelector = CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum::INCLUDE;
    $request->requestBody->name = 'Faye Howe';
    $request->requestBody->s3JobDefinition = new CreateClassificationJobRequestBodyS3JobDefinition();
    $request->requestBody->s3JobDefinition->bucketCriteria = new S3BucketCriteriaForJob();
    $request->requestBody->s3JobDefinition->bucketCriteria->excludes = new CriteriaBlockForJob();
    $request->requestBody->s3JobDefinition->bucketCriteria->excludes->and = [
        new CriteriaForJob(),
        new CriteriaForJob(),
        new CriteriaForJob(),
    ];
    $request->requestBody->s3JobDefinition->bucketCriteria->includes = new CriteriaBlockForJob();
    $request->requestBody->s3JobDefinition->bucketCriteria->includes->and = [
        new CriteriaForJob(),
        new CriteriaForJob(),
    ];
    $request->requestBody->s3JobDefinition->bucketDefinitions = [
        new S3BucketDefinitionForJob(),
        new S3BucketDefinitionForJob(),
    ];
    $request->requestBody->s3JobDefinition->scoping = new Scoping();
    $request->requestBody->s3JobDefinition->scoping->excludes = new JobScopingBlock();
    $request->requestBody->s3JobDefinition->scoping->excludes->and = [
        new JobScopeTerm(),
        new JobScopeTerm(),
        new JobScopeTerm(),
    ];
    $request->requestBody->s3JobDefinition->scoping->includes = new JobScopingBlock();
    $request->requestBody->s3JobDefinition->scoping->includes->and = [
        new JobScopeTerm(),
        new JobScopeTerm(),
    ];
    $request->requestBody->samplingPercentage = 902349;
    $request->requestBody->scheduleFrequency = new CreateClassificationJobRequestBodyScheduleFrequency();
    $request->requestBody->scheduleFrequency->dailySchedule = [
        'architecto' => 'ipsa',
        'reiciendis' => 'est',
        'mollitia' => 'laborum',
    ];
    $request->requestBody->scheduleFrequency->monthlySchedule = new MonthlySchedule();
    $request->requestBody->scheduleFrequency->monthlySchedule->dayOfMonth = 170909;
    $request->requestBody->scheduleFrequency->weeklySchedule = new WeeklySchedule();
    $request->requestBody->scheduleFrequency->weeklySchedule->dayOfWeek = DayOfWeekEnum::MONDAY;
    $request->requestBody->tags = [
        'explicabo' => 'nobis',
        'enim' => 'omnis',
    ];
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->createClassificationJob($request);

    if ($response->createClassificationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomDataIdentifier

Creates and defines the criteria and other settings for a custom data identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomDataIdentifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomDataIdentifierRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SeverityLevel;
use \OpenAPI\OpenAPI\Models\Shared\DataIdentifierSeverityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomDataIdentifierRequest();
    $request->requestBody = new CreateCustomDataIdentifierRequestBody();
    $request->requestBody->clientToken = 'sapiente';
    $request->requestBody->description = 'architecto';
    $request->requestBody->ignoreWords = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->requestBody->keywords = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->requestBody->maximumMatchDistance = 466311;
    $request->requestBody->name = 'Shannon Mueller';
    $request->requestBody->regex = 'vitae';
    $request->requestBody->severityLevels = [
        new SeverityLevel(),
        new SeverityLevel(),
        new SeverityLevel(),
    ];
    $request->requestBody->tags = [
        'enim' => 'odit',
        'quo' => 'sequi',
        'tenetur' => 'ipsam',
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->createCustomDataIdentifier($request);

    if ($response->createCustomDataIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFindingsFilter

Creates and defines the criteria and other settings for a findings filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsFilterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsFilterRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingsFilterRequestBodyFindingCriteria;
use \OpenAPI\OpenAPI\Models\Shared\CriterionAdditionalProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFindingsFilterRequest();
    $request->requestBody = new CreateFindingsFilterRequestBody();
    $request->requestBody->action = CreateFindingsFilterRequestBodyActionEnum::ARCHIVE;
    $request->requestBody->clientToken = 'reiciendis';
    $request->requestBody->description = 'voluptatibus';
    $request->requestBody->findingCriteria = new CreateFindingsFilterRequestBodyFindingCriteria();
    $request->requestBody->findingCriteria->criterion = [
        'nihil' => new CriterionAdditionalProperties(),
        'praesentium' => new CriterionAdditionalProperties(),
        'voluptatibus' => new CriterionAdditionalProperties(),
        'ipsa' => new CriterionAdditionalProperties(),
    ];
    $request->requestBody->name = 'Mr. Jared Ritchie';
    $request->requestBody->position = 282807;
    $request->requestBody->tags = [
        'dicta' => 'corporis',
        'dolore' => 'iusto',
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->createFindingsFilter($request);

    if ($response->createFindingsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInvitations

Sends an Amazon Macie membership invitation to one or more accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvitationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInvitationsRequest();
    $request->requestBody = new CreateInvitationsRequestBody();
    $request->requestBody->accountIds = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->requestBody->disableEmailNotification = false;
    $request->requestBody->message = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->createInvitations($request);

    if ($response->createInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMember

Associates an account with an Amazon Macie administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberRequestBodyAccount;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMemberRequest();
    $request->requestBody = new CreateMemberRequestBody();
    $request->requestBody->account = new CreateMemberRequestBodyAccount();
    $request->requestBody->account->accountId = 'est';
    $request->requestBody->account->email = 'Brendon_OConnell28@hotmail.com';
    $request->requestBody->tags = [
        'qui' => 'aliquid',
        'cupiditate' => 'quos',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->createMember($request);

    if ($response->createMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSampleFindings

Creates sample findings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSampleFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSampleFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FindingTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSampleFindingsRequest();
    $request->requestBody = new CreateSampleFindingsRequestBody();
    $request->requestBody->findingTypes = [
        FindingTypeEnum::SENSITIVE_DATA_S3_OBJECT_PERSONAL,
        FindingTypeEnum::POLICY_IAM_USER_S3_BUCKET_REPLICATED_EXTERNALLY,
        FindingTypeEnum::POLICY_IAM_USER_S3_BUCKET_ENCRYPTION_DISABLED,
    ];
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->createSampleFindings($request);

    if ($response->createSampleFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## declineInvitations

Declines Amazon Macie membership invitations that were received from specific accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeclineInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeclineInvitationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeclineInvitationsRequest();
    $request->requestBody = new DeclineInvitationsRequestBody();
    $request->requestBody->accountIds = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->declineInvitations($request);

    if ($response->declineInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAllowList

Deletes an allow list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAllowListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAllowListRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->id = '6ae395ef-b9ba-488f-ba66-997074ba4469';
    $request->ignoreJobChecks = 'nobis';

    $response = $sdk->sdk->deleteAllowList($request);

    if ($response->deleteAllowListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomDataIdentifier

Soft deletes a custom data identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomDataIdentifierRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomDataIdentifierRequest();
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->id = '59890afa-563e-4251-afe4-c8b711e5b7fd';

    $response = $sdk->sdk->deleteCustomDataIdentifier($request);

    if ($response->deleteCustomDataIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFindingsFilter

Deletes a findings filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFindingsFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFindingsFilterRequest();
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';
    $request->id = '21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb';

    $response = $sdk->sdk->deleteFindingsFilter($request);

    if ($response->deleteFindingsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInvitations

Deletes Amazon Macie membership invitations that were received from specific accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInvitationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInvitationsRequest();
    $request->requestBody = new DeleteInvitationsRequestBody();
    $request->requestBody->accountIds = [
        'quis',
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->deleteInvitations($request);

    if ($response->deleteInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMember

Deletes the association between an Amazon Macie administrator account and an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMemberRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';
    $request->id = 'e9b90c28-909b-43fe-89a8-d9cbf4863332';

    $response = $sdk->sdk->deleteMember($request);

    if ($response->deleteMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBuckets

Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBucketsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBucketsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BucketCriteriaAdditionalProperties;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBucketsRequestBodySortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\OrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBucketsRequest();
    $request->requestBody = new DescribeBucketsRequestBody();
    $request->requestBody->criteria = [
        'hic' => new BucketCriteriaAdditionalProperties(),
    ];
    $request->requestBody->maxResults = 569574;
    $request->requestBody->nextToken = 'cum';
    $request->requestBody->sortCriteria = new DescribeBucketsRequestBodySortCriteria();
    $request->requestBody->sortCriteria->attributeName = 'voluptate';
    $request->requestBody->sortCriteria->orderBy = OrderByEnum::ASC;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->maxResults = 'iure';
    $request->nextToken = 'odio';

    $response = $sdk->sdk->describeBuckets($request);

    if ($response->describeBucketsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeClassificationJob

Retrieves the status and settings for a classification job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClassificationJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClassificationJobRequest();
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';
    $request->jobId = 'atque';

    $response = $sdk->sdk->describeClassificationJob($request);

    if ($response->describeClassificationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationConfiguration

Retrieves the Amazon Macie configuration settings for an organization in Organizations.

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
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->describeOrganizationConfiguration($request);

    if ($response->describeOrganizationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableMacie

Disables Amazon Macie and deletes all settings and resources for a Macie account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableMacieRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableMacieRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->disableMacie($request);

    if ($response->disableMacieResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableOrganizationAdminAccount

Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableOrganizationAdminAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableOrganizationAdminAccountRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->adminAccountId = 'amet';

    $response = $sdk->sdk->disableOrganizationAdminAccount($request);

    if ($response->disableOrganizationAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateFromAdministratorAccount

Disassociates a member account from its Amazon Macie administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFromAdministratorAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateFromAdministratorAccountRequest();
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->disassociateFromAdministratorAccount($request);

    if ($response->disassociateFromAdministratorAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateFromMasterAccount

(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFromMasterAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateFromMasterAccountRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->disassociateFromMasterAccount($request);

    if ($response->disassociateFromMasterAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateMember

Disassociates an Amazon Macie administrator account from a member account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateMemberRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->id = '7a73cf3b-e453-4f87-8b32-6b5a73429cdb';

    $response = $sdk->sdk->disassociateMember($request);

    if ($response->disassociateMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableMacie

Enables Amazon Macie and specifies the configuration settings for a Macie account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableMacieRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableMacieRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnableMacieRequestBodyFindingPublishingFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnableMacieRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableMacieRequest();
    $request->requestBody = new EnableMacieRequestBody();
    $request->requestBody->clientToken = 'dicta';
    $request->requestBody->findingPublishingFrequency = EnableMacieRequestBodyFindingPublishingFrequencyEnum::SIX_HOURS;
    $request->requestBody->status = EnableMacieRequestBodyStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->enableMacie($request);

    if ($response->enableMacieResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableOrganizationAdminAccount

Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableOrganizationAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableOrganizationAdminAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableOrganizationAdminAccountRequest();
    $request->requestBody = new EnableOrganizationAdminAccountRequestBody();
    $request->requestBody->adminAccountId = 'molestias';
    $request->requestBody->clientToken = 'temporibus';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->enableOrganizationAdminAccount($request);

    if ($response->enableOrganizationAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdministratorAccount

Retrieves information about the Amazon Macie administrator account for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdministratorAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdministratorAccountRequest();
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->getAdministratorAccount($request);

    if ($response->getAdministratorAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllowList

Retrieves the settings and status of an allow list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAllowListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllowListRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->id = '0f3443a1-108e-40ad-8f4b-921879fce953';

    $response = $sdk->sdk->getAllowList($request);

    if ($response->getAllowListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomatedDiscoveryConfiguration

Retrieves the configuration settings and status of automated sensitive data discovery for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomatedDiscoveryConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomatedDiscoveryConfigurationRequest();
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getAutomatedDiscoveryConfiguration($request);

    if ($response->getAutomatedDiscoveryConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBucketStatistics

Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketStatisticsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBucketStatisticsRequest();
    $request->requestBody = new GetBucketStatisticsRequestBody();
    $request->requestBody->accountId = 'distinctio';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->getBucketStatistics($request);

    if ($response->getBucketStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClassificationExportConfiguration

Retrieves the configuration settings for storing data classification results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationExportConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationExportConfigurationRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->getClassificationExportConfiguration($request);

    if ($response->getClassificationExportConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClassificationScope

Retrieves the classification scope settings for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationScopeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationScopeRequest();
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'iusto';
    $request->id = 'c70a4562-6d43-4681-bf16-d9f5fce6c556';

    $response = $sdk->sdk->getClassificationScope($request);

    if ($response->getClassificationScopeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomDataIdentifier

Retrieves the criteria and other settings for a custom data identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomDataIdentifierRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomDataIdentifierRequest();
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->id = '50fb008c-42e1-441a-ac36-6c8dd6b14429';

    $response = $sdk->sdk->getCustomDataIdentifier($request);

    if ($response->getCustomDataIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindingStatistics

 <p>Retrieves (queries) aggregated statistical data about findings.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingStatisticsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingStatisticsRequestBodyFindingCriteria;
use \OpenAPI\OpenAPI\Models\Shared\CriterionAdditionalProperties;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingStatisticsRequestBodyGroupByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingStatisticsRequestBodySortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\FindingStatisticsSortAttributeNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingStatisticsRequest();
    $request->requestBody = new GetFindingStatisticsRequestBody();
    $request->requestBody->findingCriteria = new GetFindingStatisticsRequestBodyFindingCriteria();
    $request->requestBody->findingCriteria->criterion = [
        'molestiae' => new CriterionAdditionalProperties(),
    ];
    $request->requestBody->groupBy = GetFindingStatisticsRequestBodyGroupByEnum::TYPE;
    $request->requestBody->size = 487935;
    $request->requestBody->sortCriteria = new GetFindingStatisticsRequestBodySortCriteria();
    $request->requestBody->sortCriteria->attributeName = FindingStatisticsSortAttributeNameEnum::GROUP_KEY;
    $request->requestBody->sortCriteria->orderBy = OrderByEnum::ASC;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->getFindingStatistics($request);

    if ($response->getFindingStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindings

Retrieves the details of one or more findings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsRequestBodySortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\OrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingsRequest();
    $request->requestBody = new GetFindingsRequestBody();
    $request->requestBody->findingIds = [
        'suscipit',
        'assumenda',
    ];
    $request->requestBody->sortCriteria = new GetFindingsRequestBodySortCriteria();
    $request->requestBody->sortCriteria->attributeName = 'eos';
    $request->requestBody->sortCriteria->orderBy = OrderByEnum::DESC;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->getFindings($request);

    if ($response->getFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindingsFilter

Retrieves the criteria and other settings for a findings filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingsFilterRequest();
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'ab';
    $request->id = '904e523c-7e0b-4c71-b8e4-796f2a70c688';

    $response = $sdk->sdk->getFindingsFilter($request);

    if ($response->getFindingsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindingsPublicationConfiguration

Retrieves the configuration settings for publishing findings to Security Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsPublicationConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingsPublicationConfigurationRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->getFindingsPublicationConfiguration($request);

    if ($response->getFindingsPublicationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvitationsCount

Retrieves the count of Amazon Macie membership invitations that were received by an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInvitationsCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvitationsCountRequest();
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->getInvitationsCount($request);

    if ($response->getInvitationsCountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMacieSession

Retrieves the status and configuration settings for an Amazon Macie account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMacieSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMacieSessionRequest();
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'eveniet';

    $response = $sdk->sdk->getMacieSession($request);

    if ($response->getMacieSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMasterAccount

(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMasterAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMasterAccountRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getMasterAccount($request);

    if ($response->getMasterAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMember

Retrieves information about an account that's associated with an Amazon Macie administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMemberRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->id = '5bc0ab3c-20c4-4f37-89fd-871f99dd2efd';

    $response = $sdk->sdk->getMember($request);

    if ($response->getMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceProfile

Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceProfileRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->resourceArn = 'quae';

    $response = $sdk->sdk->getResourceProfile($request);

    if ($response->getResourceProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevealConfiguration

Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRevealConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRevealConfigurationRequest();
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->getRevealConfiguration($request);

    if ($response->getRevealConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSensitiveDataOccurrences

Retrieves occurrences of sensitive data reported by a finding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSensitiveDataOccurrencesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSensitiveDataOccurrencesRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ullam';
    $request->findingId = 'nisi';

    $response = $sdk->sdk->getSensitiveDataOccurrences($request);

    if ($response->getSensitiveDataOccurrencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSensitiveDataOccurrencesAvailability

Checks whether occurrences of sensitive data can be retrieved for a finding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSensitiveDataOccurrencesAvailabilityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSensitiveDataOccurrencesAvailabilityRequest();
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'itaque';
    $request->findingId = 'dolorum';

    $response = $sdk->sdk->getSensitiveDataOccurrencesAvailability($request);

    if ($response->getSensitiveDataOccurrencesAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSensitivityInspectionTemplate

 <p>Retrieves the settings for the sensitivity inspection template for an account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSensitivityInspectionTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSensitivityInspectionTemplateRequest();
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->id = '051339d0-8086-4a18-8039-4c26071f93f5';

    $response = $sdk->sdk->getSensitivityInspectionTemplate($request);

    if ($response->getSensitivityInspectionTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsageStatistics

Retrieves (queries) quotas and aggregated usage data for one or more accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageStatisticsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\UsageStatisticsFilter;
use \OpenAPI\OpenAPI\Models\Shared\UsageStatisticsFilterComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageStatisticsFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageStatisticsRequestBodySortBy;
use \OpenAPI\OpenAPI\Models\Shared\UsageStatisticsSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageStatisticsRequestBodyTimeRangeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsageStatisticsRequest();
    $request->requestBody = new GetUsageStatisticsRequestBody();
    $request->requestBody->filterBy = [
        new UsageStatisticsFilter(),
        new UsageStatisticsFilter(),
        new UsageStatisticsFilter(),
        new UsageStatisticsFilter(),
    ];
    $request->requestBody->maxResults = 45659;
    $request->requestBody->nextToken = 'ea';
    $request->requestBody->sortBy = new GetUsageStatisticsRequestBodySortBy();
    $request->requestBody->sortBy->key = UsageStatisticsSortKeyEnum::TOTAL;
    $request->requestBody->sortBy->orderBy = OrderByEnum::ASC;
    $request->requestBody->timeRange = GetUsageStatisticsRequestBodyTimeRangeEnum::PAST30_DAYS;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';
    $request->maxResults = 'quaerat';
    $request->nextToken = 'porro';

    $response = $sdk->sdk->getUsageStatistics($request);

    if ($response->getUsageStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsageTotals

Retrieves (queries) aggregated usage data for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageTotalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsageTotalsRequest();
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->timeRange = 'velit';

    $response = $sdk->sdk->getUsageTotals($request);

    if ($response->getUsageTotalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAllowLists

Retrieves a subset of information about all the allow lists for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAllowListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAllowListsRequest();
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->maxResults = 554688;
    $request->nextToken = 'vel';

    $response = $sdk->sdk->listAllowLists($request);

    if ($response->listAllowListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClassificationJobs

Retrieves a subset of information about one or more classification jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClassificationJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListClassificationJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListClassificationJobsRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ListJobsFilterTerm;
use \OpenAPI\OpenAPI\Models\Shared\JobComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListJobsFilterKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListClassificationJobsRequestBodySortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ListJobsSortAttributeNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClassificationJobsRequest();
    $request->requestBody = new ListClassificationJobsRequestBody();
    $request->requestBody->filterCriteria = new ListClassificationJobsRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->excludes = [
        new ListJobsFilterTerm(),
        new ListJobsFilterTerm(),
    ];
    $request->requestBody->filterCriteria->includes = [
        new ListJobsFilterTerm(),
        new ListJobsFilterTerm(),
        new ListJobsFilterTerm(),
        new ListJobsFilterTerm(),
    ];
    $request->requestBody->maxResults = 706575;
    $request->requestBody->nextToken = 'cum';
    $request->requestBody->sortCriteria = new ListClassificationJobsRequestBodySortCriteria();
    $request->requestBody->sortCriteria->attributeName = ListJobsSortAttributeNameEnum::JOB_STATUS;
    $request->requestBody->sortCriteria->orderBy = OrderByEnum::ASC;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->maxResults = 'cum';
    $request->nextToken = 'consectetur';

    $response = $sdk->sdk->listClassificationJobs($request);

    if ($response->listClassificationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClassificationScopes

Retrieves a subset of information about the classification scope for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClassificationScopesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClassificationScopesRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->name = 'Rickey Ullrich';
    $request->nextToken = 'sunt';

    $response = $sdk->sdk->listClassificationScopes($request);

    if ($response->listClassificationScopesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomDataIdentifiers

Retrieves a subset of information about all the custom data identifiers for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomDataIdentifiersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomDataIdentifiersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomDataIdentifiersRequest();
    $request->requestBody = new ListCustomDataIdentifiersRequestBody();
    $request->requestBody->maxResults = 992012;
    $request->requestBody->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->maxResults = 'corporis';
    $request->nextToken = 'harum';

    $response = $sdk->sdk->listCustomDataIdentifiers($request);

    if ($response->listCustomDataIdentifiersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFindings

Retrieves a subset of information about one or more findings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsRequestBodyFindingCriteria;
use \OpenAPI\OpenAPI\Models\Shared\CriterionAdditionalProperties;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsRequestBodySortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\OrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFindingsRequest();
    $request->requestBody = new ListFindingsRequestBody();
    $request->requestBody->findingCriteria = new ListFindingsRequestBodyFindingCriteria();
    $request->requestBody->findingCriteria->criterion = [
        'ipsa' => new CriterionAdditionalProperties(),
        'voluptates' => new CriterionAdditionalProperties(),
    ];
    $request->requestBody->maxResults = 730709;
    $request->requestBody->nextToken = 'vitae';
    $request->requestBody->sortCriteria = new ListFindingsRequestBodySortCriteria();
    $request->requestBody->sortCriteria->attributeName = 'accusamus';
    $request->requestBody->sortCriteria->orderBy = OrderByEnum::DESC;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nobis';
    $request->maxResults = 'dolorum';
    $request->nextToken = 'adipisci';

    $response = $sdk->sdk->listFindings($request);

    if ($response->listFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFindingsFilters

Retrieves a subset of information about all the findings filters for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsFiltersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFindingsFiltersRequest();
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'officiis';
    $request->maxResults = 839189;
    $request->nextToken = 'ullam';

    $response = $sdk->sdk->listFindingsFilters($request);

    if ($response->listFindingsFiltersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInvitations

Retrieves information about the Amazon Macie membership invitations that were received by an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInvitationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInvitationsRequest();
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'culpa';
    $request->maxResults = 548519;
    $request->nextToken = 'pariatur';

    $response = $sdk->sdk->listInvitations($request);

    if ($response->listInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listManagedDataIdentifiers

Retrieves information about all the managed data identifiers that Amazon Macie currently provides.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListManagedDataIdentifiersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListManagedDataIdentifiersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListManagedDataIdentifiersRequest();
    $request->requestBody = new ListManagedDataIdentifiersRequestBody();
    $request->requestBody->nextToken = 'totam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->nextToken = 'explicabo';

    $response = $sdk->sdk->listManagedDataIdentifiers($request);

    if ($response->listManagedDataIdentifiersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMembers

Retrieves information about the accounts that are associated with an Amazon Macie administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMembersRequest();
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolore';
    $request->maxResults = 671907;
    $request->nextToken = 'sed';
    $request->onlyAssociated = 'in';

    $response = $sdk->sdk->listMembers($request);

    if ($response->listMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrganizationAdminAccounts

Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationAdminAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrganizationAdminAccountsRequest();
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->maxResults = 960257;
    $request->nextToken = 'debitis';

    $response = $sdk->sdk->listOrganizationAdminAccounts($request);

    if ($response->listOrganizationAdminAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceProfileArtifacts

Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceProfileArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceProfileArtifactsRequest();
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'sed';
    $request->nextToken = 'provident';
    $request->resourceArn = 'eius';

    $response = $sdk->sdk->listResourceProfileArtifacts($request);

    if ($response->listResourceProfileArtifactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceProfileDetections

Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceProfileDetectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceProfileDetectionsRequest();
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->maxResults = 273009;
    $request->nextToken = 'voluptate';
    $request->resourceArn = 'reiciendis';

    $response = $sdk->sdk->listResourceProfileDetections($request);

    if ($response->listResourceProfileDetectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSensitivityInspectionTemplates

 <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSensitivityInspectionTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSensitivityInspectionTemplatesRequest();
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->maxResults = 277773;
    $request->nextToken = 'ipsam';

    $response = $sdk->sdk->listSensitivityInspectionTemplates($request);

    if ($response->listSensitivityInspectionTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.

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
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'minima';
    $request->resourceArn = 'recusandae';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putClassificationExportConfiguration

Creates or updates the configuration settings for storing data classification results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutClassificationExportConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutClassificationExportConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutClassificationExportConfigurationRequestBodyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3Destination;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutClassificationExportConfigurationRequest();
    $request->requestBody = new PutClassificationExportConfigurationRequestBody();
    $request->requestBody->configuration = new PutClassificationExportConfigurationRequestBodyConfiguration();
    $request->requestBody->configuration->s3Destination = new S3Destination();
    $request->requestBody->configuration->s3Destination->bucketName = 'reiciendis';
    $request->requestBody->configuration->s3Destination->keyPrefix = 'nulla';
    $request->requestBody->configuration->s3Destination->kmsKeyArn = 'magni';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->putClassificationExportConfiguration($request);

    if ($response->putClassificationExportConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFindingsPublicationConfiguration

Updates the configuration settings for publishing findings to Security Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutFindingsPublicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFindingsPublicationConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFindingsPublicationConfigurationRequest();
    $request->requestBody = new PutFindingsPublicationConfigurationRequestBody();
    $request->requestBody->clientToken = 'laudantium';
    $request->requestBody->securityHubConfiguration = new PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration();
    $request->requestBody->securityHubConfiguration->publishClassificationFindings = false;
    $request->requestBody->securityHubConfiguration->publishPolicyFindings = false;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->putFindingsPublicationConfiguration($request);

    if ($response->putFindingsPublicationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchResources

Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchResourcesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchResourcesRequestBodyBucketCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SearchResourcesCriteriaBlock;
use \OpenAPI\OpenAPI\Models\Shared\SearchResourcesCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SearchResourcesSimpleCriterion;
use \OpenAPI\OpenAPI\Models\Shared\SearchResourcesComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchResourcesSimpleCriterionKeyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchResourcesTagCriterion;
use \OpenAPI\OpenAPI\Models\Shared\SearchResourcesTagCriterionPair;
use \OpenAPI\OpenAPI\Models\Operations\SearchResourcesRequestBodySortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SearchResourcesSortAttributeNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchResourcesRequest();
    $request->requestBody = new SearchResourcesRequestBody();
    $request->requestBody->bucketCriteria = new SearchResourcesRequestBodyBucketCriteria();
    $request->requestBody->bucketCriteria->excludes = new SearchResourcesCriteriaBlock();
    $request->requestBody->bucketCriteria->excludes->and = [
        new SearchResourcesCriteria(),
        new SearchResourcesCriteria(),
        new SearchResourcesCriteria(),
        new SearchResourcesCriteria(),
    ];
    $request->requestBody->bucketCriteria->includes = new SearchResourcesCriteriaBlock();
    $request->requestBody->bucketCriteria->includes->and = [
        new SearchResourcesCriteria(),
        new SearchResourcesCriteria(),
        new SearchResourcesCriteria(),
    ];
    $request->requestBody->maxResults = 892863;
    $request->requestBody->nextToken = 'neque';
    $request->requestBody->sortCriteria = new SearchResourcesRequestBodySortCriteria();
    $request->requestBody->sortCriteria->attributeName = SearchResourcesSortAttributeNameEnum::S3_CLASSIFIABLE_OBJECT_COUNT;
    $request->requestBody->sortCriteria->orderBy = OrderByEnum::ASC;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'fugit';
    $request->maxResults = 'ut';
    $request->nextToken = 'fugiat';

    $response = $sdk->sdk->searchResources($request);

    if ($response->searchResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.

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
        'culpa' => 'expedita',
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'quas';
    $request->resourceArn = 'repudiandae';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testCustomDataIdentifier

Tests a custom data identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestCustomDataIdentifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestCustomDataIdentifierRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestCustomDataIdentifierRequest();
    $request->requestBody = new TestCustomDataIdentifierRequestBody();
    $request->requestBody->ignoreWords = [
        'et',
        'blanditiis',
    ];
    $request->requestBody->keywords = [
        'sed',
        'sit',
    ];
    $request->requestBody->maximumMatchDistance = 425508;
    $request->requestBody->regex = 'nostrum';
    $request->requestBody->sampleText = 'saepe';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->testCustomDataIdentifier($request);

    if ($response->testCustomDataIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags (keys and values) from an Amazon Macie resource.

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
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'nam';
    $request->resourceArn = 'tenetur';
    $request->tagKeys = [
        'alias',
        'amet',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAllowList

Updates the settings for an allow list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAllowListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAllowListRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAllowListRequestBodyCriteria;
use \OpenAPI\OpenAPI\Models\Shared\S3WordsList;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAllowListRequest();
    $request->requestBody = new UpdateAllowListRequestBody();
    $request->requestBody->criteria = new UpdateAllowListRequestBodyCriteria();
    $request->requestBody->criteria->regex = 'deserunt';
    $request->requestBody->criteria->s3WordsList = new S3WordsList();
    $request->requestBody->criteria->s3WordsList->bucketName = 'voluptate';
    $request->requestBody->criteria->s3WordsList->objectKey = 'unde';
    $request->requestBody->description = 'reiciendis';
    $request->requestBody->name = 'Marcos Windler MD';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'veniam';
    $request->id = '0ce187f8-6bc1-473d-a89e-ee9526f8d986';

    $response = $sdk->sdk->updateAllowList($request);

    if ($response->updateAllowListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAutomatedDiscoveryConfiguration

Enables or disables automated sensitive data discovery for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAutomatedDiscoveryConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAutomatedDiscoveryConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAutomatedDiscoveryConfigurationRequest();
    $request->requestBody = new UpdateAutomatedDiscoveryConfigurationRequestBody();
    $request->requestBody->status = UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum::DISABLED;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->updateAutomatedDiscoveryConfiguration($request);

    if ($response->updateAutomatedDiscoveryConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClassificationJob

Changes the status of a classification job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassificationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassificationJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassificationJobRequestBodyJobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClassificationJobRequest();
    $request->requestBody = new UpdateClassificationJobRequestBody();
    $request->requestBody->jobStatus = UpdateClassificationJobRequestBodyJobStatusEnum::USER_PAUSED;
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'enim';
    $request->jobId = 'laboriosam';

    $response = $sdk->sdk->updateClassificationJob($request);

    if ($response->updateClassificationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClassificationScope

Updates the classification scope settings for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassificationScopeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassificationScopeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassificationScopeRequestBodyS3;
use \OpenAPI\OpenAPI\Models\Shared\S3ClassificationScopeExclusionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ClassificationScopeUpdateOperationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClassificationScopeRequest();
    $request->requestBody = new UpdateClassificationScopeRequestBody();
    $request->requestBody->s3 = new UpdateClassificationScopeRequestBodyS3();
    $request->requestBody->s3->excludes = new S3ClassificationScopeExclusionUpdate();
    $request->requestBody->s3->excludes->bucketNames = [
        'a',
    ];
    $request->requestBody->s3->excludes->operation = ClassificationScopeUpdateOperationEnum::REPLACE;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'in';
    $request->id = '3e922a57-a15b-4e3e-8608-07e2b6e3ab88';

    $response = $sdk->sdk->updateClassificationScope($request);

    if ($response->updateClassificationScopeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFindingsFilter

Updates the criteria and other settings for a findings filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsFilterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsFilterRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsFilterRequestBodyFindingCriteria;
use \OpenAPI\OpenAPI\Models\Shared\CriterionAdditionalProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFindingsFilterRequest();
    $request->requestBody = new UpdateFindingsFilterRequestBody();
    $request->requestBody->action = UpdateFindingsFilterRequestBodyActionEnum::ARCHIVE;
    $request->requestBody->clientToken = 'ad';
    $request->requestBody->description = 'repellat';
    $request->requestBody->findingCriteria = new UpdateFindingsFilterRequestBodyFindingCriteria();
    $request->requestBody->findingCriteria->criterion = [
        'corporis' => new CriterionAdditionalProperties(),
    ];
    $request->requestBody->name = 'Christian O'Conner DVM';
    $request->requestBody->position = 970222;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'quae';
    $request->id = 'e94764a3-e865-4e79-96f9-251a5a9da660';

    $response = $sdk->sdk->updateFindingsFilter($request);

    if ($response->updateFindingsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMacieSession

Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMacieSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMacieSessionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMacieSessionRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMacieSessionRequest();
    $request->requestBody = new UpdateMacieSessionRequestBody();
    $request->requestBody->findingPublishingFrequency = UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum::SIX_HOURS;
    $request->requestBody->status = UpdateMacieSessionRequestBodyStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->updateMacieSession($request);

    if ($response->updateMacieSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMemberSession

Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberSessionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberSessionRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMemberSessionRequest();
    $request->requestBody = new UpdateMemberSessionRequestBody();
    $request->requestBody->status = UpdateMemberSessionRequestBodyStatusEnum::PAUSED;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'rerum';
    $request->id = '4512c103-2648-4dc2-b615-199ebfd0e9fe';

    $response = $sdk->sdk->updateMemberSession($request);

    if ($response->updateMemberSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfiguration

Updates the Amazon Macie configuration settings for an organization in Organizations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigurationRequest();
    $request->requestBody = new UpdateOrganizationConfigurationRequestBody();
    $request->requestBody->autoEnable = false;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->updateOrganizationConfiguration($request);

    if ($response->updateOrganizationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResourceProfile

Updates the sensitivity score for an S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceProfileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceProfileRequest();
    $request->requestBody = new UpdateResourceProfileRequestBody();
    $request->requestBody->sensitivityScoreOverride = 189062;
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->resourceArn = 'natus';

    $response = $sdk->sdk->updateResourceProfile($request);

    if ($response->updateResourceProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResourceProfileDetections

Updates the sensitivity scoring settings for an S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceProfileDetectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceProfileDetectionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SuppressDataIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DataIdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceProfileDetectionsRequest();
    $request->requestBody = new UpdateResourceProfileDetectionsRequestBody();
    $request->requestBody->suppressDataIdentifiers = [
        new SuppressDataIdentifier(),
        new SuppressDataIdentifier(),
        new SuppressDataIdentifier(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->resourceArn = 'ipsa';

    $response = $sdk->sdk->updateResourceProfileDetections($request);

    if ($response->updateResourceProfileDetectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRevealConfiguration

Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRevealConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRevealConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRevealConfigurationRequestBodyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RevealStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRevealConfigurationRequest();
    $request->requestBody = new UpdateRevealConfigurationRequestBody();
    $request->requestBody->configuration = new UpdateRevealConfigurationRequestBodyConfiguration();
    $request->requestBody->configuration->kmsKeyId = 'tempora';
    $request->requestBody->configuration->status = RevealStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->updateRevealConfiguration($request);

    if ($response->updateRevealConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSensitivityInspectionTemplate

 <p>Updates the settings for the sensitivity inspection template for an account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSensitivityInspectionTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSensitivityInspectionTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSensitivityInspectionTemplateRequestBodyExcludes;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSensitivityInspectionTemplateRequestBodyIncludes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSensitivityInspectionTemplateRequest();
    $request->requestBody = new UpdateSensitivityInspectionTemplateRequestBody();
    $request->requestBody->description = 'vel';
    $request->requestBody->excludes = new UpdateSensitivityInspectionTemplateRequestBodyExcludes();
    $request->requestBody->excludes->managedDataIdentifierIds = [
        'fugiat',
    ];
    $request->requestBody->includes = new UpdateSensitivityInspectionTemplateRequestBodyIncludes();
    $request->requestBody->includes->allowListIds = [
        'dicta',
    ];
    $request->requestBody->includes->customDataIdentifierIds = [
        'tempora',
        'esse',
    ];
    $request->requestBody->includes->managedDataIdentifierIds = [
        'consectetur',
        'aliquid',
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->id = 'a660659a-1ade-4aab-9851-d6c645b08b61';

    $response = $sdk->sdk->updateSensitivityInspectionTemplate($request);

    if ($response->updateSensitivityInspectionTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
