# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateReplicationSetRequest req = new CreateReplicationSetRequest() {{
                headers = new CreateReplicationSetHeaders() {{
                    xAmzAlgorithm = "non";
                    xAmzContentSha256 = "totam";
                    xAmzCredential = "similique";
                    xAmzDate = "sunt";
                    xAmzSecurityToken = "aut";
                    xAmzSignature = "quis";
                    xAmzSignedHeaders = "quis";
                }};
                request = new CreateReplicationSetRequestBody() {{
                    clientToken = "amet";
                    regions = new java.util.HashMap<String, openapisdk.models.shared.RegionMapInputValue>() {{
                        put("totam", new RegionMapInputValue() {{
                            sseKmsKeyId = "perspiciatis";
                        }});
                        put("cupiditate", new RegionMapInputValue() {{
                            sseKmsKeyId = "asperiores";
                        }});
                        put("quasi", new RegionMapInputValue() {{
                            sseKmsKeyId = "eius";
                        }});
                    }};
                }};
            }};

            CreateReplicationSetResponse res = sdk.createReplicationSet(req);

            if (res.createReplicationSetOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createReplicationSet` - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* `createResponsePlan` - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* `createTimelineEvent` - Creates a custom timeline event on the incident details page of an incident record. Timeline events are automatically created by Incident Manager, marking key moment during an incident. You can create custom timeline events to mark important events that are automatically detected by Incident Manager.
* `deleteIncidentRecord` - Delete an incident record from Incident Manager. 
* `deleteReplicationSet` - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* `deleteResourcePolicy` - Deletes the resource policy that AWS Resource Access Manager uses to share your Incident Manager resource.
* `deleteResponsePlan` - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* `deleteTimelineEvent` - Deletes a timeline event from an incident.
* `getIncidentRecord` - Returns the details of the specified incident record.
* `getReplicationSet` - Retrieve your Incident Manager replication set.
* `getResourcePolicies` - Retrieves the resource policies attached to the specified response plan.
* `getResponsePlan` - Retrieves the details of the specified response plan.
* `getTimelineEvent` - Retrieves a timeline event based on its ID and incident record.
* `listIncidentRecords` - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* `listRelatedItems` - List all related items for an incident record.
* `listReplicationSets` - Lists details about the replication set configured in your account. 
* `listResponsePlans` - Lists all response plans in your account.
* `listTagsForResource` - Lists the tags that are attached to the specified response plan.
* `listTimelineEvents` - Lists timeline events of the specified incident record.
* `putResourcePolicy` - Adds a resource policy to the specified response plan.
* `startIncident` - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* `tagResource` - Adds a tag to a response plan.
* `untagResource` - Removes a tag from a resource.
* `updateDeletionProtection` - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* `updateIncidentRecord` - Update the details of an incident record. You can use this action to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* `updateRelatedItems` - Add or remove related items from the related items tab of an incident record.
* `updateReplicationSet` - Add or delete Regions from your replication set.
* `updateResponsePlan` - Updates the specified response plan.
* `updateTimelineEvent` - Updates a timeline event. You can update events of type <code>Custom Event</code>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
