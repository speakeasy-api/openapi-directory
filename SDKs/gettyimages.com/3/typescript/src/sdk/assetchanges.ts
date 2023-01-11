import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AssetChanges {
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
   * deleteV3AssetChangesChangeSetsChangeSetId - Confirm asset change notifications.
   *
   * # Delete Asset Changes
   * 
   * Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
   * 
   * ##  Quickstart
   * 
   * You'll need an API key and an access token to use this resource.
   * 
  **/
  deleteV3AssetChangesChangeSetsChangeSetId(
    req: operations.DeleteV3AssetChangesChangeSetsChangeSetIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV3AssetChangesChangeSetsChangeSetIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV3AssetChangesChangeSetsChangeSetIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/asset-changes/change-sets/{change-set-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV3AssetChangesChangeSetsChangeSetIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3AssetChangesChannels - Get a list of asset change notification channels.
   *
   * # Get Partner Channels
   * 
   * Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
   * 
   * ##  Quickstart
   * 
   * You'll need an API key and an access token to use this resource.
   * 
   * Partners who have a channel that has been removed should contact their sales representative to be set up again.
   * 
   * 
  **/
  getV3AssetChangesChannels(
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3AssetChangesChannelsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/asset-changes/channels";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3AssetChangesChannelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.channels = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * putV3AssetChangesChangeSets - Get asset change notifications.
   *
   * # Asset Changes
   * 
   * Get notifications about new, updated or deleted assets.
   * 
   * ##  Quickstart
   * 
   * You'll need an API key and an access token to use this resource. 
   * 
   * Notifications older than 60 days will be removed from partner channels.
   * 
  **/
  putV3AssetChangesChangeSets(
    req: operations.PutV3AssetChangesChangeSetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV3AssetChangesChangeSetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV3AssetChangesChangeSetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/asset-changes/change-sets";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV3AssetChangesChangeSetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assetChanges = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assetChanges = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

}
