<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_auth="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetRecordsFormatRequest(
    authentication_token="corrupti",
    and_category="Research papers",
    and_century="distinctio",
    and_collection="quibusdam",
    and_content_partner="unde",
    and_creator="nulla",
    and_date="corrupti",
    and_dc_type="illum",
    and_decade="vel",
    and_format="error",
    and_has_large_thumbnail_url="Y",
    and_has_lat_lng="false",
    and_is_commercial_use=False,
    and_or_filter_field="suscipit",
    and_placename="iure",
    and_primary_collection="magnam",
    and_subject="debitis",
    and_title="ipsa",
    and_usage="Unknown",
    and_year="tempora",
    direction="asc",
    exclude_filters_from_facets=False,
    facets=[
        "copyright",
        "copyright",
    ],
    facets_page=528895,
    facets_per_page=479977,
    fields_="excepturi",
    format="json",
    geo_bbox="recusandae",
    page=836079,
    per_page=71036,
    sort="syndication_date",
    text="veritatis",
    without_filter_field="deserunt",
)
    
res = s.api_calls.get_records_format_(req)

if res.get_records_format_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->