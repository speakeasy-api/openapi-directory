<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETActivateTypeRequest(
    action="ActivateType",
    auto_update=False,
    execution_role_arn="corrupti",
    logging_config=operations.GETActivateTypeLoggingConfig(
        log_group_name="provident",
        log_role_arn="distinctio",
    ),
    major_version=844266,
    public_type_arn="unde",
    publisher_id="nulla",
    type="MODULE",
    type_name="illum",
    type_name_alias="vel",
    version="2010-05-15",
    version_bump="MINOR",
    x_amz_algorithm="deserunt",
    x_amz_content_sha256="suscipit",
    x_amz_credential="iure",
    x_amz_date="magnam",
    x_amz_security_token="debitis",
    x_amz_signature="ipsa",
    x_amz_signed_headers="delectus",
)
    
res = s.get_activate_type(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->