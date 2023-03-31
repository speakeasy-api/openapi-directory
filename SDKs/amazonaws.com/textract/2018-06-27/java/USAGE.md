<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AnalyzeDocumentXAmzTargetEnum;
import org.openapis.openapi.models.operations.AnalyzeDocumentHeaders;
import org.openapis.openapi.models.operations.AnalyzeDocumentRequest;
import org.openapis.openapi.models.operations.AnalyzeDocumentResponse;
import org.openapis.openapi.models.shared.AnalyzeDocumentRequest;
import org.openapis.openapi.models.shared.QueriesConfig;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.HumanLoopConfig;
import org.openapis.openapi.models.shared.HumanLoopDataAttributes;
import org.openapis.openapi.models.shared.ContentClassifierEnum;
import org.openapis.openapi.models.shared.FeatureTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.S3Object;

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

            AnalyzeDocumentRequest req = new AnalyzeDocumentRequest() {{
                headers = new AnalyzeDocumentHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Textract.AnalyzeDocument";
                }};
                request = new AnalyzeDocumentRequest() {{
                    document = new Document() {{
                        bytes = "illum";
                        s3Object = new S3Object() {{
                            bucket = "vel";
                            name = "error";
                            version = "deserunt";
                        }};
                    }};
                    featureTypes = new org.openapis.openapi.models.shared.FeatureTypeEnum[]{{
                        add("FORMS"),
                        add("FORMS"),
                    }};
                    humanLoopConfig = new HumanLoopConfig() {{
                        dataAttributes = new HumanLoopDataAttributes() {{
                            contentClassifiers = new org.openapis.openapi.models.shared.ContentClassifierEnum[]{{
                                add("FreeOfPersonallyIdentifiableInformation"),
                                add("FreeOfAdultContent"),
                                add("FreeOfPersonallyIdentifiableInformation"),
                                add("FreeOfPersonallyIdentifiableInformation"),
                            }};
                        }};
                        flowDefinitionArn = "molestiae";
                        humanLoopName = "minus";
                    }};
                    queriesConfig = new QueriesConfig() {{
                        queries = new org.openapis.openapi.models.shared.Query[]{{
                            add(new Query() {{
                                alias = "voluptatum";
                                pages = new String[]{{
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                                text = "recusandae";
                            }}),
                            add(new Query() {{
                                alias = "temporibus";
                                pages = new String[]{{
                                    add("quis"),
                                }};
                                text = "veritatis";
                            }}),
                            add(new Query() {{
                                alias = "deserunt";
                                pages = new String[]{{
                                    add("ipsam"),
                                }};
                                text = "repellendus";
                            }}),
                            add(new Query() {{
                                alias = "sapiente";
                                pages = new String[]{{
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                    add("maiores"),
                                }};
                                text = "molestiae";
                            }}),
                        }};
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