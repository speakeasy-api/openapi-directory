import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Coap {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolCoapGetArgs - Show the agent's COAP argument structure
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolCoapGetArgs(req: operations.ProtocolCoapGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetArgsResponse>;
    /**
     * protocolCoapGetConfig - Show the agent's COAP configuration
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolCoapGetConfig(req: operations.ProtocolCoapGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetConfigResponse>;
    /**
     * protocolCoapGetStatistics - Show the agent's COAP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolCoapGetStatistics(req: operations.ProtocolCoapGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetStatisticsResponse>;
    /**
     * protocolCoapGetStatsHdr - Show the COAP statistics headers
     *
     * The headers of statistics fields
    **/
    protocolCoapGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetStatsHdrResponse>;
    /**
     * protocolCoapGetTrace - Show the agent's COAP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolCoapGetTrace(req: operations.ProtocolCoapGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapGetTraceResponse>;
    /**
     * protocolCoapSetConfig - Set the agent's COAP configuration
     *
     * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolCoapSetConfig(req: operations.ProtocolCoapSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapSetConfigResponse>;
    /**
     * protocolCoapSetTrace - Set the agent's COAP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolCoapSetTrace(req: operations.ProtocolCoapSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolCoapSetTraceResponse>;
}
