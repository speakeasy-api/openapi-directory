# SDK

## Overview

 Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals, resources, and even your team. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/honeycode/>
### Available Operations

* [batchCreateTableRows](#batchcreatetablerows) - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
* [batchDeleteTableRows](#batchdeletetablerows) -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 
* [batchUpdateTableRows](#batchupdatetablerows) - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [batchUpsertTableRows](#batchupserttablerows) - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [describeTableDataImportJob](#describetabledataimportjob) -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 
* [getScreenData](#getscreendata) -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
* [invokeScreenAutomation](#invokescreenautomation) -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
* [listTableColumns](#listtablecolumns) -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 
* [listTableRows](#listtablerows) -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 
* [listTables](#listtables) -  The ListTables API allows you to retrieve a list of all the tables in a workbook. 
* [listTagsForResource](#listtagsforresource) -  The ListTagsForResource API allows you to return a resource's tags. 
* [queryTableRows](#querytablerows) -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 
* [startTableDataImportJob](#starttabledataimportjob) -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 
* [tagResource](#tagresource) -  The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
* [untagResource](#untagresource) -  The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

## batchCreateTableRows

<p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>

### Example Usage

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
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreateTableRowsRequest req = new BatchCreateTableRowsRequest(                new BatchCreateTableRowsRequestBody(                new org.openapis.openapi.models.shared.CreateRowData[]{{
                                                add(new CreateRowData("laborum",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("enim", new CellInput() {{
                                                                        fact = "odit";
                                                                        facts = new String[]{{
                                                                            add("sequi"),
                                                                            add("tenetur"),
                                                                            add("ipsam"),
                                                                            add("id"),
                                                                        }};
                                                                    }});
                                                                    put("possimus", new CellInput() {{
                                                                        fact = "aut";
                                                                        facts = new String[]{{
                                                                            add("error"),
                                                                        }};
                                                                    }});
                                                                    put("temporibus", new CellInput() {{
                                                                        fact = "laborum";
                                                                        facts = new String[]{{
                                                                            add("reiciendis"),
                                                                        }};
                                                                    }});
                                                                }}) {{
                                                    batchItemId = "architecto";
                                                    cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("dolorem", new CellInput() {{
                                                            fact = "culpa";
                                                            facts = new String[]{{
                                                                add("repellat"),
                                                            }};
                                                        }});
                                                        put("mollitia", new CellInput() {{
                                                            fact = "occaecati";
                                                            facts = new String[]{{
                                                                add("commodi"),
                                                                add("quam"),
                                                            }};
                                                        }});
                                                        put("molestiae", new CellInput() {{
                                                            fact = "velit";
                                                            facts = new String[]{{
                                                                add("quia"),
                                                                add("quis"),
                                                                add("vitae"),
                                                            }};
                                                        }});
                                                    }};
                                                }}),
                                                add(new CreateRowData("quidem",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("excepturi", new CellInput() {{
                                                                        fact = "pariatur";
                                                                        facts = new String[]{{
                                                                            add("praesentium"),
                                                                            add("rem"),
                                                                        }};
                                                                    }});
                                                                    put("voluptates", new CellInput() {{
                                                                        fact = "quasi";
                                                                        facts = new String[]{{
                                                                            add("sint"),
                                                                            add("veritatis"),
                                                                            add("itaque"),
                                                                            add("incidunt"),
                                                                        }};
                                                                    }});
                                                                    put("enim", new CellInput() {{
                                                                        fact = "consequatur";
                                                                        facts = new String[]{{
                                                                            add("quibusdam"),
                                                                            add("explicabo"),
                                                                            add("deserunt"),
                                                                        }};
                                                                    }});
                                                                }}) {{
                                                    batchItemId = "voluptatibus";
                                                    cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("nihil", new CellInput() {{
                                                            fact = "praesentium";
                                                            facts = new String[]{{
                                                                add("ipsa"),
                                                                add("omnis"),
                                                                add("voluptate"),
                                                                add("cum"),
                                                            }};
                                                        }});
                                                        put("perferendis", new CellInput() {{
                                                            fact = "doloremque";
                                                            facts = new String[]{{
                                                                add("ut"),
                                                                add("maiores"),
                                                            }};
                                                        }});
                                                        put("dicta", new CellInput() {{
                                                            fact = "corporis";
                                                            facts = new String[]{{
                                                                add("iusto"),
                                                                add("dicta"),
                                                            }};
                                                        }});
                                                        put("harum", new CellInput() {{
                                                            fact = "enim";
                                                            facts = new String[]{{
                                                                add("commodi"),
                                                                add("repudiandae"),
                                                                add("quae"),
                                                                add("ipsum"),
                                                            }};
                                                        }});
                                                    }};
                                                }}),
                                                add(new CreateRowData("labore",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("eum", new CellInput() {{
                                                                        fact = "non";
                                                                        facts = new String[]{{
                                                                            add("sint"),
                                                                            add("aliquid"),
                                                                            add("provident"),
                                                                            add("necessitatibus"),
                                                                        }};
                                                                    }});
                                                                    put("sint", new CellInput() {{
                                                                        fact = "officia";
                                                                        facts = new String[]{{
                                                                            add("debitis"),
                                                                        }};
                                                                    }});
                                                                    put("a", new CellInput() {{
                                                                        fact = "dolorum";
                                                                        facts = new String[]{{
                                                                            add("in"),
                                                                            add("illum"),
                                                                        }};
                                                                    }});
                                                                    put("maiores", new CellInput() {{
                                                                        fact = "rerum";
                                                                        facts = new String[]{{
                                                                            add("magnam"),
                                                                        }};
                                                                    }});
                                                                }}) {{
                                                    batchItemId = "distinctio";
                                                    cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("labore", new CellInput() {{
                                                            fact = "modi";
                                                            facts = new String[]{{
                                                                add("aliquid"),
                                                            }};
                                                        }});
                                                        put("cupiditate", new CellInput() {{
                                                            fact = "quos";
                                                            facts = new String[]{{
                                                                add("magni"),
                                                            }};
                                                        }});
                                                        put("assumenda", new CellInput() {{
                                                            fact = "ipsam";
                                                            facts = new String[]{{
                                                                add("fugit"),
                                                            }};
                                                        }});
                                                        put("dolorum", new CellInput() {{
                                                            fact = "excepturi";
                                                            facts = new String[]{{
                                                                add("facilis"),
                                                                add("tempore"),
                                                            }};
                                                        }});
                                                    }};
                                                }}),
                                                add(new CreateRowData("magnam",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("id", new CellInput() {{
                                                                        fact = "labore";
                                                                        facts = new String[]{{
                                                                            add("suscipit"),
                                                                            add("natus"),
                                                                        }};
                                                                    }});
                                                                    put("nobis", new CellInput() {{
                                                                        fact = "eum";
                                                                        facts = new String[]{{
                                                                            add("aspernatur"),
                                                                            add("architecto"),
                                                                            add("magnam"),
                                                                            add("et"),
                                                                        }};
                                                                    }});
                                                                    put("excepturi", new CellInput() {{
                                                                        fact = "ullam";
                                                                        facts = new String[]{{
                                                                            add("quos"),
                                                                            add("sint"),
                                                                            add("accusantium"),
                                                                        }};
                                                                    }});
                                                                }}) {{
                                                    batchItemId = "cumque";
                                                    cellsToCreate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("ea", new CellInput() {{
                                                            fact = "aliquid";
                                                            facts = new String[]{{
                                                                add("accusamus"),
                                                                add("non"),
                                                                add("occaecati"),
                                                            }};
                                                        }});
                                                        put("enim", new CellInput() {{
                                                            fact = "accusamus";
                                                            facts = new String[]{{
                                                                add("quidem"),
                                                                add("provident"),
                                                                add("nam"),
                                                                add("id"),
                                                            }};
                                                        }});
                                                        put("blanditiis", new CellInput() {{
                                                            fact = "deleniti";
                                                            facts = new String[]{{
                                                                add("amet"),
                                                                add("deserunt"),
                                                                add("nisi"),
                                                                add("vel"),
                                                            }};
                                                        }});
                                                        put("natus", new CellInput() {{
                                                            fact = "omnis";
                                                            facts = new String[]{{
                                                                add("perferendis"),
                                                                add("nihil"),
                                                            }};
                                                        }});
                                                    }};
                                                }}),
                                            }}) {{
                                clientRequestToken = "mollitia";
                            }};, "reiciendis", "mollitia") {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            BatchCreateTableRowsResponse res = sdk.sdk.batchCreateTableRows(req);

            if (res.batchCreateTableRowsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteTableRows

 The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteTableRowsRequest;
import org.openapis.openapi.models.operations.BatchDeleteTableRowsRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteTableRowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteTableRowsRequest req = new BatchDeleteTableRowsRequest(                new BatchDeleteTableRowsRequestBody(                new String[]{{
                                                add("debitis"),
                                                add("eius"),
                                                add("maxime"),
                                                add("deleniti"),
                                            }}) {{
                                clientRequestToken = "facilis";
                            }};, "in", "architecto") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "ullam";
                xAmzDate = "expedita";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "quibusdam";
            }};            

            BatchDeleteTableRowsResponse res = sdk.sdk.batchDeleteTableRows(req);

            if (res.batchDeleteTableRowsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchUpdateTableRows

<p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpdateTableRowsRequest;
import org.openapis.openapi.models.operations.BatchUpdateTableRowsRequestBody;
import org.openapis.openapi.models.operations.BatchUpdateTableRowsResponse;
import org.openapis.openapi.models.shared.CellInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRowData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateTableRowsRequest req = new BatchUpdateTableRowsRequest(                new BatchUpdateTableRowsRequestBody(                new org.openapis.openapi.models.shared.UpdateRowData[]{{
                                                add(new UpdateRowData(                new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("nemo", new CellInput() {{
                                                                        fact = "voluptatibus";
                                                                        facts = new String[]{{
                                                                            add("fugiat"),
                                                                        }};
                                                                    }});
                                                                    put("amet", new CellInput() {{
                                                                        fact = "aut";
                                                                        facts = new String[]{{
                                                                            add("corporis"),
                                                                            add("hic"),
                                                                            add("libero"),
                                                                            add("nobis"),
                                                                        }};
                                                                    }});
                                                                    put("dolores", new CellInput() {{
                                                                        fact = "quis";
                                                                        facts = new String[]{{
                                                                            add("dignissimos"),
                                                                            add("eaque"),
                                                                            add("quis"),
                                                                        }};
                                                                    }});
                                                                    put("nesciunt", new CellInput() {{
                                                                        fact = "eos";
                                                                        facts = new String[]{{
                                                                            add("dolores"),
                                                                        }};
                                                                    }});
                                                                }}, "minus") {{
                                                    cellsToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("accusantium", new CellInput() {{
                                                            fact = "consequuntur";
                                                            facts = new String[]{{
                                                                add("natus"),
                                                                add("magni"),
                                                                add("sunt"),
                                                            }};
                                                        }});
                                                        put("quo", new CellInput() {{
                                                            fact = "illum";
                                                            facts = new String[]{{
                                                                add("maxime"),
                                                                add("ea"),
                                                                add("excepturi"),
                                                                add("odit"),
                                                            }};
                                                        }});
                                                        put("ea", new CellInput() {{
                                                            fact = "accusantium";
                                                            facts = new String[]{{
                                                                add("maiores"),
                                                            }};
                                                        }});
                                                        put("quidem", new CellInput() {{
                                                            fact = "ipsam";
                                                            facts = new String[]{{
                                                                add("autem"),
                                                                add("nam"),
                                                            }};
                                                        }});
                                                    }};
                                                    rowId = "eaque";
                                                }}),
                                                add(new UpdateRowData(                new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("eaque", new CellInput() {{
                                                                        fact = "occaecati";
                                                                        facts = new String[]{{
                                                                            add("adipisci"),
                                                                            add("asperiores"),
                                                                            add("earum"),
                                                                        }};
                                                                    }});
                                                                    put("modi", new CellInput() {{
                                                                        fact = "iste";
                                                                        facts = new String[]{{
                                                                            add("deleniti"),
                                                                            add("pariatur"),
                                                                            add("provident"),
                                                                        }};
                                                                    }});
                                                                    put("nobis", new CellInput() {{
                                                                        fact = "libero";
                                                                        facts = new String[]{{
                                                                            add("quaerat"),
                                                                            add("quos"),
                                                                            add("aliquid"),
                                                                            add("dolorem"),
                                                                        }};
                                                                    }});
                                                                }}, "dolorem") {{
                                                    cellsToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("dolor", new CellInput() {{
                                                            fact = "vero";
                                                            facts = new String[]{{
                                                                add("hic"),
                                                                add("recusandae"),
                                                            }};
                                                        }});
                                                        put("omnis", new CellInput() {{
                                                            fact = "facilis";
                                                            facts = new String[]{{
                                                                add("voluptatem"),
                                                                add("porro"),
                                                                add("consequuntur"),
                                                            }};
                                                        }});
                                                    }};
                                                    rowId = "blanditiis";
                                                }}),
                                                add(new UpdateRowData(                new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("dolorum", new CellInput() {{
                                                                        fact = "numquam";
                                                                        facts = new String[]{{
                                                                            add("ipsa"),
                                                                        }};
                                                                    }});
                                                                }}, "ipsa") {{
                                                    cellsToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("qui", new CellInput() {{
                                                            fact = "ipsum";
                                                            facts = new String[]{{
                                                                add("excepturi"),
                                                                add("cum"),
                                                                add("voluptate"),
                                                                add("dignissimos"),
                                                            }};
                                                        }});
                                                    }};
                                                    rowId = "reiciendis";
                                                }}),
                                                add(new UpdateRowData(                new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("dolorum", new CellInput() {{
                                                                        fact = "iusto";
                                                                        facts = new String[]{{
                                                                            add("dolorum"),
                                                                            add("deleniti"),
                                                                        }};
                                                                    }});
                                                                    put("omnis", new CellInput() {{
                                                                        fact = "necessitatibus";
                                                                        facts = new String[]{{
                                                                            add("asperiores"),
                                                                            add("nihil"),
                                                                            add("ipsum"),
                                                                        }};
                                                                    }});
                                                                    put("voluptate", new CellInput() {{
                                                                        fact = "id";
                                                                        facts = new String[]{{
                                                                            add("eius"),
                                                                            add("aspernatur"),
                                                                            add("perferendis"),
                                                                            add("amet"),
                                                                        }};
                                                                    }});
                                                                }}, "optio") {{
                                                    cellsToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("odio", new CellInput() {{
                                                            fact = "quaerat";
                                                            facts = new String[]{{
                                                                add("quidem"),
                                                                add("voluptatibus"),
                                                                add("voluptas"),
                                                                add("natus"),
                                                            }};
                                                        }});
                                                        put("eos", new CellInput() {{
                                                            fact = "atque";
                                                            facts = new String[]{{
                                                                add("fugiat"),
                                                            }};
                                                        }});
                                                    }};
                                                    rowId = "ab";
                                                }}),
                                            }}) {{
                                clientRequestToken = "accusamus";
                            }};, "ad", "saepe") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "provident";
                xAmzDate = "minima";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "similique";
            }};            

            BatchUpdateTableRowsResponse res = sdk.sdk.batchUpdateTableRows(req);

            if (res.batchUpdateTableRowsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchUpsertTableRows

<p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpsertTableRowsRequest;
import org.openapis.openapi.models.operations.BatchUpsertTableRowsRequestBody;
import org.openapis.openapi.models.operations.BatchUpsertTableRowsResponse;
import org.openapis.openapi.models.shared.CellInput;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpsertRowData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpsertTableRowsRequest req = new BatchUpsertTableRowsRequest(                new BatchUpsertTableRowsRequestBody(                new org.openapis.openapi.models.shared.UpsertRowData[]{{
                                                add(new UpsertRowData("accusamus",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("enim", new CellInput() {{
                                                                        fact = "dolorem";
                                                                        facts = new String[]{{
                                                                            add("totam"),
                                                                            add("nihil"),
                                                                            add("sit"),
                                                                            add("expedita"),
                                                                        }};
                                                                    }});
                                                                    put("neque", new CellInput() {{
                                                                        fact = "sed";
                                                                        facts = new String[]{{
                                                                            add("libero"),
                                                                            add("voluptas"),
                                                                        }};
                                                                    }});
                                                                }},                 new Filter("deserunt") {{
                                                                    contextRowId = "quam";
                                                                }};) {{
                                                    batchItemId = "quaerat";
                                                    cellsToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("vel", new CellInput() {{
                                                            fact = "quod";
                                                            facts = new String[]{{
                                                                add("qui"),
                                                                add("dolorum"),
                                                                add("a"),
                                                                add("esse"),
                                                            }};
                                                        }});
                                                        put("harum", new CellInput() {{
                                                            fact = "iusto";
                                                            facts = new String[]{{
                                                                add("quisquam"),
                                                            }};
                                                        }});
                                                    }};
                                                    filter = new Filter("tempore") {{
                                                        contextRowId = "tenetur";
                                                        formula = "amet";
                                                    }};
                                                }}),
                                                add(new UpsertRowData("quam",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("temporibus", new CellInput() {{
                                                                        fact = "qui";
                                                                        facts = new String[]{{
                                                                            add("fugit"),
                                                                        }};
                                                                    }});
                                                                    put("magni", new CellInput() {{
                                                                        fact = "odio";
                                                                        facts = new String[]{{
                                                                            add("ullam"),
                                                                        }};
                                                                    }});
                                                                    put("nam", new CellInput() {{
                                                                        fact = "hic";
                                                                        facts = new String[]{{
                                                                            add("cumque"),
                                                                        }};
                                                                    }});
                                                                }},                 new Filter("soluta") {{
                                                                    contextRowId = "nobis";
                                                                }};) {{
                                                    batchItemId = "ipsum";
                                                    cellsToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("qui", new CellInput() {{
                                                            fact = "cupiditate";
                                                            facts = new String[]{{
                                                                add("pariatur"),
                                                                add("soluta"),
                                                                add("dicta"),
                                                                add("laborum"),
                                                            }};
                                                        }});
                                                        put("totam", new CellInput() {{
                                                            fact = "incidunt";
                                                            facts = new String[]{{
                                                                add("dolores"),
                                                            }};
                                                        }});
                                                    }};
                                                    filter = new Filter("aliquid") {{
                                                        contextRowId = "distinctio";
                                                        formula = "facilis";
                                                    }};
                                                }}),
                                                add(new UpsertRowData("ut",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("cupiditate", new CellInput() {{
                                                                        fact = "qui";
                                                                        facts = new String[]{{
                                                                            add("laudantium"),
                                                                        }};
                                                                    }});
                                                                    put("odio", new CellInput() {{
                                                                        fact = "occaecati";
                                                                        facts = new String[]{{
                                                                            add("quisquam"),
                                                                            add("vero"),
                                                                            add("omnis"),
                                                                            add("quis"),
                                                                        }};
                                                                    }});
                                                                    put("ipsum", new CellInput() {{
                                                                        fact = "delectus";
                                                                        facts = new String[]{{
                                                                            add("consectetur"),
                                                                            add("vero"),
                                                                        }};
                                                                    }});
                                                                }},                 new Filter("tenetur") {{
                                                                    contextRowId = "dignissimos";
                                                                }};) {{
                                                    batchItemId = "et";
                                                    cellsToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("ipsum", new CellInput() {{
                                                            fact = "veritatis";
                                                            facts = new String[]{{
                                                                add("quos"),
                                                                add("tempore"),
                                                                add("cupiditate"),
                                                            }};
                                                        }});
                                                        put("aperiam", new CellInput() {{
                                                            fact = "delectus";
                                                            facts = new String[]{{
                                                                add("dolore"),
                                                            }};
                                                        }});
                                                        put("labore", new CellInput() {{
                                                            fact = "adipisci";
                                                            facts = new String[]{{
                                                                add("architecto"),
                                                                add("quae"),
                                                                add("aut"),
                                                            }};
                                                        }});
                                                        put("quas", new CellInput() {{
                                                            fact = "itaque";
                                                            facts = new String[]{{
                                                                add("est"),
                                                            }};
                                                        }});
                                                    }};
                                                    filter = new Filter("doloribus") {{
                                                        contextRowId = "repellendus";
                                                        formula = "porro";
                                                    }};
                                                }}),
                                                add(new UpsertRowData("alias",                 new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                                    put("tempora", new CellInput() {{
                                                                        fact = "ipsam";
                                                                        facts = new String[]{{
                                                                            add("aspernatur"),
                                                                            add("vel"),
                                                                        }};
                                                                    }});
                                                                    put("possimus", new CellInput() {{
                                                                        fact = "magnam";
                                                                        facts = new String[]{{
                                                                            add("ex"),
                                                                        }};
                                                                    }});
                                                                    put("laudantium", new CellInput() {{
                                                                        fact = "dicta";
                                                                        facts = new String[]{{
                                                                            add("maiores"),
                                                                        }};
                                                                    }});
                                                                }},                 new Filter("quasi") {{
                                                                    contextRowId = "ex";
                                                                }};) {{
                                                    batchItemId = "hic";
                                                    cellsToUpdate = new java.util.HashMap<String, org.openapis.openapi.models.shared.CellInput>() {{
                                                        put("quod", new CellInput() {{
                                                            fact = "odio";
                                                            facts = new String[]{{
                                                                add("facilis"),
                                                                add("vero"),
                                                                add("ducimus"),
                                                            }};
                                                        }});
                                                        put("dolore", new CellInput() {{
                                                            fact = "quibusdam";
                                                            facts = new String[]{{
                                                                add("sequi"),
                                                                add("natus"),
                                                                add("impedit"),
                                                                add("aut"),
                                                            }};
                                                        }});
                                                        put("voluptatibus", new CellInput() {{
                                                            fact = "exercitationem";
                                                            facts = new String[]{{
                                                                add("fugit"),
                                                                add("porro"),
                                                                add("maiores"),
                                                                add("doloribus"),
                                                            }};
                                                        }});
                                                    }};
                                                    filter = new Filter("ducimus") {{
                                                        contextRowId = "iusto";
                                                        formula = "eligendi";
                                                    }};
                                                }}),
                                            }}) {{
                                clientRequestToken = "nulla";
                            }};, "excepturi", "voluptatibus") {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quisquam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ea";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "corporis";
            }};            

            BatchUpsertTableRowsResponse res = sdk.sdk.batchUpsertTableRows(req);

            if (res.batchUpsertTableRowsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTableDataImportJob

 The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTableDataImportJobRequest;
import org.openapis.openapi.models.operations.DescribeTableDataImportJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTableDataImportJobRequest req = new DescribeTableDataImportJobRequest("aliquid", "inventore", "magnam") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quo";
                xAmzCredential = "consectetur";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "eaque";
            }};            

            DescribeTableDataImportJobResponse res = sdk.sdk.describeTableDataImportJob(req);

            if (res.describeTableDataImportJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScreenData

 The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScreenDataRequest;
import org.openapis.openapi.models.operations.GetScreenDataRequestBody;
import org.openapis.openapi.models.operations.GetScreenDataResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VariableValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScreenDataRequest req = new GetScreenDataRequest(                new GetScreenDataRequestBody("libero", "aut", "aut") {{
                                maxResults = 533466L;
                                nextToken = "impedit";
                                variables = new java.util.HashMap<String, org.openapis.openapi.models.shared.VariableValue>() {{
                                    put("fugit", new VariableValue("inventore") {{
                                        rawValue = "accusamus";
                                    }});
                                    put("non", new VariableValue("dolorum") {{
                                        rawValue = "et";
                                    }});
                                }};
                            }};) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "velit";
                xAmzDate = "eum";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quas";
            }};            

            GetScreenDataResponse res = sdk.sdk.getScreenData(req);

            if (res.getScreenDataResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invokeScreenAutomation

 The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvokeScreenAutomationRequest;
import org.openapis.openapi.models.operations.InvokeScreenAutomationRequestBody;
import org.openapis.openapi.models.operations.InvokeScreenAutomationResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VariableValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvokeScreenAutomationRequest req = new InvokeScreenAutomationRequest(                new InvokeScreenAutomationRequestBody() {{
                                clientRequestToken = "nulla";
                                rowId = "voluptas";
                                variables = new java.util.HashMap<String, org.openapis.openapi.models.shared.VariableValue>() {{
                                    put("quasi", new VariableValue("numquam") {{
                                        rawValue = "tempora";
                                    }});
                                    put("explicabo", new VariableValue("ipsa") {{
                                        rawValue = "provident";
                                    }});
                                    put("molestiae", new VariableValue("odio") {{
                                        rawValue = "magnam";
                                    }});
                                }};
                            }};, "eius", "esse", "esse", "rem") {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "quidem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ut";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "suscipit";
            }};            

            InvokeScreenAutomationResponse res = sdk.sdk.invokeScreenAutomation(req);

            if (res.invokeScreenAutomationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTableColumns

 The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTableColumnsRequest;
import org.openapis.openapi.models.operations.ListTableColumnsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTableColumnsRequest req = new ListTableColumnsRequest("eos", "praesentium") {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "id";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "quo";
                nextToken = "illum";
            }};            

            ListTableColumnsResponse res = sdk.sdk.listTableColumns(req);

            if (res.listTableColumnsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTableRows

 The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTableRowsRequest;
import org.openapis.openapi.models.operations.ListTableRowsRequestBody;
import org.openapis.openapi.models.operations.ListTableRowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTableRowsRequest req = new ListTableRowsRequest(                new ListTableRowsRequestBody() {{
                                maxResults = 681359L;
                                nextToken = "eius";
                                rowIds = new String[]{{
                                    add("voluptas"),
                                }};
                            }};, "ab", "cupiditate") {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "debitis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "quo";
                maxResults = "esse";
                nextToken = "recusandae";
            }};            

            ListTableRowsResponse res = sdk.sdk.listTableRows(req);

            if (res.listTableRowsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTables

 The ListTables API allows you to retrieve a list of all the tables in a workbook. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTablesRequest;
import org.openapis.openapi.models.operations.ListTablesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTablesRequest req = new ListTablesRequest("distinctio") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
                maxResults = 488410L;
                nextToken = "occaecati";
            }};            

            ListTablesResponse res = sdk.sdk.listTables(req);

            if (res.listTablesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 The ListTagsForResource API allows you to return a resource's tags. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("sapiente") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryTableRows

 The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryTableRowsRequest;
import org.openapis.openapi.models.operations.QueryTableRowsRequestBody;
import org.openapis.openapi.models.operations.QueryTableRowsRequestBodyFilterFormula;
import org.openapis.openapi.models.operations.QueryTableRowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryTableRowsRequest req = new QueryTableRowsRequest(                new QueryTableRowsRequestBody(                new QueryTableRowsRequestBodyFilterFormula() {{
                                                contextRowId = "consequuntur";
                                                formula = "deleniti";
                                            }};) {{
                                maxResults = 143829L;
                                nextToken = "fuga";
                            }};, "mollitia", "incidunt") {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
                maxResults = "ratione";
                nextToken = "explicabo";
            }};            

            QueryTableRowsResponse res = sdk.sdk.queryTableRows(req);

            if (res.queryTableRowsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTableDataImportJob

 The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTableDataImportJobRequest;
import org.openapis.openapi.models.operations.StartTableDataImportJobRequestBody;
import org.openapis.openapi.models.operations.StartTableDataImportJobRequestBodyDataFormatEnum;
import org.openapis.openapi.models.operations.StartTableDataImportJobRequestBodyDataSource;
import org.openapis.openapi.models.operations.StartTableDataImportJobRequestBodyImportOptions;
import org.openapis.openapi.models.operations.StartTableDataImportJobResponse;
import org.openapis.openapi.models.shared.DelimitedTextImportOptions;
import org.openapis.openapi.models.shared.DestinationOptions;
import org.openapis.openapi.models.shared.ImportDataCharacterEncodingEnum;
import org.openapis.openapi.models.shared.ImportDataSourceConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceDataColumnProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTableDataImportJobRequest req = new StartTableDataImportJobRequest(                new StartTableDataImportJobRequestBody("occaecati", StartTableDataImportJobRequestBodyDataFormatEnum.DELIMITED_TEXT,                 new StartTableDataImportJobRequestBodyDataSource() {{
                                                dataSourceConfig = new ImportDataSourceConfig() {{
                                                    dataSourceUrl = "atque";
                                                }};;
                                            }};,                 new StartTableDataImportJobRequestBodyImportOptions() {{
                                                delimitedTextOptions = new DelimitedTextImportOptions("et") {{
                                                    dataCharacterEncoding = ImportDataCharacterEncodingEnum.ISO88591;
                                                    hasHeaderRow = false;
                                                    ignoreEmptyRows = false;
                                                }};;
                                                destinationOptions = new DestinationOptions() {{
                                                    columnMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.SourceDataColumnProperties>() {{
                                                        put("accusamus", new SourceDataColumnProperties() {{
                                                            columnIndex = 82971L;
                                                        }});
                                                        put("esse", new SourceDataColumnProperties() {{
                                                            columnIndex = 800379L;
                                                        }});
                                                        put("nam", new SourceDataColumnProperties() {{
                                                            columnIndex = 877131L;
                                                        }});
                                                        put("aliquid", new SourceDataColumnProperties() {{
                                                            columnIndex = 93459L;
                                                        }});
                                                    }};
                                                }};;
                                            }};);, "saepe", "vel") {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "rerum";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "minima";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "eligendi";
            }};            

            StartTableDataImportJobResponse res = sdk.sdk.startTableDataImportJob(req);

            if (res.startTableDataImportJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("tempore", "adipisci");
                                                put("cumque", "consequuntur");
                                                put("consequatur", "minus");
                                            }});, "quaerat") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "esse";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "a";
                xAmzSignedHeaders = "nulla";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

 The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("esse",                 new String[]{{
                                add("a"),
                            }}) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "sint";
                xAmzCredential = "pariatur";
                xAmzDate = "possimus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "asperiores";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
