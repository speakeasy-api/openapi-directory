import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sflow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolSflowGetArgs - Show the agent's SFLOW argument structure
     *
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSflowGetArgs(req: operations.ProtocolSflowGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetArgsResponse>;
    /**
     * protocolSflowGetConfig - Show the agent's SFLOW configuration
     *
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSflowGetConfig(req: operations.ProtocolSflowGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetConfigResponse>;
    /**
     * protocolSflowGetStatistics - Show the agent's SFLOW statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolSflowGetStatistics(req: operations.ProtocolSflowGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetStatisticsResponse>;
    /**
     * protocolSflowGetStatsHdr - Show the SFLOW statistics headers
     *
     * The headers of statistics fields
    **/
    protocolSflowGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetStatsHdrResponse>;
    /**
     * protocolSflowGetTrace - Show the agent's SFLOW traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolSflowGetTrace(req: operations.ProtocolSflowGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowGetTraceResponse>;
    /**
     * protocolSflowHalt - Halt SFLOW traffic
     *
     * Halt SFLOW traffic
    **/
    protocolSflowHalt(req: operations.ProtocolSflowHaltRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowHaltResponse>;
    /**
     * protocolSflowReload - Reload SFLOW configuration before resuming traffic
     *
     * Reload SFLOW configuration before resuming traffic
    **/
    protocolSflowReload(req: operations.ProtocolSflowReloadRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowReloadResponse>;
    /**
     * protocolSflowResume - Resuming traffic
     *
     * Resuming traffic
    **/
    protocolSflowResume(req: operations.ProtocolSflowResumeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowResumeResponse>;
    /**
     * protocolSflowSetConfig - Set the agent's SFLOW configuration
     *
     * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolSflowSetConfig(req: operations.ProtocolSflowSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowSetConfigResponse>;
    /**
     * protocolSflowSetTrace - Set the agent's SFLOW traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolSflowSetTrace(req: operations.ProtocolSflowSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolSflowSetTraceResponse>;
}
