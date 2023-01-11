import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Wkhtmltopdf {
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
   * wkhtmltopdfFromHtmlPost - Convert raw HTML to PDF
   *
   * Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
   * ### Authorize via Header of Request
   * **Authorization: YOUR-API-KEY**
  **/
  wkhtmltopdfFromHtmlPost(
    req: operations.WkhtmltopdfFromHtmlPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WkhtmltopdfFromHtmlPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WkhtmltopdfFromHtmlPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wkhtmltopdf/html";

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
        const res: operations.WkhtmltopdfFromHtmlPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * wkhtmltopdfFromUrlGet - Convert URL to PDF
   *
   * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
   * ### Authorize via Query String Parameter
   * **apikey=YOUR-API-KEY**
   * ### Example
   * ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 
  **/
  wkhtmltopdfFromUrlGet(
    req: operations.WkhtmltopdfFromUrlGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WkhtmltopdfFromUrlGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WkhtmltopdfFromUrlGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wkhtmltopdf/url";
    
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
        const res: operations.WkhtmltopdfFromUrlGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.wkhtmltopdfFromUrlGET200ApplicationPdfBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * wkhtmltopdfFromUrlPost - Convert URL to PDF
   *
   * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
   * ### Authorize via Header of Request
   * **Authorization: YOUR-API-KEY**
  **/
  wkhtmltopdfFromUrlPost(
    req: operations.WkhtmltopdfFromUrlPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WkhtmltopdfFromUrlPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WkhtmltopdfFromUrlPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wkhtmltopdf/url";

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
        const res: operations.WkhtmltopdfFromUrlPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
