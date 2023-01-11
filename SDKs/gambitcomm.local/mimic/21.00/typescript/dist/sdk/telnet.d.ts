import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Telnet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * protocolTelnetConnectionLogon - Changes the connection's current logon.
     *
     * Logon change allows (hidden) commands for a different access mode to run.
    **/
    protocolTelnetConnectionLogon(req: operations.ProtocolTelnetConnectionLogonRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionLogonResponse>;
    /**
     * protocolTelnetConnectionRequest - Executes the command asynchronously .
     *
     * Equivalent of the command typed in by the user.
    **/
    protocolTelnetConnectionRequest(req: operations.ProtocolTelnetConnectionRequestRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionRequestResponse>;
    /**
     * protocolTelnetConnectionSignal - Triggers the asynchronous signal event with the specified signal name
     *
     * Signal name is either connect or idle
    **/
    protocolTelnetConnectionSignal(req: operations.ProtocolTelnetConnectionSignalRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetConnectionSignalResponse>;
    /**
     * protocolTelnetGetArgs - Show the agent's TELNET argument structure
     *
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTelnetGetArgs(req: operations.ProtocolTelnetGetArgsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetArgsResponse>;
    /**
     * protocolTelnetGetConfig - Show the agent's TELNET configuration
     *
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTelnetGetConfig(req: operations.ProtocolTelnetGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetConfigResponse>;
    /**
     * protocolTelnetGetStatistics - Show the agent's TELNET statistics
     *
     * Statistics of fields indicated in the headers
    **/
    protocolTelnetGetStatistics(req: operations.ProtocolTelnetGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetStatisticsResponse>;
    /**
     * protocolTelnetGetStatsHdr - Show the TELNET statistics headers
     *
     * The headers of statistics fields
    **/
    protocolTelnetGetStatsHdr(config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetStatsHdrResponse>;
    /**
     * protocolTelnetGetTrace - Show the agent's TELNET traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    protocolTelnetGetTrace(req: operations.ProtocolTelnetGetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetGetTraceResponse>;
    /**
     * protocolTelnetIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolTelnetIpaliasDisable(req: operations.ProtocolTelnetIpaliasDisableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasDisableResponse>;
    /**
     * protocolTelnetIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolTelnetIpaliasEnable(req: operations.ProtocolTelnetIpaliasEnableRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasEnableResponse>;
    /**
     * protocolTelnetIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolTelnetIpaliasIsenabled(req: operations.ProtocolTelnetIpaliasIsenabledRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasIsenabledResponse>;
    /**
     * protocolTelnetIpaliasList - List all IP aliases on the agent and the simulator host
     *
     * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
    **/
    protocolTelnetIpaliasList(req: operations.ProtocolTelnetIpaliasListRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetIpaliasListResponse>;
    /**
     * protocolTelnetServerGetConnections - Show the agent's TELNET connections
     *
     * IDs of all connected connections
    **/
    protocolTelnetServerGetConnections(req: operations.ProtocolTelnetServerGetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetConnectionsResponse>;
    /**
     * protocolTelnetServerGetKeymap - Show the agent's TELNET keymap file name
     *
     * Keymap file name
    **/
    protocolTelnetServerGetKeymap(req: operations.ProtocolTelnetServerGetKeymapRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetKeymapResponse>;
    /**
     * protocolTelnetServerGetRulesdb - Show the agent's TELNET rules db file name
     *
     * Rules db file name
    **/
    protocolTelnetServerGetRulesdb(req: operations.ProtocolTelnetServerGetRulesdbRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetRulesdbResponse>;
    /**
     * protocolTelnetServerGetState - Show the agent's TELNET server state
     *
     * Return 1 means accepting connections, 0 not
    **/
    protocolTelnetServerGetState(req: operations.ProtocolTelnetServerGetStateRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetStateResponse>;
    /**
     * protocolTelnetServerGetUserdb - Show the agent's TELNET user db file name
     *
     * User db file name
    **/
    protocolTelnetServerGetUserdb(req: operations.ProtocolTelnetServerGetUserdbRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetUserdbResponse>;
    /**
     * protocolTelnetServerGetUsers - Show the agent's TELNET users
     *
     * List of users
    **/
    protocolTelnetServerGetUsers(req: operations.ProtocolTelnetServerGetUsersRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetServerGetUsersResponse>;
    /**
     * protocolTelnetSetConfig - Set the agent's TELNET configuration
     *
     * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    protocolTelnetSetConfig(req: operations.ProtocolTelnetSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetSetConfigResponse>;
    /**
     * protocolTelnetSetTrace - Set the agent's TELNET traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    protocolTelnetSetTrace(req: operations.ProtocolTelnetSetTraceRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolTelnetSetTraceResponse>;
}
