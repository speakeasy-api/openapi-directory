<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchCreateTableRowsRequest{
        PathParams: operations.BatchCreateTableRowsPathParams{
            TableID: "et",
            WorkbookID: "non",
        },
        Headers: operations.BatchCreateTableRowsHeaders{
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "tempora",
            XAmzCredential: "aliquid",
            XAmzDate: "molestiae",
            XAmzSecurityToken: "fugit",
            XAmzSignature: "quam",
            XAmzSignedHeaders: "cum",
        },
        Request: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: "a",
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "delectus",
                    CellsToCreate: map[string]shared.CellInput{
                        "ipsum": shared.CellInput{
                            Fact: "et",
                        },
                        "quis": shared.CellInput{
                            Fact: "et",
                        },
                        "cupiditate": shared.CellInput{
                            Fact: "sed",
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "praesentium",
                    CellsToCreate: map[string]shared.CellInput{
                        "aut": shared.CellInput{
                            Fact: "architecto",
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "omnis",
                    CellsToCreate: map[string]shared.CellInput{
                        "sunt": shared.CellInput{
                            Fact: "modi",
                        },
                        "nisi": shared.CellInput{
                            Fact: "dolores",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.BatchCreateTableRows(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateTableRowsResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->