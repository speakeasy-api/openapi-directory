# Rules

### Available Operations

* [DeleteAppsAppIDRulesRuleID](#deleteappsappidrulesruleid) - Deletes a Integration Rule
* [GetAppsAppIDRules](#getappsappidrules) - Lists Integration rules
* [GetAppsAppIDRulesRuleID](#getappsappidrulesruleid) - Gets a Integration Rule by ID
* [PatchAppsAppIDRulesRuleID](#patchappsappidrulesruleid) - Updates a Integration Rule
* [PostAppsAppIDRules](#postappsappidrules) - Creates a Integration Rule

## DeleteAppsAppIDRulesRuleID

Deletes a Integration Rule

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
    res, err := s.Rules.DeleteAppsAppIDRulesRuleID(ctx, operations.DeleteAppsAppIDRulesRuleIDRequest{
        AppID: "ea",
        RuleID: "aliquid",
    }, operations.DeleteAppsAppIDRulesRuleIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAppsAppIDRules

Lists Integration rules

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
    res, err := s.Rules.GetAppsAppIDRules(ctx, operations.GetAppsAppIDRulesRequest{
        AppID: "laborum",
    }, operations.GetAppsAppIDRulesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuleResponses != nil {
        // handle response
    }
}
```

## GetAppsAppIDRulesRuleID

Gets a Integration Rule by ID

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
    res, err := s.Rules.GetAppsAppIDRulesRuleID(ctx, operations.GetAppsAppIDRulesRuleIDRequest{
        AppID: "accusamus",
        RuleID: "non",
    }, operations.GetAppsAppIDRulesRuleIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuleResponse != nil {
        // handle response
    }
}
```

## PatchAppsAppIDRulesRuleID

Updates a Integration Rule

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
    res, err := s.Rules.PatchAppsAppIDRulesRuleID(ctx, operations.PatchAppsAppIDRulesRuleIDRequest{
        AppID: "occaecati",
        RuleID: "enim",
        RulePatch: &shared.RulePatch{},
    }, operations.PatchAppsAppIDRulesRuleIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuleResponse != nil {
        // handle response
    }
}
```

## PostAppsAppIDRules

Creates a Integration Rule

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
    res, err := s.Rules.PostAppsAppIDRules(ctx, operations.PostAppsAppIDRulesRequest{
        AppID: "accusamus",
        RulePost: &shared.RulePost{},
    }, operations.PostAppsAppIDRulesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuleResponse != nil {
        // handle response
    }
}
```
