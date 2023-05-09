# sflow

### Available Operations

* [protocolSflowGetArgs](#protocolsflowgetargs) - Show the agent's SFLOW argument structure
* [protocolSflowGetConfig](#protocolsflowgetconfig) - Show the agent's SFLOW configuration
* [protocolSflowGetStatistics](#protocolsflowgetstatistics) - Show the agent's SFLOW statistics
* [protocolSflowGetStatsHdr](#protocolsflowgetstatshdr) - Show the SFLOW statistics headers
* [protocolSflowGetTrace](#protocolsflowgettrace) - Show the agent's SFLOW traffic tracing
* [protocolSflowHalt](#protocolsflowhalt) - Halt SFLOW traffic
* [protocolSflowReload](#protocolsflowreload) - Reload SFLOW configuration before resuming traffic
* [protocolSflowResume](#protocolsflowresume) - Resuming traffic
* [protocolSflowSetConfig](#protocolsflowsetconfig) - Set the agent's SFLOW configuration
* [protocolSflowSetTrace](#protocolsflowsettrace) - Set the agent's SFLOW traffic tracing

## protocolSflowGetArgs

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolSflowGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas", "esse") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowGetArgsRequest req = new ProtocolSflowGetArgsRequest(97468);            

            ProtocolSflowGetArgsResponse res = sdk.sflow.protocolSflowGetArgs(req);

            if (res.protocolSflowGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowGetConfig

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSflowGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a", "error") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowGetConfigRequest req = new ProtocolSflowGetConfigRequest(575751);            

            ProtocolSflowGetConfigResponse res = sdk.sflow.protocolSflowGetConfig(req);

            if (res.configSFLOW != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolSflowGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "possimus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowGetStatisticsRequest req = new ProtocolSflowGetStatisticsRequest(157632);            

            ProtocolSflowGetStatisticsResponse res = sdk.sflow.protocolSflowGetStatistics(req);

            if (res.protocolSflowGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet", "asperiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowGetStatsHdrResponse res = sdk.sflow.protocolSflowGetStatsHdr();

            if (res.protocolSflowGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolSflowGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowGetTraceRequest req = new ProtocolSflowGetTraceRequest(159414);            

            ProtocolSflowGetTraceResponse res = sdk.sflow.protocolSflowGetTrace(req);

            if (res.configSFLOW != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowHalt

Halt SFLOW traffic

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowHaltRequest;
import org.openapis.openapi.models.operations.ProtocolSflowHaltResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi", "similique") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowHaltRequest req = new ProtocolSflowHaltRequest(633608);            

            ProtocolSflowHaltResponse res = sdk.sflow.protocolSflowHalt(req);

            if (res.protocolSflowHalt200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowReload

Reload SFLOW configuration before resuming traffic

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowReloadRequest;
import org.openapis.openapi.models.operations.ProtocolSflowReloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid", "tenetur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowReloadRequest req = new ProtocolSflowReloadRequest(62713);            

            ProtocolSflowReloadResponse res = sdk.sflow.protocolSflowReload(req);

            if (res.protocolSflowReload200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowResume

Resuming traffic

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowResumeRequest;
import org.openapis.openapi.models.operations.ProtocolSflowResumeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowResumeRequest req = new ProtocolSflowResumeRequest(447378);            

            ProtocolSflowResumeResponse res = sdk.sflow.protocolSflowResume(req);

            if (res.protocolSflowResume200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowSetConfig

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolSflowSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius", "libero") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowSetConfigRequest req = new ProtocolSflowSetConfigRequest(849039, "soluta", "accusantium");            

            ProtocolSflowSetConfigResponse res = sdk.sflow.protocolSflowSetConfig(req);

            if (res.protocolSflowSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolSflowSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolSflowSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolSflowSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam", "sapiente") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolSflowSetTraceRequest req = new ProtocolSflowSetTraceRequest(119771, "ullam");            

            ProtocolSflowSetTraceResponse res = sdk.sflow.protocolSflowSetTrace(req);

            if (res.protocolSflowSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
