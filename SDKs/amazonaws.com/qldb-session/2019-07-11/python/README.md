# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/qldb-session/2019-07-11/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.SendCommandRequest(
    send_command_request=shared.SendCommandRequest(
        abort_transaction={
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        commit_transaction=shared.CommitTransactionRequest(
            commit_digest="illum",
            transaction_id="vel",
        ),
        end_session={
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        execute_statement=shared.ExecuteStatementRequest(
            parameters=[
                shared.ValueHolder(
                    ion_binary="tempora",
                    ion_text="suscipit",
                ),
                shared.ValueHolder(
                    ion_binary="molestiae",
                    ion_text="minus",
                ),
                shared.ValueHolder(
                    ion_binary="placeat",
                    ion_text="voluptatum",
                ),
                shared.ValueHolder(
                    ion_binary="iusto",
                    ion_text="excepturi",
                ),
            ],
            statement="nisi",
            transaction_id="recusandae",
        ),
        fetch_page=shared.FetchPageRequest(
            next_page_token="temporibus",
            transaction_id="ab",
        ),
        session_token="quis",
        start_session=shared.StartSessionRequest(
            ledger_name="veritatis",
        ),
        start_transaction={
            "perferendis": "ipsam",
            "repellendus": "sapiente",
            "quo": "odit",
        },
    ),
    x_amz_algorithm="at",
    x_amz_content_sha256="at",
    x_amz_credential="maiores",
    x_amz_date="molestiae",
    x_amz_security_token="quod",
    x_amz_signature="quod",
    x_amz_signed_headers="esse",
    x_amz_target="QLDBSession.SendCommand",
)
    
res = s.send_command(req)

if res.send_command_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `send_command` - <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
