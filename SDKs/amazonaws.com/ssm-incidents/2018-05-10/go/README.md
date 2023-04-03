# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ssm-incidents/2018-05-10/go
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateReplicationSetRequest{
        RequestBody: operations.CreateReplicationSetRequestBody{
            ClientToken: "corrupti",
            Regions: map[string]shared.RegionMapInputValue{
                "distinctio": shared.RegionMapInputValue{
                    SseKmsKeyID: "quibusdam",
                },
                "unde": shared.RegionMapInputValue{
                    SseKmsKeyID: "nulla",
                },
                "corrupti": shared.RegionMapInputValue{
                    SseKmsKeyID: "illum",
                },
            },
            Tags: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        XAmzAlgorithm: "magnam",
        XAmzContentSha256: "debitis",
        XAmzCredential: "ipsa",
        XAmzDate: "delectus",
        XAmzSecurityToken: "tempora",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "molestiae",
    }

    ctx := context.Background()
    res, err := s.CreateReplicationSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationSetOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateReplicationSet` - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* `CreateResponsePlan` - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* `CreateTimelineEvent` - Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
* `DeleteIncidentRecord` - Delete an incident record from Incident Manager. 
* `DeleteReplicationSet` - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* `DeleteResourcePolicy` - Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
* `DeleteResponsePlan` - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* `DeleteTimelineEvent` - Deletes a timeline event from an incident.
* `GetIncidentRecord` - Returns the details for the specified incident record.
* `GetReplicationSet` - Retrieve your Incident Manager replication set.
* `GetResourcePolicies` - Retrieves the resource policies attached to the specified response plan.
* `GetResponsePlan` - Retrieves the details of the specified response plan.
* `GetTimelineEvent` - Retrieves a timeline event based on its ID and incident record.
* `ListIncidentRecords` - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* `ListRelatedItems` - List all related items for an incident record.
* `ListReplicationSets` - Lists details about the replication set configured in your account. 
* `ListResponsePlans` - Lists all response plans in your account.
* `ListTagsForResource` - Lists the tags that are attached to the specified response plan.
* `ListTimelineEvents` - Lists timeline events for the specified incident record.
* `PutResourcePolicy` - Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
* `StartIncident` - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* `TagResource` - Adds a tag to a response plan.
* `UntagResource` - Removes a tag from a resource.
* `UpdateDeletionProtection` - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* `UpdateIncidentRecord` - Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* `UpdateRelatedItems` - Add or remove related items from the related items tab of an incident record.
* `UpdateReplicationSet` - Add or delete Regions from your replication set.
* `UpdateResponsePlan` - Updates the specified response plan.
* `UpdateTimelineEvent` - Updates a timeline event. You can update events of type <code>Custom Event</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
