<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchCreateTableRowsRequest{
        RequestBody: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: "corrupti",
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "distinctio",
                    CellsToCreate: map[string]shared.CellInput{
                        "unde": shared.CellInput{
                            Fact: "nulla",
                            Facts: []string{
                                "illum",
                                "vel",
                                "error",
                            },
                        },
                        "deserunt": shared.CellInput{
                            Fact: "suscipit",
                            Facts: []string{
                                "magnam",
                                "debitis",
                            },
                        },
                        "ipsa": shared.CellInput{
                            Fact: "delectus",
                            Facts: []string{
                                "suscipit",
                                "molestiae",
                            },
                        },
                        "minus": shared.CellInput{
                            Fact: "placeat",
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
                            Fact: "quis",
                            Facts: []string{
                                "deserunt",
                            },
                        },
                        "perferendis": shared.CellInput{
                            Fact: "ipsam",
                            Facts: []string{
                                "sapiente",
                                "quo",
                                "odit",
                                "at",
                            },
                        },
                        "at": shared.CellInput{
                            Fact: "maiores",
                            Facts: []string{
                                "quod",
                                "quod",
                            },
                        },
                        "esse": shared.CellInput{
                            Fact: "totam",
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
                            Fact: "hic",
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
        XAmzAlgorithm: "modi",
        XAmzContentSha256: "qui",
        XAmzCredential: "impedit",
        XAmzDate: "cum",
        XAmzSecurityToken: "esse",
        XAmzSignature: "ipsum",
        XAmzSignedHeaders: "excepturi",
        TableID: "aspernatur",
        WorkbookID: "perferendis",
    }

    ctx := context.Background()
    res, err := s.BatchCreateTableRows(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateTableRowsResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->