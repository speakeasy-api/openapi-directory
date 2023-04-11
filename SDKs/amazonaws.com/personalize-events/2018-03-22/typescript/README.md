# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/personalize-events/2018-03-22/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/personalize-events/2018-03-22/typescript
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
    eventList: [
      {
        eventId: "provident",
        eventType: "distinctio",
        eventValue: 8442.66,
        impression: [
          "nulla",
          "corrupti",
          "illum",
        ],
        itemId: "vel",
        metricAttribution: {
          eventAttributionSource: "error",
        },
        properties: "deserunt",
        recommendationId: "suscipit",
        sentAt: "2022-09-14T09:35:47.986Z",
      },
      {
        eventId: "debitis",
        eventType: "ipsa",
        eventValue: 9636.63,
        impression: [
          "suscipit",
          "molestiae",
        ],
        itemId: "minus",
        metricAttribution: {
          eventAttributionSource: "placeat",
        },
        properties: "voluptatum",
        recommendationId: "iusto",
        sentAt: "2022-03-20T06:24:36.919Z",
      },
      {
        eventId: "recusandae",
        eventType: "temporibus",
        eventValue: 710.36,
        impression: [
          "veritatis",
          "deserunt",
        ],
        itemId: "perferendis",
        metricAttribution: {
          eventAttributionSource: "ipsam",
        },
        properties: "repellendus",
        recommendationId: "sapiente",
        sentAt: "2022-07-31T07:34:52.790Z",
      },
    ],
    sessionId: "at",
    trackingId: "at",
    userId: "maiores",
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "quod",
  xAmzCredential: "quod",
  xAmzDate: "esse",
  xAmzSecurityToken: "totam",
  xAmzSignature: "porro",
  xAmzSignedHeaders: "dolorum",
};

sdk.putEvents(req).then((res: PutEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `putEvents` - Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
* `putItems` - Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
* `putUsers` - Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

