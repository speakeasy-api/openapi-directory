import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Daemon {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addDaemonTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
     *
     * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
    **/
    addDaemonTimerScript(req: operations.AddDaemonTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.AddDaemonTimerScriptResponse>;
    /**
     * cfgLoad - Load the lab configuration file file.
     *
     * Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
    **/
    cfgLoad(req: operations.CfgLoadRequest, config?: AxiosRequestConfig): Promise<operations.CfgLoadResponse>;
    /**
     * cfgNew - Clear the lab configuration.
     *
     * Clear the lab configuration.
    **/
    cfgNew(req: operations.CfgNewRequest, config?: AxiosRequestConfig): Promise<operations.CfgNewResponse>;
    /**
     * cfgSave - Save the lab configuration.
     *
     * Save the lab configuration.
    **/
    cfgSave(config?: AxiosRequestConfig): Promise<operations.CfgSaveResponse>;
    /**
     * cfgSaveas - Save the lab configuration in file.
     *
     * Save the lab configuration in file.
    **/
    cfgSaveas(req: operations.CfgSaveasRequest, config?: AxiosRequestConfig): Promise<operations.CfgSaveasResponse>;
    /**
     * delDaemonTimerScript - Remove a timer script from the execution list.
     *
     * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
    **/
    delDaemonTimerScript(req: operations.DelDaemonTimerScriptRequest, config?: AxiosRequestConfig): Promise<operations.DelDaemonTimerScriptResponse>;
    /**
     * getActiveDataList - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
     *
     * This list is guaranteed to be sorted into increasing order.
    **/
    getActiveDataList(config?: AxiosRequestConfig): Promise<operations.GetActiveDataListResponse>;
    /**
     * getActiveList - The list of {agentnum} that are currently active (running or paused).
     *
     * This list is guaranteed to be sorted into increasing order.
    **/
    getActiveList(config?: AxiosRequestConfig): Promise<operations.GetActiveListResponse>;
    /**
     * getCfgFileChanged - This predicate indicates if the currently loaded agent configuration file has changed.
     *
     * Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
    **/
    getCfgFileChanged(config?: AxiosRequestConfig): Promise<operations.GetCfgFileChangedResponse>;
    /**
     * getCfgfile - The currently loaded lab configuration file for the particular user.
     *
     * In the case of multi-user access this command returns a different configuration file loaded for each user.
    **/
    getCfgfile(config?: AxiosRequestConfig): Promise<operations.GetCfgfileResponse>;
    /**
     * getChangedConfigList - The list of {agentnum} for which a configurable parameter changed.
     *
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
    **/
    getChangedConfigList(config?: AxiosRequestConfig): Promise<operations.GetChangedConfigListResponse>;
    /**
     * getChangedStateList - The list of {agentnum state} for which the state changed.
     *
     * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
    **/
    getChangedStateList(config?: AxiosRequestConfig): Promise<operations.GetChangedStateListResponse>;
    /**
     * getClients - The number of clients currently connected to the daemon.
     *
     * The number of clients currently connected to the daemon.
    **/
    getClients(config?: AxiosRequestConfig): Promise<operations.GetClientsResponse>;
    /**
     * getConfiguredList - The list of {agentnum} that are currently configured.
     *
     * This list is guaranteed to be sorted into increasing order.
    **/
    getConfiguredList(config?: AxiosRequestConfig): Promise<operations.GetConfiguredListResponse>;
    /**
     * getDaemonProtocols - The set of protocols supported by the Simulator.
     *
     * The set of protocols supported by the Simulator.
    **/
    getDaemonProtocols(config?: AxiosRequestConfig): Promise<operations.GetDaemonProtocolsResponse>;
    /**
     * getInterfaces - The set of network interfaces that can be used for simulations.
     *
     * The set of network interfaces that can be used for simulations.
    **/
    getInterfaces(config?: AxiosRequestConfig): Promise<operations.GetInterfacesResponse>;
    /**
     * getLast - The last configured agent instance.
     *
     * The last configured agent instance.
    **/
    getLast(config?: AxiosRequestConfig): Promise<operations.GetLastResponse>;
    /**
     * getLog - The current log file for the Simulator.
     *
     * The current log file for the Simulator.
    **/
    getLog(config?: AxiosRequestConfig): Promise<operations.GetLogResponse>;
    /**
     * getMax - The maximum number of agent instances.
     *
     * The maximum number of agent instances.
    **/
    getMax(config?: AxiosRequestConfig): Promise<operations.GetMaxResponse>;
    /**
     * getNetaddr - The network address of the host where the MIMIC simulator is running.
     *
     * The network address of the host where the MIMIC simulator is running.
    **/
    getNetaddr(config?: AxiosRequestConfig): Promise<operations.GetNetaddrResponse>;
    /**
     * getNetdev - The default network device to be used for agent addresses.
     *
     * The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
    **/
    getNetdev(config?: AxiosRequestConfig): Promise<operations.GetNetdevResponse>;
    /**
     * getProduct - The product number that is licensed.
     *
     * The product number that is licensed.
    **/
    getProduct(config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * getReturn - The return mode.
     *
     * The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
    **/
    getReturn(config?: AxiosRequestConfig): Promise<operations.GetReturnResponse>;
    /**
     * getVersion - The version of the MIMIC command interface.
     *
     * The version of the MIMIC command interface.
    **/
    getVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * listDaemonTimerScripts - List the timer scripts currently running along with the their intervals.
     *
     * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
    **/
    listDaemonTimerScripts(config?: AxiosRequestConfig): Promise<operations.ListDaemonTimerScriptsResponse>;
    /**
     * mgetInfo - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
     *
     * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
    **/
    mgetInfo(req: operations.MgetInfoRequest, config?: AxiosRequestConfig): Promise<operations.MgetInfoResponse>;
    /**
     * setLog - The current log file for the Simulator.
     *
     * The current log file for the Simulator.
    **/
    setLog(req: operations.SetLogRequest, config?: AxiosRequestConfig): Promise<operations.SetLogResponse>;
    /**
     * setNetdev - The network address of the host where the MIMIC simulator is running.
     *
     * The network address of the host where the MIMIC simulator is running.
    **/
    setNetdev(config?: AxiosRequestConfig): Promise<operations.SetNetdevResponse>;
    /**
     * startAllAgents - Start MIMIC.
     *
     * Start MIMIC.
    **/
    startAllAgents(config?: AxiosRequestConfig): Promise<operations.StartAllAgentsResponse>;
    /**
     * stopAllAgents - Stop MIMIC.
     *
     * Stop MIMIC.
    **/
    stopAllAgents(config?: AxiosRequestConfig): Promise<operations.StopAllAgentsResponse>;
    /**
     * storeExists - This command can be used as a predicate to ascertain the existence of a given variable.
     *
     * It returns "1" if the variable exists, else "0".
    **/
    storeExists(req: operations.StoreExistsRequest, config?: AxiosRequestConfig): Promise<operations.StoreExistsResponse>;
    /**
     * storeGet - Fetches the value associated with a variable.
     *
     * The value will be returned as a string (like all Tcl values).
    **/
    storeGet(req: operations.StoreGetRequest, config?: AxiosRequestConfig): Promise<operations.StoreGetResponse>;
    /**
     * storeList - This command will return the list of variables in the said scope.
     *
     * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
    **/
    storeList(config?: AxiosRequestConfig): Promise<operations.StoreListResponse>;
    /**
     * storeLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
     *
     * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
    **/
    storeLreplace(req: operations.StoreLreplaceRequest, config?: AxiosRequestConfig): Promise<operations.StoreLreplaceResponse>;
    /**
     * storePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
     *
     * It returns "1" if the variable is persistent, else "0".
    **/
    storePersists(req: operations.StorePersistsRequest, config?: AxiosRequestConfig): Promise<operations.StorePersistsResponse>;
    /**
     * storeSave - This operation flushes all global objects which need to be made persistent to disk.
     *
     * The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
    **/
    storeSave(config?: AxiosRequestConfig): Promise<operations.StoreSaveResponse>;
    /**
     * storeSet - Set the variable store for the global storage
     *
     * Persist 1 means persistent , 0 means non-persistent
    **/
    storeSet(req: operations.StoreSetRequest, config?: AxiosRequestConfig): Promise<operations.StoreSetResponse>;
    /**
     * storeUnset - Deletes a variable which is currently defined.
     *
     * This will cleanup persistent variables if needed
    **/
    storeUnset(req: operations.StoreUnsetRequest, config?: AxiosRequestConfig): Promise<operations.StoreUnsetResponse>;
    /**
     * terminate - Terminate the MIMIC daemon.
     *
     * Terminate the MIMIC daemon.
    **/
    terminate(config?: AxiosRequestConfig): Promise<operations.TerminateResponse>;
}
