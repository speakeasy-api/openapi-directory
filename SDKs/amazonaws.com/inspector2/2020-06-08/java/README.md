# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateMemberHeaders;
import org.openapis.openapi.models.operations.AssociateMemberRequestBody;
import org.openapis.openapi.models.operations.AssociateMemberRequest;
import org.openapis.openapi.models.operations.AssociateMemberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateMemberRequest req = new AssociateMemberRequest() {{
                headers = new AssociateMemberHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AssociateMemberRequestBody() {{
                    accountId = "illum";
                }};
            }};            

            AssociateMemberResponse res = sdk.associateMember(req);

            if (res.associateMemberResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateMember` - Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
* `batchGetAccountStatus` - Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
* `batchGetFreeTrialInfo` - Gets free trial status for multiple Amazon Web Services accounts.
* `cancelFindingsReport` - Cancels the given findings report.
* `createFilter` - Creates a filter resource using specified filter criteria.
* `createFindingsReport` - Creates a finding report.
* `deleteFilter` - Deletes a filter resource.
* `describeOrganizationConfiguration` - Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
* `disable` - Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
* `disableDelegatedAdminAccount` - Disables the Amazon Inspector delegated administrator for your organization.
* `disassociateMember` - Disassociates a member account from an Amazon Inspector delegated administrator.
* `enable` - Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
* `enableDelegatedAdminAccount` - Enables the Amazon Inspector delegated administrator for your Organizations organization.
* `getConfiguration` - Retrieves setting configurations for Inspector scans.
* `getDelegatedAdminAccount` - Retrieves information about the Amazon Inspector delegated administrator for your organization.
* `getFindingsReportStatus` - Gets the status of a findings report.
* `getMember` - Gets member information for your organization.
* `listAccountPermissions` - Lists the permissions an account has to configure Amazon Inspector.
* `listCoverage` - Lists coverage details for you environment.
* `listCoverageStatistics` - Lists Amazon Inspector coverage statistics for your environment.
* `listDelegatedAdminAccounts` - Lists information about the Amazon Inspector delegated administrator of your organization.
* `listFilters` - Lists the filters associated with your account.
* `listFindingAggregations` - Lists aggregated finding data for your environment based on specific criteria.
* `listFindings` - Lists findings for your environment.
* `listMembers` - List members associated with the Amazon Inspector delegated administrator for your organization.
* `listTagsForResource` - Lists all tags attached to a given resource.
* `listUsageTotals` - Lists the Amazon Inspector usage totals over the last 30 days.
* `tagResource` - Adds tags to a resource.
* `untagResource` - Removes tags from a resource.
* `updateConfiguration` - Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
* `updateFilter` - Specifies the action that is to be applied to the findings that match the filter.
* `updateOrganizationConfiguration` - Updates the configurations for your Amazon Inspector organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
