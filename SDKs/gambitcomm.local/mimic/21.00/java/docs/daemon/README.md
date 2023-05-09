# daemon

### Available Operations

* [addDaemonTimerScript](#adddaemontimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [cfgLoad](#cfgload) - Load the lab configuration file file.
* [cfgNew](#cfgnew) - Clear the lab configuration.
* [cfgSave](#cfgsave) - Save the lab configuration.
* [cfgSaveas](#cfgsaveas) - Save the lab configuration in file.
* [delDaemonTimerScript](#deldaemontimerscript) - Remove a timer script from the execution list.
* [getActiveDataList](#getactivedatalist) - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
* [getActiveList](#getactivelist) - The list of {agentnum} that are currently active (running or paused).
* [getCfgFileChanged](#getcfgfilechanged) - This predicate indicates if the currently loaded agent configuration file has changed.
* [getCfgfile](#getcfgfile) - The currently loaded lab configuration file for the particular user.
* [getChangedConfigList](#getchangedconfiglist) - The list of {agentnum} for which a configurable parameter changed.
* [getChangedStateList](#getchangedstatelist) - The list of {agentnum state} for which the state changed.
* [getClients](#getclients) - The number of clients currently connected to the daemon.
* [getConfiguredList](#getconfiguredlist) - The list of {agentnum} that are currently configured.
* [getDaemonProtocols](#getdaemonprotocols) - The set of protocols supported by the Simulator.
* [getInterfaces](#getinterfaces) - The set of network interfaces that can be used for simulations.
* [getLast](#getlast) - The last configured agent instance.
* [getLog](#getlog) - The current log file for the Simulator.
* [getMax](#getmax) - The maximum number of agent instances.
* [getNetaddr](#getnetaddr) - The network address of the host where the MIMIC simulator is running.
* [getNetdev](#getnetdev) - The default network device to be used for agent addresses.
* [getProduct](#getproduct) - The product number that is licensed.
* [getReturn](#getreturn) - The return mode.
* [getVersion](#getversion) - The version of the MIMIC command interface.
* [listDaemonTimerScripts](#listdaemontimerscripts) - List the timer scripts currently running along with the their intervals.
* [mgetInfo](#mgetinfo) - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
* [setLog](#setlog) - The current log file for the Simulator.
* [setNetdev](#setnetdev) - The network address of the host where the MIMIC simulator is running.
* [startAllAgents](#startallagents) - Start MIMIC.
* [stopAllAgents](#stopallagents) - Stop MIMIC.
* [storeExists](#storeexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [storeGet](#storeget) - Fetches the value associated with a variable.
* [storeList](#storelist) - This command will return the list of variables in the said scope.
* [storeLreplace](#storelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [storePersists](#storepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [storeSave](#storesave) - This operation flushes all global objects which need to be made persistent to disk.
* [storeSet](#storeset) - Set the variable store for the global storage
* [storeUnset](#storeunset) - Deletes a variable which is currently defined.
* [terminate](#terminate) - Terminate the MIMIC daemon.

## addDaemonTimerScript

Add a new timer script to be executed at specified interval (in msec) with the specified argument.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddDaemonTimerScriptRequest;
import org.openapis.openapi.models.operations.AddDaemonTimerScriptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            AddDaemonTimerScriptRequest req = new AddDaemonTimerScriptRequest("numquam", 85295, "ipsa");            

            AddDaemonTimerScriptResponse res = sdk.daemon.addDaemonTimerScript(req);

            if (res.addDaemonTimerScript200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cfgLoad

Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CfgLoadRequest;
import org.openapis.openapi.models.operations.CfgLoadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "iure") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CfgLoadRequest req = new CfgLoadRequest("odio", 311796, 881005, 696344);            

            CfgLoadResponse res = sdk.daemon.cfgLoad(req);

            if (res.cfgLoad200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cfgNew

Clear the lab configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CfgNewRequest;
import org.openapis.openapi.models.operations.CfgNewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "voluptas") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CfgNewRequest req = new CfgNewRequest(617658, 179603);            

            CfgNewResponse res = sdk.daemon.cfgNew(req);

            if (res.cfgNew200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cfgSave

Save the lab configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CfgSaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque", "sit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CfgSaveResponse res = sdk.daemon.cfgSave();

            if (res.cfgSave200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cfgSaveas

Save the lab configuration in file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CfgSaveasRequest;
import org.openapis.openapi.models.operations.CfgSaveasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat", "ab") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CfgSaveasRequest req = new CfgSaveasRequest("soluta", 679393, 478596);            

            CfgSaveasResponse res = sdk.daemon.cfgSaveas(req);

            if (res.cfgSaveas200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delDaemonTimerScript

The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DelDaemonTimerScriptRequest;
import org.openapis.openapi.models.operations.DelDaemonTimerScriptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DelDaemonTimerScriptRequest req = new DelDaemonTimerScriptRequest("deleniti", 607045, "necessitatibus");            

            DelDaemonTimerScriptResponse res = sdk.daemon.delDaemonTimerScript(req);

            if (res.delDaemonTimerScript200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActiveDataList

This list is guaranteed to be sorted into increasing order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActiveDataListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "asperiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetActiveDataListResponse res = sdk.daemon.getActiveDataList();

            if (res.getActiveDataList200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActiveList

This list is guaranteed to be sorted into increasing order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActiveListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil", "ipsum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetActiveListResponse res = sdk.daemon.getActiveList();

            if (res.getActiveList200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCfgFileChanged

Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCfgFileChangedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "id") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetCfgFileChangedResponse res = sdk.daemon.getCfgFileChanged();

            if (res.getCfgFileChanged200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCfgfile

In the case of multi-user access this command returns a different configuration file loaded for each user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCfgfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "eius") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetCfgfileResponse res = sdk.daemon.getCfgfile();

            if (res.getCfgfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangedConfigList

This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangedConfigListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "perferendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetChangedConfigListResponse res = sdk.daemon.getChangedConfigList();

            if (res.getChangedConfigList200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangedStateList

This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangedStateListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "optio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetChangedStateListResponse res = sdk.daemon.getChangedStateList();

            if (res.agentStates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClients

The number of clients currently connected to the daemon.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "ad") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetClientsResponse res = sdk.daemon.getClients();

            if (res.getClients200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfiguredList

This list is guaranteed to be sorted into increasing order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfiguredListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "suscipit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetConfiguredListResponse res = sdk.daemon.getConfiguredList();

            if (res.getConfiguredList200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDaemonProtocols

The set of protocols supported by the Simulator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDaemonProtocolsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDaemonProtocolsResponse res = sdk.daemon.getDaemonProtocols();

            if (res.getDaemonProtocols200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInterfaces

The set of network interfaces that can be used for simulations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInterfacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima", "repellendus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetInterfacesResponse res = sdk.daemon.getInterfaces();

            if (res.getInterfaces200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLast

The last configured agent instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "similique") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetLastResponse res = sdk.daemon.getLast();

            if (res.getLast200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLog

The current log file for the Simulator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias", "at") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetLogResponse res = sdk.daemon.getLog();

            if (res.getLog200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMax

The maximum number of agent instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMaxResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat", "tempora") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetMaxResponse res = sdk.daemon.getMax();

            if (res.getMax200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetaddr

The network address of the host where the MIMIC simulator is running.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetaddrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "quod") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetNetaddrResponse res = sdk.daemon.getNetaddr();

            if (res.getNetaddr200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetdev

The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetdevResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis", "qui") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetNetdevResponse res = sdk.daemon.getNetdev();

            if (res.getNetdev200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProduct

The product number that is licensed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "a") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetProductResponse res = sdk.daemon.getProduct();

            if (res.getProduct200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReturn

The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReturnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "harum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReturnResponse res = sdk.daemon.getReturn();

            if (res.getReturn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVersion

The version of the MIMIC command interface.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto", "ipsum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetVersionResponse res = sdk.daemon.getVersion();

            if (res.getVersion200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDaemonTimerScripts

The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDaemonTimerScriptsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam", "tenetur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListDaemonTimerScriptsResponse res = sdk.daemon.listDaemonTimerScripts();

            if (res.timerScripts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mgetInfo

Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MgetInfoRequest;
import org.openapis.openapi.models.operations.MgetInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "tempore") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            MgetInfoRequest req = new MgetInfoRequest(                new String[]{{
                                add("numquam"),
                                add("enim"),
                                add("dolorem"),
                                add("sapiente"),
                            }});            

            MgetInfoResponse res = sdk.daemon.mgetInfo(req);

            if (res.mgetInfo200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setLog

The current log file for the Simulator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetLogResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "nihil") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "sit"            

            SetLogResponse res = sdk.daemon.setLog(req);

            if (res.setLog200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setNetdev

The network address of the host where the MIMIC simulator is running.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetNetdevResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita", "neque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            SetNetdevResponse res = sdk.daemon.setNetdev();

            if (res.setNetdev200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAllAgents

Start MIMIC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAllAgentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StartAllAgentsResponse res = sdk.daemon.startAllAgents();

            if (res.startAllAgents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopAllAgents

Stop MIMIC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopAllAgentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero", "voluptas") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StopAllAgentsResponse res = sdk.daemon.stopAllAgents();

            if (res.stopAllAgents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeExists

It returns "1" if the variable exists, else "0".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreExistsRequest;
import org.openapis.openapi.models.operations.StoreExistsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "quam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StoreExistsRequest req = new StoreExistsRequest("ipsum");            

            StoreExistsResponse res = sdk.daemon.storeExists(req);

            if (res.storeExists200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeGet

The value will be returned as a string (like all Tcl values).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreGetRequest;
import org.openapis.openapi.models.operations.StoreGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt", "qui") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StoreGetRequest req = new StoreGetRequest("cupiditate");            

            StoreGetResponse res = sdk.daemon.storeGet(req);

            if (res.storeGet200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeList

The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "pariatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StoreListResponse res = sdk.daemon.storeList();

            if (res.storeList200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeLreplace

These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreLreplaceRequest;
import org.openapis.openapi.models.operations.StoreLreplaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StoreLreplaceRequest req = new StoreLreplaceRequest(674848, "totam") {{
                requestBody = "incidunt";
            }};            

            StoreLreplaceResponse res = sdk.daemon.storeLreplace(req);

            if (res.storeLreplace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storePersists

It returns "1" if the variable is persistent, else "0".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorePersistsRequest;
import org.openapis.openapi.models.operations.StorePersistsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "dolores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StorePersistsRequest req = new StorePersistsRequest("distinctio");            

            StorePersistsResponse res = sdk.daemon.storePersists(req);

            if (res.storePersists200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeSave

The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreSaveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "aliquid") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StoreSaveResponse res = sdk.daemon.storeSave();

            if (res.storeSave200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeSet

Persist 1 means persistent , 0 means non-persistent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreSetRequest;
import org.openapis.openapi.models.operations.StoreSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam", "molestias") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StoreSetRequest req = new StoreSetRequest(840429, "qui") {{
                requestBody = "neque";
            }};            

            StoreSetResponse res = sdk.daemon.storeSet(req);

            if (res.storeSet200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storeUnset

This will cleanup persistent variables if needed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoreUnsetRequest;
import org.openapis.openapi.models.operations.StoreUnsetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "magni") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            StoreUnsetRequest req = new StoreUnsetRequest("odio");            

            StoreUnsetResponse res = sdk.daemon.storeUnset(req);

            if (res.storeUnset200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminate

Terminate the MIMIC daemon.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt", "ullam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            TerminateResponse res = sdk.daemon.terminate();

            if (res.terminate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
