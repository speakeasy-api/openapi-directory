# LicenseLifecycleStates

## Overview

A classification scheme for licenses.


### Available Operations

* [GetClassificationsLicenseLifecycleStates](#getclassificationslicenselifecyclestates) - Retrieve a list of license lifecycle states

## GetClassificationsLicenseLifecycleStates

Retrieve a list of license lifecycle states

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
    res, err := s.LicenseLifecycleStates.GetClassificationsLicenseLifecycleStates(ctx, operations.GetClassificationsLicenseLifecycleStatesRequest{
        APIKey: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseLifecycleStates != nil {
        // handle response
    }
}
```
