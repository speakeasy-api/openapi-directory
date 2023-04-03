<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest() {{
                requestBody = new BatchExecuteStatementRequestBody() {{
                    database = "corrupti";
                    parameterSets = new org.openapis.openapi.models.shared.SqlParameter[][]{{
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "quibusdam";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(4236.55),
                                            add(6235.64),
                                            add(6458.94),
                                            add(3843.82),
                                        }};
                                        longValues = new Long[]{{
                                            add(297534),
                                            add(891773),
                                        }};
                                        stringValues = new String[]{{
                                            add("delectus"),
                                        }};
                                    }};
                                    blobValue = "tempora";
                                    booleanValue = false;
                                    doubleValue = 3834.41;
                                    isNull = false;
                                    longValue = 477665;
                                    stringValue = "minus";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "placeat";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(9255.97),
                                            add(8360.79),
                                        }};
                                        longValues = new Long[]{{
                                            add(337396),
                                        }};
                                        stringValues = new String[]{{
                                            add("deserunt"),
                                        }};
                                    }};
                                    blobValue = "perferendis";
                                    booleanValue = false;
                                    doubleValue = 3682.41;
                                    isNull = false;
                                    longValue = 832620;
                                    stringValue = "sapiente";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "quo";
                                typeHint = "JSON";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
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
                                            add(4736.08),
                                            add(7991.59),
                                            add(8009.11),
                                            add(4614.79),
                                        }};
                                        longValues = new Long[]{{
                                            add(780529),
                                            add(678880),
                                            add(118274),
                                        }};
                                        stringValues = new String[]{{
                                            add("officia"),
                                            add("occaecati"),
                                            add("fugit"),
                                        }};
                                    }};
                                    blobValue = "deleniti";
                                    booleanValue = false;
                                    doubleValue = 9446.69;
                                    isNull = false;
                                    longValue = 758616;
                                    stringValue = "totam";
                                }};
                            }}),
                        }}),
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "commodi";
                                typeHint = "TIMESTAMP";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(7369.18),
                                            add(4561.5),
                                            add(2165.5),
                                            add(5684.34),
                                        }};
                                        longValues = new Long[]{{
                                            add(18789),
                                        }};
                                        stringValues = new String[]{{
                                            add("natus"),
                                            add("sed"),
                                        }};
                                    }};
                                    blobValue = "iste";
                                    booleanValue = false;
                                    doubleValue = 2223.21;
                                    isNull = false;
                                    longValue = 616934;
                                    stringValue = "laboriosam";
                                }};
                            }}),
                        }}),
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "saepe";
                                typeHint = "TIME";
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
                                            add(4370.32),
                                            add(9023.49),
                                            add(6976.31),
                                        }};
                                        longValues = new Long[]{{
                                            add(60225),
                                        }};
                                        stringValues = new String[]{{
                                            add("est"),
                                            add("mollitia"),
                                            add("laborum"),
                                            add("dolores"),
                                        }};
                                    }};
                                    blobValue = "dolorem";
                                    booleanValue = false;
                                    doubleValue = 3581.52;
                                    isNull = false;
                                    longValue = 128926;
                                    stringValue = "nobis";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "enim";
                                typeHint = "DATE";
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
                                            add(384.25),
                                            add(4386.01),
                                            add(6342.74),
                                        }};
                                        longValues = new Long[]{{
                                            add(958950),
                                            add(102044),
                                            add(652790),
                                            add(208876),
                                        }};
                                        stringValues = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                    }};
                                    blobValue = "occaecati";
                                    booleanValue = false;
                                    doubleValue = 2532.91;
                                    isNull = false;
                                    longValue = 414369;
                                    stringValue = "quam";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "molestiae";
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
                                        }};
                                        doubleValues = new Double[]{{
                                            add(1103.75),
                                            add(6747.52),
                                        }};
                                        longValues = new Long[]{{
                                            add(317202),
                                            add(138183),
                                            add(778346),
                                        }};
                                        stringValues = new String[]{{
                                            add("tenetur"),
                                        }};
                                    }};
                                    blobValue = "ipsam";
                                    booleanValue = false;
                                    doubleValue = 6625.27;
                                    isNull = false;
                                    longValue = 820994;
                                    stringValue = "aut";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "quasi";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(9719.45),
                                        }};
                                        longValues = new Long[]{{
                                            add(878194),
                                            add(468651),
                                            add(509624),
                                            add(976762),
                                        }};
                                        stringValues = new String[]{{
                                            add("omnis"),
                                        }};
                                    }};
                                    blobValue = "voluptate";
                                    booleanValue = false;
                                    doubleValue = 7392.64;
                                    isNull = false;
                                    longValue = 19987;
                                    stringValue = "doloremque";
                                }};
                            }}),
                        }}),
                    }};
                    resourceArn = "reprehenderit";
                    schema = "ut";
                    secretArn = "maiores";
                    sql = "dicta";
                    transactionId = "corporis";
                }};
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }}            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->