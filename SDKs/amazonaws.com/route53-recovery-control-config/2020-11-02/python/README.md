# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/route53-recovery-control-config/2020-11-02/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateClusterRequest(
    request_body=operations.CreateClusterRequestBody(
        client_token="corrupti",
        cluster_name="provident",
        tags={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="deserunt",
    x_amz_credential="suscipit",
    x_amz_date="iure",
    x_amz_security_token="magnam",
    x_amz_signature="debitis",
    x_amz_signed_headers="ipsa",
)
    
res = s.create_cluster(req)

if res.create_cluster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_cluster` - Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.
* `create_control_panel` - Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.
* `create_routing_control` - <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* `create_safety_rule` - <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
* `delete_cluster` - Delete a cluster.
* `delete_control_panel` - Deletes a control panel.
* `delete_routing_control` - Deletes a routing control.
* `delete_safety_rule` - <p>Deletes a safety rule.</p>/&gt;
* `describe_cluster` - Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
* `describe_control_panel` - Displays details about a control panel.
* `describe_routing_control` - <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
* `describe_safety_rule` - Returns information about a safety rule.
* `list_associated_route53_health_checks` - Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
* `list_clusters` - Returns an array of all the clusters in an account.
* `list_control_panels` - Returns an array of control panels in an account or in a cluster.
* `list_routing_controls` - Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
* `list_safety_rules` - List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
* `list_tags_for_resource` - Lists the tags for a resource.
* `tag_resource` - Adds a tag to a resource.
* `untag_resource` - Removes a tag from a resource.
* `update_control_panel` - Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
* `update_routing_control` - Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
* `update_safety_rule` - Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
