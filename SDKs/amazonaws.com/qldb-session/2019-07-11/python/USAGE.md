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