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
    
    req := operations.DescribeEntitiesDetectionV2JobRequest{
        Headers: operations.DescribeEntitiesDetectionV2JobHeaders{
            XAmzAlgorithm: "enim",
            XAmzContentSha256: "sunt",
            XAmzCredential: "quos",
            XAmzDate: "at",
            XAmzSecurityToken: "iusto",
            XAmzSignature: "et",
            XAmzSignedHeaders: "praesentium",
            XAmzTarget: "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
        },
        Request: shared.DescribeEntitiesDetectionV2JobRequest{
            JobID: "aut",
        },
    }
    
    res, err := s.DescribeEntitiesDetectionV2Job(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEntitiesDetectionV2JobResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->