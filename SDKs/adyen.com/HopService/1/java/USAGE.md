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

            PostGetOnboardingUrlRequest req = new PostGetOnboardingUrlRequest() {{
                security = new PostGetOnboardingUrlSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = "illum";
            }};

            PostGetOnboardingUrlResponse res = sdk.hostedOnboardingPage.postGetOnboardingUrl(req);

            if (res.getOnboardingUrlResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->