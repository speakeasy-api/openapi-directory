import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class DirectDebits {
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
   * activateMandate - Activate a direct debit mandate
   *
   * This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
   * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
   * 
  **/
  activateMandate(
    req: operations.ActivateMandateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivateMandateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivateMandateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mandates/{mandateUuid}/activate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivateMandateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * cancelMandateByUuid - Cancel a direct debit mandate
   *
   * This endpoint allows you to cancel a direct debit mandate.
   * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
   * 
  **/
  cancelMandateByUuid(
    req: operations.CancelMandateByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelMandateByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelMandateByUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mandates/{mandateUuid}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelMandateByUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * getDirectDebitByUuid - Get the deails of a direct debit
   *
   * Retrieve all details of a single direct debit collection/payment, whether successful or not.
   * The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
   * 
  **/
  getDirectDebitByUuid(
    req: operations.GetDirectDebitByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectDebitByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectDebitByUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/directdebits/{directDebitUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDirectDebitByUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDirectDebitMandates - List all direct debit mandates
   *
   * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
   * 
  **/
  getDirectDebitMandates(
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectDebitMandatesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mandates";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDirectDebitMandatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mandates = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDirectDebitsForMandateUuid - Get all DD payments associated with a direct debit mandate
   *
   * Retrieve all direct debit payments associated with a direct debit mandate.
   * The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
   * 
  **/
  getDirectDebitsForMandateUuid(
    req: operations.GetDirectDebitsForMandateUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectDebitsForMandateUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectDebitsForMandateUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/directdebits";
    
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
        const res: operations.GetDirectDebitsForMandateUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.directDebits = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getMandate - Get direct debit mandate details
   *
   * Retrieve all details for a direct debit mandate.
   * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
   * 
  **/
  getMandate(
    req: operations.GetMandateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMandateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMandateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mandates/{mandateUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMandateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * rejectDirectDebit - Reject a direct debit payment
   *
   * This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
   * Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
   * 
  **/
  rejectDirectDebit(
    req: operations.RejectDirectDebitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RejectDirectDebitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RejectDirectDebitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/directdebits/{directDebitUuid}/reject", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RejectDirectDebitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * updateMandateAlias - Update a direct debit mandate alias
   *
   * Update Direct Debit Mandate Alias
   * The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
   * 
  **/
  updateMandateAlias(
    req: operations.UpdateMandateAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMandateAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMandateAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mandates/{mandateUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateMandateAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

}
