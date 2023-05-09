# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotanalytics/2017-11-27/go
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
    res, err := s.BatchPutMessage(ctx, operations.BatchPutMessageRequest{
        RequestBody: operations.BatchPutMessageRequestBody{
            ChannelName: "corrupti",
            Messages: []shared.Message{
                shared.Message{
                    MessageID: "distinctio",
                    Payload: "quibusdam",
                },
                shared.Message{
                    MessageID: "unde",
                    Payload: "nulla",
                },
                shared.Message{
                    MessageID: "corrupti",
                    Payload: "illum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMessageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchPutMessage](docs/sdk/README.md#batchputmessage) - Sends messages to a channel.
* [CancelPipelineReprocessing](docs/sdk/README.md#cancelpipelinereprocessing) - Cancels the reprocessing of data through the pipeline.
* [CreateChannel](docs/sdk/README.md#createchannel) - Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
* [CreateDataset](docs/sdk/README.md#createdataset) - Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
* [CreateDatasetContent](docs/sdk/README.md#createdatasetcontent) - Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
* [CreateDatastore](docs/sdk/README.md#createdatastore) - Creates a data store, which is a repository for messages.
* [CreatePipeline](docs/sdk/README.md#createpipeline) - Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
* [DeleteChannel](docs/sdk/README.md#deletechannel) - Deletes the specified channel.
* [DeleteDataset](docs/sdk/README.md#deletedataset) - <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
* [DeleteDatasetContent](docs/sdk/README.md#deletedatasetcontent) - Deletes the content of the specified dataset.
* [DeleteDatastore](docs/sdk/README.md#deletedatastore) - Deletes the specified data store.
* [DeletePipeline](docs/sdk/README.md#deletepipeline) - Deletes the specified pipeline.
* [DescribeChannel](docs/sdk/README.md#describechannel) - Retrieves information about a channel.
* [DescribeDataset](docs/sdk/README.md#describedataset) - Retrieves information about a dataset.
* [DescribeDatastore](docs/sdk/README.md#describedatastore) - Retrieves information about a data store.
* [DescribeLoggingOptions](docs/sdk/README.md#describeloggingoptions) - Retrieves the current settings of the IoT Analytics logging options.
* [DescribePipeline](docs/sdk/README.md#describepipeline) - Retrieves information about a pipeline.
* [GetDatasetContent](docs/sdk/README.md#getdatasetcontent) - Retrieves the contents of a dataset as presigned URIs.
* [ListChannels](docs/sdk/README.md#listchannels) - Retrieves a list of channels.
* [ListDatasetContents](docs/sdk/README.md#listdatasetcontents) - Lists information about dataset contents that have been created.
* [ListDatasets](docs/sdk/README.md#listdatasets) - Retrieves information about datasets.
* [ListDatastores](docs/sdk/README.md#listdatastores) - Retrieves a list of data stores.
* [ListPipelines](docs/sdk/README.md#listpipelines) - Retrieves a list of pipelines.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags (metadata) that you have assigned to the resource.
* [PutLoggingOptions](docs/sdk/README.md#putloggingoptions) - <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
* [RunPipelineActivity](docs/sdk/README.md#runpipelineactivity) - Simulates the results of running a pipeline activity on a message payload.
* [SampleChannelData](docs/sdk/README.md#samplechanneldata) - Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
* [StartPipelineReprocessing](docs/sdk/README.md#startpipelinereprocessing) - Starts the reprocessing of raw message data through the pipeline.
* [TagResource](docs/sdk/README.md#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes the given tags (metadata) from the resource.
* [UpdateChannel](docs/sdk/README.md#updatechannel) - Used to update the settings of a channel.
* [UpdateDataset](docs/sdk/README.md#updatedataset) - Updates the settings of a dataset.
* [UpdateDatastore](docs/sdk/README.md#updatedatastore) - Used to update the settings of a data store.
* [UpdatePipeline](docs/sdk/README.md#updatepipeline) - Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
