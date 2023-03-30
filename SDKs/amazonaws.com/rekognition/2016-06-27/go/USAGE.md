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

    req := operations.CompareFacesRequest{
        Headers: operations.CompareFacesHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "RekognitionService.CompareFaces",
        },
        Request: shared.CompareFacesRequest{
            QualityFilter: "HIGH",
            SimilarityThreshold: 4236.55,
            SourceImage: shared.Image{
                Bytes: "error",
                S3Object: &shared.S3Object{
                    Bucket: "deserunt",
                    Name: "suscipit",
                    Version: "iure",
                },
            },
            TargetImage: shared.Image{
                Bytes: "magnam",
                S3Object: &shared.S3Object{
                    Bucket: "debitis",
                    Name: "ipsa",
                    Version: "delectus",
                },
            },
        },
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