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
import org.openapis.openapi.models.operations.AssociateMemberAccountRequest;
import org.openapis.openapi.models.operations.AssociateMemberAccountResponse;
import org.openapis.openapi.models.operations.AssociateMemberAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateMemberAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateMemberAccountRequest req = new AssociateMemberAccountRequest(                new AssociateMemberAccountRequest("provident");, AssociateMemberAccountXAmzTargetEnum.MACIE_SERVICE_ASSOCIATE_MEMBER_ACCOUNT) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AssociateMemberAccountResponse res = sdk.associateMemberAccount(req);

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

* [associateMemberAccount](docs/sdk/README.md#associatememberaccount) - (Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.
* [associateS3Resources](docs/sdk/README.md#associates3resources) - (Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
* [disassociateMemberAccount](docs/sdk/README.md#disassociatememberaccount) - (Discontinued) Removes the specified member account from Amazon Macie Classic.
* [disassociateS3Resources](docs/sdk/README.md#disassociates3resources) - (Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
* [listMemberAccounts](docs/sdk/README.md#listmemberaccounts) - (Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
* [listS3Resources](docs/sdk/README.md#lists3resources) - (Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account. 
* [updateS3Resources](docs/sdk/README.md#updates3resources) - (Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
