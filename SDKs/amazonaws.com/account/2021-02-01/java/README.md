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
import org.openapis.openapi.models.operations.DeleteAlternateContactRequest;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequestBody;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequestBodyAlternateContactTypeEnum;
import org.openapis.openapi.models.operations.DeleteAlternateContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAlternateContactRequest req = new DeleteAlternateContactRequest(                new DeleteAlternateContactRequestBody(DeleteAlternateContactRequestBodyAlternateContactTypeEnum.OPERATIONS) {{
                                accountId = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            DeleteAlternateContactResponse res = sdk.deleteAlternateContact(req);

            if (res.statusCode == 200) {
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

* [deleteAlternateContact](docs/sdk/README.md#deletealternatecontact) - <p>Deletes the specified alternate contact from an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [disableRegion](docs/sdk/README.md#disableregion) - Disables (opts-out) a particular Region for an account.
* [enableRegion](docs/sdk/README.md#enableregion) - Enables (opts-in) a particular Region for an account.
* [getAlternateContact](docs/sdk/README.md#getalternatecontact) - <p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [getContactInformation](docs/sdk/README.md#getcontactinformation) - <p>Retrieves the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
* [getRegionOptStatus](docs/sdk/README.md#getregionoptstatus) - Retrieves the opt-in status of a particular Region.
* [listRegions](docs/sdk/README.md#listregions) - Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the <code>region-opt-status-contains</code> parameter. 
* [putAlternateContact](docs/sdk/README.md#putalternatecontact) - <p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [putContactInformation](docs/sdk/README.md#putcontactinformation) - <p>Updates the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
