# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteDomainWhitelistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountDeleteDomainWhitelistRequest();
    $request->whitelistId = 'corrupti';

    $response = $sdk->account->accountDeleteDomainWhitelist($request);

    if ($response->apiCoreDtoAccountingDomainWhitelistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [accountDeleteDomainWhitelist](docs/account/README.md#accountdeletedomainwhitelist) - Delete an domain entry
* [accountDeleteGuest](docs/account/README.md#accountdeleteguest) - Delete a guest
* [accountDeleteIpBlacklist](docs/account/README.md#accountdeleteipblacklist) - Delete an ip blacklist entry
* [accountGet](docs/account/README.md#accountget) - Retrieve current account data
* [accountGetDomainWhitelist](docs/account/README.md#accountgetdomainwhitelist) - Retrieve list of a domains allowed to redirect in DDU mode
* [accountGetGuest](docs/account/README.md#accountgetguest) - Retrieve a guest
* [accountGetGuests](docs/account/README.md#accountgetguests) - Retrieve list of a guest
* [accountGetGuestsCount](docs/account/README.md#accountgetguestscount) - Retrieve count of guests
* [accountGetIpBlacklist](docs/account/README.md#accountgetipblacklist) - Retrieve list of a ip to exclude from event tracking
* [accountGetPermissions](docs/account/README.md#accountgetpermissions) - Retrieve permissions for a guest
* [accountGetPermissionsCount](docs/account/README.md#accountgetpermissionscount) - Retrieve count of the permissions for a guest
* [accountGetPlan](docs/account/README.md#accountgetplan) - Retrieve current account plan
* [accountPatchPermissionsForm](docs/account/README.md#accountpatchpermissionsform) - Change the permission on a shared object
* [accountPatchPermissionsJson](docs/account/README.md#accountpatchpermissionsjson) - Change the permission on a shared object
* [accountPatchPermissionsRaw](docs/account/README.md#accountpatchpermissionsraw) - Change the permission on a shared object
* [accountPostGuestForm](docs/account/README.md#accountpostguestform) - Update a guest
* [accountPostGuestJson](docs/account/README.md#accountpostguestjson) - Update a guest
* [accountPostGuestRaw](docs/account/README.md#accountpostguestraw) - Update a guest
* [accountPostForm](docs/account/README.md#accountpostform) - Update current account data
* [accountPostJson](docs/account/README.md#accountpostjson) - Update current account data
* [accountPostRaw](docs/account/README.md#accountpostraw) - Update current account data
* [accountPutDomainWhitelistForm](docs/account/README.md#accountputdomainwhitelistform) - Create an domain entry
* [accountPutDomainWhitelistJson](docs/account/README.md#accountputdomainwhitelistjson) - Create an domain entry
* [accountPutDomainWhitelistRaw](docs/account/README.md#accountputdomainwhitelistraw) - Create an domain entry
* [accountPutGuestForm](docs/account/README.md#accountputguestform) - Create a guest
* [accountPutGuestJson](docs/account/README.md#accountputguestjson) - Create a guest
* [accountPutGuestRaw](docs/account/README.md#accountputguestraw) - Create a guest
* [accountPutIpBlacklistForm](docs/account/README.md#accountputipblacklistform) - Create an ip blacklist entry
* [accountPutIpBlacklistJson](docs/account/README.md#accountputipblacklistjson) - Create an ip blacklist entry
* [accountPutIpBlacklistRaw](docs/account/README.md#accountputipblacklistraw) - Create an ip blacklist entry
* [postAccountGuestsGuestIdTypePermissionsPatchForm](docs/account/README.md#postaccountguestsguestidtypepermissionspatchform) - Change the permission on a shared object
* [postAccountGuestsGuestIdTypePermissionsPatchJson](docs/account/README.md#postaccountguestsguestidtypepermissionspatchjson) - Change the permission on a shared object
* [postAccountGuestsGuestIdTypePermissionsPatchRaw](docs/account/README.md#postaccountguestsguestidtypepermissionspatchraw) - Change the permission on a shared object

### [aggregated](docs/aggregated/README.md)

* [aggregatedGetConversionsSummary](docs/aggregated/README.md#aggregatedgetconversionssummary) - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* [aggregatedGetDatapointsSummary](docs/aggregated/README.md#aggregatedgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [aggregatedGetGroupsSummary](docs/aggregated/README.md#aggregatedgetgroupssummary) - Retrieve statistics about a subset of groups for a timeframe with groups data
* [aggregatedGetStatisticsList](docs/aggregated/README.md#aggregatedgetstatisticslist) - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* [aggregatedGetStatisticsSingle](docs/aggregated/README.md#aggregatedgetstatisticssingle) - Retrieve statistics about this customer for a timeframe

### [clickStream](docs/clickstream/README.md)

* [clickStreamGet](docs/clickstream/README.md#clickstreamget) - Retrieve the latest list of events of this account. Limited to last 100.

### [conversions](docs/conversions/README.md)

* [conversionsCount](docs/conversions/README.md#conversionscount) - Retrieve a count of conversions
* [conversionsDelete](docs/conversions/README.md#conversionsdelete) - Delete conversion specified by id
* [conversionsGet](docs/conversions/README.md#conversionsget) - Retrieve a list of conversions
* [conversionsGetDatapoints](docs/conversions/README.md#conversionsgetdatapoints) - Retrieve a list of datapoints connected to this conversion
* [conversionsGetDatapointsCount](docs/conversions/README.md#conversionsgetdatapointscount) - Retrieve a count of datapoints connected to this conversion
* [conversionsGetHits](docs/conversions/README.md#conversionsgethits) - Retrieve the list of events related to this conversion.
* [conversionsGetStatisticsAllList](docs/conversions/README.md#conversionsgetstatisticsalllist) - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* [conversionsGetStatisticsList](docs/conversions/README.md#conversionsgetstatisticslist) - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* [conversionsGetStatisticsSingle](docs/conversions/README.md#conversionsgetstatisticssingle) - Retrieve statistics about this conversion for a timeframe
* [conversionsPatchNotesForm](docs/conversions/README.md#conversionspatchnotesform) - Fast patch the "notes" field of a conversion
* [conversionsPatchNotesJson](docs/conversions/README.md#conversionspatchnotesjson) - Fast patch the "notes" field of a conversion
* [conversionsPatchNotesRaw](docs/conversions/README.md#conversionspatchnotesraw) - Fast patch the "notes" field of a conversion
* [conversionsPatchForm](docs/conversions/README.md#conversionspatchform) - Modify the association between a conversion and a datapoint
* [conversionsPatchJson](docs/conversions/README.md#conversionspatchjson) - Modify the association between a conversion and a datapoint
* [conversionsPatchRaw](docs/conversions/README.md#conversionspatchraw) - Modify the association between a conversion and a datapoint
* [conversionsPostForm](docs/conversions/README.md#conversionspostform) - Update conversion specified by id
* [conversionsPostJson](docs/conversions/README.md#conversionspostjson) - Update conversion specified by id
* [conversionsPostRaw](docs/conversions/README.md#conversionspostraw) - Update conversion specified by id
* [conversionsPutForm](docs/conversions/README.md#conversionsputform) - Create a conversion
* [conversionsPutJson](docs/conversions/README.md#conversionsputjson) - Create a conversion
* [conversionsPutRaw](docs/conversions/README.md#conversionsputraw) - Create a conversion
* [getConversionsConversionId](docs/conversions/README.md#getconversionsconversionid) - Retrieve conversion specified by id
* [putConversionsConversionIdDatapointsBatchPatch](docs/conversions/README.md#putconversionsconversioniddatapointsbatchpatch) - Modify the association between a conversion and multiple datapoints

### [dataPoints](docs/datapoints/README.md)

* [dataPointsBatchDelete](docs/datapoints/README.md#datapointsbatchdelete) - Delete multiple datapoints
* [dataPointsBatchPost](docs/datapoints/README.md#datapointsbatchpost) - Update multiple datapoints
* [dataPointsBatchPut](docs/datapoints/README.md#datapointsbatchput) - Create multiple datapoints
* [dataPointsCount](docs/datapoints/README.md#datapointscount) - Count the datapoints associated to the user
* [dataPointsDelete](docs/datapoints/README.md#datapointsdelete) - Delete a datapoint
* [dataPointsGet](docs/datapoints/README.md#datapointsget) - List of all the datapoints associated to the user
* [dataPointsGetHits](docs/datapoints/README.md#datapointsgethits) - Retrieve the list of events related to this datapoint.
* [dataPointsGetStatisticsAggregatedSingle](docs/datapoints/README.md#datapointsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [dataPointsGetStatisticsAllList](docs/datapoints/README.md#datapointsgetstatisticsalllist) - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [dataPointsGetStatisticsList](docs/datapoints/README.md#datapointsgetstatisticslist) - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* [dataPointsGetStatisticsSingle](docs/datapoints/README.md#datapointsgetstatisticssingle) - Retrieve statistics about this datapoint for a timeframe
* [dataPointsPatchFavourite](docs/datapoints/README.md#datapointspatchfavourite) - Fast switch the "favourite" field of a datapoint
* [dataPointsPatchNotesForm](docs/datapoints/README.md#datapointspatchnotesform) - Fast patch the "notes" field of a datapoint
* [dataPointsPatchNotesJson](docs/datapoints/README.md#datapointspatchnotesjson) - Fast patch the "notes" field of a datapoint
* [dataPointsPatchNotesRaw](docs/datapoints/README.md#datapointspatchnotesraw) - Fast patch the "notes" field of a datapoint
* [dataPointsPost](docs/datapoints/README.md#datapointspost) - Update a datapoint
* [dataPointsPut](docs/datapoints/README.md#datapointsput) - Create a datapoint
* [getDatapointsId](docs/datapoints/README.md#getdatapointsid) - Get a datapoint

### [domains](docs/domains/README.md)

* [domainsCount](docs/domains/README.md#domainscount) - Retrieve count of domains
* [domainsDelete](docs/domains/README.md#domainsdelete) - Delete a domain
* [domainsGet](docs/domains/README.md#domainsget) - Retrieve a list of domains
* [domainsPutForm](docs/domains/README.md#domainsputform) - Create a domain
* [domainsPutJson](docs/domains/README.md#domainsputjson) - Create a domain
* [domainsPutRaw](docs/domains/README.md#domainsputraw) - Create a domain
* [domainsUpdateForm](docs/domains/README.md#domainsupdateform) - Update a domain
* [domainsUpdateJson](docs/domains/README.md#domainsupdatejson) - Update a domain
* [domainsUpdateRaw](docs/domains/README.md#domainsupdateraw) - Update a domain
* [getDomainsId](docs/domains/README.md#getdomainsid) - Get a domain

### [groups](docs/groups/README.md)

* [groupsCount](docs/groups/README.md#groupscount) - Count the groups associated to the user.
* [groupsDelete](docs/groups/README.md#groupsdelete) - Delete group specified by id
* [groupsGet](docs/groups/README.md#groupsget) - List of all the groups associated to the user.
* [groupsGetDatapoints](docs/groups/README.md#groupsgetdatapoints) - List of all the datapoints associated to the user in this group.
* [groupsGetDatapointsCount](docs/groups/README.md#groupsgetdatapointscount) - Count the datapoints associated to the user in this group.
* [groupsGetDatapointsSummary](docs/groups/README.md#groupsgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [groupsGetHits](docs/groups/README.md#groupsgethits) - Retrieve the list of events related to this group.
* [groupsGetStatisticsAggregatedSingle](docs/groups/README.md#groupsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [groupsGetStatisticsAllList](docs/groups/README.md#groupsgetstatisticsalllist) - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [groupsGetStatisticsList](docs/groups/README.md#groupsgetstatisticslist) - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* [groupsGetStatisticsSingle](docs/groups/README.md#groupsgetstatisticssingle) - Retrieve statistics about this group for a timeframe
* [groupsPatchFavourite](docs/groups/README.md#groupspatchfavourite) - Fast switch the "favourite" field of a group
* [groupsPatchNotesForm](docs/groups/README.md#groupspatchnotesform) - Fast patch the "notes" field of a group
* [groupsPatchNotesJson](docs/groups/README.md#groupspatchnotesjson) - Fast patch the "notes" field of a group
* [groupsPatchNotesRaw](docs/groups/README.md#groupspatchnotesraw) - Fast patch the "notes" field of a group
* [groupsPost](docs/groups/README.md#groupspost) - Update a group
* [groupsPut](docs/groups/README.md#groupsput) - Create a group
* [groupsPutDatapoint](docs/groups/README.md#groupsputdatapoint) - Create a datapoint in this group
* [getGroupsId](docs/groups/README.md#getgroupsid) - Get a group

### [hits](docs/hits/README.md)

* [hitsGetHits](docs/hits/README.md#hitsgethits) - Retrieve the list of events related to this account.

### [me](docs/me/README.md)

* [meGetMe](docs/me/README.md#megetme) - Retrieve current account data
* [meGetMePlan](docs/me/README.md#megetmeplan) - Retrieve current account plan

### [retargeting](docs/retargeting/README.md)

* [retargetingCount](docs/retargeting/README.md#retargetingcount) - Retrieve count of retargeting scripts
* [retargetingDelete](docs/retargeting/README.md#retargetingdelete) - Deletes a retargeting script (and remove associations)
* [retargetingGet](docs/retargeting/README.md#retargetingget) - List of all the retargeting scripts associated to the user
* [retargetingGetDatapoints](docs/retargeting/README.md#retargetinggetdatapoints) - List of all the datapoints associated to the retargeting script.
* [retargetingGetDatapointsCount](docs/retargeting/README.md#retargetinggetdatapointscount) - Count the datapoints associated to the retargeting script.
* [retargetingPostForm](docs/retargeting/README.md#retargetingpostform) - Updates a retargeting script
* [retargetingPostJson](docs/retargeting/README.md#retargetingpostjson) - Updates a retargeting script
* [retargetingPostRaw](docs/retargeting/README.md#retargetingpostraw) - Updates a retargeting script
* [retargetingPutForm](docs/retargeting/README.md#retargetingputform) - Creates a retargeting script
* [retargetingPutJson](docs/retargeting/README.md#retargetingputjson) - Creates a retargeting script
* [retargetingPutRaw](docs/retargeting/README.md#retargetingputraw) - Creates a retargeting script
* [getRetargetingId](docs/retargeting/README.md#getretargetingid) - Get a retargeting script object

### [tags](docs/tags/README.md)

* [tagsCount](docs/tags/README.md#tagscount) - List of all the groups associated to the user filtered by this tag.
* [tagsDelete](docs/tags/README.md#tagsdelete) - Delete a tag
* [tagsDeleteRelatedDatapoints](docs/tags/README.md#tagsdeleterelateddatapoints) - Delete the association of this tag with all datapoints
* [tagsDeleteRelatedGroups](docs/tags/README.md#tagsdeleterelatedgroups) - Delete the association of this tag with all groups
* [tagsGet](docs/tags/README.md#tagsget) - List of all the groups associated to the user filtered by this tag.
* [tagsGetDatapoints](docs/tags/README.md#tagsgetdatapoints) - List of all the datapoints associated to the user filtered by this tag
* [tagsGetDatapointsCount](docs/tags/README.md#tagsgetdatapointscount) - Count the datapoints associated to the user filtered by this tag
* [tagsGetGroups](docs/tags/README.md#tagsgetgroups) - List of all the groups associated to the user filtered by this tag.
* [tagsGetGroupsCount](docs/tags/README.md#tagsgetgroupscount) - Count the groups associated to the user filtered by this tag
* [tagsPatchDataPointForm](docs/tags/README.md#tagspatchdatapointform) - Associate/Deassociate a tag with a datapoint
* [tagsPatchDataPointJson](docs/tags/README.md#tagspatchdatapointjson) - Associate/Deassociate a tag with a datapoint
* [tagsPatchDataPointRaw](docs/tags/README.md#tagspatchdatapointraw) - Associate/Deassociate a tag with a datapoint
* [tagsPatchGroupForm](docs/tags/README.md#tagspatchgroupform) - Associate/Deassociate a tag with a group
* [tagsPatchGroupJson](docs/tags/README.md#tagspatchgroupjson) - Associate/Deassociate a tag with a group
* [tagsPatchGroupRaw](docs/tags/README.md#tagspatchgroupraw) - Associate/Deassociate a tag with a group
* [tagsPatchTagNameForm](docs/tags/README.md#tagspatchtagnameform) - Fast patch a tag name
* [tagsPatchTagNameJson](docs/tags/README.md#tagspatchtagnamejson) - Fast patch a tag name
* [tagsPatchTagNameRaw](docs/tags/README.md#tagspatchtagnameraw) - Fast patch a tag name
* [tagsPut](docs/tags/README.md#tagsput) - Create a tag
* [getTagsTagId](docs/tags/README.md#gettagstagid) - Retrieve a tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
