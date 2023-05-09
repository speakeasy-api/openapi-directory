# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/qldb-session/2019-07-11/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [SendCommand](docs/sdk/README.md#sendcommand) - <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
