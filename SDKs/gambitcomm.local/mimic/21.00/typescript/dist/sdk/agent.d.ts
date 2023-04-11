import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Agent {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a new ipalias for the agent.
     *
     * @remarks
     * port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
     */
    addIpalias(req: operations.AddIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.AddIpaliasResponse>;
    /**
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
     *
     * @remarks
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
     */
    addTimerScript(req: operations.AddTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.AddTimerScriptResponse>;
    /**
     * Remove the current agent.
     *
     * @remarks
     * For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
     */
    agentRemove(req: operations.AgentRemoveRequest, config?: AxiosRequestConfig): Promise<operations.AgentRemoveResponse>;
    /**
     * This command copies the variable store from the other agent to this agent.
     *
     * @remarks
     * This command copies the variable store from the other agent to this agent.
     */
    agentStoreCopy(req: operations.AgentStoreCopyRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreCopyResponse>;
    /**
     * This command can be used as a predicate to ascertain the existence of a given variable.
     *
     * @remarks
     * It returns "1" if the variable exists, else "0".
     */
    agentStoreExists(req: operations.AgentStoreExistsRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreExistsResponse>;
    /**
     * Fetches the value associated with a variable.
     *
     * @remarks
     * The value will be returned as a string (like all Tcl values).
     */
    agentStoreGet(req: operations.AgentStoreGetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreGetResponse>;
    /**
     * This command will return the list of variables in the said scope.
     *
     * @remarks
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
     */
    agentStoreList(req: operations.AgentStoreListRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreListResponse>;
    /**
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
     *
     * @remarks
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
     */
    agentStoreLreplace(req: operations.AgentStoreLreplaceRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreLreplaceResponse>;
    /**
     * This command can be used as a predicate to ascertain the persistence of a given variable.
     *
     * @remarks
     * It returns "1" if the variable is persistent, else "0".
     */
    agentStorePersists(req: operations.AgentStorePersistsRequest, config?: AxiosRequestConfig): Promise<operations.AgentStorePersistsResponse>;
    /**
     * These commands allow the creation of a new variable, or changing an existing value.
     *
     * @remarks
     * The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
     */
    agentStoreSet(req: operations.AgentStoreSetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreSetResponse>;
    /**
     * Deletes a variable which is currently defined.
     *
     * @remarks
     * This will cleanup persistent variables if needed
     */
    agentStoreUnset(req: operations.AgentStoreUnsetRequest, config?: AxiosRequestConfig): Promise<operations.AgentStoreUnsetResponse>;
    /**
     * Deletes an existing ipalias from the agent.
     *
     * @remarks
     * port defaults to 161 if not specified.
     */
    delIpalias(req: operations.DelIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.DelIpaliasResponse>;
    /**
     * Remove a timer script from the execution list.
     *
     * @remarks
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
     */
    delTimerScript(req: operations.DelTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.DelTimerScriptResponse>;
    /**
     * Add a source address that the agent will accept messages from.
     *
     * @remarks
     * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
     */
    fromAdd(req: operations.FromAddRequest, config?: AxiosRequestConfig): Promise<operations.FromAddResponse>;
    /**
     * delete a source address that the agent will accept messages from.
     *
     * @remarks
     * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
     */
    fromDel(req: operations.FromDelRequest, config?: AxiosRequestConfig): Promise<operations.FromDelResponse>;
    /**
     * List the source addresses that the agent will accept messages from.
     *
     * @remarks
     * This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
     */
    fromList(req: operations.FromListRequest, config?: AxiosRequestConfig): Promise<operations.FromListResponse>;
    /**
     * current running state of the agent
     *
     * @remarks
     * 0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
     */
    getAgentState(req: operations.GetAgentStateRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentStateResponse>;
    /**
     * has the agent value space changed?
     *
     * @remarks
     * has the agent value space changed?
     */
    getChanged(req: operations.GetChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetChangedResponse>;
    /**
     * has the lab configuration changed?
     *
     * @remarks
     * has the lab configuration changed?
     */
    getConfigChanged(req: operations.GetConfigChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigChangedResponse>;
    /**
     * one-way transit delay in msec.
     *
     * @remarks
     * The minimum granularity is 10 msec.
     */
    getDelay(req: operations.GetDelayRequest, config?: AxiosRequestConfig): Promise<operations.GetDelayResponse>;
    /**
     * drop rate (every N-th PDU). 0 means no drops.
     *
     * @remarks
     * drop rate (every N-th PDU). 0 means no drops.
     */
    getDrops(req: operations.GetDropsRequest, config?: AxiosRequestConfig): Promise<operations.GetDropsResponse>;
    /**
     * host address of the agent.
     *
     * @remarks
     * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
     */
    getHost(req: operations.GetHostRequest, config?: AxiosRequestConfig): Promise<operations.GetHostResponse>;
    /**
     * timeout in seconds for retransmitting INFORM PDUs.
     *
     * @remarks
     * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
     */
    getInformTimeout(req: operations.GetInformTimeoutRequest, config?: AxiosRequestConfig): Promise<operations.GetInformTimeoutResponse>;
    /**
     * network interface card for the agent.
     *
     * @remarks
     * network interface card for the agent.
     */
    getInterface(req: operations.GetInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetInterfaceResponse>;
    /**
     * subnet mask of the agent.
     *
     * @remarks
     * subnet mask of the agent.
     */
    getMask(req: operations.GetMaskRequest, config?: AxiosRequestConfig): Promise<operations.GetMaskResponse>;
    /**
     * set of MIBs, simulations and scenarios
     *
     * @remarks
     * set of MIBs, simulations and scenarios
     */
    getMibs(req: operations.GetMibsRequest, config?: AxiosRequestConfig): Promise<operations.GetMibsResponse>;
    /**
     * number of starts for the agent.
     *
     * @remarks
     * This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
     */
    getNumberStarts(req: operations.GetNumberStartsRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberStartsResponse>;
    /**
     * MIB directory of the agent.
     *
     * @remarks
     * MIB directory of the agent.
     */
    getOiddir(req: operations.GetOiddirRequest, config?: AxiosRequestConfig): Promise<operations.GetOiddirResponse>;
    /**
     * owner of the agent.
     *
     * @remarks
     * owner of the agent.
     */
    getOwner(req: operations.GetOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GetOwnerResponse>;
    /**
     * maximum PDU size.
     *
     * @remarks
     * The limit for this configurable is 65536.
     */
    getPdusize(req: operations.GetPdusizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPdusizeResponse>;
    /**
     * port number
     *
     * @remarks
     * port number
     */
    getPort(req: operations.GetPortRequest, config?: AxiosRequestConfig): Promise<operations.GetPortResponse>;
    /**
     * private directory of the agent.
     *
     * @remarks
     * private directory of the agent.
     */
    getPrivdir(req: operations.GetPrivdirRequest, config?: AxiosRequestConfig): Promise<operations.GetPrivdirResponse>;
    /**
     * protocols supported by agent
     *
     * @remarks
     * protocols supported by agent as an array of strings
     */
    getProtocols(req: operations.GetProtocolsRequest, config?: AxiosRequestConfig): Promise<operations.GetProtocolsResponse>;
    /**
     * read community string
     *
     * @remarks
     * read community string
     */
    getReadCommunity(req: operations.GetReadCommunityRequest, config?: AxiosRequestConfig): Promise<operations.GetReadCommunityResponse>;
    /**
     * first scenario name
     *
     * @remarks
     * first scenario name
     */
    getScen(req: operations.GetScenRequest, config?: AxiosRequestConfig): Promise<operations.GetScenResponse>;
    /**
     * first simulation name
     *
     * @remarks
     * first simulation name
     */
    getSim(req: operations.GetSimRequest, config?: AxiosRequestConfig): Promise<operations.GetSimResponse>;
    /**
     * relative start time
     *
     * @remarks
     * relative start time
     */
    getStarttime(req: operations.GetStarttimeRequest, config?: AxiosRequestConfig): Promise<operations.GetStarttimeResponse>;
    /**
     * has the agent state changed?
     *
     * @remarks
     * has the agent state changed?
     */
    getStateChanged(req: operations.GetStateChangedRequest, config?: AxiosRequestConfig): Promise<operations.GetStateChangedResponse>;
    /**
     * current statistics of the agent instance
     *
     * @remarks
     * The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
     */
    getStatistics(req: operations.GetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsResponse>;
    /**
     * SNMP PDU tracing
     *
     * @remarks
     * SNMP PDU tracing
     */
    getTrace(req: operations.GetTraceRequest, config?: AxiosRequestConfig): Promise<operations.GetTraceResponse>;
    /**
     * SNMP SET validation policy.
     *
     * @remarks
     * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
     */
    getValidate(req: operations.GetValidateRequest, config?: AxiosRequestConfig): Promise<operations.GetValidateResponse>;
    /**
     * write community string
     *
     * @remarks
     * write community string
     */
    getWriteCommunity(req: operations.GetWriteCommunityRequest, config?: AxiosRequestConfig): Promise<operations.GetWriteCommunityResponse>;
    /**
     * Halt the current agent.
     *
     * @remarks
     * Halt the current agent.
     */
    halt(req: operations.HaltRequest, config?: AxiosRequestConfig): Promise<operations.HaltResponse>;
    /**
     * Lists all the additional ipaliases configured for the agent.
     *
     * @remarks
     * The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
     */
    listIpaliases(req: operations.ListIpaliasesRequest, config?: AxiosRequestConfig): Promise<operations.ListIpaliasesResponse>;
    /**
     * List the timer scripts currently running along with the their intervals.
     *
     * @remarks
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
     */
    listTimerScripts(req: operations.ListTimerScriptsRequest, config?: AxiosRequestConfig): Promise<operations.ListTimerScriptsResponse>;
    /**
     * Add an agent.
     *
     * @remarks
     * Add an agent.
     */
    new(req: operations.NewRequest, config?: AxiosRequestConfig): Promise<operations.NewResponse>;
    /**
     * Pause the current agent.
     *
     * @remarks
     * Pause the current agent.
     */
    pauseNow(req: operations.PauseNowRequest, config?: AxiosRequestConfig): Promise<operations.PauseNowResponse>;
    /**
     * Returns the protocol's configuration.
     *
     * @remarks
     * Returns the protocol's configuration.
     */
    protocolGetConfig(req: operations.ProtocolGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.ProtocolGetConfigResponse>;
    /**
     * Reload the current agent.
     *
     * @remarks
     * This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
     */
    reload(req: operations.ReloadRequest, config?: AxiosRequestConfig): Promise<operations.ReloadResponse>;
    /**
     * Resume the current agent.
     *
     * @remarks
     * Resume the current agent.
     */
    resume(req: operations.ResumeRequest, config?: AxiosRequestConfig): Promise<operations.ResumeResponse>;
    /**
     * Save agent MIB values.
     *
     * @remarks
     * Save agent MIB values.
     */
    save(req: operations.SaveRequest, config?: AxiosRequestConfig): Promise<operations.SaveResponse>;
    /**
     * one-way transit delay in msec
     *
     * @remarks
     * The minimum granularity is 10 msec.
     */
    setDelay(req: operations.SetDelayRequest, config?: AxiosRequestConfig): Promise<operations.SetDelayResponse>;
    /**
     * drop rate (every N-th PDU)
     *
     * @remarks
     * 0 means no drops
     */
    setDrops(req: operations.SetDropsRequest, config?: AxiosRequestConfig): Promise<operations.SetDropsResponse>;
    /**
     * host address of the agent.
     *
     * @remarks
     * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
     */
    setHost(req: operations.SetHostRequest, config?: AxiosRequestConfig): Promise<operations.SetHostResponse>;
    /**
     * timeout in seconds for retransmitting INFORM PDUs
     *
     * @remarks
     * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
     */
    setInformTimeout(req: operations.SetInformTimeoutRequest, config?: AxiosRequestConfig): Promise<operations.SetInformTimeoutResponse>;
    /**
     * network interface card for the agent
     *
     * @remarks
     * network interface card for the agent
     */
    setInterface(req: operations.SetInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.SetInterfaceResponse>;
    /**
     * subnet mask of the agent.
     *
     * @remarks
     * subnet mask of the agent.
     */
    setMask(req: operations.SetMaskRequest, config?: AxiosRequestConfig): Promise<operations.SetMaskResponse>;
    /**
     * set of MIBs, simulations and scenarios
     *
     * @remarks
     * set of MIBs, simulations and scenarios
     */
    setMibs(req: operations.SetMibsRequest, config?: AxiosRequestConfig): Promise<operations.SetMibsResponse>;
    /**
     * MIB directory of the agent.
     *
     * @remarks
     * MIB directory of the agent.
     */
    setOiddir(req: operations.SetOiddirRequest, config?: AxiosRequestConfig): Promise<operations.SetOiddirResponse>;
    /**
     * owner of the agent
     *
     * @remarks
     * owner of the agent
     */
    setOwner(req: operations.SetOwnerRequest, config?: AxiosRequestConfig): Promise<operations.SetOwnerResponse>;
    /**
     * maximum PDU size
     *
     * @remarks
     * The limit for this configurable is 65536
     */
    setPdusize(req: operations.SetPdusizeRequest, config?: AxiosRequestConfig): Promise<operations.SetPdusizeResponse>;
    /**
     * port number
     *
     * @remarks
     * port number
     */
    setPort(req: operations.SetPortRequest, config?: AxiosRequestConfig): Promise<operations.SetPortResponse>;
    /**
     * private directory of the agent.
     *
     * @remarks
     * private directory of the agent.
     */
    setPrivdir(req: operations.SetPrivdirRequest, config?: AxiosRequestConfig): Promise<operations.SetPrivdirResponse>;
    /**
     * protocols supported by agent as a comma-separated list
     *
     * @remarks
     * protocols supported by agent as a comma-separated list
     */
    setProtocols(req: operations.SetProtocolsRequest, config?: AxiosRequestConfig): Promise<operations.SetProtocolsResponse>;
    /**
     * read community string
     *
     * @remarks
     * read community string
     */
    setReadCommunity(req: operations.SetReadCommunityRequest, config?: AxiosRequestConfig): Promise<operations.SetReadCommunityResponse>;
    /**
     * relative start time
     *
     * @remarks
     * relative start time
     */
    setStarttime(req: operations.SetStarttimeRequest, config?: AxiosRequestConfig): Promise<operations.SetStarttimeResponse>;
    /**
     * SNMP PDU tracing
     *
     * @remarks
     * SNMP PDU tracing
     */
    setTrace(req: operations.SetTraceRequest, config?: AxiosRequestConfig): Promise<operations.SetTraceResponse>;
    /**
     * SNMP SET validation policy
     *
     * @remarks
     * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
     */
    setValidate(req: operations.SetValidateRequest, config?: AxiosRequestConfig): Promise<operations.SetValidateResponse>;
    /**
     * write community string
     *
     * @remarks
     * write community string
     */
    setWriteCommunity(req: operations.SetWriteCommunityRequest, config?: AxiosRequestConfig): Promise<operations.SetWriteCommunityResponse>;
    /**
     * Start the current agent.
     *
     * @remarks
     * For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
     */
    start(req: operations.StartRequest, config?: AxiosRequestConfig): Promise<operations.StartResponse>;
    /**
     * Starts an existing ipalias for the agent.
     *
     * @remarks
     * port defaults to 161 if not specified.
     */
    startIpalias(req: operations.StartIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StartIpaliasResponse>;
    /**
     * Returns the status (0=down, 1=up) of an existing ipalias for the agent.
     *
     * @remarks
     * port defaults to 161 if not specified.
     */
    statusIpalias(req: operations.StatusIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StatusIpaliasResponse>;
    /**
     * Show the agent's primary IP address
     *
     * @remarks
     * Agent primary IP address
     */
    stop(req: operations.StopRequest, config?: AxiosRequestConfig): Promise<operations.StopResponse>;
    /**
     * Stops an existing ipalias for the agent.
     *
     * @remarks
     * port defaults to 161 if not specified.
     */
    stopIpalias(req: operations.StopIpaliasRequest, config?: AxiosRequestConfig): Promise<operations.StopIpaliasResponse>;
    /**
     * Add a trap destination to the set of destinations.
     *
     * @remarks
     * Add a trap destination to the set of destinations.
     */
    trapConfigAdd(req: operations.TrapConfigAddRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigAddResponse>;
    /**
     * Remove a trap destination from the set of destinations.
     *
     * @remarks
     * Remove a trap destination from the set of destinations.
     */
    trapConfigDel(req: operations.TrapConfigDelRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigDelResponse>;
    /**
     * List the set of trap destinations for this agent instance.
     *
     * @remarks
     * Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
     */
    trapConfigList(req: operations.TrapConfigListRequest, config?: AxiosRequestConfig): Promise<operations.TrapConfigListResponse>;
    /**
     * List the outstanding asynchronous traps for this agent instance.
     *
     * @remarks
     * List the outstanding asynchronous traps for this agent instance.
     */
    trapList(req: operations.TrapListRequest, config?: AxiosRequestConfig): Promise<operations.TrapListResponse>;
}
