<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAccountsHeaders;
import org.openapis.openapi.models.operations.AssociateAccountsRequestBody;
import org.openapis.openapi.models.operations.AssociateAccountsRequest;
import org.openapis.openapi.models.operations.AssociateAccountsResponse;

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

            AssociateAccountsRequest req = new AssociateAccountsRequest() {{
                headers = new AssociateAccountsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AssociateAccountsRequestBody() {{
                    accountIds = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    arn = "iure";
                }};
            }};            

            AssociateAccountsResponse res = sdk.associateAccounts(req);

            if (res.associateAccountsOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->