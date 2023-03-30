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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchCreateTableRowsRequest{
        PathParams: operations.BatchCreateTableRowsPathParams{
            TableID: "corrupti",
            WorkbookID: "provident",
        },
        Headers: operations.BatchCreateTableRowsHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
        },
        Request: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: "error",
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "suscipit",
                    CellsToCreate: map[string]shared.CellInput{
                        "magnam": shared.CellInput{
                            Fact: "debitis",
                            Facts: []string{
                                "delectus",
                            },
                        },
                        "tempora": shared.CellInput{
                            Fact: "suscipit",
                            Facts: []string{
                                "minus",
                                "placeat",
                            },
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "voluptatum",
                    CellsToCreate: map[string]shared.CellInput{
                        "excepturi": shared.CellInput{
                            Fact: "nisi",
                            Facts: []string{
                                "temporibus",
                                "ab",
                                "quis",
                                "veritatis",
                            },
                        },
                        "deserunt": shared.CellInput{
                            Fact: "perferendis",
                            Facts: []string{
                                "repellendus",
                                "sapiente",
                            },
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "quo",
                    CellsToCreate: map[string]shared.CellInput{
                        "at": shared.CellInput{
                            Fact: "at",
                            Facts: []string{
                                "molestiae",
                                "quod",
                                "quod",
                                "esse",
                            },
                        },
                    },
                },
            },
        },
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