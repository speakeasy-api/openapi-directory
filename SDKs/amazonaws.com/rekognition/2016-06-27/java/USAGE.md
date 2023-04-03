<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CompareFacesXAmzTargetEnum;
import org.openapis.openapi.models.operations.CompareFacesRequest;
import org.openapis.openapi.models.operations.CompareFacesResponse;
import org.openapis.openapi.models.shared.CompareFacesRequest;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.QualityFilterEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompareFacesRequest req = new CompareFacesRequest() {{
                compareFacesRequest = new CompareFacesRequest() {{
                    qualityFilter = "LOW";
                    similarityThreshold = 5928.45;
                    sourceImage = new Image() {{
                        bytes = "distinctio";
                        s3Object = new S3Object() {{
                            bucket = "quibusdam";
                            name = "unde";
                            version = "nulla";
                        }};
                    }};
                    targetImage = new Image() {{
                        bytes = "corrupti";
                        s3Object = new S3Object() {{
                            bucket = "illum";
                            name = "vel";
                            version = "error";
                        }};
                    }};
                }};
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
                xAmzTarget = "RekognitionService.CompareFaces";
            }}            

            CompareFacesResponse res = sdk.compareFaces(req);

            if (res.compareFacesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->