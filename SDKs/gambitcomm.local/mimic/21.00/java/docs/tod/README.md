# tod

### Available Operations

* [protocolTodGetArgs](#protocoltodgetargs) - Show the agent's TOD argument structure
* [protocolTodGetConfig](#protocoltodgetconfig) - Show the agent's TOD configuration
* [protocolTodGetStatistics](#protocoltodgetstatistics) - Show the agent's TOD statistics
* [protocolTodGetStatsHdr](#protocoltodgetstatshdr) - Show the TOD statistics headers
* [protocolTodGetTrace](#protocoltodgettrace) - Show the agent's TOD traffic tracing
* [protocolTodGettime](#protocoltodgettime) - Retrieve TOD time
* [protocolTodSetConfig](#protocoltodsetconfig) - Set the agent's TOD configuration
* [protocolTodSetTrace](#protocoltodsettrace) - Set the agent's TOD traffic tracing

## protocolTodGetArgs

Agent's TOD configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTodGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolTodGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis", "perspiciatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTodGetArgsRequest req = new ProtocolTodGetArgsRequest(446394);            

            ProtocolTodGetArgsResponse res = sdk.tod.protocolTodGetArgs(req);

            if (res.protocolTodGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTodGetConfig

Agent's TOD configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTodGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolTodGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci", "eveniet") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTodGetConfigRequest req = new ProtocolTodGetConfigRequest(580887);            

            ProtocolTodGetConfigResponse res = sdk.tod.protocolTodGetConfig(req);

            if (res.configTOD != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTodGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTodGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolTodGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "fugit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTodGetStatisticsRequest req = new ProtocolTodGetStatisticsRequest(661118);            

            ProtocolTodGetStatisticsResponse res = sdk.tod.protocolTodGetStatistics(req);

            if (res.protocolTodGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTodGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTodGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "reprehenderit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTodGetStatsHdrResponse res = sdk.tod.protocolTodGetStatsHdr();

            if (res.protocolTodGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTodGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTodGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolTodGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "illo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTodGetTraceRequest req = new ProtocolTodGetTraceRequest(361306);            

            ProtocolTodGetTraceResponse res = sdk.tod.protocolTodGetTrace(req);

            if (res.configTOD != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTodGettime

Retrive time from server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTodGettimeRequest;
import org.openapis.openapi.models.operations.ProtocolTodGettimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "eveniet") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTodGettimeRequest req = new ProtocolTodGettimeRequest(247399, 878493, 39615, "iure", "ipsa", 517612);            

            ProtocolTodGettimeResponse res = sdk.tod.protocolTodGettime(req);

            if (res.protocolTodGettime200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTodSetConfig

Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTodSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolTodSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae", "molestiae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTodSetConfigRequest req = new ProtocolTodSetConfigRequest(907733, "qui", "cum");            

            ProtocolTodSetConfigResponse res = sdk.tod.protocolTodSetConfig(req);

            if (res.protocolTodSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTodSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTodSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolTodSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "necessitatibus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTodSetTraceRequest req = new ProtocolTodSetTraceRequest(187552, "laborum");            

            ProtocolTodSetTraceResponse res = sdk.tod.protocolTodSetTrace(req);

            if (res.protocolTodSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
