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