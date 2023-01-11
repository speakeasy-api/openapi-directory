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
                    requestItems = "sit";
                }};
                headers = new BatchGetItemHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                    xAmzTarget = "DynamoDB_20111205.BatchGetItem";
                }};
                request = new BatchGetItemInput() {{
                    requestItems = new java.util.HashMap<String, openapisdk.models.shared.KeysAndAttributes>() {{
                        put("nihil", new KeysAndAttributes() {{
                            attributesToGet = new String[]() {{
                                add("dicta"),
                                add("debitis"),
                                add("voluptatum"),
                            }};
                            consistentRead = false;
                            keys = new openapisdk.models.shared.Key[]() {{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "dolorem";
                                        bs = new String[]() {{
                                            add("voluptate"),
                                            add("iste"),
                                        }};
                                        n = "vitae";
                                        ns = new String[]() {{
                                            add("dolores"),
                                            add("illum"),
                                            add("debitis"),
                                        }};
                                        s = "vel";
                                        ss = new String[]() {{
                                            add("dolore"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "id";
                                        bs = new String[]() {{
                                            add("accusantium"),
                                        }};
                                        n = "totam";
                                        ns = new String[]() {{
                                            add("quis"),
                                            add("est"),
                                        }};
                                        s = "aut";
                                        ss = new String[]() {{
                                            add("non"),
                                            add("voluptas"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "omnis";
                                        bs = new String[]() {{
                                            add("illo"),
                                        }};
                                        n = "sed";
                                        ns = new String[]() {{
                                            add("autem"),
                                            add("consectetur"),
                                        }};
                                        s = "nobis";
                                        ss = new String[]() {{
                                            add("qui"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "recusandae";
                                        bs = new String[]() {{
                                            add("ipsum"),
                                            add("eveniet"),
                                        }};
                                        n = "modi";
                                        ns = new String[]() {{
                                            add("inventore"),
                                        }};
                                        s = "ut";
                                        ss = new String[]() {{
                                            add("aut"),
                                            add("reprehenderit"),
                                            add("tempore"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "maiores";
                                        bs = new String[]() {{
                                            add("dolor"),
                                            add("beatae"),
                                            add("veritatis"),
                                        }};
                                        n = "in";
                                        ns = new String[]() {{
                                            add("omnis"),
                                            add("ipsum"),
                                            add("ex"),
                                        }};
                                        s = "dolores";
                                        ss = new String[]() {{
                                            add("vel"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "rerum";
                                        bs = new String[]() {{
                                            add("voluptas"),
                                            add("quam"),
                                        }};
                                        n = "reprehenderit";
                                        ns = new String[]() {{
                                            add("qui"),
                                        }};
                                        s = "unde";
                                        ss = new String[]() {{
                                            add("autem"),
                                            add("qui"),
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