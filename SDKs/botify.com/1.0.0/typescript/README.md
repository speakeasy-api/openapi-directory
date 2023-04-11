# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/botify.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/botify.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateUrlsExportRequest,
  CreateUrlsExportResponse,
  CreateUrlsExportAreaEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    djangoRestToken: "YOUR_API_KEY_HERE",
  },
});

const req: CreateUrlsExportRequest = {
  urlsQuery: {
    fields: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    filters: {
      "nulla": "corrupti",
      "illum": "vel",
      "error": "deserunt",
    },
    sort: [
      {
        "magnam": "debitis",
        "ipsa": "delectus",
      },
      {
        "suscipit": "molestiae",
        "minus": "placeat",
      },
    ],
  },
  analysisSlug: "voluptatum",
  area: CreateUrlsExportAreaEnum.Disappeared,
  projectSlug: "excepturi",
  username: "Glen.Walsh33",
};

sdk.analysis.createUrlsExport(req).then((res: CreateUrlsExportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analysis

* `createUrlsExport` - Creates a new UrlExport object and starts a task that will export the results into a csv
* `getAnalysisSummary` - Get an Analysis detail
* `getCrawlStatistics` - Return global statistics for an analysis
* `getCrawlStatisticsByFrequency` - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
* `getCrawlStatisticsUrls` - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
* `getGanalyticsOrphanURLs` - List of Orphan URLs
* `getLinksPercentiles` - Get inlinks percentiles
* `getLinksTopDomains` - Top domains
* `getLinksTopSubdomains` - Top subddomains
* `getPageRankLost` - Lost pagerank
* `getSitemapsReport` - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
* `getSitemapsSamplesOutOfConfig` - Sample list of URLs which were found in your sitemaps but outside of the
* `getSitemapsSamplesSitemapsOnly` - Sample list of URLs which were found in your sitemaps, within the project
* `getUrlDetail` - Gets the detail of an URL for an analysis
* `getUrls` - Executes a query and returns a paginated response
* `getUrlsAggs` - Query aggregator
* `getUrlsDatamodel` - Gets an Analysis datamodel
* `getUrlsExportStatus` - Checks the status of an CSVUrlExportJob object
* `getUrlsExports` - A list of the CSV Exports requests and their current status
* `getUrlsSuggestedFilters` - Return most frequent segments (= suggested patterns in the previous version)

### project

* `getProjectAnalyses` - List all analyses for a project
* `getProjectUrlsAggs` - Project Query aggregator
* `getSavedFilter` - Retrieves a specific saved filter's name, ID and filter value
* `getSavedFilters` - List all the project's saved filters (each filter's name, ID and filter value)
* `testUrlRewritingRules` - Match and replace parts of a URL based on rules passed in POST data

### user

* `getUserProjects` - List all active projects for the user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

