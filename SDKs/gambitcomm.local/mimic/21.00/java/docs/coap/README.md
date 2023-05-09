# coap

### Available Operations

* [protocolCoapGetArgs](#protocolcoapgetargs) - Show the agent's COAP argument structure
* [protocolCoapGetConfig](#protocolcoapgetconfig) - Show the agent's COAP configuration
* [protocolCoapGetStatistics](#protocolcoapgetstatistics) - Show the agent's COAP statistics
* [protocolCoapGetStatsHdr](#protocolcoapgetstatshdr) - Show the COAP statistics headers
* [protocolCoapGetTrace](#protocolcoapgettrace) - Show the agent's COAP traffic tracing
* [protocolCoapSetConfig](#protocolcoapsetconfig) - Set the agent's COAP configuration
* [protocolCoapSetTrace](#protocolcoapsettrace) - Set the agent's COAP traffic tracing

## protocolCoapGetArgs

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolCoapGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolCoapGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "nesciunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolCoapGetArgsRequest req = new ProtocolCoapGetArgsRequest(179490);            

            ProtocolCoapGetArgsResponse res = sdk.coap.protocolCoapGetArgs(req);

            if (res.protocolCoapGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolCoapGetConfig

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolCoapGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolCoapGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "dolores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolCoapGetConfigRequest req = new ProtocolCoapGetConfigRequest(793698);            

            ProtocolCoapGetConfigResponse res = sdk.coap.protocolCoapGetConfig(req);

            if (res.configCOAP != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolCoapGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolCoapGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolCoapGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam", "dolor") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolCoapGetStatisticsRequest req = new ProtocolCoapGetStatisticsRequest(874573);            

            ProtocolCoapGetStatisticsResponse res = sdk.coap.protocolCoapGetStatistics(req);

            if (res.protocolCoapGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolCoapGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolCoapGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum", "hic") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolCoapGetStatsHdrResponse res = sdk.coap.protocolCoapGetStatsHdr();

            if (res.protocolCoapGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolCoapGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolCoapGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolCoapGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "omnis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolCoapGetTraceRequest req = new ProtocolCoapGetTraceRequest(704415);            

            ProtocolCoapGetTraceResponse res = sdk.coap.protocolCoapGetTrace(req);

            if (res.configCOAP != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolCoapSetConfig

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolCoapSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolCoapSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis", "voluptatem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolCoapSetConfigRequest req = new ProtocolCoapSetConfigRequest(783645, "consequuntur", "blanditiis");            

            ProtocolCoapSetConfigResponse res = sdk.coap.protocolCoapSetConfig(req);

            if (res.protocolCoapSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolCoapSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolCoapSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolCoapSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "eaque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolCoapSetTraceRequest req = new ProtocolCoapSetTraceRequest(577229, "rerum");            

            ProtocolCoapSetTraceResponse res = sdk.coap.protocolCoapSetTrace(req);

            if (res.protocolCoapSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
