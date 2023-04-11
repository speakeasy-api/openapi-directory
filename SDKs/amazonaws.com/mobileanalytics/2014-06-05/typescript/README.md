# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mobileanalytics/2014-06-05/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mobileanalytics/2014-06-05/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PutEventsRequest,
  PutEventsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: PutEventsRequest = {
  requestBody: {
    events: [
      {
        attributes: {
          "distinctio": "quibusdam",
          "unde": "nulla",
          "corrupti": "illum",
        },
        eventType: "vel",
        metrics: {
          "deserunt": 3843.82,
          "iure": 2975.34,
          "debitis": 567.13,
        },
        session: {
          duration: 963663,
          id: "tempora",
          startTimestamp: "suscipit",
          stopTimestamp: "molestiae",
        },
        timestamp: "minus",
        version: "placeat",
      },
      {
        attributes: {
          "iusto": "excepturi",
          "nisi": "recusandae",
          "temporibus": "ab",
        },
        eventType: "quis",
        metrics: {
          "deserunt": 202.18,
        },
        session: {
          duration: 368241,
          id: "repellendus",
          startTimestamp: "sapiente",
          stopTimestamp: "quo",
        },
        timestamp: "odit",
        version: "at",
      },
      {
        attributes: {
          "maiores": "molestiae",
          "quod": "quod",
          "esse": "totam",
          "porro": "dolorum",
        },
        eventType: "dicta",
        metrics: {
          "officia": 5820.2,
          "fugit": 5373.73,
          "hic": 7586.16,
        },
        session: {
          duration: 521848,
          id: "beatae",
          startTimestamp: "commodi",
          stopTimestamp: "molestiae",
        },
        timestamp: "modi",
        version: "qui",
      },
    ],
  },
  xAmzAlgorithm: "impedit",
  xAmzContentSha256: "cum",
  xAmzCredential: "esse",
  xAmzDate: "ipsum",
  xAmzSecurityToken: "excepturi",
  xAmzSignature: "aspernatur",
  xAmzSignedHeaders: "perferendis",
  xAmzClientContext: "ad",
  xAmzClientContextEncoding: "natus",
};

sdk.putEvents(req).then((res: PutEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `putEvents` - The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

