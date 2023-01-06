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
            SourceIdentifier: "explicabo",
            SubscriptionName: "iure",
            Version: "2013-01-10",
        },
        Headers: operations.GetAddSourceIdentifierToSubscriptionHeaders{
            XAmzAlgorithm: "ex",
            XAmzContentSha256: "in",
            XAmzCredential: "est",
            XAmzDate: "omnis",
            XAmzSecurityToken: "ipsam",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "quidem",
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