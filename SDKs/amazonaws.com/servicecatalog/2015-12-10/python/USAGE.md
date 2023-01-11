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
    
req = operations.AcceptPortfolioShareRequest(
    headers=operations.AcceptPortfolioShareHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="optio",
        x_amz_credential="iste",
        x_amz_date="nisi",
        x_amz_security_token="repudiandae",
        x_amz_signature="amet",
        x_amz_signed_headers="impedit",
        x_amz_target="AWS242ServiceCatalogService.AcceptPortfolioShare",
    ),
    request=shared.AcceptPortfolioShareInput(
        accept_language="eum",
        portfolio_id="et",
        portfolio_share_type="AWS_SERVICECATALOG",
    ),
)
    
res = s.accept_portfolio_share(req)

if res.accept_portfolio_share_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->