# Analysis

### Available Operations

* [CreateUrlsExport](#createurlsexport) - Creates a new UrlExport object and starts a task that will export the results into a csv
* [GetAnalysisSummary](#getanalysissummary) - Get an Analysis detail
* [GetCrawlStatistics](#getcrawlstatistics) - Return global statistics for an analysis
* [GetCrawlStatisticsByFrequency](#getcrawlstatisticsbyfrequency) - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
* [GetCrawlStatisticsUrls](#getcrawlstatisticsurls) - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
* [GetGanalyticsOrphanURLs](#getganalyticsorphanurls) - List of Orphan URLs
* [GetLinksPercentiles](#getlinkspercentiles) - Get inlinks percentiles
* [GetLinksTopDomains](#getlinkstopdomains) - Top domains
* [GetLinksTopSubdomains](#getlinkstopsubdomains) - Top subddomains
* [GetPageRankLost](#getpageranklost) - Lost pagerank
* [GetSitemapsReport](#getsitemapsreport) - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
* [GetSitemapsSamplesOutOfConfig](#getsitemapssamplesoutofconfig) - Sample list of URLs which were found in your sitemaps but outside of the
* [GetSitemapsSamplesSitemapsOnly](#getsitemapssamplessitemapsonly) - Sample list of URLs which were found in your sitemaps, within the project
* [GetURLDetail](#geturldetail) - Gets the detail of an URL for an analysis
* [GetUrls](#geturls) - Executes a query and returns a paginated response
* [GetUrlsAggs](#geturlsaggs) - Query aggregator
* [GetUrlsDatamodel](#geturlsdatamodel) - Gets an Analysis datamodel
* [GetUrlsExportStatus](#geturlsexportstatus) - Checks the status of an CSVUrlExportJob object
* [GetUrlsExports](#geturlsexports) - A list of the CSV Exports requests and their current status
* [GetUrlsSuggestedFilters](#geturlssuggestedfilters) - Return most frequent segments (= suggested patterns in the previous version)

## CreateUrlsExport

Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task

### Example Usage

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
                "deserunt",
            },
            Filters: map[string]interface{}{
                "ipsam": "repellendus",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                    "quod": "esse",
                },
                map[string]interface{}{
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
                map[string]interface{}{
                    "deleniti": "hic",
                },
                map[string]interface{}{
                    "totam": "beatae",
                    "commodi": "molestiae",
                    "modi": "qui",
                    "impedit": "cum",
                },
            },
        },
        AnalysisSlug: "esse",
        Area: operations.CreateUrlsExportAreaEnumCurrent.ToPointer(),
        ProjectSlug: "excepturi",
        Username: "Brianne61",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CsvExportStatus != nil {
        // handle response
    }
}
```

## GetAnalysisSummary

Get an Analysis detail

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetAnalysisSummary(ctx, operations.GetAnalysisSummaryRequest{
        AnalysisSlug: "sed",
        ProjectSlug: "iste",
        Username: "Dameon_Morissette",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalysisDetail != nil {
        // handle response
    }
}
```

## GetCrawlStatistics

Return global statistics for an analysis

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetCrawlStatistics(ctx, operations.GetCrawlStatisticsRequest{
        AnalysisSlug: "saepe",
        ProjectSlug: "fuga",
        Username: "Issac.Hessel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrawlStatistics != nil {
        // handle response
    }
}
```

## GetCrawlStatisticsByFrequency

Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetCrawlStatisticsByFrequency(ctx, operations.GetCrawlStatisticsByFrequencyRequest{
        AnalysisSlug: "saepe",
        Frequency: operations.GetCrawlStatisticsByFrequencyFrequencyEnumSixtymn,
        Limit: sdk.Int(99280),
        ProjectSlug: "ipsa",
        Username: "Waino_Orn",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrawlStatisticsTime != nil {
        // handle response
    }
}
```

## GetCrawlStatisticsUrls

Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetCrawlStatisticsUrls(ctx, operations.GetCrawlStatisticsUrlsRequest{
        AnalysisSlug: "dolores",
        ListType: operations.GetCrawlStatisticsUrlsListTypeEnumCrawled,
        ProjectSlug: "corporis",
        Username: "Braulio60",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCrawlStatisticsUrls200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetGanalyticsOrphanURLs

List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetGanalyticsOrphanURLs(ctx, operations.GetGanalyticsOrphanURLsRequest{
        AnalysisSlug: "nemo",
        Medium: operations.GetGanalyticsOrphanURLsMediumEnumOrganic,
        Page: sdk.Int64(570197),
        ProjectSlug: "accusantium",
        Size: sdk.Int64(438601),
        Source: operations.GetGanalyticsOrphanURLsSourceEnumPinterest,
        Username: "Yasmeen65",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGanalyticsOrphanURLs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLinksPercentiles

Get inlinks percentiles

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetLinksPercentiles(ctx, operations.GetLinksPercentilesRequest{
        AnalysisSlug: "dolorem",
        ProjectSlug: "culpa",
        Username: "Caroline_Ziemann",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinksPercentiles != nil {
        // handle response
    }
}
```

## GetLinksTopDomains

Top domains

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetLinksTopDomains(ctx, operations.GetLinksTopDomainsRequest{
        AnalysisSlug: "numquam",
        Page: sdk.Int64(414369),
        ProjectSlug: "quam",
        Size: sdk.Int64(474697),
        Username: "Deion33",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLinksTopDomains200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLinksTopSubdomains

Top subddomains

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetLinksTopSubdomains(ctx, operations.GetLinksTopSubdomainsRequest{
        AnalysisSlug: "vitae",
        Page: sdk.Int64(674752),
        ProjectSlug: "animi",
        Size: sdk.Int64(317202),
        Username: "Britney94",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLinksTopSubdomains200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPageRankLost

Lost pagerank

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetPageRankLost(ctx, operations.GetPageRankLostRequest{
        AnalysisSlug: "ipsam",
        ProjectSlug: "id",
        Username: "Reid62",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageRankLost != nil {
        // handle response
    }
}
```

## GetSitemapsReport

Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetSitemapsReport(ctx, operations.GetSitemapsReportRequest{
        AnalysisSlug: "temporibus",
        ProjectSlug: "laborum",
        Username: "Austyn_Witting46",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SitemapsReport != nil {
        // handle response
    }
}
```

## GetSitemapsSamplesOutOfConfig

Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetSitemapsSamplesOutOfConfig(ctx, operations.GetSitemapsSamplesOutOfConfigRequest{
        AnalysisSlug: "praesentium",
        Page: sdk.Int64(976762),
        ProjectSlug: "ipsa",
        Size: sdk.Int64(604846),
        Username: "Ivah3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSitemapsSamplesOutOfConfig200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSitemapsSamplesSitemapsOnly

Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetSitemapsSamplesSitemapsOnly(ctx, operations.GetSitemapsSamplesSitemapsOnlyRequest{
        AnalysisSlug: "reprehenderit",
        Page: sdk.Int64(282807),
        ProjectSlug: "maiores",
        Size: sdk.Int64(120196),
        Username: "Floy.Gulgowski",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSitemapsSamplesSitemapsOnly200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetURLDetail

Gets the detail of an URL for an analysis

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetURLDetail(ctx, operations.GetURLDetailRequest{
        AnalysisSlug: "harum",
        Fields: []string{
            "accusamus",
            "commodi",
        },
        ProjectSlug: "repudiandae",
        URL: "quae",
        Username: "Curt_Pouros",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLDetail != nil {
        // handle response
    }
}
```

## GetUrls

Executes a query and returns a paginated response

### Example Usage

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
    res, err := s.Analysis.GetUrls(ctx, operations.GetUrlsRequest{
        UrlsQuery: &shared.UrlsQuery{
            Fields: []string{
                "modi",
                "praesentium",
                "rem",
                "voluptates",
            },
            Filters: map[string]interface{}{
                "repudiandae": "sint",
            },
            Sort: []map[string]interface{}{
                map[string]interface{}{
                    "incidunt": "enim",
                    "consequatur": "est",
                    "quibusdam": "explicabo",
                    "deserunt": "distinctio",
                },
            },
        },
        AnalysisSlug: "quibusdam",
        Area: operations.GetUrlsAreaEnumDisappeared.ToPointer(),
        Page: sdk.Int(264730),
        ProjectSlug: "qui",
        Size: sdk.Int(397821),
        Username: "Kyler16",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUrls200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUrlsAggs

Query aggregator. It accepts multiple queries

### Example Usage

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
    res, err := s.Analysis.GetUrlsAggs(ctx, operations.GetUrlsAggsRequest{
        RequestBody: []shared.UrlsAggsQuery{
            shared.UrlsAggsQuery{
                Aggs: []map[string]interface{}{
                    map[string]interface{}{
                        "fugit": "dolorum",
                    },
                    map[string]interface{}{
                        "tempora": "facilis",
                        "tempore": "labore",
                        "delectus": "eum",
                    },
                },
                Filters: map[string]interface{}{
                    "eligendi": "sint",
                },
            },
            shared.UrlsAggsQuery{
                Aggs: []map[string]interface{}{
                    map[string]interface{}{
                        "necessitatibus": "sint",
                        "officia": "dolor",
                        "debitis": "a",
                    },
                    map[string]interface{}{
                        "in": "in",
                        "illum": "maiores",
                        "rerum": "dicta",
                    },
                },
                Filters: map[string]interface{}{
                    "cumque": "facere",
                    "ea": "aliquid",
                },
            },
            shared.UrlsAggsQuery{
                Aggs: []map[string]interface{}{
                    map[string]interface{}{
                        "non": "occaecati",
                        "enim": "accusamus",
                        "delectus": "quidem",
                        "provident": "nam",
                    },
                    map[string]interface{}{
                        "blanditiis": "deleniti",
                        "sapiente": "amet",
                        "deserunt": "nisi",
                    },
                    map[string]interface{}{
                        "natus": "omnis",
                        "molestiae": "perferendis",
                    },
                },
                Filters: map[string]interface{}{
                    "magnam": "distinctio",
                    "id": "labore",
                },
            },
            shared.UrlsAggsQuery{
                Aggs: []map[string]interface{}{
                    map[string]interface{}{
                        "natus": "nobis",
                        "eum": "vero",
                    },
                    map[string]interface{}{
                        "architecto": "magnam",
                    },
                },
                Filters: map[string]interface{}{
                    "excepturi": "ullam",
                },
            },
        },
        AnalysisSlug: "provident",
        Area: operations.GetUrlsAggsAreaEnumNew.ToPointer(),
        ProjectSlug: "sint",
        Username: "Alexis_OHara32",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUrlsAggs200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetUrlsDatamodel

Gets an Analysis datamodel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetUrlsDatamodel(ctx, operations.GetUrlsDatamodelRequest{
        AnalysisSlug: "eum",
        Area: operations.GetUrlsDatamodelAreaEnumCurrent.ToPointer(),
        ProjectSlug: "necessitatibus",
        Username: "Brown43",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CrawlDatamodel != nil {
        // handle response
    }
}
```

## GetUrlsExportStatus

Checks the status of an CSVUrlExportJob object. Returns json object with the status.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetUrlsExportStatus(ctx, operations.GetUrlsExportStatusRequest{
        AnalysisSlug: "doloribus",
        ProjectSlug: "debitis",
        URLExportID: "eius",
        Username: "Rachel.Lind10",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CsvExportStatus != nil {
        // handle response
    }
}
```

## GetUrlsExports

A list of the CSV Exports requests and their current status

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Analysis.GetUrlsExports(ctx, operations.GetUrlsExportsRequest{
        AnalysisSlug: "architecto",
        Page: sdk.Int64(919483),
        ProjectSlug: "ullam",
        Size: sdk.Int64(714242),
        Username: "Janessa.Zulauf90",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUrlsExports200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUrlsSuggestedFilters

Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.

### Example Usage

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
    res, err := s.Analysis.GetUrlsSuggestedFilters(ctx, operations.GetUrlsSuggestedFiltersRequest{
        UrlsAggsQuery: &shared.UrlsAggsQuery{
            Aggs: []map[string]interface{}{
                map[string]interface{}{
                    "consequuntur": "praesentium",
                },
                map[string]interface{}{
                    "magni": "sunt",
                    "quo": "illum",
                    "pariatur": "maxime",
                },
                map[string]interface{}{
                    "excepturi": "odit",
                    "ea": "accusantium",
                },
                map[string]interface{}{
                    "maiores": "quidem",
                },
            },
            Filters: map[string]interface{}{
                "voluptate": "autem",
                "nam": "eaque",
            },
        },
        AnalysisSlug: "pariatur",
        Area: operations.GetUrlsSuggestedFiltersAreaEnumCurrent.ToPointer(),
        ProjectSlug: "voluptatibus",
        Username: "Agnes1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UrlsAggsQuery != nil {
        // handle response
    }
}
```
