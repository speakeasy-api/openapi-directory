# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/route53-recovery-cluster/2019-12-02/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetRoutingControlStateRequest{
        Headers: operations.GetRoutingControlStateHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "ToggleCustomerAPI.GetRoutingControlState",
        },
        Request: shared.GetRoutingControlStateRequest{
            RoutingControlArn: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.GetRoutingControlState(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRoutingControlStateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GetRoutingControlState` - <p>Get the state for a routing control. A routing control is a simple on/off switch that you can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When the state is Off, traffic does not flow. </p> <p>Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html"> Create routing control structures</a> in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application. </p> <p> <i>You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC.</i> </p> <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <p>Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html"> Viewing and updating routing control states</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls in Route 53 ARC</a> </p> </li> </ul>
* `ListRoutingControls` - <p>List routing control names and Amazon Resource Names (ARNs), as well as the routing control state for each routing control, along with the control panel name and control panel ARN for the routing controls. If you specify a control panel ARN, this call lists the routing controls in the control panel. Otherwise, it lists all the routing controls in the cluster.</p> <p>A routing control is a simple on/off switch in Route 53 ARC that you can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When the state is Off, traffic does not flow.</p> <p>Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html"> Create routing control structures</a> in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application. </p> <p> <i>You must specify Regional endpoints when you work with API cluster operations to use this API operation to list routing controls in Route 53 ARC.</i> </p> <p>Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html"> Viewing and updating routing control states</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls in Route 53 ARC</a> </p> </li> </ul>
* `UpdateRoutingControlState` - <p>Set the state of the routing control to reroute traffic. You can set the value to be On or Off. When the state is On, traffic flows to a cell. When the state is Off, traffic does not flow.</p> <p>With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application.</p> <p>The <code>SafetyRulesToOverride</code> property enables you override one or more safety rules and update routing control states. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html"> Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <p> <i>You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC.</i> </p> <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html"> Viewing and updating routing control states</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls overall</a> </p> </li> </ul>
* `UpdateRoutingControlStates` - <p>Set multiple routing control states. You can set the value for each state to be On or Off. When the state is On, traffic flows to a cell. When it's Off, traffic does not flow.</p> <p>With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application.</p> <p>The <code>SafetyRulesToOverride</code> property enables you override one or more safety rules and update routing control states. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html"> Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <p> <i>You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC.</i> </p> <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html"> Viewing and updating routing control states</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls overall</a> </p> </li> </ul>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
