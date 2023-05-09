<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountRequest;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountResponse;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptDomainTransferFromAnotherAwsAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptDomainTransferFromAnotherAwsAccountRequest req = new AcceptDomainTransferFromAnotherAwsAccountRequest(                new AcceptDomainTransferFromAnotherAwsAccountRequest("provident", "distinctio");, AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AcceptDomainTransferFromAnotherAwsAccountResponse res = sdk.acceptDomainTransferFromAnotherAwsAccount(req);

            if (res.acceptDomainTransferFromAnotherAwsAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->