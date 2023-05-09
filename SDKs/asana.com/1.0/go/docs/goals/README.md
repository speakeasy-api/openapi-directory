# Goals

## Overview

A goal is an object in the goal-tracking system that helps your organization drive measurable results.

### Available Operations

* [AddFollowers](#addfollowers) - Add a collaborator to a goal
* [CreateGoal](#creategoal) - Create a goal
* [CreateGoalMetric](#creategoalmetric) - Create a goal metric
* [DeleteGoal](#deletegoal) - Delete a goal
* [GetGoal](#getgoal) - Get a goal
* [GetGoals](#getgoals) - Get goals
* [GetParentGoalsForGoal](#getparentgoalsforgoal) - Get parent goals from a goal
* [RemoveFollowers](#removefollowers) - Remove a collaborator from a goal
* [UpdateGoal](#updategoal) - Update a goal
* [UpdateGoalMetric](#updategoalmetric) - Update a goal metric

## AddFollowers

Adds followers to a goal. Returns the goal the followers were added to.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.AddFollowers(ctx, operations.AddFollowersRequest{
        RequestBody: operations.AddFollowersRequestBody{
            Data: &shared.TaskAddFollowersRequest{
                Followers: []string{
                    "quos",
                    "perferendis",
                    "magni",
                },
            },
        },
        GoalGid: "assumenda",
        OptFields: []string{
            "alias",
            "fugit",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFollowers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateGoal

Creates a new goal in a workspace or team.

Returns the full record of the newly created goal.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.CreateGoal(ctx, operations.CreateGoalRequest{
        RequestBody: operations.CreateGoalRequestBodyInput{
            Data: &shared.GoalRequestInput{
                DueOn: sdk.String("2019-09-15"),
                Followers: []string{
                    "excepturi",
                    "tempora",
                    "facilis",
                },
                HTMLNotes: sdk.String("<body>Start building brand awareness.</body>"),
                IsWorkspaceLevel: sdk.Bool(true),
                Liked: sdk.Bool(false),
                Name: sdk.String("Grow web traffic by 30%"),
                Notes: sdk.String("Start building brand awareness."),
                Owner: sdk.String("12345"),
                StartOn: sdk.String("2019-09-14"),
                Status: sdk.String("green"),
                Team: sdk.String("12345"),
                TimePeriod: sdk.String("12345"),
                Workspace: sdk.String("12345"),
            },
        },
        Limit: sdk.Int64(735194),
        Offset: sdk.String("labore"),
        OptFields: []string{
            "eum",
            "non",
            "eligendi",
            "sint",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGoal201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateGoalMetric

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.CreateGoalMetric(ctx, operations.CreateGoalMetricRequest{
        RequestBody: operations.CreateGoalMetricRequestBodyInput{
            Data: &shared.GoalMetricRequestInput{
                CurrencyCode: sdk.String("EUR"),
                CurrentNumberValue: sdk.Float64(8.12),
                InitialNumberValue: sdk.Float64(5.2),
                Precision: sdk.Int64(2),
                ProgressSource: shared.GoalMetricRequestProgressSourceEnumManual.ToPointer(),
                TargetNumberValue: sdk.Float64(10.2),
                Unit: shared.GoalMetricRequestUnitEnumCurrency.ToPointer(),
            },
        },
        GoalGid: "provident",
        OptFields: []string{
            "sint",
            "officia",
            "dolor",
            "debitis",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGoalMetric200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteGoal

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.

Returns an empty data record.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.DeleteGoal(ctx, operations.DeleteGoalRequest{
        GoalGid: "a",
        OptFields: []string{
            "in",
            "in",
            "illum",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGoal200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetGoal

Returns the complete goal record for a single goal.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.GetGoal(ctx, operations.GetGoalRequest{
        GoalGid: "maiores",
        OptFields: []string{
            "dicta",
            "magnam",
            "cumque",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGoal200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetGoals

Returns compact goal records.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.GetGoals(ctx, operations.GetGoalsRequest{
        IsWorkspaceLevel: sdk.Bool(false),
        Limit: sdk.Int64(813798),
        Offset: sdk.String("ea"),
        OptFields: []string{
            "laborum",
            "accusamus",
        },
        OptPretty: sdk.Bool(false),
        Portfolio: sdk.String("non"),
        Project: sdk.String("occaecati"),
        Team: sdk.String("enim"),
        TimePeriods: []string{
            "delectus",
            "quidem",
            "provident",
            "nam",
        },
        Workspace: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGoals200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetParentGoalsForGoal

Returns a compact representation of all of the parent goals of a goal.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.GetParentGoalsForGoal(ctx, operations.GetParentGoalsForGoalRequest{
        GoalGid: "blanditiis",
        OptFields: []string{
            "sapiente",
            "amet",
            "deserunt",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetParentGoalsForGoal200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveFollowers

Removes followers from a goal. Returns the goal the followers were removed from.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.RemoveFollowers(ctx, operations.RemoveFollowersRequest{
        RequestBody: operations.RemoveFollowersRequestBody{
            Data: &shared.TaskAddFollowersRequest{
                Followers: []string{
                    "vel",
                    "natus",
                },
            },
        },
        GoalGid: "omnis",
        OptFields: []string{
            "perferendis",
            "nihil",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveFollowers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateGoal

An existing goal can be updated by making a PUT request on the URL for
that goal. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal record.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.UpdateGoal(ctx, operations.UpdateGoalRequest{
        RequestBody: operations.UpdateGoalRequestBodyInput{
            Data: &shared.GoalRequestInput{
                DueOn: sdk.String("2019-09-15"),
                Followers: []string{
                    "distinctio",
                    "id",
                },
                HTMLNotes: sdk.String("<body>Start building brand awareness.</body>"),
                IsWorkspaceLevel: sdk.Bool(true),
                Liked: sdk.Bool(false),
                Name: sdk.String("Grow web traffic by 30%"),
                Notes: sdk.String("Start building brand awareness."),
                Owner: sdk.String("12345"),
                StartOn: sdk.String("2019-09-14"),
                Status: sdk.String("green"),
                Team: sdk.String("12345"),
                TimePeriod: sdk.String("12345"),
                Workspace: sdk.String("12345"),
            },
        },
        GoalGid: "labore",
        OptFields: []string{
            "suscipit",
            "natus",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGoal200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateGoalMetric

Updates a goal's existing metric's `current_number_value` if one exists,
otherwise responds with a 400 status code.

Returns the complete updated goal metric record.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Goals.UpdateGoalMetric(ctx, operations.UpdateGoalMetricRequest{
        RequestBody: operations.UpdateGoalMetricRequestBodyInput{
            Data: &shared.GoalMetricCurrentValueRequestInput{
                CurrentNumberValue: sdk.Float64(8.12),
            },
        },
        GoalGid: "nobis",
        OptFields: []string{
            "vero",
            "aspernatur",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGoalMetric200ApplicationJSONObject != nil {
        // handle response
    }
}
```
