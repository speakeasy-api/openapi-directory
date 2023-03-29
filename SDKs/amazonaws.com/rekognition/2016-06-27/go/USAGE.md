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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "RekognitionService.CompareFaces",
        },
        Request: shared.CompareFacesRequest{
            QualityFilter: "LOW",
            SimilarityThreshold: 6235.64,
            SourceImage: shared.Image{
                Bytes: "facilis",
                S3Object: &shared.S3Object{
                    Bucket: "eum",
                    Name: "iusto",
                    Version: "ullam",
                },
            },
            TargetImage: shared.Image{
                Bytes: "saepe",
                S3Object: &shared.S3Object{
                    Bucket: "inventore",
                    Name: "sapiente",
                    Version: "enim",
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