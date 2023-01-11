import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tod {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolTodGetArgs - Show the agent's TOD argument structure
     *
     * Agent's TOD configuration
    **/
    protocolTodGetArgs(req: operations.ProtocolTodGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetArgsResponse>;
    /**
     * protocolTodGetConfig - Show the agent's TOD configuration
     *
     * Agent's TOD configuration
    **/
    protocolTodGetConfig(req: operations.ProtocolTodGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetConfigResponse>;
    /**
     * protocolTodGetStatistics - Show the agent's TOD statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolTodGetStatistics(req: operations.ProtocolTodGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetStatisticsResponse>;
    /**
     * protocolTodGetStatsHdr - Show the TOD statistics headers
     *
     * The headers of statistics fields
    **/
    protocolTodGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetStatsHdrResponse>;
    /**
     * protocolTodGetTrace - Show the agent's TOD traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolTodGetTrace(req: operations.ProtocolTodGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetTraceResponse>;
    /**
     * protocolTodGettime - Retrieve TOD time
     *
     * Retrive time from server
    **/
    protocolTodGettime(req: operations.ProtocolTodGettimeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGettimeResponse>;
    /**
     * protocolTodSetConfig - Set the agent's TOD configuration
     *
     * Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTodSetConfig(req: operations.ProtocolTodSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodSetConfigResponse>;
    /**
     * protocolTodSetTrace - Set the agent's TOD traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolTodSetTrace(req: operations.ProtocolTodSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodSetTraceResponse>;
}
