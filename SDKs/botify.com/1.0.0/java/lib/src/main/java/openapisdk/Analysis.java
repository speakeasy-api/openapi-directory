package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Analysis {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Analysis(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createUrlsExport - Creates a new UrlExport object and starts a task that will export the results into a csv
     *
     * Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task
    **/
    public openapisdk.models.operations.CreateUrlsExportResponse createUrlsExport(openapisdk.models.operations.CreateUrlsExportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUrlsExportResponse res = new openapisdk.models.operations.CreateUrlsExportResponse() {{
            csvExportStatus = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CsvExportStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CsvExportStatus.class);
                res.csvExportStatus = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAnalysisSummary - Get an Analysis detail
     *
     * Get an Analysis detail
    **/
    public openapisdk.models.operations.GetAnalysisSummaryResponse getAnalysisSummary(openapisdk.models.operations.GetAnalysisSummaryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnalysisSummaryResponse res = new openapisdk.models.operations.GetAnalysisSummaryResponse() {{
            analysisDetail = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AnalysisDetail out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AnalysisDetail.class);
                res.analysisDetail = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCrawlStatistics - Return global statistics for an analysis
     *
     * Return global statistics for an analysis
    **/
    public openapisdk.models.operations.GetCrawlStatisticsResponse getCrawlStatistics(openapisdk.models.operations.GetCrawlStatisticsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCrawlStatisticsResponse res = new openapisdk.models.operations.GetCrawlStatisticsResponse() {{
            crawlStatistics = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CrawlStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CrawlStatistics.class);
                res.crawlStatistics = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCrawlStatisticsByFrequency - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
     *
     * Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis
    **/
    public openapisdk.models.operations.GetCrawlStatisticsByFrequencyResponse getCrawlStatisticsByFrequency(openapisdk.models.operations.GetCrawlStatisticsByFrequencyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCrawlStatisticsByFrequencyResponse res = new openapisdk.models.operations.GetCrawlStatisticsByFrequencyResponse() {{
            crawlStatisticsTime = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CrawlStatisticsTime out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CrawlStatisticsTime.class);
                res.crawlStatisticsTime = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCrawlStatisticsUrls - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
     *
     * Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
    **/
    public openapisdk.models.operations.GetCrawlStatisticsUrlsResponse getCrawlStatisticsUrls(openapisdk.models.operations.GetCrawlStatisticsUrlsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCrawlStatisticsUrlsResponse res = new openapisdk.models.operations.GetCrawlStatisticsUrlsResponse() {{
            getCrawlStatisticsUrls200ApplicationJSONAnies = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.getCrawlStatisticsUrls200ApplicationJSONAnies = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGanalyticsOrphanUrLs - List of Orphan URLs
     *
     * List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)
    **/
    public openapisdk.models.operations.GetGanalyticsOrphanUrLsResponse getGanalyticsOrphanUrLs(openapisdk.models.operations.GetGanalyticsOrphanUrLsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGanalyticsOrphanUrLsResponse res = new openapisdk.models.operations.GetGanalyticsOrphanUrLsResponse() {{
            getGanalyticsOrphanURLs200ApplicationJSONObject = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetGanalyticsOrphanUrLs200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetGanalyticsOrphanUrLs200ApplicationJson.class);
                res.getGanalyticsOrphanURLs200ApplicationJSONObject = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getLinksPercentiles - Get inlinks percentiles
     *
     * Get inlinks percentiles
    **/
    public openapisdk.models.operations.GetLinksPercentilesResponse getLinksPercentiles(openapisdk.models.operations.GetLinksPercentilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLinksPercentilesResponse res = new openapisdk.models.operations.GetLinksPercentilesResponse() {{
            linksPercentiles = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LinksPercentiles out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LinksPercentiles.class);
                res.linksPercentiles = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getLinksTopDomains - Top domains
     *
     * Top domains
    **/
    public openapisdk.models.operations.GetLinksTopDomainsResponse getLinksTopDomains(openapisdk.models.operations.GetLinksTopDomainsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLinksTopDomainsResponse res = new openapisdk.models.operations.GetLinksTopDomainsResponse() {{
            getLinksTopDomains200ApplicationJSONObject = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetLinksTopDomains200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetLinksTopDomains200ApplicationJson.class);
                res.getLinksTopDomains200ApplicationJSONObject = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getLinksTopSubdomains - Top subddomains
     *
     * Top subddomains
    **/
    public openapisdk.models.operations.GetLinksTopSubdomainsResponse getLinksTopSubdomains(openapisdk.models.operations.GetLinksTopSubdomainsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLinksTopSubdomainsResponse res = new openapisdk.models.operations.GetLinksTopSubdomainsResponse() {{
            getLinksTopSubdomains200ApplicationJSONObject = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetLinksTopSubdomains200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetLinksTopSubdomains200ApplicationJson.class);
                res.getLinksTopSubdomains200ApplicationJSONObject = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPageRankLost - Lost pagerank
     *
     * Lost pagerank
    **/
    public openapisdk.models.operations.GetPageRankLostResponse getPageRankLost(openapisdk.models.operations.GetPageRankLostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPageRankLostResponse res = new openapisdk.models.operations.GetPageRankLostResponse() {{
            pageRankLost = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PageRankLost out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PageRankLost.class);
                res.pageRankLost = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSitemapsReport - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
     *
     * Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)
    **/
    public openapisdk.models.operations.GetSitemapsReportResponse getSitemapsReport(openapisdk.models.operations.GetSitemapsReportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSitemapsReportResponse res = new openapisdk.models.operations.GetSitemapsReportResponse() {{
            sitemapsReport = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SitemapsReport out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SitemapsReport.class);
                res.sitemapsReport = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSitemapsSamplesOutOfConfig - Sample list of URLs which were found in your sitemaps but outside of the
     *
     * Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.
    **/
    public openapisdk.models.operations.GetSitemapsSamplesOutOfConfigResponse getSitemapsSamplesOutOfConfig(openapisdk.models.operations.GetSitemapsSamplesOutOfConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSitemapsSamplesOutOfConfigResponse res = new openapisdk.models.operations.GetSitemapsSamplesOutOfConfigResponse() {{
            getSitemapsSamplesOutOfConfig200ApplicationJSONObject = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetSitemapsSamplesOutOfConfig200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetSitemapsSamplesOutOfConfig200ApplicationJson.class);
                res.getSitemapsSamplesOutOfConfig200ApplicationJSONObject = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSitemapsSamplesSitemapsOnly - Sample list of URLs which were found in your sitemaps, within the project
     *
     * Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.
    **/
    public openapisdk.models.operations.GetSitemapsSamplesSitemapsOnlyResponse getSitemapsSamplesSitemapsOnly(openapisdk.models.operations.GetSitemapsSamplesSitemapsOnlyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSitemapsSamplesSitemapsOnlyResponse res = new openapisdk.models.operations.GetSitemapsSamplesSitemapsOnlyResponse() {{
            getSitemapsSamplesSitemapsOnly200ApplicationJSONObject = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetSitemapsSamplesSitemapsOnly200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetSitemapsSamplesSitemapsOnly200ApplicationJson.class);
                res.getSitemapsSamplesSitemapsOnly200ApplicationJSONObject = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUrlDetail - Gets the detail of an URL for an analysis
     *
     * Gets the detail of an URL for an analysis
    **/
    public openapisdk.models.operations.GetUrlDetailResponse getUrlDetail(openapisdk.models.operations.GetUrlDetailRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUrlDetailResponse res = new openapisdk.models.operations.GetUrlDetailResponse() {{
            urlDetail = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.urlDetail = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUrls - Executes a query and returns a paginated response
     *
     * Executes a query and returns a paginated response
    **/
    public openapisdk.models.operations.GetUrlsResponse getUrls(openapisdk.models.operations.GetUrlsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/urls", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUrlsResponse res = new openapisdk.models.operations.GetUrlsResponse() {{
            getUrls200ApplicationJSONObject = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetUrls200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetUrls200ApplicationJson.class);
                res.getUrls200ApplicationJSONObject = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUrlsAggs - Query aggregator
     *
     * Query aggregator. It accepts multiple queries
    **/
    public openapisdk.models.operations.GetUrlsAggsResponse getUrlsAggs(openapisdk.models.operations.GetUrlsAggsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUrlsAggsResponse res = new openapisdk.models.operations.GetUrlsAggsResponse() {{
            getUrlsAggs200ApplicationJSONAnies = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.getUrlsAggs200ApplicationJSONAnies = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUrlsDatamodel - Gets an Analysis datamodel
     *
     * Gets an Analysis datamodel
    **/
    public openapisdk.models.operations.GetUrlsDatamodelResponse getUrlsDatamodel(openapisdk.models.operations.GetUrlsDatamodelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUrlsDatamodelResponse res = new openapisdk.models.operations.GetUrlsDatamodelResponse() {{
            crawlDatamodel = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CrawlDatamodel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CrawlDatamodel.class);
                res.crawlDatamodel = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUrlsExportStatus - Checks the status of an CSVUrlExportJob object
     *
     * Checks the status of an CSVUrlExportJob object. Returns json object with the status.
    **/
    public openapisdk.models.operations.GetUrlsExportStatusResponse getUrlsExportStatus(openapisdk.models.operations.GetUrlsExportStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUrlsExportStatusResponse res = new openapisdk.models.operations.GetUrlsExportStatusResponse() {{
            csvExportStatus = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CsvExportStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CsvExportStatus.class);
                res.csvExportStatus = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUrlsExports - A list of the CSV Exports requests and their current status
     *
     * A list of the CSV Exports requests and their current status
    **/
    public openapisdk.models.operations.GetUrlsExportsResponse getUrlsExports(openapisdk.models.operations.GetUrlsExportsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUrlsExportsResponse res = new openapisdk.models.operations.GetUrlsExportsResponse() {{
            getUrlsExports200ApplicationJSONObject = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetUrlsExports200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetUrlsExports200ApplicationJson.class);
                res.getUrlsExports200ApplicationJSONObject = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUrlsSuggestedFilters - Return most frequent segments (= suggested patterns in the previous version)
     *
     * Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.
    **/
    public openapisdk.models.operations.GetUrlsSuggestedFiltersResponse getUrlsSuggestedFilters(openapisdk.models.operations.GetUrlsSuggestedFiltersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUrlsSuggestedFiltersResponse res = new openapisdk.models.operations.GetUrlsSuggestedFiltersResponse() {{
            urlsAggsQuery = null;
            defaultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UrlsAggsQuery out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UrlsAggsQuery.class);
                res.urlsAggsQuery = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DefaultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DefaultPayload.class);
                res.defaultPayload = out;
            }
        }

        return res;
    }
	
}