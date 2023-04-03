<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetRecordRequestBody;
import org.openapis.openapi.models.operations.BatchGetRecordRequest;
import org.openapis.openapi.models.operations.BatchGetRecordResponse;
import org.openapis.openapi.models.shared.BatchGetRecordIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetRecordRequest req = new BatchGetRecordRequest() {{
                requestBody = new BatchGetRecordRequestBody() {{
                    identifiers = new org.openapis.openapi.models.shared.BatchGetRecordIdentifier[]{{
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "provident";
                            featureNames = new String[]{{
                                add("quibusdam"),
                                add("unde"),
                                add("nulla"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "deserunt";
                            featureNames = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "molestiae";
                            featureNames = new String[]{{
                                add("placeat"),
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                            }};
                            recordIdentifiersValueAsString = new String[]{{
                                add("recusandae"),
                                add("temporibus"),
                            }};
                        }}),
                    }};
                }};
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }}            

            BatchGetRecordResponse res = sdk.batchGetRecord(req);

            if (res.batchGetRecordResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->