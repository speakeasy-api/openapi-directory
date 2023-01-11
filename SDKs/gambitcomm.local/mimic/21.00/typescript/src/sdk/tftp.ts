import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Tftp {
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
   * protocolTftpGetArgs - Show the agent's TFTP argument structure
   *
   * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTftpGetArgs(
    req: operations.ProtocolTftpGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpGetArgs200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpGetConfig - Show the agent's TFTP configuration
   *
   * Agent's TFTP configuration
  **/
  protocolTftpGetConfig(
    req: operations.ProtocolTftpGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configTFTP = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpGetStatistics - Show the agent's TFTP statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolTftpGetStatistics(
    req: operations.ProtocolTftpGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpGetStatistics200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpGetStatsHdr - Show the TFTP statistics headers
   *
   * The headers of statistics fields
  **/
  protocolTftpGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/tftp/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpGetStatsHdr200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpGetTrace - Show the agent's TFTP traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolTftpGetTrace(
    req: operations.ProtocolTftpGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configTFTP = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSessionGetParameter - Show a parameter of a TFTP sesssion
   *
   * Parameter is server , port , or dstfile
  **/
  protocolTftpSessionGetParameter(
    req: operations.ProtocolTftpSessionGetParameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionGetParameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionGetParameterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionGetParameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionGetParameter200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSessionRead - Create a read session to download srcfile from server
   *
   * Session ID is returned
  **/
  protocolTftpSessionRead(
    req: operations.ProtocolTftpSessionReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionRead200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSessionSetParameter - Set a parameter of a TFTP sesssion
   *
   * Parameter is server , port , or dstfile
  **/
  protocolTftpSessionSetParameter(
    req: operations.ProtocolTftpSessionSetParameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionSetParameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionSetParameterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionSetParameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionSetParameter200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSessionStart - Start a TFTP sesssion
   *
   * Start uploading or downloading the file
  **/
  protocolTftpSessionStart(
    req: operations.ProtocolTftpSessionStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStart200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSessionStatus - Check a TFTP sesssion's status
   *
   * Status includes running state, bytes transfered, and time elapsed
  **/
  protocolTftpSessionStatus(
    req: operations.ProtocolTftpSessionStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStatus200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSessionStop - Stop a TFTP sesssion
   *
   * Stop uploading or downloading the file
  **/
  protocolTftpSessionStop(
    req: operations.ProtocolTftpSessionStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStop200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSessionWrite - Create a read session to upload srcfile to server
   *
   * Session ID is returned
  **/
  protocolTftpSessionWrite(
    req: operations.ProtocolTftpSessionWriteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionWriteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionWriteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionWriteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionWrite200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSetConfig - Set the agent's TFTP configuration
   *
   * Agent's TFTP configuration
  **/
  protocolTftpSetConfig(
    req: operations.ProtocolTftpSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSetConfig200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTftpSetTrace - Set the agent's TFTP traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolTftpSetTrace(
    req: operations.ProtocolTftpSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTftpSetTrace200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

}
