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
            TableID: "sit",
            WorkbookID: "voluptas",
        },
        Headers: operations.BatchCreateTableRowsHeaders{
            XAmzAlgorithm: "culpa",
            XAmzContentSha256: "expedita",
            XAmzCredential: "consequuntur",
            XAmzDate: "dolor",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "fugit",
        },
        Request: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: "et",
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "rerum",
                    CellsToCreate: map[string]shared.CellInput{
                        "debitis": shared.CellInput{
                            Fact: "voluptatum",
                        },
                        "et": shared.CellInput{
                            Fact: "ut",
                        },
                        "dolorem": shared.CellInput{
                            Fact: "et",
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