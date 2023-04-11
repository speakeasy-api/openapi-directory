# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/importexport/2010-06-01/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/importexport/2010-06-01/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GETCancelJobRequest,
  GETCancelJobResponse,
  GETCancelJobActionEnum,
  GETCancelJobOperationEnum,
  GETCancelJobVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETCancelJobRequest = {
  apiVersion: "corrupti",
  awsAccessKeyId: "provident",
  action: GETCancelJobActionEnum.CancelJob,
  jobId: "distinctio",
  operation: GETCancelJobOperationEnum.CancelJob,
  signature: "quibusdam",
  signatureMethod: "unde",
  signatureVersion: "nulla",
  timestamp: "corrupti",
  version: GETCancelJobVersionEnum.TwoThousandAndTen0601,
};

sdk.getCancelJob(req).then((res: GETCancelJobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getCancelJob` - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* `getCreateJob` - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* `getGETShippingLabel` - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* `getGETStatus` - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* `getListJobs` - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* `getUpdateJob` - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
* `postCancelJob` - This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
* `postCreateJob` - This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
* `postGetShippingLabel` - This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
* `postGetStatus` - This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
* `postListJobs` - This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
* `postUpdateJob` - You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

