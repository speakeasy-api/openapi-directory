# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/route53-recovery-control-config/2020-11-02/go
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

    req := operations.CreateClusterRequest{
        Headers: operations.CreateClusterHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateClusterRequestBody{
            ClientToken: "nulla",
            ClusterName: "nihil",
            Tags: map[string]string{
                "facilis": "eum",
                "iusto": "ullam",
                "saepe": "inventore",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateCluster` - Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.
* `CreateControlPanel` - Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.
* `CreateRoutingControl` - <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* `CreateSafetyRule` - <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
* `DeleteCluster` - Delete a cluster.
* `DeleteControlPanel` - Deletes a control panel.
* `DeleteRoutingControl` - Deletes a routing control.
* `DeleteSafetyRule` - <p>Deletes a safety rule.</p>/&gt;
* `DescribeCluster` - Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
* `DescribeControlPanel` - Displays details about a control panel.
* `DescribeRoutingControl` - <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* `DescribeSafetyRule` - Returns information about a safety rule.
* `ListAssociatedRoute53HealthChecks` - Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
* `ListClusters` - Returns an array of all the clusters in an account.
* `ListControlPanels` - Returns an array of control panels in an account or in a cluster.
* `ListRoutingControls` - Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
* `ListSafetyRules` - List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
* `ListTagsForResource` - Lists the tags for a resource.
* `TagResource` - Adds a tag to a resource.
* `UntagResource` - Removes a tag from a resource.
* `UpdateControlPanel` - Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
* `UpdateRoutingControl` - Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
* `UpdateSafetyRule` - Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
