<!-- Start SDK Example Usage -->
```typescript
import {
  CampaignAnalyticsRequest,
  CampaignAnalyticsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CampaignAnalyticsRequest = {
  campaignId: "{{campaign_identifier}}",
  endingAt: "2020-06-28T23:59:59-5:00",
  length: "7",
};

sdk.campaign.campaignAnalytics(req).then((res: CampaignAnalyticsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->