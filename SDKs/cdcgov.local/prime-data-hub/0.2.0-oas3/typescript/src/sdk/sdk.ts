import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"http://cdcgov.local",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
  }
  
  /**
   * deleteSettingsOrganizationsOrganizationName - Delete an organization (and the associated receivers and senders)
  **/
  deleteSettingsOrganizationsOrganizationName(
    req: operations.DeleteSettingsOrganizationsOrganizationNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingsOrganizationsOrganizationNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingsOrganizationsOrganizationNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSettingsOrganizationsOrganizationNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.organization = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSettingsOrganizationsOrganizationNameReceiversReceiverName - Delete a receiver
  **/
  deleteSettingsOrganizationsOrganizationNameReceiversReceiverName(
    req: operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}/receivers/{receiverName}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.receiver = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSettingsOrganizationsOrganizationNameSendersSenderName - Delete a sender
  **/
  deleteSettingsOrganizationsOrganizationNameSendersSenderName(
    req: operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}/senders/{senderName}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sender = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * getSettingsOrganizations - The settings for all organizations of the system. Must have admin access.
  **/
  getSettingsOrganizations(
    req: operations.GetSettingsOrganizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/settings/organizations";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsOrganizationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.organizations = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSettingsOrganizationsOrganizationName - A single organization settings
  **/
  getSettingsOrganizationsOrganizationName(
    req: operations.GetSettingsOrganizationsOrganizationNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsOrganizationsOrganizationNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.organization = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSettingsOrganizationsOrganizationNameReceivers - A list of receivers and their current settings
  **/
  getSettingsOrganizationsOrganizationNameReceivers(
    req: operations.GetSettingsOrganizationsOrganizationNameReceiversRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameReceiversResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameReceiversRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}/receivers", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsOrganizationsOrganizationNameReceiversResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.receivers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * getSettingsOrganizationsOrganizationNameReceiversReceiverName - The settings of a single of receiver
  **/
  getSettingsOrganizationsOrganizationNameReceiversReceiverName(
    req: operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}/receivers/{receiverName}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.receiver = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * getSettingsOrganizationsOrganizationNameSenders - A list of senders
  **/
  getSettingsOrganizationsOrganizationNameSenders(
    req: operations.GetSettingsOrganizationsOrganizationNameSendersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameSendersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameSendersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}/senders", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsOrganizationsOrganizationNameSendersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.senders = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * getSettingsOrganizationsOrganizationNameSendersSenderName - The settings of a single of sender
  **/
  getSettingsOrganizationsOrganizationNameSendersSenderName(
    req: operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}/senders/{senderName}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sender = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * headSettingsOrganizations - Retrived the last modified for all settings of the system. Must have admin access.
  **/
  headSettingsOrganizations(
    req: operations.HeadSettingsOrganizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadSettingsOrganizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadSettingsOrganizationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/settings/organizations";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "head",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HeadSettingsOrganizationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * postReports - Post a report to the data hub
  **/
  postReports(
    req: operations.PostReportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostReportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostReportsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/reports";

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.PostReportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * putSettingsOrganizationsOrganizationName - Create or update the direct settings associated with an organization
  **/
  putSettingsOrganizationsOrganizationName(
    req: operations.PutSettingsOrganizationsOrganizationNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSettingsOrganizationsOrganizationNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSettingsOrganizationsOrganizationNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSettingsOrganizationsOrganizationNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.organization = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.organization = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * putSettingsOrganizationsOrganizationNameReceiversReceiverName - Update a single reciever
  **/
  putSettingsOrganizationsOrganizationNameReceiversReceiverName(
    req: operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}/receivers/{receiverName}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.receiver = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.receiver = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

  
  /**
   * putSettingsOrganizationsOrganizationNameSendersSenderName - Update a single sender
  **/
  putSettingsOrganizationsOrganizationNameSendersSenderName(
    req: operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/settings/organizations/{organizationName}/senders/{senderName}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.senders = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.senders = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
  }

}