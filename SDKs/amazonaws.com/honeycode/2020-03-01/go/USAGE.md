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
            TableID: "praesentium",
            WorkbookID: "et",
        },
        Headers: operations.BatchCreateTableRowsHeaders{
            XAmzAlgorithm: "ratione",
            XAmzContentSha256: "est",
            XAmzCredential: "in",
            XAmzDate: "corporis",
            XAmzSecurityToken: "dolores",
            XAmzSignature: "perferendis",
            XAmzSignedHeaders: "laboriosam",
        },
        Request: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: "numquam",
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "aperiam",
                    CellsToCreate: map[string]shared.CellInput{
                        "velit": shared.CellInput{
                            Fact: "possimus",
                        },
                        "hic": shared.CellInput{
                            Fact: "quis",
                        },
                        "sunt": shared.CellInput{
                            Fact: "quo",
                        },
                    },
                },
                shared.CreateRowData{
                    BatchItemID: "eveniet",
                    CellsToCreate: map[string]shared.CellInput{
                        "reiciendis": shared.CellInput{
                            Fact: "non",
                        },
                        "dolor": shared.CellInput{
                            Fact: "maiores",
                        },
                        "itaque": shared.CellInput{
                            Fact: "pariatur",
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