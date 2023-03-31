<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchExecuteStatementRequest(
    batch_execute_statement_input=shared.BatchExecuteStatementInput(
        client_token="corrupti",
        cluster_identifier="provident",
        database="distinctio",
        db_user="quibusdam",
        secret_arn="unde",
        sqls=[
            "corrupti",
            "illum",
            "vel",
            "error",
        ],
        statement_name="deserunt",
        with_event=False,
        workgroup_name="suscipit",
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
    x_amz_target="RedshiftData.BatchExecuteStatement",
)
    
res = s.batch_execute_statement(req)

if res.batch_execute_statement_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->