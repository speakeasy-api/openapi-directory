<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        django_rest_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateUrlsExportRequest(
    urls_query=shared.UrlsQuery(
        fields_=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        filters={
            "nulla": "corrupti",
            "illum": "vel",
            "error": "deserunt",
        },
        sort=[
            {
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            {
                "suscipit": "molestiae",
                "minus": "placeat",
            },
        ],
    ),
    analysis_slug="voluptatum",
    area="disappeared",
    project_slug="excepturi",
    username="Glen.Walsh33",
)
    
res = s.analysis.create_urls_export(req)

if res.csv_export_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->