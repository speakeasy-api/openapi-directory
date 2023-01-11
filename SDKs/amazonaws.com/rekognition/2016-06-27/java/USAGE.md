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

            CompareFacesRequest req = new CompareFacesRequest() {{
                headers = new CompareFacesHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "RekognitionService.CompareFaces";
                }};
                request = new CompareFacesRequest() {{
                    qualityFilter = "MEDIUM";
                    similarityThreshold = 28.100000;
                    sourceImage = new Image() {{
                        bytes = "rerum";
                        s3Object = new S3Object() {{
                            bucket = "dicta";
                            name = "debitis";
                            version = "voluptatum";
                        }};
                    }};
                    targetImage = new Image() {{
                        bytes = "et";
                        s3Object = new S3Object() {{
                            bucket = "ut";
                            name = "dolorem";
                            version = "et";
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