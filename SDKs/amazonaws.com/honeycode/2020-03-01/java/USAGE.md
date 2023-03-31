<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchCreateTableRowsPathParams;
import org.openapis.openapi.models.operations.BatchCreateTableRowsHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchCreateTableRowsRequest req = new BatchCreateTableRowsRequest() {{
                pathParams = new BatchCreateTableRowsPathParams() {{
                    tableId = "corrupti";
                    workbookId = "provident";
                }};
                headers = new BatchCreateTableRowsHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
                request = new BatchCreateTableRowsRequestBody() {{
                    clientRequestToken = "error";
                    rowsToCreate = new org.openapis.openapi.models.shared.CreateRowData[]{{
                        add(new CreateRowData() {{
                            batchItemId = "suscipit";
                            cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                put("magnam", new CellInput() {{
                                    fact = "debitis";
                                    facts = new String[]{{
                                        add("delectus"),
                                    }};
                                }});
                                put("tempora", new CellInput() {{
                                    fact = "suscipit";
                                    facts = new String[]{{
                                        add("minus"),
                                        add("placeat"),
                                    }};
                                }});
                            }};
                        }}),
                        add(new CreateRowData() {{
                            batchItemId = "voluptatum";
                            cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                put("excepturi", new CellInput() {{
                                    fact = "nisi";
                                    facts = new String[]{{
                                        add("temporibus"),
                                        add("ab"),
                                        add("quis"),
                                        add("veritatis"),
                                    }};
                                }});
                                put("deserunt", new CellInput() {{
                                    fact = "perferendis";
                                    facts = new String[]{{
                                        add("repellendus"),
                                        add("sapiente"),
                                    }};
                                }});
                            }};
                        }}),
                        add(new CreateRowData() {{
                            batchItemId = "quo";
                            cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                put("at", new CellInput() {{
                                    fact = "at";
                                    facts = new String[]{{
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                        add("esse"),
                                    }};
                                }});
                            }};
                        }}),
                    }};
                }};
            }};            

            BatchCreateTableRowsResponse res = sdk.batchCreateTableRows(req);

            if (res.batchCreateTableRowsResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->