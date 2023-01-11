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

            GetBuildSuggestersRequest req = new GetBuildSuggestersRequest() {{
                queryParams = new GetBuildSuggestersQueryParams() {{
                    action = "BuildSuggesters";
                    domainName = "quaerat";
                    version = "2013-01-01";
                }};
                headers = new GetBuildSuggestersHeaders() {{
                    xAmzAlgorithm = "omnis";
                    xAmzContentSha256 = "consectetur";
                    xAmzCredential = "ducimus";
                    xAmzDate = "consequatur";
                    xAmzSecurityToken = "non";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "at";
                }};
            }};

            GetBuildSuggestersResponse res = sdk.getBuildSuggesters(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->