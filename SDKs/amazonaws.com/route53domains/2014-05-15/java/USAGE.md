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

            AcceptDomainTransferFromAnotherAwsAccountRequest req = new AcceptDomainTransferFromAnotherAwsAccountRequest() {{
                headers = new AcceptDomainTransferFromAnotherAwsAccountHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "magni";
                    xAmzCredential = "quis";
                    xAmzDate = "sed";
                    xAmzSecurityToken = "ratione";
                    xAmzSignature = "sed";
                    xAmzSignedHeaders = "quaerat";
                    xAmzTarget = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount";
                }};
                request = new AcceptDomainTransferFromAnotherAwsAccountRequest() {{
                    domainName = "vel";
                    password = "fuga";
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