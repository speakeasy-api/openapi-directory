# ipmi

### Available Operations

* [protocolIpmiGetArgs](#protocolipmigetargs) - Show the agent's IPMI argument structure
* [protocolIpmiGetAttr](#protocolipmigetattr) - Show the outgoing message's attributes
* [protocolIpmiGetConfig](#protocolipmigetconfig) - Show the agent's IPMI configuration
* [protocolIpmiGetStatistics](#protocolipmigetstatistics) - Show the agent's IPMI statistics
* [protocolIpmiGetStatsHdr](#protocolipmigetstatshdr) - Show the IPMI statistics headers
* [protocolIpmiGetTrace](#protocolipmigettrace) - Show the agent's IPMI traffic tracing
* [protocolIpmiSetAttr](#protocolipmisetattr) - Set the outgoing message's attributes
* [protocolIpmiSetConfig](#protocolipmisetconfig) - Set the agent's IPMI configuration
* [protocolIpmiSetTrace](#protocolipmisettrace) - Set the agent's IPMI traffic tracing

## protocolIpmiGetArgs

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolIpmiGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam", "hic") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiGetArgsRequest req = new ProtocolIpmiGetArgsRequest(30452);            

            ProtocolIpmiGetArgsResponse res = sdk.ipmi.protocolIpmiGetArgs(req);

            if (res.protocolIpmiGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolIpmiGetAttr

Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiGetAttrRequest;
import org.openapis.openapi.models.operations.ProtocolIpmiGetAttrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque", "soluta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiGetAttrRequest req = new ProtocolIpmiGetAttrRequest(748664, "et");            

            ProtocolIpmiGetAttrResponse res = sdk.ipmi.protocolIpmiGetAttr(req);

            if (res.protocolIpmiGetAttr200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolIpmiGetConfig

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolIpmiGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "ipsum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiGetConfigRequest req = new ProtocolIpmiGetConfigRequest(83422);            

            ProtocolIpmiGetConfigResponse res = sdk.ipmi.protocolIpmiGetConfig(req);

            if (res.configIPMI != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolIpmiGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolIpmiGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "quos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiGetStatisticsRequest req = new ProtocolIpmiGetStatisticsRequest(731694);            

            ProtocolIpmiGetStatisticsResponse res = sdk.ipmi.protocolIpmiGetStatistics(req);

            if (res.protocolIpmiGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolIpmiGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate", "aperiam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiGetStatsHdrResponse res = sdk.ipmi.protocolIpmiGetStatsHdr();

            if (res.protocolIpmiGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolIpmiGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolIpmiGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "dolorem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiGetTraceRequest req = new ProtocolIpmiGetTraceRequest(292147);            

            ProtocolIpmiGetTraceResponse res = sdk.ipmi.protocolIpmiGetTrace(req);

            if (res.configIPMI != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolIpmiSetAttr

Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiSetAttrRequest;
import org.openapis.openapi.models.operations.ProtocolIpmiSetAttrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "adipisci") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiSetAttrRequest req = new ProtocolIpmiSetAttrRequest(677263, "architecto", "quae");            

            ProtocolIpmiSetAttrResponse res = sdk.ipmi.protocolIpmiSetAttr(req);

            if (res.protocolIpmiSetAttr200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolIpmiSetConfig

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolIpmiSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "quas") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiSetConfigRequest req = new ProtocolIpmiSetConfigRequest(929530, "consequatur", "est");            

            ProtocolIpmiSetConfigResponse res = sdk.ipmi.protocolIpmiSetConfig(req);

            if (res.protocolIpmiSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolIpmiSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolIpmiSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolIpmiSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus", "porro") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolIpmiSetTraceRequest req = new ProtocolIpmiSetTraceRequest(984330, "ut");            

            ProtocolIpmiSetTraceResponse res = sdk.ipmi.protocolIpmiSetTrace(req);

            if (res.protocolIpmiSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
