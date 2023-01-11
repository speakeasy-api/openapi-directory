import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Analysis {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * createUrlsExport - Creates a new UrlExport object and starts a task that will export the results into a csv
   *
   * Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task
  **/
  createUrlsExport(
    req: operations.CreateUrlsExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUrlsExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUrlsExportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateUrlsExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.csvExportStatus = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAnalysisSummary - Get an Analysis detail
   *
   * Get an Analysis detail
  **/
  getAnalysisSummary(
    req: operations.GetAnalysisSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnalysisSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnalysisSummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAnalysisSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.analysisDetail = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCrawlStatistics - Return global statistics for an analysis
   *
   * Return global statistics for an analysis
  **/
  getCrawlStatistics(
    req: operations.GetCrawlStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCrawlStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCrawlStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCrawlStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.crawlStatistics = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCrawlStatisticsByFrequency - Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
   *
   * Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis
  **/
  getCrawlStatisticsByFrequency(
    req: operations.GetCrawlStatisticsByFrequencyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCrawlStatisticsByFrequencyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCrawlStatisticsByFrequencyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCrawlStatisticsByFrequencyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.crawlStatisticsTime = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCrawlStatisticsUrls - Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
   *
   * Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
  **/
  getCrawlStatisticsUrls(
    req: operations.GetCrawlStatisticsUrlsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCrawlStatisticsUrlsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCrawlStatisticsUrlsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCrawlStatisticsUrlsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getCrawlStatisticsUrls200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGanalyticsOrphanUrLs - List of Orphan URLs
   *
   * List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)
  **/
  getGanalyticsOrphanUrLs(
    req: operations.GetGanalyticsOrphanUrLsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGanalyticsOrphanUrLsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGanalyticsOrphanUrLsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGanalyticsOrphanUrLsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getGanalyticsOrphanURLs200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getLinksPercentiles - Get inlinks percentiles
   *
   * Get inlinks percentiles
  **/
  getLinksPercentiles(
    req: operations.GetLinksPercentilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLinksPercentilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLinksPercentilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLinksPercentilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.linksPercentiles = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getLinksTopDomains - Top domains
   *
   * Top domains
  **/
  getLinksTopDomains(
    req: operations.GetLinksTopDomainsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLinksTopDomainsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLinksTopDomainsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLinksTopDomainsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getLinksTopDomains200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getLinksTopSubdomains - Top subddomains
   *
   * Top subddomains
  **/
  getLinksTopSubdomains(
    req: operations.GetLinksTopSubdomainsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLinksTopSubdomainsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLinksTopSubdomainsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLinksTopSubdomainsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getLinksTopSubdomains200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPageRankLost - Lost pagerank
   *
   * Lost pagerank
  **/
  getPageRankLost(
    req: operations.GetPageRankLostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPageRankLostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPageRankLostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPageRankLostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pageRankLost = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSitemapsReport - Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
   *
   * Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)
  **/
  getSitemapsReport(
    req: operations.GetSitemapsReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSitemapsReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSitemapsReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSitemapsReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sitemapsReport = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSitemapsSamplesOutOfConfig - Sample list of URLs which were found in your sitemaps but outside of the
   *
   * Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.
  **/
  getSitemapsSamplesOutOfConfig(
    req: operations.GetSitemapsSamplesOutOfConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSitemapsSamplesOutOfConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSitemapsSamplesOutOfConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSitemapsSamplesOutOfConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSitemapsSamplesOutOfConfig200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSitemapsSamplesSitemapsOnly - Sample list of URLs which were found in your sitemaps, within the project
   *
   * Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.
  **/
  getSitemapsSamplesSitemapsOnly(
    req: operations.GetSitemapsSamplesSitemapsOnlyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSitemapsSamplesSitemapsOnlyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSitemapsSamplesSitemapsOnlyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSitemapsSamplesSitemapsOnlyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSitemapsSamplesSitemapsOnly200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUrlDetail - Gets the detail of an URL for an analysis
   *
   * Gets the detail of an URL for an analysis
  **/
  getUrlDetail(
    req: operations.GetUrlDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUrlDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUrlDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUrlDetailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.urlDetail = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUrls - Executes a query and returns a paginated response
   *
   * Executes a query and returns a paginated response
  **/
  getUrls(
    req: operations.GetUrlsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUrlsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUrlsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/urls", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUrlsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getUrls200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUrlsAggs - Query aggregator
   *
   * Query aggregator. It accepts multiple queries
  **/
  getUrlsAggs(
    req: operations.GetUrlsAggsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUrlsAggsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUrlsAggsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUrlsAggsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getUrlsAggs200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUrlsDatamodel - Gets an Analysis datamodel
   *
   * Gets an Analysis datamodel
  **/
  getUrlsDatamodel(
    req: operations.GetUrlsDatamodelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUrlsDatamodelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUrlsDatamodelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUrlsDatamodelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.crawlDatamodel = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUrlsExportStatus - Checks the status of an CSVUrlExportJob object
   *
   * Checks the status of an CSVUrlExportJob object. Returns json object with the status.
  **/
  getUrlsExportStatus(
    req: operations.GetUrlsExportStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUrlsExportStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUrlsExportStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUrlsExportStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.csvExportStatus = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUrlsExports - A list of the CSV Exports requests and their current status
   *
   * A list of the CSV Exports requests and their current status
  **/
  getUrlsExports(
    req: operations.GetUrlsExportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUrlsExportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUrlsExportsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUrlsExportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getUrlsExports200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUrlsSuggestedFilters - Return most frequent segments (= suggested patterns in the previous version)
   *
   * Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.
  **/
  getUrlsSuggestedFilters(
    req: operations.GetUrlsSuggestedFiltersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUrlsSuggestedFiltersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUrlsSuggestedFiltersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUrlsSuggestedFiltersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.urlsAggsQuery = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
