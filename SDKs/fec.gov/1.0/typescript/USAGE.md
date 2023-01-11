<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAuditCaseRequest, GetAuditCaseResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyHeaderAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    apiKeyQueryAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAuditCaseRequest = {
  queryParams: {
    apiKey: "sit",
    auditCaseId: [
      "culpa",
    ],
    auditId: [
      3390393562759376202,
      2669985732393126063,
    ],
    candidateId: [
      "voluptas",
      "fugit",
    ],
    committeeDesignation: "et",
    committeeId: [
      "rerum",
    ],
    committeeType: [
      "debitis",
      "voluptatum",
      "et",
    ],
    cycle: [
      161231572858529631,
      7259475919510918339,
      7373105480197164748,
    ],
    maxElectionCycle: 3287288577352441706,
    minElectionCycle: 3930927879439176946,
    page: 4706154865122290029,
    perPage: 2217592893536642650,
    primaryCategoryId: "illum",
    q: [
      "vel",
    ],
    qq: [
      "dolore",
    ],
    sort: [
      "aspernatur",
      "accusantium",
    ],
    sortHideNull: false,
    sortNullOnly: false,
    sortNullsLast: true,
    subCategoryId: "est",
  },
};

sdk.audit.getAuditCase(req).then((res: GetAuditCaseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->