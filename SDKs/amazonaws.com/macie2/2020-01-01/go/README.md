# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/macie2/2020-01-01/go
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
    res, err := s.AcceptInvitation(ctx, operations.AcceptInvitationRequest{
        RequestBody: operations.AcceptInvitationRequestBody{
            AdministratorAccountID: sdk.String("corrupti"),
            InvitationID: "provident",
            MasterAccount: sdk.String("distinctio"),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptInvitationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AcceptInvitation](docs/sdk/README.md#acceptinvitation) - Accepts an Amazon Macie membership invitation that was received from a specific account.
* [BatchGetCustomDataIdentifiers](docs/sdk/README.md#batchgetcustomdataidentifiers) - Retrieves information about one or more custom data identifiers.
* [CreateAllowList](docs/sdk/README.md#createallowlist) - Creates and defines the settings for an allow list.
* [CreateClassificationJob](docs/sdk/README.md#createclassificationjob) - Creates and defines the settings for a classification job.
* [CreateCustomDataIdentifier](docs/sdk/README.md#createcustomdataidentifier) - Creates and defines the criteria and other settings for a custom data identifier.
* [CreateFindingsFilter](docs/sdk/README.md#createfindingsfilter) - Creates and defines the criteria and other settings for a findings filter.
* [CreateInvitations](docs/sdk/README.md#createinvitations) - Sends an Amazon Macie membership invitation to one or more accounts.
* [CreateMember](docs/sdk/README.md#createmember) - Associates an account with an Amazon Macie administrator account.
* [CreateSampleFindings](docs/sdk/README.md#createsamplefindings) - Creates sample findings.
* [DeclineInvitations](docs/sdk/README.md#declineinvitations) - Declines Amazon Macie membership invitations that were received from specific accounts.
* [DeleteAllowList](docs/sdk/README.md#deleteallowlist) - Deletes an allow list.
* [DeleteCustomDataIdentifier](docs/sdk/README.md#deletecustomdataidentifier) - Soft deletes a custom data identifier.
* [DeleteFindingsFilter](docs/sdk/README.md#deletefindingsfilter) - Deletes a findings filter.
* [DeleteInvitations](docs/sdk/README.md#deleteinvitations) - Deletes Amazon Macie membership invitations that were received from specific accounts.
* [DeleteMember](docs/sdk/README.md#deletemember) - Deletes the association between an Amazon Macie administrator account and an account.
* [DescribeBuckets](docs/sdk/README.md#describebuckets) - Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
* [DescribeClassificationJob](docs/sdk/README.md#describeclassificationjob) - Retrieves the status and settings for a classification job.
* [DescribeOrganizationConfiguration](docs/sdk/README.md#describeorganizationconfiguration) - Retrieves the Amazon Macie configuration settings for an organization in Organizations.
* [DisableMacie](docs/sdk/README.md#disablemacie) - Disables Amazon Macie and deletes all settings and resources for a Macie account.
* [DisableOrganizationAdminAccount](docs/sdk/README.md#disableorganizationadminaccount) - Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [DisassociateFromAdministratorAccount](docs/sdk/README.md#disassociatefromadministratoraccount) - Disassociates a member account from its Amazon Macie administrator account.
* [DisassociateFromMasterAccount](docs/sdk/README.md#disassociatefrommasteraccount) - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* [DisassociateMember](docs/sdk/README.md#disassociatemember) - Disassociates an Amazon Macie administrator account from a member account.
* [EnableMacie](docs/sdk/README.md#enablemacie) - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* [EnableOrganizationAdminAccount](docs/sdk/README.md#enableorganizationadminaccount) - Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [GetAdministratorAccount](docs/sdk/README.md#getadministratoraccount) - Retrieves information about the Amazon Macie administrator account for an account.
* [GetAllowList](docs/sdk/README.md#getallowlist) - Retrieves the settings and status of an allow list.
* [GetAutomatedDiscoveryConfiguration](docs/sdk/README.md#getautomateddiscoveryconfiguration) - Retrieves the configuration settings and status of automated sensitive data discovery for an account.
* [GetBucketStatistics](docs/sdk/README.md#getbucketstatistics) - Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
* [GetClassificationExportConfiguration](docs/sdk/README.md#getclassificationexportconfiguration) - Retrieves the configuration settings for storing data classification results.
* [GetClassificationScope](docs/sdk/README.md#getclassificationscope) - Retrieves the classification scope settings for an account.
* [GetCustomDataIdentifier](docs/sdk/README.md#getcustomdataidentifier) - Retrieves the criteria and other settings for a custom data identifier.
* [GetFindingStatistics](docs/sdk/README.md#getfindingstatistics) -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* [GetFindings](docs/sdk/README.md#getfindings) - Retrieves the details of one or more findings.
* [GetFindingsFilter](docs/sdk/README.md#getfindingsfilter) - Retrieves the criteria and other settings for a findings filter.
* [GetFindingsPublicationConfiguration](docs/sdk/README.md#getfindingspublicationconfiguration) - Retrieves the configuration settings for publishing findings to Security Hub.
* [GetInvitationsCount](docs/sdk/README.md#getinvitationscount) - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* [GetMacieSession](docs/sdk/README.md#getmaciesession) - Retrieves the status and configuration settings for an Amazon Macie account.
* [GetMasterAccount](docs/sdk/README.md#getmasteraccount) - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* [GetMember](docs/sdk/README.md#getmember) - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* [GetResourceProfile](docs/sdk/README.md#getresourceprofile) - Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
* [GetRevealConfiguration](docs/sdk/README.md#getrevealconfiguration) - Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [GetSensitiveDataOccurrences](docs/sdk/README.md#getsensitivedataoccurrences) - Retrieves occurrences of sensitive data reported by a finding.
* [GetSensitiveDataOccurrencesAvailability](docs/sdk/README.md#getsensitivedataoccurrencesavailability) - Checks whether occurrences of sensitive data can be retrieved for a finding.
* [GetSensitivityInspectionTemplate](docs/sdk/README.md#getsensitivityinspectiontemplate) -  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
* [GetUsageStatistics](docs/sdk/README.md#getusagestatistics) - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* [GetUsageTotals](docs/sdk/README.md#getusagetotals) - Retrieves (queries) aggregated usage data for an account.
* [ListAllowLists](docs/sdk/README.md#listallowlists) - Retrieves a subset of information about all the allow lists for an account.
* [ListClassificationJobs](docs/sdk/README.md#listclassificationjobs) - Retrieves a subset of information about one or more classification jobs.
* [ListClassificationScopes](docs/sdk/README.md#listclassificationscopes) - Retrieves a subset of information about the classification scope for an account.
* [ListCustomDataIdentifiers](docs/sdk/README.md#listcustomdataidentifiers) - Retrieves a subset of information about all the custom data identifiers for an account.
* [ListFindings](docs/sdk/README.md#listfindings) - Retrieves a subset of information about one or more findings.
* [ListFindingsFilters](docs/sdk/README.md#listfindingsfilters) - Retrieves a subset of information about all the findings filters for an account.
* [ListInvitations](docs/sdk/README.md#listinvitations) - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* [ListManagedDataIdentifiers](docs/sdk/README.md#listmanageddataidentifiers) - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* [ListMembers](docs/sdk/README.md#listmembers) - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* [ListOrganizationAdminAccounts](docs/sdk/README.md#listorganizationadminaccounts) - Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
* [ListResourceProfileArtifacts](docs/sdk/README.md#listresourceprofileartifacts) - Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
* [ListResourceProfileDetections](docs/sdk/README.md#listresourceprofiledetections) - Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
* [ListSensitivityInspectionTemplates](docs/sdk/README.md#listsensitivityinspectiontemplates) -  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
* [PutClassificationExportConfiguration](docs/sdk/README.md#putclassificationexportconfiguration) - Creates or updates the configuration settings for storing data classification results.
* [PutFindingsPublicationConfiguration](docs/sdk/README.md#putfindingspublicationconfiguration) - Updates the configuration settings for publishing findings to Security Hub.
* [SearchResources](docs/sdk/README.md#searchresources) - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* [TagResource](docs/sdk/README.md#tagresource) - Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
* [TestCustomDataIdentifier](docs/sdk/README.md#testcustomdataidentifier) - Tests a custom data identifier.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes one or more tags (keys and values) from an Amazon Macie resource.
* [UpdateAllowList](docs/sdk/README.md#updateallowlist) - Updates the settings for an allow list.
* [UpdateAutomatedDiscoveryConfiguration](docs/sdk/README.md#updateautomateddiscoveryconfiguration) - Enables or disables automated sensitive data discovery for an account.
* [UpdateClassificationJob](docs/sdk/README.md#updateclassificationjob) - Changes the status of a classification job.
* [UpdateClassificationScope](docs/sdk/README.md#updateclassificationscope) - Updates the classification scope settings for an account.
* [UpdateFindingsFilter](docs/sdk/README.md#updatefindingsfilter) - Updates the criteria and other settings for a findings filter.
* [UpdateMacieSession](docs/sdk/README.md#updatemaciesession) - Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
* [UpdateMemberSession](docs/sdk/README.md#updatemembersession) - Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
* [UpdateOrganizationConfiguration](docs/sdk/README.md#updateorganizationconfiguration) - Updates the Amazon Macie configuration settings for an organization in Organizations.
* [UpdateResourceProfile](docs/sdk/README.md#updateresourceprofile) - Updates the sensitivity score for an S3 bucket.
* [UpdateResourceProfileDetections](docs/sdk/README.md#updateresourceprofiledetections) - Updates the sensitivity scoring settings for an S3 bucket.
* [UpdateRevealConfiguration](docs/sdk/README.md#updaterevealconfiguration) - Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [UpdateSensitivityInspectionTemplate](docs/sdk/README.md#updatesensitivityinspectiontemplate) -  <p>Updates the settings for the sensitivity inspection template for an account.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
