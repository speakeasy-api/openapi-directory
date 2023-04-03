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
import org.openapis.openapi.models.operations.AssociateUserRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.AssociateUserRequestBody;
import org.openapis.openapi.models.operations.AssociateUserRequest;
import org.openapis.openapi.models.operations.AssociateUserResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateUserRequest req = new AssociateUserRequest() {{
                requestBody = new AssociateUserRequestBody() {{
                    domain = "corrupti";
                    identityProvider = new AssociateUserRequestBodyIdentityProvider() {{
                        activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                            directoryId = "provident";
                        }};
                    }};
                    instanceId = "distinctio";
                    username = "Rosalinda_Mitchell84";
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }}            

            AssociateUserResponse res = sdk.associateUser(req);

            if (res.associateUserResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associateUser` - <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* `deregisterIdentityProvider` - Deregisters the identity provider from providing user-based subscriptions.
* `disassociateUser` - Disassociates the user from an EC2 instance providing user-based subscriptions.
* `listIdentityProviders` - Lists the identity providers for user-based subscriptions.
* `listInstances` - Lists the EC2 instances providing user-based subscriptions.
* `listProductSubscriptions` - Lists the user-based subscription products available from an identity provider.
* `listUserAssociations` - Lists user associations for an identity provider.
* `registerIdentityProvider` - Registers an identity provider for user-based subscriptions.
* `startProductSubscription` - <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* `stopProductSubscription` - Stops a product subscription for a user with the specified identity provider.
* `updateIdentityProviderSettings` - Updates additional product configuration settings for the registered identity provider.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
