<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetItemXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetItemRequest req = new BatchGetItemRequest() {{
                batchGetItemInput = new BatchGetItemInput() {{
                    requestItems = new java.util.HashMap<String, org.openapis.openapi.models.shared.KeysAndAttributes>() {{
                        put("provident", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("quibusdam"),
                                add("unde"),
                                add("nulla"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "illum";
                                        bs = new String[]{{
                                            add("error"),
                                            add("deserunt"),
                                        }};
                                        n = "suscipit";
                                        ns = new String[]{{
                                            add("magnam"),
                                            add("debitis"),
                                        }};
                                        s = "ipsa";
                                        ss = new String[]{{
                                            add("tempora"),
                                            add("suscipit"),
                                            add("molestiae"),
                                            add("minus"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "placeat";
                                        bs = new String[]{{
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                        n = "recusandae";
                                        ns = new String[]{{
                                            add("ab"),
                                            add("quis"),
                                            add("veritatis"),
                                            add("deserunt"),
                                        }};
                                        s = "perferendis";
                                        ss = new String[]{{
                                            add("repellendus"),
                                            add("sapiente"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "quo";
                                        bs = new String[]{{
                                            add("at"),
                                        }};
                                        n = "at";
                                        ns = new String[]{{
                                            add("molestiae"),
                                            add("quod"),
                                            add("quod"),
                                            add("esse"),
                                        }};
                                        s = "totam";
                                        ss = new String[]{{
                                            add("dolorum"),
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "occaecati";
                                        bs = new String[]{{
                                            add("deleniti"),
                                        }};
                                        n = "hic";
                                        ns = new String[]{{
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                            add("molestiae"),
                                        }};
                                        s = "modi";
                                        ss = new String[]{{
                                            add("impedit"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "cum";
                                        bs = new String[]{{
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                        n = "aspernatur";
                                        ns = new String[]{{
                                            add("ad"),
                                        }};
                                        s = "natus";
                                        ss = new String[]{{
                                            add("iste"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "dolor";
                                        bs = new String[]{{
                                            add("laboriosam"),
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                        n = "fuga";
                                        ns = new String[]{{
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                        s = "iure";
                                        ss = new String[]{{
                                            add("quidem"),
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                    }};
                                }}),
                            }};
                        }});
                        put("est", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("laborum"),
                                add("dolores"),
                                add("dolorem"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "explicabo";
                                        bs = new String[]{{
                                            add("enim"),
                                            add("omnis"),
                                            add("nemo"),
                                            add("minima"),
                                        }};
                                        n = "excepturi";
                                        ns = new String[]{{
                                            add("iure"),
                                        }};
                                        s = "culpa";
                                        ss = new String[]{{
                                            add("sapiente"),
                                            add("architecto"),
                                            add("mollitia"),
                                            add("dolorem"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "culpa";
                                        bs = new String[]{{
                                            add("repellat"),
                                        }};
                                        n = "mollitia";
                                        ns = new String[]{{
                                            add("numquam"),
                                            add("commodi"),
                                            add("quam"),
                                        }};
                                        s = "molestiae";
                                        ss = new String[]{{
                                            add("error"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "quia";
                                        bs = new String[]{{
                                            add("vitae"),
                                            add("laborum"),
                                        }};
                                        n = "animi";
                                        ns = new String[]{{
                                            add("odit"),
                                            add("quo"),
                                        }};
                                        s = "sequi";
                                        ss = new String[]{{
                                            add("ipsam"),
                                            add("id"),
                                            add("possimus"),
                                            add("aut"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "quasi";
                                        bs = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                        n = "reiciendis";
                                        ns = new String[]{{
                                            add("vero"),
                                            add("nihil"),
                                            add("praesentium"),
                                            add("voluptatibus"),
                                        }};
                                        s = "ipsa";
                                        ss = new String[]{{
                                            add("voluptate"),
                                            add("cum"),
                                            add("perferendis"),
                                        }};
                                    }};
                                }}),
                            }};
                        }});
                        put("doloremque", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("ut"),
                                add("maiores"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "corporis";
                                        bs = new String[]{{
                                            add("iusto"),
                                            add("dicta"),
                                        }};
                                        n = "harum";
                                        ns = new String[]{{
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
                            }};
                        }});
                    }};
                }};
                requestItems = "incidunt";
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
                xAmzTarget = "DynamoDB_20111205.BatchGetItem";
            }}            

            BatchGetItemResponse res = sdk.batchGetItem(req);

            if (res.batchGetItemOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->