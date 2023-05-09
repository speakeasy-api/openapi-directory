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
    res, err := s.GETAuthorizeCacheSecurityGroupIngress(ctx, operations.GETAuthorizeCacheSecurityGroupIngressRequest{
        Action: operations.GETAuthorizeCacheSecurityGroupIngressActionEnumAuthorizeCacheSecurityGroupIngress,
        CacheSecurityGroupName: "corrupti",
        Ec2SecurityGroupName: "provident",
        Ec2SecurityGroupOwnerID: "distinctio",
        Version: operations.GETAuthorizeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202,
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("error"),
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