# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateReplicationSetRequestBody;
import org.openapis.openapi.models.operations.CreateReplicationSetRequest;
import org.openapis.openapi.models.operations.CreateReplicationSetResponse;
import org.openapis.openapi.models.shared.RegionMapInputValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationSetRequest req = new CreateReplicationSetRequest() {{
                requestBody = new CreateReplicationSetRequestBody() {{
                    clientToken = "corrupti";
                    regions = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionMapInputValue>() {{
                        put("distinctio", new RegionMapInputValue() {{
                            sseKmsKeyId = "quibusdam";
                        }});
                        put("unde", new RegionMapInputValue() {{
                            sseKmsKeyId = "nulla";
                        }});
                        put("corrupti", new RegionMapInputValue() {{
                            sseKmsKeyId = "illum";
                        }});
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                }};
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }}            

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
## Available Resources and Operations

### SDK SDK

* `createReplicationSet` - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* `createResponsePlan` - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* `createTimelineEvent` - Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
* `deleteIncidentRecord` - Delete an incident record from Incident Manager. 
* `deleteReplicationSet` - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* `deleteResourcePolicy` - Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
* `deleteResponsePlan` - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* `deleteTimelineEvent` - Deletes a timeline event from an incident.
* `getIncidentRecord` - Returns the details for the specified incident record.
* `getReplicationSet` - Retrieve your Incident Manager replication set.
* `getResourcePolicies` - Retrieves the resource policies attached to the specified response plan.
* `getResponsePlan` - Retrieves the details of the specified response plan.
* `getTimelineEvent` - Retrieves a timeline event based on its ID and incident record.
* `listIncidentRecords` - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* `listRelatedItems` - List all related items for an incident record.
* `listReplicationSets` - Lists details about the replication set configured in your account. 
* `listResponsePlans` - Lists all response plans in your account.
* `listTagsForResource` - Lists the tags that are attached to the specified response plan.
* `listTimelineEvents` - Lists timeline events for the specified incident record.
* `putResourcePolicy` - Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
* `startIncident` - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* `tagResource` - Adds a tag to a response plan.
* `untagResource` - Removes a tag from a resource.
* `updateDeletionProtection` - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* `updateIncidentRecord` - Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* `updateRelatedItems` - Add or remove related items from the related items tab of an incident record.
* `updateReplicationSet` - Add or delete Regions from your replication set.
* `updateResponsePlan` - Updates the specified response plan.
* `updateTimelineEvent` - Updates a timeline event. You can update events of type <code>Custom Event</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
