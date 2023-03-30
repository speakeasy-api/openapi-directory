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

    req := operations.GETActivateTypeRequest{
        QueryParams: operations.GETActivateTypeQueryParams{
            Action: "ActivateType",
            AutoUpdate: false,
            ExecutionRoleArn: "corrupti",
            LoggingConfig: &operations.GETActivateTypeLoggingConfig{
                LogGroupName: "provident",
                LogRoleArn: "distinctio",
            },
            MajorVersion: 844266,
            PublicTypeArn: "unde",
            PublisherID: "nulla",
            Type: "MODULE",
            TypeName: "illum",
            TypeNameAlias: "vel",
            Version: "2010-05-15",
            VersionBump: "MINOR",
        },
        Headers: operations.GETActivateTypeHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "suscipit",
            XAmzCredential: "iure",
            XAmzDate: "magnam",
            XAmzSecurityToken: "debitis",
            XAmzSignature: "ipsa",
            XAmzSignedHeaders: "delectus",
        },
    }

    ctx := context.Background()
    res, err := s.GETActivateType(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->