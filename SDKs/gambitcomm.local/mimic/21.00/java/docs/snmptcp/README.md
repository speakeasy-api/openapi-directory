# snmptcp

### Available Operations

* [protocolSnmptcpGetArgs](#protocolsnmptcpgetargs) - Show the agent's SNMPTCP argument structure
* [protocolSnmptcpGetConfig](#protocolsnmptcpgetconfig) - Show the agent's SNMPTCP configuration
* [protocolSnmptcpGetStatistics](#protocolsnmptcpgetstatistics) - Show the agent's SNMPTCP statistics
* [protocolSnmptcpGetStatsHdr](#protocolsnmptcpgetstatshdr) - Show the SNMPTCP statistics headers
* [protocolSnmptcpGetTrace](#protocolsnmptcpgettrace) - Show the agent's SNMPTCP traffic tracing
* [protocolSnmptcpIpaliasDisable](#protocolsnmptcpipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasEnable](#protocolsnmptcpipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasIsenabled](#protocolsnmptcpipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasList](#protocolsnmptcpipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolSnmptcpSetConfig](#protocolsnmptcpsetconfig) - Set the agent's SNMPTCP configuration
* [protocolSnmptcpSetTrace](#protocolsnmptcpsettrace) - Set the agent's SNMPTCP traffic tracing

## protocolSnmptcpGetArgs

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit", "ullam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpGetArgsRequest req = new ProtocolSnmptcpGetArgsRequest(391774);            

            ProtocolSnmptcpGetArgsResponse res = sdk.snmptcp.protocolSnmptcpGetArgs(req);

            if (res.protocolSnmptcpGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpGetConfig

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "voluptatum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpGetConfigRequest req = new ProtocolSnmptcpGetConfigRequest(185232);            

            ProtocolSnmptcpGetConfigResponse res = sdk.snmptcp.protocolSnmptcpGetConfig(req);

            if (res.configSNMPTCP != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "ex") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpGetStatisticsRequest req = new ProtocolSnmptcpGetStatisticsRequest(536275);            

            ProtocolSnmptcpGetStatisticsResponse res = sdk.snmptcp.protocolSnmptcpGetStatistics(req);

            if (res.protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpGetStatsHdrResponse res = sdk.snmptcp.protocolSnmptcpGetStatsHdr();

            if (res.protocolSnmptcpGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto", "omnis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpGetTraceRequest req = new ProtocolSnmptcpGetTraceRequest(945302);            

            ProtocolSnmptcpGetTraceResponse res = sdk.snmptcp.protocolSnmptcpGetTrace(req);

            if (res.configSNMPTCP != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpIpaliasDisable

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpIpaliasDisableRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpIpaliasDisableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi", "at") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpIpaliasDisableRequest req = new ProtocolSnmptcpIpaliasDisableRequest(92027, "voluptate", 55965);            

            ProtocolSnmptcpIpaliasDisableResponse res = sdk.snmptcp.protocolSnmptcpIpaliasDisable(req);

            if (res.protocolSnmptcpIpaliasDisable200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpIpaliasEnable

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpIpaliasEnableRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpIpaliasEnableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpIpaliasEnableRequest req = new ProtocolSnmptcpIpaliasEnableRequest(232744, "adipisci", 614465);            

            ProtocolSnmptcpIpaliasEnableResponse res = sdk.snmptcp.protocolSnmptcpIpaliasEnable(req);

            if (res.protocolSnmptcpIpaliasEnable200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpIpaliasIsenabled

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpIpaliasIsenabledRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpIpaliasIsenabledResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus", "accusantium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpIpaliasIsenabledRequest req = new ProtocolSnmptcpIpaliasIsenabledRequest(522371, "aut", 513075);            

            ProtocolSnmptcpIpaliasIsenabledResponse res = sdk.snmptcp.protocolSnmptcpIpaliasIsenabled(req);

            if (res.protocolSnmptcpIpaliasIsenabled200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpIpaliasList

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpIpaliasListRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpIpaliasListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "mollitia") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpIpaliasListRequest req = new ProtocolSnmptcpIpaliasListRequest(68074);            

            ProtocolSnmptcpIpaliasListResponse res = sdk.snmptcp.protocolSnmptcpIpaliasList(req);

            if (res.ipAliases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpSetConfig

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "non") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpSetConfigRequest req = new ProtocolSnmptcpSetConfigRequest(32465, "dolor", "occaecati");            

            ProtocolSnmptcpSetConfigResponse res = sdk.snmptcp.protocolSnmptcpSetConfig(req);

            if (res.protocolSnmptcpSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSnmptcpSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSnmptcpSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolSnmptcpSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "impedit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSnmptcpSetTraceRequest req = new ProtocolSnmptcpSetTraceRequest(131055, "voluptas");            

            ProtocolSnmptcpSetTraceResponse res = sdk.snmptcp.protocolSnmptcpSetTrace(req);

            if (res.protocolSnmptcpSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
