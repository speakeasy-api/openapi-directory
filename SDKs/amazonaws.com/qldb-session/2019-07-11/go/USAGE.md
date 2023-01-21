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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "QLDBSession.SendCommand",
        },
        Request: shared.SendCommandRequest{
            AbortTransaction: map[string]interface{}{
                "et": "nihil",
            },
            CommitTransaction: &shared.CommitTransactionRequest{
                CommitDigest: "rerum",
                TransactionID: "dicta",
            },
            EndSession: map[string]interface{}{
                "voluptatum": "et",
            },
            ExecuteStatement: &shared.ExecuteStatementRequest{
                Parameters: []shared.ValueHolder{
                    shared.ValueHolder{
                        IonBinary: "dolorem",
                        IonText: "et",
                    },
                    shared.ValueHolder{
                        IonBinary: "voluptate",
                        IonText: "iste",
                    },
                    shared.ValueHolder{
                        IonBinary: "vitae",
                        IonText: "totam",
                    },
                },
                Statement: "dolores",
                TransactionID: "illum",
            },
            FetchPage: &shared.FetchPageRequest{
                NextPageToken: "debitis",
                TransactionID: "vel",
            },
            SessionToken: "odio",
            StartSession: &shared.StartSessionRequest{
                LedgerName: "dolore",
            },
            StartTransaction: map[string]interface{}{
                "aspernatur": "accusantium",
                "totam": "commodi",
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