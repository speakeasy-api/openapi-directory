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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.AddCallBroadcastBatch(ctx, operations.AddCallBroadcastBatchRequest{
        BatchRequest: &shared.BatchRequest{
            ContactListID: sdk.Int64(548814),
            Name: sdk.String("Kelvin Sporer"),
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    ContactID: sdk.Int64(963663),
                    FromNumber: sdk.String("tempora"),
                    PhoneNumber: sdk.String("suscipit"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "minus": "placeat",
                        "voluptatum": "iusto",
                    },
                    ContactID: sdk.Int64(568045),
                    FromNumber: sdk.String("nisi"),
                    PhoneNumber: sdk.String("recusandae"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "ab": "quis",
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                        "repellendus": "sapiente",
                    },
                    ContactID: sdk.Int64(778157),
                    FromNumber: sdk.String("odit"),
                    PhoneNumber: sdk.String("at"),
                },
            },
            ScrubDuplicates: sdk.Bool(false),
        },
        ID: 870088,
        StrictValidation: sdk.Bool(false),
    }, operations.AddCallBroadcastBatchSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->