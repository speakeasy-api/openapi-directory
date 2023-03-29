# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/clickmeter.com/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AccountDeleteDomainWhitelistRequest{
        PathParams: operations.AccountDeleteDomainWhitelistPathParams{
            WhitelistID: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.Account.AccountDeleteDomainWhitelist(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Account

* `AccountDeleteDomainWhitelist` - Delete an domain entry
* `AccountDeleteGuest` - Delete a guest
* `AccountDeleteIPBlacklist` - Delete an ip blacklist entry
* `AccountGet` - Retrieve current account data
* `AccountGetDomainWhitelist` - Retrieve list of a domains allowed to redirect in DDU mode
* `AccountGetGuest` - Retrieve a guest
* `AccountGetGuests` - Retrieve list of a guest
* `AccountGetGuestsCount` - Retrieve count of guests
* `AccountGetIPBlacklist` - Retrieve list of a ip to exclude from event tracking
* `AccountGetPermissions` - Retrieve permissions for a guest
* `AccountGetPermissionsCount` - Retrieve count of the permissions for a guest
* `AccountGetPlan` - Retrieve current account plan
* `AccountPatchPermissionsForm` - Change the permission on a shared object
* `AccountPatchPermissionsJSON` - Change the permission on a shared object
* `AccountPatchPermissionsRaw` - Change the permission on a shared object
* `AccountPostGuestForm` - Update a guest
* `AccountPostGuestJSON` - Update a guest
* `AccountPostGuestRaw` - Update a guest
* `AccountPostForm` - Update current account data
* `AccountPostJSON` - Update current account data
* `AccountPostRaw` - Update current account data
* `AccountPutDomainWhitelistForm` - Create an domain entry
* `AccountPutDomainWhitelistJSON` - Create an domain entry
* `AccountPutDomainWhitelistRaw` - Create an domain entry
* `AccountPutGuestForm` - Create a guest
* `AccountPutGuestJSON` - Create a guest
* `AccountPutGuestRaw` - Create a guest
* `AccountPutIPBlacklistForm` - Create an ip blacklist entry
* `AccountPutIPBlacklistJSON` - Create an ip blacklist entry
* `AccountPutIPBlacklistRaw` - Create an ip blacklist entry
* `PostAccountGuestsGuestIDTypePermissionsPatchForm` - Change the permission on a shared object
* `PostAccountGuestsGuestIDTypePermissionsPatchJSON` - Change the permission on a shared object
* `PostAccountGuestsGuestIDTypePermissionsPatchRaw` - Change the permission on a shared object

### Aggregated

* `AggregatedGetConversionsSummary` - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* `AggregatedGetDatapointsSummary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `AggregatedGetGroupsSummary` - Retrieve statistics about a subset of groups for a timeframe with groups data
* `AggregatedGetStatisticsList` - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* `AggregatedGetStatisticsSingle` - Retrieve statistics about this customer for a timeframe

### ClickStream

* `ClickStreamGet` - Retrieve the latest list of events of this account. Limited to last 100.

### Conversions

* `ConversionsCount` - Retrieve a count of conversions
* `ConversionsDelete` - Delete conversion specified by id
* `ConversionsGet` - Retrieve a list of conversions
* `ConversionsGetDatapoints` - Retrieve a list of datapoints connected to this conversion
* `ConversionsGetDatapointsCount` - Retrieve a count of datapoints connected to this conversion
* `ConversionsGetHits` - Retrieve the list of events related to this conversion.
* `ConversionsGetStatisticsAllList` - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* `ConversionsGetStatisticsList` - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* `ConversionsGetStatisticsSingle` - Retrieve statistics about this conversion for a timeframe
* `ConversionsGetTops` - Retrieve a top report connected to this conversion
* `ConversionsPatchNotesForm` - Fast patch the "notes" field of a conversion
* `ConversionsPatchNotesJSON` - Fast patch the "notes" field of a conversion
* `ConversionsPatchNotesRaw` - Fast patch the "notes" field of a conversion
* `ConversionsPatchForm` - Modify the association between a conversion and a datapoint
* `ConversionsPatchJSON` - Modify the association between a conversion and a datapoint
* `ConversionsPatchRaw` - Modify the association between a conversion and a datapoint
* `ConversionsPostForm` - Update conversion specified by id
* `ConversionsPostJSON` - Update conversion specified by id
* `ConversionsPostRaw` - Update conversion specified by id
* `ConversionsPutForm` - Create a conversion
* `ConversionsPutJSON` - Create a conversion
* `ConversionsPutRaw` - Create a conversion
* `GetConversionsConversionID` - Retrieve conversion specified by id
* `PutConversionsConversionIDDatapointsBatchPatch` - Modify the association between a conversion and multiple datapoints

### DataPoints

* `DataPointsBatchDelete` - Delete multiple datapoints
* `DataPointsBatchPost` - Update multiple datapoints
* `DataPointsBatchPut` - Create multiple datapoints
* `DataPointsCount` - Count the datapoints associated to the user
* `DataPointsDelete` - Delete a datapoint
* `DataPointsGet` - List of all the datapoints associated to the user
* `DataPointsGetHits` - Retrieve the list of events related to this datapoint.
* `DataPointsGetStatisticsAggregatedSingle` - Retrieve statistics about this customer for a timeframe by groups
* `DataPointsGetStatisticsAllList` - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `DataPointsGetStatisticsList` - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* `DataPointsGetStatisticsSingle` - Retrieve statistics about this datapoint for a timeframe
* `DataPointsGetTops` - Retrieve a top report connected to this datapoint
* `DataPointsPatchFavourite` - Fast switch the "favourite" field of a datapoint
* `DataPointsPatchNotesForm` - Fast patch the "notes" field of a datapoint
* `DataPointsPatchNotesJSON` - Fast patch the "notes" field of a datapoint
* `DataPointsPatchNotesRaw` - Fast patch the "notes" field of a datapoint
* `DataPointsPost` - Update a datapoint
* `DataPointsPut` - Create a datapoint
* `GetDatapointsID` - Get a datapoint

### Domains

* `DomainsCount` - Retrieve count of domains
* `DomainsDelete` - Delete a domain
* `DomainsGet` - Retrieve a list of domains
* `DomainsPutForm` - Create a domain
* `DomainsPutJSON` - Create a domain
* `DomainsPutRaw` - Create a domain
* `DomainsUpdateForm` - Update a domain
* `DomainsUpdateJSON` - Update a domain
* `DomainsUpdateRaw` - Update a domain
* `GetDomainsID` - Get a domain

### Groups

* `GroupsCount` - Count the groups associated to the user.
* `GroupsDelete` - Delete group specified by id
* `GroupsGet` - List of all the groups associated to the user.
* `GroupsGetDatapoints` - List of all the datapoints associated to the user in this group.
* `GroupsGetDatapointsCount` - Count the datapoints associated to the user in this group.
* `GroupsGetDatapointsSummary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `GroupsGetHits` - Retrieve the list of events related to this group.
* `GroupsGetStatisticsAggregatedSingle` - Retrieve statistics about this customer for a timeframe by groups
* `GroupsGetStatisticsAllList` - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `GroupsGetStatisticsList` - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* `GroupsGetStatisticsSingle` - Retrieve statistics about this group for a timeframe
* `GroupsGetTops` - Retrieve a top report connected to this group
* `GroupsPatchFavourite` - Fast switch the "favourite" field of a group
* `GroupsPatchNotesForm` - Fast patch the "notes" field of a group
* `GroupsPatchNotesJSON` - Fast patch the "notes" field of a group
* `GroupsPatchNotesRaw` - Fast patch the "notes" field of a group
* `GroupsPost` - Update a group
* `GroupsPut` - Create a group
* `GroupsPutDatapoint` - Create a datapoint in this group
* `GetGroupsID` - Get a group

### Hits

* `HitsGetHits` - Retrieve the list of events related to this account.

### Me

* `MeGetMe` - Retrieve current account data
* `MeGetMePlan` - Retrieve current account plan

### Reports

* `ReportsGet` - Retrieve a top report

### Retargeting

* `RetargetingCount` - Retrieve count of retargeting scripts
* `RetargetingDelete` - Deletes a retargeting script (and remove associations)
* `RetargetingGet` - List of all the retargeting scripts associated to the user
* `RetargetingGetDatapoints` - List of all the datapoints associated to the retargeting script.
* `RetargetingGetDatapointsCount` - Count the datapoints associated to the retargeting script.
* `RetargetingPostForm` - Updates a retargeting script
* `RetargetingPostJSON` - Updates a retargeting script
* `RetargetingPostRaw` - Updates a retargeting script
* `RetargetingPutForm` - Creates a retargeting script
* `RetargetingPutJSON` - Creates a retargeting script
* `RetargetingPutRaw` - Creates a retargeting script
* `GetRetargetingID` - Get a retargeting script object

### Tags

* `TagsCount` - List of all the groups associated to the user filtered by this tag.
* `TagsDelete` - Delete a tag
* `TagsDeleteRelatedDatapoints` - Delete the association of this tag with all datapoints
* `TagsDeleteRelatedGroups` - Delete the association of this tag with all groups
* `TagsGet` - List of all the groups associated to the user filtered by this tag.
* `TagsGetDatapoints` - List of all the datapoints associated to the user filtered by this tag
* `TagsGetDatapointsCount` - Count the datapoints associated to the user filtered by this tag
* `TagsGetGroups` - List of all the groups associated to the user filtered by this tag.
* `TagsGetGroupsCount` - Count the groups associated to the user filtered by this tag
* `TagsPatchDataPointForm` - Associate/Deassociate a tag with a datapoint
* `TagsPatchDataPointJSON` - Associate/Deassociate a tag with a datapoint
* `TagsPatchDataPointRaw` - Associate/Deassociate a tag with a datapoint
* `TagsPatchGroupForm` - Associate/Deassociate a tag with a group
* `TagsPatchGroupJSON` - Associate/Deassociate a tag with a group
* `TagsPatchGroupRaw` - Associate/Deassociate a tag with a group
* `TagsPatchTagNameForm` - Fast patch a tag name
* `TagsPatchTagNameJSON` - Fast patch a tag name
* `TagsPatchTagNameRaw` - Fast patch a tag name
* `TagsPut` - Create a tag
* `GetTagsTagID` - Retrieve a tag
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
