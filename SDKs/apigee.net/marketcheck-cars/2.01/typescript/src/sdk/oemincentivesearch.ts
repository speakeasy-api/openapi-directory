import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class OemIncentiveSearch {
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
   * getSearchCarIncentiveOem - Gets oem incentive listings for the given search criteria
   *
   * This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
   *  The search API facilitates the following use cases - 
   * 1. Search Cars around a given geo-point within a given radius 
   * 2. Search cars for a specific year / make / model or combination of these 
   * 3. Search cars matching multiple year, make, model combinatins in the same search request
   * 4. Filter results by most car specification attributes
   * 5. Search for similar cars by VIN or Taxonomy VIN 
   * 6. Filter cars within a given price / miles / days on market (dom) range
   * 7. Specify a sort order for the results on price / miles / dom / listed date 
   * 8. Search cars for a given City / State combination 
   * 9. Get Facets to build the search drill downs 
   * 10. Get Market averages for price/miles/dom for your search
  **/
  getSearchCarIncentiveOem(
    req: operations.GetSearchCarIncentiveOemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchCarIncentiveOemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchCarIncentiveOemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/car/incentive/oem";
    
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
        const res: operations.GetSearchCarIncentiveOemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
