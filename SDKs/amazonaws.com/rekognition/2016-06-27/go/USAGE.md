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
            XAmzAlgorithm: "dolorum",
            XAmzContentSha256: "blanditiis",
            XAmzCredential: "culpa",
            XAmzDate: "est",
            XAmzSecurityToken: "soluta",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "sint",
            XAmzTarget: "RekognitionService.CompareFaces",
        },
        Request: shared.CompareFacesRequest{
            QualityFilter: "NONE",
            SimilarityThreshold: 87.099998,
            SourceImage: shared.Image{
                Bytes: "labore",
                S3Object: &shared.S3Object{
                    Bucket: "maxime",
                    Name: "eaque",
                    Version: "sed",
                },
            },
            TargetImage: shared.Image{
                Bytes: "ut",
                S3Object: &shared.S3Object{
                    Bucket: "expedita",
                    Name: "modi",
                    Version: "aliquam",
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