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
                    BidPercentage: "porro",
                    InventoryReferenceID: "nulla",
                    InventoryReferenceType: "id",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    BidPercentage: "vero",
                    InventoryReferenceID: "perspiciatis",
                    InventoryReferenceType: "nulla",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    BidPercentage: "nihil",
                    InventoryReferenceID: "fuga",
                    InventoryReferenceType: "facilis",
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