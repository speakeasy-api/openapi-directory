# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gambitcomm.local/mimic/21.00/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Access.AccessAdd(ctx, operations.AccessAddRequest{
        Agents: "corrupti",
        Mask: "provident",
        User: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessAdd200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Access](docs/access/README.md)

* [AccessAdd](docs/access/README.md#accessadd) - Adds/Overwrites the user entry in the access control database.
* [AccessDel](docs/access/README.md#accessdel) - Clears a users entry from access control database.
* [AccessGetAcldb](docs/access/README.md#accessgetacldb) - Returns the current access control database in use.
* [AccessGetAdmindir](docs/access/README.md#accessgetadmindir) - Returns the current admin directory.
* [AccessGetAdminuser](docs/access/README.md#accessgetadminuser) - Returns the current administrator.
* [AccessGetEnabled](docs/access/README.md#accessgetenabled) - Returns the state of access control checking.
* [AccessList](docs/access/README.md#accesslist) - Returns an array of entries.
* [AccessLoad](docs/access/README.md#accessload) - Loads the specified file for access control data.
* [AccessSave](docs/access/README.md#accesssave) - Saves current access control data in specified file.
* [AccessSetAcldb](docs/access/README.md#accesssetacldb) - Allows setting the name of the current access control database.
* [AccessSetEnabled](docs/access/README.md#accesssetenabled) - Allows the user to enable/disable the access control check.

### [Agent](docs/agent/README.md)

* [AddIpalias](docs/agent/README.md#addipalias) - Adds a new ipalias for the agent.
* [AddTimerScript](docs/agent/README.md#addtimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [AgentRemove](docs/agent/README.md#agentremove) - Remove the current agent.
* [AgentStoreCopy](docs/agent/README.md#agentstorecopy) - This command copies the variable store from the other agent to this agent.
* [AgentStoreExists](docs/agent/README.md#agentstoreexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [AgentStoreGet](docs/agent/README.md#agentstoreget) - Fetches the value associated with a variable.
* [AgentStoreList](docs/agent/README.md#agentstorelist) - This command will return the list of variables in the said scope.
* [AgentStoreLreplace](docs/agent/README.md#agentstorelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [AgentStorePersists](docs/agent/README.md#agentstorepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [AgentStoreSet](docs/agent/README.md#agentstoreset) - These commands allow the creation of a new variable, or changing an existing value.
* [AgentStoreUnset](docs/agent/README.md#agentstoreunset) - Deletes a variable which is currently defined.
* [DelIpalias](docs/agent/README.md#delipalias) - Deletes an existing ipalias from the agent.
* [DelTimerScript](docs/agent/README.md#deltimerscript) - Remove a timer script from the execution list.
* [FromAdd](docs/agent/README.md#fromadd) - Add a source address that the agent will accept messages from.
* [FromDel](docs/agent/README.md#fromdel) - delete a source address that the agent will accept messages from.
* [FromList](docs/agent/README.md#fromlist) - List the source addresses that the agent will accept messages from.
* [GetAgentState](docs/agent/README.md#getagentstate) - current running state of the agent
* [GetChanged](docs/agent/README.md#getchanged) - has the agent value space changed?
* [GetConfigChanged](docs/agent/README.md#getconfigchanged) - has the lab configuration changed?
* [GetDelay](docs/agent/README.md#getdelay) - one-way transit delay in msec.
* [GetDrops](docs/agent/README.md#getdrops) - drop rate (every N-th PDU). 0 means no drops.
* [GetHost](docs/agent/README.md#gethost) - host address of the agent.
* [GetInformTimeout](docs/agent/README.md#getinformtimeout) - timeout in seconds for retransmitting INFORM PDUs.
* [GetInterface](docs/agent/README.md#getinterface) - network interface card for the agent.
* [GetMask](docs/agent/README.md#getmask) - subnet mask of the agent.
* [GetMibs](docs/agent/README.md#getmibs) - set of MIBs, simulations and scenarios
* [GetNumberStarts](docs/agent/README.md#getnumberstarts) - number of starts for the agent.
* [GetOiddir](docs/agent/README.md#getoiddir) - MIB directory of the agent.
* [GetOwner](docs/agent/README.md#getowner) - owner of the agent.
* [GetPdusize](docs/agent/README.md#getpdusize) - maximum PDU size.
* [GetPort](docs/agent/README.md#getport) - port number
* [GetPrivdir](docs/agent/README.md#getprivdir) - private directory of the agent.
* [GetProtocols](docs/agent/README.md#getprotocols) - protocols supported by agent
* [GetReadCommunity](docs/agent/README.md#getreadcommunity) - read community string
* [GetScen](docs/agent/README.md#getscen) - first scenario name
* [GetSim](docs/agent/README.md#getsim) - first simulation name
* [GetStarttime](docs/agent/README.md#getstarttime) - relative start time
* [GetStateChanged](docs/agent/README.md#getstatechanged) - has the agent state changed?
* [GetStatistics](docs/agent/README.md#getstatistics) - current statistics of the agent instance
* [GetTrace](docs/agent/README.md#gettrace) - SNMP PDU tracing
* [GetValidate](docs/agent/README.md#getvalidate) - SNMP SET validation policy.
* [GetWriteCommunity](docs/agent/README.md#getwritecommunity) - write community string
* [Halt](docs/agent/README.md#halt) - Halt the current agent.
* [ListIpaliases](docs/agent/README.md#listipaliases) - Lists all the additional ipaliases configured for the agent.
* [ListTimerScripts](docs/agent/README.md#listtimerscripts) - List the timer scripts currently running along with the their intervals.
* [New](docs/agent/README.md#new) - Add an agent.
* [PauseNow](docs/agent/README.md#pausenow) - Pause the current agent.
* [ProtocolGetConfig](docs/agent/README.md#protocolgetconfig) - Returns the protocol's configuration.
* [Reload](docs/agent/README.md#reload) - Reload the current agent.
* [Resume](docs/agent/README.md#resume) - Resume the current agent.
* [Save](docs/agent/README.md#save) - Save agent MIB values.
* [SetDelay](docs/agent/README.md#setdelay) - one-way transit delay in msec
* [SetDrops](docs/agent/README.md#setdrops) - drop rate (every N-th PDU)
* [SetHost](docs/agent/README.md#sethost) - host address of the agent.
* [SetInformTimeout](docs/agent/README.md#setinformtimeout) - timeout in seconds for retransmitting INFORM PDUs
* [SetInterface](docs/agent/README.md#setinterface) - network interface card for the agent
* [SetMask](docs/agent/README.md#setmask) - subnet mask of the agent.
* [SetMibs](docs/agent/README.md#setmibs) - set of MIBs, simulations and scenarios
* [SetOiddir](docs/agent/README.md#setoiddir) - MIB directory of the agent.
* [SetOwner](docs/agent/README.md#setowner) - owner of the agent
* [SetPdusize](docs/agent/README.md#setpdusize) - maximum PDU size
* [SetPort](docs/agent/README.md#setport) - port number
* [SetPrivdir](docs/agent/README.md#setprivdir) - private directory of the agent.
* [SetProtocols](docs/agent/README.md#setprotocols) - protocols supported by agent as a comma-separated list
* [SetReadCommunity](docs/agent/README.md#setreadcommunity) - read community string
* [SetStarttime](docs/agent/README.md#setstarttime) - relative start time
* [SetTrace](docs/agent/README.md#settrace) - SNMP PDU tracing
* [SetValidate](docs/agent/README.md#setvalidate) - SNMP SET validation policy
* [SetWriteCommunity](docs/agent/README.md#setwritecommunity) - write community string
* [Start](docs/agent/README.md#start) - Start the current agent.
* [StartIpalias](docs/agent/README.md#startipalias) - Starts an existing ipalias for the agent.
* [StatusIpalias](docs/agent/README.md#statusipalias) - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
* [Stop](docs/agent/README.md#stop) - Show the agent's primary IP address
* [StopIpalias](docs/agent/README.md#stopipalias) - Stops an existing ipalias for the agent.
* [TrapConfigAdd](docs/agent/README.md#trapconfigadd) - Add a trap destination to the set of destinations.
* [TrapConfigDel](docs/agent/README.md#trapconfigdel) - Remove a trap destination from the set of destinations.
* [TrapConfigList](docs/agent/README.md#trapconfiglist) - List the set of trap destinations for this agent instance.
* [TrapList](docs/agent/README.md#traplist) - List the outstanding asynchronous traps for this agent instance.

### [Coap](docs/coap/README.md)

* [ProtocolCoapGetArgs](docs/coap/README.md#protocolcoapgetargs) - Show the agent's COAP argument structure
* [ProtocolCoapGetConfig](docs/coap/README.md#protocolcoapgetconfig) - Show the agent's COAP configuration
* [ProtocolCoapGetStatistics](docs/coap/README.md#protocolcoapgetstatistics) - Show the agent's COAP statistics
* [ProtocolCoapGetStatsHdr](docs/coap/README.md#protocolcoapgetstatshdr) - Show the COAP statistics headers
* [ProtocolCoapGetTrace](docs/coap/README.md#protocolcoapgettrace) - Show the agent's COAP traffic tracing
* [ProtocolCoapSetConfig](docs/coap/README.md#protocolcoapsetconfig) - Set the agent's COAP configuration
* [ProtocolCoapSetTrace](docs/coap/README.md#protocolcoapsettrace) - Set the agent's COAP traffic tracing

### [Dhcp](docs/dhcp/README.md)

* [ProtocolDhcpGetArgs](docs/dhcp/README.md#protocoldhcpgetargs) - Show the agent's DHCP argument structure
* [ProtocolDhcpGetConfig](docs/dhcp/README.md#protocoldhcpgetconfig) - Show the agent's DHCP configuration
* [ProtocolDhcpGetStatistics](docs/dhcp/README.md#protocoldhcpgetstatistics) - Show the agent's DHCP statistics
* [ProtocolDhcpGetStatsHdr](docs/dhcp/README.md#protocoldhcpgetstatshdr) - Show the DHCP statistics headers
* [ProtocolDhcpGetTrace](docs/dhcp/README.md#protocoldhcpgettrace) - Show the agent's DHCP traffic tracing
* [ProtocolDhcpParams](docs/dhcp/README.md#protocoldhcpparams) - Show the parameters configured by the server in its DHCP-OFFER message
* [ProtocolDhcpSetConfig](docs/dhcp/README.md#protocoldhcpsetconfig) - Set the agent's DHCP configuration
* [ProtocolDhcpSetTrace](docs/dhcp/README.md#protocoldhcpsettrace) - Set the agent's DHCP traffic tracing

### [Daemon](docs/daemon/README.md)

* [AddDaemonTimerScript](docs/daemon/README.md#adddaemontimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [CfgLoad](docs/daemon/README.md#cfgload) - Load the lab configuration file file.
* [CfgNew](docs/daemon/README.md#cfgnew) - Clear the lab configuration.
* [CfgSave](docs/daemon/README.md#cfgsave) - Save the lab configuration.
* [CfgSaveas](docs/daemon/README.md#cfgsaveas) - Save the lab configuration in file.
* [DelDaemonTimerScript](docs/daemon/README.md#deldaemontimerscript) - Remove a timer script from the execution list.
* [GetActiveDataList](docs/daemon/README.md#getactivedatalist) - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
* [GetActiveList](docs/daemon/README.md#getactivelist) - The list of {agentnum} that are currently active (running or paused).
* [GetCfgFileChanged](docs/daemon/README.md#getcfgfilechanged) - This predicate indicates if the currently loaded agent configuration file has changed.
* [GetCfgfile](docs/daemon/README.md#getcfgfile) - The currently loaded lab configuration file for the particular user.
* [GetChangedConfigList](docs/daemon/README.md#getchangedconfiglist) - The list of {agentnum} for which a configurable parameter changed.
* [GetChangedStateList](docs/daemon/README.md#getchangedstatelist) - The list of {agentnum state} for which the state changed.
* [GetClients](docs/daemon/README.md#getclients) - The number of clients currently connected to the daemon.
* [GetConfiguredList](docs/daemon/README.md#getconfiguredlist) - The list of {agentnum} that are currently configured.
* [GetDaemonProtocols](docs/daemon/README.md#getdaemonprotocols) - The set of protocols supported by the Simulator.
* [GetInterfaces](docs/daemon/README.md#getinterfaces) - The set of network interfaces that can be used for simulations.
* [GetLast](docs/daemon/README.md#getlast) - The last configured agent instance.
* [GetLog](docs/daemon/README.md#getlog) - The current log file for the Simulator.
* [GetMax](docs/daemon/README.md#getmax) - The maximum number of agent instances.
* [GetNetaddr](docs/daemon/README.md#getnetaddr) - The network address of the host where the MIMIC simulator is running.
* [GetNetdev](docs/daemon/README.md#getnetdev) - The default network device to be used for agent addresses.
* [GetProduct](docs/daemon/README.md#getproduct) - The product number that is licensed.
* [GetReturn](docs/daemon/README.md#getreturn) - The return mode.
* [GetVersion](docs/daemon/README.md#getversion) - The version of the MIMIC command interface.
* [ListDaemonTimerScripts](docs/daemon/README.md#listdaemontimerscripts) - List the timer scripts currently running along with the their intervals.
* [MgetInfo](docs/daemon/README.md#mgetinfo) - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
* [SetLog](docs/daemon/README.md#setlog) - The current log file for the Simulator.
* [SetNetdev](docs/daemon/README.md#setnetdev) - The network address of the host where the MIMIC simulator is running.
* [StartAllAgents](docs/daemon/README.md#startallagents) - Start MIMIC.
* [StopAllAgents](docs/daemon/README.md#stopallagents) - Stop MIMIC.
* [StoreExists](docs/daemon/README.md#storeexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [StoreGet](docs/daemon/README.md#storeget) - Fetches the value associated with a variable.
* [StoreList](docs/daemon/README.md#storelist) - This command will return the list of variables in the said scope.
* [StoreLreplace](docs/daemon/README.md#storelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [StorePersists](docs/daemon/README.md#storepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [StoreSave](docs/daemon/README.md#storesave) - This operation flushes all global objects which need to be made persistent to disk.
* [StoreSet](docs/daemon/README.md#storeset) - Set the variable store for the global storage
* [StoreUnset](docs/daemon/README.md#storeunset) - Deletes a variable which is currently defined.
* [Terminate](docs/daemon/README.md#terminate) - Terminate the MIMIC daemon.

### [Ipmi](docs/ipmi/README.md)

* [ProtocolIpmiGetArgs](docs/ipmi/README.md#protocolipmigetargs) - Show the agent's IPMI argument structure
* [ProtocolIpmiGetAttr](docs/ipmi/README.md#protocolipmigetattr) - Show the outgoing message's attributes
* [ProtocolIpmiGetConfig](docs/ipmi/README.md#protocolipmigetconfig) - Show the agent's IPMI configuration
* [ProtocolIpmiGetStatistics](docs/ipmi/README.md#protocolipmigetstatistics) - Show the agent's IPMI statistics
* [ProtocolIpmiGetStatsHdr](docs/ipmi/README.md#protocolipmigetstatshdr) - Show the IPMI statistics headers
* [ProtocolIpmiGetTrace](docs/ipmi/README.md#protocolipmigettrace) - Show the agent's IPMI traffic tracing
* [ProtocolIpmiSetAttr](docs/ipmi/README.md#protocolipmisetattr) - Set the outgoing message's attributes
* [ProtocolIpmiSetConfig](docs/ipmi/README.md#protocolipmisetconfig) - Set the agent's IPMI configuration
* [ProtocolIpmiSetTrace](docs/ipmi/README.md#protocolipmisettrace) - Set the agent's IPMI traffic tracing

### [Mqtt](docs/mqtt/README.md)

* [ProtocolMqttClientGetProtstate](docs/mqtt/README.md#protocolmqttclientgetprotstate) - Show the agent's MQTT TCP connection state
* [ProtocolMqttClientGetState](docs/mqtt/README.md#protocolmqttclientgetstate) - Show the agent's MQTT state
* [ProtocolMqttClientMessageCard](docs/mqtt/README.md#protocolmqttclientmessagecard) - Show the agent's current messages' cardinality
* [ProtocolMqttClientMessageGet](docs/mqtt/README.md#protocolmqttclientmessageget) - Show the agent's message attributes
* [ProtocolMqttClientMessageSet](docs/mqtt/README.md#protocolmqttclientmessageset) - Set the agent's message attributes
* [ProtocolMqttClientResubscribe](docs/mqtt/README.md#protocolmqttclientresubscribe) - Restart receiving messages from a subcription of the agent
* [ProtocolMqttClientRuntimeAbort](docs/mqtt/README.md#protocolmqttclientruntimeabort) - Abort agent's MQTT TCP session without sending DISCONNECT command
* [ProtocolMqttClientRuntimeConnect](docs/mqtt/README.md#protocolmqttclientruntimeconnect) - Start agent's MQTT TCP session
* [ProtocolMqttClientRuntimeDisconnect](docs/mqtt/README.md#protocolmqttclientruntimedisconnect) - Disconnect agent's MQTT TCP session by sending DISCONNECT command
* [ProtocolMqttClientSetBroker](docs/mqtt/README.md#protocolmqttclientsetbroker) - Set the agent's MQTT TCP connection target broker
* [ProtocolMqttClientSetCleansession](docs/mqtt/README.md#protocolmqttclientsetcleansession) - Set the agent's MQTT session
* [ProtocolMqttClientSetClientid](docs/mqtt/README.md#protocolmqttclientsetclientid) - Set the agent's MQTT client ID
* [ProtocolMqttClientSetKeepalive](docs/mqtt/README.md#protocolmqttclientsetkeepalive) - Set the agent's MQTT TCP keepalive
* [ProtocolMqttClientSetOnDisconnect](docs/mqtt/README.md#protocolmqttclientsetondisconnect) - Set the agent's MQTT disconnection action
* [ProtocolMqttClientSetPassword](docs/mqtt/README.md#protocolmqttclientsetpassword) - Set the agent's MQTT client password
* [ProtocolMqttClientSetPort](docs/mqtt/README.md#protocolmqttclientsetport) - Set the agent's MQTT TCP connection target port
* [ProtocolMqttClientSetUsername](docs/mqtt/README.md#protocolmqttclientsetusername) - Set the agent's MQTT client username
* [ProtocolMqttClientSetWillmsg](docs/mqtt/README.md#protocolmqttclientsetwillmsg) - Set the agent's MQTT client's will
* [ProtocolMqttClientSetWillqos](docs/mqtt/README.md#protocolmqttclientsetwillqos) - Set the agent's MQTT will message's QOS field
* [ProtocolMqttClientSetWillretain](docs/mqtt/README.md#protocolmqttclientsetwillretain) - Set the agent's MQTT retained will
* [ProtocolMqttClientSetWilltopic](docs/mqtt/README.md#protocolmqttclientsetwilltopic) - Set the agent's MQTT client will's topic
* [ProtocolMqttClientSubscribeCard](docs/mqtt/README.md#protocolmqttclientsubscribecard) - Show the agent's current subscriptions' cardinality
* [ProtocolMqttClientSubscribeGet](docs/mqtt/README.md#protocolmqttclientsubscribeget) - Show the agent's subscription attributes
* [ProtocolMqttClientSubscribeSet](docs/mqtt/README.md#protocolmqttclientsubscribeset) - Set the agent's subscribe attributes
* [ProtocolMqttClientUnsubscribe](docs/mqtt/README.md#protocolmqttclientunsubscribe) - Stops receiving messages from a subcription of the agent
* [ProtocolMqttGetArgs](docs/mqtt/README.md#protocolmqttgetargs) - Show the agent's MQTT argument structure
* [ProtocolMqttGetConfig](docs/mqtt/README.md#protocolmqttgetconfig) - Show the agent's MQTT configuration
* [ProtocolMqttGetStatistics](docs/mqtt/README.md#protocolmqttgetstatistics) - Show the agent's MQTT statistics
* [ProtocolMqttGetStatsHdr](docs/mqtt/README.md#protocolmqttgetstatshdr) - Show the MQTT statistics headers
* [ProtocolMqttGetTrace](docs/mqtt/README.md#protocolmqttgettrace) - Show the agent's MQTT traffic tracing
* [ProtocolMqttSetConfig](docs/mqtt/README.md#protocolmqttsetconfig) - Set the agent's MQTT configuration
* [ProtocolMqttSetTrace](docs/mqtt/README.md#protocolmqttsettrace) - Set the agent's MQTT traffic tracing

### [Netflow](docs/netflow/README.md)

* [ProtocolNetflowChangeAttr](docs/netflow/README.md#protocolnetflowchangeattr) - Change NETFLOW export attributes
* [ProtocolNetflowChangeDfs](docs/netflow/README.md#protocolnetflowchangedfs) - Change NETFLOW data export interval
* [ProtocolNetflowChangeTfs](docs/netflow/README.md#protocolnetflowchangetfs) - Change NETFLOW template export interval
* [ProtocolNetflowGetArgs](docs/netflow/README.md#protocolnetflowgetargs) - Show the agent's NETFLOW argument structure
* [ProtocolNetflowGetConfig](docs/netflow/README.md#protocolnetflowgetconfig) - Show the agent's NETFLOW configuration
* [ProtocolNetflowGetStatistics](docs/netflow/README.md#protocolnetflowgetstatistics) - Show the agent's NETFLOW statistics
* [ProtocolNetflowGetStatsHdr](docs/netflow/README.md#protocolnetflowgetstatshdr) - Show the NETFLOW statistics headers
* [ProtocolNetflowGetTrace](docs/netflow/README.md#protocolnetflowgettrace) - Show the agent's NETFLOW traffic tracing
* [ProtocolNetflowHalt](docs/netflow/README.md#protocolnetflowhalt) - Halt NETFLOW traffic
* [ProtocolNetflowList](docs/netflow/README.md#protocolnetflowlist) - Show list of NETFLOW exports
* [ProtocolNetflowReload](docs/netflow/README.md#protocolnetflowreload) - Reload NETFLOW configuration before resuming traffic
* [ProtocolNetflowResume](docs/netflow/README.md#protocolnetflowresume) - Resuming traffic
* [ProtocolNetflowSetCollector](docs/netflow/README.md#protocolnetflowsetcollector) - Swap NETFLOW collector
* [ProtocolNetflowSetConfig](docs/netflow/README.md#protocolnetflowsetconfig) - Set the agent's NETFLOW configuration
* [ProtocolNetflowSetFileName](docs/netflow/README.md#protocolnetflowsetfilename) - Swap NETFLOW configuration file
* [ProtocolNetflowSetTrace](docs/netflow/README.md#protocolnetflowsettrace) - Set the agent's NETFLOW traffic tracing

### [Proxy](docs/proxy/README.md)

* [ProtocolProxyGetArgs](docs/proxy/README.md#protocolproxygetargs) - Show the agent's PROXY argument structure
* [ProtocolProxyGetConfig](docs/proxy/README.md#protocolproxygetconfig) - Show the agent's PROXY configuration
* [ProtocolProxyGetStatistics](docs/proxy/README.md#protocolproxygetstatistics) - Show the agent's PROXY statistics
* [ProtocolProxyGetStatsHdr](docs/proxy/README.md#protocolproxygetstatshdr) - Show the PROXY statistics headers
* [ProtocolProxyGetTrace](docs/proxy/README.md#protocolproxygettrace) - Show the agent's PROXY traffic tracing
* [ProtocolProxyPortAdd](docs/proxy/README.md#protocolproxyportadd) - Add individual proxy target on the agent and the simulator host
* [ProtocolProxyPortIsstarted](docs/proxy/README.md#protocolproxyportisstarted) - Check individual target
* [ProtocolProxyPortList](docs/proxy/README.md#protocolproxyportlist) - List all proxy targets
* [ProtocolProxyPortRemove](docs/proxy/README.md#protocolproxyportremove) - Remove individual proxy target on the agent and the simulator host
* [ProtocolProxyPortStart](docs/proxy/README.md#protocolproxyportstart) - Start additional target
* [ProtocolProxyPortStop](docs/proxy/README.md#protocolproxyportstop) - Stop additional target
* [ProtocolProxySetConfig](docs/proxy/README.md#protocolproxysetconfig) - Set the agent's PROXY configuration
* [ProtocolProxySetTrace](docs/proxy/README.md#protocolproxysettrace) - Set the agent's PROXY traffic tracing

### [Sflow](docs/sflow/README.md)

* [ProtocolSflowGetArgs](docs/sflow/README.md#protocolsflowgetargs) - Show the agent's SFLOW argument structure
* [ProtocolSflowGetConfig](docs/sflow/README.md#protocolsflowgetconfig) - Show the agent's SFLOW configuration
* [ProtocolSflowGetStatistics](docs/sflow/README.md#protocolsflowgetstatistics) - Show the agent's SFLOW statistics
* [ProtocolSflowGetStatsHdr](docs/sflow/README.md#protocolsflowgetstatshdr) - Show the SFLOW statistics headers
* [ProtocolSflowGetTrace](docs/sflow/README.md#protocolsflowgettrace) - Show the agent's SFLOW traffic tracing
* [ProtocolSflowHalt](docs/sflow/README.md#protocolsflowhalt) - Halt SFLOW traffic
* [ProtocolSflowReload](docs/sflow/README.md#protocolsflowreload) - Reload SFLOW configuration before resuming traffic
* [ProtocolSflowResume](docs/sflow/README.md#protocolsflowresume) - Resuming traffic
* [ProtocolSflowSetConfig](docs/sflow/README.md#protocolsflowsetconfig) - Set the agent's SFLOW configuration
* [ProtocolSflowSetTrace](docs/sflow/README.md#protocolsflowsettrace) - Set the agent's SFLOW traffic tracing

### [Snmptcp](docs/snmptcp/README.md)

* [ProtocolSnmptcpGetArgs](docs/snmptcp/README.md#protocolsnmptcpgetargs) - Show the agent's SNMPTCP argument structure
* [ProtocolSnmptcpGetConfig](docs/snmptcp/README.md#protocolsnmptcpgetconfig) - Show the agent's SNMPTCP configuration
* [ProtocolSnmptcpGetStatistics](docs/snmptcp/README.md#protocolsnmptcpgetstatistics) - Show the agent's SNMPTCP statistics
* [ProtocolSnmptcpGetStatsHdr](docs/snmptcp/README.md#protocolsnmptcpgetstatshdr) - Show the SNMPTCP statistics headers
* [ProtocolSnmptcpGetTrace](docs/snmptcp/README.md#protocolsnmptcpgettrace) - Show the agent's SNMPTCP traffic tracing
* [ProtocolSnmptcpIpaliasDisable](docs/snmptcp/README.md#protocolsnmptcpipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [ProtocolSnmptcpIpaliasEnable](docs/snmptcp/README.md#protocolsnmptcpipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [ProtocolSnmptcpIpaliasIsenabled](docs/snmptcp/README.md#protocolsnmptcpipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [ProtocolSnmptcpIpaliasList](docs/snmptcp/README.md#protocolsnmptcpipaliaslist) - List all IP aliases on the agent and the simulator host
* [ProtocolSnmptcpSetConfig](docs/snmptcp/README.md#protocolsnmptcpsetconfig) - Set the agent's SNMPTCP configuration
* [ProtocolSnmptcpSetTrace](docs/snmptcp/README.md#protocolsnmptcpsettrace) - Set the agent's SNMPTCP traffic tracing

### [SNMPv3](docs/snmpv3/README.md)

* [ProtocolSnmpv3AccessAdd](docs/snmpv3/README.md#protocolsnmpv3accessadd) - Adds a new access entry with the specified parameters.
* [ProtocolSnmpv3AccessClear](docs/snmpv3/README.md#protocolsnmpv3accessclear) - Clears all access entries.
* [ProtocolSnmpv3AccessDel](docs/snmpv3/README.md#protocolsnmpv3accessdel) - Deletes the specified access entry.
* [ProtocolSnmpv3AccessList](docs/snmpv3/README.md#protocolsnmpv3accesslist) - Returns the current acccess entries as an array of strings.
* [ProtocolSnmpv3GetConfig](docs/snmpv3/README.md#protocolsnmpv3getconfig) - Returns the SNMPv3 configuration.
* [ProtocolSnmpv3GetContextEngineid](docs/snmpv3/README.md#protocolsnmpv3getcontextengineid) - Retrieves the contextEngineID for the agent instance.
* [ProtocolSnmpv3GetEngineboots](docs/snmpv3/README.md#protocolsnmpv3getengineboots) - Retrieves the number of times the agent has been restarted.
* [ProtocolSnmpv3GetEngineid](docs/snmpv3/README.md#protocolsnmpv3getengineid) - For started agents, retrieves the current engineID in use by the snmpv3 module.
* [ProtocolSnmpv3GetEnginetime](docs/snmpv3/README.md#protocolsnmpv3getenginetime) - Retrieves the time in seconds for which the agent has been running.
* [ProtocolSnmpv3GroupAdd](docs/snmpv3/README.md#protocolsnmpv3groupadd) - Adds a new group entry with the specified parameters.
* [ProtocolSnmpv3GroupClear](docs/snmpv3/README.md#protocolsnmpv3groupclear) - Clears all group entries.
* [ProtocolSnmpv3GroupDel](docs/snmpv3/README.md#protocolsnmpv3groupdel) - Deletes the specified group entry.
* [ProtocolSnmpv3GroupList](docs/snmpv3/README.md#protocolsnmpv3grouplist) - Returns the current group entries as an array of strings.
* [ProtocolSnmpv3SetConfig](docs/snmpv3/README.md#protocolsnmpv3setconfig) - Changes the SNMPv3 configuration.
* [ProtocolSnmpv3UserAdd](docs/snmpv3/README.md#protocolsnmpv3useradd) - Adds a new user entry with the specified parameters.
* [ProtocolSnmpv3UserClear](docs/snmpv3/README.md#protocolsnmpv3userclear) - Clears all user entries.
* [ProtocolSnmpv3UserDel](docs/snmpv3/README.md#protocolsnmpv3userdel) - Deletes the specified user entry.
* [ProtocolSnmpv3UserList](docs/snmpv3/README.md#protocolsnmpv3userlist) - Returns the current user entries as a Tcl list.
* [ProtocolSnmpv3UsmSave](docs/snmpv3/README.md#protocolsnmpv3usmsave) - Saves current user settings in the currently loaded USM config file.
* [ProtocolSnmpv3UsmSaveas](docs/snmpv3/README.md#protocolsnmpv3usmsaveas) - Saves current user settings in the specified USM config file.
* [ProtocolSnmpv3VacmSave](docs/snmpv3/README.md#protocolsnmpv3vacmsave) - Saves current group, access, view settings in the currently loaded VACM config file.
* [ProtocolSnmpv3VacmSaveas](docs/snmpv3/README.md#protocolsnmpv3vacmsaveas) - Saves current group, access, view settings in the specified VACM config file.
* [ProtocolSnmpv3ViewAdd](docs/snmpv3/README.md#protocolsnmpv3viewadd) - Adds a new view entry with the specified parameters.
* [ProtocolSnmpv3ViewClear](docs/snmpv3/README.md#protocolsnmpv3viewclear) - Clears all view entries.
* [ProtocolSnmpv3ViewDel](docs/snmpv3/README.md#protocolsnmpv3viewdel) - Deletes the specified view entry.
* [ProtocolSnmpv3ViewList](docs/snmpv3/README.md#protocolsnmpv3viewlist) - Returns the current view entries as an array of strings.

### [SSH](docs/ssh/README.md)

* [ProtocolSSHGetArgs](docs/ssh/README.md#protocolsshgetargs) - Show the agent's SSH argument structure
* [ProtocolSSHGetConfig](docs/ssh/README.md#protocolsshgetconfig) - Show the agent's SSH configuration
* [ProtocolSSHGetStatistics](docs/ssh/README.md#protocolsshgetstatistics) - Show the agent's SSH statistics
* [ProtocolSSHGetStatsHdr](docs/ssh/README.md#protocolsshgetstatshdr) - Show the SSH statistics headers
* [ProtocolSSHGetTrace](docs/ssh/README.md#protocolsshgettrace) - Show the agent's SSH traffic tracing
* [ProtocolSSHIpaliasDisable](docs/ssh/README.md#protocolsshipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [ProtocolSSHIpaliasEnable](docs/ssh/README.md#protocolsshipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [ProtocolSSHIpaliasIsenabled](docs/ssh/README.md#protocolsshipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [ProtocolSSHIpaliasList](docs/ssh/README.md#protocolsshipaliaslist) - List all IP aliases on the agent and the simulator host
* [ProtocolSSHSetConfig](docs/ssh/README.md#protocolsshsetconfig) - Set the agent's SSH configuration
* [ProtocolSSHSetTrace](docs/ssh/README.md#protocolsshsettrace) - Set the agent's SSH traffic tracing

### [Syslog](docs/syslog/README.md)

* [ProtocolSyslogGetArgs](docs/syslog/README.md#protocolsysloggetargs) - Show the agent's SYSLOG argument structure
* [ProtocolSyslogGetAttr](docs/syslog/README.md#protocolsysloggetattr) - Show the outgoing message's attributes
* [ProtocolSyslogGetConfig](docs/syslog/README.md#protocolsysloggetconfig) - Show the agent's SYSLOG configuration
* [ProtocolSyslogGetStatistics](docs/syslog/README.md#protocolsysloggetstatistics) - Show the agent's SYSLOG statistics
* [ProtocolSyslogGetStatsHdr](docs/syslog/README.md#protocolsysloggetstatshdr) - Show the SYSLOG statistics headers
* [ProtocolSyslogGetTrace](docs/syslog/README.md#protocolsysloggettrace) - Show the agent's SYSLOG traffic tracing
* [ProtocolSyslogSend](docs/syslog/README.md#protocolsyslogsend) - Set the agent's SYSLOG traffic tracing
* [ProtocolSyslogSetAttr](docs/syslog/README.md#protocolsyslogsetattr) - Set the outgoing message's attributes
* [ProtocolSyslogSetConfig](docs/syslog/README.md#protocolsyslogsetconfig) - Set the agent's SYSLOG configuration
* [ProtocolSyslogSetTrace](docs/syslog/README.md#protocolsyslogsettrace) - Set the agent's SYSLOG traffic tracing

### [Telnet](docs/telnet/README.md)

* [ProtocolTelnetConnectionLogon](docs/telnet/README.md#protocoltelnetconnectionlogon) - Changes the connection's current logon.
* [ProtocolTelnetConnectionRequest](docs/telnet/README.md#protocoltelnetconnectionrequest) - Executes the command asynchronously .
* [ProtocolTelnetConnectionSignal](docs/telnet/README.md#protocoltelnetconnectionsignal) - Triggers the asynchronous signal event with the specified signal name
* [ProtocolTelnetGetArgs](docs/telnet/README.md#protocoltelnetgetargs) - Show the agent's TELNET argument structure
* [ProtocolTelnetGetConfig](docs/telnet/README.md#protocoltelnetgetconfig) - Show the agent's TELNET configuration
* [ProtocolTelnetGetStatistics](docs/telnet/README.md#protocoltelnetgetstatistics) - Show the agent's TELNET statistics
* [ProtocolTelnetGetStatsHdr](docs/telnet/README.md#protocoltelnetgetstatshdr) - Show the TELNET statistics headers
* [ProtocolTelnetGetTrace](docs/telnet/README.md#protocoltelnetgettrace) - Show the agent's TELNET traffic tracing
* [ProtocolTelnetIpaliasDisable](docs/telnet/README.md#protocoltelnetipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [ProtocolTelnetIpaliasEnable](docs/telnet/README.md#protocoltelnetipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [ProtocolTelnetIpaliasIsenabled](docs/telnet/README.md#protocoltelnetipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [ProtocolTelnetIpaliasList](docs/telnet/README.md#protocoltelnetipaliaslist) - List all IP aliases on the agent and the simulator host
* [ProtocolTelnetServerGetConnections](docs/telnet/README.md#protocoltelnetservergetconnections) - Show the agent's TELNET connections
* [ProtocolTelnetServerGetKeymap](docs/telnet/README.md#protocoltelnetservergetkeymap) - Show the agent's TELNET keymap file name
* [ProtocolTelnetServerGetRulesdb](docs/telnet/README.md#protocoltelnetservergetrulesdb) - Show the agent's TELNET rules db file name
* [ProtocolTelnetServerGetState](docs/telnet/README.md#protocoltelnetservergetstate) - Show the agent's TELNET server state
* [ProtocolTelnetServerGetUserdb](docs/telnet/README.md#protocoltelnetservergetuserdb) - Show the agent's TELNET user db file name
* [ProtocolTelnetServerGetUsers](docs/telnet/README.md#protocoltelnetservergetusers) - Show the agent's TELNET users
* [ProtocolTelnetSetConfig](docs/telnet/README.md#protocoltelnetsetconfig) - Set the agent's TELNET configuration
* [ProtocolTelnetSetTrace](docs/telnet/README.md#protocoltelnetsettrace) - Set the agent's TELNET traffic tracing

### [Tftp](docs/tftp/README.md)

* [ProtocolTftpGetArgs](docs/tftp/README.md#protocoltftpgetargs) - Show the agent's TFTP argument structure
* [ProtocolTftpGetConfig](docs/tftp/README.md#protocoltftpgetconfig) - Show the agent's TFTP configuration
* [ProtocolTftpGetStatistics](docs/tftp/README.md#protocoltftpgetstatistics) - Show the agent's TFTP statistics
* [ProtocolTftpGetStatsHdr](docs/tftp/README.md#protocoltftpgetstatshdr) - Show the TFTP statistics headers
* [ProtocolTftpGetTrace](docs/tftp/README.md#protocoltftpgettrace) - Show the agent's TFTP traffic tracing
* [ProtocolTftpSessionGetParameter](docs/tftp/README.md#protocoltftpsessiongetparameter) - Show a parameter of a TFTP sesssion
* [ProtocolTftpSessionRead](docs/tftp/README.md#protocoltftpsessionread) - Create a read session to download srcfile from server
* [ProtocolTftpSessionSetParameter](docs/tftp/README.md#protocoltftpsessionsetparameter) - Set a parameter of a TFTP sesssion
* [ProtocolTftpSessionStart](docs/tftp/README.md#protocoltftpsessionstart) - Start a TFTP sesssion
* [ProtocolTftpSessionStatus](docs/tftp/README.md#protocoltftpsessionstatus) - Check a TFTP sesssion's status
* [ProtocolTftpSessionStop](docs/tftp/README.md#protocoltftpsessionstop) - Stop a TFTP sesssion
* [ProtocolTftpSessionWrite](docs/tftp/README.md#protocoltftpsessionwrite) - Create a read session to upload srcfile to server
* [ProtocolTftpSetConfig](docs/tftp/README.md#protocoltftpsetconfig) - Set the agent's TFTP configuration
* [ProtocolTftpSetTrace](docs/tftp/README.md#protocoltftpsettrace) - Set the agent's TFTP traffic tracing

### [Tod](docs/tod/README.md)

* [ProtocolTodGetArgs](docs/tod/README.md#protocoltodgetargs) - Show the agent's TOD argument structure
* [ProtocolTodGetConfig](docs/tod/README.md#protocoltodgetconfig) - Show the agent's TOD configuration
* [ProtocolTodGetStatistics](docs/tod/README.md#protocoltodgetstatistics) - Show the agent's TOD statistics
* [ProtocolTodGetStatsHdr](docs/tod/README.md#protocoltodgetstatshdr) - Show the TOD statistics headers
* [ProtocolTodGetTrace](docs/tod/README.md#protocoltodgettrace) - Show the agent's TOD traffic tracing
* [ProtocolTodGettime](docs/tod/README.md#protocoltodgettime) - Retrieve TOD time
* [ProtocolTodSetConfig](docs/tod/README.md#protocoltodsetconfig) - Set the agent's TOD configuration
* [ProtocolTodSetTrace](docs/tod/README.md#protocoltodsettrace) - Set the agent's TOD traffic tracing

### [Valuespace](docs/valuespace/README.md)

* [Add](docs/valuespace/README.md#add) - Add an entry to a table.
* [EvalValue](docs/valuespace/README.md#evalvalue) - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
* [GetInfo](docs/valuespace/README.md#getinfo) - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
* [GetInstances](docs/valuespace/README.md#getinstances) - Display the MIB object instances for the specified object.
* [GetMib](docs/valuespace/README.md#getmib) - Return the MIB that defines the specified object.
* [GetName](docs/valuespace/README.md#getname) - Return the symbolic name of the specified object identifier.
* [GetObjects](docs/valuespace/README.md#getobjects) - Display the MIB objects below the current position
* [GetOid](docs/valuespace/README.md#getoid) - Return the numeric OID of the specified object.
* [GetState](docs/valuespace/README.md#getstate) - Get the state of a MIB object object.
* [GetValue](docs/valuespace/README.md#getvalue) - Get a variable in the Value Space.
* [GetVariables](docs/valuespace/README.md#getvariables) - Display the variables for the specified instance instance for the specified MIB object object
* [MsetValue](docs/valuespace/README.md#msetvalue) - Set multiple variables in the Value Space.
* [MunsetValue](docs/valuespace/README.md#munsetvalue) - Unset multiple variables in the Value Space
* [Remove](docs/valuespace/README.md#remove) - Remove an entry from a table.
* [SetState](docs/valuespace/README.md#setstate) - Set the state of a MIB object object
* [SetValue](docs/valuespace/README.md#setvalue) - Set a variable in the Value Space.
* [SplitOid](docs/valuespace/README.md#splitoid) - Split the numerical OID into the object OID and instance OID.
* [UnsetValue](docs/valuespace/README.md#unsetvalue) - Unset a variable in the Value Space in order to free its memory.

### [Web](docs/web/README.md)

* [ProtocolWebGetArgs](docs/web/README.md#protocolwebgetargs) - Show the agent's WEB argument structure
* [ProtocolWebGetConfig](docs/web/README.md#protocolwebgetconfig) - Show the agent's WEB configuration
* [ProtocolWebGetStatistics](docs/web/README.md#protocolwebgetstatistics) - Show the agent's WEB statistics
* [ProtocolWebGetStatsHdr](docs/web/README.md#protocolwebgetstatshdr) - Show the WEB statistics headers
* [ProtocolWebGetTrace](docs/web/README.md#protocolwebgettrace) - Show the agent's WEB traffic tracing
* [ProtocolWebPortAdd](docs/web/README.md#protocolwebportadd) - Add the agent's WEB port
* [ProtocolWebPortExists](docs/web/README.md#protocolwebportexists) - Show the agent's WEB port
* [ProtocolWebPortRemove](docs/web/README.md#protocolwebportremove) - Remove the agent's WEB port
* [ProtocolWebPortSet](docs/web/README.md#protocolwebportset) - Set the agent's WEB port attribute
* [ProtocolWebPortStart](docs/web/README.md#protocolwebportstart) - Start the agent's WEB port
* [ProtocolWebPortStop](docs/web/README.md#protocolwebportstop) - Stop the agent's WEB port
* [ProtocolWebSetConfig](docs/web/README.md#protocolwebsetconfig) - Set the agent's WEB configuration
* [ProtocolWebSetTrace](docs/web/README.md#protocolwebsettrace) - Set the agent's WEB traffic tracing
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
