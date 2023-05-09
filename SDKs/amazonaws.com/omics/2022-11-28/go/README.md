# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/omics/2022-11-28/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchDeleteReadSet(ctx, operations.BatchDeleteReadSetRequest{
        RequestBody: operations.BatchDeleteReadSetRequestBody{
            Ids: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        SequenceStoreID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteReadSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchDeleteReadSet](docs/sdk/README.md#batchdeletereadset) - Deletes one or more read sets.
* [CancelAnnotationImportJob](docs/sdk/README.md#cancelannotationimportjob) - Cancels an annotation import job.
* [CancelRun](docs/sdk/README.md#cancelrun) - Cancels a run.
* [CancelVariantImportJob](docs/sdk/README.md#cancelvariantimportjob) - Cancels a variant import job.
* [CreateAnnotationStore](docs/sdk/README.md#createannotationstore) - Creates an annotation store.
* [CreateReferenceStore](docs/sdk/README.md#createreferencestore) - Creates a reference store.
* [CreateRunGroup](docs/sdk/README.md#createrungroup) - Creates a run group.
* [CreateSequenceStore](docs/sdk/README.md#createsequencestore) - Creates a sequence store.
* [CreateVariantStore](docs/sdk/README.md#createvariantstore) - Creates a variant store.
* [CreateWorkflow](docs/sdk/README.md#createworkflow) - Creates a workflow.
* [DeleteAnnotationStore](docs/sdk/README.md#deleteannotationstore) - Deletes an annotation store.
* [DeleteReference](docs/sdk/README.md#deletereference) - Deletes a genome reference.
* [DeleteReferenceStore](docs/sdk/README.md#deletereferencestore) - Deletes a genome reference store.
* [DeleteRun](docs/sdk/README.md#deleterun) - Deletes a workflow run.
* [DeleteRunGroup](docs/sdk/README.md#deleterungroup) - Deletes a workflow run group.
* [DeleteSequenceStore](docs/sdk/README.md#deletesequencestore) - Deletes a sequence store.
* [DeleteVariantStore](docs/sdk/README.md#deletevariantstore) - Deletes a variant store.
* [DeleteWorkflow](docs/sdk/README.md#deleteworkflow) - Deletes a workflow.
* [GetAnnotationImportJob](docs/sdk/README.md#getannotationimportjob) - Gets information about an annotation import job.
* [GetAnnotationStore](docs/sdk/README.md#getannotationstore) - Gets information about an annotation store.
* [GetReadSet](docs/sdk/README.md#getreadset) - Gets a file from a read set.
* [GetReadSetActivationJob](docs/sdk/README.md#getreadsetactivationjob) - Gets information about a read set activation job.
* [GetReadSetExportJob](docs/sdk/README.md#getreadsetexportjob) - Gets information about a read set export job.
* [GetReadSetImportJob](docs/sdk/README.md#getreadsetimportjob) - Gets information about a read set import job.
* [GetReadSetMetadata](docs/sdk/README.md#getreadsetmetadata) - Gets details about a read set.
* [GetReference](docs/sdk/README.md#getreference) - Gets a reference file.
* [GetReferenceImportJob](docs/sdk/README.md#getreferenceimportjob) - Gets information about a reference import job.
* [GetReferenceMetadata](docs/sdk/README.md#getreferencemetadata) - Gets information about a genome reference's metadata.
* [GetReferenceStore](docs/sdk/README.md#getreferencestore) - Gets information about a reference store.
* [GetRun](docs/sdk/README.md#getrun) - Gets information about a workflow run.
* [GetRunGroup](docs/sdk/README.md#getrungroup) - Gets information about a workflow run group.
* [GetRunTask](docs/sdk/README.md#getruntask) - Gets information about a workflow run task.
* [GetSequenceStore](docs/sdk/README.md#getsequencestore) - Gets information about a sequence store.
* [GetVariantImportJob](docs/sdk/README.md#getvariantimportjob) - Gets information about a variant import job.
* [GetVariantStore](docs/sdk/README.md#getvariantstore) - Gets information about a variant store.
* [GetWorkflow](docs/sdk/README.md#getworkflow) - Gets information about a workflow.
* [ListAnnotationImportJobs](docs/sdk/README.md#listannotationimportjobs) - Retrieves a list of annotation import jobs.
* [ListAnnotationStores](docs/sdk/README.md#listannotationstores) - Retrieves a list of annotation stores.
* [ListReadSetActivationJobs](docs/sdk/README.md#listreadsetactivationjobs) - Retrieves a list of read set activation jobs.
* [ListReadSetExportJobs](docs/sdk/README.md#listreadsetexportjobs) - Retrieves a list of read set export jobs.
* [ListReadSetImportJobs](docs/sdk/README.md#listreadsetimportjobs) - Retrieves a list of read set import jobs.
* [ListReadSets](docs/sdk/README.md#listreadsets) - Retrieves a list of read sets.
* [ListReferenceImportJobs](docs/sdk/README.md#listreferenceimportjobs) - Retrieves a list of reference import jobs.
* [ListReferenceStores](docs/sdk/README.md#listreferencestores) - Retrieves a list of reference stores.
* [ListReferences](docs/sdk/README.md#listreferences) - Retrieves a list of references.
* [ListRunGroups](docs/sdk/README.md#listrungroups) - Retrieves a list of run groups.
* [ListRunTasks](docs/sdk/README.md#listruntasks) - Retrieves a list of tasks for a run.
* [ListRuns](docs/sdk/README.md#listruns) - Retrieves a list of runs.
* [ListSequenceStores](docs/sdk/README.md#listsequencestores) - Retrieves a list of sequence stores.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves a list of tags for a resource.
* [ListVariantImportJobs](docs/sdk/README.md#listvariantimportjobs) - Retrieves a list of variant import jobs.
* [ListVariantStores](docs/sdk/README.md#listvariantstores) - Retrieves a list of variant stores.
* [ListWorkflows](docs/sdk/README.md#listworkflows) - Retrieves a list of workflows.
* [StartAnnotationImportJob](docs/sdk/README.md#startannotationimportjob) - Starts an annotation import job.
* [StartReadSetActivationJob](docs/sdk/README.md#startreadsetactivationjob) - Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
* [StartReadSetExportJob](docs/sdk/README.md#startreadsetexportjob) - Exports a read set to Amazon S3.
* [StartReadSetImportJob](docs/sdk/README.md#startreadsetimportjob) - Starts a read set import job.
* [StartReferenceImportJob](docs/sdk/README.md#startreferenceimportjob) - Starts a reference import job.
* [StartRun](docs/sdk/README.md#startrun) - Starts a run.
* [StartVariantImportJob](docs/sdk/README.md#startvariantimportjob) - Starts a variant import job.
* [TagResource](docs/sdk/README.md#tagresource) - Tags a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from a resource.
* [UpdateAnnotationStore](docs/sdk/README.md#updateannotationstore) - Updates an annotation store.
* [UpdateRunGroup](docs/sdk/README.md#updaterungroup) - Updates a run group.
* [UpdateVariantStore](docs/sdk/README.md#updatevariantstore) - Updates a variant store.
* [UpdateWorkflow](docs/sdk/README.md#updateworkflow) - Updates a workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
