<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyzeDocumentRequest;
import org.openapis.openapi.models.operations.AnalyzeDocumentResponse;
import org.openapis.openapi.models.operations.AnalyzeDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyzeDocumentRequest;
import org.openapis.openapi.models.shared.ContentClassifierEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.FeatureTypeEnum;
import org.openapis.openapi.models.shared.HumanLoopConfig;
import org.openapis.openapi.models.shared.HumanLoopDataAttributes;
import org.openapis.openapi.models.shared.QueriesConfig;
import org.openapis.openapi.models.shared.Query;
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

            AnalyzeDocumentRequest req = new AnalyzeDocumentRequest(                new AnalyzeDocumentRequest(                new Document() {{
                                                bytes = "provident";
                                                s3Object = new S3Object() {{
                                                    bucket = "distinctio";
                                                    name = "Stuart Stiedemann";
                                                    version = "vel";
                                                }};;
                                            }};,                 new org.openapis.openapi.models.shared.FeatureTypeEnum[]{{
                                                add(FeatureTypeEnum.QUERIES),
                                                add(FeatureTypeEnum.FORMS),
                                                add(FeatureTypeEnum.FORMS),
                                            }}) {{
                                humanLoopConfig = new HumanLoopConfig("magnam", "debitis") {{
                                    dataAttributes = new HumanLoopDataAttributes() {{
                                        contentClassifiers = new org.openapis.openapi.models.shared.ContentClassifierEnum[]{{
                                            add(ContentClassifierEnum.FREE_OF_ADULT_CONTENT),
                                        }};
                                    }};;
                                }};;
                                queriesConfig = new QueriesConfig(                new org.openapis.openapi.models.shared.Query[]{{
                                                    add(new Query("iusto") {{
                                                        alias = "suscipit";
                                                        pages = new String[]{{
                                                            add("minus"),
                                                            add("placeat"),
                                                        }};
                                                        text = "voluptatum";
                                                    }}),
                                                    add(new Query("quis") {{
                                                        alias = "excepturi";
                                                        pages = new String[]{{
                                                            add("recusandae"),
                                                            add("temporibus"),
                                                        }};
                                                        text = "ab";
                                                    }}),
                                                }});;
                            }};, AnalyzeDocumentXAmzTargetEnum.TEXTRACT_ANALYZE_DOCUMENT) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }};            

            AnalyzeDocumentResponse res = sdk.analyzeDocument(req);

            if (res.analyzeDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->