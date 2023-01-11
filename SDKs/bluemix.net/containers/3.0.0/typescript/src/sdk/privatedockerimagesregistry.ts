import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PrivateDockerImagesRegistry {
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
   * getRegistryNamespaces - Retrieve the namespace of an organization.
   *
   * This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).
  **/
  getRegistryNamespaces(
    req: operations.GetRegistryNamespacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegistryNamespacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegistryNamespacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/registry/namespaces";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRegistryNamespacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.namespace = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * getRegistryNamespacesNamespace - Check the availability of a namespace
   *
   * This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization. 
   * 
   *  Consider the following rules when choosing a namespace for your organization: 
   * 
   * - Every organization can have one namespace at a time only 
   * - The namespace must be unique in Bluemix. 
   * - The namespace can be 4-30 characters long. 
   * - The namespace must start with at least one letter or number. 
   * - The namespace can only contain lowercase letters, numbers or underscores (_). 
  **/
  getRegistryNamespacesNamespace(
    req: operations.GetRegistryNamespacesNamespaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegistryNamespacesNamespaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegistryNamespacesNamespaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/registry/namespaces/{namespace}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRegistryNamespacesNamespaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.namespace = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * putRegistryNamespacesNamespace - Set a namespace for your private Bluemix registry.
   *
   * Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry. 
   * 
   *  The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization: 
   * 
   * - Every organization can have one namespace at a time only 
   * - The namespace must be unique in Bluemix. 
   * - The namespace can be 4-30 characters long. 
   * - The namespace must start with at least one letter or number. 
   * - The namespace can only contain lowercase letters, numbers or underscores (_).
  **/
  putRegistryNamespacesNamespace(
    req: operations.PutRegistryNamespacesNamespaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRegistryNamespacesNamespaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRegistryNamespacesNamespaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/registry/namespaces/{namespace}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRegistryNamespacesNamespaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.namespace = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

}
