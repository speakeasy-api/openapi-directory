import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tod {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's TOD argument structure
     *
     * @remarks
     * Agent's TOD configuration
     */
    protocolTodGetArgs(req: operations.ProtocolTodGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetArgsResponse>;
    /**
     * Show the agent's TOD configuration
     *
     * @remarks
     * Agent's TOD configuration
     */
    protocolTodGetConfig(req: operations.ProtocolTodGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetConfigResponse>;
    /**
     * Show the agent's TOD statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolTodGetStatistics(req: operations.ProtocolTodGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetStatisticsResponse>;
    /**
     * Show the TOD statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolTodGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetStatsHdrResponse>;
    /**
     * Show the agent's TOD traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolTodGetTrace(req: operations.ProtocolTodGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGetTraceResponse>;
    /**
     * Retrieve TOD time
     *
     * @remarks
     * Retrive time from server
     */
    protocolTodGettime(req: operations.ProtocolTodGettimeRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodGettimeResponse>;
    /**
     * Set the agent's TOD configuration
     *
     * @remarks
     * Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolTodSetConfig(req: operations.ProtocolTodSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodSetConfigResponse>;
    /**
     * Set the agent's TOD traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolTodSetTrace(req: operations.ProtocolTodSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTodSetTraceResponse>;
}
