# GlobalRules

## Overview

Global rules can be configured in the registry to govern how artifact content can 
evolve over time (as artifact content is **updated**). Global rules will be applied 
whenever an artifact is added to the registry, and also whenever an artifact's 
content is updated (only if that artifact doesn't have its own specific rules 
configured). This section describes the operations used to manage the global rules.

### Available Operations

* [CreateGlobalRule](#createglobalrule) - Create global rule
* [DeleteAllGlobalRules](#deleteallglobalrules) - Delete all global rules
* [DeleteGlobalRule](#deleteglobalrule) - Delete global rule
* [GetGlobalRuleConfig](#getglobalruleconfig) - Get global rule configuration
* [ListGlobalRules](#listglobalrules) - List global rules
* [UpdateGlobalRuleConfig](#updateglobalruleconfig) - Update global rule configuration

## CreateGlobalRule

Adds a rule to the list of globally configured rules.

This operation can fail for the following reasons:

* The rule type is unknown (HTTP error `400`)
* The rule already exists (HTTP error `409`)
* A server error occurred (HTTP error `500`)


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
    res, err := s.GlobalRules.CreateGlobalRule(ctx, shared.Rule{
        Config: "ipsam",
        Type: shared.RuleTypeEnumValidity.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAllGlobalRules

Deletes all globally configured rules.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


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
    res, err := s.GlobalRules.DeleteAllGlobalRules(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteGlobalRule

Deletes a single global rule.  If this is the only rule configured, this is the same
as deleting **all** rules.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* Rule cannot be deleted (HTTP error `409`)
* A server error occurred (HTTP error `500`)


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
    res, err := s.GlobalRules.DeleteGlobalRule(ctx, operations.DeleteGlobalRuleRequest{
        Rule: operations.DeleteGlobalRuleRuleEnumCompatibility,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGlobalRuleConfig

Returns information about the named globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


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
    res, err := s.GlobalRules.GetGlobalRuleConfig(ctx, operations.GetGlobalRuleConfigRequest{
        Rule: operations.GetGlobalRuleConfigRuleEnumCompatibility,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Rule != nil {
        // handle response
    }
}
```

## ListGlobalRules

Gets a list of all the currently configured global rules (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


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
    res, err := s.GlobalRules.ListGlobalRules(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RuleTypes != nil {
        // handle response
    }
}
```

## UpdateGlobalRuleConfig

Updates the configuration for a globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


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
    res, err := s.GlobalRules.UpdateGlobalRuleConfig(ctx, operations.UpdateGlobalRuleConfigRequest{
        Rule1: shared.Rule{
            Config: "quo",
            Type: shared.RuleTypeEnumValidity.ToPointer(),
        },
        RulePathParameter: operations.UpdateGlobalRuleConfigRuleEnumValidity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Rule != nil {
        // handle response
    }
}
```
