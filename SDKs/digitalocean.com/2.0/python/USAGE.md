<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.InstallKubernetesRequest(
    request=operations.InstallKubernetesRequestBody(
        addon_slugs=[
            "est",
        ],
        cluster_uuid="laudantium",
    ),
)
    
res = s.one_click_applications.install_kubernetes(req)

if res.install_kubernetes_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->