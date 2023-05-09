<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateMonitor(ctx, operations.CreateMonitorRequest{
        RequestBody: operations.CreateMonitorRequestBody{
            ClientToken: sdk.String("corrupti"),
            InternetMeasurementsLogDelivery: &operations.CreateMonitorRequestBodyInternetMeasurementsLogDelivery{
                S3Config: &shared.S3Config{
                    BucketName: sdk.String("provident"),
                    BucketPrefix: sdk.String("distinctio"),
                    LogDeliveryStatus: shared.LogDeliveryStatusEnumDisabled.ToPointer(),
                },
            },
            MaxCityNetworksToMonitor: sdk.Int64(602763),
            MonitorName: "nulla",
            Resources: []string{
                "illum",
                "vel",
                "error",
            },
            Tags: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            TrafficPercentageToMonitor: sdk.Int64(272656),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMonitorOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->