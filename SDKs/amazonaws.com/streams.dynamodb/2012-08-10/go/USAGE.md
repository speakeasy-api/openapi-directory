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

    req := operations.DescribeStreamRequest{
        Headers: operations.DescribeStreamHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "DynamoDBStreams_20120810.DescribeStream",
        },
        Request: shared.DescribeStreamInput{
            ExclusiveStartShardID: "illum",
            Limit: 423655,
            StreamArn: "error",
        },
    }

    ctx := context.Background()
    res, err := s.DescribeStream(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStreamOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->