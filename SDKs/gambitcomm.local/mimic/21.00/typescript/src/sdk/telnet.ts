import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Telnet {
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
   * protocolTelnetConnectionLogon - Changes the connection's current logon.
   *
   * Logon change allows (hidden) commands for a different access mode to run.
  **/
  protocolTelnetConnectionLogon(
    req: operations.ProtocolTelnetConnectionLogonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionLogonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionLogonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetConnectionLogonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionLogon200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetConnectionRequest - Executes the command asynchronously .
   *
   * Equivalent of the command typed in by the user.
  **/
  protocolTelnetConnectionRequest(
    req: operations.ProtocolTelnetConnectionRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetConnectionRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionRequest200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetConnectionSignal - Triggers the asynchronous signal event with the specified signal name
   *
   * Signal name is either connect or idle
  **/
  protocolTelnetConnectionSignal(
    req: operations.ProtocolTelnetConnectionSignalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionSignalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionSignalRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetConnectionSignalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionSignal200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetGetArgs - Show the agent's TELNET argument structure
   *
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTelnetGetArgs(
    req: operations.ProtocolTelnetGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetArgs200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetGetConfig - Show the agent's TELNET configuration
   *
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTelnetGetConfig(
    req: operations.ProtocolTelnetGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configTELNET = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetGetStatistics - Show the agent's TELNET statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolTelnetGetStatistics(
    req: operations.ProtocolTelnetGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetStatistics200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetGetStatsHdr - Show the TELNET statistics headers
   *
   * The headers of statistics fields
  **/
  protocolTelnetGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/telnet/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetStatsHdr200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetGetTrace - Show the agent's TELNET traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolTelnetGetTrace(
    req: operations.ProtocolTelnetGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configTELNET = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolTelnetIpaliasDisable(
    req: operations.ProtocolTelnetIpaliasDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasDisableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetIpaliasDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasDisable200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolTelnetIpaliasEnable(
    req: operations.ProtocolTelnetIpaliasEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasEnableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetIpaliasEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasEnable200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolTelnetIpaliasIsenabled(
    req: operations.ProtocolTelnetIpaliasIsenabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasIsenabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasIsenabledRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetIpaliasIsenabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasIsenabled200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetIpaliasList - List all IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolTelnetIpaliasList(
    req: operations.ProtocolTelnetIpaliasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetIpaliasListResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * protocolTelnetServerGetConnections - Show the agent's TELNET connections
   *
   * IDs of all connected connections
  **/
  protocolTelnetServerGetConnections(
    req: operations.ProtocolTelnetServerGetConnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetConnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetConnectionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetConnectionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetConnections200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetServerGetKeymap - Show the agent's TELNET keymap file name
   *
   * Keymap file name
  **/
  protocolTelnetServerGetKeymap(
    req: operations.ProtocolTelnetServerGetKeymapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetKeymapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetKeymapRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetKeymapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetKeymap200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetServerGetRulesdb - Show the agent's TELNET rules db file name
   *
   * Rules db file name
  **/
  protocolTelnetServerGetRulesdb(
    req: operations.ProtocolTelnetServerGetRulesdbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetRulesdbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetRulesdbRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetRulesdbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetRulesdb200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetServerGetState - Show the agent's TELNET server state
   *
   * Return 1 means accepting connections, 0 not
  **/
  protocolTelnetServerGetState(
    req: operations.ProtocolTelnetServerGetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetState200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetServerGetUserdb - Show the agent's TELNET user db file name
   *
   * User db file name
  **/
  protocolTelnetServerGetUserdb(
    req: operations.ProtocolTelnetServerGetUserdbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetUserdbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetUserdbRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetUserdbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetUserdb200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetServerGetUsers - Show the agent's TELNET users
   *
   * List of users
  **/
  protocolTelnetServerGetUsers(
    req: operations.ProtocolTelnetServerGetUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.telnetUsers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetSetConfig - Set the agent's TELNET configuration
   *
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTelnetSetConfig(
    req: operations.ProtocolTelnetSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetSetConfig200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolTelnetSetTrace - Set the agent's TELNET traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolTelnetSetTrace(
    req: operations.ProtocolTelnetSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolTelnetSetTrace200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

}
