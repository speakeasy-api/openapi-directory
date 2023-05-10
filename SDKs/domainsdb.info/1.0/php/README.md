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
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsTldZoneIdDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsTldZoneIdDownloadRequest();
    $request->apiKey = 'corrupti';
    $request->date = 'provident';
    $request->zoneId = 'distinctio';

    $response = $sdk->domains->getDomainsTldZoneIdDownload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [domains](docs/domains/README.md)

* [getDomainsTldZoneIdDownload](docs/domains/README.md#getdomainstldzoneiddownload) - Download Whole Dataset for TLD
* [getDomainsTldZoneIdSearch](docs/domains/README.md#getdomainstldzoneidsearch) - Domains Search for TLD
* [getDomainsUpdatesAdded](docs/domains/README.md#getdomainsupdatesadded) - Get added domains, latest if date not specified
* [getDomainsUpdatesAddedDownload](docs/domains/README.md#getdomainsupdatesaddeddownload) - Download added domains, latest if date not specified
* [getDomainsUpdatesDeleted](docs/domains/README.md#getdomainsupdatesdeleted) - Get deleted domains, latest if date not specified
* [getDomainsUpdatesDeletedDownload](docs/domains/README.md#getdomainsupdatesdeleteddownload) - Download deleted domains, latest if date not specified
* [getDomainsUpdatesList](docs/domains/README.md#getdomainsupdateslist) - List of updates
* [getSearchDomainItem](docs/domains/README.md#getsearchdomainitem) - Domains Database Search
* [getTldDomainItem](docs/domains/README.md#gettlddomainitem) - Get TLD records

### [info](docs/info/README.md)

* [getInfoTld](docs/info/README.md#getinfotld) - Returns overall Tld info
* [getInfoTldZone](docs/info/README.md#getinfotldzone) - Returns statistics for specific zone
* [getApiInfoItem](docs/info/README.md#getapiinfoitem)
* [getStatisticsCollection](docs/info/README.md#getstatisticscollection) - Returns overall stagtistics
* [getStatisticsItem](docs/info/README.md#getstatisticsitem) - Returns statistics for specific zone
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
