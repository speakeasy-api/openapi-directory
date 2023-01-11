import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Snmptcp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolSnmptcpGetArgs - Show the agent's SNMPTCP argument structure
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSnmptcpGetArgs(req: operations.ProtocolSnmptcpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetArgsResponse>;
    /**
     * protocolSnmptcpGetConfig - Show the agent's SNMPTCP configuration
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSnmptcpGetConfig(req: operations.ProtocolSnmptcpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetConfigResponse>;
    /**
     * protocolSnmptcpGetStatistics - Show the agent's SNMPTCP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolSnmptcpGetStatistics(req: operations.ProtocolSnmptcpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetStatisticsResponse>;
    /**
     * protocolSnmptcpGetStatsHdr - Show the SNMPTCP statistics headers
     *
     * The headers of statistics fields
    **/
    protocolSnmptcpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetStatsHdrResponse>;
    /**
     * protocolSnmptcpGetTrace - Show the agent's SNMPTCP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolSnmptcpGetTrace(req: operations.ProtocolSnmptcpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetTraceResponse>;
    /**
     * protocolSnmptcpIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSnmptcpIpaliasDisable(req: operations.ProtocolSnmptcpIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasDisableResponse>;
    /**
     * protocolSnmptcpIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSnmptcpIpaliasEnable(req: operations.ProtocolSnmptcpIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasEnableResponse>;
    /**
     * protocolSnmptcpIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSnmptcpIpaliasIsenabled(req: operations.ProtocolSnmptcpIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasIsenabledResponse>;
    /**
     * protocolSnmptcpIpaliasList - List all IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSnmptcpIpaliasList(req: operations.ProtocolSnmptcpIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasListResponse>;
    /**
     * protocolSnmptcpSetConfig - Set the agent's SNMPTCP configuration
     *
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSnmptcpSetConfig(req: operations.ProtocolSnmptcpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpSetConfigResponse>;
    /**
     * protocolSnmptcpSetTrace - Set the agent's SNMPTCP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSnmptcpSetTrace(req: operations.ProtocolSnmptcpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpSetTraceResponse>;
}
