# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUrlsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlsQuery;
use \OpenAPI\OpenAPI\Models\Operations\CreateUrlsExportAreaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUrlsExportRequest();
    $request->urlsQuery = new UrlsQuery();
    $request->urlsQuery->fields = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->urlsQuery->filters = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->urlsQuery->sort = [
        [
            'magnam' => 'debitis',
            'ipsa' => 'delectus',
        ],
        [
            'suscipit' => 'molestiae',
            'minus' => 'placeat',
        ],
    ];
    $request->analysisSlug = 'voluptatum';
    $request->area = CreateUrlsExportAreaEnum::DISAPPEARED;
    $request->projectSlug = 'excepturi';
    $request->username = 'Glen.Walsh33';

    $response = $sdk->analysis->createUrlsExport($request);

    if ($response->csvExportStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
