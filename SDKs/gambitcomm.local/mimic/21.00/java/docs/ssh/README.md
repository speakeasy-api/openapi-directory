# ssh

### Available Operations

* [protocolSshGetArgs](#protocolsshgetargs) - Show the agent's SSH argument structure
* [protocolSshGetConfig](#protocolsshgetconfig) - Show the agent's SSH configuration
* [protocolSshGetStatistics](#protocolsshgetstatistics) - Show the agent's SSH statistics
* [protocolSshGetStatsHdr](#protocolsshgetstatshdr) - Show the SSH statistics headers
* [protocolSshGetTrace](#protocolsshgettrace) - Show the agent's SSH traffic tracing
* [protocolSshIpaliasDisable](#protocolsshipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasEnable](#protocolsshipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasIsenabled](#protocolsshipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasList](#protocolsshipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolSshSetConfig](#protocolsshsetconfig) - Set the agent's SSH configuration
* [protocolSshSetTrace](#protocolsshsettrace) - Set the agent's SSH traffic tracing

## protocolSshGetArgs

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolSshGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas", "hic") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshGetArgsRequest req = new ProtocolSshGetArgsRequest(201517);            

            ProtocolSshGetArgsResponse res = sdk.ssh.protocolSshGetArgs(req);

            if (res.protocolSshGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshGetConfig

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSshGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa", "corrupti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshGetConfigRequest req = new ProtocolSshGetConfigRequest(867290);            

            ProtocolSshGetConfigResponse res = sdk.ssh.protocolSshGetConfig(req);

            if (res.configSSH != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolSshGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "hic") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshGetStatisticsRequest req = new ProtocolSshGetStatisticsRequest(348783);            

            ProtocolSshGetStatisticsResponse res = sdk.ssh.protocolSshGetStatistics(req);

            if (res.protocolSshGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "sit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshGetStatsHdrResponse res = sdk.ssh.protocolSshGetStatsHdr();

            if (res.protocolSshGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolSshGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum", "sed") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshGetTraceRequest req = new ProtocolSshGetTraceRequest(967966);            

            ProtocolSshGetTraceResponse res = sdk.ssh.protocolSshGetTrace(req);

            if (res.configSSH != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshIpaliasDisable

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshIpaliasDisableRequest;
import org.openapis.openapi.models.operations.ProtocolSshIpaliasDisableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo", "asperiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshIpaliasDisableRequest req = new ProtocolSshIpaliasDisableRequest(707918, "voluptate", 709072);            

            ProtocolSshIpaliasDisableResponse res = sdk.ssh.protocolSshIpaliasDisable(req);

            if (res.protocolSshIpaliasDisable200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshIpaliasEnable

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshIpaliasEnableRequest;
import org.openapis.openapi.models.operations.ProtocolSshIpaliasEnableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "iste") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshIpaliasEnableRequest req = new ProtocolSshIpaliasEnableRequest(292794, "laborum", 152354);            

            ProtocolSshIpaliasEnableResponse res = sdk.ssh.protocolSshIpaliasEnable(req);

            if (res.protocolSshIpaliasEnable200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshIpaliasIsenabled

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshIpaliasIsenabledRequest;
import org.openapis.openapi.models.operations.ProtocolSshIpaliasIsenabledResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "commodi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshIpaliasIsenabledRequest req = new ProtocolSshIpaliasIsenabledRequest(696077, "explicabo", 378326);            

            ProtocolSshIpaliasIsenabledResponse res = sdk.ssh.protocolSshIpaliasIsenabled(req);

            if (res.protocolSshIpaliasIsenabled200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshIpaliasList

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshIpaliasListRequest;
import org.openapis.openapi.models.operations.ProtocolSshIpaliasListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "architecto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshIpaliasListRequest req = new ProtocolSshIpaliasListRequest(382808);            

            ProtocolSshIpaliasListResponse res = sdk.ssh.protocolSshIpaliasList(req);

            if (res.ipAliases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshSetConfig

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSshSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "debitis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshSetConfigRequest req = new ProtocolSshSetConfigRequest(72434, "reiciendis", "perferendis");            

            ProtocolSshSetConfigResponse res = sdk.ssh.protocolSshSetConfig(req);

            if (res.protocolSshSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSshSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSshSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolSshSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "maiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSshSetTraceRequest req = new ProtocolSshSetTraceRequest(274823, "sed");            

            ProtocolSshSetTraceResponse res = sdk.ssh.protocolSshSetTrace(req);

            if (res.protocolSshSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
