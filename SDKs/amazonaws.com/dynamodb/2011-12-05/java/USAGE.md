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

            BatchGetItemRequest req = new BatchGetItemRequest() {{
                queryParams = new BatchGetItemQueryParams() {{
                    requestItems = "occaecati";
                }};
                headers = new BatchGetItemHeaders() {{
                    xAmzAlgorithm = "error";
                    xAmzContentSha256 = "aliquam";
                    xAmzCredential = "eaque";
                    xAmzDate = "non";
                    xAmzSecurityToken = "earum";
                    xAmzSignature = "voluptatem";
                    xAmzSignedHeaders = "impedit";
                    xAmzTarget = "DynamoDB_20111205.BatchGetItem";
                }};
                request = new BatchGetItemInput() {{
                    requestItems = new java.util.HashMap<String, openapisdk.models.shared.KeysAndAttributes>() {{
                        put("ut", new KeysAndAttributes() {{
                            attributesToGet = new String[]() {{
                                add("ab"),
                                add("consequatur"),
                            }};
                            consistentRead = true;
                            keys = new openapisdk.models.shared.Key[]() {{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "fuga";
                                        bs = new String[]() {{
                                            add("neque"),
                                        }};
                                        n = "necessitatibus";
                                        ns = new String[]() {{
                                            add("non"),
                                            add("sit"),
                                        }};
                                        s = "est";
                                        ss = new String[]() {{
                                            add("in"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "mollitia";
                                        bs = new String[]() {{
                                            add("et"),
                                        }};
                                        n = "consequuntur";
                                        ns = new String[]() {{
                                            add("officia"),
                                            add("quidem"),
                                            add("quasi"),
                                        }};
                                        s = "odit";
                                        ss = new String[]() {{
                                            add("aperiam"),
                                            add("omnis"),
                                        }};
                                    }};
                                }}),
                            }};
                        }});
                    }};
                }};
            }};

            BatchGetItemResponse res = sdk.batchGetItem(req);

            if (res.batchGetItemOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->