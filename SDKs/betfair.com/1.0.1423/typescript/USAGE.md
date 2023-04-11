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