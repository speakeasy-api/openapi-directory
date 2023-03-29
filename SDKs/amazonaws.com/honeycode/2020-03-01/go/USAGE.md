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
            TableID: "unde",
            WorkbookID: "deserunt",
        },
        Headers: operations.BatchCreateTableRowsHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
        Request: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: "fuga",
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "eum",
                    CellsToCreate: map[string]shared.CellInput{
                        "ullam": shared.CellInput{
                            Fact: "saepe",
                            Facts: []string{
                                "sapiente",
                            },
                        },
                        "enim": shared.CellInput{
                            Fact: "eum",
                            Facts: []string{
                                "autem",
                                "vel",
                            },
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "non",
                    CellsToCreate: map[string]shared.CellInput{
                        "similique": shared.CellInput{
                            Fact: "reprehenderit",
                            Facts: []string{
                                "quo",
                                "quasi",
                                "laboriosam",
                                "dicta",
                            },
                        },
                        "est": shared.CellInput{
                            Fact: "voluptatem",
                            Facts: []string{
                                "fugiat",
                                "a",
                            },
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "omnis",
                    CellsToCreate: map[string]shared.CellInput{
                        "accusamus": shared.CellInput{
                            Fact: "accusamus",
                            Facts: []string{
                                "rem",
                                "quibusdam",
                                "et",
                                "praesentium",
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