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
    
req = operations.GetAddRoleToDbClusterRequest(
    query_params=operations.GetAddRoleToDbClusterQueryParams(
        action="AddRoleToDBCluster",
        db_cluster_identifier="aut",
        feature_name="corrupti",
        role_arn="molestiae",
        version="2014-10-31",
    ),
    headers=operations.GetAddRoleToDbClusterHeaders(
        x_amz_algorithm="nemo",
        x_amz_content_sha256="beatae",
        x_amz_credential="iste",
        x_amz_date="fuga",
        x_amz_security_token="suscipit",
        x_amz_signature="voluptatem",
        x_amz_signed_headers="veniam",
    ),
)
    
res = s.get_add_role_to_db_cluster(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->