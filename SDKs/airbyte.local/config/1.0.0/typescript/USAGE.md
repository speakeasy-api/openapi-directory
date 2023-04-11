<!-- Start SDK Example Usage -->
```typescript
import {
  shared.SaveStatsRequestBody,
  SaveStatsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.SaveStatsRequestBody = {
  attemptNumber: 548814,
  jobId: 592845,
  stats: {
    bytesEmitted: 715190,
    estimatedBytes: 844266,
    estimatedRecords: 602763,
    recordsCommitted: 857946,
    recordsEmitted: 544883,
    stateMessagesEmitted: 847252,
  },
  streamStats: [
    {
      stats: {
        bytesEmitted: 623564,
        estimatedBytes: 645894,
        estimatedRecords: 384382,
        recordsCommitted: 437587,
        recordsEmitted: 297534,
        stateMessagesEmitted: 891773,
      },
      streamName: "ipsa",
      streamNamespace: "delectus",
    },
    {
      stats: {
        bytesEmitted: 272656,
        estimatedBytes: 383441,
        estimatedRecords: 477665,
        recordsCommitted: 791725,
        recordsEmitted: 812169,
        stateMessagesEmitted: 528895,
      },
      streamName: "iusto",
      streamNamespace: "excepturi",
    },
  ],
};

sdk.attempt.saveStats(req).then((res: SaveStatsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->