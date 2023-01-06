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
    
    req := operations.GetBarcodeDecodeTypesRequest{
        Security: operations.GetBarcodeDecodeTypesSecurity{
            XFungeneratorsAPISecret: shared.SchemeXFungeneratorsAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
    }
    
    res, err := s.Barcode.GetBarcodeDecodeTypes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->