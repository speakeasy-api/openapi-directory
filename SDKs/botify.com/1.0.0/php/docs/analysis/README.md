# analysis

### Available Operations

* [createUrlsExport](#createurlsexport) - Creates a new UrlExport object and starts a task that will export the results into a csv
* [getAnalysisSummary](#getanalysissummary) - Get an Analysis detail
* [getCrawlStatistics](#getcrawlstatistics) - Return global statistics for an analysis
* [getCrawlStatisticsByFrequency](#getcrawlstatisticsbyfrequency) - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
* [getCrawlStatisticsUrls](#getcrawlstatisticsurls) - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
* [getGanalyticsOrphanURLs](#getganalyticsorphanurls) - List of Orphan URLs
* [getLinksPercentiles](#getlinkspercentiles) - Get inlinks percentiles
* [getLinksTopDomains](#getlinkstopdomains) - Top domains
* [getLinksTopSubdomains](#getlinkstopsubdomains) - Top subddomains
* [getPageRankLost](#getpageranklost) - Lost pagerank
* [getSitemapsReport](#getsitemapsreport) - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
* [getSitemapsSamplesOutOfConfig](#getsitemapssamplesoutofconfig) - Sample list of URLs which were found in your sitemaps but outside of the
* [getSitemapsSamplesSitemapsOnly](#getsitemapssamplessitemapsonly) - Sample list of URLs which were found in your sitemaps, within the project
* [getUrlDetail](#geturldetail) - Gets the detail of an URL for an analysis
* [getUrls](#geturls) - Executes a query and returns a paginated response
* [getUrlsAggs](#geturlsaggs) - Query aggregator
* [getUrlsDatamodel](#geturlsdatamodel) - Gets an Analysis datamodel
* [getUrlsExportStatus](#geturlsexportstatus) - Checks the status of an CSVUrlExportJob object
* [getUrlsExports](#geturlsexports) - A list of the CSV Exports requests and their current status
* [getUrlsSuggestedFilters](#geturlssuggestedfilters) - Return most frequent segments (= suggested patterns in the previous version)

## createUrlsExport

Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task

### Example Usage

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
        'deserunt',
    ];
    $request->urlsQuery->filters = [
        'ipsam' => 'repellendus',
    ];
    $request->urlsQuery->sort = [
        [
            'odit' => 'at',
            'at' => 'maiores',
            'molestiae' => 'quod',
            'quod' => 'esse',
        ],
        [
            'porro' => 'dolorum',
            'dicta' => 'nam',
            'officia' => 'occaecati',
        ],
        [
            'deleniti' => 'hic',
        ],
        [
            'totam' => 'beatae',
            'commodi' => 'molestiae',
            'modi' => 'qui',
            'impedit' => 'cum',
        ],
    ];
    $request->analysisSlug = 'esse';
    $request->area = CreateUrlsExportAreaEnum::CURRENT;
    $request->projectSlug = 'excepturi';
    $request->username = 'Brianne61';

    $response = $sdk->analysis->createUrlsExport($request);

    if ($response->csvExportStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnalysisSummary

Get an Analysis detail

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnalysisSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnalysisSummaryRequest();
    $request->analysisSlug = 'sed';
    $request->projectSlug = 'iste';
    $request->username = 'Dameon_Morissette';

    $response = $sdk->analysis->getAnalysisSummary($request);

    if ($response->analysisDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrawlStatistics

Return global statistics for an analysis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrawlStatisticsRequest();
    $request->analysisSlug = 'saepe';
    $request->projectSlug = 'fuga';
    $request->username = 'Issac.Hessel';

    $response = $sdk->analysis->getCrawlStatistics($request);

    if ($response->crawlStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrawlStatisticsByFrequency

Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlStatisticsByFrequencyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlStatisticsByFrequencyFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrawlStatisticsByFrequencyRequest();
    $request->analysisSlug = 'saepe';
    $request->frequency = GetCrawlStatisticsByFrequencyFrequencyEnum::SIXTYMN;
    $request->limit = 99280;
    $request->projectSlug = 'ipsa';
    $request->username = 'Waino_Orn';

    $response = $sdk->analysis->getCrawlStatisticsByFrequency($request);

    if ($response->crawlStatisticsTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrawlStatisticsUrls

Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlStatisticsUrlsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlStatisticsUrlsListTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrawlStatisticsUrlsRequest();
    $request->analysisSlug = 'dolores';
    $request->listType = GetCrawlStatisticsUrlsListTypeEnum::CRAWLED;
    $request->projectSlug = 'corporis';
    $request->username = 'Braulio60';

    $response = $sdk->analysis->getCrawlStatisticsUrls($request);

    if ($response->getCrawlStatisticsUrls200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGanalyticsOrphanURLs

List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGanalyticsOrphanURLsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGanalyticsOrphanURLsMediumEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetGanalyticsOrphanURLsSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGanalyticsOrphanURLsRequest();
    $request->analysisSlug = 'nemo';
    $request->medium = GetGanalyticsOrphanURLsMediumEnum::ORGANIC;
    $request->page = 570197;
    $request->projectSlug = 'accusantium';
    $request->size = 438601;
    $request->source = GetGanalyticsOrphanURLsSourceEnum::PINTEREST;
    $request->username = 'Yasmeen65';

    $response = $sdk->analysis->getGanalyticsOrphanURLs($request);

    if ($response->getGanalyticsOrphanURLs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLinksPercentiles

Get inlinks percentiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLinksPercentilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinksPercentilesRequest();
    $request->analysisSlug = 'dolorem';
    $request->projectSlug = 'culpa';
    $request->username = 'Caroline_Ziemann';

    $response = $sdk->analysis->getLinksPercentiles($request);

    if ($response->linksPercentiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLinksTopDomains

Top domains

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLinksTopDomainsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinksTopDomainsRequest();
    $request->analysisSlug = 'numquam';
    $request->page = 414369;
    $request->projectSlug = 'quam';
    $request->size = 474697;
    $request->username = 'Deion33';

    $response = $sdk->analysis->getLinksTopDomains($request);

    if ($response->getLinksTopDomains200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLinksTopSubdomains

Top subddomains

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLinksTopSubdomainsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinksTopSubdomainsRequest();
    $request->analysisSlug = 'vitae';
    $request->page = 674752;
    $request->projectSlug = 'animi';
    $request->size = 317202;
    $request->username = 'Britney94';

    $response = $sdk->analysis->getLinksTopSubdomains($request);

    if ($response->getLinksTopSubdomains200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPageRankLost

Lost pagerank

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPageRankLostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPageRankLostRequest();
    $request->analysisSlug = 'ipsam';
    $request->projectSlug = 'id';
    $request->username = 'Reid62';

    $response = $sdk->analysis->getPageRankLost($request);

    if ($response->pageRankLost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSitemapsReport

Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSitemapsReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitemapsReportRequest();
    $request->analysisSlug = 'temporibus';
    $request->projectSlug = 'laborum';
    $request->username = 'Austyn_Witting46';

    $response = $sdk->analysis->getSitemapsReport($request);

    if ($response->sitemapsReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSitemapsSamplesOutOfConfig

Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSitemapsSamplesOutOfConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitemapsSamplesOutOfConfigRequest();
    $request->analysisSlug = 'praesentium';
    $request->page = 976762;
    $request->projectSlug = 'ipsa';
    $request->size = 604846;
    $request->username = 'Ivah3';

    $response = $sdk->analysis->getSitemapsSamplesOutOfConfig($request);

    if ($response->getSitemapsSamplesOutOfConfig200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSitemapsSamplesSitemapsOnly

Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSitemapsSamplesSitemapsOnlyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitemapsSamplesSitemapsOnlyRequest();
    $request->analysisSlug = 'reprehenderit';
    $request->page = 282807;
    $request->projectSlug = 'maiores';
    $request->size = 120196;
    $request->username = 'Floy.Gulgowski';

    $response = $sdk->analysis->getSitemapsSamplesSitemapsOnly($request);

    if ($response->getSitemapsSamplesSitemapsOnly200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUrlDetail

Gets the detail of an URL for an analysis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlDetailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUrlDetailRequest();
    $request->analysisSlug = 'harum';
    $request->fields = [
        'accusamus',
        'commodi',
    ];
    $request->projectSlug = 'repudiandae';
    $request->url = 'quae';
    $request->username = 'Curt_Pouros';

    $response = $sdk->analysis->getUrlDetail($request);

    if ($response->urlDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUrls

Executes a query and returns a paginated response

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlsQuery;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsAreaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUrlsRequest();
    $request->urlsQuery = new UrlsQuery();
    $request->urlsQuery->fields = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->urlsQuery->filters = [
        'repudiandae' => 'sint',
    ];
    $request->urlsQuery->sort = [
        [
            'incidunt' => 'enim',
            'consequatur' => 'est',
            'quibusdam' => 'explicabo',
            'deserunt' => 'distinctio',
        ],
    ];
    $request->analysisSlug = 'quibusdam';
    $request->area = GetUrlsAreaEnum::DISAPPEARED;
    $request->page = 264730;
    $request->projectSlug = 'qui';
    $request->size = 397821;
    $request->username = 'Kyler16';

    $response = $sdk->analysis->getUrls($request);

    if ($response->getUrls200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUrlsAggs

Query aggregator. It accepts multiple queries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsAggsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlsAggsQuery;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsAggsAreaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUrlsAggsRequest();
    $request->requestBody = [
        new UrlsAggsQuery(),
        new UrlsAggsQuery(),
        new UrlsAggsQuery(),
        new UrlsAggsQuery(),
    ];
    $request->analysisSlug = 'ipsam';
    $request->area = GetUrlsAggsAreaEnum::CURRENT;
    $request->projectSlug = 'fugit';
    $request->username = 'Mariano70';

    $response = $sdk->analysis->getUrlsAggs($request);

    if ($response->getUrlsAggs200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUrlsDatamodel

Gets an Analysis datamodel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsDatamodelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsDatamodelAreaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUrlsDatamodelRequest();
    $request->analysisSlug = 'tempore';
    $request->area = GetUrlsDatamodelAreaEnum::DISAPPEARED;
    $request->projectSlug = 'delectus';
    $request->username = 'Horacio_Franey39';

    $response = $sdk->analysis->getUrlsDatamodel($request);

    if ($response->crawlDatamodel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUrlsExportStatus

Checks the status of an CSVUrlExportJob object. Returns json object with the status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsExportStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUrlsExportStatusRequest();
    $request->analysisSlug = 'provident';
    $request->projectSlug = 'necessitatibus';
    $request->urlExportId = 'sint';
    $request->username = 'Loyce_Fadel68';

    $response = $sdk->analysis->getUrlsExportStatus($request);

    if ($response->csvExportStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUrlsExports

A list of the CSV Exports requests and their current status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsExportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUrlsExportsRequest();
    $request->analysisSlug = 'in';
    $request->page = 449198;
    $request->projectSlug = 'illum';
    $request->size = 978571;
    $request->username = 'Maximo76';

    $response = $sdk->analysis->getUrlsExports($request);

    if ($response->getUrlsExports200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUrlsSuggestedFilters

Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsSuggestedFiltersRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlsAggsQuery;
use \OpenAPI\OpenAPI\Models\Operations\GetUrlsSuggestedFiltersAreaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUrlsSuggestedFiltersRequest();
    $request->urlsAggsQuery = new UrlsAggsQuery();
    $request->urlsAggsQuery->aggs = [
        [
            'aliquid' => 'laborum',
            'accusamus' => 'non',
        ],
        [
            'enim' => 'accusamus',
            'delectus' => 'quidem',
            'provident' => 'nam',
        ],
        [
            'blanditiis' => 'deleniti',
            'sapiente' => 'amet',
            'deserunt' => 'nisi',
        ],
        [
            'natus' => 'omnis',
            'molestiae' => 'perferendis',
        ],
    ];
    $request->urlsAggsQuery->filters = [
        'magnam' => 'distinctio',
        'id' => 'labore',
    ];
    $request->analysisSlug = 'labore';
    $request->area = GetUrlsSuggestedFiltersAreaEnum::CURRENT;
    $request->projectSlug = 'natus';
    $request->username = 'Nellie.Keebler10';

    $response = $sdk->analysis->getUrlsSuggestedFilters($request);

    if ($response->urlsAggsQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
