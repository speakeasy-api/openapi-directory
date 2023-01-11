import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Analysis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createUrlsExport - Creates a new UrlExport object and starts a task that will export the results into a csv
     *
     * Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task
    **/
    createUrlsExport(req: operations.CreateUrlsExportRequest, config?: AxiosRequestConfig): Promise<operations.CreateUrlsExportResponse>;
    /**
     * getAnalysisSummary - Get an Analysis detail
     *
     * Get an Analysis detail
    **/
    getAnalysisSummary(req: operations.GetAnalysisSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetAnalysisSummaryResponse>;
    /**
     * getCrawlStatistics - Return global statistics for an analysis
     *
     * Return global statistics for an analysis
    **/
    getCrawlStatistics(req: operations.GetCrawlStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlStatisticsResponse>;
    /**
     * getCrawlStatisticsByFrequency - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
     *
     * Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis
    **/
    getCrawlStatisticsByFrequency(req: operations.GetCrawlStatisticsByFrequencyRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlStatisticsByFrequencyResponse>;
    /**
     * getCrawlStatisticsUrls - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
     *
     * Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
    **/
    getCrawlStatisticsUrls(req: operations.GetCrawlStatisticsUrlsRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlStatisticsUrlsResponse>;
    /**
     * getGanalyticsOrphanUrLs - List of Orphan URLs
     *
     * List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)
    **/
    getGanalyticsOrphanUrLs(req: operations.GetGanalyticsOrphanUrLsRequest, config?: AxiosRequestConfig): Promise<operations.GetGanalyticsOrphanUrLsResponse>;
    /**
     * getLinksPercentiles - Get inlinks percentiles
     *
     * Get inlinks percentiles
    **/
    getLinksPercentiles(req: operations.GetLinksPercentilesRequest, config?: AxiosRequestConfig): Promise<operations.GetLinksPercentilesResponse>;
    /**
     * getLinksTopDomains - Top domains
     *
     * Top domains
    **/
    getLinksTopDomains(req: operations.GetLinksTopDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinksTopDomainsResponse>;
    /**
     * getLinksTopSubdomains - Top subddomains
     *
     * Top subddomains
    **/
    getLinksTopSubdomains(req: operations.GetLinksTopSubdomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinksTopSubdomainsResponse>;
    /**
     * getPageRankLost - Lost pagerank
     *
     * Lost pagerank
    **/
    getPageRankLost(req: operations.GetPageRankLostRequest, config?: AxiosRequestConfig): Promise<operations.GetPageRankLostResponse>;
    /**
     * getSitemapsReport - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
     *
     * Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)
    **/
    getSitemapsReport(req: operations.GetSitemapsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetSitemapsReportResponse>;
    /**
     * getSitemapsSamplesOutOfConfig - Sample list of URLs which were found in your sitemaps but outside of the
     *
     * Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.
    **/
    getSitemapsSamplesOutOfConfig(req: operations.GetSitemapsSamplesOutOfConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetSitemapsSamplesOutOfConfigResponse>;
    /**
     * getSitemapsSamplesSitemapsOnly - Sample list of URLs which were found in your sitemaps, within the project
     *
     * Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.
    **/
    getSitemapsSamplesSitemapsOnly(req: operations.GetSitemapsSamplesSitemapsOnlyRequest, config?: AxiosRequestConfig): Promise<operations.GetSitemapsSamplesSitemapsOnlyResponse>;
    /**
     * getUrlDetail - Gets the detail of an URL for an analysis
     *
     * Gets the detail of an URL for an analysis
    **/
    getUrlDetail(req: operations.GetUrlDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlDetailResponse>;
    /**
     * getUrls - Executes a query and returns a paginated response
     *
     * Executes a query and returns a paginated response
    **/
    getUrls(req: operations.GetUrlsRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsResponse>;
    /**
     * getUrlsAggs - Query aggregator
     *
     * Query aggregator. It accepts multiple queries
    **/
    getUrlsAggs(req: operations.GetUrlsAggsRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsAggsResponse>;
    /**
     * getUrlsDatamodel - Gets an Analysis datamodel
     *
     * Gets an Analysis datamodel
    **/
    getUrlsDatamodel(req: operations.GetUrlsDatamodelRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsDatamodelResponse>;
    /**
     * getUrlsExportStatus - Checks the status of an CSVUrlExportJob object
     *
     * Checks the status of an CSVUrlExportJob object. Returns json object with the status.
    **/
    getUrlsExportStatus(req: operations.GetUrlsExportStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsExportStatusResponse>;
    /**
     * getUrlsExports - A list of the CSV Exports requests and their current status
     *
     * A list of the CSV Exports requests and their current status
    **/
    getUrlsExports(req: operations.GetUrlsExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsExportsResponse>;
    /**
     * getUrlsSuggestedFilters - Return most frequent segments (= suggested patterns in the previous version)
     *
     * Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.
    **/
    getUrlsSuggestedFilters(req: operations.GetUrlsSuggestedFiltersRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsSuggestedFiltersResponse>;
}
