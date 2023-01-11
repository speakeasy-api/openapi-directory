import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Mqtt {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolMqttClientGetProtstate - Show the agent's MQTT TCP connection state
     *
     * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
    **/
    protocolMqttClientGetProtstate(req: operations.ProtocolMqttClientGetProtstateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientGetProtstateResponse>;
    /**
     * protocolMqttClientGetState - Show the agent's MQTT state
     *
     * 0 means stopped, 1 means running
    **/
    protocolMqttClientGetState(req: operations.ProtocolMqttClientGetStateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientGetStateResponse>;
    /**
     * protocolMqttClientMessageCard - Show the agent's current messages' cardinality
     *
     * 0 or more
    **/
    protocolMqttClientMessageCard(req: operations.ProtocolMqttClientMessageCardRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageCardResponse>;
    /**
     * protocolMqttClientMessageGet - Show the agent's message attributes
     *
     * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
    **/
    protocolMqttClientMessageGet(req: operations.ProtocolMqttClientMessageGetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageGetResponse>;
    /**
     * protocolMqttClientMessageSet - Set the agent's message attributes
     *
     * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
    **/
    protocolMqttClientMessageSet(req: operations.ProtocolMqttClientMessageSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageSetResponse>;
    /**
     * protocolMqttClientResubscribe - Restart receiving messages from a subcription of the agent
     *
     * Restarts a subscription
    **/
    protocolMqttClientResubscribe(req: operations.ProtocolMqttClientResubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientResubscribeResponse>;
    /**
     * protocolMqttClientRuntimeAbort - Abort agent's MQTT TCP session without sending DISCONNECT command
     *
     * Abort a connection
    **/
    protocolMqttClientRuntimeAbort(req: operations.ProtocolMqttClientRuntimeAbortRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeAbortResponse>;
    /**
     * protocolMqttClientRuntimeConnect - Start agent's MQTT TCP session
     *
     * Start a connection
    **/
    protocolMqttClientRuntimeConnect(req: operations.ProtocolMqttClientRuntimeConnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeConnectResponse>;
    /**
     * protocolMqttClientRuntimeDisconnect - Disconnect agent's MQTT TCP session by sending DISCONNECT command
     *
     * Graceful disconnect
    **/
    protocolMqttClientRuntimeDisconnect(req: operations.ProtocolMqttClientRuntimeDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeDisconnectResponse>;
    /**
     * protocolMqttClientSetBroker - Set the agent's MQTT TCP connection target broker
     *
     * Broker IP address
    **/
    protocolMqttClientSetBroker(req: operations.ProtocolMqttClientSetBrokerRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetBrokerResponse>;
    /**
     * protocolMqttClientSetCleansession - Set the agent's MQTT session
     *
     * 1 for clean session , 0 not
    **/
    protocolMqttClientSetCleansession(req: operations.ProtocolMqttClientSetCleansessionRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetCleansessionResponse>;
    /**
     * protocolMqttClientSetClientid - Set the agent's MQTT client ID
     *
     * MQTT client ID
    **/
    protocolMqttClientSetClientid(req: operations.ProtocolMqttClientSetClientidRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetClientidResponse>;
    /**
     * protocolMqttClientSetKeepalive - Set the agent's MQTT TCP keepalive
     *
     * Keep alive the TCP connection
    **/
    protocolMqttClientSetKeepalive(req: operations.ProtocolMqttClientSetKeepaliveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetKeepaliveResponse>;
    /**
     * protocolMqttClientSetOnDisconnect - Set the agent's MQTT disconnection action
     *
     * Action to take when MQTT session is disconnected
    **/
    protocolMqttClientSetOnDisconnect(req: operations.ProtocolMqttClientSetOnDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetOnDisconnectResponse>;
    /**
     * protocolMqttClientSetPassword - Set the agent's MQTT client password
     *
     * Client password
    **/
    protocolMqttClientSetPassword(req: operations.ProtocolMqttClientSetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetPasswordResponse>;
    /**
     * protocolMqttClientSetPort - Set the agent's MQTT TCP connection target port
     *
     * target TCP port
    **/
    protocolMqttClientSetPort(req: operations.ProtocolMqttClientSetPortRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetPortResponse>;
    /**
     * protocolMqttClientSetUsername - Set the agent's MQTT client username
     *
     * Client username
    **/
    protocolMqttClientSetUsername(req: operations.ProtocolMqttClientSetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetUsernameResponse>;
    /**
     * protocolMqttClientSetWillmsg - Set the agent's MQTT client's will
     *
     * Will message
    **/
    protocolMqttClientSetWillmsg(req: operations.ProtocolMqttClientSetWillmsgRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillmsgResponse>;
    /**
     * protocolMqttClientSetWillqos - Set the agent's MQTT will message's QOS field
     *
     * QOS field
    **/
    protocolMqttClientSetWillqos(req: operations.ProtocolMqttClientSetWillqosRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillqosResponse>;
    /**
     * protocolMqttClientSetWillretain - Set the agent's MQTT retained will
     *
     * Retaining will
    **/
    protocolMqttClientSetWillretain(req: operations.ProtocolMqttClientSetWillretainRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillretainResponse>;
    /**
     * protocolMqttClientSetWilltopic - Set the agent's MQTT client will's topic
     *
     * Will topic for the will message
    **/
    protocolMqttClientSetWilltopic(req: operations.ProtocolMqttClientSetWilltopicRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWilltopicResponse>;
    /**
     * protocolMqttClientSubscribeCard - Show the agent's current subscriptions' cardinality
     *
     * 0 or more
    **/
    protocolMqttClientSubscribeCard(req: operations.ProtocolMqttClientSubscribeCardRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeCardResponse>;
    /**
     * protocolMqttClientSubscribeGet - Show the agent's subscription attributes
     *
     * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
    **/
    protocolMqttClientSubscribeGet(req: operations.ProtocolMqttClientSubscribeGetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeGetResponse>;
    /**
     * protocolMqttClientSubscribeSet - Set the agent's subscribe attributes
     *
     * Attribute can not be properties .
    **/
    protocolMqttClientSubscribeSet(req: operations.ProtocolMqttClientSubscribeSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeSetResponse>;
    /**
     * protocolMqttClientUnsubscribe - Stops receiving messages from a subcription of the agent
     *
     * Stops a subscription
    **/
    protocolMqttClientUnsubscribe(req: operations.ProtocolMqttClientUnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientUnsubscribeResponse>;
    /**
     * protocolMqttGetArgs - Show the agent's MQTT argument structure
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolMqttGetArgs(req: operations.ProtocolMqttGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetArgsResponse>;
    /**
     * protocolMqttGetConfig - Show the agent's MQTT configuration
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolMqttGetConfig(req: operations.ProtocolMqttGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetConfigResponse>;
    /**
     * protocolMqttGetStatistics - Show the agent's MQTT statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolMqttGetStatistics(req: operations.ProtocolMqttGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetStatisticsResponse>;
    /**
     * protocolMqttGetStatsHdr - Show the MQTT statistics headers
     *
     * The headers of statistics fields
    **/
    protocolMqttGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetStatsHdrResponse>;
    /**
     * protocolMqttGetTrace - Show the agent's MQTT traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolMqttGetTrace(req: operations.ProtocolMqttGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetTraceResponse>;
    /**
     * protocolMqttSetConfig - Set the agent's MQTT configuration
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolMqttSetConfig(req: operations.ProtocolMqttSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttSetConfigResponse>;
    /**
     * protocolMqttSetTrace - Set the agent's MQTT traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolMqttSetTrace(req: operations.ProtocolMqttSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttSetTraceResponse>;
}
