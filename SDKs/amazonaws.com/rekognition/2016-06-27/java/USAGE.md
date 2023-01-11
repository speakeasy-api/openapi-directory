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
                    xAmzAlgorithm = "dolorum";
                    xAmzContentSha256 = "blanditiis";
                    xAmzCredential = "culpa";
                    xAmzDate = "est";
                    xAmzSecurityToken = "soluta";
                    xAmzSignature = "omnis";
                    xAmzSignedHeaders = "sint";
                    xAmzTarget = "RekognitionService.CompareFaces";
                }};
                request = new CompareFacesRequest() {{
                    qualityFilter = "NONE";
                    similarityThreshold = 87.099998;
                    sourceImage = new Image() {{
                        bytes = "labore";
                        s3Object = new S3Object() {{
                            bucket = "maxime";
                            name = "eaque";
                            version = "sed";
                        }};
                    }};
                    targetImage = new Image() {{
                        bytes = "ut";
                        s3Object = new S3Object() {{
                            bucket = "expedita";
                            name = "modi";
                            version = "aliquam";
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