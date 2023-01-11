import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Mqtt {
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
   * protocolMqttClientGetProtstate - Show the agent's MQTT TCP connection state
   *
   * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
  **/
  protocolMqttClientGetProtstate(
    req: operations.ProtocolMqttClientGetProtstateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientGetProtstateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientGetProtstateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientGetProtstateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientGetProtstate200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientGetState - Show the agent's MQTT state
   *
   * 0 means stopped, 1 means running
  **/
  protocolMqttClientGetState(
    req: operations.ProtocolMqttClientGetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientGetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientGetStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientGetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientGetState200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientMessageCard - Show the agent's current messages' cardinality
   *
   * 0 or more
  **/
  protocolMqttClientMessageCard(
    req: operations.ProtocolMqttClientMessageCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageCardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientMessageCardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageCard200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientMessageGet - Show the agent's message attributes
   *
   * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
  **/
  protocolMqttClientMessageGet(
    req: operations.ProtocolMqttClientMessageGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientMessageGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageGet200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientMessageSet - Set the agent's message attributes
   *
   * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
  **/
  protocolMqttClientMessageSet(
    req: operations.ProtocolMqttClientMessageSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageSetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientMessageSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageSet200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientResubscribe - Restart receiving messages from a subcription of the agent
   *
   * Restarts a subscription
  **/
  protocolMqttClientResubscribe(
    req: operations.ProtocolMqttClientResubscribeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientResubscribeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientResubscribeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientResubscribeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientResubscribe200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientRuntimeAbort - Abort agent's MQTT TCP session without sending DISCONNECT command
   *
   * Abort a connection
  **/
  protocolMqttClientRuntimeAbort(
    req: operations.ProtocolMqttClientRuntimeAbortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeAbortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeAbortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientRuntimeAbortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeAbort200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientRuntimeConnect - Start agent's MQTT TCP session
   *
   * Start a connection
  **/
  protocolMqttClientRuntimeConnect(
    req: operations.ProtocolMqttClientRuntimeConnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeConnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeConnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientRuntimeConnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeConnect200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientRuntimeDisconnect - Disconnect agent's MQTT TCP session by sending DISCONNECT command
   *
   * Graceful disconnect
  **/
  protocolMqttClientRuntimeDisconnect(
    req: operations.ProtocolMqttClientRuntimeDisconnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeDisconnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeDisconnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientRuntimeDisconnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetBroker - Set the agent's MQTT TCP connection target broker
   *
   * Broker IP address
  **/
  protocolMqttClientSetBroker(
    req: operations.ProtocolMqttClientSetBrokerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetBrokerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetBrokerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetBrokerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetBroker200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetCleansession - Set the agent's MQTT session
   *
   * 1 for clean session , 0 not
  **/
  protocolMqttClientSetCleansession(
    req: operations.ProtocolMqttClientSetCleansessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetCleansessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetCleansessionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetCleansessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetCleansession200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetClientid - Set the agent's MQTT client ID
   *
   * MQTT client ID
  **/
  protocolMqttClientSetClientid(
    req: operations.ProtocolMqttClientSetClientidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetClientidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetClientidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetClientidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetClientid200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetKeepalive - Set the agent's MQTT TCP keepalive
   *
   * Keep alive the TCP connection
  **/
  protocolMqttClientSetKeepalive(
    req: operations.ProtocolMqttClientSetKeepaliveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetKeepaliveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetKeepaliveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetKeepaliveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetOnDisconnect - Set the agent's MQTT disconnection action
   *
   * Action to take when MQTT session is disconnected
  **/
  protocolMqttClientSetOnDisconnect(
    req: operations.ProtocolMqttClientSetOnDisconnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetOnDisconnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetOnDisconnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetOnDisconnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetPassword - Set the agent's MQTT client password
   *
   * Client password
  **/
  protocolMqttClientSetPassword(
    req: operations.ProtocolMqttClientSetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetPassword200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetPort - Set the agent's MQTT TCP connection target port
   *
   * target TCP port
  **/
  protocolMqttClientSetPort(
    req: operations.ProtocolMqttClientSetPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetPortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetPort200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetUsername - Set the agent's MQTT client username
   *
   * Client username
  **/
  protocolMqttClientSetUsername(
    req: operations.ProtocolMqttClientSetUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetUsernameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetUsername200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetWillmsg - Set the agent's MQTT client's will
   *
   * Will message
  **/
  protocolMqttClientSetWillmsg(
    req: operations.ProtocolMqttClientSetWillmsgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillmsgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillmsgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetWillmsgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillmsg200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetWillqos - Set the agent's MQTT will message's QOS field
   *
   * QOS field
  **/
  protocolMqttClientSetWillqos(
    req: operations.ProtocolMqttClientSetWillqosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillqosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillqosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetWillqosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillqos200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetWillretain - Set the agent's MQTT retained will
   *
   * Retaining will
  **/
  protocolMqttClientSetWillretain(
    req: operations.ProtocolMqttClientSetWillretainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillretainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillretainRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetWillretainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillretain200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSetWilltopic - Set the agent's MQTT client will's topic
   *
   * Will topic for the will message
  **/
  protocolMqttClientSetWilltopic(
    req: operations.ProtocolMqttClientSetWilltopicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWilltopicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWilltopicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetWilltopicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWilltopic200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSubscribeCard - Show the agent's current subscriptions' cardinality
   *
   * 0 or more
  **/
  protocolMqttClientSubscribeCard(
    req: operations.ProtocolMqttClientSubscribeCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeCardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSubscribeCardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSubscribeGet - Show the agent's subscription attributes
   *
   * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
  **/
  protocolMqttClientSubscribeGet(
    req: operations.ProtocolMqttClientSubscribeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSubscribeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeGet200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientSubscribeSet - Set the agent's subscribe attributes
   *
   * Attribute can not be properties .
  **/
  protocolMqttClientSubscribeSet(
    req: operations.ProtocolMqttClientSubscribeSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeSetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSubscribeSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeSet200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttClientUnsubscribe - Stops receiving messages from a subcription of the agent
   *
   * Stops a subscription
  **/
  protocolMqttClientUnsubscribe(
    req: operations.ProtocolMqttClientUnsubscribeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientUnsubscribeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientUnsubscribeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientUnsubscribeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttClientUnsubscribe200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttGetArgs - Show the agent's MQTT argument structure
   *
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolMqttGetArgs(
    req: operations.ProtocolMqttGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttGetArgs200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttGetConfig - Show the agent's MQTT configuration
   *
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolMqttGetConfig(
    req: operations.ProtocolMqttGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configMQTT = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttGetStatistics - Show the agent's MQTT statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolMqttGetStatistics(
    req: operations.ProtocolMqttGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttGetStatistics200ApplicationJSONInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttGetStatsHdr - Show the MQTT statistics headers
   *
   * The headers of statistics fields
  **/
  protocolMqttGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/mqtt/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttGetStatsHdr200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttGetTrace - Show the agent's MQTT traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolMqttGetTrace(
    req: operations.ProtocolMqttGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.configMQTT = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttSetConfig - Set the agent's MQTT configuration
   *
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolMqttSetConfig(
    req: operations.ProtocolMqttSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttSetConfig200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * protocolMqttSetTrace - Set the agent's MQTT traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolMqttSetTrace(
    req: operations.ProtocolMqttSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.protocolMqttSetTrace200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

}
