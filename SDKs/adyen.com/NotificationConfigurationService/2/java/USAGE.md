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

            PostCreateNotificationConfigurationRequest req = new PostCreateNotificationConfigurationRequest() {{
                security = new PostCreateNotificationConfigurationSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = "dolore";
            }};

            PostCreateNotificationConfigurationResponse res = sdk.general.postCreateNotificationConfiguration(req);

            if (res.getNotificationConfigurationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->