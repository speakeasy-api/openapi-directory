# LinuxHostings

## Overview

Manage your linux hostings.

### Available Operations

* [AddScheduledTasks](#addscheduledtasks) - Add a scheduled task
* [AddSSHKey](#addsshkey) - Add a SSH key
* [ChangeApcu](#changeapcu) - Configure PHP APCu setting
* [ChangeAutoRedirect](#changeautoredirect) - Configure auto redirect
* [ChangeGzipCompression](#changegzipcompression) - Enable/disable GZIP compression
* [ChangeLetsEncrypt](#changeletsencrypt) - Configure let's encrypt
* [ChangePhpMemoryLimit](#changephpmemorylimit) - Configure PHP memory limit
* [ChangePhpVersion](#changephpversion) - Change the Linux hosting PHP version.
* [ConfigureFtp](#configureftp) - Configure FTP
* [ConfigureHttp2](#configurehttp2) - Configure HTTP/2
* [ConfigureScheduledTask](#configurescheduledtask) - Configure a scheduled task
* [ConfigureSSH](#configuressh) - Configure SSH
* [CreateHostHeader](#createhostheader) - Create a host header
* [CreateSubsite](#createsubsite) - Create a subsite
* [DeleteScheduledTask](#deletescheduledtask) - Delete a scheduled task
* [DeleteSSHKey](#deletesshkey) - Delete a SSH key
* [DeleteSubsite](#deletesubsite) - Delete a subsite
* [GetAvailablePhpVersions](#getavailablephpversions) - Get the available PHP versions.
* [GetLinuxHosting](#getlinuxhosting) - Linux hosting detail
* [GetLinuxHostings](#getlinuxhostings) - Overview of linux hostings
* [GetScheduledTask](#getscheduledtask) - Get scheduled task detail
* [GetScheduledTasks](#getscheduledtasks) - Overview of scheduled tasks
* [GetSSHKeys](#getsshkeys) - Overview of SSH keys

## AddScheduledTasks

Add a scheduled task

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.AddScheduledTasks(ctx, operations.AddScheduledTasksRequest{
        ScheduledTask: &shared.ScheduledTask{
            CronExpression: sdk.String("magnam"),
            Enabled: sdk.Bool(false),
            ID: sdk.String("ba4469b6-e214-4195-9890-afa563e2516f"),
            ScriptLocation: sdk.String("debitis"),
        },
        DomainNamePathParameter: "eius",
        DomainNameQueryParameter: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddSSHKey

Add a SSH key

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.AddSSHKey(ctx, operations.AddSSHKeyRequest{
        AddSSHKeyRequest: &shared.AddSSHKeyRequest{
            PublicKey: sdk.String("deleniti"),
        },
        DomainNamePathParameter: "facilis",
        DomainNameQueryParameter: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeApcu

Configure PHP APCu setting

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ChangeApcu(ctx, operations.ChangeApcuRequest{
        UpdatePhpAPcuRequest: &shared.UpdatePhpAPcuRequest{
            ApcuSize: sdk.Int(100226),
            Enabled: sdk.Bool(false),
        },
        DomainNamePathParameter: "architecto",
        DomainNameQueryParameter: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeAutoRedirect

Configure auto redirect

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ChangeAutoRedirect(ctx, operations.ChangeAutoRedirectRequest{
        AutoRedirectConfig: &shared.AutoRedirectConfig{
            Enabled: sdk.Bool(false),
        },
        DomainNamePathParameter: "ullam",
        DomainNameQueryParameter: "expedita",
        Hostname: "knobby-zither.org",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeGzipCompression

Enable/disable GZIP compression

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ChangeGzipCompression(ctx, operations.ChangeGzipCompressionRequest{
        GzipConfig: &shared.GzipConfig{
            Enabled: sdk.Bool(false),
        },
        DomainNamePathParameter: "sed",
        DomainNameQueryParameter: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeLetsEncrypt

Configure let's encrypt

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ChangeLetsEncrypt(ctx, operations.ChangeLetsEncryptRequest{
        LetsEncryptConfig: &shared.LetsEncryptConfig{
            Enabled: sdk.Bool(false),
        },
        DomainNamePathParameter: "pariatur",
        DomainNameQueryParameter: "accusantium",
        Hostname: "cute-lens.name",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangePhpMemoryLimit

Configure PHP memory limit

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ChangePhpMemoryLimit(ctx, operations.ChangePhpMemoryLimitRequest{
        UpdatePhpMemoryLimitRequest: &shared.UpdatePhpMemoryLimitRequest{
            MemoryLimit: sdk.Int(166847),
        },
        DomainNamePathParameter: "sunt",
        DomainNameQueryParameter: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangePhpVersion

Change the Linux hosting PHP version.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ChangePhpVersion(ctx, operations.ChangePhpVersionRequest{
        PhpVersion: &shared.PhpVersion{
            Version: sdk.String("illum"),
        },
        DomainNamePathParameter: "pariatur",
        DomainNameQueryParameter: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureFtp

Configure FTP

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ConfigureFtp(ctx, operations.ConfigureFtpRequest{
        FtpConfiguration: &shared.FtpConfiguration{
            Enabled: sdk.Bool(false),
        },
        DomainNamePathParameter: "ea",
        DomainNameQueryParameter: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureHttp2

Configure HTTP/2

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ConfigureHttp2(ctx, operations.ConfigureHttp2Request{
        Http2Configuration: &shared.Http2Configuration{
            Enabled: sdk.Bool(false),
        },
        DomainNamePathParameter: "odit",
        DomainNameQueryParameter: "ea",
        SiteNamePathParameter: "accusantium",
        SiteNameQueryParameter: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureScheduledTask

Configure a scheduled task

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ConfigureScheduledTask(ctx, operations.ConfigureScheduledTaskRequest{
        ScheduledTask: &shared.ScheduledTask{
            CronExpression: sdk.String("maiores"),
            Enabled: sdk.Bool(false),
            ID: sdk.String("b576b0d5-f0d3-40c5-bbb2-587053202c73"),
            ScriptLocation: sdk.String("vero"),
        },
        DomainNamePathParameter: "nostrum",
        DomainNameQueryParameter: "hic",
        ScheduledTaskIDPathParameter: "recusandae",
        ScheduledTaskIDQueryParameter: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureSSH

Configure SSH

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.ConfigureSSH(ctx, operations.ConfigureSSHRequest{
        SSHConfiguration: &shared.SSHConfiguration{
            Enabled: sdk.Bool(false),
        },
        DomainNamePathParameter: "facilis",
        DomainNameQueryParameter: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateHostHeader

Create a host header

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.CreateHostHeader(ctx, operations.CreateHostHeaderRequest{
        AddHostHeaderRequest: &shared.AddHostHeaderRequest{
            DomainName: sdk.String("voluptatem"),
        },
        DomainNamePathParameter: "porro",
        DomainNameQueryParameter: "consequuntur",
        SiteNamePathParameter: "blanditiis",
        SiteNameQueryParameter: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateSubsite

Create a subsite

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LinuxHostings.CreateSubsite(ctx, operations.CreateSubsiteRequest{
        AddSubsiteRequest: &shared.AddSubsiteRequest{
            DomainName: sdk.String("eaque"),
            Path: sdk.String("occaecati"),
        },
        DomainNamePathParameter: "rerum",
        DomainNameQueryParameter: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteScheduledTask

Delete a scheduled task

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
    res, err := s.LinuxHostings.DeleteScheduledTask(ctx, operations.DeleteScheduledTaskRequest{
        DomainNamePathParameter: "asperiores",
        DomainNameQueryParameter: "earum",
        ScheduledTaskIDPathParameter: "modi",
        ScheduledTaskIDQueryParameter: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSSHKey

Delete a SSH key

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
    res, err := s.LinuxHostings.DeleteSSHKey(ctx, operations.DeleteSSHKeyRequest{
        DomainNamePathParameter: "dolorum",
        DomainNameQueryParameter: "deleniti",
        Fingerprint: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSubsite

Delete a subsite

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
    res, err := s.LinuxHostings.DeleteSubsite(ctx, operations.DeleteSubsiteRequest{
        DomainNamePathParameter: "provident",
        DomainNameQueryParameter: "nobis",
        SiteNamePathParameter: "libero",
        SiteNameQueryParameter: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAvailablePhpVersions

Get the available PHP versions.

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
    res, err := s.LinuxHostings.GetAvailablePhpVersions(ctx, operations.GetAvailablePhpVersionsRequest{
        DomainNamePathParameter: "quaerat",
        DomainNameQueryParameter: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhpVersions != nil {
        // handle response
    }
}
```

## GetLinuxHosting

Linux hosting detail

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
    res, err := s.LinuxHostings.GetLinuxHosting(ctx, operations.GetLinuxHostingRequest{
        DomainNamePathParameter: "aliquid",
        DomainNameQueryParameter: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinuxHostingDetail != nil {
        // handle response
    }
}
```

## GetLinuxHostings

Overview of linux hostings

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
    res, err := s.LinuxHostings.GetLinuxHostings(ctx, operations.GetLinuxHostingsRequest{
        Skip: sdk.Int(209843),
        Take: sdk.Int(222443),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinuxHostings != nil {
        // handle response
    }
}
```

## GetScheduledTask

Get scheduled task detail

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
    res, err := s.LinuxHostings.GetScheduledTask(ctx, operations.GetScheduledTaskRequest{
        DomainNamePathParameter: "qui",
        DomainNameQueryParameter: "ipsum",
        ScheduledTaskIDPathParameter: "hic",
        ScheduledTaskIDQueryParameter: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduledTask != nil {
        // handle response
    }
}
```

## GetScheduledTasks

Manage scheduled tasks which are also manageable via the control panel.

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
    res, err := s.LinuxHostings.GetScheduledTasks(ctx, operations.GetScheduledTasksRequest{
        DomainNamePathParameter: "cum",
        DomainNameQueryParameter: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduledTasks != nil {
        // handle response
    }
}
```

## GetSSHKeys

Overview of SSH keys

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
    res, err := s.LinuxHostings.GetSSHKeys(ctx, operations.GetSSHKeysRequest{
        DomainNamePathParameter: "dignissimos",
        DomainNameQueryParameter: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKeys != nil {
        // handle response
    }
}
```
