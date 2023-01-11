import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Preprocessing {
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
   * preprocessingBinarize - Convert an image of text into a binarized (light and dark) view
   *
   * Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.
  **/
  preprocessingBinarize(
    req: operations.PreprocessingBinarizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprocessingBinarizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprocessingBinarizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ocr/preprocessing/image/binarize";

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
        const res: operations.PreprocessingBinarizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.preprocessingBinarize200ApplicationJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                res.preprocessingBinarize200ApplicationXMLByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.preprocessingBinarize200TextJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                res.preprocessingBinarize200TextXMLByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * preprocessingBinarizeAdvanced - Convert an image of text into a binary (light and dark) view with ML
   *
   * Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.
  **/
  preprocessingBinarizeAdvanced(
    req: operations.PreprocessingBinarizeAdvancedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprocessingBinarizeAdvancedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprocessingBinarizeAdvancedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ocr/preprocessing/image/binarize/advanced";

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
        const res: operations.PreprocessingBinarizeAdvancedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.preprocessingBinarizeAdvanced200ApplicationJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                res.preprocessingBinarizeAdvanced200ApplicationXMLByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.preprocessingBinarizeAdvanced200TextJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                res.preprocessingBinarizeAdvanced200TextXMLByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * preprocessingGetPageAngle - Get the angle of the page / document / receipt
   *
   * Analyzes a photo or image of a document and identifies the rotation angle of the page.
  **/
  preprocessingGetPageAngle(
    req: operations.PreprocessingGetPageAngleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprocessingGetPageAngleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprocessingGetPageAngleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ocr/preprocessing/image/get-page-angle";

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
        const res: operations.PreprocessingGetPageAngleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getPageAngleResult = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.getPageAngleResult = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * preprocessingUnrotate - Detect and unrotate a document image
   *
   * Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
  **/
  preprocessingUnrotate(
    req: operations.PreprocessingUnrotateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprocessingUnrotateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprocessingUnrotateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ocr/preprocessing/image/unrotate";

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
        const res: operations.PreprocessingUnrotateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.preprocessingUnrotate200ApplicationJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                res.preprocessingUnrotate200ApplicationXMLByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.preprocessingUnrotate200TextJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                res.preprocessingUnrotate200TextXMLByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * preprocessingUnrotateAdvanced - Detect and unrotate a document image (advanced)
   *
   * Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
  **/
  preprocessingUnrotateAdvanced(
    req: operations.PreprocessingUnrotateAdvancedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprocessingUnrotateAdvancedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprocessingUnrotateAdvancedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ocr/preprocessing/image/unrotate/advanced";

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
        const res: operations.PreprocessingUnrotateAdvancedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.preprocessingUnrotateAdvanced200ApplicationJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                res.preprocessingUnrotateAdvanced200ApplicationXMLByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.preprocessingUnrotateAdvanced200TextJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                res.preprocessingUnrotateAdvanced200TextXMLByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * preprocessingUnskew - Detect and unskew a photo of a document
   *
   * Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
  **/
  preprocessingUnskew(
    req: operations.PreprocessingUnskewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PreprocessingUnskewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PreprocessingUnskewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ocr/preprocessing/image/unskew";

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
        const res: operations.PreprocessingUnskewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.preprocessingUnskew200ApplicationJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                res.preprocessingUnskew200ApplicationXMLByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.preprocessingUnskew200TextJSONByteString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                res.preprocessingUnskew200TextXMLByteString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

}
