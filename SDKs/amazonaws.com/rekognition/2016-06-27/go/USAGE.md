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
    
    req := operations.CompareFacesRequest{
        Headers: operations.CompareFacesHeaders{
            XAmzAlgorithm: "maiores",
            XAmzContentSha256: "rerum",
            XAmzCredential: "pariatur",
            XAmzDate: "quia",
            XAmzSecurityToken: "ut",
            XAmzSignature: "non",
            XAmzSignedHeaders: "incidunt",
            XAmzTarget: "RekognitionService.CompareFaces",
        },
        Request: shared.CompareFacesRequest{
            QualityFilter: "NONE",
            SimilarityThreshold: 6.200000,
            SourceImage: shared.Image{
                Bytes: "et",
                S3Object: &shared.S3Object{
                    Bucket: "maxime",
                    Name: "pariatur",
                    Version: "amet",
                },
            },
            TargetImage: shared.Image{
                Bytes: "cupiditate",
                S3Object: &shared.S3Object{
                    Bucket: "hic",
                    Name: "reiciendis",
                    Version: "voluptatem",
                },
            },
        },
    }
    
    res, err := s.CompareFaces(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompareFacesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->