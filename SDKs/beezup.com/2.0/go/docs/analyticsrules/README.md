# AnalyticsRules

### Available Operations

* [CreateRule](#createrule) - Rule creation
* [DeleteRule](#deleterule) - Delete Rule
* [DisableRule](#disablerule) - Disable rule
* [EnableRule](#enablerule) - Enable rule
* [GetRule](#getrule) - Gets the rule
* [GetRules](#getrules) - Gets the list of rules for a given store
* [GetRulesExecutions](#getrulesexecutions) - Get the rules execution history
* [MoveDownRule](#movedownrule) - Move the rule down
* [MoveUpRule](#moveuprule) - Move the rule up
* [RunRule](#runrule) - Run rule
* [RunRules](#runrules) - Run all rules for this store
* [UpdateRule](#updaterule) - Update Rule

## CreateRule

Rule creation

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AnalyticsRules.CreateRule(ctx, operations.CreateRuleRequest{
        CreateRuleRequest: shared.CreateRuleRequest{
            EndUtcDate: types.MustTimeFromString("2017-09-30T10:42:40.001Z"),
            OptimisationActionName: shared.OptimisationActionNameEnumReenable,
            ReportFilterID: "fb19c53c-2f63-4262-9d94-2d7faa500acd",
            RuleName: "My rule",
            StartUtcDate: types.MustTimeFromString("2016-08-29T09:12:33.001Z"),
        },
        StoreID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRule

Delete Rule

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
    res, err := s.AnalyticsRules.DeleteRule(ctx, operations.DeleteRuleRequest{
        RuleID: "doloribus",
        StoreID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableRule

Disable rule

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
    res, err := s.AnalyticsRules.DisableRule(ctx, operations.DisableRuleRequest{
        RuleID: "architecto",
        StoreID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableRule

Enable rule

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
    res, err := s.AnalyticsRules.EnableRule(ctx, operations.EnableRuleRequest{
        RuleID: "dolorem",
        StoreID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRule

Gets the rule

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
    res, err := s.AnalyticsRules.GetRule(ctx, operations.GetRuleRequest{
        RuleID: "consequuntur",
        StoreID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Rule != nil {
        // handle response
    }
}
```

## GetRules

Gets the list of rules for a given store

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
    res, err := s.AnalyticsRules.GetRules(ctx, operations.GetRulesRequest{
        StoreID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuleList != nil {
        // handle response
    }
}
```

## GetRulesExecutions

Get the rules execution history

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
    res, err := s.AnalyticsRules.GetRulesExecutions(ctx, operations.GetRulesExecutionsRequest{
        PageNumber: 581850,
        PageSize: 253291,
        StoreID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuleExecutionReportings != nil {
        // handle response
    }
}
```

## MoveDownRule

Move the rule down

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
    res, err := s.AnalyticsRules.MoveDownRule(ctx, operations.MoveDownRuleRequest{
        RuleID: "quam",
        StoreID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MoveUpRule

Move the rule up

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
    res, err := s.AnalyticsRules.MoveUpRule(ctx, operations.MoveUpRuleRequest{
        RuleID: "velit",
        StoreID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RunRule

Run rule

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
    res, err := s.AnalyticsRules.RunRule(ctx, operations.RunRuleRequest{
        RuleID: "quia",
        StoreID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RunRules

Run all rules for this store

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
    res, err := s.AnalyticsRules.RunRules(ctx, operations.RunRulesRequest{
        StoreID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateRule

Update Rule

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AnalyticsRules.UpdateRule(ctx, operations.UpdateRuleRequest{
        RuleID: "laborum",
        StoreID: "animi",
        UpdateRuleRequest: shared.UpdateRuleRequest{
            EndUtcDate: types.MustTimeFromString("2016-08-29T09:12:33.001Z"),
            RuleName: "My Rule Renamed",
            StartUtcDate: types.MustTimeFromString("2016-08-29T09:12:33.001Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
