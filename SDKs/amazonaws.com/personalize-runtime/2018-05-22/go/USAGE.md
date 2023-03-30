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

    req := operations.GetPersonalizedRankingRequest{
        Headers: operations.GetPersonalizedRankingHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.GetPersonalizedRankingRequestBody{
            CampaignArn: "illum",
            Context: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
            FilterArn: "magnam",
            FilterValues: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            InputList: []string{
                "excepturi",
                "nisi",
            },
            UserID: "recusandae",
        },
    }

    ctx := context.Background()
    res, err := s.GetPersonalizedRanking(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonalizedRankingResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->