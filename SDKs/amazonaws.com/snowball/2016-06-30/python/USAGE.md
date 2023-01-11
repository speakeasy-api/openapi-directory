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
    
req = operations.CancelClusterRequest(
    headers=operations.CancelClusterHeaders(
        x_amz_algorithm="perferendis",
        x_amz_content_sha256="consequatur",
        x_amz_credential="ut",
        x_amz_date="soluta",
        x_amz_security_token="voluptatem",
        x_amz_signature="adipisci",
        x_amz_signed_headers="nobis",
        x_amz_target="AWSIESnowballJobManagementService.CancelCluster",
    ),
    request=shared.CancelClusterRequest(
        cluster_id="necessitatibus",
    ),
)
    
res = s.cancel_cluster(req)

if res.cancel_cluster_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->