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
import org.openapis.openapi.models.operations.BatchPutMessageRequestBody;
import org.openapis.openapi.models.operations.BatchPutMessageRequest;
import org.openapis.openapi.models.operations.BatchPutMessageResponse;
import org.openapis.openapi.models.shared.Message;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutMessageRequest req = new BatchPutMessageRequest() {{
                requestBody = new BatchPutMessageRequestBody() {{
                    channelName = "corrupti";
                    messages = new org.openapis.openapi.models.shared.Message[]{{
                        add(new Message() {{
                            messageId = "distinctio";
                            payload = "quibusdam";
                        }}),
                        add(new Message() {{
                            messageId = "unde";
                            payload = "nulla";
                        }}),
                        add(new Message() {{
                            messageId = "corrupti";
                            payload = "illum";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }}            

            BatchPutMessageResponse res = sdk.batchPutMessage(req);

            if (res.batchPutMessageResponse.isPresent()) {
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

* `batchPutMessage` - Sends messages to a channel.
* `cancelPipelineReprocessing` - Cancels the reprocessing of data through the pipeline.
* `createChannel` - Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
* `createDataset` - Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
* `createDatasetContent` - Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
* `createDatastore` - Creates a data store, which is a repository for messages.
* `createPipeline` - Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
* `deleteChannel` - Deletes the specified channel.
* `deleteDataset` - <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
* `deleteDatasetContent` - Deletes the content of the specified dataset.
* `deleteDatastore` - Deletes the specified data store.
* `deletePipeline` - Deletes the specified pipeline.
* `describeChannel` - Retrieves information about a channel.
* `describeDataset` - Retrieves information about a dataset.
* `describeDatastore` - Retrieves information about a data store.
* `describeLoggingOptions` - Retrieves the current settings of the IoT Analytics logging options.
* `describePipeline` - Retrieves information about a pipeline.
* `getDatasetContent` - Retrieves the contents of a dataset as presigned URIs.
* `listChannels` - Retrieves a list of channels.
* `listDatasetContents` - Lists information about dataset contents that have been created.
* `listDatasets` - Retrieves information about datasets.
* `listDatastores` - Retrieves a list of data stores.
* `listPipelines` - Retrieves a list of pipelines.
* `listTagsForResource` - Lists the tags (metadata) that you have assigned to the resource.
* `putLoggingOptions` - <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
* `runPipelineActivity` - Simulates the results of running a pipeline activity on a message payload.
* `sampleChannelData` - Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
* `startPipelineReprocessing` - Starts the reprocessing of raw message data through the pipeline.
* `tagResource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `untagResource` - Removes the given tags (metadata) from the resource.
* `updateChannel` - Used to update the settings of a channel.
* `updateDataset` - Updates the settings of a dataset.
* `updateDatastore` - Used to update the settings of a data store.
* `updatePipeline` - Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
