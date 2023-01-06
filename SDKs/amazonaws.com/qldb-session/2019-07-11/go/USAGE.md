<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.SendCommandRequest{
        Headers: operations.SendCommandHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "at",
            XAmzCredential: "saepe",
            XAmzDate: "id",
            XAmzSecurityToken: "consequatur",
            XAmzSignature: "quis",
            XAmzSignedHeaders: "voluptas",
            XAmzTarget: "QLDBSession.SendCommand",
        },
        Request: shared.SendCommandRequest{
            AbortTransaction: map[string]interface{}{
                "similique": "neque",
                "deserunt": "ab",
            },
            CommitTransaction: &shared.CommitTransactionRequest{
                CommitDigest: "earum",
                TransactionID: "omnis",
            },
            EndSession: map[string]interface{}{
                "aliquid": "quia",
            },
            ExecuteStatement: &shared.ExecuteStatementRequest{
                Parameters: []shared.ValueHolder{
                    shared.ValueHolder{
                        IonBinary: "similique",
                        IonText: "repudiandae",
                    },
                    shared.ValueHolder{
                        IonBinary: "non",
                        IonText: "harum",
                    },
                },
                Statement: "ipsa",
                TransactionID: "rerum",
            },
            FetchPage: &shared.FetchPageRequest{
                NextPageToken: "nisi",
                TransactionID: "maiores",
            },
            SessionToken: "non",
            StartSession: &shared.StartSessionRequest{
                LedgerName: "autem",
            },
            StartTransaction: map[string]interface{}{
                "quam": "amet",
            },
        },
    }
    
    res, err := s.SendCommand(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SendCommandResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->