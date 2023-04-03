# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/domainsdb.info/1.0/go
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
    s := sdk.New()

    req := operations.GetDomainsTldZoneIDDownloadRequest{
        APIKey: "corrupti",
        Date: "provident",
        ZoneID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Domains.GetDomainsTldZoneIDDownload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Domains

* `GetDomainsTldZoneIDDownload` - Download Whole Dataset for TLD
* `GetDomainsTldZoneIDSearch` - Domains Search for TLD
* `GetDomainsUpdatesAdded` - Get added domains, latest if date not specified
* `GetDomainsUpdatesAddedDownload` - Download added domains, latest if date not specified
* `GetDomainsUpdatesDeleted` - Get deleted domains, latest if date not specified
* `GetDomainsUpdatesDeletedDownload` - Download deleted domains, latest if date not specified
* `GetDomainsUpdatesList` - List of updates
* `GetSearchDomainItem` - Domains Database Search
* `GetTldDomainItem` - Get TLD records

### Info

* `GetInfoTld` - Returns overall Tld info
* `GetInfoTldZone` - Returns statistics for specific zone
* `GetAPIInfoItem`
* `GetStatisticsCollection` - Returns overall stagtistics
* `GetStatisticsItem` - Returns statistics for specific zone
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
