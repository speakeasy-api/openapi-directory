import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class V1Company {
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
   * companyAlternativeSearch - Retrieves a list of companies from the KYC API company index
   *
   * KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name
  **/
  companyAlternativeSearch(
    req: operations.CompanyAlternativeSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyAlternativeSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyAlternativeSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/search/{country}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyAlternativeSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyAlternativeSearch200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyAlternativeSearchDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyAnnouncement - Retrieves announcement data
   *
   * Request full announcement data identified by announcement id
  **/
  companyAnnouncement(
    req: operations.CompanyAnnouncementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyAnnouncementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyAnnouncementRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/announcement/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyAnnouncementResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyAnnouncement200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyAnnouncementDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyDeepsearchIsin - Retrieves a list of stock exchange listings
   *
   * Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.
  **/
  companyDeepsearchIsin(
    req: operations.CompanyDeepsearchIsinRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyDeepsearchIsinResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyDeepsearchIsinRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/company/deepsearch/isin";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyDeepsearchIsinResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDeepsearchISIN200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDeepsearchISINDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyDeepsearchLei - Retrieves a list of companies
   *
   * Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.
  **/
  companyDeepsearchLei(
    req: operations.CompanyDeepsearchLeiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyDeepsearchLeiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyDeepsearchLeiRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/deepsearch/lei/{number}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.CompanyDeepsearchLeiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDeepsearchLEI200ApplicationJSONAny = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDeepsearchLEIDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyDeepsearchName - Retrieves a list of companies from the official business register
   *
   * Search for companies with a certain name. Search is forwarded to the respective business register of the country.
  **/
  companyDeepsearchName(
    req: operations.CompanyDeepsearchNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyDeepsearchNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyDeepsearchNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/deepsearch/name/{country}/{name}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyDeepsearchNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDeepsearchName200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDeepsearchNameDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyDeepsearchNumber - Retrieves a list of companies from the official business register
   *
   * Search for companies with a certain register number. Search is forwarded to the respective business register of the country.
  **/
  companyDeepsearchNumber(
    req: operations.CompanyDeepsearchNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyDeepsearchNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyDeepsearchNumberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/deepsearch/number/{country}/{number}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyDeepsearchNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDeepsearchNumber200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyDeepsearchNumberDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyIdAnnouncements - Retrieves company announcements
   *
   * Search announcements filed to the business register from a company identified by an id
  **/
  companyIdAnnouncements(
    req: operations.CompanyIdAnnouncementsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyIdAnnouncementsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyIdAnnouncementsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/{id}/announcements", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.CompanyIdAnnouncementsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyIdAnnouncements200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyIdAnnouncementsDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyIdDataset - Retrieves company details
   *
   * Get company details by id. The level of details is defined by the dataset parameter
  **/
  companyIdDataset(
    req: operations.CompanyIdDatasetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyIdDatasetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyIdDatasetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/{id}/{dataset}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.CompanyIdDatasetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyIdDatasetDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyIdSuper - Retrieves structured data extracted from a company document
   *
   * Request company superdata identified by company id
  **/
  companyIdSuper(
    req: operations.CompanyIdSuperRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyIdSuperResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyIdSuperRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/{id}/super/{country}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.CompanyIdSuperResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyIdSuper200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyIdSuperDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyMonitorChangeTypesList - Get available ChangeTypes
   *
   * Get current list of available ChangeTypes to subscribe to
  **/
  companyMonitorChangeTypesList(
    req: operations.CompanyMonitorChangeTypesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyMonitorChangeTypesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyMonitorChangeTypesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/company/monitoring/changeTypes";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyMonitorChangeTypesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorChangeTypesList200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorChangeTypesListDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyMonitorId - Get monitor status for specific company id
   *
   * Query status of registered monitors for a specific company identified by a company id
  **/
  companyMonitorId(
    req: operations.CompanyMonitorIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyMonitorIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyMonitorIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/monitoring/list/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyMonitorIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorId200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorIdDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyMonitorList - Retrieves a list of registered monitors
   *
   * Query list of all registered monitors for logged in user
  **/
  companyMonitorList(
    req: operations.CompanyMonitorListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyMonitorListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyMonitorListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/company/monitoring/list";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyMonitorListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorList200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorListDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyMonitorRegister - Register a Company for monitoring
   *
   * Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.
  **/
  companyMonitorRegister(
    req: operations.CompanyMonitorRegisterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyMonitorRegisterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyMonitorRegisterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/monitoring/register/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyMonitorRegisterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorRegister200ApplicationJSONAny = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorRegisterDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyMonitorUnregister - Deactivates an active notification
   *
   * Deactivate a previously registered company monitor identified by the notifier id
  **/
  companyMonitorUnregister(
    req: operations.CompanyMonitorUnregisterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyMonitorUnregisterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyMonitorUnregisterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/monitoring/unregister/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyMonitorUnregisterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyMonitorUnregisterDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyNotificationId - Retrieves a list of registered notifications
   *
   * Query list of registered notifications for a specific company identified by a company id
  **/
  companyNotificationId(
    req: operations.CompanyNotificationIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyNotificationIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyNotificationIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/notification/list/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyNotificationIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyNotificationId200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyNotificationIdDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyNotificationList - Retrieves a list of registered notifications
   *
   * Query list of registered callback URLs for logged in user
  **/
  companyNotificationList(
    req: operations.CompanyNotificationListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyNotificationListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyNotificationListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/company/notification/list";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyNotificationListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyNotificationList200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyNotificationListDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyNotificationRegister - Creates a new notification
   *
   * Register a new callback URL to get notifications about companies.
  **/
  companyNotificationRegister(
    req: operations.CompanyNotificationRegisterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyNotificationRegisterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyNotificationRegisterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/notification/register/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyNotificationRegisterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyNotificationRegister200ApplicationJSONAny = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyNotificationRegisterDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companyNotificationUnregister - Unregister a company from Monitoring
   *
   * Deactivate a previously registered company monitor identified by the notifier id
  **/
  companyNotificationUnregister(
    req: operations.CompanyNotificationUnregisterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanyNotificationUnregisterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanyNotificationUnregisterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/notification/unregister/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompanyNotificationUnregisterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companyNotificationUnregisterDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companySearchName - Retrieves a list of companies from the KYC API company index
   *
   * KYC API company index lookup for companies with a certain name in a country.
  **/
  companySearchName(
    req: operations.CompanySearchNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanySearchNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanySearchNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/search/name/{country}/{name}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.CompanySearchNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companySearchName200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companySearchNameDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * companySearchNumber - Retrieves a list of companies from the KYC API company index
   *
   * KYC API company index lookup for companies with a certain register number in a country.
  **/
  companySearchNumber(
    req: operations.CompanySearchNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompanySearchNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompanySearchNumberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/company/search/number/{country}/{number}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.CompanySearchNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companySearchNumber200ApplicationJSONAnies = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.companySearchNumberDefaultApplicationJSONAny = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
