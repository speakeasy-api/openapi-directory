# DestinationDefinitionSpecification

## Overview

DestinationDefinitionSpecification related resources.

### Available Operations

* [GetDestinationDefinitionSpecification](#getdestinationdefinitionspecification) - Get specification for a destinationDefinition

## GetDestinationDefinitionSpecification

Get specification for a destinationDefinition

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DestinationDefinitionSpecification.GetDestinationDefinitionSpecification(ctx, shared.DestinationDefinitionIDWithWorkspaceID{
        DestinationDefinitionID: "a08088d1-00ef-4ada-a00e-f0422eb2164c",
        WorkspaceID: "f9ab8366-c723-4ffd-a9e0-6bee4825c1fc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DestinationDefinitionSpecificationRead != nil {
        // handle response
    }
}
```
