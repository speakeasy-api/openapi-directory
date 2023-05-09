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
    res, err := s.CreateReplicationSet(ctx, operations.CreateReplicationSetRequest{
        RequestBody: operations.CreateReplicationSetRequestBody{
            ClientToken: sdk.String("corrupti"),
            Regions: map[string]shared.RegionMapInputValue{
                "distinctio": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("quibusdam"),
                },
                "unde": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("nulla"),
                },
                "corrupti": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("illum"),
                },
            },
            Tags: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
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

### [SDK](docs/sdk/README.md)

* [CreateReplicationSet](docs/sdk/README.md#createreplicationset) - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* [CreateResponsePlan](docs/sdk/README.md#createresponseplan) - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* [CreateTimelineEvent](docs/sdk/README.md#createtimelineevent) - Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
* [DeleteIncidentRecord](docs/sdk/README.md#deleteincidentrecord) - Delete an incident record from Incident Manager. 
* [DeleteReplicationSet](docs/sdk/README.md#deletereplicationset) - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* [DeleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) - Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
* [DeleteResponsePlan](docs/sdk/README.md#deleteresponseplan) - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* [DeleteTimelineEvent](docs/sdk/README.md#deletetimelineevent) - Deletes a timeline event from an incident.
* [GetIncidentRecord](docs/sdk/README.md#getincidentrecord) - Returns the details for the specified incident record.
* [GetReplicationSet](docs/sdk/README.md#getreplicationset) - Retrieve your Incident Manager replication set.
* [GetResourcePolicies](docs/sdk/README.md#getresourcepolicies) - Retrieves the resource policies attached to the specified response plan.
* [GetResponsePlan](docs/sdk/README.md#getresponseplan) - Retrieves the details of the specified response plan.
* [GetTimelineEvent](docs/sdk/README.md#gettimelineevent) - Retrieves a timeline event based on its ID and incident record.
* [ListIncidentRecords](docs/sdk/README.md#listincidentrecords) - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* [ListRelatedItems](docs/sdk/README.md#listrelateditems) - List all related items for an incident record.
* [ListReplicationSets](docs/sdk/README.md#listreplicationsets) - Lists details about the replication set configured in your account. 
* [ListResponsePlans](docs/sdk/README.md#listresponseplans) - Lists all response plans in your account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags that are attached to the specified response plan.
* [ListTimelineEvents](docs/sdk/README.md#listtimelineevents) - Lists timeline events for the specified incident record.
* [PutResourcePolicy](docs/sdk/README.md#putresourcepolicy) - Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
* [StartIncident](docs/sdk/README.md#startincident) - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* [TagResource](docs/sdk/README.md#tagresource) - Adds a tag to a response plan.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes a tag from a resource.
* [UpdateDeletionProtection](docs/sdk/README.md#updatedeletionprotection) - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* [UpdateIncidentRecord](docs/sdk/README.md#updateincidentrecord) - Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* [UpdateRelatedItems](docs/sdk/README.md#updaterelateditems) - Add or remove related items from the related items tab of an incident record.
* [UpdateReplicationSet](docs/sdk/README.md#updatereplicationset) - Add or delete Regions from your replication set.
* [UpdateResponsePlan](docs/sdk/README.md#updateresponseplan) - Updates the specified response plan.
* [UpdateTimelineEvent](docs/sdk/README.md#updatetimelineevent) - Updates a timeline event. You can update events of type <code>Custom Event</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
