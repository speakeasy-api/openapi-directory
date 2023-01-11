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
        db_cluster_identifier="qui",
        feature_name="consequatur",
        role_arn="laborum",
        version="2014-10-31",
    ),
    headers=operations.GetAddRoleToDbClusterHeaders(
        x_amz_algorithm="laboriosam",
        x_amz_content_sha256="fugiat",
        x_amz_credential="et",
        x_amz_date="nesciunt",
        x_amz_security_token="tempore",
        x_amz_signature="libero",
        x_amz_signed_headers="modi",
    ),
)
    
res = s.get_add_role_to_db_cluster(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->