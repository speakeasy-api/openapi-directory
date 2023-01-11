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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "Textract.AnalyzeDocument";
                }};
                request = new AnalyzeDocumentRequest() {{
                    document = new Document() {{
                        bytes = "fugit";
                        s3Object = new S3Object() {{
                            bucket = "et";
                            name = "nihil";
                            version = "rerum";
                        }};
                    }};
                    featureTypes = new openapisdk.models.shared.FeatureTypeEnum[]() {{
                        add("TABLES"),
                        add("TABLES"),
                        add("TABLES"),
                    }};
                    humanLoopConfig = new HumanLoopConfig() {{
                        dataAttributes = new HumanLoopDataAttributes() {{
                            contentClassifiers = new openapisdk.models.shared.ContentClassifierEnum[]() {{
                                add("FreeOfPersonallyIdentifiableInformation"),
                                add("FreeOfPersonallyIdentifiableInformation"),
                                add("FreeOfPersonallyIdentifiableInformation"),
                            }};
                        }};
                        flowDefinitionArn = "iste";
                        humanLoopName = "vitae";
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