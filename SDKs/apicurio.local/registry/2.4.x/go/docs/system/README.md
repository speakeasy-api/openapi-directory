# System

## Overview

System level functionality, including versioning and status information.

### Available Operations

* [GetResourceLimits](#getresourcelimits) - Get resource limits information
* [GetSystemInfo](#getsysteminfo) - Get system information

## GetResourceLimits

This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.System.GetResourceLimits(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Limits != nil {
        // handle response
    }
}
```

## GetSystemInfo

This operation retrieves information about the running registry system, such as the version
of the software and when it was built.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.System.GetSystemInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemInfo != nil {
        // handle response
    }
}
```
