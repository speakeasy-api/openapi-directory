# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/botify.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analysis

* `create_urls_export` - Creates a new UrlExport object and starts a task that will export the results into a csv
* `get_analysis_summary` - Get an Analysis detail
* `get_crawl_statistics` - Return global statistics for an analysis
* `get_crawl_statistics_by_frequency` - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
* `get_crawl_statistics_urls` - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
* `get_ganalytics_orphan_ur_ls` - List of Orphan URLs
* `get_links_percentiles` - Get inlinks percentiles
* `get_links_top_domains` - Top domains
* `get_links_top_subdomains` - Top subddomains
* `get_page_rank_lost` - Lost pagerank
* `get_sitemaps_report` - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
* `get_sitemaps_samples_out_of_config` - Sample list of URLs which were found in your sitemaps but outside of the
* `get_sitemaps_samples_sitemaps_only` - Sample list of URLs which were found in your sitemaps, within the project
* `get_url_detail` - Gets the detail of an URL for an analysis
* `get_urls` - Executes a query and returns a paginated response
* `get_urls_aggs` - Query aggregator
* `get_urls_datamodel` - Gets an Analysis datamodel
* `get_urls_export_status` - Checks the status of an CSVUrlExportJob object
* `get_urls_exports` - A list of the CSV Exports requests and their current status
* `get_urls_suggested_filters` - Return most frequent segments (= suggested patterns in the previous version)

### project

* `get_project_analyses` - List all analyses for a project
* `get_project_urls_aggs` - Project Query aggregator
* `get_saved_filter` - Retrieves a specific saved filter's name, ID and filter value
* `get_saved_filters` - List all the project's saved filters (each filter's name, ID and filter value)
* `test_url_rewriting_rules` - Match and replace parts of a URL based on rules passed in POST data

### user

* `get_user_projects` - List all active projects for the user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
