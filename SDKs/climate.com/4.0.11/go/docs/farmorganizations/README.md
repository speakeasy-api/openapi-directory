# FarmOrganizations

## Overview

Farm organization data endpoints.

### Available Operations

* [FetchFarmOrganizationByTypeAndID](#fetchfarmorganizationbytypeandid) - Retrieve a specific farm organization by organization type and ID

## FetchFarmOrganizationByTypeAndID

Retrieve a given **farm organization** by organization type and ID.

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
    res, err := s.FarmOrganizations.FetchFarmOrganizationByTypeAndID(ctx, operations.FetchFarmOrganizationByTypeAndIDRequest{
        FarmOrganizationID: "ae395efb-9ba8-48f3-a669-97074ba4469b",
        FarmOrganizationType: shared.FarmOrganizationTypeEnumFarm,
    }, operations.FetchFarmOrganizationByTypeAndIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FarmOrganization != nil {
        // handle response
    }
}
```
