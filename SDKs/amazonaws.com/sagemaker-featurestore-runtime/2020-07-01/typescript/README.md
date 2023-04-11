# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-featurestore-runtime/2020-07-01/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-featurestore-runtime/2020-07-01/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetRecordRequest,
  BatchGetRecordResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetRecordRequest = {
  requestBody: {
    identifiers: [
      {
        featureGroupName: "provident",
        featureNames: [
          "quibusdam",
          "unde",
          "nulla",
        ],
        recordIdentifiersValueAsString: [
          "illum",
          "vel",
          "error",
        ],
      },
      {
        featureGroupName: "deserunt",
        featureNames: [
          "iure",
          "magnam",
        ],
        recordIdentifiersValueAsString: [
          "ipsa",
          "delectus",
          "tempora",
          "suscipit",
        ],
      },
      {
        featureGroupName: "molestiae",
        featureNames: [
          "placeat",
          "voluptatum",
          "iusto",
          "excepturi",
        ],
        recordIdentifiersValueAsString: [
          "recusandae",
          "temporibus",
        ],
      },
    ],
  },
  xAmzAlgorithm: "ab",
  xAmzContentSha256: "quis",
  xAmzCredential: "veritatis",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "perferendis",
  xAmzSignature: "ipsam",
  xAmzSignedHeaders: "repellendus",
};

sdk.batchGetRecord(req).then((res: BatchGetRecordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchGetRecord` - Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
* `deleteRecord` - Deletes a <code>Record</code> from a <code>FeatureGroup</code>. When the <code>DeleteRecord</code> API is called a new record will be added to the <code>OfflineStore</code> and the <code>Record</code> will be removed from the <code>OnlineStore</code>. This record will have a value of <code>True</code> in the <code>is_deleted</code> column.
* `getRecord` - Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. 
* `putRecord` - Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

