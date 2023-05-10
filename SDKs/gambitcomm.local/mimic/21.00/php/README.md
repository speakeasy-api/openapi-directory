# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccessAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessAddRequest();
    $request->agents = 'corrupti';
    $request->mask = 'provident';
    $request->user = 'distinctio';

    $response = $sdk->access->accessAdd($request);

    if ($response->accessAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [access](docs/access/README.md)

* [accessAdd](docs/access/README.md#accessadd) - Adds/Overwrites the user entry in the access control database.
* [accessDel](docs/access/README.md#accessdel) - Clears a users entry from access control database.
* [accessGetAcldb](docs/access/README.md#accessgetacldb) - Returns the current access control database in use.
* [accessGetAdmindir](docs/access/README.md#accessgetadmindir) - Returns the current admin directory.
* [accessGetAdminuser](docs/access/README.md#accessgetadminuser) - Returns the current administrator.
* [accessGetEnabled](docs/access/README.md#accessgetenabled) - Returns the state of access control checking.
* [accessList](docs/access/README.md#accesslist) - Returns an array of entries.
* [accessLoad](docs/access/README.md#accessload) - Loads the specified file for access control data.
* [accessSave](docs/access/README.md#accesssave) - Saves current access control data in specified file.
* [accessSetAcldb](docs/access/README.md#accesssetacldb) - Allows setting the name of the current access control database.
* [accessSetEnabled](docs/access/README.md#accesssetenabled) - Allows the user to enable/disable the access control check.

### [agent](docs/agent/README.md)

* [addIpalias](docs/agent/README.md#addipalias) - Adds a new ipalias for the agent.
* [addTimerScript](docs/agent/README.md#addtimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [agentRemove](docs/agent/README.md#agentremove) - Remove the current agent.
* [agentStoreCopy](docs/agent/README.md#agentstorecopy) - This command copies the variable store from the other agent to this agent.
* [agentStoreExists](docs/agent/README.md#agentstoreexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [agentStoreGet](docs/agent/README.md#agentstoreget) - Fetches the value associated with a variable.
* [agentStoreList](docs/agent/README.md#agentstorelist) - This command will return the list of variables in the said scope.
* [agentStoreLreplace](docs/agent/README.md#agentstorelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [agentStorePersists](docs/agent/README.md#agentstorepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [agentStoreSet](docs/agent/README.md#agentstoreset) - These commands allow the creation of a new variable, or changing an existing value.
* [agentStoreUnset](docs/agent/README.md#agentstoreunset) - Deletes a variable which is currently defined.
* [delIpalias](docs/agent/README.md#delipalias) - Deletes an existing ipalias from the agent.
* [delTimerScript](docs/agent/README.md#deltimerscript) - Remove a timer script from the execution list.
* [fromAdd](docs/agent/README.md#fromadd) - Add a source address that the agent will accept messages from.
* [fromDel](docs/agent/README.md#fromdel) - delete a source address that the agent will accept messages from.
* [fromList](docs/agent/README.md#fromlist) - List the source addresses that the agent will accept messages from.
* [getAgentState](docs/agent/README.md#getagentstate) - current running state of the agent
* [getChanged](docs/agent/README.md#getchanged) - has the agent value space changed?
* [getConfigChanged](docs/agent/README.md#getconfigchanged) - has the lab configuration changed?
* [getDelay](docs/agent/README.md#getdelay) - one-way transit delay in msec.
* [getDrops](docs/agent/README.md#getdrops) - drop rate (every N-th PDU). 0 means no drops.
* [getHost](docs/agent/README.md#gethost) - host address of the agent.
* [getInformTimeout](docs/agent/README.md#getinformtimeout) - timeout in seconds for retransmitting INFORM PDUs.
* [getInterface](docs/agent/README.md#getinterface) - network interface card for the agent.
* [getMask](docs/agent/README.md#getmask) - subnet mask of the agent.
* [getMibs](docs/agent/README.md#getmibs) - set of MIBs, simulations and scenarios
* [getNumberStarts](docs/agent/README.md#getnumberstarts) - number of starts for the agent.
* [getOiddir](docs/agent/README.md#getoiddir) - MIB directory of the agent.
* [getOwner](docs/agent/README.md#getowner) - owner of the agent.
* [getPdusize](docs/agent/README.md#getpdusize) - maximum PDU size.
* [getPort](docs/agent/README.md#getport) - port number
* [getPrivdir](docs/agent/README.md#getprivdir) - private directory of the agent.
* [getProtocols](docs/agent/README.md#getprotocols) - protocols supported by agent
* [getReadCommunity](docs/agent/README.md#getreadcommunity) - read community string
* [getScen](docs/agent/README.md#getscen) - first scenario name
* [getSim](docs/agent/README.md#getsim) - first simulation name
* [getStarttime](docs/agent/README.md#getstarttime) - relative start time
* [getStateChanged](docs/agent/README.md#getstatechanged) - has the agent state changed?
* [getStatistics](docs/agent/README.md#getstatistics) - current statistics of the agent instance
* [getTrace](docs/agent/README.md#gettrace) - SNMP PDU tracing
* [getValidate](docs/agent/README.md#getvalidate) - SNMP SET validation policy.
* [getWriteCommunity](docs/agent/README.md#getwritecommunity) - write community string
* [halt](docs/agent/README.md#halt) - Halt the current agent.
* [listIpaliases](docs/agent/README.md#listipaliases) - Lists all the additional ipaliases configured for the agent.
* [listTimerScripts](docs/agent/README.md#listtimerscripts) - List the timer scripts currently running along with the their intervals.
* [new](docs/agent/README.md#new) - Add an agent.
* [pauseNow](docs/agent/README.md#pausenow) - Pause the current agent.
* [protocolGetConfig](docs/agent/README.md#protocolgetconfig) - Returns the protocol's configuration.
* [reload](docs/agent/README.md#reload) - Reload the current agent.
* [resume](docs/agent/README.md#resume) - Resume the current agent.
* [save](docs/agent/README.md#save) - Save agent MIB values.
* [setDelay](docs/agent/README.md#setdelay) - one-way transit delay in msec
* [setDrops](docs/agent/README.md#setdrops) - drop rate (every N-th PDU)
* [setHost](docs/agent/README.md#sethost) - host address of the agent.
* [setInformTimeout](docs/agent/README.md#setinformtimeout) - timeout in seconds for retransmitting INFORM PDUs
* [setInterface](docs/agent/README.md#setinterface) - network interface card for the agent
* [setMask](docs/agent/README.md#setmask) - subnet mask of the agent.
* [setMibs](docs/agent/README.md#setmibs) - set of MIBs, simulations and scenarios
* [setOiddir](docs/agent/README.md#setoiddir) - MIB directory of the agent.
* [setOwner](docs/agent/README.md#setowner) - owner of the agent
* [setPdusize](docs/agent/README.md#setpdusize) - maximum PDU size
* [setPort](docs/agent/README.md#setport) - port number
* [setPrivdir](docs/agent/README.md#setprivdir) - private directory of the agent.
* [setProtocols](docs/agent/README.md#setprotocols) - protocols supported by agent as a comma-separated list
* [setReadCommunity](docs/agent/README.md#setreadcommunity) - read community string
* [setStarttime](docs/agent/README.md#setstarttime) - relative start time
* [setTrace](docs/agent/README.md#settrace) - SNMP PDU tracing
* [setValidate](docs/agent/README.md#setvalidate) - SNMP SET validation policy
* [setWriteCommunity](docs/agent/README.md#setwritecommunity) - write community string
* [start](docs/agent/README.md#start) - Start the current agent.
* [startIpalias](docs/agent/README.md#startipalias) - Starts an existing ipalias for the agent.
* [statusIpalias](docs/agent/README.md#statusipalias) - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
* [stop](docs/agent/README.md#stop) - Show the agent's primary IP address
* [stopIpalias](docs/agent/README.md#stopipalias) - Stops an existing ipalias for the agent.
* [trapConfigAdd](docs/agent/README.md#trapconfigadd) - Add a trap destination to the set of destinations.
* [trapConfigDel](docs/agent/README.md#trapconfigdel) - Remove a trap destination from the set of destinations.
* [trapConfigList](docs/agent/README.md#trapconfiglist) - List the set of trap destinations for this agent instance.
* [trapList](docs/agent/README.md#traplist) - List the outstanding asynchronous traps for this agent instance.

### [coap](docs/coap/README.md)

* [protocolCoapGetArgs](docs/coap/README.md#protocolcoapgetargs) - Show the agent's COAP argument structure
* [protocolCoapGetConfig](docs/coap/README.md#protocolcoapgetconfig) - Show the agent's COAP configuration
* [protocolCoapGetStatistics](docs/coap/README.md#protocolcoapgetstatistics) - Show the agent's COAP statistics
* [protocolCoapGetStatsHdr](docs/coap/README.md#protocolcoapgetstatshdr) - Show the COAP statistics headers
* [protocolCoapGetTrace](docs/coap/README.md#protocolcoapgettrace) - Show the agent's COAP traffic tracing
* [protocolCoapSetConfig](docs/coap/README.md#protocolcoapsetconfig) - Set the agent's COAP configuration
* [protocolCoapSetTrace](docs/coap/README.md#protocolcoapsettrace) - Set the agent's COAP traffic tracing

### [dhcp](docs/dhcp/README.md)

* [protocolDhcpGetArgs](docs/dhcp/README.md#protocoldhcpgetargs) - Show the agent's DHCP argument structure
* [protocolDhcpGetConfig](docs/dhcp/README.md#protocoldhcpgetconfig) - Show the agent's DHCP configuration
* [protocolDhcpGetStatistics](docs/dhcp/README.md#protocoldhcpgetstatistics) - Show the agent's DHCP statistics
* [protocolDhcpGetStatsHdr](docs/dhcp/README.md#protocoldhcpgetstatshdr) - Show the DHCP statistics headers
* [protocolDhcpGetTrace](docs/dhcp/README.md#protocoldhcpgettrace) - Show the agent's DHCP traffic tracing
* [protocolDhcpParams](docs/dhcp/README.md#protocoldhcpparams) - Show the parameters configured by the server in its DHCP-OFFER message
* [protocolDhcpSetConfig](docs/dhcp/README.md#protocoldhcpsetconfig) - Set the agent's DHCP configuration
* [protocolDhcpSetTrace](docs/dhcp/README.md#protocoldhcpsettrace) - Set the agent's DHCP traffic tracing

### [daemon](docs/daemon/README.md)

* [addDaemonTimerScript](docs/daemon/README.md#adddaemontimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [cfgLoad](docs/daemon/README.md#cfgload) - Load the lab configuration file file.
* [cfgNew](docs/daemon/README.md#cfgnew) - Clear the lab configuration.
* [cfgSave](docs/daemon/README.md#cfgsave) - Save the lab configuration.
* [cfgSaveas](docs/daemon/README.md#cfgsaveas) - Save the lab configuration in file.
* [delDaemonTimerScript](docs/daemon/README.md#deldaemontimerscript) - Remove a timer script from the execution list.
* [getActiveDataList](docs/daemon/README.md#getactivedatalist) - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
* [getActiveList](docs/daemon/README.md#getactivelist) - The list of {agentnum} that are currently active (running or paused).
* [getCfgFileChanged](docs/daemon/README.md#getcfgfilechanged) - This predicate indicates if the currently loaded agent configuration file has changed.
* [getCfgfile](docs/daemon/README.md#getcfgfile) - The currently loaded lab configuration file for the particular user.
* [getChangedConfigList](docs/daemon/README.md#getchangedconfiglist) - The list of {agentnum} for which a configurable parameter changed.
* [getChangedStateList](docs/daemon/README.md#getchangedstatelist) - The list of {agentnum state} for which the state changed.
* [getClients](docs/daemon/README.md#getclients) - The number of clients currently connected to the daemon.
* [getConfiguredList](docs/daemon/README.md#getconfiguredlist) - The list of {agentnum} that are currently configured.
* [getDaemonProtocols](docs/daemon/README.md#getdaemonprotocols) - The set of protocols supported by the Simulator.
* [getInterfaces](docs/daemon/README.md#getinterfaces) - The set of network interfaces that can be used for simulations.
* [getLast](docs/daemon/README.md#getlast) - The last configured agent instance.
* [getLog](docs/daemon/README.md#getlog) - The current log file for the Simulator.
* [getMax](docs/daemon/README.md#getmax) - The maximum number of agent instances.
* [getNetaddr](docs/daemon/README.md#getnetaddr) - The network address of the host where the MIMIC simulator is running.
* [getNetdev](docs/daemon/README.md#getnetdev) - The default network device to be used for agent addresses.
* [getProduct](docs/daemon/README.md#getproduct) - The product number that is licensed.
* [getReturn](docs/daemon/README.md#getreturn) - The return mode.
* [getVersion](docs/daemon/README.md#getversion) - The version of the MIMIC command interface.
* [listDaemonTimerScripts](docs/daemon/README.md#listdaemontimerscripts) - List the timer scripts currently running along with the their intervals.
* [mgetInfo](docs/daemon/README.md#mgetinfo) - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
* [setLog](docs/daemon/README.md#setlog) - The current log file for the Simulator.
* [setNetdev](docs/daemon/README.md#setnetdev) - The network address of the host where the MIMIC simulator is running.
* [startAllAgents](docs/daemon/README.md#startallagents) - Start MIMIC.
* [stopAllAgents](docs/daemon/README.md#stopallagents) - Stop MIMIC.
* [storeExists](docs/daemon/README.md#storeexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [storeGet](docs/daemon/README.md#storeget) - Fetches the value associated with a variable.
* [storeList](docs/daemon/README.md#storelist) - This command will return the list of variables in the said scope.
* [storeLreplace](docs/daemon/README.md#storelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [storePersists](docs/daemon/README.md#storepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [storeSave](docs/daemon/README.md#storesave) - This operation flushes all global objects which need to be made persistent to disk.
* [storeSet](docs/daemon/README.md#storeset) - Set the variable store for the global storage
* [storeUnset](docs/daemon/README.md#storeunset) - Deletes a variable which is currently defined.
* [terminate](docs/daemon/README.md#terminate) - Terminate the MIMIC daemon.

### [ipmi](docs/ipmi/README.md)

* [protocolIpmiGetArgs](docs/ipmi/README.md#protocolipmigetargs) - Show the agent's IPMI argument structure
* [protocolIpmiGetAttr](docs/ipmi/README.md#protocolipmigetattr) - Show the outgoing message's attributes
* [protocolIpmiGetConfig](docs/ipmi/README.md#protocolipmigetconfig) - Show the agent's IPMI configuration
* [protocolIpmiGetStatistics](docs/ipmi/README.md#protocolipmigetstatistics) - Show the agent's IPMI statistics
* [protocolIpmiGetStatsHdr](docs/ipmi/README.md#protocolipmigetstatshdr) - Show the IPMI statistics headers
* [protocolIpmiGetTrace](docs/ipmi/README.md#protocolipmigettrace) - Show the agent's IPMI traffic tracing
* [protocolIpmiSetAttr](docs/ipmi/README.md#protocolipmisetattr) - Set the outgoing message's attributes
* [protocolIpmiSetConfig](docs/ipmi/README.md#protocolipmisetconfig) - Set the agent's IPMI configuration
* [protocolIpmiSetTrace](docs/ipmi/README.md#protocolipmisettrace) - Set the agent's IPMI traffic tracing

### [mqtt](docs/mqtt/README.md)

* [protocolMqttClientGetProtstate](docs/mqtt/README.md#protocolmqttclientgetprotstate) - Show the agent's MQTT TCP connection state
* [protocolMqttClientGetState](docs/mqtt/README.md#protocolmqttclientgetstate) - Show the agent's MQTT state
* [protocolMqttClientMessageCard](docs/mqtt/README.md#protocolmqttclientmessagecard) - Show the agent's current messages' cardinality
* [protocolMqttClientMessageGet](docs/mqtt/README.md#protocolmqttclientmessageget) - Show the agent's message attributes
* [protocolMqttClientMessageSet](docs/mqtt/README.md#protocolmqttclientmessageset) - Set the agent's message attributes
* [protocolMqttClientResubscribe](docs/mqtt/README.md#protocolmqttclientresubscribe) - Restart receiving messages from a subcription of the agent
* [protocolMqttClientRuntimeAbort](docs/mqtt/README.md#protocolmqttclientruntimeabort) - Abort agent's MQTT TCP session without sending DISCONNECT command
* [protocolMqttClientRuntimeConnect](docs/mqtt/README.md#protocolmqttclientruntimeconnect) - Start agent's MQTT TCP session
* [protocolMqttClientRuntimeDisconnect](docs/mqtt/README.md#protocolmqttclientruntimedisconnect) - Disconnect agent's MQTT TCP session by sending DISCONNECT command
* [protocolMqttClientSetBroker](docs/mqtt/README.md#protocolmqttclientsetbroker) - Set the agent's MQTT TCP connection target broker
* [protocolMqttClientSetCleansession](docs/mqtt/README.md#protocolmqttclientsetcleansession) - Set the agent's MQTT session
* [protocolMqttClientSetClientid](docs/mqtt/README.md#protocolmqttclientsetclientid) - Set the agent's MQTT client ID
* [protocolMqttClientSetKeepalive](docs/mqtt/README.md#protocolmqttclientsetkeepalive) - Set the agent's MQTT TCP keepalive
* [protocolMqttClientSetOnDisconnect](docs/mqtt/README.md#protocolmqttclientsetondisconnect) - Set the agent's MQTT disconnection action
* [protocolMqttClientSetPassword](docs/mqtt/README.md#protocolmqttclientsetpassword) - Set the agent's MQTT client password
* [protocolMqttClientSetPort](docs/mqtt/README.md#protocolmqttclientsetport) - Set the agent's MQTT TCP connection target port
* [protocolMqttClientSetUsername](docs/mqtt/README.md#protocolmqttclientsetusername) - Set the agent's MQTT client username
* [protocolMqttClientSetWillmsg](docs/mqtt/README.md#protocolmqttclientsetwillmsg) - Set the agent's MQTT client's will
* [protocolMqttClientSetWillqos](docs/mqtt/README.md#protocolmqttclientsetwillqos) - Set the agent's MQTT will message's QOS field
* [protocolMqttClientSetWillretain](docs/mqtt/README.md#protocolmqttclientsetwillretain) - Set the agent's MQTT retained will
* [protocolMqttClientSetWilltopic](docs/mqtt/README.md#protocolmqttclientsetwilltopic) - Set the agent's MQTT client will's topic
* [protocolMqttClientSubscribeCard](docs/mqtt/README.md#protocolmqttclientsubscribecard) - Show the agent's current subscriptions' cardinality
* [protocolMqttClientSubscribeGet](docs/mqtt/README.md#protocolmqttclientsubscribeget) - Show the agent's subscription attributes
* [protocolMqttClientSubscribeSet](docs/mqtt/README.md#protocolmqttclientsubscribeset) - Set the agent's subscribe attributes
* [protocolMqttClientUnsubscribe](docs/mqtt/README.md#protocolmqttclientunsubscribe) - Stops receiving messages from a subcription of the agent
* [protocolMqttGetArgs](docs/mqtt/README.md#protocolmqttgetargs) - Show the agent's MQTT argument structure
* [protocolMqttGetConfig](docs/mqtt/README.md#protocolmqttgetconfig) - Show the agent's MQTT configuration
* [protocolMqttGetStatistics](docs/mqtt/README.md#protocolmqttgetstatistics) - Show the agent's MQTT statistics
* [protocolMqttGetStatsHdr](docs/mqtt/README.md#protocolmqttgetstatshdr) - Show the MQTT statistics headers
* [protocolMqttGetTrace](docs/mqtt/README.md#protocolmqttgettrace) - Show the agent's MQTT traffic tracing
* [protocolMqttSetConfig](docs/mqtt/README.md#protocolmqttsetconfig) - Set the agent's MQTT configuration
* [protocolMqttSetTrace](docs/mqtt/README.md#protocolmqttsettrace) - Set the agent's MQTT traffic tracing

### [netflow](docs/netflow/README.md)

* [protocolNetflowChangeAttr](docs/netflow/README.md#protocolnetflowchangeattr) - Change NETFLOW export attributes
* [protocolNetflowChangeDfs](docs/netflow/README.md#protocolnetflowchangedfs) - Change NETFLOW data export interval
* [protocolNetflowChangeTfs](docs/netflow/README.md#protocolnetflowchangetfs) - Change NETFLOW template export interval
* [protocolNetflowGetArgs](docs/netflow/README.md#protocolnetflowgetargs) - Show the agent's NETFLOW argument structure
* [protocolNetflowGetConfig](docs/netflow/README.md#protocolnetflowgetconfig) - Show the agent's NETFLOW configuration
* [protocolNetflowGetStatistics](docs/netflow/README.md#protocolnetflowgetstatistics) - Show the agent's NETFLOW statistics
* [protocolNetflowGetStatsHdr](docs/netflow/README.md#protocolnetflowgetstatshdr) - Show the NETFLOW statistics headers
* [protocolNetflowGetTrace](docs/netflow/README.md#protocolnetflowgettrace) - Show the agent's NETFLOW traffic tracing
* [protocolNetflowHalt](docs/netflow/README.md#protocolnetflowhalt) - Halt NETFLOW traffic
* [protocolNetflowList](docs/netflow/README.md#protocolnetflowlist) - Show list of NETFLOW exports
* [protocolNetflowReload](docs/netflow/README.md#protocolnetflowreload) - Reload NETFLOW configuration before resuming traffic
* [protocolNetflowResume](docs/netflow/README.md#protocolnetflowresume) - Resuming traffic
* [protocolNetflowSetCollector](docs/netflow/README.md#protocolnetflowsetcollector) - Swap NETFLOW collector
* [protocolNetflowSetConfig](docs/netflow/README.md#protocolnetflowsetconfig) - Set the agent's NETFLOW configuration
* [protocolNetflowSetFileName](docs/netflow/README.md#protocolnetflowsetfilename) - Swap NETFLOW configuration file
* [protocolNetflowSetTrace](docs/netflow/README.md#protocolnetflowsettrace) - Set the agent's NETFLOW traffic tracing

### [proxy](docs/proxy/README.md)

* [protocolProxyGetArgs](docs/proxy/README.md#protocolproxygetargs) - Show the agent's PROXY argument structure
* [protocolProxyGetConfig](docs/proxy/README.md#protocolproxygetconfig) - Show the agent's PROXY configuration
* [protocolProxyGetStatistics](docs/proxy/README.md#protocolproxygetstatistics) - Show the agent's PROXY statistics
* [protocolProxyGetStatsHdr](docs/proxy/README.md#protocolproxygetstatshdr) - Show the PROXY statistics headers
* [protocolProxyGetTrace](docs/proxy/README.md#protocolproxygettrace) - Show the agent's PROXY traffic tracing
* [protocolProxyPortAdd](docs/proxy/README.md#protocolproxyportadd) - Add individual proxy target on the agent and the simulator host
* [protocolProxyPortIsstarted](docs/proxy/README.md#protocolproxyportisstarted) - Check individual target
* [protocolProxyPortList](docs/proxy/README.md#protocolproxyportlist) - List all proxy targets
* [protocolProxyPortRemove](docs/proxy/README.md#protocolproxyportremove) - Remove individual proxy target on the agent and the simulator host
* [protocolProxyPortStart](docs/proxy/README.md#protocolproxyportstart) - Start additional target
* [protocolProxyPortStop](docs/proxy/README.md#protocolproxyportstop) - Stop additional target
* [protocolProxySetConfig](docs/proxy/README.md#protocolproxysetconfig) - Set the agent's PROXY configuration
* [protocolProxySetTrace](docs/proxy/README.md#protocolproxysettrace) - Set the agent's PROXY traffic tracing

### [sflow](docs/sflow/README.md)

* [protocolSflowGetArgs](docs/sflow/README.md#protocolsflowgetargs) - Show the agent's SFLOW argument structure
* [protocolSflowGetConfig](docs/sflow/README.md#protocolsflowgetconfig) - Show the agent's SFLOW configuration
* [protocolSflowGetStatistics](docs/sflow/README.md#protocolsflowgetstatistics) - Show the agent's SFLOW statistics
* [protocolSflowGetStatsHdr](docs/sflow/README.md#protocolsflowgetstatshdr) - Show the SFLOW statistics headers
* [protocolSflowGetTrace](docs/sflow/README.md#protocolsflowgettrace) - Show the agent's SFLOW traffic tracing
* [protocolSflowHalt](docs/sflow/README.md#protocolsflowhalt) - Halt SFLOW traffic
* [protocolSflowReload](docs/sflow/README.md#protocolsflowreload) - Reload SFLOW configuration before resuming traffic
* [protocolSflowResume](docs/sflow/README.md#protocolsflowresume) - Resuming traffic
* [protocolSflowSetConfig](docs/sflow/README.md#protocolsflowsetconfig) - Set the agent's SFLOW configuration
* [protocolSflowSetTrace](docs/sflow/README.md#protocolsflowsettrace) - Set the agent's SFLOW traffic tracing

### [snmptcp](docs/snmptcp/README.md)

* [protocolSnmptcpGetArgs](docs/snmptcp/README.md#protocolsnmptcpgetargs) - Show the agent's SNMPTCP argument structure
* [protocolSnmptcpGetConfig](docs/snmptcp/README.md#protocolsnmptcpgetconfig) - Show the agent's SNMPTCP configuration
* [protocolSnmptcpGetStatistics](docs/snmptcp/README.md#protocolsnmptcpgetstatistics) - Show the agent's SNMPTCP statistics
* [protocolSnmptcpGetStatsHdr](docs/snmptcp/README.md#protocolsnmptcpgetstatshdr) - Show the SNMPTCP statistics headers
* [protocolSnmptcpGetTrace](docs/snmptcp/README.md#protocolsnmptcpgettrace) - Show the agent's SNMPTCP traffic tracing
* [protocolSnmptcpIpaliasDisable](docs/snmptcp/README.md#protocolsnmptcpipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasEnable](docs/snmptcp/README.md#protocolsnmptcpipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasIsenabled](docs/snmptcp/README.md#protocolsnmptcpipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasList](docs/snmptcp/README.md#protocolsnmptcpipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolSnmptcpSetConfig](docs/snmptcp/README.md#protocolsnmptcpsetconfig) - Set the agent's SNMPTCP configuration
* [protocolSnmptcpSetTrace](docs/snmptcp/README.md#protocolsnmptcpsettrace) - Set the agent's SNMPTCP traffic tracing

### [snmPv3](docs/snmpv3/README.md)

* [protocolSnmpv3AccessAdd](docs/snmpv3/README.md#protocolsnmpv3accessadd) - Adds a new access entry with the specified parameters.
* [protocolSnmpv3AccessClear](docs/snmpv3/README.md#protocolsnmpv3accessclear) - Clears all access entries.
* [protocolSnmpv3AccessDel](docs/snmpv3/README.md#protocolsnmpv3accessdel) - Deletes the specified access entry.
* [protocolSnmpv3AccessList](docs/snmpv3/README.md#protocolsnmpv3accesslist) - Returns the current acccess entries as an array of strings.
* [protocolSnmpv3GetConfig](docs/snmpv3/README.md#protocolsnmpv3getconfig) - Returns the SNMPv3 configuration.
* [protocolSnmpv3GetContextEngineid](docs/snmpv3/README.md#protocolsnmpv3getcontextengineid) - Retrieves the contextEngineID for the agent instance.
* [protocolSnmpv3GetEngineboots](docs/snmpv3/README.md#protocolsnmpv3getengineboots) - Retrieves the number of times the agent has been restarted.
* [protocolSnmpv3GetEngineid](docs/snmpv3/README.md#protocolsnmpv3getengineid) - For started agents, retrieves the current engineID in use by the snmpv3 module.
* [protocolSnmpv3GetEnginetime](docs/snmpv3/README.md#protocolsnmpv3getenginetime) - Retrieves the time in seconds for which the agent has been running.
* [protocolSnmpv3GroupAdd](docs/snmpv3/README.md#protocolsnmpv3groupadd) - Adds a new group entry with the specified parameters.
* [protocolSnmpv3GroupClear](docs/snmpv3/README.md#protocolsnmpv3groupclear) - Clears all group entries.
* [protocolSnmpv3GroupDel](docs/snmpv3/README.md#protocolsnmpv3groupdel) - Deletes the specified group entry.
* [protocolSnmpv3GroupList](docs/snmpv3/README.md#protocolsnmpv3grouplist) - Returns the current group entries as an array of strings.
* [protocolSnmpv3SetConfig](docs/snmpv3/README.md#protocolsnmpv3setconfig) - Changes the SNMPv3 configuration.
* [protocolSnmpv3UserAdd](docs/snmpv3/README.md#protocolsnmpv3useradd) - Adds a new user entry with the specified parameters.
* [protocolSnmpv3UserClear](docs/snmpv3/README.md#protocolsnmpv3userclear) - Clears all user entries.
* [protocolSnmpv3UserDel](docs/snmpv3/README.md#protocolsnmpv3userdel) - Deletes the specified user entry.
* [protocolSnmpv3UserList](docs/snmpv3/README.md#protocolsnmpv3userlist) - Returns the current user entries as a Tcl list.
* [protocolSnmpv3UsmSave](docs/snmpv3/README.md#protocolsnmpv3usmsave) - Saves current user settings in the currently loaded USM config file.
* [protocolSnmpv3UsmSaveas](docs/snmpv3/README.md#protocolsnmpv3usmsaveas) - Saves current user settings in the specified USM config file.
* [protocolSnmpv3VacmSave](docs/snmpv3/README.md#protocolsnmpv3vacmsave) - Saves current group, access, view settings in the currently loaded VACM config file.
* [protocolSnmpv3VacmSaveas](docs/snmpv3/README.md#protocolsnmpv3vacmsaveas) - Saves current group, access, view settings in the specified VACM config file.
* [protocolSnmpv3ViewAdd](docs/snmpv3/README.md#protocolsnmpv3viewadd) - Adds a new view entry with the specified parameters.
* [protocolSnmpv3ViewClear](docs/snmpv3/README.md#protocolsnmpv3viewclear) - Clears all view entries.
* [protocolSnmpv3ViewDel](docs/snmpv3/README.md#protocolsnmpv3viewdel) - Deletes the specified view entry.
* [protocolSnmpv3ViewList](docs/snmpv3/README.md#protocolsnmpv3viewlist) - Returns the current view entries as an array of strings.

### [ssh](docs/ssh/README.md)

* [protocolSshGetArgs](docs/ssh/README.md#protocolsshgetargs) - Show the agent's SSH argument structure
* [protocolSshGetConfig](docs/ssh/README.md#protocolsshgetconfig) - Show the agent's SSH configuration
* [protocolSshGetStatistics](docs/ssh/README.md#protocolsshgetstatistics) - Show the agent's SSH statistics
* [protocolSshGetStatsHdr](docs/ssh/README.md#protocolsshgetstatshdr) - Show the SSH statistics headers
* [protocolSshGetTrace](docs/ssh/README.md#protocolsshgettrace) - Show the agent's SSH traffic tracing
* [protocolSshIpaliasDisable](docs/ssh/README.md#protocolsshipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasEnable](docs/ssh/README.md#protocolsshipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasIsenabled](docs/ssh/README.md#protocolsshipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasList](docs/ssh/README.md#protocolsshipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolSshSetConfig](docs/ssh/README.md#protocolsshsetconfig) - Set the agent's SSH configuration
* [protocolSshSetTrace](docs/ssh/README.md#protocolsshsettrace) - Set the agent's SSH traffic tracing

### [syslog](docs/syslog/README.md)

* [protocolSyslogGetArgs](docs/syslog/README.md#protocolsysloggetargs) - Show the agent's SYSLOG argument structure
* [protocolSyslogGetAttr](docs/syslog/README.md#protocolsysloggetattr) - Show the outgoing message's attributes
* [protocolSyslogGetConfig](docs/syslog/README.md#protocolsysloggetconfig) - Show the agent's SYSLOG configuration
* [protocolSyslogGetStatistics](docs/syslog/README.md#protocolsysloggetstatistics) - Show the agent's SYSLOG statistics
* [protocolSyslogGetStatsHdr](docs/syslog/README.md#protocolsysloggetstatshdr) - Show the SYSLOG statistics headers
* [protocolSyslogGetTrace](docs/syslog/README.md#protocolsysloggettrace) - Show the agent's SYSLOG traffic tracing
* [protocolSyslogSend](docs/syslog/README.md#protocolsyslogsend) - Set the agent's SYSLOG traffic tracing
* [protocolSyslogSetAttr](docs/syslog/README.md#protocolsyslogsetattr) - Set the outgoing message's attributes
* [protocolSyslogSetConfig](docs/syslog/README.md#protocolsyslogsetconfig) - Set the agent's SYSLOG configuration
* [protocolSyslogSetTrace](docs/syslog/README.md#protocolsyslogsettrace) - Set the agent's SYSLOG traffic tracing

### [telnet](docs/telnet/README.md)

* [protocolTelnetConnectionLogon](docs/telnet/README.md#protocoltelnetconnectionlogon) - Changes the connection's current logon.
* [protocolTelnetConnectionRequest](docs/telnet/README.md#protocoltelnetconnectionrequest) - Executes the command asynchronously .
* [protocolTelnetConnectionSignal](docs/telnet/README.md#protocoltelnetconnectionsignal) - Triggers the asynchronous signal event with the specified signal name
* [protocolTelnetGetArgs](docs/telnet/README.md#protocoltelnetgetargs) - Show the agent's TELNET argument structure
* [protocolTelnetGetConfig](docs/telnet/README.md#protocoltelnetgetconfig) - Show the agent's TELNET configuration
* [protocolTelnetGetStatistics](docs/telnet/README.md#protocoltelnetgetstatistics) - Show the agent's TELNET statistics
* [protocolTelnetGetStatsHdr](docs/telnet/README.md#protocoltelnetgetstatshdr) - Show the TELNET statistics headers
* [protocolTelnetGetTrace](docs/telnet/README.md#protocoltelnetgettrace) - Show the agent's TELNET traffic tracing
* [protocolTelnetIpaliasDisable](docs/telnet/README.md#protocoltelnetipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasEnable](docs/telnet/README.md#protocoltelnetipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasIsenabled](docs/telnet/README.md#protocoltelnetipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasList](docs/telnet/README.md#protocoltelnetipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolTelnetServerGetConnections](docs/telnet/README.md#protocoltelnetservergetconnections) - Show the agent's TELNET connections
* [protocolTelnetServerGetKeymap](docs/telnet/README.md#protocoltelnetservergetkeymap) - Show the agent's TELNET keymap file name
* [protocolTelnetServerGetRulesdb](docs/telnet/README.md#protocoltelnetservergetrulesdb) - Show the agent's TELNET rules db file name
* [protocolTelnetServerGetState](docs/telnet/README.md#protocoltelnetservergetstate) - Show the agent's TELNET server state
* [protocolTelnetServerGetUserdb](docs/telnet/README.md#protocoltelnetservergetuserdb) - Show the agent's TELNET user db file name
* [protocolTelnetServerGetUsers](docs/telnet/README.md#protocoltelnetservergetusers) - Show the agent's TELNET users
* [protocolTelnetSetConfig](docs/telnet/README.md#protocoltelnetsetconfig) - Set the agent's TELNET configuration
* [protocolTelnetSetTrace](docs/telnet/README.md#protocoltelnetsettrace) - Set the agent's TELNET traffic tracing

### [tftp](docs/tftp/README.md)

* [protocolTftpGetArgs](docs/tftp/README.md#protocoltftpgetargs) - Show the agent's TFTP argument structure
* [protocolTftpGetConfig](docs/tftp/README.md#protocoltftpgetconfig) - Show the agent's TFTP configuration
* [protocolTftpGetStatistics](docs/tftp/README.md#protocoltftpgetstatistics) - Show the agent's TFTP statistics
* [protocolTftpGetStatsHdr](docs/tftp/README.md#protocoltftpgetstatshdr) - Show the TFTP statistics headers
* [protocolTftpGetTrace](docs/tftp/README.md#protocoltftpgettrace) - Show the agent's TFTP traffic tracing
* [protocolTftpSessionGetParameter](docs/tftp/README.md#protocoltftpsessiongetparameter) - Show a parameter of a TFTP sesssion
* [protocolTftpSessionRead](docs/tftp/README.md#protocoltftpsessionread) - Create a read session to download srcfile from server
* [protocolTftpSessionSetParameter](docs/tftp/README.md#protocoltftpsessionsetparameter) - Set a parameter of a TFTP sesssion
* [protocolTftpSessionStart](docs/tftp/README.md#protocoltftpsessionstart) - Start a TFTP sesssion
* [protocolTftpSessionStatus](docs/tftp/README.md#protocoltftpsessionstatus) - Check a TFTP sesssion's status
* [protocolTftpSessionStop](docs/tftp/README.md#protocoltftpsessionstop) - Stop a TFTP sesssion
* [protocolTftpSessionWrite](docs/tftp/README.md#protocoltftpsessionwrite) - Create a read session to upload srcfile to server
* [protocolTftpSetConfig](docs/tftp/README.md#protocoltftpsetconfig) - Set the agent's TFTP configuration
* [protocolTftpSetTrace](docs/tftp/README.md#protocoltftpsettrace) - Set the agent's TFTP traffic tracing

### [tod](docs/tod/README.md)

* [protocolTodGetArgs](docs/tod/README.md#protocoltodgetargs) - Show the agent's TOD argument structure
* [protocolTodGetConfig](docs/tod/README.md#protocoltodgetconfig) - Show the agent's TOD configuration
* [protocolTodGetStatistics](docs/tod/README.md#protocoltodgetstatistics) - Show the agent's TOD statistics
* [protocolTodGetStatsHdr](docs/tod/README.md#protocoltodgetstatshdr) - Show the TOD statistics headers
* [protocolTodGetTrace](docs/tod/README.md#protocoltodgettrace) - Show the agent's TOD traffic tracing
* [protocolTodGettime](docs/tod/README.md#protocoltodgettime) - Retrieve TOD time
* [protocolTodSetConfig](docs/tod/README.md#protocoltodsetconfig) - Set the agent's TOD configuration
* [protocolTodSetTrace](docs/tod/README.md#protocoltodsettrace) - Set the agent's TOD traffic tracing

### [valuespace](docs/valuespace/README.md)

* [add](docs/valuespace/README.md#add) - Add an entry to a table.
* [evalValue](docs/valuespace/README.md#evalvalue) - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
* [getInfo](docs/valuespace/README.md#getinfo) - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
* [getInstances](docs/valuespace/README.md#getinstances) - Display the MIB object instances for the specified object.
* [getMib](docs/valuespace/README.md#getmib) - Return the MIB that defines the specified object.
* [getName](docs/valuespace/README.md#getname) - Return the symbolic name of the specified object identifier.
* [getObjects](docs/valuespace/README.md#getobjects) - Display the MIB objects below the current position
* [getOid](docs/valuespace/README.md#getoid) - Return the numeric OID of the specified object.
* [getState](docs/valuespace/README.md#getstate) - Get the state of a MIB object object.
* [getValue](docs/valuespace/README.md#getvalue) - Get a variable in the Value Space.
* [getVariables](docs/valuespace/README.md#getvariables) - Display the variables for the specified instance instance for the specified MIB object object
* [msetValue](docs/valuespace/README.md#msetvalue) - Set multiple variables in the Value Space.
* [munsetValue](docs/valuespace/README.md#munsetvalue) - Unset multiple variables in the Value Space
* [remove](docs/valuespace/README.md#remove) - Remove an entry from a table.
* [setState](docs/valuespace/README.md#setstate) - Set the state of a MIB object object
* [setValue](docs/valuespace/README.md#setvalue) - Set a variable in the Value Space.
* [splitOid](docs/valuespace/README.md#splitoid) - Split the numerical OID into the object OID and instance OID.
* [unsetValue](docs/valuespace/README.md#unsetvalue) - Unset a variable in the Value Space in order to free its memory.

### [web](docs/web/README.md)

* [protocolWebGetArgs](docs/web/README.md#protocolwebgetargs) - Show the agent's WEB argument structure
* [protocolWebGetConfig](docs/web/README.md#protocolwebgetconfig) - Show the agent's WEB configuration
* [protocolWebGetStatistics](docs/web/README.md#protocolwebgetstatistics) - Show the agent's WEB statistics
* [protocolWebGetStatsHdr](docs/web/README.md#protocolwebgetstatshdr) - Show the WEB statistics headers
* [protocolWebGetTrace](docs/web/README.md#protocolwebgettrace) - Show the agent's WEB traffic tracing
* [protocolWebPortAdd](docs/web/README.md#protocolwebportadd) - Add the agent's WEB port
* [protocolWebPortExists](docs/web/README.md#protocolwebportexists) - Show the agent's WEB port
* [protocolWebPortRemove](docs/web/README.md#protocolwebportremove) - Remove the agent's WEB port
* [protocolWebPortSet](docs/web/README.md#protocolwebportset) - Set the agent's WEB port attribute
* [protocolWebPortStart](docs/web/README.md#protocolwebportstart) - Start the agent's WEB port
* [protocolWebPortStop](docs/web/README.md#protocolwebportstop) - Stop the agent's WEB port
* [protocolWebSetConfig](docs/web/README.md#protocolwebsetconfig) - Set the agent's WEB configuration
* [protocolWebSetTrace](docs/web/README.md#protocolwebsettrace) - Set the agent's WEB traffic tracing
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
