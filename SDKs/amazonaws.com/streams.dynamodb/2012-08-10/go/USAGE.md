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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.DescribeStreamRequest{
        DescribeStreamInput: shared.DescribeStreamInput{
            ExclusiveStartShardID: "corrupti",
            Limit: 592845,
            StreamArn: "distinctio",
        },
        XAmzAlgorithm: "quibusdam",
        XAmzContentSha256: "unde",
        XAmzCredential: "nulla",
        XAmzDate: "corrupti",
        XAmzSecurityToken: "illum",
        XAmzSignature: "vel",
        XAmzSignedHeaders: "error",
        XAmzTarget: "DynamoDBStreams_20120810.DescribeStream",
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