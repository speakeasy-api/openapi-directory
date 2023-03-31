<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = shared.Article(
    article=shared.ArticleArticle(
        body_markdown="corrupti",
        canonical_url="provident",
        description="distinctio",
        main_image="quibusdam",
        organization_id=602763,
        published=False,
        series="nulla",
        tags="corrupti",
        title="Dr.",
    ),
)
    
res = s.articles.create_article(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->