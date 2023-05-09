# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/honeycode/2020-03-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchCreateTableRows(ctx, operations.BatchCreateTableRowsRequest{
        RequestBody: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: sdk.String("corrupti"),
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "distinctio",
                    CellsToCreate: map[string]shared.CellInput{
                        "unde": shared.CellInput{
                            Fact: sdk.String("nulla"),
                            Facts: []string{
                                "illum",
                                "vel",
                                "error",
                            },
                        },
                        "deserunt": shared.CellInput{
                            Fact: sdk.String("suscipit"),
                            Facts: []string{
                                "magnam",
                                "debitis",
                            },
                        },
                        "ipsa": shared.CellInput{
                            Fact: sdk.String("delectus"),
                            Facts: []string{
                                "suscipit",
                                "molestiae",
                            },
                        },
                        "minus": shared.CellInput{
                            Fact: sdk.String("placeat"),
                            Facts: []string{
                                "iusto",
                                "excepturi",
                                "nisi",
                            },
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "recusandae",
                    CellsToCreate: map[string]shared.CellInput{
                        "ab": shared.CellInput{
                            Fact: sdk.String("quis"),
                            Facts: []string{
                                "deserunt",
                            },
                        },
                        "perferendis": shared.CellInput{
                            Fact: sdk.String("ipsam"),
                            Facts: []string{
                                "sapiente",
                                "quo",
                                "odit",
                                "at",
                            },
                        },
                        "at": shared.CellInput{
                            Fact: sdk.String("maiores"),
                            Facts: []string{
                                "quod",
                                "quod",
                            },
                        },
                        "esse": shared.CellInput{
                            Fact: sdk.String("totam"),
                            Facts: []string{
                                "dolorum",
                                "dicta",
                                "nam",
                                "officia",
                            },
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "occaecati",
                    CellsToCreate: map[string]shared.CellInput{
                        "deleniti": shared.CellInput{
                            Fact: sdk.String("hic"),
                            Facts: []string{
                                "totam",
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        TableID: "aspernatur",
        WorkbookID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateTableRowsResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchCreateTableRows](docs/sdk/README.md#batchcreatetablerows) - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
* [BatchDeleteTableRows](docs/sdk/README.md#batchdeletetablerows) -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 
* [BatchUpdateTableRows](docs/sdk/README.md#batchupdatetablerows) - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [BatchUpsertTableRows](docs/sdk/README.md#batchupserttablerows) - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [DescribeTableDataImportJob](docs/sdk/README.md#describetabledataimportjob) -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 
* [GetScreenData](docs/sdk/README.md#getscreendata) -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
* [InvokeScreenAutomation](docs/sdk/README.md#invokescreenautomation) -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
* [ListTableColumns](docs/sdk/README.md#listtablecolumns) -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 
* [ListTableRows](docs/sdk/README.md#listtablerows) -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 
* [ListTables](docs/sdk/README.md#listtables) -  The ListTables API allows you to retrieve a list of all the tables in a workbook. 
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) -  The ListTagsForResource API allows you to return a resource's tags. 
* [QueryTableRows](docs/sdk/README.md#querytablerows) -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 
* [StartTableDataImportJob](docs/sdk/README.md#starttabledataimportjob) -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 
* [TagResource](docs/sdk/README.md#tagresource) -  The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
* [UntagResource](docs/sdk/README.md#untagresource) -  The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
