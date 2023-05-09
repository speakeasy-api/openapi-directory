# SDK

## Overview

Recovery Control Configuration API Reference for Amazon Route 53 Application Recovery Controller

Amazon Web Services documentation
<https://docs.aws.amazon.com/route53-recovery-control-config/>
### Available Operations

* [CreateCluster](#createcluster) - Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.
* [CreateControlPanel](#createcontrolpanel) - Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.
* [CreateRoutingControl](#createroutingcontrol) - <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* [CreateSafetyRule](#createsafetyrule) - <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
* [DeleteCluster](#deletecluster) - Delete a cluster.
* [DeleteControlPanel](#deletecontrolpanel) - Deletes a control panel.
* [DeleteRoutingControl](#deleteroutingcontrol) - Deletes a routing control.
* [DeleteSafetyRule](#deletesafetyrule) - <p>Deletes a safety rule.</p>/&gt;
* [DescribeCluster](#describecluster) - Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
* [DescribeControlPanel](#describecontrolpanel) - Displays details about a control panel.
* [DescribeRoutingControl](#describeroutingcontrol) - <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* [DescribeSafetyRule](#describesafetyrule) - Returns information about a safety rule.
* [ListAssociatedRoute53HealthChecks](#listassociatedroute53healthchecks) - Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
* [ListClusters](#listclusters) - Returns an array of all the clusters in an account.
* [ListControlPanels](#listcontrolpanels) - Returns an array of control panels in an account or in a cluster.
* [ListRoutingControls](#listroutingcontrols) - Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
* [ListSafetyRules](#listsafetyrules) - List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for a resource.
* [TagResource](#tagresource) - Adds a tag to a resource.
* [UntagResource](#untagresource) - Removes a tag from a resource.
* [UpdateControlPanel](#updatecontrolpanel) - Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
* [UpdateRoutingControl](#updateroutingcontrol) - Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
* [UpdateSafetyRule](#updatesafetyrule) - Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.

## CreateCluster

Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCluster(ctx, operations.CreateClusterRequest{
        RequestBody: operations.CreateClusterRequestBody{
            ClientToken: sdk.String("delectus"),
            ClusterName: "tempora",
            Tags: map[string]string{
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
}
```

## CreateControlPanel

Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateControlPanel(ctx, operations.CreateControlPanelRequest{
        RequestBody: operations.CreateControlPanelRequestBody{
            ClientToken: sdk.String("veritatis"),
            ClusterArn: "deserunt",
            ControlPanelName: "perferendis",
            Tags: map[string]string{
                "repellendus": "sapiente",
                "quo": "odit",
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateControlPanelResponse != nil {
        // handle response
    }
}
```

## CreateRoutingControl

<p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRoutingControl(ctx, operations.CreateRoutingControlRequest{
        RequestBody: operations.CreateRoutingControlRequestBody{
            ClientToken: sdk.String("totam"),
            ClusterArn: "porro",
            ControlPanelArn: sdk.String("dolorum"),
            RoutingControlName: "dicta",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRoutingControlResponse != nil {
        // handle response
    }
}
```

## CreateSafetyRule

<p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSafetyRule(ctx, operations.CreateSafetyRuleRequest{
        RequestBody: operations.CreateSafetyRuleRequestBody{
            AssertionRule: &operations.CreateSafetyRuleRequestBodyAssertionRule{
                AssertedControls: []string{
                    "beatae",
                    "commodi",
                    "molestiae",
                },
                ControlPanelArn: sdk.String("modi"),
                Name: sdk.String("Krista Rippin"),
                RuleConfig: &shared.RuleConfig{
                    Inverted: false,
                    Threshold: 568434,
                    Type: shared.RuleTypeEnumAtleast,
                },
                WaitPeriodMs: sdk.Int64(18789),
            },
            ClientToken: sdk.String("ad"),
            GatingRule: &operations.CreateSafetyRuleRequestBodyGatingRule{
                ControlPanelArn: sdk.String("natus"),
                GatingControls: []string{
                    "iste",
                },
                Name: sdk.String("Faye Howe"),
                RuleConfig: &shared.RuleConfig{
                    Inverted: false,
                    Threshold: 681820,
                    Type: shared.RuleTypeEnumAnd,
                },
                TargetControls: []string{
                    "iste",
                    "iure",
                },
                WaitPeriodMs: sdk.Int64(902349),
            },
            Tags: map[string]string{
                "architecto": "ipsa",
                "reiciendis": "est",
                "mollitia": "laborum",
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSafetyRuleResponse != nil {
        // handle response
    }
}
```

## DeleteCluster

Delete a cluster.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCluster(ctx, operations.DeleteClusterRequest{
        ClusterArn: "nemo",
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteClusterResponse != nil {
        // handle response
    }
}
```

## DeleteControlPanel

Deletes a control panel.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteControlPanel(ctx, operations.DeleteControlPanelRequest{
        ControlPanelArn: "architecto",
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteControlPanelResponse != nil {
        // handle response
    }
}
```

## DeleteRoutingControl

Deletes a routing control.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRoutingControl(ctx, operations.DeleteRoutingControlRequest{
        RoutingControlArn: "numquam",
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRoutingControlResponse != nil {
        // handle response
    }
}
```

## DeleteSafetyRule

<p>Deletes a safety rule.</p>/&gt;

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSafetyRule(ctx, operations.DeleteSafetyRuleRequest{
        SafetyRuleArn: "vitae",
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSafetyRuleResponse != nil {
        // handle response
    }
}
```

## DescribeCluster

Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCluster(ctx, operations.DescribeClusterRequest{
        ClusterArn: "ipsam",
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClusterResponse != nil {
        // handle response
    }
}
```

## DescribeControlPanel

Displays details about a control panel.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeControlPanel(ctx, operations.DescribeControlPanelRequest{
        ControlPanelArn: "quasi",
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeControlPanelResponse != nil {
        // handle response
    }
}
```

## DescribeRoutingControl

<p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRoutingControl(ctx, operations.DescribeRoutingControlRequest{
        RoutingControlArn: "omnis",
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRoutingControlResponse != nil {
        // handle response
    }
}
```

## DescribeSafetyRule

Returns information about a safety rule.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSafetyRule(ctx, operations.DescribeSafetyRuleRequest{
        SafetyRuleArn: "dicta",
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSafetyRuleResponse != nil {
        // handle response
    }
}
```

## ListAssociatedRoute53HealthChecks

Returns an array of all Amazon Route 53 health checks associated with a specific routing control.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssociatedRoute53HealthChecks(ctx, operations.ListAssociatedRoute53HealthChecksRequest{
        MaxResults: sdk.Int64(414263),
        NextToken: sdk.String("repudiandae"),
        RoutingControlArn: "quae",
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociatedRoute53HealthChecksResponse != nil {
        // handle response
    }
}
```

## ListClusters

Returns an array of all the clusters in an account.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListClusters(ctx, operations.ListClustersRequest{
        MaxResults: sdk.Int64(523248),
        NextToken: sdk.String("voluptates"),
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersResponse != nil {
        // handle response
    }
}
```

## ListControlPanels

Returns an array of control panels in an account or in a cluster.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListControlPanels(ctx, operations.ListControlPanelsRequest{
        ClusterArn: sdk.String("consequatur"),
        MaxResults: sdk.Int64(667411),
        NextToken: sdk.String("quibusdam"),
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListControlPanelsResponse != nil {
        // handle response
    }
}
```

## ListRoutingControls

Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRoutingControls(ctx, operations.ListRoutingControlsRequest{
        ControlPanelArn: "aliquid",
        MaxResults: sdk.Int64(586513),
        NextToken: sdk.String("quos"),
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoutingControlsResponse != nil {
        // handle response
    }
}
```

## ListSafetyRules

List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSafetyRules(ctx, operations.ListSafetyRulesRequest{
        ControlPanelArn: "excepturi",
        MaxResults: sdk.Int64(270008),
        NextToken: sdk.String("facilis"),
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSafetyRulesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "aliquid",
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds a tag to a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "in": "in",
                "illum": "maiores",
                "rerum": "dicta",
            },
        },
        ResourceArn: "magnam",
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes a tag from a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "occaecati",
        TagKeys: []string{
            "accusamus",
            "delectus",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateControlPanel

Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateControlPanel(ctx, operations.UpdateControlPanelRequest{
        RequestBody: operations.UpdateControlPanelRequestBody{
            ControlPanelArn: "amet",
            ControlPanelName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateControlPanelResponse != nil {
        // handle response
    }
}
```

## UpdateRoutingControl

Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRoutingControl(ctx, operations.UpdateRoutingControlRequest{
        RequestBody: operations.UpdateRoutingControlRequestBody{
            RoutingControlArn: "magnam",
            RoutingControlName: "distinctio",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRoutingControlResponse != nil {
        // handle response
    }
}
```

## UpdateSafetyRule

Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSafetyRule(ctx, operations.UpdateSafetyRuleRequest{
        RequestBody: operations.UpdateSafetyRuleRequestBody{
            AssertionRuleUpdate: &operations.UpdateSafetyRuleRequestBodyAssertionRuleUpdate{
                Name: sdk.String("Brandon Brakus V"),
                SafetyRuleArn: sdk.String("ullam"),
                WaitPeriodMs: sdk.Int64(590873),
            },
            GatingRuleUpdate: &operations.UpdateSafetyRuleRequestBodyGatingRuleUpdate{
                Name: sdk.String("Kirk Bartoletti"),
                SafetyRuleArn: sdk.String("mollitia"),
                WaitPeriodMs: sdk.Int64(320997),
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSafetyRuleResponse != nil {
        // handle response
    }
}
```
