# GoalRelationships

## Overview

A goal relationship is an object representing the relationship between a goal and another goal, a project, or a portfolio.

### Available Operations

* [AddSupportingRelationship](#addsupportingrelationship) - Add a supporting goal relationship
* [GetGoalRelationship](#getgoalrelationship) - Get a goal relationship
* [GetGoalRelationships](#getgoalrelationships) - Get goal relationships
* [RemoveSupportingRelationship](#removesupportingrelationship) - Removes a supporting goal relationship
* [UpdateGoalRelationship](#updategoalrelationship) - Update a goal relationship

## AddSupportingRelationship

Creates a goal relationship by adding a supporting resource to a given goal.

Returns the newly created goal relationship record.

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
    res, err := s.GoalRelationships.AddSupportingRelationship(ctx, operations.AddSupportingRelationshipRequest{
        RequestBody: operations.AddSupportingRelationshipRequestBody{
            Data: &shared.GoalAddSupportingRelationshipRequest{
                ContributionWeight: sdk.Float64(1),
                InsertAfter: sdk.String("1331"),
                InsertBefore: sdk.String("1331"),
                SupportingResource: "12345",
            },
        },
        GoalGid: "ipsum",
        OptFields: []string{
            "molestias",
            "excepturi",
            "pariatur",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddSupportingRelationship200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetGoalRelationship

Returns the complete updated goal relationship record for a single goal relationship.

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
    res, err := s.GoalRelationships.GetGoalRelationship(ctx, operations.GetGoalRelationshipRequest{
        GoalRelationshipGid: "modi",
        OptFields: []string{
            "rem",
            "voluptates",
            "quasi",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGoalRelationship200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetGoalRelationships

Returns compact goal relationship records.

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
    res, err := s.GoalRelationships.GetGoalRelationships(ctx, operations.GetGoalRelationshipsRequest{
        OptFields: []string{
            "sint",
            "veritatis",
            "itaque",
            "incidunt",
        },
        OptPretty: sdk.Bool(false),
        ResourceSubtype: sdk.String("enim"),
        SupportedGoal: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGoalRelationships200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveSupportingRelationship

Removes a goal relationship for a given parent goal.

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
    res, err := s.GoalRelationships.RemoveSupportingRelationship(ctx, operations.RemoveSupportingRelationshipRequest{
        RequestBody: operations.RemoveSupportingRelationshipRequestBody{
            Data: &shared.GoalRemoveSupportingRelationshipRequest{
                SupportingResource: "12345",
            },
        },
        GoalGid: "est",
        OptFields: []string{
            "explicabo",
            "deserunt",
            "distinctio",
            "quibusdam",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveSupportingRelationship200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateGoalRelationship

An existing goal relationship can be updated by making a PUT request on the URL for
that goal relationship. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal relationship record.

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
    res, err := s.GoalRelationships.UpdateGoalRelationship(ctx, operations.UpdateGoalRelationshipRequest{
        RequestBody: operations.UpdateGoalRelationshipRequestBodyInput{
            Data: &shared.GoalRelationshipRequestInput{
                ContributionWeight: sdk.Float64(1),
                SupportedGoal: &shared.GoalRelationshipRequestSupportedGoalInput{
                    Name: sdk.String("Grow web traffic by 30%"),
                    Owner: &shared.GoalRelationshipRequestSupportedGoalOwnerInput{
                        Name: sdk.String("Greg Sanchez"),
                    },
                },
                SupportingResource: &shared.GoalRelationshipRequestSupportingResourceInput{
                    Name: sdk.String("Stuff to buy"),
                },
            },
        },
        GoalRelationshipGid: "labore",
        OptFields: []string{
            "qui",
            "aliquid",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGoalRelationship200ApplicationJSONObject != nil {
        // handle response
    }
}
```
