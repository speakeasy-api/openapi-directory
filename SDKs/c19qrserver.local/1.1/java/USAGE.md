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
                    tokenHeader = new SchemeTokenHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteSigninSigninIdRequest req = new DeleteSigninSigninIdRequest() {{
                pathParams = new DeleteSigninSigninIdPathParams() {{
                    signinId = 1213256779453366885;
                }};
            }};

            DeleteSigninSigninIdResponse res = sdk.attendeesSignins.deleteSigninSigninId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->