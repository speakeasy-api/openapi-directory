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
    
req = operations.BatchExecuteStatementRequest(
    headers=operations.BatchExecuteStatementHeaders(
        x_amz_algorithm="inventore",
        x_amz_content_sha256="est",
        x_amz_credential="dolor",
        x_amz_date="animi",
        x_amz_security_token="rerum",
        x_amz_signature="sit",
        x_amz_signed_headers="et",
        x_amz_target="RedshiftData.BatchExecuteStatement",
    ),
    request=shared.BatchExecuteStatementInput(
        cluster_identifier="eos",
        database="accusantium",
        db_user="minima",
        secret_arn="qui",
        sqls=[
            "est",
        ],
        statement_name="tempora",
        with_event=False,
    ),
)
    
res = s.batch_execute_statement(req)

if res.batch_execute_statement_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->