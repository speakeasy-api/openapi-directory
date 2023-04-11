# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/clickmeter.com/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/clickmeter.com/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AccountDeleteDomainWhitelistRequest,
  AccountDeleteDomainWhitelistResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: AccountDeleteDomainWhitelistRequest = {
  whitelistId: "corrupti",
};

sdk.account.accountDeleteDomainWhitelist(req).then((res: AccountDeleteDomainWhitelistResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account

* `accountDeleteDomainWhitelist` - Delete an domain entry
* `accountDeleteGuest` - Delete a guest
* `accountDeleteIpBlacklist` - Delete an ip blacklist entry
* `accountGet` - Retrieve current account data
* `accountGetDomainWhitelist` - Retrieve list of a domains allowed to redirect in DDU mode
* `accountGetGuest` - Retrieve a guest
* `accountGetGuests` - Retrieve list of a guest
* `accountGetGuestsCount` - Retrieve count of guests
* `accountGetIpBlacklist` - Retrieve list of a ip to exclude from event tracking
* `accountGetPermissions` - Retrieve permissions for a guest
* `accountGetPermissionsCount` - Retrieve count of the permissions for a guest
* `accountGetPlan` - Retrieve current account plan
* `accountPatchPermissionsForm` - Change the permission on a shared object
* `accountPatchPermissionsJson` - Change the permission on a shared object
* `accountPatchPermissionsRaw` - Change the permission on a shared object
* `accountPostGuestForm` - Update a guest
* `accountPostGuestJson` - Update a guest
* `accountPostGuestRaw` - Update a guest
* `accountPostForm` - Update current account data
* `accountPostJson` - Update current account data
* `accountPostRaw` - Update current account data
* `accountPutDomainWhitelistForm` - Create an domain entry
* `accountPutDomainWhitelistJson` - Create an domain entry
* `accountPutDomainWhitelistRaw` - Create an domain entry
* `accountPutGuestForm` - Create a guest
* `accountPutGuestJson` - Create a guest
* `accountPutGuestRaw` - Create a guest
* `accountPutIpBlacklistForm` - Create an ip blacklist entry
* `accountPutIpBlacklistJson` - Create an ip blacklist entry
* `accountPutIpBlacklistRaw` - Create an ip blacklist entry
* `postAccountGuestsGuestIdTypePermissionsPatchForm` - Change the permission on a shared object
* `postAccountGuestsGuestIdTypePermissionsPatchJson` - Change the permission on a shared object
* `postAccountGuestsGuestIdTypePermissionsPatchRaw` - Change the permission on a shared object

### aggregated

* `aggregatedGetConversionsSummary` - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* `aggregatedGetDatapointsSummary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `aggregatedGetGroupsSummary` - Retrieve statistics about a subset of groups for a timeframe with groups data
* `aggregatedGetStatisticsList` - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* `aggregatedGetStatisticsSingle` - Retrieve statistics about this customer for a timeframe

### clickStream

* `clickStreamGet` - Retrieve the latest list of events of this account. Limited to last 100.

### conversions

* `conversionsCount` - Retrieve a count of conversions
* `conversionsDelete` - Delete conversion specified by id
* `conversionsGet` - Retrieve a list of conversions
* `conversionsGetDatapoints` - Retrieve a list of datapoints connected to this conversion
* `conversionsGetDatapointsCount` - Retrieve a count of datapoints connected to this conversion
* `conversionsGetHits` - Retrieve the list of events related to this conversion.
* `conversionsGetStatisticsAllList` - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* `conversionsGetStatisticsList` - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* `conversionsGetStatisticsSingle` - Retrieve statistics about this conversion for a timeframe
* `conversionsPatchNotesForm` - Fast patch the "notes" field of a conversion
* `conversionsPatchNotesJson` - Fast patch the "notes" field of a conversion
* `conversionsPatchNotesRaw` - Fast patch the "notes" field of a conversion
* `conversionsPatchForm` - Modify the association between a conversion and a datapoint
* `conversionsPatchJson` - Modify the association between a conversion and a datapoint
* `conversionsPatchRaw` - Modify the association between a conversion and a datapoint
* `conversionsPostForm` - Update conversion specified by id
* `conversionsPostJson` - Update conversion specified by id
* `conversionsPostRaw` - Update conversion specified by id
* `conversionsPutForm` - Create a conversion
* `conversionsPutJson` - Create a conversion
* `conversionsPutRaw` - Create a conversion
* `getConversionsConversionId` - Retrieve conversion specified by id
* `putConversionsConversionIdDatapointsBatchPatch` - Modify the association between a conversion and multiple datapoints

### dataPoints

* `dataPointsBatchDelete` - Delete multiple datapoints
* `dataPointsBatchPost` - Update multiple datapoints
* `dataPointsBatchPut` - Create multiple datapoints
* `dataPointsCount` - Count the datapoints associated to the user
* `dataPointsDelete` - Delete a datapoint
* `dataPointsGet` - List of all the datapoints associated to the user
* `dataPointsGetHits` - Retrieve the list of events related to this datapoint.
* `dataPointsGetStatisticsAggregatedSingle` - Retrieve statistics about this customer for a timeframe by groups
* `dataPointsGetStatisticsAllList` - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `dataPointsGetStatisticsList` - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* `dataPointsGetStatisticsSingle` - Retrieve statistics about this datapoint for a timeframe
* `dataPointsPatchFavourite` - Fast switch the "favourite" field of a datapoint
* `dataPointsPatchNotesForm` - Fast patch the "notes" field of a datapoint
* `dataPointsPatchNotesJson` - Fast patch the "notes" field of a datapoint
* `dataPointsPatchNotesRaw` - Fast patch the "notes" field of a datapoint
* `dataPointsPost` - Update a datapoint
* `dataPointsPut` - Create a datapoint
* `getDatapointsId` - Get a datapoint

### domains

* `domainsCount` - Retrieve count of domains
* `domainsDelete` - Delete a domain
* `domainsGet` - Retrieve a list of domains
* `domainsPutForm` - Create a domain
* `domainsPutJson` - Create a domain
* `domainsPutRaw` - Create a domain
* `domainsUpdateForm` - Update a domain
* `domainsUpdateJson` - Update a domain
* `domainsUpdateRaw` - Update a domain
* `getDomainsId` - Get a domain

### groups

* `groupsCount` - Count the groups associated to the user.
* `groupsDelete` - Delete group specified by id
* `groupsGet` - List of all the groups associated to the user.
* `groupsGetDatapoints` - List of all the datapoints associated to the user in this group.
* `groupsGetDatapointsCount` - Count the datapoints associated to the user in this group.
* `groupsGetDatapointsSummary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `groupsGetHits` - Retrieve the list of events related to this group.
* `groupsGetStatisticsAggregatedSingle` - Retrieve statistics about this customer for a timeframe by groups
* `groupsGetStatisticsAllList` - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `groupsGetStatisticsList` - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* `groupsGetStatisticsSingle` - Retrieve statistics about this group for a timeframe
* `groupsPatchFavourite` - Fast switch the "favourite" field of a group
* `groupsPatchNotesForm` - Fast patch the "notes" field of a group
* `groupsPatchNotesJson` - Fast patch the "notes" field of a group
* `groupsPatchNotesRaw` - Fast patch the "notes" field of a group
* `groupsPost` - Update a group
* `groupsPut` - Create a group
* `groupsPutDatapoint` - Create a datapoint in this group
* `getGroupsId` - Get a group

### hits

* `hitsGetHits` - Retrieve the list of events related to this account.

### me

* `meGetMe` - Retrieve current account data
* `meGetMePlan` - Retrieve current account plan

### retargeting

* `retargetingCount` - Retrieve count of retargeting scripts
* `retargetingDelete` - Deletes a retargeting script (and remove associations)
* `retargetingGet` - List of all the retargeting scripts associated to the user
* `retargetingGetDatapoints` - List of all the datapoints associated to the retargeting script.
* `retargetingGetDatapointsCount` - Count the datapoints associated to the retargeting script.
* `retargetingPostForm` - Updates a retargeting script
* `retargetingPostJson` - Updates a retargeting script
* `retargetingPostRaw` - Updates a retargeting script
* `retargetingPutForm` - Creates a retargeting script
* `retargetingPutJson` - Creates a retargeting script
* `retargetingPutRaw` - Creates a retargeting script
* `getRetargetingId` - Get a retargeting script object

### tags

* `tagsCount` - List of all the groups associated to the user filtered by this tag.
* `tagsDelete` - Delete a tag
* `tagsDeleteRelatedDatapoints` - Delete the association of this tag with all datapoints
* `tagsDeleteRelatedGroups` - Delete the association of this tag with all groups
* `tagsGet` - List of all the groups associated to the user filtered by this tag.
* `tagsGetDatapoints` - List of all the datapoints associated to the user filtered by this tag
* `tagsGetDatapointsCount` - Count the datapoints associated to the user filtered by this tag
* `tagsGetGroups` - List of all the groups associated to the user filtered by this tag.
* `tagsGetGroupsCount` - Count the groups associated to the user filtered by this tag
* `tagsPatchDataPointForm` - Associate/Deassociate a tag with a datapoint
* `tagsPatchDataPointJson` - Associate/Deassociate a tag with a datapoint
* `tagsPatchDataPointRaw` - Associate/Deassociate a tag with a datapoint
* `tagsPatchGroupForm` - Associate/Deassociate a tag with a group
* `tagsPatchGroupJson` - Associate/Deassociate a tag with a group
* `tagsPatchGroupRaw` - Associate/Deassociate a tag with a group
* `tagsPatchTagNameForm` - Fast patch a tag name
* `tagsPatchTagNameJson` - Fast patch a tag name
* `tagsPatchTagNameRaw` - Fast patch a tag name
* `tagsPut` - Create a tag
* `getTagsTagId` - Retrieve a tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

