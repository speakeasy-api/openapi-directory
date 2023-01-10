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
    
    req := operations.AssociateTrackerConsumerRequest{
        PathParams: operations.AssociateTrackerConsumerPathParams{
            TrackerName: "omnis",
        },
        Headers: operations.AssociateTrackerConsumerHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "dolores",
            XAmzCredential: "voluptatem",
            XAmzDate: "consectetur",
            XAmzSecurityToken: "est",
            XAmzSignature: "ducimus",
            XAmzSignedHeaders: "adipisci",
        },
        Request: operations.AssociateTrackerConsumerRequestBody{
            ConsumerArn: "ut",
        },
    }
    
    res, err := s.AssociateTrackerConsumer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTrackerConsumerResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->