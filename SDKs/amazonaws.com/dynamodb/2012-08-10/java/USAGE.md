<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchExecuteStatementXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchExecuteStatementHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest() {{
                headers = new BatchExecuteStatementHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "DynamoDB_20120810.BatchExecuteStatement";
                }};
                request = new BatchExecuteStatementInput() {{
                    returnConsumedCapacity = "NONE";
                    statements = new org.openapis.openapi.models.shared.BatchStatementRequest[]{{
                        add(new BatchStatementRequest() {{
                            consistentRead = false;
                            parameters = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                add(new AttributeValue() {{
                                    b = "deserunt";
                                    bool = false;
                                    bs = new String[]{{
                                        add("iure"),
                                        add("magnam"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("delectus", new AttributeValue() {{}});
                                    }};
                                    n = "tempora";
                                    ns = new String[]{{
                                        add("molestiae"),
                                        add("minus"),
                                    }};
                                    null_ = false;
                                    s = "placeat";
                                    ss = new String[]{{
                                        add("iusto"),
                                        add("excepturi"),
                                        add("nisi"),
                                    }};
                                }}),
                                add(new AttributeValue() {{
                                    b = "recusandae";
                                    bool = false;
                                    bs = new String[]{{
                                        add("ab"),
                                        add("quis"),
                                        add("veritatis"),
                                        add("deserunt"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("repellendus", new AttributeValue() {{}});
                                        put("sapiente", new AttributeValue() {{}});
                                    }};
                                    n = "quo";
                                    ns = new String[]{{
                                        add("at"),
                                    }};
                                    null_ = false;
                                    s = "at";
                                    ss = new String[]{{
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                        add("esse"),
                                    }};
                                }}),
                                add(new AttributeValue() {{
                                    b = "totam";
                                    bool = false;
                                    bs = new String[]{{
                                        add("dolorum"),
                                        add("dicta"),
                                        add("nam"),
                                        add("officia"),
                                    }};
                                    l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                        add(new AttributeValue() {{}}),
                                    }};
                                    m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
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
                    }};
                }};
            }};            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->