import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Dhcp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's DHCP argument structure
     *
     * @remarks
     * Agent's DHCP configuration particulars
     */
    protocolDhcpGetArgs(req: operations.ProtocolDhcpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetArgsResponse>;
    /**
     * Show the agent's DHCP configuration
     *
     * @remarks
     * Agent's DHCP configuration hwaddr,classid,add_options,script
     */
    protocolDhcpGetConfig(req: operations.ProtocolDhcpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetConfigResponse>;
    /**
     * Show the agent's DHCP statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolDhcpGetStatistics(req: operations.ProtocolDhcpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetStatisticsResponse>;
    /**
     * Show the DHCP statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolDhcpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetStatsHdrResponse>;
    /**
     * Show the agent's DHCP traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolDhcpGetTrace(req: operations.ProtocolDhcpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetTraceResponse>;
    /**
     * Show the parameters configured by the server in its DHCP-OFFER message
     *
     * @remarks
     * DHCP-OFFER message parameters
     */
    protocolDhcpParams(req: operations.ProtocolDhcpParamsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpParamsResponse>;
    /**
     * Set the agent's DHCP configuration
     *
     * @remarks
     * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolDhcpSetConfig(req: operations.ProtocolDhcpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpSetConfigResponse>;
    /**
     * Set the agent's DHCP traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolDhcpSetTrace(req: operations.ProtocolDhcpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpSetTraceResponse>;
}
