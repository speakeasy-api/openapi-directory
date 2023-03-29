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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GETBuildSuggestersRequest{
        QueryParams: operations.GETBuildSuggestersQueryParams{
            Action: "BuildSuggesters",
            DomainName: "deserunt",
            Version: "2013-01-01",
        },
        Headers: operations.GETBuildSuggestersHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.GETBuildSuggesters(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->