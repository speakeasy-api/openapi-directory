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

            BatchGetRecordRequest req = new BatchGetRecordRequest() {{
                headers = new BatchGetRecordHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new BatchGetRecordRequestBody() {{
                    identifiers = new openapisdk.models.shared.BatchGetRecordIdentifier[]() {{
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "fugit";
                            featureNames = new String[]() {{
                                add("nihil"),
                            }};
                            recordIdentifiersValueAsString = new String[]() {{
                                add("dicta"),
                                add("debitis"),
                                add("voluptatum"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "et";
                            featureNames = new String[]() {{
                                add("dolorem"),
                                add("et"),
                                add("voluptate"),
                            }};
                            recordIdentifiersValueAsString = new String[]() {{
                                add("vitae"),
                                add("totam"),
                                add("dolores"),
                            }};
                        }}),
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "illum";
                            featureNames = new String[]() {{
                                add("vel"),
                            }};
                            recordIdentifiersValueAsString = new String[]() {{
                                add("dolore"),
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