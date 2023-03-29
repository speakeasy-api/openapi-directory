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

    req := operations.GETAddSourceIdentifierToSubscriptionRequest{
        QueryParams: operations.GETAddSourceIdentifierToSubscriptionQueryParams{
            Action: "AddSourceIdentifierToSubscription",
            SourceIdentifier: "deserunt",
            SubscriptionName: "porro",
            Version: "2013-02-12",
        },
        Headers: operations.GETAddSourceIdentifierToSubscriptionHeaders{
            XAmzAlgorithm: "id",
            XAmzContentSha256: "vero",
            XAmzCredential: "perspiciatis",
            XAmzDate: "nulla",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "fuga",
            XAmzSignedHeaders: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.GETAddSourceIdentifierToSubscription(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->