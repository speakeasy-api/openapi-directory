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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AcceptInvitationRequest{
        Headers: operations.AcceptInvitationHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AcceptInvitationRequestBody{
            AdministratorAccountID: "illum",
            InvitationID: "vel",
            MasterAccount: "error",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptInvitation(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `AcceptInvitation` - Accepts an Amazon Macie membership invitation that was received from a specific account.
* `BatchGetCustomDataIdentifiers` - Retrieves information about one or more custom data identifiers.
* `CreateAllowList` - Creates and defines the settings for an allow list.
* `CreateClassificationJob` - Creates and defines the settings for a classification job.
* `CreateCustomDataIdentifier` - Creates and defines the criteria and other settings for a custom data identifier.
* `CreateFindingsFilter` - Creates and defines the criteria and other settings for a findings filter.
* `CreateInvitations` - Sends an Amazon Macie membership invitation to one or more accounts.
* `CreateMember` - Associates an account with an Amazon Macie administrator account.
* `CreateSampleFindings` - Creates sample findings.
* `DeclineInvitations` - Declines Amazon Macie membership invitations that were received from specific accounts.
* `DeleteAllowList` - Deletes an allow list.
* `DeleteCustomDataIdentifier` - Soft deletes a custom data identifier.
* `DeleteFindingsFilter` - Deletes a findings filter.
* `DeleteInvitations` - Deletes Amazon Macie membership invitations that were received from specific accounts.
* `DeleteMember` - Deletes the association between an Amazon Macie administrator account and an account.
* `DescribeBuckets` - Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
* `DescribeClassificationJob` - Retrieves the status and settings for a classification job.
* `DescribeOrganizationConfiguration` - Retrieves the Amazon Macie configuration settings for an organization in Organizations.
* `DisableMacie` - Disables Amazon Macie and deletes all settings and resources for a Macie account.
* `DisableOrganizationAdminAccount` - Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* `DisassociateFromAdministratorAccount` - Disassociates a member account from its Amazon Macie administrator account.
* `DisassociateFromMasterAccount` - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* `DisassociateMember` - Disassociates an Amazon Macie administrator account from a member account.
* `EnableMacie` - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* `EnableOrganizationAdminAccount` - Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* `GetAdministratorAccount` - Retrieves information about the Amazon Macie administrator account for an account.
* `GetAllowList` - Retrieves the settings and status of an allow list.
* `GetAutomatedDiscoveryConfiguration` - Retrieves the configuration settings and status of automated sensitive data discovery for an account.
* `GetBucketStatistics` - Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
* `GetClassificationExportConfiguration` - Retrieves the configuration settings for storing data classification results.
* `GetClassificationScope` - Retrieves the classification scope settings for an account.
* `GetCustomDataIdentifier` - Retrieves the criteria and other settings for a custom data identifier.
* `GetFindingStatistics` -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* `GetFindings` - Retrieves the details of one or more findings.
* `GetFindingsFilter` - Retrieves the criteria and other settings for a findings filter.
* `GetFindingsPublicationConfiguration` - Retrieves the configuration settings for publishing findings to Security Hub.
* `GetInvitationsCount` - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* `GetMacieSession` - Retrieves the status and configuration settings for an Amazon Macie account.
* `GetMasterAccount` - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* `GetMember` - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* `GetResourceProfile` - Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
* `GetRevealConfiguration` - Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* `GetSensitiveDataOccurrences` - Retrieves occurrences of sensitive data reported by a finding.
* `GetSensitiveDataOccurrencesAvailability` - Checks whether occurrences of sensitive data can be retrieved for a finding.
* `GetSensitivityInspectionTemplate` -  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
* `GetUsageStatistics` - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* `GetUsageTotals` - Retrieves (queries) aggregated usage data for an account.
* `ListAllowLists` - Retrieves a subset of information about all the allow lists for an account.
* `ListClassificationJobs` - Retrieves a subset of information about one or more classification jobs.
* `ListClassificationScopes` - Retrieves a subset of information about the classification scope for an account.
* `ListCustomDataIdentifiers` - Retrieves a subset of information about all the custom data identifiers for an account.
* `ListFindings` - Retrieves a subset of information about one or more findings.
* `ListFindingsFilters` - Retrieves a subset of information about all the findings filters for an account.
* `ListInvitations` - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* `ListManagedDataIdentifiers` - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* `ListMembers` - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* `ListOrganizationAdminAccounts` - Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
* `ListResourceProfileArtifacts` - Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
* `ListResourceProfileDetections` - Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
* `ListSensitivityInspectionTemplates` -  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
* `ListTagsForResource` - Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
* `PutClassificationExportConfiguration` - Creates or updates the configuration settings for storing data classification results.
* `PutFindingsPublicationConfiguration` - Updates the configuration settings for publishing findings to Security Hub.
* `SearchResources` - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* `TagResource` - Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
* `TestCustomDataIdentifier` - Tests a custom data identifier.
* `UntagResource` - Removes one or more tags (keys and values) from an Amazon Macie resource.
* `UpdateAllowList` - Updates the settings for an allow list.
* `UpdateAutomatedDiscoveryConfiguration` - Enables or disables automated sensitive data discovery for an account.
* `UpdateClassificationJob` - Changes the status of a classification job.
* `UpdateClassificationScope` - Updates the classification scope settings for an account.
* `UpdateFindingsFilter` - Updates the criteria and other settings for a findings filter.
* `UpdateMacieSession` - Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
* `UpdateMemberSession` - Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
* `UpdateOrganizationConfiguration` - Updates the Amazon Macie configuration settings for an organization in Organizations.
* `UpdateResourceProfile` - Updates the sensitivity score for an S3 bucket.
* `UpdateResourceProfileDetections` - Updates the sensitivity scoring settings for an S3 bucket.
* `UpdateRevealConfiguration` - Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* `UpdateSensitivityInspectionTemplate` -  <p>Updates the settings for the sensitivity inspection template for an account.</p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
