<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        django_rest_token=shared.SchemeDjangoRestToken(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateUrlsExportRequest(
    path_params=operations.CreateUrlsExportPathParams(
        analysis_slug="error",
        project_slug="minus",
        username="animi",
    ),
    query_params=operations.CreateUrlsExportQueryParams(
        area="disappeared",
    ),
    request=shared.UrlsQuery(
        fields=[
            "vitae",
        ],
        filters={
            "non": "reiciendis",
            "id": "aut",
        },
        sort=[
            {
                "quaerat": "exercitationem",
            },
            {
                "ipsum": "rerum",
                "assumenda": "porro",
            },
        ],
    ),
)
    
res = s.analysis.create_urls_export(req)

if res.csv_export_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->