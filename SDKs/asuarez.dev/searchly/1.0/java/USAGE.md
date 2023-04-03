<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentRequestBody;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SrcSearchlyApiV1ControllersSimilarityByContentRequestBody req = new SrcSearchlyApiV1ControllersSimilarityByContentRequestBody() {{
                content = "corrupti";
            }}            

            SrcSearchlyApiV1ControllersSimilarityByContentResponse res = sdk.similarity.srcSearchlyApiV1ControllersSimilarityByContent(req);

            if (res.apiResponseSimilarity.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->