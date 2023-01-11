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

            GetDeviceRegistrationRequest req = new GetDeviceRegistrationRequest() {{
                headers = new GetDeviceRegistrationHeaders() {{
                    xAmzAlgorithm = "quos";
                    xAmzContentSha256 = "quam";
                    xAmzCredential = "quam";
                    xAmzDate = "totam";
                    xAmzSecurityToken = "omnis";
                    xAmzSignature = "qui";
                    xAmzSignedHeaders = "neque";
                }};
                request = new GetDeviceRegistrationRequestBody() {{
                    deviceFleetName = "officia";
                    deviceName = "quo";
                }};
            }};

            GetDeviceRegistrationResponse res = sdk.getDeviceRegistration(req);

            if (res.getDeviceRegistrationResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->