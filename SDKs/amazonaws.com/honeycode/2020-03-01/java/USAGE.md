<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BatchCreateTableRowsRequest req = new BatchCreateTableRowsRequest() {{
                pathParams = new BatchCreateTableRowsPathParams() {{
                    tableId = "praesentium";
                    workbookId = "et";
                }};
                headers = new BatchCreateTableRowsHeaders() {{
                    xAmzAlgorithm = "ratione";
                    xAmzContentSha256 = "est";
                    xAmzCredential = "in";
                    xAmzDate = "corporis";
                    xAmzSecurityToken = "dolores";
                    xAmzSignature = "perferendis";
                    xAmzSignedHeaders = "laboriosam";
                }};
                request = new BatchCreateTableRowsRequestBody() {{
                    clientRequestToken = "numquam";
                    rowsToCreate = new openapisdk.models.shared.CreateRowData[]() {{
                        add(new CreateRowData() {{
                            batchItemId = "aperiam";
                            cellsToCreate = new java.util.HashMap<String, openapisdk.models.shared.CellInput>() {{
                                put("velit", new CellInput() {{
                                    fact = "possimus";
                                }});
                                put("hic", new CellInput() {{
                                    fact = "quis";
                                }});
                                put("sunt", new CellInput() {{
                                    fact = "quo";
                                }});
                            }};
                        }}),
                        add(new CreateRowData() {{
                            batchItemId = "eveniet";
                            cellsToCreate = new java.util.HashMap<String, openapisdk.models.shared.CellInput>() {{
                                put("reiciendis", new CellInput() {{
                                    fact = "non";
                                }});
                                put("dolor", new CellInput() {{
                                    fact = "maiores";
                                }});
                                put("itaque", new CellInput() {{
                                    fact = "pariatur";
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