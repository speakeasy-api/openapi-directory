<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Ad.BulkCreateAdsByInventoryReference(ctx, operations.BulkCreateAdsByInventoryReferenceRequest{
        BulkCreateAdsByInventoryReferenceRequest: shared.BulkCreateAdsByInventoryReferenceRequest{
            Requests: []shared.CreateAdsByInventoryReferenceRequest{
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: sdk.String("provident"),
                    BidPercentage: sdk.String("distinctio"),
                    InventoryReferenceID: sdk.String("quibusdam"),
                    InventoryReferenceType: sdk.String("unde"),
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: sdk.String("nulla"),
                    BidPercentage: sdk.String("corrupti"),
                    InventoryReferenceID: sdk.String("illum"),
                    InventoryReferenceType: sdk.String("vel"),
                },
                shared.CreateAdsByInventoryReferenceRequest{
                    AdGroupID: sdk.String("error"),
                    BidPercentage: sdk.String("deserunt"),
                    InventoryReferenceID: sdk.String("suscipit"),
                    InventoryReferenceType: sdk.String("iure"),
                },
            },
        },
        CampaignID: "magnam",
    }, operations.BulkCreateAdsByInventoryReferenceSecurity{
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