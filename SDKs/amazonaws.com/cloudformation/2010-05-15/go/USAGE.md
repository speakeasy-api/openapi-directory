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
            ExecutionRoleArn: "deserunt",
            LoggingConfig: &operations.GETActivateTypeLoggingConfig{
                LogGroupName: "porro",
                LogRoleArn: "nulla",
            },
            MajorVersion: 602763,
            PublicTypeArn: "vero",
            PublisherID: "perspiciatis",
            Type: "HOOK",
            TypeName: "nihil",
            TypeNameAlias: "fuga",
            Version: "2010-05-15",
            VersionBump: "MAJOR",
        },
        Headers: operations.GETActivateTypeHeaders{
            XAmzAlgorithm: "iusto",
            XAmzContentSha256: "ullam",
            XAmzCredential: "saepe",
            XAmzDate: "inventore",
            XAmzSecurityToken: "sapiente",
            XAmzSignature: "enim",
            XAmzSignedHeaders: "eum",
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