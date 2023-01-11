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
                    xAmzAlgorithm = "alias";
                    xAmzContentSha256 = "reprehenderit";
                    xAmzCredential = "non";
                    xAmzDate = "quia";
                    xAmzSecurityToken = "sed";
                    xAmzSignature = "consequatur";
                    xAmzSignedHeaders = "fuga";
                }};
                request = new BatchGetRecordRequestBody() {{
                    identifiers = new openapisdk.models.shared.BatchGetRecordIdentifier[]() {{
                        add(new BatchGetRecordIdentifier() {{
                            featureGroupName = "aliquid";
                            featureNames = new String[]() {{
                                add("unde"),
                                add("ducimus"),
                                add("ut"),
                            }};
                            recordIdentifiersValueAsString = new String[]() {{
                                add("quidem"),
                                add("nulla"),
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