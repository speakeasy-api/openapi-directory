# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/inspector2/2020-06-08/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssociateMember(ctx, operations.AssociateMemberRequest{
        RequestBody: operations.AssociateMemberRequestBody{
            AccountID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateMemberResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateMember](docs/sdk/README.md#associatemember) - Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
* [BatchGetAccountStatus](docs/sdk/README.md#batchgetaccountstatus) - Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
* [BatchGetFreeTrialInfo](docs/sdk/README.md#batchgetfreetrialinfo) - Gets free trial status for multiple Amazon Web Services accounts.
* [CancelFindingsReport](docs/sdk/README.md#cancelfindingsreport) - Cancels the given findings report.
* [CreateFilter](docs/sdk/README.md#createfilter) - Creates a filter resource using specified filter criteria.
* [CreateFindingsReport](docs/sdk/README.md#createfindingsreport) - Creates a finding report.
* [DeleteFilter](docs/sdk/README.md#deletefilter) - Deletes a filter resource.
* [DescribeOrganizationConfiguration](docs/sdk/README.md#describeorganizationconfiguration) - Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
* [Disable](docs/sdk/README.md#disable) - Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
* [DisableDelegatedAdminAccount](docs/sdk/README.md#disabledelegatedadminaccount) - Disables the Amazon Inspector delegated administrator for your organization.
* [DisassociateMember](docs/sdk/README.md#disassociatemember) - Disassociates a member account from an Amazon Inspector delegated administrator.
* [Enable](docs/sdk/README.md#enable) - Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
* [EnableDelegatedAdminAccount](docs/sdk/README.md#enabledelegatedadminaccount) - Enables the Amazon Inspector delegated administrator for your Organizations organization.
* [GetConfiguration](docs/sdk/README.md#getconfiguration) - Retrieves setting configurations for Inspector scans.
* [GetDelegatedAdminAccount](docs/sdk/README.md#getdelegatedadminaccount) - Retrieves information about the Amazon Inspector delegated administrator for your organization.
* [GetFindingsReportStatus](docs/sdk/README.md#getfindingsreportstatus) - Gets the status of a findings report.
* [GetMember](docs/sdk/README.md#getmember) - Gets member information for your organization.
* [ListAccountPermissions](docs/sdk/README.md#listaccountpermissions) - Lists the permissions an account has to configure Amazon Inspector.
* [ListCoverage](docs/sdk/README.md#listcoverage) - Lists coverage details for you environment.
* [ListCoverageStatistics](docs/sdk/README.md#listcoveragestatistics) - Lists Amazon Inspector coverage statistics for your environment.
* [ListDelegatedAdminAccounts](docs/sdk/README.md#listdelegatedadminaccounts) - Lists information about the Amazon Inspector delegated administrator of your organization.
* [ListFilters](docs/sdk/README.md#listfilters) - Lists the filters associated with your account.
* [ListFindingAggregations](docs/sdk/README.md#listfindingaggregations) - Lists aggregated finding data for your environment based on specific criteria.
* [ListFindings](docs/sdk/README.md#listfindings) - Lists findings for your environment.
* [ListMembers](docs/sdk/README.md#listmembers) - List members associated with the Amazon Inspector delegated administrator for your organization.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags attached to a given resource.
* [ListUsageTotals](docs/sdk/README.md#listusagetotals) - Lists the Amazon Inspector usage totals over the last 30 days.
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from a resource.
* [UpdateConfiguration](docs/sdk/README.md#updateconfiguration) - Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
* [UpdateFilter](docs/sdk/README.md#updatefilter) - Specifies the action that is to be applied to the findings that match the filter.
* [UpdateOrganizationConfiguration](docs/sdk/README.md#updateorganizationconfiguration) - Updates the configurations for your Amazon Inspector organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
