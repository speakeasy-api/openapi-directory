import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Telnet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Changes the connection's current logon.
     *
     * @remarks
     * Logon change allows (hidden) commands for a different access mode to run.
     */
    protocolTelnetConnectionLogon(req: operations.ProtocolTelnetConnectionLogonRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionLogonResponse>;
    /**
     * Executes the command asynchronously .
     *
     * @remarks
     * Equivalent of the command typed in by the user.
     */
    protocolTelnetConnectionRequest(req: operations.ProtocolTelnetConnectionRequestRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionRequestResponse>;
    /**
     * Triggers the asynchronous signal event with the specified signal name
     *
     * @remarks
     * Signal name is either connect or idle
     */
    protocolTelnetConnectionSignal(req: operations.ProtocolTelnetConnectionSignalRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionSignalResponse>;
    /**
     * Show the agent's TELNET argument structure
     *
     * @remarks
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolTelnetGetArgs(req: operations.ProtocolTelnetGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetArgsResponse>;
    /**
     * Show the agent's TELNET configuration
     *
     * @remarks
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolTelnetGetConfig(req: operations.ProtocolTelnetGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetConfigResponse>;
    /**
     * Show the agent's TELNET statistics
     *
     * @remarks
     * Statistics of fields indicated in the headers
     */
    protocolTelnetGetStatistics(req: operations.ProtocolTelnetGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetStatisticsResponse>;
    /**
     * Show the TELNET statistics headers
     *
     * @remarks
     * The headers of statistics fields
     */
    protocolTelnetGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetStatsHdrResponse>;
    /**
     * Show the agent's TELNET traffic tracing
     *
     * @remarks
     * Trace 1 means enabled, 0 means not
     */
    protocolTelnetGetTrace(req: operations.ProtocolTelnetGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetTraceResponse>;
    /**
     * Disable individual IP aliases on the agent and the simulator host
     *
     * @remarks
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
     */
    protocolTelnetIpaliasDisable(req: operations.ProtocolTelnetIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasDisableResponse>;
    /**
     * Enable individual IP aliases on the agent and the simulator host
     *
     * @remarks
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
     */
    protocolTelnetIpaliasEnable(req: operations.ProtocolTelnetIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasEnableResponse>;
    /**
     * Check individual IP aliases on the agent and the simulator host
     *
     * @remarks
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
     */
    protocolTelnetIpaliasIsenabled(req: operations.ProtocolTelnetIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasIsenabledResponse>;
    /**
     * List all IP aliases on the agent and the simulator host
     *
     * @remarks
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
     */
    protocolTelnetIpaliasList(req: operations.ProtocolTelnetIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasListResponse>;
    /**
     * Show the agent's TELNET connections
     *
     * @remarks
     * IDs of all connected connections
     */
    protocolTelnetServerGetConnections(req: operations.ProtocolTelnetServerGetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetConnectionsResponse>;
    /**
     * Show the agent's TELNET keymap file name
     *
     * @remarks
     * Keymap file name
     */
    protocolTelnetServerGetKeymap(req: operations.ProtocolTelnetServerGetKeymapRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetKeymapResponse>;
    /**
     * Show the agent's TELNET rules db file name
     *
     * @remarks
     * Rules db file name
     */
    protocolTelnetServerGetRulesdb(req: operations.ProtocolTelnetServerGetRulesdbRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetRulesdbResponse>;
    /**
     * Show the agent's TELNET server state
     *
     * @remarks
     * Return 1 means accepting connections, 0 not
     */
    protocolTelnetServerGetState(req: operations.ProtocolTelnetServerGetStateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetStateResponse>;
    /**
     * Show the agent's TELNET user db file name
     *
     * @remarks
     * User db file name
     */
    protocolTelnetServerGetUserdb(req: operations.ProtocolTelnetServerGetUserdbRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetUserdbResponse>;
    /**
     * Show the agent's TELNET users
     *
     * @remarks
     * List of users
     */
    protocolTelnetServerGetUsers(req: operations.ProtocolTelnetServerGetUsersRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetUsersResponse>;
    /**
     * Set the agent's TELNET configuration
     *
     * @remarks
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
     */
    protocolTelnetSetConfig(req: operations.ProtocolTelnetSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetSetConfigResponse>;
    /**
     * Set the agent's TELNET traffic tracing
     *
     * @remarks
     * 1 to enable, 0 to disable
     */
    protocolTelnetSetTrace(req: operations.ProtocolTelnetSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetSetTraceResponse>;
}
