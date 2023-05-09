# SDK

## Overview

 Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals, resources, and even your team. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/honeycode/>
### Available Operations

* [BatchCreateTableRows](#batchcreatetablerows) - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
* [BatchDeleteTableRows](#batchdeletetablerows) -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 
* [BatchUpdateTableRows](#batchupdatetablerows) - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [BatchUpsertTableRows](#batchupserttablerows) - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [DescribeTableDataImportJob](#describetabledataimportjob) -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 
* [GetScreenData](#getscreendata) -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
* [InvokeScreenAutomation](#invokescreenautomation) -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
* [ListTableColumns](#listtablecolumns) -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 
* [ListTableRows](#listtablerows) -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 
* [ListTables](#listtables) -  The ListTables API allows you to retrieve a list of all the tables in a workbook. 
* [ListTagsForResource](#listtagsforresource) -  The ListTagsForResource API allows you to return a resource's tags. 
* [QueryTableRows](#querytablerows) -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 
* [StartTableDataImportJob](#starttabledataimportjob) -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 
* [TagResource](#tagresource) -  The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
* [UntagResource](#untagresource) -  The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

## BatchCreateTableRows

<p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>

### Example Usage

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
    res, err := s.SDK.BatchCreateTableRows(ctx, operations.BatchCreateTableRowsRequest{
        RequestBody: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: sdk.String("ad"),
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "sed",
                    CellsToCreate: map[string]shared.CellInput{
                        "dolor": shared.CellInput{
                            Fact: sdk.String("natus"),
                            Facts: []string{
                                "hic",
                                "saepe",
                            },
                        },
                        "fuga": shared.CellInput{
                            Fact: sdk.String("in"),
                            Facts: []string{
                                "iste",
                                "iure",
                            },
                        },
                        "saepe": shared.CellInput{
                            Fact: sdk.String("quidem"),
                            Facts: []string{
                                "ipsa",
                            },
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "reiciendis",
                    CellsToCreate: map[string]shared.CellInput{
                        "mollitia": shared.CellInput{
                            Fact: sdk.String("laborum"),
                            Facts: []string{
                                "dolorem",
                            },
                        },
                        "corporis": shared.CellInput{
                            Fact: sdk.String("explicabo"),
                            Facts: []string{
                                "enim",
                                "omnis",
                                "nemo",
                                "minima",
                            },
                        },
                        "excepturi": shared.CellInput{
                            Fact: sdk.String("accusantium"),
                            Facts: []string{
                                "culpa",
                                "doloribus",
                            },
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "sapiente",
                    CellsToCreate: map[string]shared.CellInput{
                        "mollitia": shared.CellInput{
                            Fact: sdk.String("dolorem"),
                            Facts: []string{
                                "consequuntur",
                                "repellat",
                                "mollitia",
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        TableID: "quia",
        WorkbookID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateTableRowsResult != nil {
        // handle response
    }
}
```

## BatchDeleteTableRows

 The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteTableRows(ctx, operations.BatchDeleteTableRowsRequest{
        RequestBody: operations.BatchDeleteTableRowsRequestBody{
            ClientRequestToken: sdk.String("vitae"),
            RowIds: []string{
                "animi",
                "enim",
                "odit",
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
        TableID: "quasi",
        WorkbookID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteTableRowsResult != nil {
        // handle response
    }
}
```

## BatchUpdateTableRows

<p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>

### Example Usage

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
    res, err := s.SDK.BatchUpdateTableRows(ctx, operations.BatchUpdateTableRowsRequest{
        RequestBody: operations.BatchUpdateTableRowsRequestBody{
            ClientRequestToken: sdk.String("temporibus"),
            RowsToUpdate: []shared.UpdateRowData{
                shared.UpdateRowData{
                    CellsToUpdate: map[string]shared.CellInput{
                        "reiciendis": shared.CellInput{
                            Fact: sdk.String("voluptatibus"),
                            Facts: []string{
                                "nihil",
                                "praesentium",
                                "voluptatibus",
                                "ipsa",
                            },
                        },
                    },
                    RowID: "omnis",
                },
                shared.UpdateRowData{
                    CellsToUpdate: map[string]shared.CellInput{
                        "cum": shared.CellInput{
                            Fact: sdk.String("perferendis"),
                            Facts: []string{
                                "reprehenderit",
                            },
                        },
                        "ut": shared.CellInput{
                            Fact: sdk.String("maiores"),
                            Facts: []string{
                                "corporis",
                            },
                        },
                    },
                    RowID: "dolore",
                },
                shared.UpdateRowData{
                    CellsToUpdate: map[string]shared.CellInput{
                        "dicta": shared.CellInput{
                            Fact: sdk.String("harum"),
                            Facts: []string{
                                "accusamus",
                                "commodi",
                            },
                        },
                        "repudiandae": shared.CellInput{
                            Fact: sdk.String("quae"),
                            Facts: []string{
                                "quidem",
                            },
                        },
                    },
                    RowID: "molestias",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
        TableID: "repudiandae",
        WorkbookID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateTableRowsResult != nil {
        // handle response
    }
}
```

## BatchUpsertTableRows

<p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>

### Example Usage

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
    res, err := s.SDK.BatchUpsertTableRows(ctx, operations.BatchUpsertTableRowsRequest{
        RequestBody: operations.BatchUpsertTableRowsRequestBody{
            ClientRequestToken: sdk.String("veritatis"),
            RowsToUpsert: []shared.UpsertRowData{
                shared.UpsertRowData{
                    BatchItemID: "incidunt",
                    CellsToUpdate: map[string]shared.CellInput{
                        "consequatur": shared.CellInput{
                            Fact: sdk.String("est"),
                            Facts: []string{
                                "explicabo",
                                "deserunt",
                                "distinctio",
                                "quibusdam",
                            },
                        },
                        "labore": shared.CellInput{
                            Fact: sdk.String("modi"),
                            Facts: []string{
                                "aliquid",
                            },
                        },
                    },
                    Filter: shared.Filter{
                        ContextRowID: sdk.String("cupiditate"),
                        Formula: "quos",
                    },
                },
                shared.UpsertRowData{
                    BatchItemID: "perferendis",
                    CellsToUpdate: map[string]shared.CellInput{
                        "assumenda": shared.CellInput{
                            Fact: sdk.String("ipsam"),
                            Facts: []string{
                                "fugit",
                            },
                        },
                    },
                    Filter: shared.Filter{
                        ContextRowID: sdk.String("dolorum"),
                        Formula: "excepturi",
                    },
                },
                shared.UpsertRowData{
                    BatchItemID: "tempora",
                    CellsToUpdate: map[string]shared.CellInput{
                        "tempore": shared.CellInput{
                            Fact: sdk.String("labore"),
                            Facts: []string{
                                "eum",
                                "non",
                                "eligendi",
                                "sint",
                            },
                        },
                        "aliquid": shared.CellInput{
                            Fact: sdk.String("provident"),
                            Facts: []string{
                                "sint",
                                "officia",
                                "dolor",
                                "debitis",
                            },
                        },
                        "a": shared.CellInput{
                            Fact: sdk.String("dolorum"),
                            Facts: []string{
                                "in",
                                "illum",
                            },
                        },
                    },
                    Filter: shared.Filter{
                        ContextRowID: sdk.String("maiores"),
                        Formula: "rerum",
                    },
                },
                shared.UpsertRowData{
                    BatchItemID: "dicta",
                    CellsToUpdate: map[string]shared.CellInput{
                        "cumque": shared.CellInput{
                            Fact: sdk.String("facere"),
                            Facts: []string{
                                "aliquid",
                                "laborum",
                            },
                        },
                        "accusamus": shared.CellInput{
                            Fact: sdk.String("non"),
                            Facts: []string{
                                "enim",
                                "accusamus",
                                "delectus",
                            },
                        },
                    },
                    Filter: shared.Filter{
                        ContextRowID: sdk.String("quidem"),
                        Formula: "provident",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        TableID: "nisi",
        WorkbookID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpsertTableRowsResult != nil {
        // handle response
    }
}
```

## DescribeTableDataImportJob

 The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTableDataImportJob(ctx, operations.DescribeTableDataImportJobRequest{
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        JobID: "id",
        TableID: "labore",
        WorkbookID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTableDataImportJobResult != nil {
        // handle response
    }
}
```

## GetScreenData

 The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 

### Example Usage

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
    res, err := s.SDK.GetScreenData(ctx, operations.GetScreenDataRequest{
        RequestBody: operations.GetScreenDataRequestBody{
            AppID: "suscipit",
            MaxResults: sdk.Int64(618016),
            NextToken: sdk.String("nobis"),
            ScreenID: "eum",
            Variables: map[string]shared.VariableValue{
                "aspernatur": shared.VariableValue{
                    RawValue: "architecto",
                },
                "magnam": shared.VariableValue{
                    RawValue: "et",
                },
                "excepturi": shared.VariableValue{
                    RawValue: "ullam",
                },
                "provident": shared.VariableValue{
                    RawValue: "quos",
                },
            },
            WorkbookID: "sint",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScreenDataResult != nil {
        // handle response
    }
}
```

## InvokeScreenAutomation

 The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 

### Example Usage

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
    res, err := s.SDK.InvokeScreenAutomation(ctx, operations.InvokeScreenAutomationRequest{
        RequestBody: operations.InvokeScreenAutomationRequestBody{
            ClientRequestToken: sdk.String("necessitatibus"),
            RowID: sdk.String("odit"),
            Variables: map[string]shared.VariableValue{
                "quasi": shared.VariableValue{
                    RawValue: "iure",
                },
                "doloribus": shared.VariableValue{
                    RawValue: "debitis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
        AppID: "repudiandae",
        AutomationID: "ullam",
        ScreenID: "expedita",
        WorkbookID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvokeScreenAutomationResult != nil {
        // handle response
    }
}
```

## ListTableColumns

 The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTableColumns(ctx, operations.ListTableColumnsRequest{
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        NextToken: sdk.String("praesentium"),
        TableID: "natus",
        WorkbookID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTableColumnsResult != nil {
        // handle response
    }
}
```

## ListTableRows

 The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTableRows(ctx, operations.ListTableRowsRequest{
        RequestBody: operations.ListTableRowsRequestBody{
            MaxResults: sdk.Int64(123820),
            NextToken: sdk.String("quo"),
            RowIds: []string{
                "pariatur",
                "maxime",
                "ea",
                "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        MaxResults: sdk.String("voluptate"),
        NextToken: sdk.String("autem"),
        TableID: "nam",
        WorkbookID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTableRowsResult != nil {
        // handle response
    }
}
```

## ListTables

 The ListTables API allows you to retrieve a list of all the tables in a workbook. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTables(ctx, operations.ListTablesRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
        MaxResults: sdk.Int64(764912),
        NextToken: sdk.String("corporis"),
        WorkbookID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

 The ListTagsForResource API allows you to return a resource's tags. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("eaque"),
        ResourceArn: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResult != nil {
        // handle response
    }
}
```

## QueryTableRows

 The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.QueryTableRows(ctx, operations.QueryTableRowsRequest{
        RequestBody: operations.QueryTableRowsRequestBody{
            FilterFormula: operations.QueryTableRowsRequestBodyFilterFormula{
                ContextRowID: sdk.String("nesciunt"),
                Formula: sdk.String("eos"),
            },
            MaxResults: sdk.Int64(18521),
            NextToken: sdk.String("dolores"),
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("facilis"),
        TableID: "perspiciatis",
        WorkbookID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryTableRowsResult != nil {
        // handle response
    }
}
```

## StartTableDataImportJob

 The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 

### Example Usage

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
    res, err := s.SDK.StartTableDataImportJob(ctx, operations.StartTableDataImportJobRequest{
        RequestBody: operations.StartTableDataImportJobRequestBody{
            ClientRequestToken: "porro",
            DataFormat: operations.StartTableDataImportJobRequestBodyDataFormatEnumDelimitedText,
            DataSource: operations.StartTableDataImportJobRequestBodyDataSource{
                DataSourceConfig: &shared.ImportDataSourceConfig{
                    DataSourceURL: sdk.String("consequuntur"),
                },
            },
            ImportOptions: operations.StartTableDataImportJobRequestBodyImportOptions{
                DelimitedTextOptions: &shared.DelimitedTextImportOptions{
                    DataCharacterEncoding: shared.ImportDataCharacterEncodingEnumUtf16Be.ToPointer(),
                    Delimiter: "error",
                    HasHeaderRow: sdk.Bool(false),
                    IgnoreEmptyRows: sdk.Bool(false),
                },
                DestinationOptions: &shared.DestinationOptions{
                    ColumnMap: map[string]shared.SourceDataColumnProperties{
                        "occaecati": shared.SourceDataColumnProperties{
                            ColumnIndex: sdk.Int64(699098),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        TableID: "pariatur",
        WorkbookID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTableDataImportJobResult != nil {
        // handle response
    }
}
```

## TagResource

 The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "libero": "delectus",
                "quaerat": "quos",
                "aliquid": "dolorem",
                "dolorem": "dolor",
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        ResourceArn: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResult != nil {
        // handle response
    }
}
```

## UntagResource

 The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        ResourceArn: "odio",
        TagKeys: []string{
            "accusamus",
            "quidem",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResult != nil {
        // handle response
    }
}
```
