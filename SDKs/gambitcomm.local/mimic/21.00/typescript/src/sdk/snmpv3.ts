import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SnmPv3 {
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
   * protocolSnmpv3AccessAdd - Adds a new access entry with the specified parameters.
   *
   * Adds a new access entry with the specified parameters.
  **/
  protocolSnmpv3AccessAdd(
    req: operations.ProtocolSnmpv3AccessAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3AccessAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessAdd200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3AccessClear - Clears all access entries.
   *
   * Clears all access entries.
  **/
  protocolSnmpv3AccessClear(
    req: operations.ProtocolSnmpv3AccessClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessClearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3AccessClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessClear200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3AccessDel - Deletes the specified access entry.
   *
   * Deletes the specified access entry.
  **/
  protocolSnmpv3AccessDel(
    req: operations.ProtocolSnmpv3AccessDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3AccessDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessDel200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3AccessList - Returns the current acccess entries as an array of strings.
   *
   * Returns the current acccess entries as an array of strings.
  **/
  protocolSnmpv3AccessList(
    req: operations.ProtocolSnmpv3AccessListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3AccessListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessList200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GetConfig - Returns the SNMPv3 configuration.
   *
   * Returns the SNMPv3 configuration.
  **/
  protocolSnmpv3GetConfig(
    req: operations.ProtocolSnmpv3GetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configSNMPv3 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GetContextEngineid - Retrieves the contextEngineID for the agent instance.
   *
   * Retrieves the contextEngineID for the agent instance.
  **/
  protocolSnmpv3GetContextEngineid(
    req: operations.ProtocolSnmpv3GetContextEngineidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetContextEngineidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetContextEngineidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetContextEngineidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetContextEngineid200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GetEngineboots - Retrieves the number of times the agent has been restarted.
   *
   * Retrieves the number of times the agent has been restarted.
  **/
  protocolSnmpv3GetEngineboots(
    req: operations.ProtocolSnmpv3GetEnginebootsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEnginebootsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEnginebootsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetEnginebootsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GetEngineid - For started agents, retrieves the current engineID in use by the snmpv3 module.
   *
   * For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
  **/
  protocolSnmpv3GetEngineid(
    req: operations.ProtocolSnmpv3GetEngineidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEngineidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEngineidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetEngineidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEngineid200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GetEnginetime - Retrieves the time in seconds for which the agent has been running.
   *
   * Retrieves the time in seconds for which the agent has been running.
  **/
  protocolSnmpv3GetEnginetime(
    req: operations.ProtocolSnmpv3GetEnginetimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEnginetimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEnginetimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetEnginetimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GroupAdd - Adds a new group entry with the specified parameters.
   *
   * Adds a new group entry with the specified parameters.
  **/
  protocolSnmpv3GroupAdd(
    req: operations.ProtocolSnmpv3GroupAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GroupAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupAdd200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GroupClear - Clears all group entries.
   *
   * Clears all group entries.
  **/
  protocolSnmpv3GroupClear(
    req: operations.ProtocolSnmpv3GroupClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupClearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GroupClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupClear200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GroupDel - Deletes the specified group entry.
   *
   * Deletes the specified group entry.
  **/
  protocolSnmpv3GroupDel(
    req: operations.ProtocolSnmpv3GroupDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GroupDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupDel200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3GroupList - Returns the current group entries as an array of strings.
   *
   * Returns the current group entries as an array of strings.
  **/
  protocolSnmpv3GroupList(
    req: operations.ProtocolSnmpv3GroupListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GroupListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupList200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3SetConfig - Changes the SNMPv3 configuration.
   *
   * Changes the SNMPv3 configuration.
  **/
  protocolSnmpv3SetConfig(
    req: operations.ProtocolSnmpv3SetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3SetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3SetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3SetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3SetConfig200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3UserAdd - Adds a new user entry with the specified parameters.
   *
   * Adds a new user entry with the specified parameters.
  **/
  protocolSnmpv3UserAdd(
    req: operations.ProtocolSnmpv3UserAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UserAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserAdd200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3UserClear - Clears all user entries.
   *
   * Clears all user entries.
  **/
  protocolSnmpv3UserClear(
    req: operations.ProtocolSnmpv3UserClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserClearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UserClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserClear200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3UserDel - Deletes the specified user entry.
   *
   * Deletes the specified user entry.
  **/
  protocolSnmpv3UserDel(
    req: operations.ProtocolSnmpv3UserDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UserDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserDel200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3UserList - Returns the current user entries as a Tcl list.
   *
   * Returns the current user entries as a Tcl list.
  **/
  protocolSnmpv3UserList(
    req: operations.ProtocolSnmpv3UserListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UserListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserList200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3UsmSave - Saves current user settings in the currently loaded USM config file.
   *
   * Saves current user settings in the currently loaded USM config file.
  **/
  protocolSnmpv3UsmSave(
    req: operations.ProtocolSnmpv3UsmSaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UsmSaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UsmSaveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UsmSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UsmSave200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3UsmSaveas - Saves current user settings in the specified USM config file.
   *
   * Saves current user settings in the specified USM config file.
  **/
  protocolSnmpv3UsmSaveas(
    req: operations.ProtocolSnmpv3UsmSaveasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UsmSaveasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UsmSaveasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UsmSaveasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UsmSaveas200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3VacmSave - Saves current group, access, view settings in the currently loaded VACM config file.
   *
   * Saves current group, access, view settings in the currently loaded VACM config file.
  **/
  protocolSnmpv3VacmSave(
    req: operations.ProtocolSnmpv3VacmSaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3VacmSaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3VacmSaveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3VacmSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3VacmSave200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3VacmSaveas - Saves current group, access, view settings in the specified VACM config file.
   *
   * Saves current group, access, view settings in the specified VACM config file.
  **/
  protocolSnmpv3VacmSaveas(
    req: operations.ProtocolSnmpv3VacmSaveasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3VacmSaveasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3VacmSaveasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3VacmSaveasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3VacmSaveas200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3ViewAdd - Adds a new view entry with the specified parameters.
   *
   * Adds a new view entry with the specified parameters.
  **/
  protocolSnmpv3ViewAdd(
    req: operations.ProtocolSnmpv3ViewAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3ViewAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewAdd200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3ViewClear - Clears all view entries.
   *
   * Clears all view entries.
  **/
  protocolSnmpv3ViewClear(
    req: operations.ProtocolSnmpv3ViewClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewClearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3ViewClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewClear200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3ViewDel - Deletes the specified view entry.
   *
   * Deletes the specified view entry.
  **/
  protocolSnmpv3ViewDel(
    req: operations.ProtocolSnmpv3ViewDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3ViewDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewDel200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolSnmpv3ViewList - Returns the current view entries as an array of strings.
   *
   * Returns the current view entries as an array of strings.
  **/
  protocolSnmpv3ViewList(
    req: operations.ProtocolSnmpv3ViewListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3ViewListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewList200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

}
