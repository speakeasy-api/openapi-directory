# Health

## Overview

The Health service allows you to both validate and monitor your Appwrite server's health.

### Available Operations

* [HealthGet](#healthget) - Get HTTP
* [HealthGetAntiVirus](#healthgetantivirus) - Get Anti virus
* [HealthGetCache](#healthgetcache) - Get Cache
* [HealthGetDB](#healthgetdb) - Get DB
* [HealthGetQueueCertificates](#healthgetqueuecertificates) - Get Certificate Queue
* [HealthGetQueueFunctions](#healthgetqueuefunctions) - Get Functions Queue
* [HealthGetQueueLogs](#healthgetqueuelogs) - Get Logs Queue
* [HealthGetQueueTasks](#healthgetqueuetasks) - Get Tasks Queue
* [HealthGetQueueUsage](#healthgetqueueusage) - Get Usage Queue
* [HealthGetQueueWebhooks](#healthgetqueuewebhooks) - Get Webhooks Queue
* [HealthGetStorageLocal](#healthgetstoragelocal) - Get Local Storage
* [HealthGetTime](#healthgettime) - Get Time

## HealthGet

Check the Appwrite HTTP server is up and responsive.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGet(ctx, operations.HealthGetSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetAntiVirus

Check the Appwrite Anti Virus server is up and connection is successful.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetAntiVirus(ctx, operations.HealthGetAntiVirusSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetCache

Check the Appwrite in-memory cache server is up and connection is successful.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetCache(ctx, operations.HealthGetCacheSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetDB

Check the Appwrite database server is up and connection is successful.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetDB(ctx, operations.HealthGetDBSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetQueueCertificates

Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetQueueCertificates(ctx, operations.HealthGetQueueCertificatesSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetQueueFunctions

Get Functions Queue

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetQueueFunctions(ctx, operations.HealthGetQueueFunctionsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetQueueLogs

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetQueueLogs(ctx, operations.HealthGetQueueLogsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetQueueTasks

Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetQueueTasks(ctx, operations.HealthGetQueueTasksSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetQueueUsage

Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetQueueUsage(ctx, operations.HealthGetQueueUsageSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetQueueWebhooks

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetQueueWebhooks(ctx, operations.HealthGetQueueWebhooksSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetStorageLocal

Check the Appwrite local storage device is up and connection is successful.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetStorageLocal(ctx, operations.HealthGetStorageLocalSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HealthGetTime

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Health.HealthGetTime(ctx, operations.HealthGetTimeSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
