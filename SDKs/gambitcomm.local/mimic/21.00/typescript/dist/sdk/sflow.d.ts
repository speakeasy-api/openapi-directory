import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sflow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's SFLOW argument structure
     *
     * @remarks
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSflowGetArgs(req: operations.ProtocolSflowGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetArgsResponse>;
    /**
     * Show the agent's SFLOW configuration
     *
     * @remarks
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSflowGetConfig(req: operations.ProtocolSflowGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetConfigResponse>;
    /**
     * Show the agent's SFLOW statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolSflowGetStatistics(req: operations.ProtocolSflowGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetStatisticsResponse>;
    /**
     * Show the SFLOW statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolSflowGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetStatsHdrResponse>;
    /**
     * Show the agent's SFLOW traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolSflowGetTrace(req: operations.ProtocolSflowGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetTraceResponse>;
    /**
     * Halt SFLOW traffic
     *
     * @remarks
     * Halt SFLOW traffic
     */
    protocolSflowHalt(req: operations.ProtocolSflowHaltRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowHaltResponse>;
    /**
     * Reload SFLOW configuration before resuming traffic
     *
     * @remarks
     * Reload SFLOW configuration before resuming traffic
     */
    protocolSflowReload(req: operations.ProtocolSflowReloadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowReloadResponse>;
    /**
     * Resuming traffic
     *
     * @remarks
     * Resuming traffic
     */
    protocolSflowResume(req: operations.ProtocolSflowResumeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowResumeResponse>;
    /**
     * Set the agent's SFLOW configuration
     *
     * @remarks
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolSflowSetConfig(req: operations.ProtocolSflowSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowSetConfigResponse>;
    /**
     * Set the agent's SFLOW traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolSflowSetTrace(req: operations.ProtocolSflowSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowSetTraceResponse>;
}
