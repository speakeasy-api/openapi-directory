<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AccountArticleReportRequest(
    security=operations.AccountArticleReportSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.AccountArticleReportQueryParams(
        group_id=6497618476403101202,
    ),
)
    
res = s.articles.account_article_report(req)

if res.account_reports is not None:
    # handle response
```
<!-- End SDK Example Usage -->