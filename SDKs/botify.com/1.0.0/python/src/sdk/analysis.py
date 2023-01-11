import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Analysis:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_urls_export(self, request: operations.CreateUrlsExportRequest) -> operations.CreateUrlsExportResponse:
        r"""Creates a new UrlExport object and starts a task that will export the results into a csv
        Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUrlsExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CsvExportStatus])
                res.csv_export_status = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_analysis_summary(self, request: operations.GetAnalysisSummaryRequest) -> operations.GetAnalysisSummaryResponse:
        r"""Get an Analysis detail
        Get an Analysis detail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnalysisSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalysisDetail])
                res.analysis_detail = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_crawl_statistics(self, request: operations.GetCrawlStatisticsRequest) -> operations.GetCrawlStatisticsResponse:
        r"""Return global statistics for an analysis
        Return global statistics for an analysis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrawlStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CrawlStatistics])
                res.crawl_statistics = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_crawl_statistics_by_frequency(self, request: operations.GetCrawlStatisticsByFrequencyRequest) -> operations.GetCrawlStatisticsByFrequencyResponse:
        r"""Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
        Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrawlStatisticsByFrequencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CrawlStatisticsTime])
                res.crawl_statistics_time = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_crawl_statistics_urls(self, request: operations.GetCrawlStatisticsUrlsRequest) -> operations.GetCrawlStatisticsUrlsResponse:
        r"""Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
        Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrawlStatisticsUrlsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.get_crawl_statistics_urls_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_ganalytics_orphan_ur_ls(self, request: operations.GetGanalyticsOrphanUrLsRequest) -> operations.GetGanalyticsOrphanUrLsResponse:
        r"""List of Orphan URLs
        List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGanalyticsOrphanUrLsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGanalyticsOrphanUrLs200ApplicationJSON])
                res.get_ganalytics_orphan_ur_ls_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_links_percentiles(self, request: operations.GetLinksPercentilesRequest) -> operations.GetLinksPercentilesResponse:
        r"""Get inlinks percentiles
        Get inlinks percentiles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinksPercentilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinksPercentiles])
                res.links_percentiles = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_links_top_domains(self, request: operations.GetLinksTopDomainsRequest) -> operations.GetLinksTopDomainsResponse:
        r"""Top domains
        Top domains
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinksTopDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinksTopDomains200ApplicationJSON])
                res.get_links_top_domains_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_links_top_subdomains(self, request: operations.GetLinksTopSubdomainsRequest) -> operations.GetLinksTopSubdomainsResponse:
        r"""Top subddomains
        Top subddomains
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinksTopSubdomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinksTopSubdomains200ApplicationJSON])
                res.get_links_top_subdomains_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_page_rank_lost(self, request: operations.GetPageRankLostRequest) -> operations.GetPageRankLostResponse:
        r"""Lost pagerank
        Lost pagerank
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPageRankLostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageRankLost])
                res.page_rank_lost = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_sitemaps_report(self, request: operations.GetSitemapsReportRequest) -> operations.GetSitemapsReportResponse:
        r"""Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
        Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitemapsReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SitemapsReport])
                res.sitemaps_report = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_sitemaps_samples_out_of_config(self, request: operations.GetSitemapsSamplesOutOfConfigRequest) -> operations.GetSitemapsSamplesOutOfConfigResponse:
        r"""Sample list of URLs which were found in your sitemaps but outside of the
        Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitemapsSamplesOutOfConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSitemapsSamplesOutOfConfig200ApplicationJSON])
                res.get_sitemaps_samples_out_of_config_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_sitemaps_samples_sitemaps_only(self, request: operations.GetSitemapsSamplesSitemapsOnlyRequest) -> operations.GetSitemapsSamplesSitemapsOnlyResponse:
        r"""Sample list of URLs which were found in your sitemaps, within the project
        Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitemapsSamplesSitemapsOnlyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSitemapsSamplesSitemapsOnly200ApplicationJSON])
                res.get_sitemaps_samples_sitemaps_only_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_url_detail(self, request: operations.GetURLDetailRequest) -> operations.GetURLDetailResponse:
        r"""Gets the detail of an URL for an analysis
        Gets the detail of an URL for an analysis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetURLDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.url_detail = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_urls(self, request: operations.GetUrlsRequest) -> operations.GetUrlsResponse:
        r"""Executes a query and returns a paginated response
        Executes a query and returns a paginated response
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/urls", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUrlsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUrls200ApplicationJSON])
                res.get_urls_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_urls_aggs(self, request: operations.GetUrlsAggsRequest) -> operations.GetUrlsAggsResponse:
        r"""Query aggregator
        Query aggregator. It accepts multiple queries
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUrlsAggsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.get_urls_aggs_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_urls_datamodel(self, request: operations.GetUrlsDatamodelRequest) -> operations.GetUrlsDatamodelResponse:
        r"""Gets an Analysis datamodel
        Gets an Analysis datamodel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUrlsDatamodelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CrawlDatamodel])
                res.crawl_datamodel = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_urls_export_status(self, request: operations.GetUrlsExportStatusRequest) -> operations.GetUrlsExportStatusResponse:
        r"""Checks the status of an CSVUrlExportJob object
        Checks the status of an CSVUrlExportJob object. Returns json object with the status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUrlsExportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CsvExportStatus])
                res.csv_export_status = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_urls_exports(self, request: operations.GetUrlsExportsRequest) -> operations.GetUrlsExportsResponse:
        r"""A list of the CSV Exports requests and their current status
        A list of the CSV Exports requests and their current status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUrlsExportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUrlsExports200ApplicationJSON])
                res.get_urls_exports_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_urls_suggested_filters(self, request: operations.GetUrlsSuggestedFiltersRequest) -> operations.GetUrlsSuggestedFiltersResponse:
        r"""Return most frequent segments (= suggested patterns in the previous version)
        Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUrlsSuggestedFiltersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UrlsAggsQuery])
                res.urls_aggs_query = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    