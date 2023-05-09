# SourceDefinitionSpecification

## Overview

SourceDefinition specification related resources.

### Available Operations

* [GetSourceDefinitionSpecification](#getsourcedefinitionspecification) - Get specification for a SourceDefinition.

## GetSourceDefinitionSpecification

Get specification for a SourceDefinition.

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
    res, err := s.SourceDefinitionSpecification.GetSourceDefinitionSpecification(ctx, shared.SourceDefinitionIDWithWorkspaceID{
        SourceDefinitionID: "ef890a54-b475-4f16-b56d-385a3c4ac631",
        WorkspaceID: "b99e26ce-d8f9-4fdb-9410-f63bbf817837",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDefinitionSpecificationRead != nil {
        // handle response
    }
}
```
