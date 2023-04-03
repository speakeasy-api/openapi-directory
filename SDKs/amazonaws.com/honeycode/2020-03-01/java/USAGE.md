<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchCreateTableRowsRequestBody;
import org.openapis.openapi.models.operations.BatchCreateTableRowsRequest;
import org.openapis.openapi.models.operations.BatchCreateTableRowsResponse;
import org.openapis.openapi.models.shared.CreateRowData;
import org.openapis.openapi.models.shared.CellInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreateTableRowsRequest req = new BatchCreateTableRowsRequest() {{
                requestBody = new BatchCreateTableRowsRequestBody() {{
                    clientRequestToken = "corrupti";
                    rowsToCreate = new org.openapis.openapi.models.shared.CreateRowData[]{{
                        add(new CreateRowData() {{
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
                        add(new CreateRowData() {{
                            batchItemId = "recusandae";
                            cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
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
                            }};
                        }}),
                        add(new CreateRowData() {{
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
                    }};
                }};
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
                tableId = "aspernatur";
                workbookId = "perferendis";
            }}            

            BatchCreateTableRowsResponse res = sdk.batchCreateTableRows(req);

            if (res.batchCreateTableRowsResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->