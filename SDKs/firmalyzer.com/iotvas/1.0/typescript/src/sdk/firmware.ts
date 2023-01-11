import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Firmware {
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
   * firmwareAccountsFirmwareFirmwareHashAccountsGet - Get default accounts and password hashes of a firmware
  **/
  firmwareAccountsFirmwareFirmwareHashAccountsGet(
    req: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/firmware/{firmware_hash}/accounts", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultAccounts = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * firmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet - Get default OS configuration issues of a device firmware
  **/
  firmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet(
    req: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/firmware/{firmware_hash}/config-issues", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configIssues = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * firmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet - Get expired digital certificates embedded in a device firmware
  **/
  firmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet(
    req: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/firmware/{firmware_hash}/expired-certs", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.expiredCerts = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * firmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet - Get private crypto keys embedded in a device firmware
  **/
  firmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet(
    req: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/firmware/{firmware_hash}/private-keys", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cryptoKeys = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * firmwareRiskFirmwareFirmwareHashRiskGet - Get iot device firmware risk analysis
  **/
  firmwareRiskFirmwareFirmwareHashRiskGet(
    req: operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/firmware/{firmware_hash}/risk", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.firmwareRisk = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * firmwareWeakCertsFirmwareFirmwareHashWeakCertsGet - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
  **/
  firmwareWeakCertsFirmwareFirmwareHashWeakCertsGet(
    req: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/firmware/{firmware_hash}/weak-certs", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.weakCerts = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * firmwareWeakKeysFirmwareFirmwareHashWeakKeysGet - Get weak crypto keys with short length
  **/
  firmwareWeakKeysFirmwareFirmwareHashWeakKeysGet(
    req: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/firmware/{firmware_hash}/weak-keys", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cryptoKeys = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
