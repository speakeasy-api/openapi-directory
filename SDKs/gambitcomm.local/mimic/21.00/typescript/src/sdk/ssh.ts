import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Ssh {
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
   * protocolSshGetArgs - Show the agent's SSH argument structure
   *
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSshGetArgs(
    req: operations.ProtocolSshGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSshGetArgs200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshGetConfig - Show the agent's SSH configuration
   *
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSshGetConfig(
    req: operations.ProtocolSshGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configSSH = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshGetStatistics - Show the agent's SSH statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolSshGetStatistics(
    req: operations.ProtocolSshGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSshGetStatistics200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshGetStatsHdr - Show the SSH statistics headers
   *
   * The headers of statistics fields
  **/
  protocolSshGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/ssh/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSshGetStatsHdr200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshGetTrace - Show the agent's SSH traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolSshGetTrace(
    req: operations.ProtocolSshGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configSSH = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSshIpaliasDisable(
    req: operations.ProtocolSshIpaliasDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasDisableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshIpaliasDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasDisable200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSshIpaliasEnable(
    req: operations.ProtocolSshIpaliasEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasEnableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshIpaliasEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasEnable200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSshIpaliasIsenabled(
    req: operations.ProtocolSshIpaliasIsenabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasIsenabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasIsenabledRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshIpaliasIsenabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasIsenabled200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshIpaliasList - List all IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSshIpaliasList(
    req: operations.ProtocolSshIpaliasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshIpaliasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshSetConfig - Set the agent's SSH configuration
   *
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSshSetConfig(
    req: operations.ProtocolSshSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSshSetConfig200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSshSetTrace - Set the agent's SSH traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolSshSetTrace(
    req: operations.ProtocolSshSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSshSetTrace200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

}
