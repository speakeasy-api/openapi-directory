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
    
    req := operations.PostTransfersRequest{
        Security: operations.PostTransfersSecurity{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: "sit",
    }
    
    res, err := s.General.PostTransfers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Transfer != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->