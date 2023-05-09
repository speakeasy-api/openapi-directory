<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequest;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequestBody;
import org.openapis.openapi.models.operations.BatchExecuteStatementResponse;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqlParameter;
import org.openapis.openapi.models.shared.TypeHintEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest(                new BatchExecuteStatementRequestBody("provident", "distinctio", "quibusdam") {{
                                database = "unde";
                                parameterSets = new org.openapis.openapi.models.shared.SqlParameter[][]{{
                                    add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                                        add(new SqlParameter() {{
                                            name = "Ben Mueller";
                                            typeHint = TypeHintEnum.TIMESTAMP;
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
                                                        add(false),
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(9636.63),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(383441L),
                                                        add(477665L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("placeat"),
                                                        add("voluptatum"),
                                                        add("iusto"),
                                                        add("excepturi"),
                                                    }};
                                                }};
                                                blobValue = "nisi";
                                                booleanValue = false;
                                                doubleValue = 9255.97;
                                                isNull = false;
                                                longValue = 836079L;
                                                stringValue = "ab";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Mrs. Marie O'Connell";
                                            typeHint = TypeHintEnum.DECIMAL;
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
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(8700.88),
                                                        add(9786.19),
                                                        add(4736.08),
                                                        add(7991.59),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(461479L),
                                                        add(520478L),
                                                        add(780529L),
                                                        add(678880L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("nam"),
                                                    }};
                                                }};
                                                blobValue = "officia";
                                                booleanValue = false;
                                                doubleValue = 5820.2;
                                                isNull = false;
                                                longValue = 143353L;
                                                stringValue = "deleniti";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Ms. Earnest Lebsack";
                                            typeHint = TypeHintEnum.UUID;
                                            value = new Field() {{
                                                arrayValue = new ArrayValue() {{
                                                    arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                                        add(new ArrayValue() {{}}),
                                                    }};
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                        add(false),
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(4561.5),
                                                        add(2165.5),
                                                        add(5684.34),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(18789L),
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
                                                longValue = 616934L;
                                                stringValue = "laboriosam";
                                            }};
                                        }}),
                                    }}),
                                    add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                                        add(new SqlParameter() {{
                                            name = "Wilbur Kirlin";
                                            typeHint = TypeHintEnum.TIMESTAMP;
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
                                                        add(602.25),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(666767L),
                                                        add(653140L),
                                                        add(670638L),
                                                        add(170909L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("corporis"),
                                                    }};
                                                }};
                                                blobValue = "explicabo";
                                                booleanValue = false;
                                                doubleValue = 7506.86;
                                                isNull = false;
                                                longValue = 315428L;
                                                stringValue = "omnis";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Ms. Cathy Marks";
                                            typeHint = TypeHintEnum.DECIMAL;
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
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(2088.76),
                                                        add(6350.59),
                                                        add(1613.09),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(653108L),
                                                        add(581850L),
                                                        add(253291L),
                                                        add(414369L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("molestiae"),
                                                        add("velit"),
                                                    }};
                                                }};
                                                blobValue = "error";
                                                booleanValue = false;
                                                doubleValue = 1589.69;
                                                isNull = false;
                                                longValue = 338007L;
                                                stringValue = "vitae";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Matt Hamill";
                                            typeHint = TypeHintEnum.UUID;
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
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(8209.94),
                                                        add(135.71),
                                                        add(971.01),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(837945L),
                                                        add(673660L),
                                                        add(96098L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("voluptatibus"),
                                                        add("vero"),
                                                        add("nihil"),
                                                        add("praesentium"),
                                                    }};
                                                }};
                                                blobValue = "voluptatibus";
                                                booleanValue = false;
                                                doubleValue = 557.14;
                                                isNull = false;
                                                longValue = 604846L;
                                                stringValue = "voluptate";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Thomas Batz";
                                            typeHint = TypeHintEnum.DECIMAL;
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
                                                        add(4808.94),
                                                        add(1187.27),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(317983L),
                                                        add(880476L),
                                                        add(414263L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("quae"),
                                                        add("ipsum"),
                                                        add("quidem"),
                                                        add("molestias"),
                                                    }};
                                                }};
                                                blobValue = "excepturi";
                                                booleanValue = false;
                                                doubleValue = 8651.03;
                                                isNull = false;
                                                longValue = 265389L;
                                                stringValue = "praesentium";
                                            }};
                                        }}),
                                    }}),
                                    add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                                        add(new SqlParameter() {{
                                            name = "Carl Waelchi DVM";
                                            typeHint = TypeHintEnum.UUID;
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
                                                        add(8423.42),
                                                        add(1317.97),
                                                        add(6471.74),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(841386L),
                                                        add(289406L),
                                                        add(264730L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("aliquid"),
                                                    }};
                                                }};
                                                blobValue = "cupiditate";
                                                booleanValue = false;
                                                doubleValue = 5528.22;
                                                isNull = false;
                                                longValue = 20107L;
                                                stringValue = "magni";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Vernon Abshire";
                                            typeHint = TypeHintEnum.DATE;
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
                                                        add(2884.76),
                                                        add(9621.89),
                                                        add(4332.88),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(756107L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("aliquid"),
                                                        add("provident"),
                                                        add("necessitatibus"),
                                                    }};
                                                }};
                                                blobValue = "sint";
                                                booleanValue = false;
                                                doubleValue = 6389.21;
                                                isNull = false;
                                                longValue = 223081L;
                                                stringValue = "debitis";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Wilbur King";
                                            typeHint = TypeHintEnum.DECIMAL;
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
                                                        add(7670.24),
                                                        add(8137.98),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(396506L),
                                                        add(675439L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("non"),
                                                        add("occaecati"),
                                                        add("enim"),
                                                        add("accusamus"),
                                                    }};
                                                }};
                                                blobValue = "delectus";
                                                booleanValue = false;
                                                doubleValue = 6925.32;
                                                isNull = false;
                                                longValue = 588465L;
                                                stringValue = "nam";
                                            }};
                                        }}),
                                    }}),
                                    add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                                        add(new SqlParameter() {{
                                            name = "Jaime Will";
                                            typeHint = TypeHintEnum.TIMESTAMP;
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
                                                        add(4748.67),
                                                        add(191.93),
                                                        add(4701.32),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(716075L),
                                                        add(660174L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("labore"),
                                                        add("suscipit"),
                                                    }};
                                                }};
                                                blobValue = "natus";
                                                booleanValue = false;
                                                doubleValue = 7491.7;
                                                isNull = false;
                                                longValue = 428769L;
                                                stringValue = "vero";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Ms. Julie Gusikowski";
                                            typeHint = TypeHintEnum.DATE;
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
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(6532.01),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(652103L),
                                                        add(320997L),
                                                        add(431418L),
                                                        add(221262L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("odit"),
                                                        add("nemo"),
                                                        add("quasi"),
                                                        add("iure"),
                                                    }};
                                                }};
                                                blobValue = "doloribus";
                                                booleanValue = false;
                                                doubleValue = 8919.24;
                                                isNull = false;
                                                longValue = 260341L;
                                                stringValue = "maxime";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Mr. Andres King";
                                            typeHint = TypeHintEnum.TIMESTAMP;
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
                                                        add(8411.4),
                                                        add(1494.48),
                                                        add(9046.48),
                                                        add(8681.26),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(162493L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("natus"),
                                                        add("magni"),
                                                        add("sunt"),
                                                    }};
                                                }};
                                                blobValue = "quo";
                                                booleanValue = false;
                                                doubleValue = 8480.09;
                                                isNull = false;
                                                longValue = 864934L;
                                                stringValue = "maxime";
                                            }};
                                        }}),
                                    }}),
                                }};
                                schema = "ea";
                                transactionId = "excepturi";
                            }};) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
            }};            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->