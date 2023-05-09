<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchCreateTableRowsRequest;
import org.openapis.openapi.models.operations.BatchCreateTableRowsRequestBody;
import org.openapis.openapi.models.operations.BatchCreateTableRowsResponse;
import org.openapis.openapi.models.shared.CellInput;
import org.openapis.openapi.models.shared.CreateRowData;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreateTableRowsRequest req = new BatchCreateTableRowsRequest(                new BatchCreateTableRowsRequestBody(                new org.openapis.openapi.models.shared.CreateRowData[]{{
                                                add(new CreateRowData("recusandae",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("ab", new CellInput() {{
                                                                        fact = "quis";
                                                                        facts = new String[]{{
                                                                            add("deserunt"),
                                                                        }};
                                                                    }});
                                                                    put("perferendis", new CellInput() {{
                                                                        fact = "ipsam";
                                                                        facts = new String[]{{
                                                                            add("sapiente"),
                                                                            add("quo"),
                                                                            add("odit"),
                                                                            add("at"),
                                                                        }};
                                                                    }});
                                                                    put("at", new CellInput() {{
                                                                        fact = "maiores";
                                                                        facts = new String[]{{
                                                                            add("quod"),
                                                                            add("quod"),
                                                                        }};
                                                                    }});
                                                                    put("esse", new CellInput() {{
                                                                        fact = "totam";
                                                                        facts = new String[]{{
                                                                            add("dolorum"),
                                                                            add("dicta"),
                                                                            add("nam"),
                                                                            add("officia"),
                                                                        }};
                                                                    }});
                                                                }}) {{
                                                    batchItemId = "distinctio";
                                                    cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("unde", new CellInput() {{
                                                            fact = "nulla";
                                                            facts = new String[]{{
                                                                add("illum"),
                                                                add("vel"),
                                                                add("error"),
                                                            }};
                                                        }});
                                                        put("deserunt", new CellInput() {{
                                                            fact = "suscipit";
                                                            facts = new String[]{{
                                                                add("magnam"),
                                                                add("debitis"),
                                                            }};
                                                        }});
                                                        put("ipsa", new CellInput() {{
                                                            fact = "delectus";
                                                            facts = new String[]{{
                                                                add("suscipit"),
                                                                add("molestiae"),
                                                            }};
                                                        }});
                                                        put("minus", new CellInput() {{
                                                            fact = "placeat";
                                                            facts = new String[]{{
                                                                add("iusto"),
                                                                add("excepturi"),
                                                                add("nisi"),
                                                            }};
                                                        }});
                                                    }};
                                                }}),
                                                add(new CreateRowData("modi",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("impedit", new CellInput() {{
                                                                        fact = "cum";
                                                                        facts = new String[]{{
                                                                            add("ipsum"),
                                                                            add("excepturi"),
                                                                        }};
                                                                    }});
                                                                }}) {{
                                                    batchItemId = "occaecati";
                                                    cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("deleniti", new CellInput() {{
                                                            fact = "hic";
                                                            facts = new String[]{{
                                                                add("totam"),
                                                                add("beatae"),
                                                                add("commodi"),
                                                                add("molestiae"),
                                                            }};
                                                        }});
                                                    }};
                                                }}),
                                                add(new CreateRowData("dolor",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("laboriosam", new CellInput() {{
                                                                        fact = "hic";
                                                                        facts = new String[]{{
                                                                            add("fuga"),
                                                                            add("in"),
                                                                            add("corporis"),
                                                                            add("iste"),
                                                                        }};
                                                                    }});
                                                                    put("iure", new CellInput() {{
                                                                        fact = "saepe";
                                                                        facts = new String[]{{
                                                                            add("architecto"),
                                                                            add("ipsa"),
                                                                            add("reiciendis"),
                                                                        }};
                                                                    }});
                                                                    put("est", new CellInput() {{
                                                                        fact = "mollitia";
                                                                        facts = new String[]{{
                                                                            add("dolores"),
                                                                            add("dolorem"),
                                                                            add("corporis"),
                                                                        }};
                                                                    }});
                                                                }}) {{
                                                    batchItemId = "aspernatur";
                                                    cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("ad", new CellInput() {{
                                                            fact = "natus";
                                                            facts = new String[]{{
                                                                add("iste"),
                                                            }};
                                                        }});
                                                    }};
                                                }}),
                                            }}) {{
                                clientRequestToken = "explicabo";
                            }};, "nobis", "enim") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            BatchCreateTableRowsResponse res = sdk.batchCreateTableRows(req);

            if (res.batchCreateTableRowsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->