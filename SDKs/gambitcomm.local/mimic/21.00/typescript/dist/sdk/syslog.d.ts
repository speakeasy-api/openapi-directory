import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Syslog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's SYSLOG argument structure
     *
     * @remarks
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSyslogGetArgs(req: operations.ProtocolSyslogGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetArgsResponse>;
    /**
     * Show the outgoing message's attributes
     *
     * @remarks
     * Attribute can be server , sequence , separator , hostname , timestamp
     */
    protocolSyslogGetAttr(req: operations.ProtocolSyslogGetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetAttrResponse>;
    /**
     * Show the agent's SYSLOG configuration
     *
     * @remarks
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSyslogGetConfig(req: operations.ProtocolSyslogGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetConfigResponse>;
    /**
     * Show the agent's SYSLOG statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolSyslogGetStatistics(req: operations.ProtocolSyslogGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetStatisticsResponse>;
    /**
     * Show the SYSLOG statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolSyslogGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetStatsHdrResponse>;
    /**
     * Show the agent's SYSLOG traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolSyslogGetTrace(req: operations.ProtocolSyslogGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetTraceResponse>;
    /**
     * Set the agent's SYSLOG traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolSyslogSend(req: operations.ProtocolSyslogSendRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSendResponse>;
    /**
     * Set the outgoing message's attributes
     *
     * @remarks
     * Attribute can be server , sequence , separator , hostname , timestamp
     */
    protocolSyslogSetAttr(req: operations.ProtocolSyslogSetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetAttrResponse>;
    /**
     * Set the agent's SYSLOG configuration
     *
     * @remarks
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSyslogSetConfig(req: operations.ProtocolSyslogSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetConfigResponse>;
    /**
     * Set the agent's SYSLOG traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolSyslogSetTrace(req: operations.ProtocolSyslogSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetTraceResponse>;
}
