# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchCreateTableRows](docs/sdk/README.md#batchcreatetablerows) - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
* [batchDeleteTableRows](docs/sdk/README.md#batchdeletetablerows) -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 
* [batchUpdateTableRows](docs/sdk/README.md#batchupdatetablerows) - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [batchUpsertTableRows](docs/sdk/README.md#batchupserttablerows) - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [describeTableDataImportJob](docs/sdk/README.md#describetabledataimportjob) -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 
* [getScreenData](docs/sdk/README.md#getscreendata) -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
* [invokeScreenAutomation](docs/sdk/README.md#invokescreenautomation) -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
* [listTableColumns](docs/sdk/README.md#listtablecolumns) -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 
* [listTableRows](docs/sdk/README.md#listtablerows) -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 
* [listTables](docs/sdk/README.md#listtables) -  The ListTables API allows you to retrieve a list of all the tables in a workbook. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  The ListTagsForResource API allows you to return a resource's tags. 
* [queryTableRows](docs/sdk/README.md#querytablerows) -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 
* [startTableDataImportJob](docs/sdk/README.md#starttabledataimportjob) -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 
* [tagResource](docs/sdk/README.md#tagresource) -  The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
* [untagResource](docs/sdk/README.md#untagresource) -  The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
