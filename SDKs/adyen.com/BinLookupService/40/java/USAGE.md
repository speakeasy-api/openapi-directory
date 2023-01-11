<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PostGet3dsAvailabilityRequest req = new PostGet3dsAvailabilityRequest() {{
                security = new PostGet3dsAvailabilitySecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = "sit";
            }};

            PostGet3dsAvailabilityResponse res = sdk.general.postGet3dsAvailability(req);

            if (res.threeDSAvailabilityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->