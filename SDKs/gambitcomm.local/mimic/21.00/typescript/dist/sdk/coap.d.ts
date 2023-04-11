import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Coap {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's COAP argument structure
     *
     * @remarks
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolCoapGetArgs(req: operations.ProtocolCoapGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetArgsResponse>;
    /**
     * Show the agent's COAP configuration
     *
     * @remarks
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolCoapGetConfig(req: operations.ProtocolCoapGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetConfigResponse>;
    /**
     * Show the agent's COAP statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolCoapGetStatistics(req: operations.ProtocolCoapGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetStatisticsResponse>;
    /**
     * Show the COAP statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolCoapGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetStatsHdrResponse>;
    /**
     * Show the agent's COAP traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolCoapGetTrace(req: operations.ProtocolCoapGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetTraceResponse>;
    /**
     * Set the agent's COAP configuration
     *
     * @remarks
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolCoapSetConfig(req: operations.ProtocolCoapSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapSetConfigResponse>;
    /**
     * Set the agent's COAP traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolCoapSetTrace(req: operations.ProtocolCoapSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapSetTraceResponse>;
}
