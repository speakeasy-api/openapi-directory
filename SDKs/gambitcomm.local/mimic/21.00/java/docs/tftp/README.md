# tftp

### Available Operations

* [protocolTftpGetArgs](#protocoltftpgetargs) - Show the agent's TFTP argument structure
* [protocolTftpGetConfig](#protocoltftpgetconfig) - Show the agent's TFTP configuration
* [protocolTftpGetStatistics](#protocoltftpgetstatistics) - Show the agent's TFTP statistics
* [protocolTftpGetStatsHdr](#protocoltftpgetstatshdr) - Show the TFTP statistics headers
* [protocolTftpGetTrace](#protocoltftpgettrace) - Show the agent's TFTP traffic tracing
* [protocolTftpSessionGetParameter](#protocoltftpsessiongetparameter) - Show a parameter of a TFTP sesssion
* [protocolTftpSessionRead](#protocoltftpsessionread) - Create a read session to download srcfile from server
* [protocolTftpSessionSetParameter](#protocoltftpsessionsetparameter) - Set a parameter of a TFTP sesssion
* [protocolTftpSessionStart](#protocoltftpsessionstart) - Start a TFTP sesssion
* [protocolTftpSessionStatus](#protocoltftpsessionstatus) - Check a TFTP sesssion's status
* [protocolTftpSessionStop](#protocoltftpsessionstop) - Stop a TFTP sesssion
* [protocolTftpSessionWrite](#protocoltftpsessionwrite) - Create a read session to upload srcfile to server
* [protocolTftpSetConfig](#protocoltftpsetconfig) - Set the agent's TFTP configuration
* [protocolTftpSetTrace](#protocoltftpsettrace) - Set the agent's TFTP traffic tracing

## protocolTftpGetArgs

Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpGetArgsRequest;
import org.openapis.openapi.models.operations.ProtocolTftpGetArgsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam", "repudiandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpGetArgsRequest req = new ProtocolTftpGetArgsRequest(97243);            

            ProtocolTftpGetArgsResponse res = sdk.tftp.protocolTftpGetArgs(req);

            if (res.protocolTftpGetArgs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpGetConfig

Agent's TFTP configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpGetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolTftpGetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque", "reprehenderit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpGetConfigRequest req = new ProtocolTftpGetConfigRequest(991142);            

            ProtocolTftpGetConfigResponse res = sdk.tftp.protocolTftpGetConfig(req);

            if (res.configTFTP != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpGetStatisticsRequest;
import org.openapis.openapi.models.operations.ProtocolTftpGetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "suscipit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpGetStatisticsRequest req = new ProtocolTftpGetStatisticsRequest(693957);            

            ProtocolTftpGetStatisticsResponse res = sdk.tftp.protocolTftpGetStatistics(req);

            if (res.protocolTftpGetStatistics200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpGetStatsHdr

The headers of statistics fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpGetStatsHdrResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "et") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpGetStatsHdrResponse res = sdk.tftp.protocolTftpGetStatsHdr();

            if (res.protocolTftpGetStatsHdr200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpGetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolTftpGetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "amet") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpGetTraceRequest req = new ProtocolTftpGetTraceRequest(826825);            

            ProtocolTftpGetTraceResponse res = sdk.tftp.protocolTftpGetTrace(req);

            if (res.configTFTP != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSessionGetParameter

Parameter is server , port , or dstfile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSessionGetParameterRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSessionGetParameterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea", "atque") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSessionGetParameterRequest req = new ProtocolTftpSessionGetParameterRequest(623295, "officiis", "officiis");            

            ProtocolTftpSessionGetParameterResponse res = sdk.tftp.protocolTftpSessionGetParameter(req);

            if (res.protocolTftpSessionGetParameter200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSessionRead

Session ID is returned

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSessionReadRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSessionReadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "natus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSessionReadRequest req = new ProtocolTftpSessionReadRequest(328303, "aspernatur");            

            ProtocolTftpSessionReadResponse res = sdk.tftp.protocolTftpSessionRead(req);

            if (res.protocolTftpSessionRead200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSessionSetParameter

Parameter is server , port , or dstfile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSessionSetParameterRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSessionSetParameterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex", "maiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSessionSetParameterRequest req = new ProtocolTftpSessionSetParameterRequest(544647, "at", "error", "blanditiis");            

            ProtocolTftpSessionSetParameterResponse res = sdk.tftp.protocolTftpSessionSetParameter(req);

            if (res.protocolTftpSessionSetParameter200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSessionStart

Start uploading or downloading the file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSessionStartRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSessionStartResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "repudiandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSessionStartRequest req = new ProtocolTftpSessionStartRequest(542129, "atque");            

            ProtocolTftpSessionStartResponse res = sdk.tftp.protocolTftpSessionStart(req);

            if (res.protocolTftpSessionStart200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSessionStatus

Status includes running state, bytes transfered, and time elapsed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSessionStatusRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSessionStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt", "recusandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSessionStatusRequest req = new ProtocolTftpSessionStatusRequest(680697, "repellendus");            

            ProtocolTftpSessionStatusResponse res = sdk.tftp.protocolTftpSessionStatus(req);

            if (res.protocolTftpSessionStatus200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSessionStop

Stop uploading or downloading the file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSessionStopRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSessionStopResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "reiciendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSessionStopRequest req = new ProtocolTftpSessionStopRequest(42976, "repudiandae");            

            ProtocolTftpSessionStopResponse res = sdk.tftp.protocolTftpSessionStop(req);

            if (res.protocolTftpSessionStop200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSessionWrite

Session ID is returned

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSessionWriteRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSessionWriteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "accusantium") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSessionWriteRequest req = new ProtocolTftpSessionWriteRequest(106429, "dolores");            

            ProtocolTftpSessionWriteResponse res = sdk.tftp.protocolTftpSessionWrite(req);

            if (res.protocolTftpSessionWrite200ApplicationJSONInt32Integers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSetConfig

Agent's TFTP configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSetConfigRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSetConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "laboriosam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSetConfigRequest req = new ProtocolTftpSetConfigRequest(246535, "a", "molestias");            

            ProtocolTftpSetConfigResponse res = sdk.tftp.protocolTftpSetConfig(req);

            if (res.protocolTftpSetConfig200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## protocolTftpSetTrace

1 to enable, 0 to disable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProtocolTftpSetTraceRequest;
import org.openapis.openapi.models.operations.ProtocolTftpSetTraceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ProtocolTftpSetTraceRequest req = new ProtocolTftpSetTraceRequest(160467, "occaecati");            

            ProtocolTftpSetTraceResponse res = sdk.tftp.protocolTftpSetTrace(req);

            if (res.protocolTftpSetTrace200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
