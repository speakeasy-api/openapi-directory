# syslog

### Available Operations

* [protocolSyslogGetArgs](#protocolsysloggetargs) - Show the agent's SYSLOG argument structure
* [protocolSyslogGetAttr](#protocolsysloggetattr) - Show the outgoing message's attributes
* [protocolSyslogGetConfig](#protocolsysloggetconfig) - Show the agent's SYSLOG configuration
* [protocolSyslogGetStatistics](#protocolsysloggetstatistics) - Show the agent's SYSLOG statistics
* [protocolSyslogGetStatsHdr](#protocolsysloggetstatshdr) - Show the SYSLOG statistics headers
* [protocolSyslogGetTrace](#protocolsysloggettrace) - Show the agent's SYSLOG traffic tracing
* [protocolSyslogSend](#protocolsyslogsend) - Set the agent's SYSLOG traffic tracing
* [protocolSyslogSetAttr](#protocolsyslogsetattr) - Set the outgoing message's attributes
* [protocolSyslogSetConfig](#protocolsyslogsetconfig) - Set the agent's SYSLOG configuration
* [protocolSyslogSetTrace](#protocolsyslogsettrace) - Set the agent's SYSLOG traffic tracing

## protocolSyslogGetArgs

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "eius") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogGetArgsRequest req = new ProtocolSyslogGetArgsRequest(896762);            

            ProtocolSyslogGetArgsResponse res = sdk.syslog.protocolSyslogGetArgs(req);

            if (res.protocolSyslogGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogGetAttr

Attribute can be server , sequence , separator , hostname , timestamp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogGetAttrRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogGetAttrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum", "ea") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogGetAttrRequest req = new ProtocolSyslogGetAttrRequest(579912, "quos");            

            ProtocolSyslogGetAttrResponse res = sdk.syslog.protocolSyslogGetAttr(req);

            if (res.protocolSyslogGetAttr200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogGetConfig

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "tempora") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogGetConfigRequest req = new ProtocolSyslogGetConfigRequest(273009);            

            ProtocolSyslogGetConfigResponse res = sdk.syslog.protocolSyslogGetConfig(req);

            if (res.configSYSLOG != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "reiciendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogGetStatisticsRequest req = new ProtocolSyslogGetStatisticsRequest(401713);            

            ProtocolSyslogGetStatisticsResponse res = sdk.syslog.protocolSyslogGetStatistics(req);

            if (res.protocolSyslogGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit", "non") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogGetStatsHdrResponse res = sdk.syslog.protocolSyslogGetStatsHdr();

            if (res.protocolSyslogGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis", "praesentium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogGetTraceRequest req = new ProtocolSyslogGetTraceRequest(708609);            

            ProtocolSyslogGetTraceResponse res = sdk.syslog.protocolSyslogGetTrace(req);

            if (res.configSYSLOG != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogSend

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogSendRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogSendResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyslogMsg;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat", "incidunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogSendRequest req = new ProtocolSyslogSendRequest(                new SyslogMsg() {{
                                hostname = "harmonious-tenement.name";
                                message = "sit";
                                separator = "nobis";
                                sequence = "error";
                                timestamp = "veniam";
                            }};, 329543, 924159);            

            ProtocolSyslogSendResponse res = sdk.syslog.protocolSyslogSend(req);

            if (res.protocolSyslogSend200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogSetAttr

Attribute can be server , sequence , separator , hostname , timestamp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogSetAttrRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogSetAttrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "nulla") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogSetAttrRequest req = new ProtocolSyslogSetAttrRequest(168576, "aperiam", "saepe");            

            ProtocolSyslogSetAttrResponse res = sdk.syslog.protocolSyslogSetAttr(req);

            if (res.protocolSyslogSetAttr200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogSetConfig

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "veniam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogSetConfigRequest req = new ProtocolSyslogSetConfigRequest(446135, "officiis", "beatae");            

            ProtocolSyslogSetConfigResponse res = sdk.syslog.protocolSyslogSetConfig(req);

            if (res.protocolSyslogSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSyslogSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSyslogSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolSyslogSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium", "exercitationem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSyslogSetTraceRequest req = new ProtocolSyslogSetTraceRequest(510629, "cum");            

            ProtocolSyslogSetTraceResponse res = sdk.syslog.protocolSyslogSetTrace(req);

            if (res.protocolSyslogSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
