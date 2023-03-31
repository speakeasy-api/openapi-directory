<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETAddRoleToDBClusterRequest(
    action="AddRoleToDBCluster",
    db_cluster_identifier="corrupti",
    feature_name="provident",
    role_arn="distinctio",
    version="2014-10-31",
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
)
    
res = s.get_add_role_to_db_cluster(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->