<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchExecuteStatementXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequest;
import org.openapis.openapi.models.operations.BatchExecuteStatementResponse;
import org.openapis.openapi.models.shared.BatchExecuteStatementInput;
import org.openapis.openapi.models.shared.BatchStatementRequest;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.ReturnConsumedCapacityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest() {{
                batchExecuteStatementInput = new BatchExecuteStatementInput() {{
                    returnConsumedCapacity = "TOTAL";
                    statements = new org.openapis.openapi.models.shared.BatchStatementRequest[]{{
                        add(new BatchStatementRequest() {{
                            consistentRead = false;
                            parameters = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                add(new AttributeValue() {{
                                    b = "quibusdam";
                                    bool = false;
                                    bs = new String[]{{
                                        add("nulla"),
                                        add("corrupti"),
                                        add("illum"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("deserunt", new AttributeValue() {{}});
                                        put("suscipit", new AttributeValue() {{}});
                                        put("iure", new AttributeValue() {{}});
                                    }};
                                    n = "magnam";
                                    ns = new String[]{{
                                        add("ipsa"),
                                        add("delectus"),
                                        add("tempora"),
                                        add("suscipit"),
                                    }};
                                    null_ = false;
                                    s = "molestiae";
                                    ss = new String[]{{
                                        add("placeat"),
                                        add("voluptatum"),
                                        add("iusto"),
                                        add("excepturi"),
                                    }};
                                }}),
                                add(new AttributeValue() {{
                                    b = "nisi";
                                    bool = false;
                                    bs = new String[]{{
                                        add("temporibus"),
                                        add("ab"),
                                        add("quis"),
                                        add("veritatis"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("ipsam", new AttributeValue() {{}});
                                    }};
                                    n = "repellendus";
                                    ns = new String[]{{
                                        add("quo"),
                                        add("odit"),
                                        add("at"),
                                        add("at"),
                                    }};
                                    null_ = false;
                                    s = "maiores";
                                    ss = new String[]{{
                                        add("quod"),
                                        add("quod"),
                                    }};
                                }}),
                                add(new AttributeValue() {{
                                    b = "esse";
                                    bool = false;
                                    bs = new String[]{{
                                        add("porro"),
                                        add("dolorum"),
                                        add("dicta"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("occaecati", new AttributeValue() {{}});
                                        put("fugit", new AttributeValue() {{}});
                                        put("deleniti", new AttributeValue() {{}});
                                    }};
                                    n = "hic";
                                    ns = new String[]{{
                                        add("totam"),
                                        add("beatae"),
                                        add("commodi"),
                                        add("molestiae"),
                                    }};
                                    null_ = false;
                                    s = "modi";
                                    ss = new String[]{{
                                        add("impedit"),
                                    }};
                                }}),
                            }};
                            statement = "cum";
                        }}),
                        add(new BatchStatementRequest() {{
                            consistentRead = false;
                            parameters = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                add(new AttributeValue() {{
                                    b = "ipsum";
                                    bool = false;
                                    bs = new String[]{{
                                        add("aspernatur"),
                                        add("perferendis"),
                                        add("ad"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("iste", new AttributeValue() {{}});
                                    }};
                                    n = "dolor";
                                    ns = new String[]{{
                                        add("laboriosam"),
                                        add("hic"),
                                        add("saepe"),
                                    }};
                                    null_ = false;
                                    s = "fuga";
                                    ss = new String[]{{
                                        add("corporis"),
                                        add("iste"),
                                    }};
                                }}),
                                add(new AttributeValue() {{
                                    b = "iure";
                                    bool = false;
                                    bs = new String[]{{
                                        add("quidem"),
                                        add("architecto"),
                                        add("ipsa"),
                                        add("reiciendis"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("laborum", new AttributeValue() {{}});
                                        put("dolores", new AttributeValue() {{}});
                                        put("dolorem", new AttributeValue() {{}});
                                    }};
                                    n = "corporis";
                                    ns = new String[]{{
                                        add("nobis"),
                                    }};
                                    null_ = false;
                                    s = "enim";
                                    ss = new String[]{{
                                        add("nemo"),
                                        add("minima"),
                                        add("excepturi"),
                                    }};
                                }}),
                            }};
                            statement = "accusantium";
                        }}),
                        add(new BatchStatementRequest() {{
                            consistentRead = false;
                            parameters = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                add(new AttributeValue() {{
                                    b = "culpa";
                                    bool = false;
                                    bs = new String[]{{
                                        add("sapiente"),
                                        add("architecto"),
                                        add("mollitia"),
                                        add("dolorem"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("repellat", new AttributeValue() {{}});
                                    }};
                                    n = "mollitia";
                                    ns = new String[]{{
                                        add("numquam"),
                                        add("commodi"),
                                        add("quam"),
                                    }};
                                    null_ = false;
                                    s = "molestiae";
                                    ss = new String[]{{
                                        add("error"),
                                    }};
                                }}),
                                add(new AttributeValue() {{
                                    b = "quia";
                                    bool = false;
                                    bs = new String[]{{
                                        add("vitae"),
                                        add("laborum"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("odit", new AttributeValue() {{}});
                                        put("quo", new AttributeValue() {{}});
                                    }};
                                    n = "sequi";
                                    ns = new String[]{{
                                        add("ipsam"),
                                        add("id"),
                                        add("possimus"),
                                        add("aut"),
                                    }};
                                    null_ = false;
                                    s = "quasi";
                                    ss = new String[]{{
                                        add("temporibus"),
                                        add("laborum"),
                                        add("quasi"),
                                    }};
                                }}),
                            }};
                            statement = "reiciendis";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
                xAmzTarget = "DynamoDB_20120810.BatchExecuteStatement";
            }}            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->