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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.SendCommandRequest{
        Headers: operations.SendCommandHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "QLDBSession.SendCommand",
        },
        Request: shared.SendCommandRequest{
            AbortTransaction: map[string]interface{}{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            CommitTransaction: &shared.CommitTransactionRequest{
                CommitDigest: "delectus",
                TransactionID: "tempora",
            },
            EndSession: map[string]interface{}{
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            ExecuteStatement: &shared.ExecuteStatementRequest{
                Parameters: []shared.ValueHolder{
                    shared.ValueHolder{
                        IonBinary: "excepturi",
                        IonText: "nisi",
                    },
                    shared.ValueHolder{
                        IonBinary: "recusandae",
                        IonText: "temporibus",
                    },
                },
                Statement: "ab",
                TransactionID: "quis",
            },
            FetchPage: &shared.FetchPageRequest{
                NextPageToken: "veritatis",
                TransactionID: "deserunt",
            },
            SessionToken: "perferendis",
            StartSession: &shared.StartSessionRequest{
                LedgerName: "ipsam",
            },
            StartTransaction: map[string]interface{}{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
        },
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