import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Proxy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's PROXY argument structure
     *
     * @remarks
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolProxyGetArgs(req: operations.ProtocolProxyGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetArgsResponse>;
    /**
     * Show the agent's PROXY configuration
     *
     * @remarks
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolProxyGetConfig(req: operations.ProtocolProxyGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetConfigResponse>;
    /**
     * Show the agent's PROXY statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolProxyGetStatistics(req: operations.ProtocolProxyGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetStatisticsResponse>;
    /**
     * Show the PROXY statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolProxyGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetStatsHdrResponse>;
    /**
     * Show the agent's PROXY traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolProxyGetTrace(req: operations.ProtocolProxyGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyGetTraceResponse>;
    /**
     * Add individual proxy target on the agent and the simulator host
     *
     * @remarks
     * Additional proxy target
     */
    protocolProxyPortAdd(req: operations.ProtocolProxyPortAddRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortAddResponse>;
    /**
     * Check individual target
     *
     * @remarks
     * Check individual target
     */
    protocolProxyPortIsstarted(req: operations.ProtocolProxyPortIsstartedRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortIsstartedResponse>;
    /**
     * List all proxy targets
     */
    protocolProxyPortList(req: operations.ProtocolProxyPortListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortListResponse>;
    /**
     * Remove individual proxy target on the agent and the simulator host
     *
     * @remarks
     * Remove proxy target
     */
    protocolProxyPortRemove(req: operations.ProtocolProxyPortRemoveRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortRemoveResponse>;
    /**
     * Start additional target
     *
     * @remarks
     * Start additional target
     */
    protocolProxyPortStart(req: operations.ProtocolProxyPortStartRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortStartResponse>;
    /**
     * Stop additional target
     *
     * @remarks
     * Stop additional target
     */
    protocolProxyPortStop(req: operations.ProtocolProxyPortStopRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxyPortStopResponse>;
    /**
     * Set the agent's PROXY configuration
     *
     * @remarks
     * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolProxySetConfig(req: operations.ProtocolProxySetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxySetConfigResponse>;
    /**
     * Set the agent's PROXY traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolProxySetTrace(req: operations.ProtocolProxySetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolProxySetTraceResponse>;
}
