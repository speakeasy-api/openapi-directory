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
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateMemberRequest();
    $request->requestBody = new AssociateMemberRequestBody();
    $request->requestBody->accountId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->associateMember($request);

    if ($response->associateMemberResponse !== null) {
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

* [associateMember](docs/sdk/README.md#associatemember) - Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
* [batchGetAccountStatus](docs/sdk/README.md#batchgetaccountstatus) - Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
* [batchGetFreeTrialInfo](docs/sdk/README.md#batchgetfreetrialinfo) - Gets free trial status for multiple Amazon Web Services accounts.
* [cancelFindingsReport](docs/sdk/README.md#cancelfindingsreport) - Cancels the given findings report.
* [createFilter](docs/sdk/README.md#createfilter) - Creates a filter resource using specified filter criteria.
* [createFindingsReport](docs/sdk/README.md#createfindingsreport) - Creates a finding report.
* [deleteFilter](docs/sdk/README.md#deletefilter) - Deletes a filter resource.
* [describeOrganizationConfiguration](docs/sdk/README.md#describeorganizationconfiguration) - Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
* [disable](docs/sdk/README.md#disable) - Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
* [disableDelegatedAdminAccount](docs/sdk/README.md#disabledelegatedadminaccount) - Disables the Amazon Inspector delegated administrator for your organization.
* [disassociateMember](docs/sdk/README.md#disassociatemember) - Disassociates a member account from an Amazon Inspector delegated administrator.
* [enable](docs/sdk/README.md#enable) - Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
* [enableDelegatedAdminAccount](docs/sdk/README.md#enabledelegatedadminaccount) - Enables the Amazon Inspector delegated administrator for your Organizations organization.
* [getConfiguration](docs/sdk/README.md#getconfiguration) - Retrieves setting configurations for Inspector scans.
* [getDelegatedAdminAccount](docs/sdk/README.md#getdelegatedadminaccount) - Retrieves information about the Amazon Inspector delegated administrator for your organization.
* [getFindingsReportStatus](docs/sdk/README.md#getfindingsreportstatus) - Gets the status of a findings report.
* [getMember](docs/sdk/README.md#getmember) - Gets member information for your organization.
* [listAccountPermissions](docs/sdk/README.md#listaccountpermissions) - Lists the permissions an account has to configure Amazon Inspector.
* [listCoverage](docs/sdk/README.md#listcoverage) - Lists coverage details for you environment.
* [listCoverageStatistics](docs/sdk/README.md#listcoveragestatistics) - Lists Amazon Inspector coverage statistics for your environment.
* [listDelegatedAdminAccounts](docs/sdk/README.md#listdelegatedadminaccounts) - Lists information about the Amazon Inspector delegated administrator of your organization.
* [listFilters](docs/sdk/README.md#listfilters) - Lists the filters associated with your account.
* [listFindingAggregations](docs/sdk/README.md#listfindingaggregations) - Lists aggregated finding data for your environment based on specific criteria.
* [listFindings](docs/sdk/README.md#listfindings) - Lists findings for your environment.
* [listMembers](docs/sdk/README.md#listmembers) - List members associated with the Amazon Inspector delegated administrator for your organization.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags attached to a given resource.
* [listUsageTotals](docs/sdk/README.md#listusagetotals) - Lists the Amazon Inspector usage totals over the last 30 days.
* [tagResource](docs/sdk/README.md#tagresource) - Adds tags to a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from a resource.
* [updateConfiguration](docs/sdk/README.md#updateconfiguration) - Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
* [updateFilter](docs/sdk/README.md#updatefilter) - Specifies the action that is to be applied to the findings that match the filter.
* [updateOrganizationConfiguration](docs/sdk/README.md#updateorganizationconfiguration) - Updates the configurations for your Amazon Inspector organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
