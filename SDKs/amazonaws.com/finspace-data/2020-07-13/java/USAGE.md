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
                    datasetId = "voluptatem";
                }};
                headers = new CreateChangesetHeaders() {{
                    xAmzAlgorithm = "quidem";
                    xAmzContentSha256 = "rerum";
                    xAmzCredential = "id";
                    xAmzDate = "facilis";
                    xAmzSecurityToken = "cum";
                    xAmzSignature = "occaecati";
                    xAmzSignedHeaders = "quia";
                }};
                request = new CreateChangesetRequestBody() {{
                    changeType = "REPLACE";
                    formatParams = new java.util.HashMap<String, String>() {{
                        put("ducimus", "unde");
                        put("nostrum", "illo");
                        put("eos", "sit");
                    }};
                    formatType = "PARQUET";
                    sourceParams = new java.util.HashMap<String, String>() {{
                        put("ut", "voluptatum");
                        put("dolor", "sed");
                        put("odio", "deserunt");
                    }};
                    sourceType = "S3";
                    tags = new java.util.HashMap<String, String>() {{
                        put("sequi", "iure");
                        put("provident", "eum");
                        put("repellat", "quia");
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