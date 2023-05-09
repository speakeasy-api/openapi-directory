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
    res, err := s.CreateWorkflow(ctx, operations.CreateWorkflowRequest{
        RequestBody: operations.CreateWorkflowRequestBody{
            ApplicationConfigurationID: "corrupti",
            Description: sdk.String("provident"),
            InputParameters: map[string]shared.StepInput{
                "quibusdam": shared.StepInput{
                    IntegerValue: sdk.Int64(602763),
                    ListOfStringsValue: []string{
                        "corrupti",
                        "illum",
                        "vel",
                        "error",
                    },
                    MapOfStringValue: map[string]string{
                        "suscipit": "iure",
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    StringValue: sdk.String("tempora"),
                },
                "suscipit": shared.StepInput{
                    IntegerValue: sdk.Int64(477665),
                    ListOfStringsValue: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    MapOfStringValue: map[string]string{
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                    StringValue: sdk.String("veritatis"),
                },
                "deserunt": shared.StepInput{
                    IntegerValue: sdk.Int64(20218),
                    ListOfStringsValue: []string{
                        "repellendus",
                        "sapiente",
                    },
                    MapOfStringValue: map[string]string{
                        "odit": "at",
                        "at": "maiores",
                        "molestiae": "quod",
                        "quod": "esse",
                    },
                    StringValue: sdk.String("totam"),
                },
            },
            Name: "Omar Carroll",
            StepTargets: []string{
                "fugit",
                "deleniti",
                "hic",
            },
            Tags: map[string]string{
                "totam": "beatae",
                "commodi": "molestiae",
                "modi": "qui",
                "impedit": "cum",
            },
            TemplateID: "esse",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMigrationWorkflowResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->