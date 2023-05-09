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
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequest;
import org.openapis.openapi.models.operations.BatchDeleteReadSetRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteReadSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteReadSetRequest req = new BatchDeleteReadSetRequest(                new BatchDeleteReadSetRequestBody(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }});, "nulla") {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            BatchDeleteReadSetResponse res = sdk.batchDeleteReadSet(req);

            if (res.batchDeleteReadSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchDeleteReadSet](docs/sdk/README.md#batchdeletereadset) - Deletes one or more read sets.
* [cancelAnnotationImportJob](docs/sdk/README.md#cancelannotationimportjob) - Cancels an annotation import job.
* [cancelRun](docs/sdk/README.md#cancelrun) - Cancels a run.
* [cancelVariantImportJob](docs/sdk/README.md#cancelvariantimportjob) - Cancels a variant import job.
* [createAnnotationStore](docs/sdk/README.md#createannotationstore) - Creates an annotation store.
* [createReferenceStore](docs/sdk/README.md#createreferencestore) - Creates a reference store.
* [createRunGroup](docs/sdk/README.md#createrungroup) - Creates a run group.
* [createSequenceStore](docs/sdk/README.md#createsequencestore) - Creates a sequence store.
* [createVariantStore](docs/sdk/README.md#createvariantstore) - Creates a variant store.
* [createWorkflow](docs/sdk/README.md#createworkflow) - Creates a workflow.
* [deleteAnnotationStore](docs/sdk/README.md#deleteannotationstore) - Deletes an annotation store.
* [deleteReference](docs/sdk/README.md#deletereference) - Deletes a genome reference.
* [deleteReferenceStore](docs/sdk/README.md#deletereferencestore) - Deletes a genome reference store.
* [deleteRun](docs/sdk/README.md#deleterun) - Deletes a workflow run.
* [deleteRunGroup](docs/sdk/README.md#deleterungroup) - Deletes a workflow run group.
* [deleteSequenceStore](docs/sdk/README.md#deletesequencestore) - Deletes a sequence store.
* [deleteVariantStore](docs/sdk/README.md#deletevariantstore) - Deletes a variant store.
* [deleteWorkflow](docs/sdk/README.md#deleteworkflow) - Deletes a workflow.
* [getAnnotationImportJob](docs/sdk/README.md#getannotationimportjob) - Gets information about an annotation import job.
* [getAnnotationStore](docs/sdk/README.md#getannotationstore) - Gets information about an annotation store.
* [getReadSet](docs/sdk/README.md#getreadset) - Gets a file from a read set.
* [getReadSetActivationJob](docs/sdk/README.md#getreadsetactivationjob) - Gets information about a read set activation job.
* [getReadSetExportJob](docs/sdk/README.md#getreadsetexportjob) - Gets information about a read set export job.
* [getReadSetImportJob](docs/sdk/README.md#getreadsetimportjob) - Gets information about a read set import job.
* [getReadSetMetadata](docs/sdk/README.md#getreadsetmetadata) - Gets details about a read set.
* [getReference](docs/sdk/README.md#getreference) - Gets a reference file.
* [getReferenceImportJob](docs/sdk/README.md#getreferenceimportjob) - Gets information about a reference import job.
* [getReferenceMetadata](docs/sdk/README.md#getreferencemetadata) - Gets information about a genome reference's metadata.
* [getReferenceStore](docs/sdk/README.md#getreferencestore) - Gets information about a reference store.
* [getRun](docs/sdk/README.md#getrun) - Gets information about a workflow run.
* [getRunGroup](docs/sdk/README.md#getrungroup) - Gets information about a workflow run group.
* [getRunTask](docs/sdk/README.md#getruntask) - Gets information about a workflow run task.
* [getSequenceStore](docs/sdk/README.md#getsequencestore) - Gets information about a sequence store.
* [getVariantImportJob](docs/sdk/README.md#getvariantimportjob) - Gets information about a variant import job.
* [getVariantStore](docs/sdk/README.md#getvariantstore) - Gets information about a variant store.
* [getWorkflow](docs/sdk/README.md#getworkflow) - Gets information about a workflow.
* [listAnnotationImportJobs](docs/sdk/README.md#listannotationimportjobs) - Retrieves a list of annotation import jobs.
* [listAnnotationStores](docs/sdk/README.md#listannotationstores) - Retrieves a list of annotation stores.
* [listReadSetActivationJobs](docs/sdk/README.md#listreadsetactivationjobs) - Retrieves a list of read set activation jobs.
* [listReadSetExportJobs](docs/sdk/README.md#listreadsetexportjobs) - Retrieves a list of read set export jobs.
* [listReadSetImportJobs](docs/sdk/README.md#listreadsetimportjobs) - Retrieves a list of read set import jobs.
* [listReadSets](docs/sdk/README.md#listreadsets) - Retrieves a list of read sets.
* [listReferenceImportJobs](docs/sdk/README.md#listreferenceimportjobs) - Retrieves a list of reference import jobs.
* [listReferenceStores](docs/sdk/README.md#listreferencestores) - Retrieves a list of reference stores.
* [listReferences](docs/sdk/README.md#listreferences) - Retrieves a list of references.
* [listRunGroups](docs/sdk/README.md#listrungroups) - Retrieves a list of run groups.
* [listRunTasks](docs/sdk/README.md#listruntasks) - Retrieves a list of tasks for a run.
* [listRuns](docs/sdk/README.md#listruns) - Retrieves a list of runs.
* [listSequenceStores](docs/sdk/README.md#listsequencestores) - Retrieves a list of sequence stores.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves a list of tags for a resource.
* [listVariantImportJobs](docs/sdk/README.md#listvariantimportjobs) - Retrieves a list of variant import jobs.
* [listVariantStores](docs/sdk/README.md#listvariantstores) - Retrieves a list of variant stores.
* [listWorkflows](docs/sdk/README.md#listworkflows) - Retrieves a list of workflows.
* [startAnnotationImportJob](docs/sdk/README.md#startannotationimportjob) - Starts an annotation import job.
* [startReadSetActivationJob](docs/sdk/README.md#startreadsetactivationjob) - Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
* [startReadSetExportJob](docs/sdk/README.md#startreadsetexportjob) - Exports a read set to Amazon S3.
* [startReadSetImportJob](docs/sdk/README.md#startreadsetimportjob) - Starts a read set import job.
* [startReferenceImportJob](docs/sdk/README.md#startreferenceimportjob) - Starts a reference import job.
* [startRun](docs/sdk/README.md#startrun) - Starts a run.
* [startVariantImportJob](docs/sdk/README.md#startvariantimportjob) - Starts a variant import job.
* [tagResource](docs/sdk/README.md#tagresource) - Tags a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from a resource.
* [updateAnnotationStore](docs/sdk/README.md#updateannotationstore) - Updates an annotation store.
* [updateRunGroup](docs/sdk/README.md#updaterungroup) - Updates a run group.
* [updateVariantStore](docs/sdk/README.md#updatevariantstore) - Updates a variant store.
* [updateWorkflow](docs/sdk/README.md#updateworkflow) - Updates a workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
