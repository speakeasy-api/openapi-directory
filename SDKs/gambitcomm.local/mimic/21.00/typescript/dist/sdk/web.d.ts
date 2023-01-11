import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Web {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolWebGetArgs - Show the agent's WEB argument structure
     *
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolWebGetArgs(req: operations.ProtocolWebGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetArgsResponse>;
    /**
     * protocolWebGetConfig - Show the agent's WEB configuration
     *
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolWebGetConfig(req: operations.ProtocolWebGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetConfigResponse>;
    /**
     * protocolWebGetStatistics - Show the agent's WEB statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolWebGetStatistics(req: operations.ProtocolWebGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetStatisticsResponse>;
    /**
     * protocolWebGetStatsHdr - Show the WEB statistics headers
     *
     * The headers of statistics fields
    **/
    protocolWebGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetStatsHdrResponse>;
    /**
     * protocolWebGetTrace - Show the agent's WEB traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolWebGetTrace(req: operations.ProtocolWebGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebGetTraceResponse>;
    /**
     * protocolWebPortAdd - Add the agent's WEB port
     *
     * Add port
    **/
    protocolWebPortAdd(req: operations.ProtocolWebPortAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortAddResponse>;
    /**
     * protocolWebPortExists - Show the agent's WEB port
     *
     * Check the port. 1 means existing, 0 means not
    **/
    protocolWebPortExists(req: operations.ProtocolWebPortExistsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortExistsResponse>;
    /**
     * protocolWebPortRemove - Remove the agent's WEB port
     *
     * Remove port
    **/
    protocolWebPortRemove(req: operations.ProtocolWebPortRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortRemoveResponse>;
    /**
     * protocolWebPortSet - Set the agent's WEB port attribute
     *
     * Set port
    **/
    protocolWebPortSet(req: operations.ProtocolWebPortSetRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortSetResponse>;
    /**
     * protocolWebPortStart - Start the agent's WEB port
     *
     * Start port
    **/
    protocolWebPortStart(req: operations.ProtocolWebPortStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortStartResponse>;
    /**
     * protocolWebPortStop - Stop the agent's WEB port
     *
     * Stop port
    **/
    protocolWebPortStop(req: operations.ProtocolWebPortStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebPortStopResponse>;
    /**
     * protocolWebSetConfig - Set the agent's WEB configuration
     *
     * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolWebSetConfig(req: operations.ProtocolWebSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebSetConfigResponse>;
    /**
     * protocolWebSetTrace - Set the agent's WEB traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolWebSetTrace(req: operations.ProtocolWebSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolWebSetTraceResponse>;
}
