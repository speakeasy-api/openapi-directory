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

    req := operations.AddTagsToStreamRequest{
        Headers: operations.AddTagsToStreamHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Kinesis_20131202.AddTagsToStream",
        },
        Request: shared.AddTagsToStreamInput{
            StreamARN: "nihil",
            StreamName: "fuga",
            Tags: map[string]string{
                "eum": "iusto",
                "ullam": "saepe",
                "inventore": "sapiente",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddTagsToStream(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->