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
import org.openapis.openapi.models.operations.AcceptGrantRequest;
import org.openapis.openapi.models.operations.AcceptGrantResponse;
import org.openapis.openapi.models.operations.AcceptGrantXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptGrantRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptGrantRequest req = new AcceptGrantRequest(                new AcceptGrantRequest("provident");, AcceptGrantXAmzTargetEnum.AWS_LICENSE_MANAGER_ACCEPT_GRANT) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AcceptGrantResponse res = sdk.acceptGrant(req);

            if (res.acceptGrantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [acceptGrant](docs/sdk/README.md#acceptgrant) - Accepts the specified grant.
* [checkInLicense](docs/sdk/README.md#checkinlicense) - Checks in the specified license. Check in a license when it is no longer in use.
* [checkoutBorrowLicense](docs/sdk/README.md#checkoutborrowlicense) - Checks out the specified license for offline use.
* [checkoutLicense](docs/sdk/README.md#checkoutlicense) - <p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>
* [createGrant](docs/sdk/README.md#creategrant) - Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
* [createGrantVersion](docs/sdk/README.md#creategrantversion) - Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
* [createLicense](docs/sdk/README.md#createlicense) - Creates a license.
* [createLicenseConfiguration](docs/sdk/README.md#createlicenseconfiguration) - <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
* [createLicenseConversionTaskForResource](docs/sdk/README.md#createlicenseconversiontaskforresource) - Creates a new license conversion task.
* [createLicenseManagerReportGenerator](docs/sdk/README.md#createlicensemanagerreportgenerator) - Creates a report generator.
* [createLicenseVersion](docs/sdk/README.md#createlicenseversion) - Creates a new version of the specified license.
* [createToken](docs/sdk/README.md#createtoken) - <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
* [deleteGrant](docs/sdk/README.md#deletegrant) - Deletes the specified grant.
* [deleteLicense](docs/sdk/README.md#deletelicense) - Deletes the specified license.
* [deleteLicenseConfiguration](docs/sdk/README.md#deletelicenseconfiguration) - <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
* [deleteLicenseManagerReportGenerator](docs/sdk/README.md#deletelicensemanagerreportgenerator) - <p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>
* [deleteToken](docs/sdk/README.md#deletetoken) - Deletes the specified token. Must be called in the license home Region.
* [extendLicenseConsumption](docs/sdk/README.md#extendlicenseconsumption) - Extends the expiration date for license consumption.
* [getAccessToken](docs/sdk/README.md#getaccesstoken) - Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
* [getGrant](docs/sdk/README.md#getgrant) - Gets detailed information about the specified grant.
* [getLicense](docs/sdk/README.md#getlicense) - Gets detailed information about the specified license.
* [getLicenseConfiguration](docs/sdk/README.md#getlicenseconfiguration) - Gets detailed information about the specified license configuration.
* [getLicenseConversionTask](docs/sdk/README.md#getlicenseconversiontask) - Gets information about the specified license type conversion task.
* [getLicenseManagerReportGenerator](docs/sdk/README.md#getlicensemanagerreportgenerator) - Gets information about the specified report generator.
* [getLicenseUsage](docs/sdk/README.md#getlicenseusage) - Gets detailed information about the usage of the specified license.
* [getServiceSettings](docs/sdk/README.md#getservicesettings) - Gets the License Manager settings for the current Region.
* [listAssociationsForLicenseConfiguration](docs/sdk/README.md#listassociationsforlicenseconfiguration) - <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
* [listDistributedGrants](docs/sdk/README.md#listdistributedgrants) - Lists the grants distributed for the specified license.
* [listFailuresForLicenseConfigurationOperations](docs/sdk/README.md#listfailuresforlicenseconfigurationoperations) - Lists the license configuration operations that failed.
* [listLicenseConfigurations](docs/sdk/README.md#listlicenseconfigurations) - Lists the license configurations for your account.
* [listLicenseConversionTasks](docs/sdk/README.md#listlicenseconversiontasks) - Lists the license type conversion tasks for your account.
* [listLicenseManagerReportGenerators](docs/sdk/README.md#listlicensemanagerreportgenerators) - Lists the report generators for your account.
* [listLicenseSpecificationsForResource](docs/sdk/README.md#listlicensespecificationsforresource) - Describes the license configurations for the specified resource.
* [listLicenseVersions](docs/sdk/README.md#listlicenseversions) - Lists all versions of the specified license.
* [listLicenses](docs/sdk/README.md#listlicenses) - Lists the licenses for your account.
* [listReceivedGrants](docs/sdk/README.md#listreceivedgrants) - Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.
* [listReceivedGrantsForOrganization](docs/sdk/README.md#listreceivedgrantsfororganization) - Lists the grants received for all accounts in the organization.
* [listReceivedLicenses](docs/sdk/README.md#listreceivedlicenses) - Lists received licenses.
* [listReceivedLicensesForOrganization](docs/sdk/README.md#listreceivedlicensesfororganization) - Lists the licenses received for all accounts in the organization.
* [listResourceInventory](docs/sdk/README.md#listresourceinventory) - Lists resources managed using Systems Manager inventory.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified license configuration.
* [listTokens](docs/sdk/README.md#listtokens) - Lists your tokens.
* [listUsageForLicenseConfiguration](docs/sdk/README.md#listusageforlicenseconfiguration) - Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
* [rejectGrant](docs/sdk/README.md#rejectgrant) - Rejects the specified grant.
* [tagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified license configuration.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified license configuration.
* [updateLicenseConfiguration](docs/sdk/README.md#updatelicenseconfiguration) - Modifies the attributes of an existing license configuration.
* [updateLicenseManagerReportGenerator](docs/sdk/README.md#updatelicensemanagerreportgenerator) - <p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
* [updateLicenseSpecificationsForResource](docs/sdk/README.md#updatelicensespecificationsforresource) - <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
* [updateServiceSettings](docs/sdk/README.md#updateservicesettings) - Updates License Manager settings for the current Region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
