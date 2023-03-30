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

    req := operations.BatchDeleteReadSetRequest{
        PathParams: operations.BatchDeleteReadSetPathParams{
            SequenceStoreID: "corrupti",
        },
        Headers: operations.BatchDeleteReadSetHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.BatchDeleteReadSetRequestBody{
            Ids: []string{
                "error",
                "deserunt",
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchDeleteReadSet(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `BatchDeleteReadSet` - Deletes one or more read sets.
* `CancelAnnotationImportJob` - Cancels an annotation import job.
* `CancelRun` - Cancels a run.
* `CancelVariantImportJob` - Cancels a variant import job.
* `CreateAnnotationStore` - Creates an annotation store.
* `CreateReferenceStore` - Creates a reference store.
* `CreateRunGroup` - Creates a run group.
* `CreateSequenceStore` - Creates a sequence store.
* `CreateVariantStore` - Creates a variant store.
* `CreateWorkflow` - Creates a workflow.
* `DeleteAnnotationStore` - Deletes an annotation store.
* `DeleteReference` - Deletes a genome reference.
* `DeleteReferenceStore` - Deletes a genome reference store.
* `DeleteRun` - Deletes a workflow run.
* `DeleteRunGroup` - Deletes a workflow run group.
* `DeleteSequenceStore` - Deletes a sequence store.
* `DeleteVariantStore` - Deletes a variant store.
* `DeleteWorkflow` - Deletes a workflow.
* `GetAnnotationImportJob` - Gets information about an annotation import job.
* `GetAnnotationStore` - Gets information about an annotation store.
* `GetReadSet` - Gets a file from a read set.
* `GetReadSetActivationJob` - Gets information about a read set activation job.
* `GetReadSetExportJob` - Gets information about a read set export job.
* `GetReadSetImportJob` - Gets information about a read set import job.
* `GetReadSetMetadata` - Gets details about a read set.
* `GetReference` - Gets a reference file.
* `GetReferenceImportJob` - Gets information about a reference import job.
* `GetReferenceMetadata` - Gets information about a genome reference's metadata.
* `GetReferenceStore` - Gets information about a reference store.
* `GetRun` - Gets information about a workflow run.
* `GetRunGroup` - Gets information about a workflow run group.
* `GetRunTask` - Gets information about a workflow run task.
* `GetSequenceStore` - Gets information about a sequence store.
* `GetVariantImportJob` - Gets information about a variant import job.
* `GetVariantStore` - Gets information about a variant store.
* `GetWorkflow` - Gets information about a workflow.
* `ListAnnotationImportJobs` - Retrieves a list of annotation import jobs.
* `ListAnnotationStores` - Retrieves a list of annotation stores.
* `ListReadSetActivationJobs` - Retrieves a list of read set activation jobs.
* `ListReadSetExportJobs` - Retrieves a list of read set export jobs.
* `ListReadSetImportJobs` - Retrieves a list of read set import jobs.
* `ListReadSets` - Retrieves a list of read sets.
* `ListReferenceImportJobs` - Retrieves a list of reference import jobs.
* `ListReferenceStores` - Retrieves a list of reference stores.
* `ListReferences` - Retrieves a list of references.
* `ListRunGroups` - Retrieves a list of run groups.
* `ListRunTasks` - Retrieves a list of tasks for a run.
* `ListRuns` - Retrieves a list of runs.
* `ListSequenceStores` - Retrieves a list of sequence stores.
* `ListTagsForResource` - Retrieves a list of tags for a resource.
* `ListVariantImportJobs` - Retrieves a list of variant import jobs.
* `ListVariantStores` - Retrieves a list of variant stores.
* `ListWorkflows` - Retrieves a list of workflows.
* `StartAnnotationImportJob` - Starts an annotation import job.
* `StartReadSetActivationJob` - Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
* `StartReadSetExportJob` - Exports a read set to Amazon S3.
* `StartReadSetImportJob` - Starts a read set import job.
* `StartReferenceImportJob` - Starts a reference import job.
* `StartRun` - Starts a run.
* `StartVariantImportJob` - Starts a variant import job.
* `TagResource` - Tags a resource.
* `UntagResource` - Removes tags from a resource.
* `UpdateAnnotationStore` - Updates an annotation store.
* `UpdateRunGroup` - Updates a run group.
* `UpdateVariantStore` - Updates a variant store.
* `UpdateWorkflow` - Updates a workflow.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
