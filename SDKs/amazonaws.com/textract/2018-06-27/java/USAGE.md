<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AnalyzeDocumentXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnalyzeDocumentRequest req = new AnalyzeDocumentRequest() {{
                analyzeDocumentRequest = new AnalyzeDocumentRequest() {{
                    document = new Document() {{
                        bytes = "corrupti";
                        s3Object = new S3Object() {{
                            bucket = "provident";
                            name = "distinctio";
                            version = "quibusdam";
                        }};
                    }};
                    featureTypes = new org.openapis.openapi.models.shared.FeatureTypeEnum[]{{
                        add("SIGNATURES"),
                        add("QUERIES"),
                        add("SIGNATURES"),
                    }};
                    humanLoopConfig = new HumanLoopConfig() {{
                        dataAttributes = new HumanLoopDataAttributes() {{
                            contentClassifiers = new org.openapis.openapi.models.shared.ContentClassifierEnum[]{{
                                add("FreeOfAdultContent"),
                                add("FreeOfAdultContent"),
                            }};
                        }};
                        flowDefinitionArn = "suscipit";
                        humanLoopName = "iure";
                    }};
                    queriesConfig = new QueriesConfig() {{
                        queries = new org.openapis.openapi.models.shared.Query[]{{
                            add(new Query() {{
                                alias = "debitis";
                                pages = new String[]{{
                                    add("delectus"),
                                }};
                                text = "tempora";
                            }}),
                            add(new Query() {{
                                alias = "suscipit";
                                pages = new String[]{{
                                    add("minus"),
                                    add("placeat"),
                                }};
                                text = "voluptatum";
                            }}),
                        }};
                    }};
                }};
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
                xAmzTarget = "Textract.AnalyzeDocument";
            }}            

            AnalyzeDocumentResponse res = sdk.analyzeDocument(req);

            if (res.analyzeDocumentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->