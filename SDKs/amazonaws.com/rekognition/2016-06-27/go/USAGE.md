<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompareFaces(ctx, operations.CompareFacesRequest{
        CompareFacesRequest: shared.CompareFacesRequest{
            QualityFilter: shared.QualityFilterEnumLow.ToPointer(),
            SimilarityThreshold: sdk.Float32(5928.45),
            SourceImage: shared.Image{
                Bytes: sdk.String("distinctio"),
                S3Object: &shared.S3Object{
                    Bucket: sdk.String("quibusdam"),
                    Name: sdk.String("Ismael Little"),
                    Version: sdk.String("error"),
                },
            },
            TargetImage: shared.Image{
                Bytes: sdk.String("deserunt"),
                S3Object: &shared.S3Object{
                    Bucket: sdk.String("suscipit"),
                    Name: sdk.String("Dr. Valerie Toy"),
                    Version: sdk.String("suscipit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.CompareFacesXAmzTargetEnumRekognitionServiceCompareFaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompareFacesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->