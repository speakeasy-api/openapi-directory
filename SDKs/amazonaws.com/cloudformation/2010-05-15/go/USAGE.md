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
    res, err := s.GETActivateType(ctx, operations.GETActivateTypeRequest{
        Action: operations.GETActivateTypeActionEnumActivateType,
        AutoUpdate: sdk.Bool(false),
        ExecutionRoleArn: sdk.String("corrupti"),
        LoggingConfig: &operations.GETActivateTypeLoggingConfig{
            LogGroupName: "provident",
            LogRoleArn: "distinctio",
        },
        MajorVersion: sdk.Int64(844266),
        PublicTypeArn: sdk.String("unde"),
        PublisherID: sdk.String("nulla"),
        Type: operations.GETActivateTypeTypeEnumModule.ToPointer(),
        TypeName: sdk.String("illum"),
        TypeNameAlias: sdk.String("vel"),
        Version: operations.GETActivateTypeVersionEnumTwoThousandAndTen0515,
        VersionBump: operations.GETActivateTypeVersionBumpEnumMinor.ToPointer(),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("delectus"),
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