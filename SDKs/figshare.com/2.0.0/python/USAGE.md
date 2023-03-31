<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AccountArticleReportRequest(
    group_id=548814,
)
    
res = s.articles.account_article_report(req, operations.AccountArticleReportSecurity(
    o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.account_reports is not None:
    # handle response
```
<!-- End SDK Example Usage -->