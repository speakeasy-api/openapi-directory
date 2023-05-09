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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountDeleteDomainWhitelist(ctx, operations.AccountDeleteDomainWhitelistRequest{
        WhitelistID: "corrupti",
    })
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
## Available Resources and Operations


### [Account](docs/account/README.md)

* [AccountDeleteDomainWhitelist](docs/account/README.md#accountdeletedomainwhitelist) - Delete an domain entry
* [AccountDeleteGuest](docs/account/README.md#accountdeleteguest) - Delete a guest
* [AccountDeleteIPBlacklist](docs/account/README.md#accountdeleteipblacklist) - Delete an ip blacklist entry
* [AccountGet](docs/account/README.md#accountget) - Retrieve current account data
* [AccountGetDomainWhitelist](docs/account/README.md#accountgetdomainwhitelist) - Retrieve list of a domains allowed to redirect in DDU mode
* [AccountGetGuest](docs/account/README.md#accountgetguest) - Retrieve a guest
* [AccountGetGuests](docs/account/README.md#accountgetguests) - Retrieve list of a guest
* [AccountGetGuestsCount](docs/account/README.md#accountgetguestscount) - Retrieve count of guests
* [AccountGetIPBlacklist](docs/account/README.md#accountgetipblacklist) - Retrieve list of a ip to exclude from event tracking
* [AccountGetPermissions](docs/account/README.md#accountgetpermissions) - Retrieve permissions for a guest
* [AccountGetPermissionsCount](docs/account/README.md#accountgetpermissionscount) - Retrieve count of the permissions for a guest
* [AccountGetPlan](docs/account/README.md#accountgetplan) - Retrieve current account plan
* [AccountPatchPermissionsForm](docs/account/README.md#accountpatchpermissionsform) - Change the permission on a shared object
* [AccountPatchPermissionsJSON](docs/account/README.md#accountpatchpermissionsjson) - Change the permission on a shared object
* [AccountPatchPermissionsRaw](docs/account/README.md#accountpatchpermissionsraw) - Change the permission on a shared object
* [AccountPostGuestForm](docs/account/README.md#accountpostguestform) - Update a guest
* [AccountPostGuestJSON](docs/account/README.md#accountpostguestjson) - Update a guest
* [AccountPostGuestRaw](docs/account/README.md#accountpostguestraw) - Update a guest
* [AccountPostForm](docs/account/README.md#accountpostform) - Update current account data
* [AccountPostJSON](docs/account/README.md#accountpostjson) - Update current account data
* [AccountPostRaw](docs/account/README.md#accountpostraw) - Update current account data
* [AccountPutDomainWhitelistForm](docs/account/README.md#accountputdomainwhitelistform) - Create an domain entry
* [AccountPutDomainWhitelistJSON](docs/account/README.md#accountputdomainwhitelistjson) - Create an domain entry
* [AccountPutDomainWhitelistRaw](docs/account/README.md#accountputdomainwhitelistraw) - Create an domain entry
* [AccountPutGuestForm](docs/account/README.md#accountputguestform) - Create a guest
* [AccountPutGuestJSON](docs/account/README.md#accountputguestjson) - Create a guest
* [AccountPutGuestRaw](docs/account/README.md#accountputguestraw) - Create a guest
* [AccountPutIPBlacklistForm](docs/account/README.md#accountputipblacklistform) - Create an ip blacklist entry
* [AccountPutIPBlacklistJSON](docs/account/README.md#accountputipblacklistjson) - Create an ip blacklist entry
* [AccountPutIPBlacklistRaw](docs/account/README.md#accountputipblacklistraw) - Create an ip blacklist entry
* [PostAccountGuestsGuestIDTypePermissionsPatchForm](docs/account/README.md#postaccountguestsguestidtypepermissionspatchform) - Change the permission on a shared object
* [PostAccountGuestsGuestIDTypePermissionsPatchJSON](docs/account/README.md#postaccountguestsguestidtypepermissionspatchjson) - Change the permission on a shared object
* [PostAccountGuestsGuestIDTypePermissionsPatchRaw](docs/account/README.md#postaccountguestsguestidtypepermissionspatchraw) - Change the permission on a shared object

### [Aggregated](docs/aggregated/README.md)

* [AggregatedGetConversionsSummary](docs/aggregated/README.md#aggregatedgetconversionssummary) - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* [AggregatedGetDatapointsSummary](docs/aggregated/README.md#aggregatedgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [AggregatedGetGroupsSummary](docs/aggregated/README.md#aggregatedgetgroupssummary) - Retrieve statistics about a subset of groups for a timeframe with groups data
* [AggregatedGetStatisticsList](docs/aggregated/README.md#aggregatedgetstatisticslist) - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* [AggregatedGetStatisticsSingle](docs/aggregated/README.md#aggregatedgetstatisticssingle) - Retrieve statistics about this customer for a timeframe

### [ClickStream](docs/clickstream/README.md)

* [ClickStreamGet](docs/clickstream/README.md#clickstreamget) - Retrieve the latest list of events of this account. Limited to last 100.

### [Conversions](docs/conversions/README.md)

* [ConversionsCount](docs/conversions/README.md#conversionscount) - Retrieve a count of conversions
* [ConversionsDelete](docs/conversions/README.md#conversionsdelete) - Delete conversion specified by id
* [ConversionsGet](docs/conversions/README.md#conversionsget) - Retrieve a list of conversions
* [ConversionsGetDatapoints](docs/conversions/README.md#conversionsgetdatapoints) - Retrieve a list of datapoints connected to this conversion
* [ConversionsGetDatapointsCount](docs/conversions/README.md#conversionsgetdatapointscount) - Retrieve a count of datapoints connected to this conversion
* [ConversionsGetHits](docs/conversions/README.md#conversionsgethits) - Retrieve the list of events related to this conversion.
* [ConversionsGetStatisticsAllList](docs/conversions/README.md#conversionsgetstatisticsalllist) - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* [ConversionsGetStatisticsList](docs/conversions/README.md#conversionsgetstatisticslist) - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* [ConversionsGetStatisticsSingle](docs/conversions/README.md#conversionsgetstatisticssingle) - Retrieve statistics about this conversion for a timeframe
* [ConversionsPatchNotesForm](docs/conversions/README.md#conversionspatchnotesform) - Fast patch the "notes" field of a conversion
* [ConversionsPatchNotesJSON](docs/conversions/README.md#conversionspatchnotesjson) - Fast patch the "notes" field of a conversion
* [ConversionsPatchNotesRaw](docs/conversions/README.md#conversionspatchnotesraw) - Fast patch the "notes" field of a conversion
* [ConversionsPatchForm](docs/conversions/README.md#conversionspatchform) - Modify the association between a conversion and a datapoint
* [ConversionsPatchJSON](docs/conversions/README.md#conversionspatchjson) - Modify the association between a conversion and a datapoint
* [ConversionsPatchRaw](docs/conversions/README.md#conversionspatchraw) - Modify the association between a conversion and a datapoint
* [ConversionsPostForm](docs/conversions/README.md#conversionspostform) - Update conversion specified by id
* [ConversionsPostJSON](docs/conversions/README.md#conversionspostjson) - Update conversion specified by id
* [ConversionsPostRaw](docs/conversions/README.md#conversionspostraw) - Update conversion specified by id
* [ConversionsPutForm](docs/conversions/README.md#conversionsputform) - Create a conversion
* [ConversionsPutJSON](docs/conversions/README.md#conversionsputjson) - Create a conversion
* [ConversionsPutRaw](docs/conversions/README.md#conversionsputraw) - Create a conversion
* [GetConversionsConversionID](docs/conversions/README.md#getconversionsconversionid) - Retrieve conversion specified by id
* [PutConversionsConversionIDDatapointsBatchPatch](docs/conversions/README.md#putconversionsconversioniddatapointsbatchpatch) - Modify the association between a conversion and multiple datapoints

### [DataPoints](docs/datapoints/README.md)

* [DataPointsBatchDelete](docs/datapoints/README.md#datapointsbatchdelete) - Delete multiple datapoints
* [DataPointsBatchPost](docs/datapoints/README.md#datapointsbatchpost) - Update multiple datapoints
* [DataPointsBatchPut](docs/datapoints/README.md#datapointsbatchput) - Create multiple datapoints
* [DataPointsCount](docs/datapoints/README.md#datapointscount) - Count the datapoints associated to the user
* [DataPointsDelete](docs/datapoints/README.md#datapointsdelete) - Delete a datapoint
* [DataPointsGet](docs/datapoints/README.md#datapointsget) - List of all the datapoints associated to the user
* [DataPointsGetHits](docs/datapoints/README.md#datapointsgethits) - Retrieve the list of events related to this datapoint.
* [DataPointsGetStatisticsAggregatedSingle](docs/datapoints/README.md#datapointsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [DataPointsGetStatisticsAllList](docs/datapoints/README.md#datapointsgetstatisticsalllist) - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [DataPointsGetStatisticsList](docs/datapoints/README.md#datapointsgetstatisticslist) - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* [DataPointsGetStatisticsSingle](docs/datapoints/README.md#datapointsgetstatisticssingle) - Retrieve statistics about this datapoint for a timeframe
* [DataPointsPatchFavourite](docs/datapoints/README.md#datapointspatchfavourite) - Fast switch the "favourite" field of a datapoint
* [DataPointsPatchNotesForm](docs/datapoints/README.md#datapointspatchnotesform) - Fast patch the "notes" field of a datapoint
* [DataPointsPatchNotesJSON](docs/datapoints/README.md#datapointspatchnotesjson) - Fast patch the "notes" field of a datapoint
* [DataPointsPatchNotesRaw](docs/datapoints/README.md#datapointspatchnotesraw) - Fast patch the "notes" field of a datapoint
* [DataPointsPost](docs/datapoints/README.md#datapointspost) - Update a datapoint
* [DataPointsPut](docs/datapoints/README.md#datapointsput) - Create a datapoint
* [GetDatapointsID](docs/datapoints/README.md#getdatapointsid) - Get a datapoint

### [Domains](docs/domains/README.md)

* [DomainsCount](docs/domains/README.md#domainscount) - Retrieve count of domains
* [DomainsDelete](docs/domains/README.md#domainsdelete) - Delete a domain
* [DomainsGet](docs/domains/README.md#domainsget) - Retrieve a list of domains
* [DomainsPutForm](docs/domains/README.md#domainsputform) - Create a domain
* [DomainsPutJSON](docs/domains/README.md#domainsputjson) - Create a domain
* [DomainsPutRaw](docs/domains/README.md#domainsputraw) - Create a domain
* [DomainsUpdateForm](docs/domains/README.md#domainsupdateform) - Update a domain
* [DomainsUpdateJSON](docs/domains/README.md#domainsupdatejson) - Update a domain
* [DomainsUpdateRaw](docs/domains/README.md#domainsupdateraw) - Update a domain
* [GetDomainsID](docs/domains/README.md#getdomainsid) - Get a domain

### [Groups](docs/groups/README.md)

* [GroupsCount](docs/groups/README.md#groupscount) - Count the groups associated to the user.
* [GroupsDelete](docs/groups/README.md#groupsdelete) - Delete group specified by id
* [GroupsGet](docs/groups/README.md#groupsget) - List of all the groups associated to the user.
* [GroupsGetDatapoints](docs/groups/README.md#groupsgetdatapoints) - List of all the datapoints associated to the user in this group.
* [GroupsGetDatapointsCount](docs/groups/README.md#groupsgetdatapointscount) - Count the datapoints associated to the user in this group.
* [GroupsGetDatapointsSummary](docs/groups/README.md#groupsgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [GroupsGetHits](docs/groups/README.md#groupsgethits) - Retrieve the list of events related to this group.
* [GroupsGetStatisticsAggregatedSingle](docs/groups/README.md#groupsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [GroupsGetStatisticsAllList](docs/groups/README.md#groupsgetstatisticsalllist) - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [GroupsGetStatisticsList](docs/groups/README.md#groupsgetstatisticslist) - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* [GroupsGetStatisticsSingle](docs/groups/README.md#groupsgetstatisticssingle) - Retrieve statistics about this group for a timeframe
* [GroupsPatchFavourite](docs/groups/README.md#groupspatchfavourite) - Fast switch the "favourite" field of a group
* [GroupsPatchNotesForm](docs/groups/README.md#groupspatchnotesform) - Fast patch the "notes" field of a group
* [GroupsPatchNotesJSON](docs/groups/README.md#groupspatchnotesjson) - Fast patch the "notes" field of a group
* [GroupsPatchNotesRaw](docs/groups/README.md#groupspatchnotesraw) - Fast patch the "notes" field of a group
* [GroupsPost](docs/groups/README.md#groupspost) - Update a group
* [GroupsPut](docs/groups/README.md#groupsput) - Create a group
* [GroupsPutDatapoint](docs/groups/README.md#groupsputdatapoint) - Create a datapoint in this group
* [GetGroupsID](docs/groups/README.md#getgroupsid) - Get a group

### [Hits](docs/hits/README.md)

* [HitsGetHits](docs/hits/README.md#hitsgethits) - Retrieve the list of events related to this account.

### [Me](docs/me/README.md)

* [MeGetMe](docs/me/README.md#megetme) - Retrieve current account data
* [MeGetMePlan](docs/me/README.md#megetmeplan) - Retrieve current account plan

### [Retargeting](docs/retargeting/README.md)

* [RetargetingCount](docs/retargeting/README.md#retargetingcount) - Retrieve count of retargeting scripts
* [RetargetingDelete](docs/retargeting/README.md#retargetingdelete) - Deletes a retargeting script (and remove associations)
* [RetargetingGet](docs/retargeting/README.md#retargetingget) - List of all the retargeting scripts associated to the user
* [RetargetingGetDatapoints](docs/retargeting/README.md#retargetinggetdatapoints) - List of all the datapoints associated to the retargeting script.
* [RetargetingGetDatapointsCount](docs/retargeting/README.md#retargetinggetdatapointscount) - Count the datapoints associated to the retargeting script.
* [RetargetingPostForm](docs/retargeting/README.md#retargetingpostform) - Updates a retargeting script
* [RetargetingPostJSON](docs/retargeting/README.md#retargetingpostjson) - Updates a retargeting script
* [RetargetingPostRaw](docs/retargeting/README.md#retargetingpostraw) - Updates a retargeting script
* [RetargetingPutForm](docs/retargeting/README.md#retargetingputform) - Creates a retargeting script
* [RetargetingPutJSON](docs/retargeting/README.md#retargetingputjson) - Creates a retargeting script
* [RetargetingPutRaw](docs/retargeting/README.md#retargetingputraw) - Creates a retargeting script
* [GetRetargetingID](docs/retargeting/README.md#getretargetingid) - Get a retargeting script object

### [Tags](docs/tags/README.md)

* [TagsCount](docs/tags/README.md#tagscount) - List of all the groups associated to the user filtered by this tag.
* [TagsDelete](docs/tags/README.md#tagsdelete) - Delete a tag
* [TagsDeleteRelatedDatapoints](docs/tags/README.md#tagsdeleterelateddatapoints) - Delete the association of this tag with all datapoints
* [TagsDeleteRelatedGroups](docs/tags/README.md#tagsdeleterelatedgroups) - Delete the association of this tag with all groups
* [TagsGet](docs/tags/README.md#tagsget) - List of all the groups associated to the user filtered by this tag.
* [TagsGetDatapoints](docs/tags/README.md#tagsgetdatapoints) - List of all the datapoints associated to the user filtered by this tag
* [TagsGetDatapointsCount](docs/tags/README.md#tagsgetdatapointscount) - Count the datapoints associated to the user filtered by this tag
* [TagsGetGroups](docs/tags/README.md#tagsgetgroups) - List of all the groups associated to the user filtered by this tag.
* [TagsGetGroupsCount](docs/tags/README.md#tagsgetgroupscount) - Count the groups associated to the user filtered by this tag
* [TagsPatchDataPointForm](docs/tags/README.md#tagspatchdatapointform) - Associate/Deassociate a tag with a datapoint
* [TagsPatchDataPointJSON](docs/tags/README.md#tagspatchdatapointjson) - Associate/Deassociate a tag with a datapoint
* [TagsPatchDataPointRaw](docs/tags/README.md#tagspatchdatapointraw) - Associate/Deassociate a tag with a datapoint
* [TagsPatchGroupForm](docs/tags/README.md#tagspatchgroupform) - Associate/Deassociate a tag with a group
* [TagsPatchGroupJSON](docs/tags/README.md#tagspatchgroupjson) - Associate/Deassociate a tag with a group
* [TagsPatchGroupRaw](docs/tags/README.md#tagspatchgroupraw) - Associate/Deassociate a tag with a group
* [TagsPatchTagNameForm](docs/tags/README.md#tagspatchtagnameform) - Fast patch a tag name
* [TagsPatchTagNameJSON](docs/tags/README.md#tagspatchtagnamejson) - Fast patch a tag name
* [TagsPatchTagNameRaw](docs/tags/README.md#tagspatchtagnameraw) - Fast patch a tag name
* [TagsPut](docs/tags/README.md#tagsput) - Create a tag
* [GetTagsTagID](docs/tags/README.md#gettagstagid) - Retrieve a tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
