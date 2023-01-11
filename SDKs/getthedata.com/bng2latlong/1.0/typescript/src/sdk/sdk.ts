import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://api.getthedata.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://www.getthedata.com/bng2latlong - Full documentation*/
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
   * getBng2latlongEastingNorthing - Returns latitude and longitude for the given easting and northing.
   *
   * Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
   * #### A successful request returns the following fields:
   * * status - this will be `ok`
   * * easting - the easting provided in the request
   * * northing - the northing provided in the request
   * * latitude - the latitude of the converted coordinates
   * * longitude - the longitude of the converted coordinates
   * #### An unsuccessful request returns the following fields:
   * * status - this will be `error`
   * * error - an error message
   * 
  **/
  getBng2latlongEastingNorthing(
    req: operations.GetBng2latlongEastingNorthingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBng2latlongEastingNorthingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBng2latlongEastingNorthingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bng2latlong/{easting}/{northing}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBng2latlongEastingNorthingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getBng2latlongEastingNorthing200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}