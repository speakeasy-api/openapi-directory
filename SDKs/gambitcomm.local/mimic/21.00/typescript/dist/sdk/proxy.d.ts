import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Proxy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolProxyGetArgs - Show the agent's PROXY argument structure
     *
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolProxyGetArgs(req: operations.ProtocolProxyGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetArgsResponse>;
    /**
     * protocolProxyGetConfig - Show the agent's PROXY configuration
     *
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolProxyGetConfig(req: operations.ProtocolProxyGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetConfigResponse>;
    /**
     * protocolProxyGetStatistics - Show the agent's PROXY statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolProxyGetStatistics(req: operations.ProtocolProxyGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetStatisticsResponse>;
    /**
     * protocolProxyGetStatsHdr - Show the PROXY statistics headers
     *
     * The headers of statistics fields
    **/
    protocolProxyGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetStatsHdrResponse>;
    /**
     * protocolProxyGetTrace - Show the agent's PROXY traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolProxyGetTrace(req: operations.ProtocolProxyGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetTraceResponse>;
    /**
     * protocolProxyPortAdd - Add individual proxy target on the agent and the simulator host
     *
     * Additional proxy target
    **/
    protocolProxyPortAdd(req: operations.ProtocolProxyPortAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortAddResponse>;
    /**
     * protocolProxyPortIsstarted - Check individual target
     *
     * Check individual target
    **/
    protocolProxyPortIsstarted(req: operations.ProtocolProxyPortIsstartedRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortIsstartedResponse>;
    /**
     * protocolProxyPortList - List all proxy targets
    **/
    protocolProxyPortList(req: operations.ProtocolProxyPortListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortListResponse>;
    /**
     * protocolProxyPortRemove - Remove individual proxy target on the agent and the simulator host
     *
     * Remove proxy target
    **/
    protocolProxyPortRemove(req: operations.ProtocolProxyPortRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortRemoveResponse>;
    /**
     * protocolProxyPortStart - Start additional target
     *
     * Start additional target
    **/
    protocolProxyPortStart(req: operations.ProtocolProxyPortStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortStartResponse>;
    /**
     * protocolProxyPortStop - Stop additional target
     *
     * Stop additional target
    **/
    protocolProxyPortStop(req: operations.ProtocolProxyPortStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortStopResponse>;
    /**
     * protocolProxySetConfig - Set the agent's PROXY configuration
     *
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolProxySetConfig(req: operations.ProtocolProxySetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxySetConfigResponse>;
    /**
     * protocolProxySetTrace - Set the agent's PROXY traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolProxySetTrace(req: operations.ProtocolProxySetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxySetTraceResponse>;
}
