import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ssh {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolSshGetArgs - Show the agent's SSH argument structure
     *
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSshGetArgs(req: operations.ProtocolSshGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetArgsResponse>;
    /**
     * protocolSshGetConfig - Show the agent's SSH configuration
     *
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSshGetConfig(req: operations.ProtocolSshGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetConfigResponse>;
    /**
     * protocolSshGetStatistics - Show the agent's SSH statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolSshGetStatistics(req: operations.ProtocolSshGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetStatisticsResponse>;
    /**
     * protocolSshGetStatsHdr - Show the SSH statistics headers
     *
     * The headers of statistics fields
    **/
    protocolSshGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetStatsHdrResponse>;
    /**
     * protocolSshGetTrace - Show the agent's SSH traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolSshGetTrace(req: operations.ProtocolSshGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshGetTraceResponse>;
    /**
     * protocolSshIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSshIpaliasDisable(req: operations.ProtocolSshIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasDisableResponse>;
    /**
     * protocolSshIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSshIpaliasEnable(req: operations.ProtocolSshIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasEnableResponse>;
    /**
     * protocolSshIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSshIpaliasIsenabled(req: operations.ProtocolSshIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasIsenabledResponse>;
    /**
     * protocolSshIpaliasList - List all IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolSshIpaliasList(req: operations.ProtocolSshIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshIpaliasListResponse>;
    /**
     * protocolSshSetConfig - Set the agent's SSH configuration
     *
     * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSshSetConfig(req: operations.ProtocolSshSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshSetConfigResponse>;
    /**
     * protocolSshSetTrace - Set the agent's SSH traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSshSetTrace(req: operations.ProtocolSshSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSshSetTraceResponse>;
}
