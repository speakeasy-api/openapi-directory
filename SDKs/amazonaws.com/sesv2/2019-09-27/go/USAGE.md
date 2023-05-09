<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchGetMetricData(ctx, operations.BatchGetMetricDataRequest{
        RequestBody: operations.BatchGetMetricDataRequestBody{
            Queries: []shared.BatchGetMetricDataQuery{
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "distinctio": "quibusdam",
                        "unde": "nulla",
                        "corrupti": "illum",
                    },
                    EndDate: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
                    ID: "a674e0f4-67cc-4879-aed1-51a05dfc2ddf",
                    Metric: shared.MetricEnumOpen,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2020-08-07T00:03:55.328Z"),
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                    EndDate: types.MustTimeFromString("2021-09-20T20:35:01.256Z"),
                    ID: "928fc816-742c-4b73-9205-929396fea759",
                    Metric: shared.MetricEnumOpen,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2020-11-28T02:15:07.561Z"),
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "ipsa": "reiciendis",
                    },
                    EndDate: types.MustTimeFromString("2021-09-11T04:59:11.542Z"),
                    ID: "a2352c59-5590-47af-b1a3-a2fa94677392",
                    Metric: shared.MetricEnumTransientBounce,
                    Namespace: shared.MetricNamespaceEnumVdm,
                    StartDate: types.MustTimeFromString("2022-04-29T17:10:10.440Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetMetricDataResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->