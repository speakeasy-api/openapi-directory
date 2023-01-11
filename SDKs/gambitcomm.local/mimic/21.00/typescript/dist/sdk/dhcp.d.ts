import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Dhcp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolDhcpGetArgs - Show the agent's DHCP argument structure
     *
     * Agent's DHCP configuration particulars
    **/
    protocolDhcpGetArgs(req: operations.ProtocolDhcpGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetArgsResponse>;
    /**
     * protocolDhcpGetConfig - Show the agent's DHCP configuration
     *
     * Agent's DHCP configuration hwaddr,classid,add_options,script
    **/
    protocolDhcpGetConfig(req: operations.ProtocolDhcpGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetConfigResponse>;
    /**
     * protocolDhcpGetStatistics - Show the agent's DHCP statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolDhcpGetStatistics(req: operations.ProtocolDhcpGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetStatisticsResponse>;
    /**
     * protocolDhcpGetStatsHdr - Show the DHCP statistics headers
     *
     * The headers of statistics fields
    **/
    protocolDhcpGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetStatsHdrResponse>;
    /**
     * protocolDhcpGetTrace - Show the agent's DHCP traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolDhcpGetTrace(req: operations.ProtocolDhcpGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpGetTraceResponse>;
    /**
     * protocolDhcpParams - Show the parameters configured by the server in its DHCP-OFFER message
     *
     * DHCP-OFFER message parameters
    **/
    protocolDhcpParams(req: operations.ProtocolDhcpParamsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpParamsResponse>;
    /**
     * protocolDhcpSetConfig - Set the agent's DHCP configuration
     *
     * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolDhcpSetConfig(req: operations.ProtocolDhcpSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpSetConfigResponse>;
    /**
     * protocolDhcpSetTrace - Set the agent's DHCP traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolDhcpSetTrace(req: operations.ProtocolDhcpSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolDhcpSetTraceResponse>;
}
