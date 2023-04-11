import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Web {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's WEB argument structure
     *
     * @remarks
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolWebGetArgs(req: operations.ProtocolWebGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetArgsResponse>;
    /**
     * Show the agent's WEB configuration
     *
     * @remarks
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolWebGetConfig(req: operations.ProtocolWebGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetConfigResponse>;
    /**
     * Show the agent's WEB statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolWebGetStatistics(req: operations.ProtocolWebGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetStatisticsResponse>;
    /**
     * Show the WEB statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolWebGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetStatsHdrResponse>;
    /**
     * Show the agent's WEB traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolWebGetTrace(req: operations.ProtocolWebGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetTraceResponse>;
    /**
     * Add the agent's WEB port
     *
     * @remarks
     * Add port
     */
    protocolWebPortAdd(req: operations.ProtocolWebPortAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortAddResponse>;
    /**
     * Show the agent's WEB port
     *
     * @remarks
     * Check the port. 1 means existing, 0 means not
     */
    protocolWebPortExists(req: operations.ProtocolWebPortExistsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortExistsResponse>;
    /**
     * Remove the agent's WEB port
     *
     * @remarks
     * Remove port
     */
    protocolWebPortRemove(req: operations.ProtocolWebPortRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortRemoveResponse>;
    /**
     * Set the agent's WEB port attribute
     *
     * @remarks
     * Set port
     */
    protocolWebPortSet(req: operations.ProtocolWebPortSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortSetResponse>;
    /**
     * Start the agent's WEB port
     *
     * @remarks
     * Start port
     */
    protocolWebPortStart(req: operations.ProtocolWebPortStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortStartResponse>;
    /**
     * Stop the agent's WEB port
     *
     * @remarks
     * Stop port
     */
    protocolWebPortStop(req: operations.ProtocolWebPortStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortStopResponse>;
    /**
     * Set the agent's WEB configuration
     *
     * @remarks
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolWebSetConfig(req: operations.ProtocolWebSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebSetConfigResponse>;
    /**
     * Set the agent's WEB traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolWebSetTrace(req: operations.ProtocolWebSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebSetTraceResponse>;
}
