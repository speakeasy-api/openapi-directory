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

            CreateChangesetRequest req = new CreateChangesetRequest() {{
                pathParams = new CreateChangesetPathParams() {{
                    datasetId = "sit";
                }};
                headers = new CreateChangesetHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                }};
                request = new CreateChangesetRequestBody() {{
                    changeType = "REPLACE";
                    formatParams = new java.util.HashMap<String, String>() {{
                        put("nihil", "rerum");
                    }};
                    formatType = "XML";
                    sourceParams = new java.util.HashMap<String, String>() {{
                        put("voluptatum", "et");
                    }};
                    sourceType = "S3";
                    tags = new java.util.HashMap<String, String>() {{
                        put("et", "voluptate");
                        put("iste", "vitae");
                        put("totam", "dolores");
                    }};
                }};
            }};

            CreateChangesetResponse res = sdk.createChangeset(req);

            if (res.createChangesetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->