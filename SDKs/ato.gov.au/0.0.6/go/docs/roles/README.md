# Roles

## Overview

A classification scheme for the characteristics of relationships between parties (individuals and organisations).


### Available Operations

* [GetClassificationsRoles](#getclassificationsroles) - Retrieve a list of roles

## GetClassificationsRoles

Retrieve a list of roles

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
    res, err := s.Roles.GetClassificationsRoles(ctx, operations.GetClassificationsRolesRequest{
        APIKey: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Roles != nil {
        // handle response
    }
}
```
