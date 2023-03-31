<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchUpdateClusterRequest(
    batch_update_cluster_request=shared.BatchUpdateClusterRequest(
        cluster_names=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        service_update=shared.ServiceUpdateRequest(
            service_update_name_to_apply="unde",
        ),
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
    x_amz_target="AmazonMemoryDB.BatchUpdateCluster",
)
    
res = s.batch_update_cluster(req)

if res.batch_update_cluster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->