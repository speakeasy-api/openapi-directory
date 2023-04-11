import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Netflow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Change NETFLOW export attributes
     *
     * @remarks
     * Change attributes
     */
    protocolNetflowChangeAttr(req: operations.ProtocolNetflowChangeAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeAttrResponse>;
    /**
     * Change NETFLOW data export interval
     *
     * @remarks
     * Interval in msec .
     */
    protocolNetflowChangeDfs(req: operations.ProtocolNetflowChangeDfsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeDfsResponse>;
    /**
     * Change NETFLOW template export interval
     *
     * @remarks
     * Interval in msec .
     */
    protocolNetflowChangeTfs(req: operations.ProtocolNetflowChangeTfsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowChangeTfsResponse>;
    /**
     * Show the agent's NETFLOW argument structure
     *
     * @remarks
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolNetflowGetArgs(req: operations.ProtocolNetflowGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetArgsResponse>;
    /**
     * Show the agent's NETFLOW configuration
     *
     * @remarks
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolNetflowGetConfig(req: operations.ProtocolNetflowGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetConfigResponse>;
    /**
     * Show the agent's NETFLOW statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolNetflowGetStatistics(req: operations.ProtocolNetflowGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetStatisticsResponse>;
    /**
     * Show the NETFLOW statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolNetflowGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetStatsHdrResponse>;
    /**
     * Show the agent's NETFLOW traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolNetflowGetTrace(req: operations.ProtocolNetflowGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowGetTraceResponse>;
    /**
     * Halt NETFLOW traffic
     *
     * @remarks
     * Halt NETFLOW traffic
     */
    protocolNetflowHalt(req: operations.ProtocolNetflowHaltRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowHaltResponse>;
    /**
     * Show list of NETFLOW exports
     *
     * @remarks
     * Show list of NETFLOW exports
     */
    protocolNetflowList(req: operations.ProtocolNetflowListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowListResponse>;
    /**
     * Reload NETFLOW configuration before resuming traffic
     *
     * @remarks
     * Reload NETFLOW configuration before resuming traffic
     */
    protocolNetflowReload(req: operations.ProtocolNetflowReloadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowReloadResponse>;
    /**
     * Resuming traffic
     *
     * @remarks
     * Resuming traffic
     */
    protocolNetflowResume(req: operations.ProtocolNetflowResumeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowResumeResponse>;
    /**
     * Swap NETFLOW collector
     *
     * @remarks
     * Allow changing collector without stopping agent
     */
    protocolNetflowSetCollector(req: operations.ProtocolNetflowSetCollectorRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetCollectorResponse>;
    /**
     * Set the agent's NETFLOW configuration
     *
     * @remarks
     * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolNetflowSetConfig(req: operations.ProtocolNetflowSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetConfigResponse>;
    /**
     * Swap NETFLOW configuration file
     *
     * @remarks
     * Allow reloading the configuration file for an agent without stopping agent
     */
    protocolNetflowSetFileName(req: operations.ProtocolNetflowSetFileNameRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetFileNameResponse>;
    /**
     * Set the agent's NETFLOW traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolNetflowSetTrace(req: operations.ProtocolNetflowSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolNetflowSetTraceResponse>;
}
