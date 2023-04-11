import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mqtt {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's MQTT TCP connection state
     *
     * @remarks
     * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
     */
    protocolMqttClientGetProtstate(req: operations.ProtocolMqttClientGetProtstateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientGetProtstateResponse>;
    /**
     * Show the agent's MQTT state
     *
     * @remarks
     * 0 means stopped, 1 means running
     */
    protocolMqttClientGetState(req: operations.ProtocolMqttClientGetStateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientGetStateResponse>;
    /**
     * Show the agent's current messages' cardinality
     *
     * @remarks
     * 0 or more
     */
    protocolMqttClientMessageCard(req: operations.ProtocolMqttClientMessageCardRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageCardResponse>;
    /**
     * Show the agent's message attributes
     *
     * @remarks
     * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
     */
    protocolMqttClientMessageGet(req: operations.ProtocolMqttClientMessageGetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageGetResponse>;
    /**
     * Set the agent's message attributes
     *
     * @remarks
     * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
     */
    protocolMqttClientMessageSet(req: operations.ProtocolMqttClientMessageSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientMessageSetResponse>;
    /**
     * Restart receiving messages from a subcription of the agent
     *
     * @remarks
     * Restarts a subscription
     */
    protocolMqttClientResubscribe(req: operations.ProtocolMqttClientResubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientResubscribeResponse>;
    /**
     * Abort agent's MQTT TCP session without sending DISCONNECT command
     *
     * @remarks
     * Abort a connection
     */
    protocolMqttClientRuntimeAbort(req: operations.ProtocolMqttClientRuntimeAbortRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeAbortResponse>;
    /**
     * Start agent's MQTT TCP session
     *
     * @remarks
     * Start a connection
     */
    protocolMqttClientRuntimeConnect(req: operations.ProtocolMqttClientRuntimeConnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeConnectResponse>;
    /**
     * Disconnect agent's MQTT TCP session by sending DISCONNECT command
     *
     * @remarks
     * Graceful disconnect
     */
    protocolMqttClientRuntimeDisconnect(req: operations.ProtocolMqttClientRuntimeDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientRuntimeDisconnectResponse>;
    /**
     * Set the agent's MQTT TCP connection target broker
     *
     * @remarks
     * Broker IP address
     */
    protocolMqttClientSetBroker(req: operations.ProtocolMqttClientSetBrokerRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetBrokerResponse>;
    /**
     * Set the agent's MQTT session
     *
     * @remarks
     * 1 for clean session , 0 not
     */
    protocolMqttClientSetCleansession(req: operations.ProtocolMqttClientSetCleansessionRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetCleansessionResponse>;
    /**
     * Set the agent's MQTT client ID
     *
     * @remarks
     * MQTT client ID
     */
    protocolMqttClientSetClientid(req: operations.ProtocolMqttClientSetClientidRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetClientidResponse>;
    /**
     * Set the agent's MQTT TCP keepalive
     *
     * @remarks
     * Keep alive the TCP connection
     */
    protocolMqttClientSetKeepalive(req: operations.ProtocolMqttClientSetKeepaliveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetKeepaliveResponse>;
    /**
     * Set the agent's MQTT disconnection action
     *
     * @remarks
     * Action to take when MQTT session is disconnected
     */
    protocolMqttClientSetOnDisconnect(req: operations.ProtocolMqttClientSetOnDisconnectRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetOnDisconnectResponse>;
    /**
     * Set the agent's MQTT client password
     *
     * @remarks
     * Client password
     */
    protocolMqttClientSetPassword(req: operations.ProtocolMqttClientSetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetPasswordResponse>;
    /**
     * Set the agent's MQTT TCP connection target port
     *
     * @remarks
     * target TCP port
     */
    protocolMqttClientSetPort(req: operations.ProtocolMqttClientSetPortRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetPortResponse>;
    /**
     * Set the agent's MQTT client username
     *
     * @remarks
     * Client username
     */
    protocolMqttClientSetUsername(req: operations.ProtocolMqttClientSetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetUsernameResponse>;
    /**
     * Set the agent's MQTT client's will
     *
     * @remarks
     * Will message
     */
    protocolMqttClientSetWillmsg(req: operations.ProtocolMqttClientSetWillmsgRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillmsgResponse>;
    /**
     * Set the agent's MQTT will message's QOS field
     *
     * @remarks
     * QOS field
     */
    protocolMqttClientSetWillqos(req: operations.ProtocolMqttClientSetWillqosRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillqosResponse>;
    /**
     * Set the agent's MQTT retained will
     *
     * @remarks
     * Retaining will
     */
    protocolMqttClientSetWillretain(req: operations.ProtocolMqttClientSetWillretainRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWillretainResponse>;
    /**
     * Set the agent's MQTT client will's topic
     *
     * @remarks
     * Will topic for the will message
     */
    protocolMqttClientSetWilltopic(req: operations.ProtocolMqttClientSetWilltopicRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSetWilltopicResponse>;
    /**
     * Show the agent's current subscriptions' cardinality
     *
     * @remarks
     * 0 or more
     */
    protocolMqttClientSubscribeCard(req: operations.ProtocolMqttClientSubscribeCardRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeCardResponse>;
    /**
     * Show the agent's subscription attributes
     *
     * @remarks
     * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
     */
    protocolMqttClientSubscribeGet(req: operations.ProtocolMqttClientSubscribeGetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeGetResponse>;
    /**
     * Set the agent's subscribe attributes
     *
     * @remarks
     * Attribute can not be properties .
     */
    protocolMqttClientSubscribeSet(req: operations.ProtocolMqttClientSubscribeSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientSubscribeSetResponse>;
    /**
     * Stops receiving messages from a subcription of the agent
     *
     * @remarks
     * Stops a subscription
     */
    protocolMqttClientUnsubscribe(req: operations.ProtocolMqttClientUnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttClientUnsubscribeResponse>;
    /**
     * Show the agent's MQTT argument structure
     *
     * @remarks
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolMqttGetArgs(req: operations.ProtocolMqttGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetArgsResponse>;
    /**
     * Show the agent's MQTT configuration
     *
     * @remarks
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolMqttGetConfig(req: operations.ProtocolMqttGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetConfigResponse>;
    /**
     * Show the agent's MQTT statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolMqttGetStatistics(req: operations.ProtocolMqttGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetStatisticsResponse>;
    /**
     * Show the MQTT statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolMqttGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetStatsHdrResponse>;
    /**
     * Show the agent's MQTT traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolMqttGetTrace(req: operations.ProtocolMqttGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttGetTraceResponse>;
    /**
     * Set the agent's MQTT configuration
     *
     * @remarks
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolMqttSetConfig(req: operations.ProtocolMqttSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttSetConfigResponse>;
    /**
     * Set the agent's MQTT traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolMqttSetTrace(req: operations.ProtocolMqttSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolMqttSetTraceResponse>;
}
