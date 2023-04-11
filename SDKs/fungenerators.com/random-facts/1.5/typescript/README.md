# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/fungenerators.com/random-facts/1.5/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/fungenerators.com/random-facts/1.5/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetFactFodRequest,
  GetFactFodResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFactFodRequest = {
  category: "corrupti",
};

sdk.factOfTheDay.getFactFod(req).then((res: GetFactFodResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### factOfTheDay

* `getFactFod` - Get fact of the day for the given category.
* `getFactFodCategories` - Get the list of supported fact of the day categories.

### numberFacts

* `getFactNumbers` - Get a random fact about a number

### onThisDay

* `getFactOnthisdayBorn` - Returns a random ( famous/ relatively famous ) person born on a given day and month
* `getFactOnthisdayDied` - Returns a random ( famous/ relatively famous ) person died on a given day and month
* `getFactOnthisdayEvent` - Returns a random ( famous/ relatively famous ) historic event on a given day and month

### privateFacts

* `deleteFact` - Delete a Fact entry identified by the id.
* `getFact` - Get a Fact belonging to the id.
* `putFact` - Add a Fact entry to the database (private collection).

### randomFacts

* `getFact` - Get a Fact belonging to the id.
* `getFactCategories` - Get a random Fact.
* `getFactRandom` - Get a random Fact for a given category(optional) and subcategory(optional).
* `getFactSearch` - Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

