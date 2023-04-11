import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Snmptcp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's SNMPTCP argument structure
     *
     * @remarks
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSnmptcpGetArgs(req: operations.ProtocolSnmptcpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetArgsResponse>;
    /**
     * Show the agent's SNMPTCP configuration
     *
     * @remarks
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSnmptcpGetConfig(req: operations.ProtocolSnmptcpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetConfigResponse>;
    /**
     * Show the agent's SNMPTCP statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolSnmptcpGetStatistics(req: operations.ProtocolSnmptcpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetStatisticsResponse>;
    /**
     * Show the SNMPTCP statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolSnmptcpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetStatsHdrResponse>;
    /**
     * Show the agent's SNMPTCP traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolSnmptcpGetTrace(req: operations.ProtocolSnmptcpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpGetTraceResponse>;
    /**
     * Disable individual IP aliases on the agent and the simulator host
     *
     * @remarks
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
     */
    protocolSnmptcpIpaliasDisable(req: operations.ProtocolSnmptcpIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasDisableResponse>;
    /**
     * Enable individual IP aliases on the agent and the simulator host
     *
     * @remarks
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
     */
    protocolSnmptcpIpaliasEnable(req: operations.ProtocolSnmptcpIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasEnableResponse>;
    /**
     * Check individual IP aliases on the agent and the simulator host
     *
     * @remarks
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
     */
    protocolSnmptcpIpaliasIsenabled(req: operations.ProtocolSnmptcpIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasIsenabledResponse>;
    /**
     * List all IP aliases on the agent and the simulator host
     *
     * @remarks
     * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
     */
    protocolSnmptcpIpaliasList(req: operations.ProtocolSnmptcpIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpIpaliasListResponse>;
    /**
     * Set the agent's SNMPTCP configuration
     *
     * @remarks
     * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSnmptcpSetConfig(req: operations.ProtocolSnmptcpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpSetConfigResponse>;
    /**
     * Set the agent's SNMPTCP traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolSnmptcpSetTrace(req: operations.ProtocolSnmptcpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSnmptcpSetTraceResponse>;
}
