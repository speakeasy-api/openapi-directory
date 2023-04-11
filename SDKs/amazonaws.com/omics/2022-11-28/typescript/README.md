# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/omics/2022-11-28/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/omics/2022-11-28/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BatchDeleteReadSetRequest,
  BatchDeleteReadSetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchDeleteReadSetRequest = {
  requestBody: {
    ids: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  sequenceStoreId: "suscipit",
};

sdk.batchDeleteReadSet(req).then((res: BatchDeleteReadSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchDeleteReadSet` - Deletes one or more read sets.
* `cancelAnnotationImportJob` - Cancels an annotation import job.
* `cancelRun` - Cancels a run.
* `cancelVariantImportJob` - Cancels a variant import job.
* `createAnnotationStore` - Creates an annotation store.
* `createReferenceStore` - Creates a reference store.
* `createRunGroup` - Creates a run group.
* `createSequenceStore` - Creates a sequence store.
* `createVariantStore` - Creates a variant store.
* `createWorkflow` - Creates a workflow.
* `deleteAnnotationStore` - Deletes an annotation store.
* `deleteReference` - Deletes a genome reference.
* `deleteReferenceStore` - Deletes a genome reference store.
* `deleteRun` - Deletes a workflow run.
* `deleteRunGroup` - Deletes a workflow run group.
* `deleteSequenceStore` - Deletes a sequence store.
* `deleteVariantStore` - Deletes a variant store.
* `deleteWorkflow` - Deletes a workflow.
* `getAnnotationImportJob` - Gets information about an annotation import job.
* `getAnnotationStore` - Gets information about an annotation store.
* `getReadSet` - Gets a file from a read set.
* `getReadSetActivationJob` - Gets information about a read set activation job.
* `getReadSetExportJob` - Gets information about a read set export job.
* `getReadSetImportJob` - Gets information about a read set import job.
* `getReadSetMetadata` - Gets details about a read set.
* `getReference` - Gets a reference file.
* `getReferenceImportJob` - Gets information about a reference import job.
* `getReferenceMetadata` - Gets information about a genome reference's metadata.
* `getReferenceStore` - Gets information about a reference store.
* `getRun` - Gets information about a workflow run.
* `getRunGroup` - Gets information about a workflow run group.
* `getRunTask` - Gets information about a workflow run task.
* `getSequenceStore` - Gets information about a sequence store.
* `getVariantImportJob` - Gets information about a variant import job.
* `getVariantStore` - Gets information about a variant store.
* `getWorkflow` - Gets information about a workflow.
* `listAnnotationImportJobs` - Retrieves a list of annotation import jobs.
* `listAnnotationStores` - Retrieves a list of annotation stores.
* `listReadSetActivationJobs` - Retrieves a list of read set activation jobs.
* `listReadSetExportJobs` - Retrieves a list of read set export jobs.
* `listReadSetImportJobs` - Retrieves a list of read set import jobs.
* `listReadSets` - Retrieves a list of read sets.
* `listReferenceImportJobs` - Retrieves a list of reference import jobs.
* `listReferenceStores` - Retrieves a list of reference stores.
* `listReferences` - Retrieves a list of references.
* `listRunGroups` - Retrieves a list of run groups.
* `listRunTasks` - Retrieves a list of tasks for a run.
* `listRuns` - Retrieves a list of runs.
* `listSequenceStores` - Retrieves a list of sequence stores.
* `listTagsForResource` - Retrieves a list of tags for a resource.
* `listVariantImportJobs` - Retrieves a list of variant import jobs.
* `listVariantStores` - Retrieves a list of variant stores.
* `listWorkflows` - Retrieves a list of workflows.
* `startAnnotationImportJob` - Starts an annotation import job.
* `startReadSetActivationJob` - Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
* `startReadSetExportJob` - Exports a read set to Amazon S3.
* `startReadSetImportJob` - Starts a read set import job.
* `startReferenceImportJob` - Starts a reference import job.
* `startRun` - Starts a run.
* `startVariantImportJob` - Starts a variant import job.
* `tagResource` - Tags a resource.
* `untagResource` - Removes tags from a resource.
* `updateAnnotationStore` - Updates an annotation store.
* `updateRunGroup` - Updates a run group.
* `updateVariantStore` - Updates a variant store.
* `updateWorkflow` - Updates a workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

