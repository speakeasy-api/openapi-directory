import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Daemon {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
     *
     * @remarks
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
     */
    addDaemonTimerScript(req: operations.AddDaemonTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.AddDaemonTimerScriptResponse>;
    /**
     * Load the lab configuration file file.
     *
     * @remarks
     * Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
     */
    cfgLoad(req: operations.CfgLoadRequest, config?: AxiosRequestConfig): Promise<operations.CfgLoadResponse>;
    /**
     * Clear the lab configuration.
     *
     * @remarks
     * Clear the lab configuration.
     */
    cfgNew(req: operations.CfgNewRequest, config?: AxiosRequestConfig): Promise<operations.CfgNewResponse>;
    /**
     * Save the lab configuration.
     *
     * @remarks
     * Save the lab configuration.
     */
    cfgSave(config?: AxiosRequestConfig): Promise<operations.CfgSaveResponse>;
    /**
     * Save the lab configuration in file.
     *
     * @remarks
     * Save the lab configuration in file.
     */
    cfgSaveas(req: operations.CfgSaveasRequest, config?: AxiosRequestConfig): Promise<operations.CfgSaveasResponse>;
    /**
     * Remove a timer script from the execution list.
     *
     * @remarks
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
     */
    delDaemonTimerScript(req: operations.DelDaemonTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.DelDaemonTimerScriptResponse>;
    /**
     * The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
     *
     * @remarks
     * This list is guaranteed to be sorted into increasing order.
     */
    getActiveDataList(config?: AxiosRequestConfig): Promise<operations.GetActiveDataListResponse>;
    /**
     * The list of {agentnum} that are currently active (running or paused).
     *
     * @remarks
     * This list is guaranteed to be sorted into increasing order.
     */
    getActiveList(config?: AxiosRequestConfig): Promise<operations.GetActiveListResponse>;
    /**
     * This predicate indicates if the currently loaded agent configuration file has changed.
     *
     * @remarks
     * Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
     */
    getCfgFileChanged(config?: AxiosRequestConfig): Promise<operations.GetCfgFileChangedResponse>;
    /**
     * The currently loaded lab configuration file for the particular user.
     *
     * @remarks
     * In the case of multi-user access this command returns a different configuration file loaded for each user.
     */
    getCfgfile(config?: AxiosRequestConfig): Promise<operations.GetCfgfileResponse>;
    /**
     * The list of {agentnum} for which a configurable parameter changed.
     *
     * @remarks
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
     */
    getChangedConfigList(config?: AxiosRequestConfig): Promise<operations.GetChangedConfigListResponse>;
    /**
     * The list of {agentnum state} for which the state changed.
     *
     * @remarks
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
     */
    getChangedStateList(config?: AxiosRequestConfig): Promise<operations.GetChangedStateListResponse>;
    /**
     * The number of clients currently connected to the daemon.
     *
     * @remarks
     * The number of clients currently connected to the daemon.
     */
    getClients(config?: AxiosRequestConfig): Promise<operations.GetClientsResponse>;
    /**
     * The list of {agentnum} that are currently configured.
     *
     * @remarks
     * This list is guaranteed to be sorted into increasing order.
     */
    getConfiguredList(config?: AxiosRequestConfig): Promise<operations.GetConfiguredListResponse>;
    /**
     * The set of protocols supported by the Simulator.
     *
     * @remarks
     * The set of protocols supported by the Simulator.
     */
    getDaemonProtocols(config?: AxiosRequestConfig): Promise<operations.GetDaemonProtocolsResponse>;
    /**
     * The set of network interfaces that can be used for simulations.
     *
     * @remarks
     * The set of network interfaces that can be used for simulations.
     */
    getInterfaces(config?: AxiosRequestConfig): Promise<operations.GetInterfacesResponse>;
    /**
     * The last configured agent instance.
     *
     * @remarks
     * The last configured agent instance.
     */
    getLast(config?: AxiosRequestConfig): Promise<operations.GetLastResponse>;
    /**
     * The current log file for the Simulator.
     *
     * @remarks
     * The current log file for the Simulator.
     */
    getLog(config?: AxiosRequestConfig): Promise<operations.GetLogResponse>;
    /**
     * The maximum number of agent instances.
     *
     * @remarks
     * The maximum number of agent instances.
     */
    getMax(config?: AxiosRequestConfig): Promise<operations.GetMaxResponse>;
    /**
     * The network address of the host where the MIMIC simulator is running.
     *
     * @remarks
     * The network address of the host where the MIMIC simulator is running.
     */
    getNetaddr(config?: AxiosRequestConfig): Promise<operations.GetNetaddrResponse>;
    /**
     * The default network device to be used for agent addresses.
     *
     * @remarks
     * The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
     */
    getNetdev(config?: AxiosRequestConfig): Promise<operations.GetNetdevResponse>;
    /**
     * The product number that is licensed.
     *
     * @remarks
     * The product number that is licensed.
     */
    getProduct(config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * The return mode.
     *
     * @remarks
     * The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
     */
    getReturn(config?: AxiosRequestConfig): Promise<operations.GetReturnResponse>;
    /**
     * The version of the MIMIC command interface.
     *
     * @remarks
     * The version of the MIMIC command interface.
     */
    getVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * List the timer scripts currently running along with the their intervals.
     *
     * @remarks
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
     */
    listDaemonTimerScripts(config?: AxiosRequestConfig): Promise<operations.ListDaemonTimerScriptsResponse>;
    /**
     * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
     *
     * @remarks
     * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
     */
    mgetInfo(req: operations.MgetInfoRequest, config?: AxiosRequestConfig): Promise<operations.MgetInfoResponse>;
    /**
     * The current log file for the Simulator.
     *
     * @remarks
     * The current log file for the Simulator.
     */
    setLog(req: string, config?: AxiosRequestConfig): Promise<operations.SetLogResponse>;
    /**
     * The network address of the host where the MIMIC simulator is running.
     *
     * @remarks
     * The network address of the host where the MIMIC simulator is running.
     */
    setNetdev(config?: AxiosRequestConfig): Promise<operations.SetNetdevResponse>;
    /**
     * Start MIMIC.
     *
     * @remarks
     * Start MIMIC.
     */
    startAllAgents(config?: AxiosRequestConfig): Promise<operations.StartAllAgentsResponse>;
    /**
     * Stop MIMIC.
     *
     * @remarks
     * Stop MIMIC.
     */
    stopAllAgents(config?: AxiosRequestConfig): Promise<operations.StopAllAgentsResponse>;
    /**
     * This command can be used as a predicate to ascertain the existence of a given variable.
     *
     * @remarks
     * It returns "1" if the variable exists, else "0".
     */
    storeExists(req: operations.StoreExistsRequest, config?: AxiosRequestConfig): Promise<operations.StoreExistsResponse>;
    /**
     * Fetches the value associated with a variable.
     *
     * @remarks
     * The value will be returned as a string (like all Tcl values).
     */
    storeGet(req: operations.StoreGetRequest, config?: AxiosRequestConfig): Promise<operations.StoreGetResponse>;
    /**
     * This command will return the list of variables in the said scope.
     *
     * @remarks
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
     */
    storeList(config?: AxiosRequestConfig): Promise<operations.StoreListResponse>;
    /**
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
     *
     * @remarks
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
     */
    storeLreplace(req: operations.StoreLreplaceRequest, config?: AxiosRequestConfig): Promise<operations.StoreLreplaceResponse>;
    /**
     * This command can be used as a predicate to ascertain the persistence of a given variable.
     *
     * @remarks
     * It returns "1" if the variable is persistent, else "0".
     */
    storePersists(req: operations.StorePersistsRequest, config?: AxiosRequestConfig): Promise<operations.StorePersistsResponse>;
    /**
     * This operation flushes all global objects which need to be made persistent to disk.
     *
     * @remarks
     * The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
     */
    storeSave(config?: AxiosRequestConfig): Promise<operations.StoreSaveResponse>;
    /**
     * Set the variable store for the global storage
     *
     * @remarks
     * Persist 1 means persistent , 0 means non-persistent
     */
    storeSet(req: operations.StoreSetRequest, config?: AxiosRequestConfig): Promise<operations.StoreSetResponse>;
    /**
     * Deletes a variable which is currently defined.
     *
     * @remarks
     * This will cleanup persistent variables if needed
     */
    storeUnset(req: operations.StoreUnsetRequest, config?: AxiosRequestConfig): Promise<operations.StoreUnsetResponse>;
    /**
     * Terminate the MIMIC daemon.
     *
     * @remarks
     * Terminate the MIMIC daemon.
     */
    terminate(config?: AxiosRequestConfig): Promise<operations.TerminateResponse>;
}
