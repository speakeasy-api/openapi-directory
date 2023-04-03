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

    req := operations.AddTagsToStreamRequest{
        AddTagsToStreamInput: shared.AddTagsToStreamInput{
            StreamARN: "corrupti",
            StreamName: "provident",
            Tags: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        },
        XAmzAlgorithm: "error",
        XAmzContentSha256: "deserunt",
        XAmzCredential: "suscipit",
        XAmzDate: "iure",
        XAmzSecurityToken: "magnam",
        XAmzSignature: "debitis",
        XAmzSignedHeaders: "ipsa",
        XAmzTarget: "Kinesis_20131202.AddTagsToStream",
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