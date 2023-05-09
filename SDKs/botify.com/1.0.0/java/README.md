# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUrlsExportAreaEnum;
import org.openapis.openapi.models.operations.CreateUrlsExportRequest;
import org.openapis.openapi.models.operations.CreateUrlsExportResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UrlsQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUrlsExportRequest req = new CreateUrlsExportRequest("provident", "distinctio", "quibusdam") {{
                urlsQuery = new UrlsQuery() {{
                    fields = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    sort = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("ipsa", "delectus");
                            put("tempora", "suscipit");
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
                        }}),
                    }};
                }};;
                area = CreateUrlsExportAreaEnum.CURRENT;
            }};            

            CreateUrlsExportResponse res = sdk.analysis.createUrlsExport(req);

            if (res.csvExportStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [analysis](docs/analysis/README.md)

* [createUrlsExport](docs/analysis/README.md#createurlsexport) - Creates a new UrlExport object and starts a task that will export the results into a csv
* [getAnalysisSummary](docs/analysis/README.md#getanalysissummary) - Get an Analysis detail
* [getCrawlStatistics](docs/analysis/README.md#getcrawlstatistics) - Return global statistics for an analysis
* [getCrawlStatisticsByFrequency](docs/analysis/README.md#getcrawlstatisticsbyfrequency) - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
* [getCrawlStatisticsUrls](docs/analysis/README.md#getcrawlstatisticsurls) - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
* [getGanalyticsOrphanURLs](docs/analysis/README.md#getganalyticsorphanurls) - List of Orphan URLs
* [getLinksPercentiles](docs/analysis/README.md#getlinkspercentiles) - Get inlinks percentiles
* [getLinksTopDomains](docs/analysis/README.md#getlinkstopdomains) - Top domains
* [getLinksTopSubdomains](docs/analysis/README.md#getlinkstopsubdomains) - Top subddomains
* [getPageRankLost](docs/analysis/README.md#getpageranklost) - Lost pagerank
* [getSitemapsReport](docs/analysis/README.md#getsitemapsreport) - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
* [getSitemapsSamplesOutOfConfig](docs/analysis/README.md#getsitemapssamplesoutofconfig) - Sample list of URLs which were found in your sitemaps but outside of the
* [getSitemapsSamplesSitemapsOnly](docs/analysis/README.md#getsitemapssamplessitemapsonly) - Sample list of URLs which were found in your sitemaps, within the project
* [getUrlDetail](docs/analysis/README.md#geturldetail) - Gets the detail of an URL for an analysis
* [getUrls](docs/analysis/README.md#geturls) - Executes a query and returns a paginated response
* [getUrlsAggs](docs/analysis/README.md#geturlsaggs) - Query aggregator
* [getUrlsDatamodel](docs/analysis/README.md#geturlsdatamodel) - Gets an Analysis datamodel
* [getUrlsExportStatus](docs/analysis/README.md#geturlsexportstatus) - Checks the status of an CSVUrlExportJob object
* [getUrlsExports](docs/analysis/README.md#geturlsexports) - A list of the CSV Exports requests and their current status
* [getUrlsSuggestedFilters](docs/analysis/README.md#geturlssuggestedfilters) - Return most frequent segments (= suggested patterns in the previous version)

### [project](docs/project/README.md)

* [getProjectAnalyses](docs/project/README.md#getprojectanalyses) - List all analyses for a project
* [getProjectUrlsAggs](docs/project/README.md#getprojecturlsaggs) - Project Query aggregator
* [getSavedFilter](docs/project/README.md#getsavedfilter) - Retrieves a specific saved filter's name, ID and filter value
* [getSavedFilters](docs/project/README.md#getsavedfilters) - List all the project's saved filters (each filter's name, ID and filter value)
* [testUrlRewritingRules](docs/project/README.md#testurlrewritingrules) - Match and replace parts of a URL based on rules passed in POST data

### [user](docs/user/README.md)

* [getUserProjects](docs/user/README.md#getuserprojects) - List all active projects for the user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
