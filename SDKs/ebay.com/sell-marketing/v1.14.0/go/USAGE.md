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
    s := sdk.New()

    req := operations.BulkCreateAdsByInventoryReferenceRequest{
        Security: operations.BulkCreateAdsByInventoryReferenceSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BulkCreateAdsByInventoryReferencePathParams{
            CampaignID: "unde",
        },
        Request: shared.BulkCreateAdsByInventoryReferenceRequest{
            Requests: []shared.CreateAdsByInventoryReferenceRequest{
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "porro",
                    BidPercentage: "nulla",
                    InventoryReferenceID: "id",
                    InventoryReferenceType: "vero",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "perspiciatis",
                    BidPercentage: "nulla",
                    InventoryReferenceID: "nihil",
                    InventoryReferenceType: "fuga",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "facilis",
                    BidPercentage: "eum",
                    InventoryReferenceID: "iusto",
                    InventoryReferenceType: "ullam",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Ad.BulkCreateAdsByInventoryReference(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCreateAdsByInventoryReferenceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->