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
    
req = operations.GetAttachInstancesRequest(
    query_params=operations.GetAttachInstancesQueryParams(
        action="AttachInstances",
        auto_scaling_group_name="eum",
        instance_ids=[
            "ut",
            "similique",
        ],
        version="2011-01-01",
    ),
    headers=operations.GetAttachInstancesHeaders(
        x_amz_algorithm="praesentium",
        x_amz_content_sha256="ipsa",
        x_amz_credential="ipsa",
        x_amz_date="rerum",
        x_amz_security_token="iure",
        x_amz_signature="rem",
        x_amz_signed_headers="dolore",
    ),
)
    
res = s.get_attach_instances(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->