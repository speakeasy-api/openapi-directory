import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Syslog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolSyslogGetArgs - Show the agent's SYSLOG argument structure
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSyslogGetArgs(req: operations.ProtocolSyslogGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetArgsResponse>;
    /**
     * protocolSyslogGetAttr - Show the outgoing message's attributes
     *
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    protocolSyslogGetAttr(req: operations.ProtocolSyslogGetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetAttrResponse>;
    /**
     * protocolSyslogGetConfig - Show the agent's SYSLOG configuration
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSyslogGetConfig(req: operations.ProtocolSyslogGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetConfigResponse>;
    /**
     * protocolSyslogGetStatistics - Show the agent's SYSLOG statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolSyslogGetStatistics(req: operations.ProtocolSyslogGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetStatisticsResponse>;
    /**
     * protocolSyslogGetStatsHdr - Show the SYSLOG statistics headers
     *
     * The headers of statistics fields
    **/
    protocolSyslogGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetStatsHdrResponse>;
    /**
     * protocolSyslogGetTrace - Show the agent's SYSLOG traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolSyslogGetTrace(req: operations.ProtocolSyslogGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogGetTraceResponse>;
    /**
     * protocolSyslogSend - Set the agent's SYSLOG traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSyslogSend(req: operations.ProtocolSyslogSendRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSendResponse>;
    /**
     * protocolSyslogSetAttr - Set the outgoing message's attributes
     *
     * Attribute can be server , sequence , separator , hostname , timestamp
    **/
    protocolSyslogSetAttr(req: operations.ProtocolSyslogSetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetAttrResponse>;
    /**
     * protocolSyslogSetConfig - Set the agent's SYSLOG configuration
     *
     * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSyslogSetConfig(req: operations.ProtocolSyslogSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetConfigResponse>;
    /**
     * protocolSyslogSetTrace - Set the agent's SYSLOG traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSyslogSetTrace(req: operations.ProtocolSyslogSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSyslogSetTraceResponse>;
}
