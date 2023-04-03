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

    req := operations.SendCommandRequest{
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
                        IonBinary: "tempora",
                        IonText: "suscipit",
                    },
                    shared.ValueHolder{
                        IonBinary: "molestiae",
                        IonText: "minus",
                    },
                    shared.ValueHolder{
                        IonBinary: "placeat",
                        IonText: "voluptatum",
                    },
                    shared.ValueHolder{
                        IonBinary: "iusto",
                        IonText: "excepturi",
                    },
                },
                Statement: "nisi",
                TransactionID: "recusandae",
            },
            FetchPage: &shared.FetchPageRequest{
                NextPageToken: "temporibus",
                TransactionID: "ab",
            },
            SessionToken: "quis",
            StartSession: &shared.StartSessionRequest{
                LedgerName: "veritatis",
            },
            StartTransaction: map[string]interface{}{
                "perferendis": "ipsam",
                "repellendus": "sapiente",
                "quo": "odit",
            },
        },
        XAmzAlgorithm: "at",
        XAmzContentSha256: "at",
        XAmzCredential: "maiores",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "quod",
        XAmzSignature: "quod",
        XAmzSignedHeaders: "esse",
        XAmzTarget: "QLDBSession.SendCommand",
    }

    ctx := context.Background()
    res, err := s.SendCommand(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SendCommandResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->