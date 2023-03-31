<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateClusterRequest(
    request_body=operations.CreateClusterRequestBody(
        admin_user_name="corrupti",
        admin_user_password="provident",
        auth_type="SECRET_ARN",
        client_token="quibusdam",
        cluster_name="unde",
        kms_key_id="nulla",
        preferred_maintenance_window="corrupti",
        shard_capacity=847252,
        shard_count=423655,
        subnet_ids=[
            "deserunt",
            "suscipit",
            "iure",
        ],
        tags={
            "debitis": "ipsa",
            "delectus": "tempora",
        },
        vpc_security_group_ids=[
            "molestiae",
            "minus",
        ],
    ),
    x_amz_algorithm="placeat",
    x_amz_content_sha256="voluptatum",
    x_amz_credential="iusto",
    x_amz_date="excepturi",
    x_amz_security_token="nisi",
    x_amz_signature="recusandae",
    x_amz_signed_headers="temporibus",
)
    
res = s.create_cluster(req)

if res.create_cluster_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->