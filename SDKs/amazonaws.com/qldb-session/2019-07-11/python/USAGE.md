<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.SendCommandRequest(
    headers=operations.SendCommandHeaders(
        x_amz_algorithm="cum",
        x_amz_content_sha256="repellat",
        x_amz_credential="quaerat",
        x_amz_date="velit",
        x_amz_security_token="magni",
        x_amz_signature="delectus",
        x_amz_signed_headers="vel",
        x_amz_target="QLDBSession.SendCommand",
    ),
    request=shared.SendCommandRequest(
        abort_transaction={
            "nihil": "laudantium",
            "magni": "vel",
        },
        commit_transaction=shared.CommitTransactionRequest(
            commit_digest="eaque",
            transaction_id="incidunt",
        ),
        end_session={
            "magnam": "accusamus",
            "occaecati": "rerum",
        },
        execute_statement=shared.ExecuteStatementRequest(
            parameters=[
                shared.ValueHolder(
                    ion_binary="ut",
                    ion_text="consequatur",
                ),
                shared.ValueHolder(
                    ion_binary="sequi",
                    ion_text="omnis",
                ),
            ],
            statement="quis",
            transaction_id="labore",
        ),
        fetch_page=shared.FetchPageRequest(
            next_page_token="sapiente",
            transaction_id="accusamus",
        ),
        session_token="velit",
        start_session=shared.StartSessionRequest(
            ledger_name="amet",
        ),
        start_transaction={
            "sunt": "molestias",
        },
    ),
)
    
res = s.send_command(req)

if res.send_command_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->