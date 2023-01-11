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

            CancelContactRequest req = new CancelContactRequest() {{
                pathParams = new CancelContactPathParams() {{
                    contactId = "repudiandae";
                }};
                headers = new CancelContactHeaders() {{
                    xAmzAlgorithm = "quo";
                    xAmzContentSha256 = "omnis";
                    xAmzCredential = "adipisci";
                    xAmzDate = "praesentium";
                    xAmzSecurityToken = "qui";
                    xAmzSignature = "ipsam";
                    xAmzSignedHeaders = "in";
                }};
            }};

            CancelContactResponse res = sdk.cancelContact(req);

            if (res.contactIdResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->