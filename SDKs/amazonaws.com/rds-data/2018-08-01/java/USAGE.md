<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchExecuteStatementHeaders;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequestBody;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequest;
import org.openapis.openapi.models.operations.BatchExecuteStatementResponse;
import org.openapis.openapi.models.shared.SqlParameter;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.TypeHintEnum;

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
                }};
                request = new BatchExecuteStatementRequestBody() {{
                    database = "illum";
                    parameterSets = new org.openapis.openapi.models.shared.SqlParameter[][]{{
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "deserunt";
                                typeHint = "TIMESTAMP";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(567.13),
                                            add(9636.63),
                                            add(2726.56),
                                            add(3834.41),
                                        }};
                                        longValues = new Long[]{{
                                            add(791725),
                                            add(812169),
                                        }};
                                        stringValues = new String[]{{
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                    }};
                                    blobValue = "recusandae";
                                    booleanValue = false;
                                    doubleValue = 8360.79;
                                    isNull = false;
                                    longValue = 71036;
                                    stringValue = "quis";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "veritatis";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(9571.56),
                                            add(7781.57),
                                            add(1403.5),
                                            add(8700.13),
                                        }};
                                        longValues = new Long[]{{
                                            add(978619),
                                            add(473608),
                                            add(799159),
                                            add(800911),
                                        }};
                                        stringValues = new String[]{{
                                            add("totam"),
                                            add("porro"),
                                        }};
                                    }};
                                    blobValue = "dolorum";
                                    booleanValue = false;
                                    doubleValue = 1182.74;
                                    isNull = false;
                                    longValue = 720633;
                                    stringValue = "officia";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "occaecati";
                                typeHint = "JSON";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(5218.48),
                                            add(1059.07),
                                            add(4146.62),
                                            add(4736),
                                        }};
                                        longValues = new Long[]{{
                                            add(186332),
                                            add(774234),
                                        }};
                                        stringValues = new String[]{{
                                            add("esse"),
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                    }};
                                    blobValue = "aspernatur";
                                    booleanValue = false;
                                    doubleValue = 187.89;
                                    isNull = false;
                                    longValue = 324141;
                                    stringValue = "natus";
                                }};
                            }}),
                        }}),
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "iste";
                                typeHint = "UUID";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(9025.99),
                                            add(6818.2),
                                            add(4499.5),
                                            add(3595.08),
                                        }};
                                        longValues = new Long[]{{
                                            add(437032),
                                            add(902349),
                                            add(697631),
                                        }};
                                        stringValues = new String[]{{
                                            add("ipsa"),
                                        }};
                                    }};
                                    blobValue = "reiciendis";
                                    booleanValue = false;
                                    doubleValue = 6667.67;
                                    isNull = false;
                                    longValue = 653140;
                                    stringValue = "laborum";
                                }};
                            }}),
                        }}),
                    }};
                    resourceArn = "dolores";
                    schema = "dolorem";
                    secretArn = "corporis";
                    sql = "explicabo";
                    transactionId = "nobis";
                }};
            }};            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->