# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AcceptGrantRequest req = new AcceptGrantRequest() {{
                headers = new AcceptGrantHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSLicenseManager.AcceptGrant";
                }};
                request = new AcceptGrantRequest() {{
                    grantArn = "fugit";
                }};
            }};

            AcceptGrantResponse res = sdk.acceptGrant(req);

            if (res.acceptGrantResponse.isPresent()) {
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

* `acceptGrant` - Accepts the specified grant.
* `checkInLicense` - Checks in the specified license. Check in a license when it is no longer in use.
* `checkoutBorrowLicense` - Checks out the specified license for offline use.
* `checkoutLicense` - Checks out the specified license.
* `createGrant` - Creates a grant for the specified license. A grant shares the use of license entitlements with specific AWS accounts.
* `createGrantVersion` - Creates a new version of the specified grant.
* `createLicense` - Creates a license.
* `createLicenseConfiguration` - <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
* `createLicenseManagerReportGenerator` - Creates a new report generator.
* `createLicenseVersion` - Creates a new version of the specified license.
* `createToken` - <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
* `deleteGrant` - Deletes the specified grant.
* `deleteLicense` - Deletes the specified license.
* `deleteLicenseConfiguration` - <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
* `deleteLicenseManagerReportGenerator` - <p>Delete an existing report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports and cannot be reversed. However, the previous reports from this generator will remain in your S3 bucket.</p>
* `deleteToken` - Deletes the specified token. Must be called in the license home Region.
* `extendLicenseConsumption` - Extends the expiration date for license consumption.
* `getAccessToken` - Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
* `getGrant` - Gets detailed information about the specified grant.
* `getLicense` - Gets detailed information about the specified license.
* `getLicenseConfiguration` - Gets detailed information about the specified license configuration.
* `getLicenseManagerReportGenerator` - Gets information on the specified report generator.
* `getLicenseUsage` - Gets detailed information about the usage of the specified license.
* `getServiceSettings` - Gets the License Manager settings for the current Region.
* `listAssociationsForLicenseConfiguration` - <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
* `listDistributedGrants` - Lists the grants distributed for the specified license.
* `listFailuresForLicenseConfigurationOperations` - Lists the license configuration operations that failed.
* `listLicenseConfigurations` - Lists the license configurations for your account.
* `listLicenseManagerReportGenerators` - Lists the report generators for your account.
* `listLicenseSpecificationsForResource` - Describes the license configurations for the specified resource.
* `listLicenseVersions` - Lists all versions of the specified license.
* `listLicenses` - Lists the licenses for your account.
* `listReceivedGrants` - Lists grants that are received but not accepted.
* `listReceivedLicenses` - Lists received licenses.
* `listResourceInventory` - Lists resources managed using Systems Manager inventory.
* `listTagsForResource` - Lists the tags for the specified license configuration.
* `listTokens` - Lists your tokens.
* `listUsageForLicenseConfiguration` - Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
* `rejectGrant` - Rejects the specified grant.
* `tagResource` - Adds the specified tags to the specified license configuration.
* `untagResource` - Removes the specified tags from the specified license configuration.
* `updateLicenseConfiguration` - Modifies the attributes of an existing license configuration.
* `updateLicenseManagerReportGenerator` - <p>Updates a report generator.</p> <p>After you make changes to a report generator, it will start generating new reports within 60 minutes of being updated.</p>
* `updateLicenseSpecificationsForResource` - <p>Adds or removes the specified license configurations for the specified AWS resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and AWS CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
* `updateServiceSettings` - Updates License Manager settings for the current Region.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
