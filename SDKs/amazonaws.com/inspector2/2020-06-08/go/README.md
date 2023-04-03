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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateMemberRequest{
        RequestBody: operations.AssociateMemberRequestBody{
            AccountID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
    }

    ctx := context.Background()
    res, err := s.AssociateMember(ctx, req)
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

### SDK SDK

* `AssociateMember` - Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
* `BatchGetAccountStatus` - Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
* `BatchGetFreeTrialInfo` - Gets free trial status for multiple Amazon Web Services accounts.
* `CancelFindingsReport` - Cancels the given findings report.
* `CreateFilter` - Creates a filter resource using specified filter criteria.
* `CreateFindingsReport` - Creates a finding report.
* `DeleteFilter` - Deletes a filter resource.
* `DescribeOrganizationConfiguration` - Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
* `Disable` - Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
* `DisableDelegatedAdminAccount` - Disables the Amazon Inspector delegated administrator for your organization.
* `DisassociateMember` - Disassociates a member account from an Amazon Inspector delegated administrator.
* `Enable` - Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
* `EnableDelegatedAdminAccount` - Enables the Amazon Inspector delegated administrator for your Organizations organization.
* `GetConfiguration` - Retrieves setting configurations for Inspector scans.
* `GetDelegatedAdminAccount` - Retrieves information about the Amazon Inspector delegated administrator for your organization.
* `GetFindingsReportStatus` - Gets the status of a findings report.
* `GetMember` - Gets member information for your organization.
* `ListAccountPermissions` - Lists the permissions an account has to configure Amazon Inspector.
* `ListCoverage` - Lists coverage details for you environment.
* `ListCoverageStatistics` - Lists Amazon Inspector coverage statistics for your environment.
* `ListDelegatedAdminAccounts` - Lists information about the Amazon Inspector delegated administrator of your organization.
* `ListFilters` - Lists the filters associated with your account.
* `ListFindingAggregations` - Lists aggregated finding data for your environment based on specific criteria.
* `ListFindings` - Lists findings for your environment.
* `ListMembers` - List members associated with the Amazon Inspector delegated administrator for your organization.
* `ListTagsForResource` - Lists all tags attached to a given resource.
* `ListUsageTotals` - Lists the Amazon Inspector usage totals over the last 30 days.
* `TagResource` - Adds tags to a resource.
* `UntagResource` - Removes tags from a resource.
* `UpdateConfiguration` - Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
* `UpdateFilter` - Specifies the action that is to be applied to the findings that match the filter.
* `UpdateOrganizationConfiguration` - Updates the configurations for your Amazon Inspector organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
