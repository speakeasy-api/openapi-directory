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
    
req = operations.BatchUpdateClusterRequest(
    headers=operations.BatchUpdateClusterHeaders(
        x_amz_algorithm="dicta",
        x_amz_content_sha256="inventore",
        x_amz_credential="perspiciatis",
        x_amz_date="ut",
        x_amz_security_token="esse",
        x_amz_signature="facere",
        x_amz_signed_headers="commodi",
        x_amz_target="AmazonMemoryDB.BatchUpdateCluster",
    ),
    request=shared.BatchUpdateClusterRequest(
        cluster_names=[
            "asperiores",
            "amet",
            "cupiditate",
        ],
        service_update=shared.ServiceUpdateRequest(
            service_update_name_to_apply="nisi",
        ),
    ),
)
    
res = s.batch_update_cluster(req)

if res.batch_update_cluster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->