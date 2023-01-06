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
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAddSourceIdentifierToSubscriptionRequest{
        QueryParams: operations.GetAddSourceIdentifierToSubscriptionQueryParams{
            Action: "AddSourceIdentifierToSubscription",
            SourceIdentifier: "voluptatem",
            SubscriptionName: "sit",
            Version: "2013-09-09",
        },
        Headers: operations.GetAddSourceIdentifierToSubscriptionHeaders{
            XAmzAlgorithm: "ea",
            XAmzContentSha256: "quod",
            XAmzCredential: "quia",
            XAmzDate: "nisi",
            XAmzSecurityToken: "sunt",
            XAmzSignature: "magni",
            XAmzSignedHeaders: "voluptates",
        },
    }
    
    res, err := s.GetAddSourceIdentifierToSubscription(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->