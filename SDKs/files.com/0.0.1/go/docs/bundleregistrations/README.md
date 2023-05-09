# BundleRegistrations

## Overview

Operations about bundle_registrations

### Available Operations

* [GetBundleRegistrations](#getbundleregistrations) - List Bundle Registrations

## GetBundleRegistrations

List Bundle Registrations

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
    res, err := s.BundleRegistrations.GetBundleRegistrations(ctx, operations.GetBundleRegistrationsRequest{
        BundleID: sdk.Int(565421),
        Cursor: sdk.String("temporibus"),
        PerPage: sdk.Int(183280),
        UserID: sdk.Int(204865),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleRegistrationEntities != nil {
        // handle response
    }
}
```
