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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetPersonalizedRankingRequest{
        RequestBody: operations.GetPersonalizedRankingRequestBody{
            CampaignArn: "corrupti",
            Context: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            FilterArn: "vel",
            FilterValues: map[string]string{
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            InputList: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
            UserID: "placeat",
        },
        XAmzAlgorithm: "voluptatum",
        XAmzContentSha256: "iusto",
        XAmzCredential: "excepturi",
        XAmzDate: "nisi",
        XAmzSecurityToken: "recusandae",
        XAmzSignature: "temporibus",
        XAmzSignedHeaders: "ab",
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