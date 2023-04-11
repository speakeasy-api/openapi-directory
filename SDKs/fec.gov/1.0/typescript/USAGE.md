<!-- Start SDK Example Usage -->
```typescript
import {
  GetAuditCaseRequest,
  GetAuditCaseResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyHeaderAuth: "YOUR_API_KEY_HERE",
    apiKeyQueryAuth: "YOUR_API_KEY_HERE",
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetAuditCaseRequest = {
  apiKey: "corrupti",
  auditCaseId: [
    "distinctio",
    "quibusdam",
    "unde",
  ],
  auditId: [
    544883,
    847252,
    423655,
    623564,
  ],
  candidateId: [
    "suscipit",
    "iure",
    "magnam",
  ],
  committeeDesignation: "debitis",
  committeeId: [
    "delectus",
  ],
  committeeType: [
    "suscipit",
    "molestiae",
  ],
  cycle: [
    812169,
    528895,
    479977,
    568045,
  ],
  maxElectionCycle: 392785,
  minElectionCycle: 925597,
  page: 836079,
  perPage: 71036,
  primaryCategoryId: "quis",
  q: [
    "deserunt",
  ],
  qq: [
    "ipsam",
  ],
  sort: [
    "sapiente",
    "quo",
    "odit",
    "at",
  ],
  sortHideNull: false,
  sortNullOnly: false,
  sortNullsLast: false,
  subCategoryId: "at",
};

sdk.audit.getAuditCase(req).then((res: GetAuditCaseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->