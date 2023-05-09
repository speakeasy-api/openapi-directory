# web

### Available Operations

* [protocolWebGetArgs](#protocolwebgetargs) - Show the agent's WEB argument structure
* [protocolWebGetConfig](#protocolwebgetconfig) - Show the agent's WEB configuration
* [protocolWebGetStatistics](#protocolwebgetstatistics) - Show the agent's WEB statistics
* [protocolWebGetStatsHdr](#protocolwebgetstatshdr) - Show the WEB statistics headers
* [protocolWebGetTrace](#protocolwebgettrace) - Show the agent's WEB traffic tracing
* [protocolWebPortAdd](#protocolwebportadd) - Add the agent's WEB port
* [protocolWebPortExists](#protocolwebportexists) - Show the agent's WEB port
* [protocolWebPortRemove](#protocolwebportremove) - Remove the agent's WEB port
* [protocolWebPortSet](#protocolwebportset) - Set the agent's WEB port attribute
* [protocolWebPortStart](#protocolwebportstart) - Start the agent's WEB port
* [protocolWebPortStop](#protocolwebportstop) - Stop the agent's WEB port
* [protocolWebSetConfig](#protocolwebsetconfig) - Set the agent's WEB configuration
* [protocolWebSetTrace](#protocolwebsettrace) - Set the agent's WEB traffic tracing

## protocolWebGetArgs

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolWebGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "suscipit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebGetArgsRequest req = new ProtocolWebGetArgsRequest(211534);            

            ProtocolWebGetArgsResponse res = sdk.web.protocolWebGetArgs(req);

            if (res.protocolWebGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebGetConfig

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolWebGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "cumque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebGetConfigRequest req = new ProtocolWebGetConfigRequest(684935);            

            ProtocolWebGetConfigResponse res = sdk.web.protocolWebGetConfig(req);

            if (res.configWEB != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolWebGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione", "animi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebGetStatisticsRequest req = new ProtocolWebGetStatisticsRequest(898760);            

            ProtocolWebGetStatisticsResponse res = sdk.web.protocolWebGetStatistics(req);

            if (res.protocolWebGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "consequatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebGetStatsHdrResponse res = sdk.web.protocolWebGetStatsHdr();

            if (res.protocolWebGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolWebGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi", "et") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebGetTraceRequest req = new ProtocolWebGetTraceRequest(497777);            

            ProtocolWebGetTraceResponse res = sdk.web.protocolWebGetTrace(req);

            if (res.configWEB != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebPortAdd

Add port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebPortAddRequest;
import org.openapis.openapi.models.operations.ProtocolWebPortAddResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebPortAddRequest req = new ProtocolWebPortAddRequest(382440, 241557);            

            ProtocolWebPortAddResponse res = sdk.web.protocolWebPortAdd(req);

            if (res.protocolWebPortAdd200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebPortExists

Check the port. 1 means existing, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebPortExistsRequest;
import org.openapis.openapi.models.operations.ProtocolWebPortExistsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi", "magni") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebPortExistsRequest req = new ProtocolWebPortExistsRequest(984934, 859581);            

            ProtocolWebPortExistsResponse res = sdk.web.protocolWebPortExists(req);

            if (res.protocolWebPortExists200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebPortRemove

Remove port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebPortRemoveRequest;
import org.openapis.openapi.models.operations.ProtocolWebPortRemoveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus", "ipsa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebPortRemoveRequest req = new ProtocolWebPortRemoveRequest(271113, 470621);            

            ProtocolWebPortRemoveResponse res = sdk.web.protocolWebPortRemove(req);

            if (res.protocolWebPortRemove200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebPortSet

Set port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebPortSetRequest;
import org.openapis.openapi.models.operations.ProtocolWebPortSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebPortSetRequest req = new ProtocolWebPortSetRequest(479754, 457059, "praesentium", "maiores");            

            ProtocolWebPortSetResponse res = sdk.web.protocolWebPortSet(req);

            if (res.protocolWebPortSet200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebPortStart

Start port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebPortStartRequest;
import org.openapis.openapi.models.operations.ProtocolWebPortStartResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebPortStartRequest req = new ProtocolWebPortStartRequest(99958, 857125);            

            ProtocolWebPortStartResponse res = sdk.web.protocolWebPortStart(req);

            if (res.protocolWebPortStart200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebPortStop

Stop port

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebPortStopRequest;
import org.openapis.openapi.models.operations.ProtocolWebPortStopResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebPortStopRequest req = new ProtocolWebPortStopRequest(483706, 271252);            

            ProtocolWebPortStopResponse res = sdk.web.protocolWebPortStop(req);

            if (res.protocolWebPortStop200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebSetConfig

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolWebSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "ex") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebSetConfigRequest req = new ProtocolWebSetConfigRequest(235263, "aliquid", "ipsa");            

            ProtocolWebSetConfigResponse res = sdk.web.protocolWebSetConfig(req);

            if (res.protocolWebSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolWebSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolWebSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolWebSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "sunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolWebSetTraceRequest req = new ProtocolWebSetTraceRequest(344718, "fugiat");            

            ProtocolWebSetTraceResponse res = sdk.web.protocolWebSetTrace(req);

            if (res.protocolWebSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
