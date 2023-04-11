# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cloudtrail-data/2021-08-11/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cloudtrail-data/2021-08-11/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PutAuditEventsRequest,
  PutAuditEventsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: PutAuditEventsRequest = {
  requestBody: {
    auditEvents: [
      {
        eventData: "provident",
        eventDataChecksum: "distinctio",
        id: "quibusdam",
      },
      {
        eventData: "unde",
        eventDataChecksum: "nulla",
        id: "corrupti",
      },
      {
        eventData: "illum",
        eventDataChecksum: "vel",
        id: "error",
      },
    ],
  },
  xAmzAlgorithm: "deserunt",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "iure",
  xAmzDate: "magnam",
  xAmzSecurityToken: "debitis",
  xAmzSignature: "ipsa",
  xAmzSignedHeaders: "delectus",
  channelArn: "tempora",
  externalId: "suscipit",
};

sdk.putAuditEvents(req).then((res: PutAuditEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `putAuditEvents` - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

