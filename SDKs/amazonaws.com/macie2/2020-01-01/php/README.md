# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->requestBody->administratorAccountId = 'corrupti';
    $request->requestBody->invitationId = 'provident';
    $request->requestBody->masterAccount = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->acceptInvitation($request);

    if ($response->acceptInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [acceptInvitation](docs/sdk/README.md#acceptinvitation) - Accepts an Amazon Macie membership invitation that was received from a specific account.
* [batchGetCustomDataIdentifiers](docs/sdk/README.md#batchgetcustomdataidentifiers) - Retrieves information about one or more custom data identifiers.
* [createAllowList](docs/sdk/README.md#createallowlist) - Creates and defines the settings for an allow list.
* [createClassificationJob](docs/sdk/README.md#createclassificationjob) - Creates and defines the settings for a classification job.
* [createCustomDataIdentifier](docs/sdk/README.md#createcustomdataidentifier) - Creates and defines the criteria and other settings for a custom data identifier.
* [createFindingsFilter](docs/sdk/README.md#createfindingsfilter) - Creates and defines the criteria and other settings for a findings filter.
* [createInvitations](docs/sdk/README.md#createinvitations) - Sends an Amazon Macie membership invitation to one or more accounts.
* [createMember](docs/sdk/README.md#createmember) - Associates an account with an Amazon Macie administrator account.
* [createSampleFindings](docs/sdk/README.md#createsamplefindings) - Creates sample findings.
* [declineInvitations](docs/sdk/README.md#declineinvitations) - Declines Amazon Macie membership invitations that were received from specific accounts.
* [deleteAllowList](docs/sdk/README.md#deleteallowlist) - Deletes an allow list.
* [deleteCustomDataIdentifier](docs/sdk/README.md#deletecustomdataidentifier) - Soft deletes a custom data identifier.
* [deleteFindingsFilter](docs/sdk/README.md#deletefindingsfilter) - Deletes a findings filter.
* [deleteInvitations](docs/sdk/README.md#deleteinvitations) - Deletes Amazon Macie membership invitations that were received from specific accounts.
* [deleteMember](docs/sdk/README.md#deletemember) - Deletes the association between an Amazon Macie administrator account and an account.
* [describeBuckets](docs/sdk/README.md#describebuckets) - Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
* [describeClassificationJob](docs/sdk/README.md#describeclassificationjob) - Retrieves the status and settings for a classification job.
* [describeOrganizationConfiguration](docs/sdk/README.md#describeorganizationconfiguration) - Retrieves the Amazon Macie configuration settings for an organization in Organizations.
* [disableMacie](docs/sdk/README.md#disablemacie) - Disables Amazon Macie and deletes all settings and resources for a Macie account.
* [disableOrganizationAdminAccount](docs/sdk/README.md#disableorganizationadminaccount) - Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [disassociateFromAdministratorAccount](docs/sdk/README.md#disassociatefromadministratoraccount) - Disassociates a member account from its Amazon Macie administrator account.
* [disassociateFromMasterAccount](docs/sdk/README.md#disassociatefrommasteraccount) - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* [disassociateMember](docs/sdk/README.md#disassociatemember) - Disassociates an Amazon Macie administrator account from a member account.
* [enableMacie](docs/sdk/README.md#enablemacie) - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* [enableOrganizationAdminAccount](docs/sdk/README.md#enableorganizationadminaccount) - Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [getAdministratorAccount](docs/sdk/README.md#getadministratoraccount) - Retrieves information about the Amazon Macie administrator account for an account.
* [getAllowList](docs/sdk/README.md#getallowlist) - Retrieves the settings and status of an allow list.
* [getAutomatedDiscoveryConfiguration](docs/sdk/README.md#getautomateddiscoveryconfiguration) - Retrieves the configuration settings and status of automated sensitive data discovery for an account.
* [getBucketStatistics](docs/sdk/README.md#getbucketstatistics) - Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
* [getClassificationExportConfiguration](docs/sdk/README.md#getclassificationexportconfiguration) - Retrieves the configuration settings for storing data classification results.
* [getClassificationScope](docs/sdk/README.md#getclassificationscope) - Retrieves the classification scope settings for an account.
* [getCustomDataIdentifier](docs/sdk/README.md#getcustomdataidentifier) - Retrieves the criteria and other settings for a custom data identifier.
* [getFindingStatistics](docs/sdk/README.md#getfindingstatistics) -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* [getFindings](docs/sdk/README.md#getfindings) - Retrieves the details of one or more findings.
* [getFindingsFilter](docs/sdk/README.md#getfindingsfilter) - Retrieves the criteria and other settings for a findings filter.
* [getFindingsPublicationConfiguration](docs/sdk/README.md#getfindingspublicationconfiguration) - Retrieves the configuration settings for publishing findings to Security Hub.
* [getInvitationsCount](docs/sdk/README.md#getinvitationscount) - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* [getMacieSession](docs/sdk/README.md#getmaciesession) - Retrieves the status and configuration settings for an Amazon Macie account.
* [getMasterAccount](docs/sdk/README.md#getmasteraccount) - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* [getMember](docs/sdk/README.md#getmember) - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* [getResourceProfile](docs/sdk/README.md#getresourceprofile) - Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
* [getRevealConfiguration](docs/sdk/README.md#getrevealconfiguration) - Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [getSensitiveDataOccurrences](docs/sdk/README.md#getsensitivedataoccurrences) - Retrieves occurrences of sensitive data reported by a finding.
* [getSensitiveDataOccurrencesAvailability](docs/sdk/README.md#getsensitivedataoccurrencesavailability) - Checks whether occurrences of sensitive data can be retrieved for a finding.
* [getSensitivityInspectionTemplate](docs/sdk/README.md#getsensitivityinspectiontemplate) -  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
* [getUsageStatistics](docs/sdk/README.md#getusagestatistics) - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* [getUsageTotals](docs/sdk/README.md#getusagetotals) - Retrieves (queries) aggregated usage data for an account.
* [listAllowLists](docs/sdk/README.md#listallowlists) - Retrieves a subset of information about all the allow lists for an account.
* [listClassificationJobs](docs/sdk/README.md#listclassificationjobs) - Retrieves a subset of information about one or more classification jobs.
* [listClassificationScopes](docs/sdk/README.md#listclassificationscopes) - Retrieves a subset of information about the classification scope for an account.
* [listCustomDataIdentifiers](docs/sdk/README.md#listcustomdataidentifiers) - Retrieves a subset of information about all the custom data identifiers for an account.
* [listFindings](docs/sdk/README.md#listfindings) - Retrieves a subset of information about one or more findings.
* [listFindingsFilters](docs/sdk/README.md#listfindingsfilters) - Retrieves a subset of information about all the findings filters for an account.
* [listInvitations](docs/sdk/README.md#listinvitations) - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* [listManagedDataIdentifiers](docs/sdk/README.md#listmanageddataidentifiers) - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* [listMembers](docs/sdk/README.md#listmembers) - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* [listOrganizationAdminAccounts](docs/sdk/README.md#listorganizationadminaccounts) - Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
* [listResourceProfileArtifacts](docs/sdk/README.md#listresourceprofileartifacts) - Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
* [listResourceProfileDetections](docs/sdk/README.md#listresourceprofiledetections) - Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
* [listSensitivityInspectionTemplates](docs/sdk/README.md#listsensitivityinspectiontemplates) -  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
* [putClassificationExportConfiguration](docs/sdk/README.md#putclassificationexportconfiguration) - Creates or updates the configuration settings for storing data classification results.
* [putFindingsPublicationConfiguration](docs/sdk/README.md#putfindingspublicationconfiguration) - Updates the configuration settings for publishing findings to Security Hub.
* [searchResources](docs/sdk/README.md#searchresources) - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
* [testCustomDataIdentifier](docs/sdk/README.md#testcustomdataidentifier) - Tests a custom data identifier.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags (keys and values) from an Amazon Macie resource.
* [updateAllowList](docs/sdk/README.md#updateallowlist) - Updates the settings for an allow list.
* [updateAutomatedDiscoveryConfiguration](docs/sdk/README.md#updateautomateddiscoveryconfiguration) - Enables or disables automated sensitive data discovery for an account.
* [updateClassificationJob](docs/sdk/README.md#updateclassificationjob) - Changes the status of a classification job.
* [updateClassificationScope](docs/sdk/README.md#updateclassificationscope) - Updates the classification scope settings for an account.
* [updateFindingsFilter](docs/sdk/README.md#updatefindingsfilter) - Updates the criteria and other settings for a findings filter.
* [updateMacieSession](docs/sdk/README.md#updatemaciesession) - Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
* [updateMemberSession](docs/sdk/README.md#updatemembersession) - Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
* [updateOrganizationConfiguration](docs/sdk/README.md#updateorganizationconfiguration) - Updates the Amazon Macie configuration settings for an organization in Organizations.
* [updateResourceProfile](docs/sdk/README.md#updateresourceprofile) - Updates the sensitivity score for an S3 bucket.
* [updateResourceProfileDetections](docs/sdk/README.md#updateresourceprofiledetections) - Updates the sensitivity scoring settings for an S3 bucket.
* [updateRevealConfiguration](docs/sdk/README.md#updaterevealconfiguration) - Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [updateSensitivityInspectionTemplate](docs/sdk/README.md#updatesensitivityinspectiontemplate) -  <p>Updates the settings for the sensitivity inspection template for an account.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
