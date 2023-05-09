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
    res, err := s.SendCommand(ctx, operations.SendCommandRequest{
        SendCommandRequest: shared.SendCommandRequest{
            AbortTransaction: map[string]interface{}{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            CommitTransaction: &shared.CommitTransactionRequest{
                CommitDigest: "illum",
                TransactionID: "vel",
            },
            EndSession: map[string]interface{}{
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            ExecuteStatement: &shared.ExecuteStatementRequest{
                Parameters: []shared.ValueHolder{
                    shared.ValueHolder{
                        IonBinary: sdk.String("tempora"),
                        IonText: sdk.String("suscipit"),
                    },
                    shared.ValueHolder{
                        IonBinary: sdk.String("molestiae"),
                        IonText: sdk.String("minus"),
                    },
                    shared.ValueHolder{
                        IonBinary: sdk.String("placeat"),
                        IonText: sdk.String("voluptatum"),
                    },
                    shared.ValueHolder{
                        IonBinary: sdk.String("iusto"),
                        IonText: sdk.String("excepturi"),
                    },
                },
                Statement: "nisi",
                TransactionID: "recusandae",
            },
            FetchPage: &shared.FetchPageRequest{
                NextPageToken: "temporibus",
                TransactionID: "ab",
            },
            SessionToken: sdk.String("quis"),
            StartSession: &shared.StartSessionRequest{
                LedgerName: "veritatis",
            },
            StartTransaction: map[string]interface{}{
                "perferendis": "ipsam",
                "repellendus": "sapiente",
                "quo": "odit",
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.SendCommandXAmzTargetEnumQldbSessionSendCommand,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendCommandResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->