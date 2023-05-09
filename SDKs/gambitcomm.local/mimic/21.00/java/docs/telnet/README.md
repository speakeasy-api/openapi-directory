# telnet

### Available Operations

* [protocolTelnetConnectionLogon](#protocoltelnetconnectionlogon) - Changes the connection's current logon.
* [protocolTelnetConnectionRequest](#protocoltelnetconnectionrequest) - Executes the command asynchronously .
* [protocolTelnetConnectionSignal](#protocoltelnetconnectionsignal) - Triggers the asynchronous signal event with the specified signal name
* [protocolTelnetGetArgs](#protocoltelnetgetargs) - Show the agent's TELNET argument structure
* [protocolTelnetGetConfig](#protocoltelnetgetconfig) - Show the agent's TELNET configuration
* [protocolTelnetGetStatistics](#protocoltelnetgetstatistics) - Show the agent's TELNET statistics
* [protocolTelnetGetStatsHdr](#protocoltelnetgetstatshdr) - Show the TELNET statistics headers
* [protocolTelnetGetTrace](#protocoltelnetgettrace) - Show the agent's TELNET traffic tracing
* [protocolTelnetIpaliasDisable](#protocoltelnetipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasEnable](#protocoltelnetipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasIsenabled](#protocoltelnetipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasList](#protocoltelnetipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolTelnetServerGetConnections](#protocoltelnetservergetconnections) - Show the agent's TELNET connections
* [protocolTelnetServerGetKeymap](#protocoltelnetservergetkeymap) - Show the agent's TELNET keymap file name
* [protocolTelnetServerGetRulesdb](#protocoltelnetservergetrulesdb) - Show the agent's TELNET rules db file name
* [protocolTelnetServerGetState](#protocoltelnetservergetstate) - Show the agent's TELNET server state
* [protocolTelnetServerGetUserdb](#protocoltelnetservergetuserdb) - Show the agent's TELNET user db file name
* [protocolTelnetServerGetUsers](#protocoltelnetservergetusers) - Show the agent's TELNET users
* [protocolTelnetSetConfig](#protocoltelnetsetconfig) - Set the agent's TELNET configuration
* [protocolTelnetSetTrace](#protocoltelnetsettrace) - Set the agent's TELNET traffic tracing

## protocolTelnetConnectionLogon

Logon change allows (hidden) commands for a different access mode to run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetConnectionLogonRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetConnectionLogonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetConnectionLogonRequest req = new ProtocolTelnetConnectionLogonRequest(530089, 622385, "hic", "expedita");            

            ProtocolTelnetConnectionLogonResponse res = sdk.telnet.protocolTelnetConnectionLogon(req);

            if (res.protocolTelnetConnectionLogon200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetConnectionRequest

Equivalent of the command typed in by the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetConnectionRequestRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetConnectionRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "neque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetConnectionRequestRequest req = new ProtocolTelnetConnectionRequestRequest(677115, "nostrum", 639028);            

            ProtocolTelnetConnectionRequestResponse res = sdk.telnet.protocolTelnetConnectionRequest(req);

            if (res.protocolTelnetConnectionRequest200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetConnectionSignal

Signal name is either connect or idle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetConnectionSignalRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetConnectionSignalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "corrupti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetConnectionSignalRequest req = new ProtocolTelnetConnectionSignalRequest(879235, 272683, "atque");            

            ProtocolTelnetConnectionSignalResponse res = sdk.telnet.protocolTelnetConnectionSignal(req);

            if (res.protocolTelnetConnectionSignal200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetGetArgs

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "ut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetGetArgsRequest req = new ProtocolTelnetGetArgsRequest(856303);            

            ProtocolTelnetGetArgsResponse res = sdk.telnet.protocolTelnetGetArgs(req);

            if (res.protocolTelnetGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetGetConfig

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem", "culpa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetGetConfigRequest req = new ProtocolTelnetGetConfigRequest(710337);            

            ProtocolTelnetGetConfigResponse res = sdk.telnet.protocolTelnetGetConfig(req);

            if (res.configTELNET != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "consequatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetGetStatisticsRequest req = new ProtocolTelnetGetStatisticsRequest(460220);            

            ProtocolTelnetGetStatisticsResponse res = sdk.telnet.protocolTelnetGetStatistics(req);

            if (res.protocolTelnetGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "sit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetGetStatsHdrResponse res = sdk.telnet.protocolTelnetGetStatsHdr();

            if (res.protocolTelnetGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum", "quas") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetGetTraceRequest req = new ProtocolTelnetGetTraceRequest(922112);            

            ProtocolTelnetGetTraceResponse res = sdk.telnet.protocolTelnetGetTrace(req);

            if (res.configTELNET != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetIpaliasDisable

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetIpaliasDisableRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetIpaliasDisableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis", "et") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetIpaliasDisableRequest req = new ProtocolTelnetIpaliasDisableRequest(502710, "ex", 153627);            

            ProtocolTelnetIpaliasDisableResponse res = sdk.telnet.protocolTelnetIpaliasDisable(req);

            if (res.protocolTelnetIpaliasDisable200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetIpaliasEnable

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetIpaliasEnableRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetIpaliasEnableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetIpaliasEnableRequest req = new ProtocolTelnetIpaliasEnableRequest(342611, "saepe", 622231);            

            ProtocolTelnetIpaliasEnableResponse res = sdk.telnet.protocolTelnetIpaliasEnable(req);

            if (res.protocolTelnetIpaliasEnable200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetIpaliasIsenabled

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetIpaliasIsenabledRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetIpaliasIsenabledResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur", "incidunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetIpaliasIsenabledRequest req = new ProtocolTelnetIpaliasIsenabledRequest(968865, "dolorem", 690894);            

            ProtocolTelnetIpaliasIsenabledResponse res = sdk.telnet.protocolTelnetIpaliasIsenabled(req);

            if (res.protocolTelnetIpaliasIsenabled200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetIpaliasList

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetIpaliasListRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetIpaliasListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "architecto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetIpaliasListRequest req = new ProtocolTelnetIpaliasListRequest(577140);            

            ProtocolTelnetIpaliasListResponse res = sdk.telnet.protocolTelnetIpaliasList(req);

            if (res.ipAliases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetServerGetConnections

IDs of all connected connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetConnectionsRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetConnectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "quidem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetServerGetConnectionsRequest req = new ProtocolTelnetServerGetConnectionsRequest(539074);            

            ProtocolTelnetServerGetConnectionsResponse res = sdk.telnet.protocolTelnetServerGetConnections(req);

            if (res.protocolTelnetServerGetConnections200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetServerGetKeymap

Keymap file name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetKeymapRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetKeymapResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "nam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetServerGetKeymapRequest req = new ProtocolTelnetServerGetKeymapRequest(948861);            

            ProtocolTelnetServerGetKeymapResponse res = sdk.telnet.protocolTelnetServerGetKeymap(req);

            if (res.protocolTelnetServerGetKeymap200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetServerGetRulesdb

Rules db file name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetRulesdbRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetRulesdbResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam", "alias") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetServerGetRulesdbRequest req = new ProtocolTelnetServerGetRulesdbRequest(227084);            

            ProtocolTelnetServerGetRulesdbResponse res = sdk.telnet.protocolTelnetServerGetRulesdb(req);

            if (res.protocolTelnetServerGetRulesdb200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetServerGetState

Return 1 means accepting connections, 0 not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetStateRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "voluptate") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetServerGetStateRequest req = new ProtocolTelnetServerGetStateRequest(600392);            

            ProtocolTelnetServerGetStateResponse res = sdk.telnet.protocolTelnetServerGetState(req);

            if (res.protocolTelnetServerGetState200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetServerGetUserdb

User db file name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetUserdbRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetUserdbResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetServerGetUserdbRequest req = new ProtocolTelnetServerGetUserdbRequest(833819);            

            ProtocolTelnetServerGetUserdbResponse res = sdk.telnet.protocolTelnetServerGetUserdb(req);

            if (res.protocolTelnetServerGetUserdb200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetServerGetUsers

List of users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetUsersRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetServerGetUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "voluptates") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetServerGetUsersRequest req = new ProtocolTelnetServerGetUsersRequest(16871);            

            ProtocolTelnetServerGetUsersResponse res = sdk.telnet.protocolTelnetServerGetUsers(req);

            if (res.telnetUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetSetConfig

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est", "quidem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetSetConfigRequest req = new ProtocolTelnetSetConfigRequest(440666, "facere", "fuga");            

            ProtocolTelnetSetConfigResponse res = sdk.telnet.protocolTelnetSetConfig(req);

            if (res.protocolTelnetSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTelnetSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTelnetSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolTelnetSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium", "mollitia") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTelnetSetTraceRequest req = new ProtocolTelnetSetTraceRequest(333965, "voluptatem");            

            ProtocolTelnetSetTraceResponse res = sdk.telnet.protocolTelnetSetTrace(req);

            if (res.protocolTelnetSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
