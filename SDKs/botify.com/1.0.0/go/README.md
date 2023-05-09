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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.CreateUrlsExport(ctx, operations.CreateUrlsExportRequest{
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
        Area: operations.CreateUrlsExportAreaEnumDisappeared.ToPointer(),
        ProjectSlug: "excepturi",
        Username: "Glen.Walsh33",
    })
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


### [Analysis](docs/analysis/README.md)

* [CreateUrlsExport](docs/analysis/README.md#createurlsexport) - Creates a new UrlExport object and starts a task that will export the results into a csv
* [GetAnalysisSummary](docs/analysis/README.md#getanalysissummary) - Get an Analysis detail
* [GetCrawlStatistics](docs/analysis/README.md#getcrawlstatistics) - Return global statistics for an analysis
* [GetCrawlStatisticsByFrequency](docs/analysis/README.md#getcrawlstatisticsbyfrequency) - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
* [GetCrawlStatisticsUrls](docs/analysis/README.md#getcrawlstatisticsurls) - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
* [GetGanalyticsOrphanURLs](docs/analysis/README.md#getganalyticsorphanurls) - List of Orphan URLs
* [GetLinksPercentiles](docs/analysis/README.md#getlinkspercentiles) - Get inlinks percentiles
* [GetLinksTopDomains](docs/analysis/README.md#getlinkstopdomains) - Top domains
* [GetLinksTopSubdomains](docs/analysis/README.md#getlinkstopsubdomains) - Top subddomains
* [GetPageRankLost](docs/analysis/README.md#getpageranklost) - Lost pagerank
* [GetSitemapsReport](docs/analysis/README.md#getsitemapsreport) - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
* [GetSitemapsSamplesOutOfConfig](docs/analysis/README.md#getsitemapssamplesoutofconfig) - Sample list of URLs which were found in your sitemaps but outside of the
* [GetSitemapsSamplesSitemapsOnly](docs/analysis/README.md#getsitemapssamplessitemapsonly) - Sample list of URLs which were found in your sitemaps, within the project
* [GetURLDetail](docs/analysis/README.md#geturldetail) - Gets the detail of an URL for an analysis
* [GetUrls](docs/analysis/README.md#geturls) - Executes a query and returns a paginated response
* [GetUrlsAggs](docs/analysis/README.md#geturlsaggs) - Query aggregator
* [GetUrlsDatamodel](docs/analysis/README.md#geturlsdatamodel) - Gets an Analysis datamodel
* [GetUrlsExportStatus](docs/analysis/README.md#geturlsexportstatus) - Checks the status of an CSVUrlExportJob object
* [GetUrlsExports](docs/analysis/README.md#geturlsexports) - A list of the CSV Exports requests and their current status
* [GetUrlsSuggestedFilters](docs/analysis/README.md#geturlssuggestedfilters) - Return most frequent segments (= suggested patterns in the previous version)

### [Project](docs/project/README.md)

* [GetProjectAnalyses](docs/project/README.md#getprojectanalyses) - List all analyses for a project
* [GetProjectUrlsAggs](docs/project/README.md#getprojecturlsaggs) - Project Query aggregator
* [GetSavedFilter](docs/project/README.md#getsavedfilter) - Retrieves a specific saved filter's name, ID and filter value
* [GetSavedFilters](docs/project/README.md#getsavedfilters) - List all the project's saved filters (each filter's name, ID and filter value)
* [TestURLRewritingRules](docs/project/README.md#testurlrewritingrules) - Match and replace parts of a URL based on rules passed in POST data

### [User](docs/user/README.md)

* [GetUserProjects](docs/user/README.md#getuserprojects) - List all active projects for the user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
