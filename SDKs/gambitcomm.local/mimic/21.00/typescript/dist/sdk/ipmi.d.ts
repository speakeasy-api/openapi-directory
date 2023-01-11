import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ipmi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolIpmiGetArgs - Show the agent's IPMI argument structure
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolIpmiGetArgs(req: operations.ProtocolIpmiGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetArgsResponse>;
    /**
     * protocolIpmiGetAttr - Show the outgoing message's attributes
     *
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    protocolIpmiGetAttr(req: operations.ProtocolIpmiGetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetAttrResponse>;
    /**
     * protocolIpmiGetConfig - Show the agent's IPMI configuration
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolIpmiGetConfig(req: operations.ProtocolIpmiGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetConfigResponse>;
    /**
     * protocolIpmiGetStatistics - Show the agent's IPMI statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolIpmiGetStatistics(req: operations.ProtocolIpmiGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetStatisticsResponse>;
    /**
     * protocolIpmiGetStatsHdr - Show the IPMI statistics headers
     *
     * The headers of statistics fields
    **/
    protocolIpmiGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetStatsHdrResponse>;
    /**
     * protocolIpmiGetTrace - Show the agent's IPMI traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolIpmiGetTrace(req: operations.ProtocolIpmiGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetTraceResponse>;
    /**
     * protocolIpmiSetAttr - Set the outgoing message's attributes
     *
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    protocolIpmiSetAttr(req: operations.ProtocolIpmiSetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetAttrResponse>;
    /**
     * protocolIpmiSetConfig - Set the agent's IPMI configuration
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolIpmiSetConfig(req: operations.ProtocolIpmiSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetConfigResponse>;
    /**
     * protocolIpmiSetTrace - Set the agent's IPMI traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolIpmiSetTrace(req: operations.ProtocolIpmiSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetTraceResponse>;
}
