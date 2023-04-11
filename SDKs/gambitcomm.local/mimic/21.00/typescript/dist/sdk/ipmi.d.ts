import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ipmi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the agent's IPMI argument structure
     *
     * @remarks
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolIpmiGetArgs(req: operations.ProtocolIpmiGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetArgsResponse>;
    /**
     * Show the outgoing message's attributes
     *
     * @remarks
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
     */
    protocolIpmiGetAttr(req: operations.ProtocolIpmiGetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetAttrResponse>;
    /**
     * Show the agent's IPMI configuration
     *
     * @remarks
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolIpmiGetConfig(req: operations.ProtocolIpmiGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetConfigResponse>;
    /**
     * Show the agent's IPMI statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolIpmiGetStatistics(req: operations.ProtocolIpmiGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetStatisticsResponse>;
    /**
     * Show the IPMI statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolIpmiGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetStatsHdrResponse>;
    /**
     * Show the agent's IPMI traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolIpmiGetTrace(req: operations.ProtocolIpmiGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiGetTraceResponse>;
    /**
     * Set the outgoing message's attributes
     *
     * @remarks
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
     */
    protocolIpmiSetAttr(req: operations.ProtocolIpmiSetAttrRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetAttrResponse>;
    /**
     * Set the agent's IPMI configuration
     *
     * @remarks
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolIpmiSetConfig(req: operations.ProtocolIpmiSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetConfigResponse>;
    /**
     * Set the agent's IPMI traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolIpmiSetTrace(req: operations.ProtocolIpmiSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolIpmiSetTraceResponse>;
}
