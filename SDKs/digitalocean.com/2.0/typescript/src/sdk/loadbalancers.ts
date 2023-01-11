import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class LoadBalancers {
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
   * addLoadBalancerDroplets - Add Droplets to a Load Balancer
   *
   * To assign a Droplet to a load balancer instance, send a POST request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
   * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
   * Individual Droplets can not be added to a load balancer configured with a
   * Droplet tag. Attempting to do so will result in a "422 Unprocessable Entity"
   * response from the API.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  addLoadBalancerDroplets(
    req: operations.AddLoadBalancerDropletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddLoadBalancerDropletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddLoadBalancerDropletsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/load_balancers/{lb_id}/droplets", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.AddLoadBalancerDropletsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.addLoadBalancerDroplets401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * addLoadBalancerForwardingRules - Add Forwarding Rules to a Load Balancer
   *
   * To add an additional forwarding rule to a load balancer instance, send a POST
   * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body
   * of the request, there should be a `forwarding_rules` attribute containing an
   * array of rules to be added.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  addLoadBalancerForwardingRules(
    req: operations.AddLoadBalancerForwardingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddLoadBalancerForwardingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddLoadBalancerForwardingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/load_balancers/{lb_id}/forwarding_rules", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.AddLoadBalancerForwardingRulesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.addLoadBalancerForwardingRules401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createLoadBalancer - Create a New Load Balancer
   *
   * To create a new load balancer instance, send a POST request to
   * `/v2/load_balancers`.
   * 
   * You can specify the Droplets that will sit behind the load balancer using one
   * of two methods:
   * 
   * * Set `droplet_ids` to a list of specific Droplet IDs.
   * * Set `tag` to the name of a tag. All Droplets with this tag applied will be
   *   assigned to the load balancer. Additional Droplets will be automatically
   *   assigned as they are tagged.
   * 
   * These methods are mutually exclusive.
   * 
  **/
  createLoadBalancer(
    req: operations.CreateLoadBalancerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateLoadBalancerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateLoadBalancerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/load_balancers";

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.CreateLoadBalancerResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createLoadBalancer202ApplicationJSONAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createLoadBalancer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteLoadBalancer - Delete a Load Balancer
   *
   * To delete a load balancer instance, disassociating any Droplets assigned to it
   * and removing it from your account, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`.
   * 
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   * 
  **/
  deleteLoadBalancer(
    req: operations.DeleteLoadBalancerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLoadBalancerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLoadBalancerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/load_balancers/{lb_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteLoadBalancerResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteLoadBalancer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getLoadBalancer - Retrieve an Existing Load Balancer
   *
   * To show information about a load balancer instance, send a GET request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`.
   * 
  **/
  getLoadBalancer(
    req: operations.GetLoadBalancerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoadBalancerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLoadBalancerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/load_balancers/{lb_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLoadBalancerResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getLoadBalancer200ApplicationJSONAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getLoadBalancer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listAllLoadBalancers - List All Load Balancers
   *
   * To list all of the load balancer instances on your account, send a GET request
   * to `/v2/load_balancers`.
   * 
  **/
  listAllLoadBalancers(
    req: operations.ListAllLoadBalancersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllLoadBalancersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllLoadBalancersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/load_balancers";
    
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
        const res: operations.ListAllLoadBalancersResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listAllLoadBalancers200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listAllLoadBalancers401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * removeLoadBalancerDroplets - Remove Droplets from a Load Balancer
   *
   * To remove a Droplet from a load balancer instance, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
   * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  removeLoadBalancerDroplets(
    req: operations.RemoveLoadBalancerDropletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveLoadBalancerDropletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveLoadBalancerDropletsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/load_balancers/{lb_id}/droplets", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "delete",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveLoadBalancerDropletsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.removeLoadBalancerDroplets401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * removeLoadBalancerForwardingRules - Remove Forwarding Rules from a Load Balancer
   *
   * To remove forwarding rules from a load balancer instance, send a DELETE
   * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the
   * body of the request, there should be a `forwarding_rules` attribute containing
   * an array of rules to be removed.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  removeLoadBalancerForwardingRules(
    req: operations.RemoveLoadBalancerForwardingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveLoadBalancerForwardingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveLoadBalancerForwardingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/load_balancers/{lb_id}/forwarding_rules", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "delete",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveLoadBalancerForwardingRulesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.removeLoadBalancerForwardingRules401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateLoadBalancer - Update a Load Balancer
   *
   * To update a load balancer's settings, send a PUT request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full
   * representation of the load balancer including existing attributes. It may
   * contain _one of_ the `droplets_ids` or `tag` attributes as they are mutually
   * exclusive. **Note that any attribute that is not provided will be reset to its
   * default value.**
   * 
  **/
  updateLoadBalancer(
    req: operations.UpdateLoadBalancerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateLoadBalancerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateLoadBalancerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/load_balancers/{lb_id}", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.UpdateLoadBalancerResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateLoadBalancer200ApplicationJSONAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateLoadBalancer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
