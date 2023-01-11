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

            CreateProjectRequest req = new CreateProjectRequest() {{
                queryParams = new CreateProjectQueryParams() {{
                    name = "magnam";
                    region = "similique";
                    snapshotId = "fuga";
                }};
                headers = new CreateProjectHeaders() {{
                    xAmzAlgorithm = "voluptatem";
                    xAmzContentSha256 = "officia";
                    xAmzCredential = "iure";
                    xAmzDate = "at";
                    xAmzSecurityToken = "consequatur";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "nobis";
                }};
                request = new CreateProjectRequestBody() {{
                    contents = "vero";
                }};
            }};

            CreateProjectResponse res = sdk.createProject(req);

            if (res.createProjectResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->