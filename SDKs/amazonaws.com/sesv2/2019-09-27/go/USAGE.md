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

    req := operations.BatchGetMetricDataRequest{
        RequestBody: operations.BatchGetMetricDataRequestBody{
            Queries: []shared.BatchGetMetricDataQuery{
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "distinctio": "quibusdam",
                        "unde": "nulla",
                        "corrupti": "illum",
                    },
                    EndDate: "2022-05-18T09:34:54.894Z",
                    ID: "deserunt",
                    Metric: "TRANSIENT_BOUNCE",
                    Namespace: "VDM",
                    StartDate: "2022-09-14T09:35:47.986Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    EndDate: "2022-06-07T15:55:46.205Z",
                    ID: "nisi",
                    Metric: "DELIVERY_COMPLAINT",
                    Namespace: "VDM",
                    StartDate: "2022-10-15T05:10:19.629Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                    },
                    EndDate: "2020-02-17T21:57:45.117Z",
                    ID: "quo",
                    Metric: "COMPLAINT",
                    Namespace: "VDM",
                    StartDate: "2020-05-23T06:06:25.221Z",
                },
            },
        },
        XAmzAlgorithm: "maiores",
        XAmzContentSha256: "molestiae",
        XAmzCredential: "quod",
        XAmzDate: "quod",
        XAmzSecurityToken: "esse",
        XAmzSignature: "totam",
        XAmzSignedHeaders: "porro",
    }

    ctx := context.Background()
    res, err := s.BatchGetMetricData(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetMetricDataResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->