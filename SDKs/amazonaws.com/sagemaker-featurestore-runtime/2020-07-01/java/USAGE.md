<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetRecordHeaders;
import org.openapis.openapi.models.operations.BatchGetRecordRequestBody;
import org.openapis.openapi.models.operations.BatchGetRecordRequest;
import org.openapis.openapi.models.operations.BatchGetRecordResponse;
import org.openapis.openapi.models.shared.BatchGetRecordIdentifier;

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

            BatchGetRecordRequest req = new BatchGetRecordRequest() {{
                headers = new BatchGetRecordHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchGetRecordRequestBody() {{
                    identifiers = new org.openapis.openapi.models.shared.BatchGetRecordIdentifier[]{{
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "vel";
                            featureNames = new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("debitis"),
                                add("ipsa"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "delectus";
                            featureNames = new String[]{{
                                add("suscipit"),
                                add("molestiae"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("placeat"),
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "nisi";
                            featureNames = new String[]{{
                                add("temporibus"),
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("perferendis"),
                                add("ipsam"),
                                add("repellendus"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "sapiente";
                            featureNames = new String[]{{
                                add("odit"),
                                add("at"),
                                add("at"),
                                add("maiores"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("quod"),
                                add("quod"),
                            }};
                        }}),
                    }};
                }};
            }};            

            BatchGetRecordResponse res = sdk.batchGetRecord(req);

            if (res.batchGetRecordResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->