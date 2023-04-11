# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/macie2/2020-01-01/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/macie2/2020-01-01/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptInvitationRequest,
  AcceptInvitationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptInvitationRequest = {
  requestBody: {
    administratorAccountId: "corrupti",
    invitationId: "provident",
    masterAccount: "distinctio",
  },
  xAmzAlgorithm: "quibusdam",
  xAmzContentSha256: "unde",
  xAmzCredential: "nulla",
  xAmzDate: "corrupti",
  xAmzSecurityToken: "illum",
  xAmzSignature: "vel",
  xAmzSignedHeaders: "error",
};

sdk.acceptInvitation(req).then((res: AcceptInvitationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `acceptInvitation` - Accepts an Amazon Macie membership invitation that was received from a specific account.
* `batchGetCustomDataIdentifiers` - Retrieves information about one or more custom data identifiers.
* `createAllowList` - Creates and defines the settings for an allow list.
* `createClassificationJob` - Creates and defines the settings for a classification job.
* `createCustomDataIdentifier` - Creates and defines the criteria and other settings for a custom data identifier.
* `createFindingsFilter` - Creates and defines the criteria and other settings for a findings filter.
* `createInvitations` - Sends an Amazon Macie membership invitation to one or more accounts.
* `createMember` - Associates an account with an Amazon Macie administrator account.
* `createSampleFindings` - Creates sample findings.
* `declineInvitations` - Declines Amazon Macie membership invitations that were received from specific accounts.
* `deleteAllowList` - Deletes an allow list.
* `deleteCustomDataIdentifier` - Soft deletes a custom data identifier.
* `deleteFindingsFilter` - Deletes a findings filter.
* `deleteInvitations` - Deletes Amazon Macie membership invitations that were received from specific accounts.
* `deleteMember` - Deletes the association between an Amazon Macie administrator account and an account.
* `describeBuckets` - Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
* `describeClassificationJob` - Retrieves the status and settings for a classification job.
* `describeOrganizationConfiguration` - Retrieves the Amazon Macie configuration settings for an organization in Organizations.
* `disableMacie` - Disables Amazon Macie and deletes all settings and resources for a Macie account.
* `disableOrganizationAdminAccount` - Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* `disassociateFromAdministratorAccount` - Disassociates a member account from its Amazon Macie administrator account.
* `disassociateFromMasterAccount` - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* `disassociateMember` - Disassociates an Amazon Macie administrator account from a member account.
* `enableMacie` - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* `enableOrganizationAdminAccount` - Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* `getAdministratorAccount` - Retrieves information about the Amazon Macie administrator account for an account.
* `getAllowList` - Retrieves the settings and status of an allow list.
* `getAutomatedDiscoveryConfiguration` - Retrieves the configuration settings and status of automated sensitive data discovery for an account.
* `getBucketStatistics` - Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
* `getClassificationExportConfiguration` - Retrieves the configuration settings for storing data classification results.
* `getClassificationScope` - Retrieves the classification scope settings for an account.
* `getCustomDataIdentifier` - Retrieves the criteria and other settings for a custom data identifier.
* `getFindingStatistics` -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* `getFindings` - Retrieves the details of one or more findings.
* `getFindingsFilter` - Retrieves the criteria and other settings for a findings filter.
* `getFindingsPublicationConfiguration` - Retrieves the configuration settings for publishing findings to Security Hub.
* `getInvitationsCount` - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* `getMacieSession` - Retrieves the status and configuration settings for an Amazon Macie account.
* `getMasterAccount` - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* `getMember` - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* `getResourceProfile` - Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
* `getRevealConfiguration` - Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* `getSensitiveDataOccurrences` - Retrieves occurrences of sensitive data reported by a finding.
* `getSensitiveDataOccurrencesAvailability` - Checks whether occurrences of sensitive data can be retrieved for a finding.
* `getSensitivityInspectionTemplate` -  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
* `getUsageStatistics` - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* `getUsageTotals` - Retrieves (queries) aggregated usage data for an account.
* `listAllowLists` - Retrieves a subset of information about all the allow lists for an account.
* `listClassificationJobs` - Retrieves a subset of information about one or more classification jobs.
* `listClassificationScopes` - Retrieves a subset of information about the classification scope for an account.
* `listCustomDataIdentifiers` - Retrieves a subset of information about all the custom data identifiers for an account.
* `listFindings` - Retrieves a subset of information about one or more findings.
* `listFindingsFilters` - Retrieves a subset of information about all the findings filters for an account.
* `listInvitations` - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* `listManagedDataIdentifiers` - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* `listMembers` - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* `listOrganizationAdminAccounts` - Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
* `listResourceProfileArtifacts` - Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
* `listResourceProfileDetections` - Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
* `listSensitivityInspectionTemplates` -  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
* `listTagsForResource` - Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
* `putClassificationExportConfiguration` - Creates or updates the configuration settings for storing data classification results.
* `putFindingsPublicationConfiguration` - Updates the configuration settings for publishing findings to Security Hub.
* `searchResources` - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* `tagResource` - Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
* `testCustomDataIdentifier` - Tests a custom data identifier.
* `untagResource` - Removes one or more tags (keys and values) from an Amazon Macie resource.
* `updateAllowList` - Updates the settings for an allow list.
* `updateAutomatedDiscoveryConfiguration` - Enables or disables automated sensitive data discovery for an account.
* `updateClassificationJob` - Changes the status of a classification job.
* `updateClassificationScope` - Updates the classification scope settings for an account.
* `updateFindingsFilter` - Updates the criteria and other settings for a findings filter.
* `updateMacieSession` - Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
* `updateMemberSession` - Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
* `updateOrganizationConfiguration` - Updates the Amazon Macie configuration settings for an organization in Organizations.
* `updateResourceProfile` - Updates the sensitivity score for an S3 bucket.
* `updateResourceProfileDetections` - Updates the sensitivity scoring settings for an S3 bucket.
* `updateRevealConfiguration` - Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* `updateSensitivityInspectionTemplate` -  <p>Updates the settings for the sensitivity inspection template for an account.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

