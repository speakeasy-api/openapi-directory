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

    req := operations.CompareFacesRequest{
        CompareFacesRequest: shared.CompareFacesRequest{
            QualityFilter: "LOW",
            SimilarityThreshold: 5928.45,
            SourceImage: shared.Image{
                Bytes: "distinctio",
                S3Object: &shared.S3Object{
                    Bucket: "quibusdam",
                    Name: "unde",
                    Version: "nulla",
                },
            },
            TargetImage: shared.Image{
                Bytes: "corrupti",
                S3Object: &shared.S3Object{
                    Bucket: "illum",
                    Name: "vel",
                    Version: "error",
                },
            },
        },
        XAmzAlgorithm: "deserunt",
        XAmzContentSha256: "suscipit",
        XAmzCredential: "iure",
        XAmzDate: "magnam",
        XAmzSecurityToken: "debitis",
        XAmzSignature: "ipsa",
        XAmzSignedHeaders: "delectus",
        XAmzTarget: "RekognitionService.CompareFaces",
    }

    ctx := context.Background()
    res, err := s.CompareFaces(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompareFacesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->