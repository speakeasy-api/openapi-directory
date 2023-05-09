<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequest;
import org.openapis.openapi.models.operations.BatchExecuteStatementResponse;
import org.openapis.openapi.models.operations.BatchExecuteStatementXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.BatchExecuteStatementInput;
import org.openapis.openapi.models.shared.BatchStatementRequest;
import org.openapis.openapi.models.shared.ReturnConsumedCapacityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest(                new BatchExecuteStatementInput(                new org.openapis.openapi.models.shared.BatchStatementRequest[]{{
                                                add(new BatchStatementRequest("esse") {{
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
                                                add(new BatchStatementRequest("saepe") {{
                                                    consistentRead = false;
                                                    parameters = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                                        add(new AttributeValue() {{
                                                            b = "excepturi";
                                                            bool = false;
                                                            bs = new String[]{{
                                                                add("perferendis"),
                                                            }};
                                                            l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                                                add(new AttributeValue() {{}}),
                                                                add(new AttributeValue() {{}}),
                                                            }};
                                                            m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                put("sed", new AttributeValue() {{}});
                                                                put("iste", new AttributeValue() {{}});
                                                                put("dolor", new AttributeValue() {{}});
                                                            }};
                                                            n = "natus";
                                                            ns = new String[]{{
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
                                                    }};
                                                    statement = "iure";
                                                }}),
                                                add(new BatchStatementRequest("error") {{
                                                    consistentRead = false;
                                                    parameters = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                                        add(new AttributeValue() {{
                                                            b = "architecto";
                                                            bool = false;
                                                            bs = new String[]{{
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
                                                        add(new AttributeValue() {{
                                                            b = "accusantium";
                                                            bool = false;
                                                            bs = new String[]{{
                                                                add("culpa"),
                                                                add("doloribus"),
                                                            }};
                                                            l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                                                add(new AttributeValue() {{}}),
                                                                add(new AttributeValue() {{}}),
                                                                add(new AttributeValue() {{}}),
                                                                add(new AttributeValue() {{}}),
                                                            }};
                                                            m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                put("mollitia", new AttributeValue() {{}});
                                                            }};
                                                            n = "dolorem";
                                                            ns = new String[]{{
                                                                add("consequuntur"),
                                                                add("repellat"),
                                                                add("mollitia"),
                                                            }};
                                                            null_ = false;
                                                            s = "occaecati";
                                                            ss = new String[]{{
                                                                add("commodi"),
                                                                add("quam"),
                                                            }};
                                                        }}),
                                                        add(new AttributeValue() {{
                                                            b = "molestiae";
                                                            bool = false;
                                                            bs = new String[]{{
                                                                add("error"),
                                                            }};
                                                            l = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                                                add(new AttributeValue() {{}}),
                                                            }};
                                                            m = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                put("vitae", new AttributeValue() {{}});
                                                                put("laborum", new AttributeValue() {{}});
                                                            }};
                                                            n = "animi";
                                                            ns = new String[]{{
                                                                add("odit"),
                                                                add("quo"),
                                                            }};
                                                            null_ = false;
                                                            s = "sequi";
                                                            ss = new String[]{{
                                                                add("ipsam"),
                                                                add("id"),
                                                                add("possimus"),
                                                                add("aut"),
                                                            }};
                                                        }}),
                                                    }};
                                                    statement = "quasi";
                                                }}),
                                            }}) {{
                                returnConsumedCapacity = ReturnConsumedCapacityEnum.NONE;
                            }};, BatchExecuteStatementXAmzTargetEnum.DYNAMO_DB20120810_BATCH_EXECUTE_STATEMENT) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
            }};            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->