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
            TrackerName: "reiciendis",
        },
        Headers: operations.AssociateTrackerConsumerHeaders{
            XAmzAlgorithm: "rerum",
            XAmzContentSha256: "sit",
            XAmzCredential: "eaque",
            XAmzDate: "debitis",
            XAmzSecurityToken: "dolore",
            XAmzSignature: "sapiente",
            XAmzSignedHeaders: "eum",
        },
        Request: operations.AssociateTrackerConsumerRequestBody{
            ConsumerArn: "incidunt",
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