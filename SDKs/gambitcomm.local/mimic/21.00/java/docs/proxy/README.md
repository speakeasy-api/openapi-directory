# proxy

### Available Operations

* [protocolProxyGetArgs](#protocolproxygetargs) - Show the agent's PROXY argument structure
* [protocolProxyGetConfig](#protocolproxygetconfig) - Show the agent's PROXY configuration
* [protocolProxyGetStatistics](#protocolproxygetstatistics) - Show the agent's PROXY statistics
* [protocolProxyGetStatsHdr](#protocolproxygetstatshdr) - Show the PROXY statistics headers
* [protocolProxyGetTrace](#protocolproxygettrace) - Show the agent's PROXY traffic tracing
* [protocolProxyPortAdd](#protocolproxyportadd) - Add individual proxy target on the agent and the simulator host
* [protocolProxyPortIsstarted](#protocolproxyportisstarted) - Check individual target
* [protocolProxyPortList](#protocolproxyportlist) - List all proxy targets
* [protocolProxyPortRemove](#protocolproxyportremove) - Remove individual proxy target on the agent and the simulator host
* [protocolProxyPortStart](#protocolproxyportstart) - Start additional target
* [protocolProxyPortStop](#protocolproxyportstop) - Stop additional target
* [protocolProxySetConfig](#protocolproxysetconfig) - Set the agent's PROXY configuration
* [protocolProxySetTrace](#protocolproxysettrace) - Set the agent's PROXY traffic tracing

## protocolProxyGetArgs

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolProxyGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque", "explicabo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyGetArgsRequest req = new ProtocolProxyGetArgsRequest(325685);            

            ProtocolProxyGetArgsResponse res = sdk.proxy.protocolProxyGetArgs(req);

            if (res.protocolProxyGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyGetConfig

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolProxyGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi", "fugit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyGetConfigRequest req = new ProtocolProxyGetConfigRequest(956406);            

            ProtocolProxyGetConfigResponse res = sdk.proxy.protocolProxyGetConfig(req);

            if (res.configPROXY != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolProxyGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "ratione") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyGetStatisticsRequest req = new ProtocolProxyGetStatisticsRequest(129412);            

            ProtocolProxyGetStatisticsResponse res = sdk.proxy.protocolProxyGetStatistics(req);

            if (res.protocolProxyGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyGetStatsHdrResponse res = sdk.proxy.protocolProxyGetStatsHdr();

            if (res.protocolProxyGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolProxyGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque", "et") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyGetTraceRequest req = new ProtocolProxyGetTraceRequest(456911);            

            ProtocolProxyGetTraceResponse res = sdk.proxy.protocolProxyGetTrace(req);

            if (res.configPROXY != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyPortAdd

Additional proxy target

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyPortAddRequest;
import org.openapis.openapi.models.operations.ProtocolProxyPortAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet", "accusamus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyPortAddRequest req = new ProtocolProxyPortAddRequest(82971, 458604, "quod", 724168);            

            ProtocolProxyPortAddResponse res = sdk.proxy.protocolProxyPortAdd(req);

            if (res.protocolProxyPortAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyPortIsstarted

Check individual target

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyPortIsstartedRequest;
import org.openapis.openapi.models.operations.ProtocolProxyPortIsstartedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero", "aliquid") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyPortIsstartedRequest req = new ProtocolProxyPortIsstartedRequest(93459, 904045);            

            ProtocolProxyPortIsstartedResponse res = sdk.proxy.protocolProxyPortIsstarted(req);

            if (res.protocolProxyPortIsstarted200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyPortList

List all proxy targets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyPortListRequest;
import org.openapis.openapi.models.operations.ProtocolProxyPortListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "harum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyPortListRequest req = new ProtocolProxyPortListRequest(473221);            

            ProtocolProxyPortListResponse res = sdk.proxy.protocolProxyPortList(req);

            if (res.protocolProxyPortList200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyPortRemove

Remove proxy target

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyPortRemoveRequest;
import org.openapis.openapi.models.operations.ProtocolProxyPortRemoveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyPortRemoveRequest req = new ProtocolProxyPortRemoveRequest(327720, 716244);            

            ProtocolProxyPortRemoveResponse res = sdk.proxy.protocolProxyPortRemove(req);

            if (res.protocolProxyPortRemove200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyPortStart

Start additional target

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyPortStartRequest;
import org.openapis.openapi.models.operations.ProtocolProxyPortStartResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi", "sit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyPortStartRequest req = new ProtocolProxyPortStartRequest(636061, 731398);            

            ProtocolProxyPortStartResponse res = sdk.proxy.protocolProxyPortStart(req);

            if (res.protocolProxyPortStart200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxyPortStop

Stop additional target

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxyPortStopRequest;
import org.openapis.openapi.models.operations.ProtocolProxyPortStopResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci", "cumque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxyPortStopRequest req = new ProtocolProxyPortStopRequest(160538, 9766);            

            ProtocolProxyPortStopResponse res = sdk.proxy.protocolProxyPortStop(req);

            if (res.protocolProxyPortStop200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxySetConfig

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxySetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolProxySetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "quaerat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxySetConfigRequest req = new ProtocolProxySetConfigRequest(959167, "consectetur", "esse");            

            ProtocolProxySetConfigResponse res = sdk.proxy.protocolProxySetConfig(req);

            if (res.protocolProxySetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolProxySetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolProxySetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolProxySetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolProxySetTraceRequest req = new ProtocolProxySetTraceRequest(953722, "nulla");            

            ProtocolProxySetTraceResponse res = sdk.proxy.protocolProxySetTrace(req);

            if (res.protocolProxySetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
