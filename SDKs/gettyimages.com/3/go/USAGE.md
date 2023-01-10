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
                APIKey: &shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetV3AffiliatesSearchImagesRequest{
        QueryParams: operations.GetV3AffiliatesSearchImagesQueryParams{
            Phrase: "vitae",
            Style: "vector",
        },
        Headers: operations.GetV3AffiliatesSearchImagesHeaders{
            AcceptLanguage: "dolorum",
        },
    }
    
    res, err := s.AffiliateSearch.GetV3AffiliatesSearchImages(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AffiliateImageSearchResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->