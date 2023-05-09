# LicenseTypes

## Overview

A classification scheme for licenses.


### Available Operations

* [GetClassificationsLicenseTypes](#getclassificationslicensetypes) - Retrieve a list of license types

## GetClassificationsLicenseTypes

Retrieve a list of license types

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
    res, err := s.LicenseTypes.GetClassificationsLicenseTypes(ctx, operations.GetClassificationsLicenseTypesRequest{
        APIKey: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseTypes != nil {
        // handle response
    }
}
```
