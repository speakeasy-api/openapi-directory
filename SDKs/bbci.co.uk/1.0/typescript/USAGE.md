<!-- Start SDK Example Usage -->
```typescript
import {
  GetProgrammesAtoZSearchRequest,
  GetProgrammesAtoZSearchResponse,
  GetProgrammesAtoZSearchSortEnum,
} from "openapi/dist/sdk/models/operations";
import {
  SortDirectionEnum,
  RightsEnum,
  AvailabilityEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetProgrammesAtoZSearchRequest = {
  availability: AvailabilityEnum.Available,
  initialChildCount: 592845,
  letter: "distinctio",
  page: 844266,
  perPage: 602763,
  rights: RightsEnum.Web,
  sort: GetProgrammesAtoZSearchSortEnum.Title,
  sortDirection: SortDirectionEnum.Desc,
};

sdk.aToZ.getProgrammesAtoZSearch(req).then((res: GetProgrammesAtoZSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->