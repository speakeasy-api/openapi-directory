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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "RekognitionService.CompareFaces",
        },
        Request: shared.CompareFacesRequest{
            QualityFilter: "MEDIUM",
            SimilarityThreshold: 28.100000,
            SourceImage: shared.Image{
                Bytes: "rerum",
                S3Object: &shared.S3Object{
                    Bucket: "dicta",
                    Name: "debitis",
                    Version: "voluptatum",
                },
            },
            TargetImage: shared.Image{
                Bytes: "et",
                S3Object: &shared.S3Object{
                    Bucket: "ut",
                    Name: "dolorem",
                    Version: "et",
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