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

            AssociateAdminAccountRequest req = new AssociateAdminAccountRequest() {{
                headers = new AssociateAdminAccountHeaders() {{
                    xAmzAlgorithm = "expedita";
                    xAmzContentSha256 = "cupiditate";
                    xAmzCredential = "aut";
                    xAmzDate = "id";
                    xAmzSecurityToken = "suscipit";
                    xAmzSignature = "dicta";
                    xAmzSignedHeaders = "laboriosam";
                    xAmzTarget = "AWSFMS_20180101.AssociateAdminAccount";
                }};
                request = new AssociateAdminAccountRequest() {{
                    adminAccount = "architecto";
                }};
            }};

            AssociateAdminAccountResponse res = sdk.associateAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->