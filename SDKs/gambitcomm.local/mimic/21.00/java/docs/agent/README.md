# agent

### Available Operations

* [addIpalias](#addipalias) - Adds a new ipalias for the agent.
* [addTimerScript](#addtimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [agentRemove](#agentremove) - Remove the current agent.
* [agentStoreCopy](#agentstorecopy) - This command copies the variable store from the other agent to this agent.
* [agentStoreExists](#agentstoreexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [agentStoreGet](#agentstoreget) - Fetches the value associated with a variable.
* [agentStoreList](#agentstorelist) - This command will return the list of variables in the said scope.
* [agentStoreLreplace](#agentstorelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [agentStorePersists](#agentstorepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [agentStoreSet](#agentstoreset) - These commands allow the creation of a new variable, or changing an existing value.
* [agentStoreUnset](#agentstoreunset) - Deletes a variable which is currently defined.
* [delIpalias](#delipalias) - Deletes an existing ipalias from the agent.
* [delTimerScript](#deltimerscript) - Remove a timer script from the execution list.
* [fromAdd](#fromadd) - Add a source address that the agent will accept messages from.
* [fromDel](#fromdel) - delete a source address that the agent will accept messages from.
* [fromList](#fromlist) - List the source addresses that the agent will accept messages from.
* [getAgentState](#getagentstate) - current running state of the agent
* [getChanged](#getchanged) - has the agent value space changed?
* [getConfigChanged](#getconfigchanged) - has the lab configuration changed?
* [getDelay](#getdelay) - one-way transit delay in msec.
* [getDrops](#getdrops) - drop rate (every N-th PDU). 0 means no drops.
* [getHost](#gethost) - host address of the agent.
* [getInformTimeout](#getinformtimeout) - timeout in seconds for retransmitting INFORM PDUs.
* [getInterface](#getinterface) - network interface card for the agent.
* [getMask](#getmask) - subnet mask of the agent.
* [getMibs](#getmibs) - set of MIBs, simulations and scenarios
* [getNumberStarts](#getnumberstarts) - number of starts for the agent.
* [getOiddir](#getoiddir) - MIB directory of the agent.
* [getOwner](#getowner) - owner of the agent.
* [getPdusize](#getpdusize) - maximum PDU size.
* [getPort](#getport) - port number
* [getPrivdir](#getprivdir) - private directory of the agent.
* [getProtocols](#getprotocols) - protocols supported by agent
* [getReadCommunity](#getreadcommunity) - read community string
* [getScen](#getscen) - first scenario name
* [getSim](#getsim) - first simulation name
* [getStarttime](#getstarttime) - relative start time
* [getStateChanged](#getstatechanged) - has the agent state changed?
* [getStatistics](#getstatistics) - current statistics of the agent instance
* [getTrace](#gettrace) - SNMP PDU tracing
* [getValidate](#getvalidate) - SNMP SET validation policy.
* [getWriteCommunity](#getwritecommunity) - write community string
* [halt](#halt) - Halt the current agent.
* [listIpaliases](#listipaliases) - Lists all the additional ipaliases configured for the agent.
* [listTimerScripts](#listtimerscripts) - List the timer scripts currently running along with the their intervals.
* [new_](#new_) - Add an agent.
* [pauseNow](#pausenow) - Pause the current agent.
* [protocolGetConfig](#protocolgetconfig) - Returns the protocol's configuration.
* [reload](#reload) - Reload the current agent.
* [resume](#resume) - Resume the current agent.
* [save](#save) - Save agent MIB values.
* [setDelay](#setdelay) - one-way transit delay in msec
* [setDrops](#setdrops) - drop rate (every N-th PDU)
* [setHost](#sethost) - host address of the agent.
* [setInformTimeout](#setinformtimeout) - timeout in seconds for retransmitting INFORM PDUs
* [setInterface](#setinterface) - network interface card for the agent
* [setMask](#setmask) - subnet mask of the agent.
* [setMibs](#setmibs) - set of MIBs, simulations and scenarios
* [setOiddir](#setoiddir) - MIB directory of the agent.
* [setOwner](#setowner) - owner of the agent
* [setPdusize](#setpdusize) - maximum PDU size
* [setPort](#setport) - port number
* [setPrivdir](#setprivdir) - private directory of the agent.
* [setProtocols](#setprotocols) - protocols supported by agent as a comma-separated list
* [setReadCommunity](#setreadcommunity) - read community string
* [setStarttime](#setstarttime) - relative start time
* [setTrace](#settrace) - SNMP PDU tracing
* [setValidate](#setvalidate) - SNMP SET validation policy
* [setWriteCommunity](#setwritecommunity) - write community string
* [start](#start) - Start the current agent.
* [startIpalias](#startipalias) - Starts an existing ipalias for the agent.
* [statusIpalias](#statusipalias) - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
* [stop](#stop) - Show the agent's primary IP address
* [stopIpalias](#stopipalias) - Stops an existing ipalias for the agent.
* [trapConfigAdd](#trapconfigadd) - Add a trap destination to the set of destinations.
* [trapConfigDel](#trapconfigdel) - Remove a trap destination from the set of destinations.
* [trapConfigList](#trapconfiglist) - List the set of trap destinations for this agent instance.
* [trapList](#traplist) - List the outstanding asynchronous traps for this agent instance.

## addIpalias

port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddIpaliasRequest;
import org.openapis.openapi.models.operations.AddIpaliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "quo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AddIpaliasRequest req = new AddIpaliasRequest("odit", 870013, "at", "maiores", 473608);            

            AddIpaliasResponse res = sdk.agent.addIpalias(req);

            if (res.addIpalias200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addTimerScript

Add a new timer script to be executed at specified interval (in msec) with the specified argument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTimerScriptRequest;
import org.openapis.openapi.models.operations.AddTimerScriptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod", "quod") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AddTimerScriptRequest req = new AddTimerScriptRequest(461479, "totam", 780529, "dolorum");            

            AddTimerScriptResponse res = sdk.agent.addTimerScript(req);

            if (res.addTimerScript200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentRemove

For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentRemoveRequest;
import org.openapis.openapi.models.operations.AgentRemoveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "nam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentRemoveRequest req = new AgentRemoveRequest(639921);            

            AgentRemoveResponse res = sdk.agent.agentRemove(req);

            if (res.agentRemove200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentStoreCopy

This command copies the variable store from the other agent to this agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentStoreCopyRequest;
import org.openapis.openapi.models.operations.AgentStoreCopyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "fugit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentStoreCopyRequest req = new AgentStoreCopyRequest(537373, 944669);            

            AgentStoreCopyResponse res = sdk.agent.agentStoreCopy(req);

            if (res.agentStoreCopy200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentStoreExists

It returns "1" if the variable exists, else "0".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentStoreExistsRequest;
import org.openapis.openapi.models.operations.AgentStoreExistsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentStoreExistsRequest req = new AgentStoreExistsRequest(105907, "commodi");            

            AgentStoreExistsResponse res = sdk.agent.agentStoreExists(req);

            if (res.agentStoreExists200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentStoreGet

The value will be returned as a string (like all Tcl values).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentStoreGetRequest;
import org.openapis.openapi.models.operations.AgentStoreGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "modi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentStoreGetRequest req = new AgentStoreGetRequest(186332, "impedit");            

            AgentStoreGetResponse res = sdk.agent.agentStoreGet(req);

            if (res.agentStoreGet200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentStoreList

The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentStoreListRequest;
import org.openapis.openapi.models.operations.AgentStoreListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum", "esse") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentStoreListRequest req = new AgentStoreListRequest(216550);            

            AgentStoreListResponse res = sdk.agent.agentStoreList(req);

            if (res.agentStoreList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentStoreLreplace

These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentStoreLreplaceRequest;
import org.openapis.openapi.models.operations.AgentStoreLreplaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "aspernatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentStoreLreplaceRequest req = new AgentStoreLreplaceRequest(18789, 324141, "natus") {{
                requestBody = "sed";
            }};            

            AgentStoreLreplaceResponse res = sdk.agent.agentStoreLreplace(req);

            if (res.agentStoreLreplace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentStorePersists

It returns "1" if the variable is persistent, else "0".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentStorePersistsRequest;
import org.openapis.openapi.models.operations.AgentStorePersistsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste", "dolor") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentStorePersistsRequest req = new AgentStorePersistsRequest(616934, "laboriosam");            

            AgentStorePersistsResponse res = sdk.agent.agentStorePersists(req);

            if (res.agentStorePersists200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentStoreSet

The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentStoreSetRequest;
import org.openapis.openapi.models.operations.AgentStoreSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentStoreSetRequest req = new AgentStoreSetRequest(681820, 449950, "corporis") {{
                requestBody = "iste";
            }};            

            AgentStoreSetResponse res = sdk.agent.agentStoreSet(req);

            if (res.agentStoreSet200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## agentStoreUnset

This will cleanup persistent variables if needed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgentStoreUnsetRequest;
import org.openapis.openapi.models.operations.AgentStoreUnsetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AgentStoreUnsetRequest req = new AgentStoreUnsetRequest(697631, "architecto");            

            AgentStoreUnsetResponse res = sdk.agent.agentStoreUnset(req);

            if (res.agentStoreUnset200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delIpalias

port defaults to 161 if not specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DelIpaliasRequest;
import org.openapis.openapi.models.operations.DelIpaliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "reiciendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DelIpaliasRequest req = new DelIpaliasRequest("est", 653140, 670638);            

            DelIpaliasResponse res = sdk.agent.delIpalias(req);

            if (res.delIpalias200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delTimerScript

The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DelTimerScriptRequest;
import org.openapis.openapi.models.operations.DelTimerScriptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores", "dolorem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DelTimerScriptRequest req = new DelTimerScriptRequest(358152, "explicabo", 750686, "enim");            

            DelTimerScriptResponse res = sdk.agent.delTimerScript(req);

            if (res.delTimerScript200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fromAdd

An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FromAddRequest;
import org.openapis.openapi.models.operations.FromAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis", "nemo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            FromAddRequest req = new FromAddRequest("minima", 570197, 38425);            

            FromAddResponse res = sdk.agent.fromAdd(req);

            if (res.fromAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fromDel

An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FromDelRequest;
import org.openapis.openapi.models.operations.FromDelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "culpa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            FromDelRequest req = new FromDelRequest("doloribus", 958950, 102044);            

            FromDelResponse res = sdk.agent.fromDel(req);

            if (res.fromDel200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fromList

This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FromListRequest;
import org.openapis.openapi.models.operations.FromListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "dolorem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            FromListRequest req = new FromListRequest(635059);            

            FromListResponse res = sdk.agent.fromList(req);

            if (res.ipSources != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAgentState

0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAgentStateRequest;
import org.openapis.openapi.models.operations.GetAgentStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "repellat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAgentStateRequest req = new GetAgentStateRequest(653108);            

            GetAgentStateResponse res = sdk.agent.getAgentState(req);

            if (res.getAgentState200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChanged

has the agent value space changed?

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangedRequest;
import org.openapis.openapi.models.operations.GetChangedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "numquam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetChangedRequest req = new GetChangedRequest(414369);            

            GetChangedResponse res = sdk.agent.getChanged(req);

            if (res.getChanged200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigChanged

has the lab configuration changed?

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigChangedRequest;
import org.openapis.openapi.models.operations.GetConfigChangedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam", "molestiae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetConfigChangedRequest req = new GetConfigChangedRequest(244425);            

            GetConfigChangedResponse res = sdk.agent.getConfigChanged(req);

            if (res.getConfigChanged200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDelay

The minimum granularity is 10 msec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDelayRequest;
import org.openapis.openapi.models.operations.GetDelayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "quia") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDelayRequest req = new GetDelayRequest(338007);            

            GetDelayResponse res = sdk.agent.getDelay(req);

            if (res.getDelay200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDrops

drop rate (every N-th PDU). 0 means no drops.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDropsRequest;
import org.openapis.openapi.models.operations.GetDropsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae", "laborum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDropsRequest req = new GetDropsRequest(656330);            

            GetDropsResponse res = sdk.agent.getDrops(req);

            if (res.getDrops200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHost

Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHostRequest;
import org.openapis.openapi.models.operations.GetHostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "odit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetHostRequest req = new GetHostRequest(778346L);            

            GetHostResponse res = sdk.agent.getHost(req);

            if (res.getHost200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInformTimeout

The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInformTimeoutRequest;
import org.openapis.openapi.models.operations.GetInformTimeoutResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi", "tenetur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetInformTimeoutRequest req = new GetInformTimeoutRequest(368725);            

            GetInformTimeoutResponse res = sdk.agent.getInformTimeout(req);

            if (res.getInformTimeout200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInterface

network interface card for the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInterfaceRequest;
import org.openapis.openapi.models.operations.GetInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "possimus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetInterfaceRequest req = new GetInterfaceRequest(13571L);            

            GetInterfaceResponse res = sdk.agent.getInterface(req);

            if (res.getInterface200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMask

subnet mask of the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMaskRequest;
import org.openapis.openapi.models.operations.GetMaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi", "error") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetMaskRequest req = new GetMaskRequest(837945L);            

            GetMaskResponse res = sdk.agent.getMask(req);

            if (res.getMask200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMibs

set of MIBs, simulations and scenarios

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMibsRequest;
import org.openapis.openapi.models.operations.GetMibsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "quasi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetMibsRequest req = new GetMibsRequest(971945);            

            GetMibsResponse res = sdk.agent.getMibs(req);

            if (res.triplets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNumberStarts

This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumberStartsRequest;
import org.openapis.openapi.models.operations.GetNumberStartsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "vero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetNumberStartsRequest req = new GetNumberStartsRequest(468651);            

            GetNumberStartsResponse res = sdk.agent.getNumberStarts(req);

            if (res.getNumberStarts200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOiddir

MIB directory of the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOiddirRequest;
import org.openapis.openapi.models.operations.GetOiddirResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetOiddirRequest req = new GetOiddirRequest(55714);            

            GetOiddirResponse res = sdk.agent.getOiddir(req);

            if (res.getOiddir200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOwner

owner of the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOwnerRequest;
import org.openapis.openapi.models.operations.GetOwnerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis", "voluptate") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetOwnerRequest req = new GetOwnerRequest(739264);            

            GetOwnerResponse res = sdk.agent.getOwner(req);

            if (res.getOwner200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPdusize

The limit for this configurable is 65536.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPdusizeRequest;
import org.openapis.openapi.models.operations.GetPdusizeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "doloremque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPdusizeRequest req = new GetPdusizeRequest(441711);            

            GetPdusizeResponse res = sdk.agent.getPdusize(req);

            if (res.getPdusize200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPort

port number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortRequest;
import org.openapis.openapi.models.operations.GetPortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut", "maiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPortRequest req = new GetPortRequest(120196);            

            GetPortResponse res = sdk.agent.getPort(req);

            if (res.getPort200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrivdir

private directory of the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrivdirRequest;
import org.openapis.openapi.models.operations.GetPrivdirResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis", "dolore") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPrivdirRequest req = new GetPrivdirRequest(480894);            

            GetPrivdirResponse res = sdk.agent.getPrivdir(req);

            if (res.getPrivdir200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProtocols

protocols supported by agent as an array of strings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProtocolsRequest;
import org.openapis.openapi.models.operations.GetProtocolsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "harum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetProtocolsRequest req = new GetProtocolsRequest(317983);            

            GetProtocolsResponse res = sdk.agent.getProtocols(req);

            if (res.getProtocols200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadCommunity

read community string

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadCommunityRequest;
import org.openapis.openapi.models.operations.GetReadCommunityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "commodi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReadCommunityRequest req = new GetReadCommunityRequest(918236);            

            GetReadCommunityResponse res = sdk.agent.getReadCommunity(req);

            if (res.getReadCommunity200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScen

first scenario name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScenRequest;
import org.openapis.openapi.models.operations.GetScenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae", "ipsum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetScenRequest req = new GetScenRequest(692472);            

            GetScenResponse res = sdk.agent.getScen(req);

            if (res.getScen200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSim

first simulation name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimRequest;
import org.openapis.openapi.models.operations.GetSimResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias", "excepturi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSimRequest req = new GetSimRequest(865103);            

            GetSimResponse res = sdk.agent.getSim(req);

            if (res.getSim200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStarttime

relative start time

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStarttimeRequest;
import org.openapis.openapi.models.operations.GetStarttimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "praesentium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStarttimeRequest req = new GetStarttimeRequest(523248);            

            GetStarttimeResponse res = sdk.agent.getStarttime(req);

            if (res.getStarttime200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStateChanged

has the agent state changed?

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStateChangedRequest;
import org.openapis.openapi.models.operations.GetStateChangedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates", "quasi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStateChangedRequest req = new GetStateChangedRequest(921158);            

            GetStateChangedResponse res = sdk.agent.getStateChanged(req);

            if (res.getStateChanged200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatistics

The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatisticsRequest;
import org.openapis.openapi.models.operations.GetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStatisticsRequest req = new GetStatisticsRequest(929297);            

            GetStatisticsResponse res = sdk.agent.getStatistics(req);

            if (res.getStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrace

SNMP PDU tracing

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTraceRequest;
import org.openapis.openapi.models.operations.GetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt", "enim") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetTraceRequest req = new GetTraceRequest(9356);            

            GetTraceResponse res = sdk.agent.getTrace(req);

            if (res.getTrace200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getValidate

Is a bitmask in which with the following bits (from LSB) check for type, length, range, access

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetValidateRequest;
import org.openapis.openapi.models.operations.GetValidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est", "quibusdam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetValidateRequest req = new GetValidateRequest(131797);            

            GetValidateResponse res = sdk.agent.getValidate(req);

            if (res.getValidate200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWriteCommunity

write community string

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWriteCommunityRequest;
import org.openapis.openapi.models.operations.GetWriteCommunityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "distinctio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetWriteCommunityRequest req = new GetWriteCommunityRequest(841386);            

            GetWriteCommunityResponse res = sdk.agent.getWriteCommunity(req);

            if (res.getWriteCommunity200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## halt

Halt the current agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HaltRequest;
import org.openapis.openapi.models.operations.HaltResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "modi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            HaltRequest req = new HaltRequest(183191);            

            HaltResponse res = sdk.agent.halt(req);

            if (res.halt200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIpaliases

The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIpaliasesRequest;
import org.openapis.openapi.models.operations.ListIpaliasesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid", "cupiditate") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListIpaliasesRequest req = new ListIpaliasesRequest(552822);            

            ListIpaliasesResponse res = sdk.agent.listIpaliases(req);

            if (res.ipAliases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTimerScripts

The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTimerScriptsRequest;
import org.openapis.openapi.models.operations.ListTimerScriptsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "magni") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListTimerScriptsRequest req = new ListTimerScriptsRequest(828940);            

            ListTimerScriptsResponse res = sdk.agent.listTimerScripts(req);

            if (res.timerScripts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## new_

Add an agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewRequest;
import org.openapis.openapi.models.operations.NewResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Triplet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "alias") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            NewRequest req = new NewRequest("fugit",                 new org.openapis.openapi.models.shared.Triplet[]{{
                                add(new Triplet() {{
                                    device = "excepturi";
                                    mib = "tempora";
                                    scenario = 703737;
                                }}),
                                add(new Triplet() {{
                                    device = "tempore";
                                    mib = "labore";
                                    scenario = 962189;
                                }}),
                                add(new Triplet() {{
                                    device = "eum";
                                    mib = "non";
                                    scenario = 756107;
                                }}),
                            }}, 576157);            

            NewResponse res = sdk.agent.new_(req);

            if (res.new200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pauseNow

Pause the current agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PauseNowRequest;
import org.openapis.openapi.models.operations.PauseNowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PauseNowRequest req = new PauseNowRequest(896039);            

            PauseNowResponse res = sdk.agent.pauseNow(req);

            if (res.pauseNow200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolGetConfig

Returns the protocol's configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint", "officia") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolGetConfigRequest req = new ProtocolGetConfigRequest(223081, "debitis");            

            ProtocolGetConfigResponse res = sdk.agent.protocolGetConfig(req);

            if (res.protocolGetConfig200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reload

This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReloadRequest;
import org.openapis.openapi.models.operations.ReloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ReloadRequest req = new ReloadRequest(447125);            

            ReloadResponse res = sdk.agent.reload(req);

            if (res.reload200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resume

Resume the current agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumeRequest;
import org.openapis.openapi.models.operations.ResumeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "illum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ResumeRequest req = new ResumeRequest(978571);            

            ResumeResponse res = sdk.agent.resume(req);

            if (res.resume200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## save

Save agent MIB values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveRequest;
import org.openapis.openapi.models.operations.SaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SaveRequest req = new SaveRequest(297437);            

            SaveResponse res = sdk.agent.save(req);

            if (res.save200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setDelay

The minimum granularity is 10 msec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetDelayRequest;
import org.openapis.openapi.models.operations.SetDelayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque", "facere") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetDelayRequest req = new SetDelayRequest(411820, 396506);            

            SetDelayResponse res = sdk.agent.setDelay(req);

            if (res.setDelay200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setDrops

0 means no drops

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetDropsRequest;
import org.openapis.openapi.models.operations.SetDropsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "accusamus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetDropsRequest req = new SetDropsRequest(249796, 581273);            

            SetDropsResponse res = sdk.agent.setDrops(req);

            if (res.setDrops200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setHost

Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetHostRequest;
import org.openapis.openapi.models.operations.SetHostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "accusamus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetHostRequest req = new SetHostRequest(965417L, "quidem");            

            SetHostResponse res = sdk.agent.setHost(req);

            if (res.setHost200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setInformTimeout

The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetInformTimeoutRequest;
import org.openapis.openapi.models.operations.SetInformTimeoutResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "nam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetInformTimeoutRequest req = new SetInformTimeoutRequest(659669, 501324);            

            SetInformTimeoutResponse res = sdk.agent.setInformTimeout(req);

            if (res.setInformTimeout200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setInterface

network interface card for the agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetInterfaceRequest;
import org.openapis.openapi.models.operations.SetInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "sapiente") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetInterfaceRequest req = new SetInterfaceRequest(230533L, "deserunt");            

            SetInterfaceResponse res = sdk.agent.setInterface(req);

            if (res.setInterface200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setMask

subnet mask of the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetMaskRequest;
import org.openapis.openapi.models.operations.SetMaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetMaskRequest req = new SetMaskRequest(618809L, "omnis");            

            SetMaskResponse res = sdk.agent.setMask(req);

            if (res.setMask200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setMibs

set of MIBs, simulations and scenarios

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetMibsRequest;
import org.openapis.openapi.models.operations.SetMibsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Triplet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "perferendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetMibsRequest req = new SetMibsRequest(                new org.openapis.openapi.models.shared.Triplet[]{{
                                add(new Triplet() {{
                                    device = "magnam";
                                    mib = "distinctio";
                                    scenario = 660174;
                                }}),
                                add(new Triplet() {{
                                    device = "labore";
                                    mib = "labore";
                                    scenario = 383462;
                                }}),
                            }}, 618016);            

            SetMibsResponse res = sdk.agent.setMibs(req);

            if (res.setMibs200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setOiddir

MIB directory of the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetOiddirRequest;
import org.openapis.openapi.models.operations.SetOiddirResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "eum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetOiddirRequest req = new SetOiddirRequest(878453, "aspernatur");            

            SetOiddirResponse res = sdk.agent.setOiddir(req);

            if (res.setOiddir200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setOwner

owner of the agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetOwnerRequest;
import org.openapis.openapi.models.operations.SetOwnerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto", "magnam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetOwnerRequest req = new SetOwnerRequest(92373, "excepturi");            

            SetOwnerResponse res = sdk.agent.setOwner(req);

            if (res.setOwner200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPdusize

The limit for this configurable is 65536

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPdusizeRequest;
import org.openapis.openapi.models.operations.SetPdusizeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetPdusizeRequest req = new SetPdusizeRequest(551816, 574325);            

            SetPdusizeResponse res = sdk.agent.setPdusize(req);

            if (res.setPdusize200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPort

port number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPortRequest;
import org.openapis.openapi.models.operations.SetPortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium", "mollitia") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetPortRequest req = new SetPortRequest(968962, 652103);            

            SetPortResponse res = sdk.agent.setPort(req);

            if (res.setPort200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setPrivdir

private directory of the agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetPrivdirRequest;
import org.openapis.openapi.models.operations.SetPrivdirResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad", "eum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetPrivdirRequest req = new SetPrivdirRequest(221262, "necessitatibus");            

            SetPrivdirResponse res = sdk.agent.setPrivdir(req);

            if (res.setPrivdir200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setProtocols

protocols supported by agent as a comma-separated list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetProtocolsRequest;
import org.openapis.openapi.models.operations.SetProtocolsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit", "nemo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetProtocolsRequest req = new SetProtocolsRequest(                new String[]{{
                                add("iure"),
                            }}, 984043);            

            SetProtocolsResponse res = sdk.agent.setProtocols(req);

            if (res.setProtocols200ApplicationJSONStringIntegers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setReadCommunity

read community string

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetReadCommunityRequest;
import org.openapis.openapi.models.operations.SetReadCommunityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "eius") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetReadCommunityRequest req = new SetReadCommunityRequest(806194, "deleniti");            

            SetReadCommunityResponse res = sdk.agent.setReadCommunity(req);

            if (res.setReadCommunity200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setStarttime

relative start time

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetStarttimeRequest;
import org.openapis.openapi.models.operations.SetStarttimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "in") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetStarttimeRequest req = new SetStarttimeRequest(100226, 99569);            

            SetStarttimeResponse res = sdk.agent.setStarttime(req);

            if (res.setStarttime200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTrace

SNMP PDU tracing

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTraceRequest;
import org.openapis.openapi.models.operations.SetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae", "ullam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetTraceRequest req = new SetTraceRequest(714242, 469249);            

            SetTraceResponse res = sdk.agent.setTrace(req);

            if (res.setTrace200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setValidate

Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetValidateRequest;
import org.openapis.openapi.models.operations.SetValidateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat", "quibusdam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetValidateRequest req = new SetValidateRequest(149448, 904648);            

            SetValidateResponse res = sdk.agent.setValidate(req);

            if (res.setValidate200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setWriteCommunity

write community string

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetWriteCommunityRequest;
import org.openapis.openapi.models.operations.SetWriteCommunityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "accusantium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetWriteCommunityRequest req = new SetWriteCommunityRequest(162493, "praesentium");            

            SetWriteCommunityResponse res = sdk.agent.setWriteCommunity(req);

            if (res.setWriteCommunity200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## start

For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartRequest;
import org.openapis.openapi.models.operations.StartResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "magni") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StartRequest req = new StartRequest(123820);            

            StartResponse res = sdk.agent.start(req);

            if (res.start200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startIpalias

port defaults to 161 if not specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartIpaliasRequest;
import org.openapis.openapi.models.operations.StartIpaliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "illum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StartIpaliasRequest req = new StartIpaliasRequest("pariatur", 807319, 411397);            

            StartIpaliasResponse res = sdk.agent.startIpalias(req);

            if (res.startIpalias200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## statusIpalias

port defaults to 161 if not specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusIpaliasRequest;
import org.openapis.openapi.models.operations.StatusIpaliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "odit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StatusIpaliasRequest req = new StatusIpaliasRequest("ea", 33222, 69167);            

            StatusIpaliasResponse res = sdk.agent.statusIpalias(req);

            if (res.statusIpalias200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stop

Agent primary IP address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopRequest;
import org.openapis.openapi.models.operations.StopResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores", "quidem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StopRequest req = new StopRequest(373291);            

            StopResponse res = sdk.agent.stop(req);

            if (res.stop200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopIpalias

port defaults to 161 if not specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopIpaliasRequest;
import org.openapis.openapi.models.operations.StopIpaliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "autem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StopIpaliasRequest req = new StopIpaliasRequest("nam", 50588, 866383);            

            StopIpaliasResponse res = sdk.agent.stopIpalias(req);

            if (res.stopIpalias200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trapConfigAdd

Add a trap destination to the set of destinations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrapConfigAddRequest;
import org.openapis.openapi.models.operations.TrapConfigAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo", "voluptatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            TrapConfigAddRequest req = new TrapConfigAddRequest("perferendis", 855804, 230742);            

            TrapConfigAddResponse res = sdk.agent.trapConfigAdd(req);

            if (res.trapConfigAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trapConfigDel

Remove a trap destination from the set of destinations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrapConfigDelRequest;
import org.openapis.openapi.models.operations.TrapConfigDelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "cumque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            TrapConfigDelRequest req = new TrapConfigDelRequest("corporis", 944124, 729991);            

            TrapConfigDelResponse res = sdk.agent.trapConfigDel(req);

            if (res.trapConfigDel200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trapConfigList

Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrapConfigListRequest;
import org.openapis.openapi.models.operations.TrapConfigListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "dolores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            TrapConfigListRequest req = new TrapConfigListRequest(339404);            

            TrapConfigListResponse res = sdk.agent.trapConfigList(req);

            if (res.trapDests != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trapList

List the outstanding asynchronous traps for this agent instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrapListRequest;
import org.openapis.openapi.models.operations.TrapListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "dignissimos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            TrapListRequest req = new TrapListRequest(54338);            

            TrapListResponse res = sdk.agent.trapList(req);

            if (res.trapList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
