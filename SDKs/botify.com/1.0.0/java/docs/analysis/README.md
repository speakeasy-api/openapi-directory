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
                .setSecurity(new Security("quis") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUrlsExportRequest req = new CreateUrlsExportRequest("veritatis", "deserunt", "perferendis") {{
                urlsQuery = new UrlsQuery() {{
                    fields = new String[]{{
                        add("repellendus"),
                        add("sapiente"),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                    }};
                    sort = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("dolorum", "dicta");
                            put("nam", "officia");
                            put("occaecati", "fugit");
                            put("deleniti", "hic");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("totam", "beatae");
                            put("commodi", "molestiae");
                            put("modi", "qui");
                            put("impedit", "cum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("ipsum", "excepturi");
                            put("aspernatur", "perferendis");
                        }}),
                    }};
                }};;
                area = CreateUrlsExportAreaEnum.DISAPPEARED;
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

## getAnalysisSummary

Get an Analysis detail

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnalysisSummaryRequest;
import org.openapis.openapi.models.operations.GetAnalysisSummaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAnalysisSummaryRequest req = new GetAnalysisSummaryRequest("sed", "iste", "dolor");            

            GetAnalysisSummaryResponse res = sdk.analysis.getAnalysisSummary(req);

            if (res.analysisDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCrawlStatistics

Return global statistics for an analysis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCrawlStatisticsRequest;
import org.openapis.openapi.models.operations.GetCrawlStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCrawlStatisticsRequest req = new GetCrawlStatisticsRequest("laboriosam", "hic", "saepe");            

            GetCrawlStatisticsResponse res = sdk.analysis.getCrawlStatistics(req);

            if (res.crawlStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCrawlStatisticsByFrequency

Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCrawlStatisticsByFrequencyFrequencyEnum;
import org.openapis.openapi.models.operations.GetCrawlStatisticsByFrequencyRequest;
import org.openapis.openapi.models.operations.GetCrawlStatisticsByFrequencyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCrawlStatisticsByFrequencyRequest req = new GetCrawlStatisticsByFrequencyRequest("in", GetCrawlStatisticsByFrequencyFrequencyEnum.FIVEMN, "iste", "iure") {{
                limit = 902349;
            }};            

            GetCrawlStatisticsByFrequencyResponse res = sdk.analysis.getCrawlStatisticsByFrequency(req);

            if (res.crawlStatisticsTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCrawlStatisticsUrls

Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCrawlStatisticsUrlsListTypeEnum;
import org.openapis.openapi.models.operations.GetCrawlStatisticsUrlsRequest;
import org.openapis.openapi.models.operations.GetCrawlStatisticsUrlsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCrawlStatisticsUrlsRequest req = new GetCrawlStatisticsUrlsRequest("architecto", GetCrawlStatisticsUrlsListTypeEnum.CRAWLED, "reiciendis", "est");            

            GetCrawlStatisticsUrlsResponse res = sdk.analysis.getCrawlStatisticsUrls(req);

            if (res.getCrawlStatisticsUrls200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGanalyticsOrphanURLs

List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGanalyticsOrphanURLsMediumEnum;
import org.openapis.openapi.models.operations.GetGanalyticsOrphanURLsRequest;
import org.openapis.openapi.models.operations.GetGanalyticsOrphanURLsResponse;
import org.openapis.openapi.models.operations.GetGanalyticsOrphanURLsSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGanalyticsOrphanURLsRequest req = new GetGanalyticsOrphanURLsRequest("laborum", GetGanalyticsOrphanURLsMediumEnum.ORGANIC, "dolorem", GetGanalyticsOrphanURLsSourceEnum.FACEBOOK, "explicabo") {{
                page = 750686L;
                size = 315428L;
            }};            

            GetGanalyticsOrphanURLsResponse res = sdk.analysis.getGanalyticsOrphanURLs(req);

            if (res.getGanalyticsOrphanURLs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLinksPercentiles

Get inlinks percentiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinksPercentilesRequest;
import org.openapis.openapi.models.operations.GetLinksPercentilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinksPercentilesRequest req = new GetLinksPercentilesRequest("nemo", "minima", "excepturi");            

            GetLinksPercentilesResponse res = sdk.analysis.getLinksPercentiles(req);

            if (res.linksPercentiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLinksTopDomains

Top domains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinksTopDomainsRequest;
import org.openapis.openapi.models.operations.GetLinksTopDomainsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinksTopDomainsRequest req = new GetLinksTopDomainsRequest("iure", "culpa", "doloribus") {{
                page = 958950L;
                size = 102044L;
            }};            

            GetLinksTopDomainsResponse res = sdk.analysis.getLinksTopDomains(req);

            if (res.getLinksTopDomains200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLinksTopSubdomains

Top subddomains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinksTopSubdomainsRequest;
import org.openapis.openapi.models.operations.GetLinksTopSubdomainsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinksTopSubdomainsRequest req = new GetLinksTopSubdomainsRequest("dolorem", "culpa", "consequuntur") {{
                page = 995300L;
                size = 653108L;
            }};            

            GetLinksTopSubdomainsResponse res = sdk.analysis.getLinksTopSubdomains(req);

            if (res.getLinksTopSubdomains200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPageRankLost

Lost pagerank

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPageRankLostRequest;
import org.openapis.openapi.models.operations.GetPageRankLostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPageRankLostRequest req = new GetPageRankLostRequest("numquam", "commodi", "quam");            

            GetPageRankLostResponse res = sdk.analysis.getPageRankLost(req);

            if (res.pageRankLost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSitemapsReport

Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitemapsReportRequest;
import org.openapis.openapi.models.operations.GetSitemapsReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSitemapsReportRequest req = new GetSitemapsReportRequest("velit", "error", "quia");            

            GetSitemapsReportResponse res = sdk.analysis.getSitemapsReport(req);

            if (res.sitemapsReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSitemapsSamplesOutOfConfig

Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitemapsSamplesOutOfConfigRequest;
import org.openapis.openapi.models.operations.GetSitemapsSamplesOutOfConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSitemapsSamplesOutOfConfigRequest req = new GetSitemapsSamplesOutOfConfigRequest("vitae", "laborum", "animi") {{
                page = 317202L;
                size = 138183L;
            }};            

            GetSitemapsSamplesOutOfConfigResponse res = sdk.analysis.getSitemapsSamplesOutOfConfig(req);

            if (res.getSitemapsSamplesOutOfConfig200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSitemapsSamplesSitemapsOnly

Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitemapsSamplesSitemapsOnlyRequest;
import org.openapis.openapi.models.operations.GetSitemapsSamplesSitemapsOnlyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSitemapsSamplesSitemapsOnlyRequest req = new GetSitemapsSamplesSitemapsOnlyRequest("sequi", "tenetur", "ipsam") {{
                page = 662527L;
                size = 820994L;
            }};            

            GetSitemapsSamplesSitemapsOnlyResponse res = sdk.analysis.getSitemapsSamplesSitemapsOnly(req);

            if (res.getSitemapsSamplesSitemapsOnly200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUrlDetail

Gets the detail of an URL for an analysis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUrlDetailRequest;
import org.openapis.openapi.models.operations.GetUrlDetailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUrlDetailRequest req = new GetUrlDetailRequest("quasi", "error", "temporibus", "laborum") {{
                fields = new String[]{{
                    add("reiciendis"),
                }};
            }};            

            GetUrlDetailResponse res = sdk.analysis.getUrlDetail(req);

            if (res.urlDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUrls

Executes a query and returns a paginated response

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUrlsAreaEnum;
import org.openapis.openapi.models.operations.GetUrlsRequest;
import org.openapis.openapi.models.operations.GetUrlsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UrlsQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUrlsRequest req = new GetUrlsRequest("vero", "nihil", "praesentium") {{
                urlsQuery = new UrlsQuery() {{
                    fields = new String[]{{
                        add("ipsa"),
                        add("omnis"),
                        add("voluptate"),
                        add("cum"),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("doloremque", "reprehenderit");
                    }};
                    sort = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("dicta", "corporis");
                            put("dolore", "iusto");
                            put("dicta", "harum");
                            put("enim", "accusamus");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("repudiandae", "quae");
                            put("ipsum", "quidem");
                        }}),
                    }};
                }};;
                area = GetUrlsAreaEnum.NEW_;
                page = 566602;
                size = 865103;
            }};            

            GetUrlsResponse res = sdk.analysis.getUrls(req);

            if (res.getUrls200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUrlsAggs

Query aggregator. It accepts multiple queries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUrlsAggsAreaEnum;
import org.openapis.openapi.models.operations.GetUrlsAggsRequest;
import org.openapis.openapi.models.operations.GetUrlsAggsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UrlsAggsQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUrlsAggsRequest req = new GetUrlsAggsRequest("praesentium", "rem", "voluptates") {{
                requestBody = new org.openapis.openapi.models.shared.UrlsAggsQuery[]{{
                    add(new UrlsAggsQuery() {{
                        aggs = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("veritatis", "itaque");
                                put("incidunt", "enim");
                                put("consequatur", "est");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("explicabo", "deserunt");
                                put("distinctio", "quibusdam");
                                put("labore", "modi");
                                put("qui", "aliquid");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("quos", "perferendis");
                                put("magni", "assumenda");
                                put("ipsam", "alias");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolorum", "excepturi");
                            }}),
                        }};
                        filters = new java.util.HashMap<String, Object>() {{
                            put("facilis", "tempore");
                            put("labore", "delectus");
                        }};
                    }}),
                }};
                area = GetUrlsAggsAreaEnum.DISAPPEARED;
            }};            

            GetUrlsAggsResponse res = sdk.analysis.getUrlsAggs(req);

            if (res.getUrlsAggs200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUrlsDatamodel

Gets an Analysis datamodel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUrlsDatamodelAreaEnum;
import org.openapis.openapi.models.operations.GetUrlsDatamodelRequest;
import org.openapis.openapi.models.operations.GetUrlsDatamodelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUrlsDatamodelRequest req = new GetUrlsDatamodelRequest("eligendi", "sint", "aliquid") {{
                area = GetUrlsDatamodelAreaEnum.NEW_;
            }};            

            GetUrlsDatamodelResponse res = sdk.analysis.getUrlsDatamodel(req);

            if (res.crawlDatamodel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUrlsExportStatus

Checks the status of an CSVUrlExportJob object. Returns json object with the status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUrlsExportStatusRequest;
import org.openapis.openapi.models.operations.GetUrlsExportStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUrlsExportStatusRequest req = new GetUrlsExportStatusRequest("sint", "officia", "dolor", "debitis");            

            GetUrlsExportStatusResponse res = sdk.analysis.getUrlsExportStatus(req);

            if (res.csvExportStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUrlsExports

A list of the CSV Exports requests and their current status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUrlsExportsRequest;
import org.openapis.openapi.models.operations.GetUrlsExportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUrlsExportsRequest req = new GetUrlsExportsRequest("dolorum", "in", "in") {{
                page = 846409L;
                size = 978571L;
            }};            

            GetUrlsExportsResponse res = sdk.analysis.getUrlsExports(req);

            if (res.getUrlsExports200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUrlsSuggestedFilters

Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUrlsSuggestedFiltersAreaEnum;
import org.openapis.openapi.models.operations.GetUrlsSuggestedFiltersRequest;
import org.openapis.openapi.models.operations.GetUrlsSuggestedFiltersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UrlsAggsQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    djangoRestToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUrlsSuggestedFiltersRequest req = new GetUrlsSuggestedFiltersRequest("dicta", "magnam", "cumque") {{
                urlsAggsQuery = new UrlsAggsQuery() {{
                    aggs = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("aliquid", "laborum");
                            put("accusamus", "non");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("enim", "accusamus");
                            put("delectus", "quidem");
                            put("provident", "nam");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("blanditiis", "deleniti");
                            put("sapiente", "amet");
                            put("deserunt", "nisi");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("natus", "omnis");
                            put("molestiae", "perferendis");
                        }}),
                    }};
                    filters = new java.util.HashMap<String, Object>() {{
                        put("magnam", "distinctio");
                        put("id", "labore");
                    }};
                }};;
                area = GetUrlsSuggestedFiltersAreaEnum.CURRENT;
            }};            

            GetUrlsSuggestedFiltersResponse res = sdk.analysis.getUrlsSuggestedFilters(req);

            if (res.urlsAggsQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
