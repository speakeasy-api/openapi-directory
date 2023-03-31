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
        BulkCreateAdsByInventoryReferenceRequest: shared.BulkCreateAdsByInventoryReferenceRequest{
            Requests: []shared.CreateAdsByInventoryReferenceRequest{
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "provident",
                    BidPercentage: "distinctio",
                    InventoryReferenceID: "quibusdam",
                    InventoryReferenceType: "unde",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "nulla",
                    BidPercentage: "corrupti",
                    InventoryReferenceID: "illum",
                    InventoryReferenceType: "vel",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: "error",
                    BidPercentage: "deserunt",
                    InventoryReferenceID: "suscipit",
                    InventoryReferenceType: "iure",
                },
            },
        },
        CampaignID: "magnam",
    }

    ctx := context.Background()
    res, err := s.Ad.BulkCreateAdsByInventoryReference(ctx, req, operations.BulkCreateAdsByInventoryReferenceSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCreateAdsByInventoryReferenceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->