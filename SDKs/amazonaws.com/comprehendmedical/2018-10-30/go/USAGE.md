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
            XAmzAlgorithm: "temporibus",
            XAmzContentSha256: "explicabo",
            XAmzCredential: "eaque",
            XAmzDate: "rem",
            XAmzSecurityToken: "explicabo",
            XAmzSignature: "veritatis",
            XAmzSignedHeaders: "ducimus",
            XAmzTarget: "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
        },
        Request: shared.DescribeEntitiesDetectionV2JobRequest{
            JobID: "incidunt",
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