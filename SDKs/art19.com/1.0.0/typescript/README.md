# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/art19.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/art19.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetClassificationsRequest,
  GetClassificationsResponse,
  GetClassificationsSortEnum,
  GetClassificationsTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetClassificationsRequest = {
  ids: [
    "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    "b7392059-2939-46fe-a759-6eb10faaa235",
  ],
  isCountry: "explicabo",
  pageNumber: 750686,
  pageSize: 315428,
  q: "omnis",
  sort: [
    GetClassificationsSortEnum.CreatedAt,
    GetClassificationsSortEnum.UpdatedAt,
  ],
  type: GetClassificationsTypeEnum.AlternateFeedType,
};

sdk.classification.getClassifications(req).then((res: GetClassificationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### classification

* `getClassifications` - Get a list of classifications
* `getClassificationsId` - Get a specific classification

### classificationInclusion

* `getClassificationInclusions` - Get ClassificationInclusion records
* `getClassificationInclusionsId` - Get a specific classification inclusion

### credit

* `getCredits` - Get a list of credits
* `getCreditsId` - Get a specific credit

### episode

* `getEpisodes` - Get a list of episodes
* `getEpisodesId` - Get a specific episode
* `getEpisodesIdNextSibling` - Get the episode released right after the specified one
* `getEpisodesIdPreviousSibling` - Get the episode released right before the specified one

### image

* `getImages` - Get a list of images
* `getImagesId` - Get a specific image

### mediaAsset

* `getMediaAssets` - Get a list of media assets
* `getMediaAssetsId` - Get a specific media asset

### network

* `getNetworks` - Get a list of networks
* `getNetworksId` - Get a specific network

### person

* `getPeople` - Get a list of people
* `getPeopleId` - Get a specific person

### season

* `getSeasons` - Get a list of seasons
* `getSeasonsId` - Get a specific season

### series

* `getSeries` - Get a list of series
* `getSeriesId` - Get a specific series
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

