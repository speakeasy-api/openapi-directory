import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Netflow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolNetflowChangeAttr - Change NETFLOW export attributes
     *
     * Change attributes
    **/
    protocolNetflowChangeAttr(req: operations.ProtocolNetflowChangeAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeAttrResponse>;
    /**
     * protocolNetflowChangeDfs - Change NETFLOW data export interval
     *
     * Interval in msec .
    **/
    protocolNetflowChangeDfs(req: operations.ProtocolNetflowChangeDfsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeDfsResponse>;
    /**
     * protocolNetflowChangeTfs - Change NETFLOW template export interval
     *
     * Interval in msec .
    **/
    protocolNetflowChangeTfs(req: operations.ProtocolNetflowChangeTfsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeTfsResponse>;
    /**
     * protocolNetflowGetArgs - Show the agent's NETFLOW argument structure
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolNetflowGetArgs(req: operations.ProtocolNetflowGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetArgsResponse>;
    /**
     * protocolNetflowGetConfig - Show the agent's NETFLOW configuration
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolNetflowGetConfig(req: operations.ProtocolNetflowGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetConfigResponse>;
    /**
     * protocolNetflowGetStatistics - Show the agent's NETFLOW statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolNetflowGetStatistics(req: operations.ProtocolNetflowGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetStatisticsResponse>;
    /**
     * protocolNetflowGetStatsHdr - Show the NETFLOW statistics headers
     *
     * The headers of statistics fields
    **/
    protocolNetflowGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetStatsHdrResponse>;
    /**
     * protocolNetflowGetTrace - Show the agent's NETFLOW traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolNetflowGetTrace(req: operations.ProtocolNetflowGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetTraceResponse>;
    /**
     * protocolNetflowHalt - Halt NETFLOW traffic
     *
     * Halt NETFLOW traffic
    **/
    protocolNetflowHalt(req: operations.ProtocolNetflowHaltRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowHaltResponse>;
    /**
     * protocolNetflowList - Show list of NETFLOW exports
     *
     * Show list of NETFLOW exports
    **/
    protocolNetflowList(req: operations.ProtocolNetflowListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowListResponse>;
    /**
     * protocolNetflowReload - Reload NETFLOW configuration before resuming traffic
     *
     * Reload NETFLOW configuration before resuming traffic
    **/
    protocolNetflowReload(req: operations.ProtocolNetflowReloadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowReloadResponse>;
    /**
     * protocolNetflowResume - Resuming traffic
     *
     * Resuming traffic
    **/
    protocolNetflowResume(req: operations.ProtocolNetflowResumeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowResumeResponse>;
    /**
     * protocolNetflowSetCollector - Swap NETFLOW collector
     *
     * Allow changing collector without stopping agent
    **/
    protocolNetflowSetCollector(req: operations.ProtocolNetflowSetCollectorRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetCollectorResponse>;
    /**
     * protocolNetflowSetConfig - Set the agent's NETFLOW configuration
     *
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolNetflowSetConfig(req: operations.ProtocolNetflowSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetConfigResponse>;
    /**
     * protocolNetflowSetFileName - Swap NETFLOW configuration file
     *
     * Allow reloading the configuration file for an agent without stopping agent
    **/
    protocolNetflowSetFileName(req: operations.ProtocolNetflowSetFileNameRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetFileNameResponse>;
    /**
     * protocolNetflowSetTrace - Set the agent's NETFLOW traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolNetflowSetTrace(req: operations.ProtocolNetflowSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetTraceResponse>;
}
