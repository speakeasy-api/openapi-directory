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
                    tableId = "sit";
                    workbookId = "voluptas";
                }};
                headers = new BatchCreateTableRowsHeaders() {{
                    xAmzAlgorithm = "culpa";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "consequuntur";
                    xAmzDate = "dolor";
                    xAmzSecurityToken = "expedita";
                    xAmzSignature = "voluptas";
                    xAmzSignedHeaders = "fugit";
                }};
                request = new BatchCreateTableRowsRequestBody() {{
                    clientRequestToken = "et";
                    rowsToCreate = new openapisdk.models.shared.CreateRowData[]() {{
                        add(new CreateRowData() {{
                            batchItemId = "rerum";
                            cellsToCreate = new java.util.HashMap<String, openapisdk.models.shared.CellInput>() {{
                                put("debitis", new CellInput() {{
                                    fact = "voluptatum";
                                }});
                                put("et", new CellInput() {{
                                    fact = "ut";
                                }});
                                put("dolorem", new CellInput() {{
                                    fact = "et";
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