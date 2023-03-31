<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CompareFacesXAmzTargetEnum;
import org.openapis.openapi.models.operations.CompareFacesHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CompareFacesRequest req = new CompareFacesRequest() {{
                headers = new CompareFacesHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "RekognitionService.CompareFaces";
                }};
                request = new CompareFacesRequest() {{
                    qualityFilter = "HIGH";
                    similarityThreshold = 4236.55;
                    sourceImage = new Image() {{
                        bytes = "error";
                        s3Object = new S3Object() {{
                            bucket = "deserunt";
                            name = "suscipit";
                            version = "iure";
                        }};
                    }};
                    targetImage = new Image() {{
                        bytes = "magnam";
                        s3Object = new S3Object() {{
                            bucket = "debitis";
                            name = "ipsa";
                            version = "delectus";
                        }};
                    }};
                }};
            }};            

            CompareFacesResponse res = sdk.compareFaces(req);

            if (res.compareFacesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->