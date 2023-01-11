import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Snapshots {
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
   * deleteSnapshot - Delete a Snapshot
   *
   * Both Droplet and volume snapshots are managed through the `/v2/snapshots/`
   * endpoint. To delete a snapshot, send a DELETE request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   * 
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   * 
  **/
  deleteSnapshot(
    req: operations.DeleteSnapshotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSnapshotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSnapshotRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/snapshots/{snapshot_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSnapshotResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteSnapshot401ApplicationJSONObject = httpRes?.data;
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
   * getSnapshot - Retrieve an Existing Snapshot
   *
   * To retrieve information about a snapshot, send a GET request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   * 
   * The response will be a JSON object with a key called `snapshot`. The value of
   * this will be an snapshot object containing the standard snapshot attributes.
   * 
  **/
  getSnapshot(
    req: operations.GetSnapshotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnapshotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnapshotRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/snapshots/{snapshot_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSnapshotResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSnapshot200ApplicationJSONAny = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSnapshot401ApplicationJSONObject = httpRes?.data;
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
   * listAllSnapshots - List All Snapshots
   *
   * To list all of the snapshots available on your account, send a GET request to
   * `/v2/snapshots`.
   * 
   * The response will be a JSON object with a key called `snapshots`. This will be
   * set to an array of `snapshot` objects, each of which will contain the standard
   * snapshot attributes.
   * 
   * ### Filtering Results by Resource Type
   * 
   * It's possible to request filtered results by including certain query parameters.
   * 
   * #### List Droplet Snapshots
   * 
   * To retrieve only snapshots based on Droplets, include the `resource_type`
   * query parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.
   * 
   * #### List Volume Snapshots
   * 
   * To retrieve only snapshots based on volumes, include the `resource_type`
   * query parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.
   * 
  **/
  listAllSnapshots(
    req: operations.ListAllSnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllSnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllSnapshotsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/snapshots";
    
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
        const res: operations.ListAllSnapshotsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listAllSnapshots200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listAllSnapshots401ApplicationJSONObject = httpRes?.data;
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
