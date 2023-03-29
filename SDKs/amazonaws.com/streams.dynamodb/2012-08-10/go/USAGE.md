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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "DynamoDBStreams_20120810.DescribeStream",
        },
        Request: shared.DescribeStreamInput{
            ExclusiveStartShardID: "nihil",
            Limit: 623564,
            StreamArn: "facilis",
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