<!-- Start SDK Example Usage -->
```typescript
import {
  GetRecordsFormatRequest,
  GetRecordsFormatResponse,
  GetRecordsFormatAndCategoryEnum,
  GetRecordsFormatAndHasLargeThumbnailUrlEnum,
  GetRecordsFormatAndHasLatLngEnum,
  GetRecordsFormatAndUsageEnum,
  GetRecordsFormatDirectionEnum,
  GetRecordsFormatFacetsEnum,
  GetRecordsFormatSortEnum,
} from "openapi/dist/sdk/models/operations";
import {
  FormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetRecordsFormatRequest = {
  authenticationToken: "corrupti",
  andCategory: GetRecordsFormatAndCategoryEnum.ResearchPapers,
  andCentury: "distinctio",
  andCollection: "quibusdam",
  andContentPartner: "unde",
  andCreator: "nulla",
  andDate: "corrupti",
  andDcType: "illum",
  andDecade: "vel",
  andFormat: "error",
  andHasLargeThumbnailUrl: GetRecordsFormatAndHasLargeThumbnailUrlEnum.Y,
  andHasLatLng: GetRecordsFormatAndHasLatLngEnum.False,
  andIsCommercialUse: false,
  andOrFilterField: "suscipit",
  andPlacename: "iure",
  andPrimaryCollection: "magnam",
  andSubject: "debitis",
  andTitle: "ipsa",
  andUsage: GetRecordsFormatAndUsageEnum.Unknown,
  andYear: "tempora",
  direction: GetRecordsFormatDirectionEnum.Asc,
  excludeFiltersFromFacets: false,
  facets: [
    GetRecordsFormatFacetsEnum.Copyright,
    GetRecordsFormatFacetsEnum.Copyright,
  ],
  facetsPage: 528895,
  facetsPerPage: 479977,
  fields: "excepturi",
  format: FormatEnum.Json,
  geoBbox: "recusandae",
  page: 836079,
  perPage: 71036,
  sort: GetRecordsFormatSortEnum.SyndicationDate,
  text: "veritatis",
  withoutFilterField: "deserunt",
};

sdk.apiCalls.getRecordsFormat(req).then((res: GetRecordsFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->