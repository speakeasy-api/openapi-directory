<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountHeaders;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountRequest;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountResponse;
import org.openapis.openapi.models.shared.AcceptDomainTransferFromAnotherAwsAccountRequest;

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

            AcceptDomainTransferFromAnotherAwsAccountRequest req = new AcceptDomainTransferFromAnotherAwsAccountRequest() {{
                headers = new AcceptDomainTransferFromAnotherAwsAccountHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount";
                }};
                request = new AcceptDomainTransferFromAnotherAwsAccountRequest() {{
                    domainName = "illum";
                    password = "vel";
                }};
            }};            

            AcceptDomainTransferFromAnotherAwsAccountResponse res = sdk.acceptDomainTransferFromAnotherAwsAccount(req);

            if (res.acceptDomainTransferFromAnotherAwsAccountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->