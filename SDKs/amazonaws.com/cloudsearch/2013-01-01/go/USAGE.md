<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GETBuildSuggesters(ctx, operations.GETBuildSuggestersRequest{
        Action: operations.GETBuildSuggestersActionEnumBuildSuggesters,
        DomainName: "corrupti",
        Version: operations.GETBuildSuggestersVersionEnumTwoThousandAndThirteen0101,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->