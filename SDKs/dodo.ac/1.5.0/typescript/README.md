# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/dodo.ac/1.5.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/dodo.ac/1.5.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetNhArtRequest,
  GetNhArtResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetNhArtRequest = {
  acceptVersion: "corrupti",
  xApiKey: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
  excludedetails: "perferendis",
  hasfake: "ipsam",
  thumbsize: 832620,
};

sdk.getNhArt(req).then((res: GetNhArtResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getNhArt` - All New Horizons artwork
* `getNhArtArtwork` - Single New Horizons artwork
* `getNhBugs` - All New Horizons bugs
* `getNhBugsBug` - Single New Horizons bug
* `getNhClothing` - All New Horizons clothing
* `getNhClothingClothing` - Single New Horizons clothing
* `getNhEvents` - All New Horizons events
* `getNhFish` - All New Horizons fish
* `getNhFishFish` - Single New Horizons fish
* `getNhFossilsAll` - All New Horizons fossil groups or individual fossil
* `getNhFossilsAllFossil` - Single New Horizons fossil group with individual fossils
* `getNhFossilsGroups` - All New Horizons fossil groups
* `getNhFossilsGroupsFossilGroup` - Single New Horizons fossil group
* `getNhFossilsIndividuals` - All New Horizons fossils
* `getNhFossilsIndividualsFossil` - Single New Horizons fossil
* `getNhFurniture` - All New Horizons furniture
* `getNhFurnitureFurniture` - Single New Horizons furniture
* `getNhInterior` - All New Horizons interior items
* `getNhInteriorItem` - Single New Horizons interior item
* `getNhItems` - Miscellaneous New Horizons items
* `getNhItemsItem` - Single New Horizons miscellaneous item
* `getNhPhotos` - All New Horizons photos and posters
* `getNhPhotosItem` - Single New Horizons photo or poster
* `getNhRecipes` - All New Horizons recipes
* `getNhRecipesItem` - Single New Horizons recipe
* `getNhSea` - All New Horizons sea creatures
* `getNhSeaSeaCreature` - Single New Horizons sea creature
* `getNhTools` - All New Horizons tools
* `getNhToolsTool` - Single New Horizons tool
* `getVillagers` - Villagers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

