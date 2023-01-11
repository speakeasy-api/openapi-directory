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
    
req = operations.DescribeServicesRequest(
    query_params=operations.DescribeServicesQueryParams(
        max_results="maiores",
        next_token="nobis",
    ),
    headers=operations.DescribeServicesHeaders(
        x_amz_algorithm="quos",
        x_amz_content_sha256="facilis",
        x_amz_credential="qui",
        x_amz_date="quis",
        x_amz_security_token="aut",
        x_amz_signature="est",
        x_amz_signed_headers="ipsa",
        x_amz_target="AWSPriceListService.DescribeServices",
    ),
    request=shared.DescribeServicesRequest(
        format_version="eveniet",
        max_results=1787359646289181114,
        next_token="vitae",
        service_code="quos",
    ),
)
    
res = s.describe_services(req)

if res.describe_services_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->