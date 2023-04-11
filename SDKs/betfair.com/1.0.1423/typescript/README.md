# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/betfair.com/1.0.1423/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/betfair.com/1.0.1423/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AllRequestTypesExample,
  PostRequestResponse
} from "openapi/dist/sdk/models/operations";
import {
  AllRequestTypesExampleOpTypesEnum,
  MarketFilterBettingTypesEnum,
  MarketDataFilterFieldsEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.AllRequestTypesExample = {
  authentication: {
    appKey: "corrupti",
    id: 592845,
    op: "distinctio",
    session: "quibusdam",
  },
  heartbeat: {
    id: 602763,
    op: "nulla",
  },
  marketSubscription: {
    clk: "corrupti",
    conflateMs: 847252,
    heartbeatMs: 423655,
    id: 623564,
    initialClk: "deserunt",
    marketDataFilter: {
      fields: [
        MarketDataFilterFieldsEnum.ExTraded,
        MarketDataFilterFieldsEnum.ExAllOffers,
      ],
      ladderLevels: 891773,
    },
    marketFilter: {
      bettingTypes: [
        MarketFilterBettingTypesEnum.AsianHandicapSingleLine,
      ],
      bspMarket: false,
      countryCodes: [
        "suscipit",
        "molestiae",
      ],
      eventIds: [
        "placeat",
        "voluptatum",
        "iusto",
        "excepturi",
      ],
      eventTypeIds: [
        "recusandae",
        "temporibus",
      ],
      marketIds: [
        "quis",
      ],
      marketTypes: [
        "deserunt",
      ],
      raceTypes: [
        "ipsam",
      ],
      turnInPlayEnabled: false,
      venues: [
        "sapiente",
        "quo",
        "odit",
        "at",
      ],
    },
    op: "at",
    segmentationEnabled: false,
  },
  opTypes: AllRequestTypesExampleOpTypesEnum.OrderSubscription,
  orderSubscriptionMessage: {
    clk: "molestiae",
    conflateMs: 799159,
    heartbeatMs: 800911,
    id: 461479,
    initialClk: "totam",
    op: "porro",
    orderFilter: {
      accountIds: [
        118274,
        720633,
        639921,
      ],
      customerStrategyRefs: [
        "fugit",
        "deleniti",
        "hic",
      ],
      includeOverallPosition: false,
      partitionMatchedByStrategyRef: false,
    },
    segmentationEnabled: false,
  },
};

sdk.postRequest(req).then((res: PostRequestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `postRequest` - This is a socket protocol delimited by CRLF (not http)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

