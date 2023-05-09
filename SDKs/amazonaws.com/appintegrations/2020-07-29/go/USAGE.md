<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateDataIntegration(ctx, operations.CreateDataIntegrationRequest{
        RequestBody: operations.CreateDataIntegrationRequestBody{
            ClientToken: sdk.String("corrupti"),
            Description: sdk.String("provident"),
            FileConfiguration: &operations.CreateDataIntegrationRequestBodyFileConfiguration{
                Filters: map[string][]string{
                    "quibusdam": []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    "vel": []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    "magnam": []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
                Folders: []string{
                    "minus",
                    "placeat",
                },
            },
            KmsKey: "voluptatum",
            Name: "Miriam Huel",
            ObjectConfiguration: map[string]map[string][]string{
                "quis": map[string][]string{
                    "deserunt": []string{
                        "ipsam",
                    },
                },
            },
            ScheduleConfig: operations.CreateDataIntegrationRequestBodyScheduleConfig{
                FirstExecutionFrom: sdk.String("repellendus"),
                Object: sdk.String("sapiente"),
                ScheduleExpression: sdk.String("quo"),
            },
            SourceURI: "odit",
            Tags: map[string]string{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataIntegrationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->