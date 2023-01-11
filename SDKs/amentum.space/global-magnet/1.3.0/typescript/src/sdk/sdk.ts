import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://amentum.space/wmm",
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
   * appApiWmmEndpointsWmmMagneticField - Calculate magnetic declination, inclination, total field intensity, and grid variation
   * 
   *
   * at specified conditions.
   * 
  **/
  appApiWmmEndpointsWmmMagneticField(
    req: operations.AppApiWmmEndpointsWmmMagneticFieldRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppApiWmmEndpointsWmmMagneticFieldResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppApiWmmEndpointsWmmMagneticFieldRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/magnetic_field";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.AppApiWmmEndpointsWmmMagneticFieldResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.appApiWMMEndpointsWMMMagneticField200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}