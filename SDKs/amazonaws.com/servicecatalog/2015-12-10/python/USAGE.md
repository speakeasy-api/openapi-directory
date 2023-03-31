<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptPortfolioShareRequest(
    accept_portfolio_share_input=shared.AcceptPortfolioShareInput(
        accept_language="corrupti",
        portfolio_id="provident",
        portfolio_share_type="AWS_ORGANIZATIONS",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    x_amz_target="AWS242ServiceCatalogService.AcceptPortfolioShare",
)
    
res = s.accept_portfolio_share(req)

if res.accept_portfolio_share_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->