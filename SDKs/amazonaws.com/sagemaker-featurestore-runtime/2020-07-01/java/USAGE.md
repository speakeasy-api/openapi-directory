<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetRecordRequest;
import org.openapis.openapi.models.operations.BatchGetRecordRequestBody;
import org.openapis.openapi.models.operations.BatchGetRecordResponse;
import org.openapis.openapi.models.shared.BatchGetRecordIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetRecordRequest req = new BatchGetRecordRequest(                new BatchGetRecordRequestBody(                new org.openapis.openapi.models.shared.BatchGetRecordIdentifier[]{{
                                                add(new BatchGetRecordIdentifier("suscipit",                 new String[]{{
                                                                    add("magnam"),
                                                                    add("debitis"),
                                                                }}) {{
                                                    featureGroupName = "distinctio";
                                                    featureNames = new String[]{{
                                                        add("unde"),
                                                        add("nulla"),
                                                        add("corrupti"),
                                                        add("illum"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("error"),
                                                        add("deserunt"),
                                                    }};
                                                }}),
                                                add(new BatchGetRecordIdentifier("recusandae",                 new String[]{{
                                                                    add("ab"),
                                                                    add("quis"),
                                                                    add("veritatis"),
                                                                    add("deserunt"),
                                                                }}) {{
                                                    featureGroupName = "ipsa";
                                                    featureNames = new String[]{{
                                                        add("tempora"),
                                                        add("suscipit"),
                                                        add("molestiae"),
                                                        add("minus"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("voluptatum"),
                                                        add("iusto"),
                                                        add("excepturi"),
                                                        add("nisi"),
                                                    }};
                                                }}),
                                                add(new BatchGetRecordIdentifier("molestiae",                 new String[]{{
                                                                    add("quod"),
                                                                    add("esse"),
                                                                    add("totam"),
                                                                    add("porro"),
                                                                }}) {{
                                                    featureGroupName = "perferendis";
                                                    featureNames = new String[]{{
                                                        add("repellendus"),
                                                        add("sapiente"),
                                                    }};
                                                    recordIdentifiersValueAsString = new String[]{{
                                                        add("odit"),
                                                        add("at"),
                                                        add("at"),
                                                        add("maiores"),
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            BatchGetRecordResponse res = sdk.batchGetRecord(req);

            if (res.batchGetRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->