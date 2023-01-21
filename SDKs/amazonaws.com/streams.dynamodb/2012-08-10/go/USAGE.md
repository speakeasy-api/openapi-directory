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
    
    req := operations.DescribeStreamRequest{
        Headers: operations.DescribeStreamHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "DynamoDBStreams_20120810.DescribeStream",
        },
        Request: shared.DescribeStreamInput{
            ExclusiveStartShardID: "fugit",
            Limit: 1543572285742637646,
            StreamArn: "nihil",
        },
    }
    
    res, err := s.DescribeStream(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStreamOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->