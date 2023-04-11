import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Analysis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new UrlExport object and starts a task that will export the results into a csv
     *
     * @remarks
     * Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task
     */
    createUrlsExport(req: operations.CreateUrlsExportRequest, config?: AxiosRequestConfig): Promise<operations.CreateUrlsExportResponse>;
    /**
     * Get an Analysis detail
     *
     * @remarks
     * Get an Analysis detail
     */
    getAnalysisSummary(req: operations.GetAnalysisSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetAnalysisSummaryResponse>;
    /**
     * Return global statistics for an analysis
     *
     * @remarks
     * Return global statistics for an analysis
     */
    getCrawlStatistics(req: operations.GetCrawlStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlStatisticsResponse>;
    /**
     * Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
     *
     * @remarks
     * Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis
     */
    getCrawlStatisticsByFrequency(req: operations.GetCrawlStatisticsByFrequencyRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlStatisticsByFrequencyResponse>;
    /**
     * Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
     *
     * @remarks
     * Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
     */
    getCrawlStatisticsUrls(req: operations.GetCrawlStatisticsUrlsRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlStatisticsUrlsResponse>;
    /**
     * List of Orphan URLs
     *
     * @remarks
     * List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)
     */
    getGanalyticsOrphanURLs(req: operations.GetGanalyticsOrphanURLsRequest, config?: AxiosRequestConfig): Promise<operations.GetGanalyticsOrphanURLsResponse>;
    /**
     * Get inlinks percentiles
     *
     * @remarks
     * Get inlinks percentiles
     */
    getLinksPercentiles(req: operations.GetLinksPercentilesRequest, config?: AxiosRequestConfig): Promise<operations.GetLinksPercentilesResponse>;
    /**
     * Top domains
     *
     * @remarks
     * Top domains
     */
    getLinksTopDomains(req: operations.GetLinksTopDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinksTopDomainsResponse>;
    /**
     * Top subddomains
     *
     * @remarks
     * Top subddomains
     */
    getLinksTopSubdomains(req: operations.GetLinksTopSubdomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinksTopSubdomainsResponse>;
    /**
     * Lost pagerank
     *
     * @remarks
     * Lost pagerank
     */
    getPageRankLost(req: operations.GetPageRankLostRequest, config?: AxiosRequestConfig): Promise<operations.GetPageRankLostResponse>;
    /**
     * Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
     *
     * @remarks
     * Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)
     */
    getSitemapsReport(req: operations.GetSitemapsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetSitemapsReportResponse>;
    /**
     * Sample list of URLs which were found in your sitemaps but outside of the
     *
     * @remarks
     * Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.
     */
    getSitemapsSamplesOutOfConfig(req: operations.GetSitemapsSamplesOutOfConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetSitemapsSamplesOutOfConfigResponse>;
    /**
     * Sample list of URLs which were found in your sitemaps, within the project
     *
     * @remarks
     * Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.
     */
    getSitemapsSamplesSitemapsOnly(req: operations.GetSitemapsSamplesSitemapsOnlyRequest, config?: AxiosRequestConfig): Promise<operations.GetSitemapsSamplesSitemapsOnlyResponse>;
    /**
     * Gets the detail of an URL for an analysis
     *
     * @remarks
     * Gets the detail of an URL for an analysis
     */
    getUrlDetail(req: operations.GetUrlDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlDetailResponse>;
    /**
     * Executes a query and returns a paginated response
     *
     * @remarks
     * Executes a query and returns a paginated response
     */
    getUrls(req: operations.GetUrlsRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsResponse>;
    /**
     * Query aggregator
     *
     * @remarks
     * Query aggregator. It accepts multiple queries
     */
    getUrlsAggs(req: operations.GetUrlsAggsRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsAggsResponse>;
    /**
     * Gets an Analysis datamodel
     *
     * @remarks
     * Gets an Analysis datamodel
     */
    getUrlsDatamodel(req: operations.GetUrlsDatamodelRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsDatamodelResponse>;
    /**
     * Checks the status of an CSVUrlExportJob object
     *
     * @remarks
     * Checks the status of an CSVUrlExportJob object. Returns json object with the status.
     */
    getUrlsExportStatus(req: operations.GetUrlsExportStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsExportStatusResponse>;
    /**
     * A list of the CSV Exports requests and their current status
     *
     * @remarks
     * A list of the CSV Exports requests and their current status
     */
    getUrlsExports(req: operations.GetUrlsExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsExportsResponse>;
    /**
     * Return most frequent segments (= suggested patterns in the previous version)
     *
     * @remarks
     * Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.
     */
    getUrlsSuggestedFilters(req: operations.GetUrlsSuggestedFiltersRequest, config?: AxiosRequestConfig): Promise<operations.GetUrlsSuggestedFiltersResponse>;
}
