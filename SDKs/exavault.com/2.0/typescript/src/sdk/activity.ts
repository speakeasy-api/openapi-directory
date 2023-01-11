import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Activity {
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
   * getSessionLogs - Get activity logs
   *
   * Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges. 
   * 
   * **NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible. 
   *   
   * **Operation Types**
   * Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:
   * 
   * | File Manager Value | API Value | Notes |
   * |-----|----|---|
   * | Connect | PASS | |
   * | Disconnect | EXIT | |
   * | Upload | STOR | |
   * | Download | RETR | |
   * | Delete | DELE | |
   * | Create Folder | MKD | |
   * | Rename | RNTO | |
   * | Move | MOVE | |
   * | Copy | COPY | |
   * | Compress | COMPR | |
   * | Extract | EXTRACT | |
   * | Shared Folders | SHARE | |
   * | Send Files | SEND | |
   * | Receive Files | RECV | |
   * | _N/A_ | EDIT\_SEND | Update send. Not shown in file manager |
   * | Update Share | EDIT\_SHARE| | 
   * | Update Receive | EDIT\_RECV | |
   * | Delete Send | DELE\_SEND | |
   * | Delete Receive | DELE\_RECV | |
   * | Delete Share | DELE\_SHARE | |
   * | Create Notification | NOTIFY | |
   * | Update Notification | EDIT\_NTFY| |
   * | Delete Notification | DELE\_NTFY | |
   * | Create User | USER | |
   * | Update User | EDIT\_USER | |
   * | Delete User | DELE\_USER | |
   * | _N/A_ | DFA | Create direct link. Not shown in file manager |
   * | _N/A_ | EDIT\_DFA | Update direct link options. Not shown in file manager |
   * | _N/A_ | DELE\_DFA | Deactivate direct link. Not shown in file manager|
   * 
  **/
  getSessionLogs(
    req: operations.GetSessionLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSessionLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSessionLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/activity/session";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSessionLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sessionActivityResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWebhookLogs - Get webhook logs
   *
   * Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.
   * 
   * **NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible. 
   * 
   * **Event Types**
   * 
   * Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:
   * 
   * - resources.upload
   * - resources.download
   * - resources.delete
   * - resources.createFolder
   * - resources.rename
   * - resources.move
   * - resources.copy
   * - resources.compress
   * - resources.extract
   * - shares.formSubmit
   * 
  **/
  getWebhookLogs(
    req: operations.GetWebhookLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhookLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhookLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/activity/webhooks";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhookLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookActivityResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
