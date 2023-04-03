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

    req := operations.CreateWorkflowRequest{
        RequestBody: operations.CreateWorkflowRequestBody{
            ApplicationConfigurationID: "corrupti",
            Description: "provident",
            InputParameters: map[string]shared.StepInput{
                "quibusdam": shared.StepInput{
                    IntegerValue: 602763,
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
                    StringValue: "tempora",
                },
                "suscipit": shared.StepInput{
                    IntegerValue: 477665,
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
                    StringValue: "veritatis",
                },
                "deserunt": shared.StepInput{
                    IntegerValue: 20218,
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
                    StringValue: "totam",
                },
            },
            Name: "porro",
            StepTargets: []string{
                "dicta",
                "nam",
                "officia",
            },
            Tags: map[string]string{
                "fugit": "deleniti",
                "hic": "optio",
                "totam": "beatae",
            },
            TemplateID: "commodi",
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "modi",
        XAmzCredential: "qui",
        XAmzDate: "impedit",
        XAmzSecurityToken: "cum",
        XAmzSignature: "esse",
        XAmzSignedHeaders: "ipsum",
    }

    ctx := context.Background()
    res, err := s.CreateWorkflow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMigrationWorkflowResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->