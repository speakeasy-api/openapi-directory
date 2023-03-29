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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "QLDBSession.SendCommand",
        },
        Request: shared.SendCommandRequest{
            AbortTransaction: map[string]interface{}{
                "fuga": "facilis",
                "eum": "iusto",
            },
            CommitTransaction: &shared.CommitTransactionRequest{
                CommitDigest: "ullam",
                TransactionID: "saepe",
            },
            EndSession: map[string]interface{}{
                "sapiente": "enim",
            },
            ExecuteStatement: &shared.ExecuteStatementRequest{
                Parameters: []shared.ValueHolder{
                    shared.ValueHolder{
                        IonBinary: "voluptatum",
                        IonText: "autem",
                    },
                    shared.ValueHolder{
                        IonBinary: "vel",
                        IonText: "non",
                    },
                },
                Statement: "deleniti",
                TransactionID: "similique",
            },
            FetchPage: &shared.FetchPageRequest{
                NextPageToken: "reprehenderit",
                TransactionID: "molestiae",
            },
            SessionToken: "quo",
            StartSession: &shared.StartSessionRequest{
                LedgerName: "quasi",
            },
            StartTransaction: map[string]interface{}{
                "dicta": "est",
                "voluptatem": "consequatur",
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