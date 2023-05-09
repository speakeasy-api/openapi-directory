<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompareFacesRequest;
import org.openapis.openapi.models.operations.CompareFacesResponse;
import org.openapis.openapi.models.operations.CompareFacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.CompareFacesRequest;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.QualityFilterEnum;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompareFacesRequest req = new CompareFacesRequest(                new CompareFacesRequest(                new Image() {{
                                                bytes = "provident";
                                                s3Object = new S3Object() {{
                                                    bucket = "distinctio";
                                                    name = "Stuart Stiedemann";
                                                    version = "vel";
                                                }};;
                                            }};,                 new Image() {{
                                                bytes = "error";
                                                s3Object = new S3Object() {{
                                                    bucket = "deserunt";
                                                    name = "Willie Gulgowski DVM";
                                                    version = "tempora";
                                                }};;
                                            }};) {{
                                qualityFilter = QualityFilterEnum.AUTO;
                                similarityThreshold = 4776.65;
                            }};, CompareFacesXAmzTargetEnum.REKOGNITION_SERVICE_COMPARE_FACES) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CompareFacesResponse res = sdk.compareFaces(req);

            if (res.compareFacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->