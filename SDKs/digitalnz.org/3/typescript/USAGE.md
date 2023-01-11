<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetRecordsFormatRequest, GetRecordsFormatResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetRecordsFormatRequest = {
  pathParams: {
    format: "json",
  },
  queryParams: {
    andCategory: "Manuscripts",
    andCentury: "culpa",
    andCollection: "expedita",
    andContentPartner: "consequuntur",
    andCreator: "dolor",
    andDate: "expedita",
    andDcType: "voluptas",
    andDecade: "fugit",
    andFormat: "et",
    andHasLargeThumbnailUrl: "Y",
    andHasLatLng: true,
    andIsCommercialUse: false,
    andOrFilterField: "debitis",
    andPlacename: "voluptatum",
    andPrimaryCollection: "et",
    andSubject: "ut",
    andTitle: "dolorem",
    andUsage: "Share",
    andYear: "voluptate",
    apiKey: "iste",
    direction: "asc",
    excludeFiltersFromFacets: true,
    facets: [
      "usage",
    ],
    facetsPage: 6392442863481646880,
    facetsPerPage: 3706853784096366226,
    fields: "odio",
    geoBbox: "dolore",
    page: 4035568504096476779,
    perPage: 959367522974354090,
    sort: "syndication_date",
    text: "totam",
    withoutFilterField: "commodi",
  },
};

sdk.apiCalls.getRecordsFormat(req).then((res: GetRecordsFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->