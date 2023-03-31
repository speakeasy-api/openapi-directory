<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetItemQueryParams;
import org.openapis.openapi.models.operations.BatchGetItemXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchGetItemHeaders;
import org.openapis.openapi.models.operations.BatchGetItemRequest;
import org.openapis.openapi.models.operations.BatchGetItemResponse;
import org.openapis.openapi.models.shared.BatchGetItemInput;
import org.openapis.openapi.models.shared.KeysAndAttributes;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.AttributeValue;

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

            BatchGetItemRequest req = new BatchGetItemRequest() {{
                queryParams = new BatchGetItemQueryParams() {{
                    requestItems = "corrupti";
                }};
                headers = new BatchGetItemHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                    xAmzTarget = "DynamoDB_20111205.BatchGetItem";
                }};
                request = new BatchGetItemInput() {{
                    requestItems = new java.util.HashMap<String, org.openapis.openapi.models.shared.KeysAndAttributes>() {{
                        put("error", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("suscipit"),
                                add("iure"),
                                add("magnam"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "ipsa";
                                        bs = new String[]{{
                                            add("tempora"),
                                            add("suscipit"),
                                            add("molestiae"),
                                            add("minus"),
                                        }};
                                        n = "placeat";
                                        ns = new String[]{{
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                        s = "recusandae";
                                        ss = new String[]{{
                                            add("ab"),
                                            add("quis"),
                                            add("veritatis"),
                                            add("deserunt"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "perferendis";
                                        bs = new String[]{{
                                            add("repellendus"),
                                            add("sapiente"),
                                        }};
                                        n = "quo";
                                        ns = new String[]{{
                                            add("at"),
                                        }};
                                        s = "at";
                                        ss = new String[]{{
                                            add("molestiae"),
                                            add("quod"),
                                            add("quod"),
                                            add("esse"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "totam";
                                        bs = new String[]{{
                                            add("dolorum"),
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }};
                                        n = "occaecati";
                                        ns = new String[]{{
                                            add("deleniti"),
                                        }};
                                        s = "hic";
                                        ss = new String[]{{
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                            add("molestiae"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "modi";
                                        bs = new String[]{{
                                            add("impedit"),
                                        }};
                                        n = "cum";
                                        ns = new String[]{{
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                        s = "aspernatur";
                                        ss = new String[]{{
                                            add("ad"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "natus";
                                        bs = new String[]{{
                                            add("iste"),
                                        }};
                                        n = "dolor";
                                        ns = new String[]{{
                                            add("laboriosam"),
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                        s = "fuga";
                                        ss = new String[]{{
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "iure";
                                        bs = new String[]{{
                                            add("quidem"),
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                        n = "est";
                                        ns = new String[]{{
                                            add("laborum"),
                                            add("dolores"),
                                            add("dolorem"),
                                        }};
                                        s = "corporis";
                                        ss = new String[]{{
                                            add("nobis"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "enim";
                                        bs = new String[]{{
                                            add("nemo"),
                                            add("minima"),
                                            add("excepturi"),
                                        }};
                                        n = "accusantium";
                                        ns = new String[]{{
                                            add("culpa"),
                                            add("doloribus"),
                                        }};
                                        s = "sapiente";
                                        ss = new String[]{{
                                            add("mollitia"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "dolorem";
                                        bs = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                        n = "occaecati";
                                        ns = new String[]{{
                                            add("commodi"),
                                            add("quam"),
                                        }};
                                        s = "molestiae";
                                        ss = new String[]{{
                                            add("error"),
                                        }};
                                    }};
                                }}),
                            }};
                        }});
                        put("quia", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("vitae"),
                                add("laborum"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "enim";
                                        bs = new String[]{{
                                            add("quo"),
                                        }};
                                        n = "sequi";
                                        ns = new String[]{{
                                            add("ipsam"),
                                            add("id"),
                                            add("possimus"),
                                            add("aut"),
                                        }};
                                        s = "quasi";
                                        ss = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "reiciendis";
                                        bs = new String[]{{
                                            add("vero"),
                                            add("nihil"),
                                            add("praesentium"),
                                            add("voluptatibus"),
                                        }};
                                        n = "ipsa";
                                        ns = new String[]{{
                                            add("voluptate"),
                                            add("cum"),
                                            add("perferendis"),
                                        }};
                                        s = "doloremque";
                                        ss = new String[]{{
                                            add("ut"),
                                            add("maiores"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "dicta";
                                        bs = new String[]{{
                                            add("dolore"),
                                            add("iusto"),
                                        }};
                                        n = "dicta";
                                        ns = new String[]{{
                                            add("enim"),
                                            add("accusamus"),
                                            add("commodi"),
                                        }};
                                        s = "repudiandae";
                                        ss = new String[]{{
                                            add("ipsum"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "quidem";
                                        bs = new String[]{{
                                            add("excepturi"),
                                            add("pariatur"),
                                            add("modi"),
                                        }};
                                        n = "praesentium";
                                        ns = new String[]{{
                                            add("voluptates"),
                                            add("quasi"),
                                            add("repudiandae"),
                                        }};
                                        s = "sint";
                                        ss = new String[]{{
                                            add("itaque"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "incidunt";
                                        bs = new String[]{{
                                            add("consequatur"),
                                            add("est"),
                                        }};
                                        n = "quibusdam";
                                        ns = new String[]{{
                                            add("deserunt"),
                                        }};
                                        s = "distinctio";
                                        ss = new String[]{{
                                            add("labore"),
                                            add("modi"),
                                            add("qui"),
                                            add("aliquid"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "cupiditate";
                                        bs = new String[]{{
                                            add("perferendis"),
                                            add("magni"),
                                            add("assumenda"),
                                        }};
                                        n = "ipsam";
                                        ns = new String[]{{
                                            add("fugit"),
                                        }};
                                        s = "dolorum";
                                        ss = new String[]{{
                                            add("tempora"),
                                            add("facilis"),
                                            add("tempore"),
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