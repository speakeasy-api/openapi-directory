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
            CampaignID: "corrupti",
        },
        Request: shared.BulkCreateAdsByInventoryReferenceRequest{
            Requests: []shared.CreateAdsByInventoryReferenceRequest{
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "distinctio",
                    BidPercentage: "quibusdam",
                    InventoryReferenceID: "unde",
                    InventoryReferenceType: "nulla",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "corrupti",
                    BidPercentage: "illum",
                    InventoryReferenceID: "vel",
                    InventoryReferenceType: "error",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "deserunt",
                    BidPercentage: "suscipit",
                    InventoryReferenceID: "iure",
                    InventoryReferenceType: "magnam",
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