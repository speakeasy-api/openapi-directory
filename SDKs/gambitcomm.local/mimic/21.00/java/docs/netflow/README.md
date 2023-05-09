# netflow

### Available Operations

* [protocolNetflowChangeAttr](#protocolnetflowchangeattr) - Change NETFLOW export attributes
* [protocolNetflowChangeDfs](#protocolnetflowchangedfs) - Change NETFLOW data export interval
* [protocolNetflowChangeTfs](#protocolnetflowchangetfs) - Change NETFLOW template export interval
* [protocolNetflowGetArgs](#protocolnetflowgetargs) - Show the agent's NETFLOW argument structure
* [protocolNetflowGetConfig](#protocolnetflowgetconfig) - Show the agent's NETFLOW configuration
* [protocolNetflowGetStatistics](#protocolnetflowgetstatistics) - Show the agent's NETFLOW statistics
* [protocolNetflowGetStatsHdr](#protocolnetflowgetstatshdr) - Show the NETFLOW statistics headers
* [protocolNetflowGetTrace](#protocolnetflowgettrace) - Show the agent's NETFLOW traffic tracing
* [protocolNetflowHalt](#protocolnetflowhalt) - Halt NETFLOW traffic
* [protocolNetflowList](#protocolnetflowlist) - Show list of NETFLOW exports
* [protocolNetflowReload](#protocolnetflowreload) - Reload NETFLOW configuration before resuming traffic
* [protocolNetflowResume](#protocolnetflowresume) - Resuming traffic
* [protocolNetflowSetCollector](#protocolnetflowsetcollector) - Swap NETFLOW collector
* [protocolNetflowSetConfig](#protocolnetflowsetconfig) - Set the agent's NETFLOW configuration
* [protocolNetflowSetFileName](#protocolnetflowsetfilename) - Swap NETFLOW configuration file
* [protocolNetflowSetTrace](#protocolnetflowsettrace) - Set the agent's NETFLOW traffic tracing

## protocolNetflowChangeAttr

Change attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowChangeAttrRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowChangeAttrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat", "ut") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowChangeAttrRequest req = new ProtocolNetflowChangeAttrRequest(433439, "suscipit", 826871, 181151, "praesentium");            

            ProtocolNetflowChangeAttrResponse res = sdk.netflow.protocolNetflowChangeAttr(req);

            if (res.protocolNetflowChangeAttr200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowChangeDfs

Interval in msec .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowChangeDfsRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowChangeDfsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowChangeDfsRequest req = new ProtocolNetflowChangeDfsRequest(56848, 660040);            

            ProtocolNetflowChangeDfsResponse res = sdk.netflow.protocolNetflowChangeDfs(req);

            if (res.protocolNetflowChangeDfs200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowChangeTfs

Interval in msec .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowChangeTfsRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowChangeTfsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "neque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowChangeTfsRequest req = new ProtocolNetflowChangeTfsRequest(778696, 847276);            

            ProtocolNetflowChangeTfsResponse res = sdk.netflow.protocolNetflowChangeTfs(req);

            if (res.protocolNetflowChangeTfs200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowGetArgs

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "fuga") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowGetArgsRequest req = new ProtocolNetflowGetArgsRequest(259422);            

            ProtocolNetflowGetArgsResponse res = sdk.netflow.protocolNetflowGetArgs(req);

            if (res.protocolNetflowGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowGetConfig

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos", "voluptas") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowGetConfigRequest req = new ProtocolNetflowGetConfigRequest(69859);            

            ProtocolNetflowGetConfigResponse res = sdk.netflow.protocolNetflowGetConfig(req);

            if (res.configNETFLOW != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate", "consequatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowGetStatisticsRequest req = new ProtocolNetflowGetStatisticsRequest(272822);            

            ProtocolNetflowGetStatisticsResponse res = sdk.netflow.protocolNetflowGetStatistics(req);

            if (res.protocolNetflowGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowGetStatsHdrResponse res = sdk.netflow.protocolNetflowGetStatsHdr();

            if (res.protocolNetflowGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "sequi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowGetTraceRequest req = new ProtocolNetflowGetTraceRequest(779192);            

            ProtocolNetflowGetTraceResponse res = sdk.netflow.protocolNetflowGetTrace(req);

            if (res.configNETFLOW != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowHalt

Halt NETFLOW traffic

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowHaltRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowHaltResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "recusandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowHaltRequest req = new ProtocolNetflowHaltRequest(44612);            

            ProtocolNetflowHaltResponse res = sdk.netflow.protocolNetflowHalt(req);

            if (res.protocolNetflowHalt200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowList

Show list of NETFLOW exports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowListRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quod") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowListRequest req = new ProtocolNetflowListRequest(490819);            

            ProtocolNetflowListResponse res = sdk.netflow.protocolNetflowList(req);

            if (res.protocolNetflowList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowReload

Reload NETFLOW configuration before resuming traffic

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowReloadRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowReloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore", "nihil") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowReloadRequest req = new ProtocolNetflowReloadRequest(518835);            

            ProtocolNetflowReloadResponse res = sdk.netflow.protocolNetflowReload(req);

            if (res.protocolNetflowReload200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowResume

Resuming traffic

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowResumeRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowResumeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "aliquam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowResumeRequest req = new ProtocolNetflowResumeRequest(488410);            

            ProtocolNetflowResumeResponse res = sdk.netflow.protocolNetflowResume(req);

            if (res.protocolNetflowResume200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowSetCollector

Allow changing collector without stopping agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowSetCollectorRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowSetCollectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "commodi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowSetCollectorRequest req = new ProtocolNetflowSetCollectorRequest(959434, "dolores");            

            ProtocolNetflowSetCollectorResponse res = sdk.netflow.protocolNetflowSetCollector(req);

            if (res.protocolNetflowSetCollector200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowSetConfig

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "molestiae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowSetConfigRequest req = new ProtocolNetflowSetConfigRequest(35362, "porro", "eum");            

            ProtocolNetflowSetConfigResponse res = sdk.netflow.protocolNetflowSetConfig(req);

            if (res.protocolNetflowSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowSetFileName

Allow reloading the configuration file for an agent without stopping agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowSetFileNameRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowSetFileNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas", "praesentium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowSetFileNameRequest req = new ProtocolNetflowSetFileNameRequest(159867, "deleniti");            

            ProtocolNetflowSetFileNameResponse res = sdk.netflow.protocolNetflowSetFileName(req);

            if (res.protocolNetflowSetFileName200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolNetflowSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolNetflowSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolNetflowSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "fuga") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolNetflowSetTraceRequest req = new ProtocolNetflowSetTraceRequest(649463, "incidunt");            

            ProtocolNetflowSetTraceResponse res = sdk.netflow.protocolNetflowSetTrace(req);

            if (res.protocolNetflowSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
