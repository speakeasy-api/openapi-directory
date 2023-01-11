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

            SrcSearchlyApiV1ControllersSimilarityByContentRequest req = new SrcSearchlyApiV1ControllersSimilarityByContentRequest() {{
                request = new SrcSearchlyApiV1ControllersSimilarityByContentRequestBody() {{
                    content = "sit";
                }};
            }};

            SrcSearchlyApiV1ControllersSimilarityByContentResponse res = sdk.similarity.srcSearchlyApiV1ControllersSimilarityByContent(req);

            if (res.apiResponseSimilarity.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->