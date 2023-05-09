# health

## Overview

The Health service allows you to both validate and monitor your Appwrite server's health.

### Available Operations

* [healthGet](#healthget) - Get HTTP
* [healthGetAntiVirus](#healthgetantivirus) - Get Anti virus
* [healthGetCache](#healthgetcache) - Get Cache
* [healthGetDB](#healthgetdb) - Get DB
* [healthGetQueueCertificates](#healthgetqueuecertificates) - Get Certificate Queue
* [healthGetQueueFunctions](#healthgetqueuefunctions) - Get Functions Queue
* [healthGetQueueLogs](#healthgetqueuelogs) - Get Logs Queue
* [healthGetQueueTasks](#healthgetqueuetasks) - Get Tasks Queue
* [healthGetQueueUsage](#healthgetqueueusage) - Get Usage Queue
* [healthGetQueueWebhooks](#healthgetqueuewebhooks) - Get Webhooks Queue
* [healthGetStorageLocal](#healthgetstoragelocal) - Get Local Storage
* [healthGetTime](#healthgettime) - Get Time

## healthGet

Check the Appwrite HTTP server is up and responsive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetResponse;
import org.openapis.openapi.models.operations.HealthGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetResponse res = sdk.health.healthGet(new HealthGetSecurity("pariatur", "accusantium") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetAntiVirus

Check the Appwrite Anti Virus server is up and connection is successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetAntiVirusResponse;
import org.openapis.openapi.models.operations.HealthGetAntiVirusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetAntiVirusResponse res = sdk.health.healthGetAntiVirus(new HealthGetAntiVirusSecurity("consequuntur", "praesentium") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetCache

Check the Appwrite in-memory cache server is up and connection is successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetCacheResponse;
import org.openapis.openapi.models.operations.HealthGetCacheSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetCacheResponse res = sdk.health.healthGetCache(new HealthGetCacheSecurity("natus", "magni") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetDB

Check the Appwrite database server is up and connection is successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetDBResponse;
import org.openapis.openapi.models.operations.HealthGetDBSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetDBResponse res = sdk.health.healthGetDB(new HealthGetDBSecurity("sunt", "quo") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetQueueCertificates

Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetQueueCertificatesResponse;
import org.openapis.openapi.models.operations.HealthGetQueueCertificatesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetQueueCertificatesResponse res = sdk.health.healthGetQueueCertificates(new HealthGetQueueCertificatesSecurity("illum", "pariatur") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetQueueFunctions

Get Functions Queue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetQueueFunctionsResponse;
import org.openapis.openapi.models.operations.HealthGetQueueFunctionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetQueueFunctionsResponse res = sdk.health.healthGetQueueFunctions(new HealthGetQueueFunctionsSecurity("maxime", "ea") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetQueueLogs

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetQueueLogsResponse;
import org.openapis.openapi.models.operations.HealthGetQueueLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetQueueLogsResponse res = sdk.health.healthGetQueueLogs(new HealthGetQueueLogsSecurity("excepturi", "odit") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetQueueTasks

Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetQueueTasksResponse;
import org.openapis.openapi.models.operations.HealthGetQueueTasksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetQueueTasksResponse res = sdk.health.healthGetQueueTasks(new HealthGetQueueTasksSecurity("ea", "accusantium") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetQueueUsage

Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetQueueUsageResponse;
import org.openapis.openapi.models.operations.HealthGetQueueUsageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetQueueUsageResponse res = sdk.health.healthGetQueueUsage(new HealthGetQueueUsageSecurity("ab", "maiores") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetQueueWebhooks

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetQueueWebhooksResponse;
import org.openapis.openapi.models.operations.HealthGetQueueWebhooksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetQueueWebhooksResponse res = sdk.health.healthGetQueueWebhooks(new HealthGetQueueWebhooksSecurity("quidem", "ipsam") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetStorageLocal

Check the Appwrite local storage device is up and connection is successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetStorageLocalResponse;
import org.openapis.openapi.models.operations.HealthGetStorageLocalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetStorageLocalResponse res = sdk.health.healthGetStorageLocal(new HealthGetStorageLocalSecurity("voluptate", "autem") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## healthGetTime

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetTimeResponse;
import org.openapis.openapi.models.operations.HealthGetTimeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetTimeResponse res = sdk.health.healthGetTime(new HealthGetTimeSecurity("nam", "eaque") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
