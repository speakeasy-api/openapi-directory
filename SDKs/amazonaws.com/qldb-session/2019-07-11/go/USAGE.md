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
            XAmzAlgorithm: "cum",
            XAmzContentSha256: "repellat",
            XAmzCredential: "quaerat",
            XAmzDate: "velit",
            XAmzSecurityToken: "magni",
            XAmzSignature: "delectus",
            XAmzSignedHeaders: "vel",
            XAmzTarget: "QLDBSession.SendCommand",
        },
        Request: shared.SendCommandRequest{
            AbortTransaction: map[string]interface{}{
                "nihil": "laudantium",
                "magni": "vel",
            },
            CommitTransaction: &shared.CommitTransactionRequest{
                CommitDigest: "eaque",
                TransactionID: "incidunt",
            },
            EndSession: map[string]interface{}{
                "magnam": "accusamus",
                "occaecati": "rerum",
            },
            ExecuteStatement: &shared.ExecuteStatementRequest{
                Parameters: []shared.ValueHolder{
                    shared.ValueHolder{
                        IonBinary: "ut",
                        IonText: "consequatur",
                    },
                    shared.ValueHolder{
                        IonBinary: "sequi",
                        IonText: "omnis",
                    },
                },
                Statement: "quis",
                TransactionID: "labore",
            },
            FetchPage: &shared.FetchPageRequest{
                NextPageToken: "sapiente",
                TransactionID: "accusamus",
            },
            SessionToken: "velit",
            StartSession: &shared.StartSessionRequest{
                LedgerName: "amet",
            },
            StartTransaction: map[string]interface{}{
                "sunt": "molestias",
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