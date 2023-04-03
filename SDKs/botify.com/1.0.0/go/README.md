# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/botify.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateUrlsExportRequest{
        UrlsQuery: &shared.UrlsQuery{
            Fields: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Filters: map[string]interface{}{
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                map[string]interface{}{
                    "suscipit": "molestiae",
                    "minus": "placeat",
                },
            },
        },
        AnalysisSlug: "voluptatum",
        Area: "disappeared",
        ProjectSlug: "excepturi",
        Username: "Glen.Walsh33",
    }

    ctx := context.Background()
    res, err := s.Analysis.CreateUrlsExport(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CsvExportStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Analysis

* `CreateUrlsExport` - Creates a new UrlExport object and starts a task that will export the results into a csv
* `GetAnalysisSummary` - Get an Analysis detail
* `GetCrawlStatistics` - Return global statistics for an analysis
* `GetCrawlStatisticsByFrequency` - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
* `GetCrawlStatisticsUrls` - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
* `GetGanalyticsOrphanURLs` - List of Orphan URLs
* `GetLinksPercentiles` - Get inlinks percentiles
* `GetLinksTopDomains` - Top domains
* `GetLinksTopSubdomains` - Top subddomains
* `GetPageRankLost` - Lost pagerank
* `GetSitemapsReport` - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
* `GetSitemapsSamplesOutOfConfig` - Sample list of URLs which were found in your sitemaps but outside of the
* `GetSitemapsSamplesSitemapsOnly` - Sample list of URLs which were found in your sitemaps, within the project
* `GetURLDetail` - Gets the detail of an URL for an analysis
* `GetUrls` - Executes a query and returns a paginated response
* `GetUrlsAggs` - Query aggregator
* `GetUrlsDatamodel` - Gets an Analysis datamodel
* `GetUrlsExportStatus` - Checks the status of an CSVUrlExportJob object
* `GetUrlsExports` - A list of the CSV Exports requests and their current status
* `GetUrlsSuggestedFilters` - Return most frequent segments (= suggested patterns in the previous version)

### Project

* `GetProjectAnalyses` - List all analyses for a project
* `GetProjectUrlsAggs` - Project Query aggregator
* `GetSavedFilter` - Retrieves a specific saved filter's name, ID and filter value
* `GetSavedFilters` - List all the project's saved filters (each filter's name, ID and filter value)
* `TestURLRewritingRules` - Match and replace parts of a URL based on rules passed in POST data

### User

* `GetUserProjects` - List all active projects for the user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
