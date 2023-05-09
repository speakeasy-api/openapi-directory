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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Domains.GetDomainsTldZoneIDDownload(ctx, operations.GetDomainsTldZoneIDDownloadRequest{
        APIKey: sdk.String("corrupti"),
        Date: sdk.String("provident"),
        ZoneID: "distinctio",
    })
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


### [Domains](docs/domains/README.md)

* [GetDomainsTldZoneIDDownload](docs/domains/README.md#getdomainstldzoneiddownload) - Download Whole Dataset for TLD
* [GetDomainsTldZoneIDSearch](docs/domains/README.md#getdomainstldzoneidsearch) - Domains Search for TLD
* [GetDomainsUpdatesAdded](docs/domains/README.md#getdomainsupdatesadded) - Get added domains, latest if date not specified
* [GetDomainsUpdatesAddedDownload](docs/domains/README.md#getdomainsupdatesaddeddownload) - Download added domains, latest if date not specified
* [GetDomainsUpdatesDeleted](docs/domains/README.md#getdomainsupdatesdeleted) - Get deleted domains, latest if date not specified
* [GetDomainsUpdatesDeletedDownload](docs/domains/README.md#getdomainsupdatesdeleteddownload) - Download deleted domains, latest if date not specified
* [GetDomainsUpdatesList](docs/domains/README.md#getdomainsupdateslist) - List of updates
* [GetSearchDomainItem](docs/domains/README.md#getsearchdomainitem) - Domains Database Search
* [GetTldDomainItem](docs/domains/README.md#gettlddomainitem) - Get TLD records

### [Info](docs/info/README.md)

* [GetInfoTld](docs/info/README.md#getinfotld) - Returns overall Tld info
* [GetInfoTldZone](docs/info/README.md#getinfotldzone) - Returns statistics for specific zone
* [GetAPIInfoItem](docs/info/README.md#getapiinfoitem)
* [GetStatisticsCollection](docs/info/README.md#getstatisticscollection) - Returns overall stagtistics
* [GetStatisticsItem](docs/info/README.md#getstatisticsitem) - Returns statistics for specific zone
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
