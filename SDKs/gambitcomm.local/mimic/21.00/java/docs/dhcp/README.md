# dhcp

### Available Operations

* [protocolDhcpGetArgs](#protocoldhcpgetargs) - Show the agent's DHCP argument structure
* [protocolDhcpGetConfig](#protocoldhcpgetconfig) - Show the agent's DHCP configuration
* [protocolDhcpGetStatistics](#protocoldhcpgetstatistics) - Show the agent's DHCP statistics
* [protocolDhcpGetStatsHdr](#protocoldhcpgetstatshdr) - Show the DHCP statistics headers
* [protocolDhcpGetTrace](#protocoldhcpgettrace) - Show the agent's DHCP traffic tracing
* [protocolDhcpParams](#protocoldhcpparams) - Show the parameters configured by the server in its DHCP-OFFER message
* [protocolDhcpSetConfig](#protocoldhcpsetconfig) - Set the agent's DHCP configuration
* [protocolDhcpSetTrace](#protocoldhcpsettrace) - Set the agent's DHCP traffic tracing

## protocolDhcpGetArgs

Agent's DHCP configuration particulars

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolDhcpGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolDhcpGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci", "asperiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolDhcpGetArgsRequest req = new ProtocolDhcpGetArgsRequest(934214);            

            ProtocolDhcpGetArgsResponse res = sdk.dhcp.protocolDhcpGetArgs(req);

            if (res.protocolDhcpGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolDhcpGetConfig

Agent's DHCP configuration hwaddr,classid,add_options,script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolDhcpGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolDhcpGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "iste") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolDhcpGetConfigRequest req = new ProtocolDhcpGetConfigRequest(679091);            

            ProtocolDhcpGetConfigResponse res = sdk.dhcp.protocolDhcpGetConfig(req);

            if (res.configDHCP != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolDhcpGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolDhcpGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolDhcpGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "pariatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolDhcpGetStatisticsRequest req = new ProtocolDhcpGetStatisticsRequest(589910);            

            ProtocolDhcpGetStatisticsResponse res = sdk.dhcp.protocolDhcpGetStatistics(req);

            if (res.protocolDhcpGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolDhcpGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolDhcpGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "libero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolDhcpGetStatsHdrResponse res = sdk.dhcp.protocolDhcpGetStatsHdr();

            if (res.protocolDhcpGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolDhcpGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolDhcpGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolDhcpGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "quaerat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolDhcpGetTraceRequest req = new ProtocolDhcpGetTraceRequest(554242);            

            ProtocolDhcpGetTraceResponse res = sdk.dhcp.protocolDhcpGetTrace(req);

            if (res.configDHCP != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolDhcpParams

DHCP-OFFER message parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolDhcpParamsRequest;
import org.openapis.openapi.models.operations.ProtocolDhcpParamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid", "dolorem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolDhcpParamsRequest req = new ProtocolDhcpParamsRequest(209843);            

            ProtocolDhcpParamsResponse res = sdk.dhcp.protocolDhcpParams(req);

            if (res.protocolDhcpParams200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolDhcpSetConfig

Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolDhcpSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolDhcpSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "qui") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolDhcpSetConfigRequest req = new ProtocolDhcpSetConfigRequest(218749, "hic", "excepturi");            

            ProtocolDhcpSetConfigResponse res = sdk.dhcp.protocolDhcpSetConfig(req);

            if (res.protocolDhcpSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolDhcpSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolDhcpSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolDhcpSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum", "voluptate") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolDhcpSetTraceRequest req = new ProtocolDhcpSetTraceRequest(490459, "reiciendis");            

            ProtocolDhcpSetTraceResponse res = sdk.dhcp.protocolDhcpSetTrace(req);

            if (res.protocolDhcpSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
