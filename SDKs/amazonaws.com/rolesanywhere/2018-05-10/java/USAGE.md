<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateProfileHeaders;
import org.openapis.openapi.models.operations.CreateProfileRequestBody;
import org.openapis.openapi.models.operations.CreateProfileRequest;
import org.openapis.openapi.models.operations.CreateProfileResponse;
import org.openapis.openapi.models.shared.Tag;

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

            CreateProfileRequest req = new CreateProfileRequest() {{
                headers = new CreateProfileHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateProfileRequestBody() {{
                    durationSeconds = 847252;
                    enabled = false;
                    managedPolicyArns = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                    name = "suscipit";
                    requireInstanceProperties = false;
                    roleArns = new String[]{{
                        add("magnam"),
                        add("debitis"),
                    }};
                    sessionPolicy = "ipsa";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "tempora";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "molestiae";
                            value = "minus";
                        }}),
                        add(new Tag() {{
                            key = "placeat";
                            value = "voluptatum";
                        }}),
                        add(new Tag() {{
                            key = "iusto";
                            value = "excepturi";
                        }}),
                    }};
                }};
            }};            

            CreateProfileResponse res = sdk.createProfile(req);

            if (res.profileDetailResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->