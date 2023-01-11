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

            AnalyzeDocumentRequest req = new AnalyzeDocumentRequest() {{
                headers = new AnalyzeDocumentHeaders() {{
                    xAmzAlgorithm = "repellendus";
                    xAmzContentSha256 = "corrupti";
                    xAmzCredential = "ex";
                    xAmzDate = "voluptatum";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "doloribus";
                    xAmzTarget = "Textract.AnalyzeDocument";
                }};
                request = new AnalyzeDocumentRequest() {{
                    document = new Document() {{
                        bytes = "sunt";
                        s3Object = new S3Object() {{
                            bucket = "et";
                            name = "ea";
                            version = "deserunt";
                        }};
                    }};
                    featureTypes = new openapisdk.models.shared.FeatureTypeEnum[]() {{
                        add("TABLES"),
                        add("FORMS"),
                    }};
                    humanLoopConfig = new HumanLoopConfig() {{
                        dataAttributes = new HumanLoopDataAttributes() {{
                            contentClassifiers = new openapisdk.models.shared.ContentClassifierEnum[]() {{
                                add("FreeOfAdultContent"),
                            }};
                        }};
                        flowDefinitionArn = "magnam";
                        humanLoopName = "dicta";
                    }};
                }};
            }};

            AnalyzeDocumentResponse res = sdk.analyzeDocument(req);

            if (res.analyzeDocumentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->