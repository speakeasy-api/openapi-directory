import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Netflow {
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
   * protocolNetflowChangeAttr - Change NETFLOW export attributes
   *
   * Change attributes
  **/
  protocolNetflowChangeAttr(
    req: operations.ProtocolNetflowChangeAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeAttrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowChangeAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeAttr200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowChangeDfs - Change NETFLOW data export interval
   *
   * Interval in msec .
  **/
  protocolNetflowChangeDfs(
    req: operations.ProtocolNetflowChangeDfsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeDfsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeDfsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowChangeDfsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeDfs200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowChangeTfs - Change NETFLOW template export interval
   *
   * Interval in msec .
  **/
  protocolNetflowChangeTfs(
    req: operations.ProtocolNetflowChangeTfsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeTfsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeTfsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowChangeTfsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeTfs200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowGetArgs - Show the agent's NETFLOW argument structure
   *
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolNetflowGetArgs(
    req: operations.ProtocolNetflowGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetArgs200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowGetConfig - Show the agent's NETFLOW configuration
   *
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolNetflowGetConfig(
    req: operations.ProtocolNetflowGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configNETFLOW = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowGetStatistics - Show the agent's NETFLOW statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolNetflowGetStatistics(
    req: operations.ProtocolNetflowGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetStatistics200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowGetStatsHdr - Show the NETFLOW statistics headers
   *
   * The headers of statistics fields
  **/
  protocolNetflowGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/netflow/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetStatsHdr200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowGetTrace - Show the agent's NETFLOW traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolNetflowGetTrace(
    req: operations.ProtocolNetflowGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configNETFLOW = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowHalt - Halt NETFLOW traffic
   *
   * Halt NETFLOW traffic
  **/
  protocolNetflowHalt(
    req: operations.ProtocolNetflowHaltRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowHaltResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowHaltRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowHaltResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowHalt200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowList - Show list of NETFLOW exports
   *
   * Show list of NETFLOW exports
  **/
  protocolNetflowList(
    req: operations.ProtocolNetflowListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowList200ApplicationJSONObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowReload - Reload NETFLOW configuration before resuming traffic
   *
   * Reload NETFLOW configuration before resuming traffic
  **/
  protocolNetflowReload(
    req: operations.ProtocolNetflowReloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowReloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowReloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowReloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowReload200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowResume - Resuming traffic
   *
   * Resuming traffic
  **/
  protocolNetflowResume(
    req: operations.ProtocolNetflowResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowResumeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowResume200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowSetCollector - Swap NETFLOW collector
   *
   * Allow changing collector without stopping agent
  **/
  protocolNetflowSetCollector(
    req: operations.ProtocolNetflowSetCollectorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetCollectorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetCollectorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowSetCollectorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetCollector200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowSetConfig - Set the agent's NETFLOW configuration
   *
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolNetflowSetConfig(
    req: operations.ProtocolNetflowSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetConfig200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowSetFileName - Swap NETFLOW configuration file
   *
   * Allow reloading the configuration file for an agent without stopping agent
  **/
  protocolNetflowSetFileName(
    req: operations.ProtocolNetflowSetFileNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetFileNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetFileNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowSetFileNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetFileName200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolNetflowSetTrace - Set the agent's NETFLOW traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolNetflowSetTrace(
    req: operations.ProtocolNetflowSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetTrace200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

}
