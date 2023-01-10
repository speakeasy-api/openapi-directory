<!-- Start SDK Example Usage -->
```go
package main

import (
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
            CampaignID: "maiores",
        },
        Request: shared.BulkCreateAdsByInventoryReferenceRequest{
            Requests: []shared.CreateAdsByInventoryReferenceRequest{
                shared.CreateAdsByInventoryReferenceRequest{
                    BidPercentage: "dolor",
                    InventoryReferenceID: "tempora",
                    InventoryReferenceType: "et",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    BidPercentage: "harum",
                    InventoryReferenceID: "est",
                    InventoryReferenceType: "quibusdam",
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    BidPercentage: "minima",
                    InventoryReferenceID: "aspernatur",
                    InventoryReferenceType: "a",
                },
            },
        },
    }
    
    res, err := s.Ad.BulkCreateAdsByInventoryReference(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCreateAdsByInventoryReferenceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->