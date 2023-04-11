# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/digitalnz.org/3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/digitalnz.org/3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apiCalls

* `getRecordsFormat` - Run queries against DigitalNZ metadata search service.
* `getRecordsRecordIdFormat` - View metadata associated with a single record.
* `getRecordsRecordIdMoreLikeThisFormat` - The "More Like This" call returns similar records to the specified ID.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

