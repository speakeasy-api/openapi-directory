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
use \OpenAPI\OpenAPI\Models\Operations\CampaignAnalyticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CampaignAnalyticsRequest();
    $request->campaignId = '{{campaign_identifier}}';
    $request->endingAt = '2020-06-28T23:59:59-5:00';
    $request->length = '7';

    $response = $sdk->campaign->campaignAnalytics($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [campaign](docs/campaign/README.md)

* [campaignAnalytics](docs/campaign/README.md#campaignanalytics) - Campaign Analytics
* [campaignDetails](docs/campaign/README.md#campaigndetails) - Campaign Details
* [campaignList](docs/campaign/README.md#campaignlist) - Campaign List
* [sendAnalytics](docs/campaign/README.md#sendanalytics) - Send Analytics

### [canvas](docs/canvas/README.md)

* [canvasDataAnalyticsSummary](docs/canvas/README.md#canvasdataanalyticssummary) - Canvas Data Analytics Summary
* [canvasDataSeriesAnalytics](docs/canvas/README.md#canvasdataseriesanalytics) - Canvas Data Series Analytics
* [canvasDetails](docs/canvas/README.md#canvasdetails) - Canvas Details
* [canvasList](docs/canvas/README.md#canvaslist) - Canvas List

### [contentBlocks](docs/contentblocks/README.md)

* [listAvailableContentBlocks](docs/contentblocks/README.md#listavailablecontentblocks) - List Available Content Blocks
* [seeContentBlockInformation](docs/contentblocks/README.md#seecontentblockinformation) - See Content Block Information

### [customEvents](docs/customevents/README.md)

* [customEventsAnalytics](docs/customevents/README.md#customeventsanalytics) - Custom Events Analytics
* [customEventsList](docs/customevents/README.md#customeventslist) - Custom Events List

### [emailListsAndAddresses](docs/emaillistsandaddresses/README.md)

* [queryHardBouncedEmails](docs/emaillistsandaddresses/README.md#queryhardbouncedemails) - Query Hard Bounced Emails
* [queryListOfUnsubscribedEmailAddresses](docs/emaillistsandaddresses/README.md#querylistofunsubscribedemailaddresses) - Query List of Unsubscribed Email Addresses

### [emailTemplates](docs/emailtemplates/README.md)

* [listAvailableEmailTemplates](docs/emailtemplates/README.md#listavailableemailtemplates) - List Available Email Templates
* [seeEmailTemplateInformation](docs/emailtemplates/README.md#seeemailtemplateinformation) - See Email Template Information

### [export](docs/export/README.md)

* [appSessionsByTime](docs/export/README.md#appsessionsbytime) - App Sessions by Time
* [campaignAnalytics](docs/export/README.md#campaignanalytics) - Campaign Analytics
* [campaignDetails](docs/export/README.md#campaigndetails) - Campaign Details
* [campaignList](docs/export/README.md#campaignlist) - Campaign List
* [canvasDataAnalyticsSummary](docs/export/README.md#canvasdataanalyticssummary) - Canvas Data Analytics Summary
* [canvasDataSeriesAnalytics](docs/export/README.md#canvasdataseriesanalytics) - Canvas Data Series Analytics
* [canvasDetails](docs/export/README.md#canvasdetails) - Canvas Details
* [canvasList](docs/export/README.md#canvaslist) - Canvas List
* [customEventsAnalytics](docs/export/README.md#customeventsanalytics) - Custom Events Analytics
* [customEventsList](docs/export/README.md#customeventslist) - Custom Events List
* [dailyActiveUsersByDate](docs/export/README.md#dailyactiveusersbydate) - Daily Active Users by Date
* [dailyNewUsersByDate](docs/export/README.md#dailynewusersbydate) - Daily New Users by Date
* [kpIsForDailyAppUninstallsByDate](docs/export/README.md#kpisfordailyappuninstallsbydate) - KPIs for Daily App Uninstalls by Date
* [monthlyActiveUsersForLast30Days](docs/export/README.md#monthlyactiveusersforlast30days) - Monthly Active Users for Last 30 Days
* [newsFeedCardAnalytics](docs/export/README.md#newsfeedcardanalytics) - News Feed Card Analytics
* [newsFeedCardsDetails](docs/export/README.md#newsfeedcardsdetails) - News Feed Cards Details
* [newsFeedCardsList](docs/export/README.md#newsfeedcardslist) - News Feed Cards List
* [segmentAnalytics](docs/export/README.md#segmentanalytics) - Segment Analytics
* [segmentDetails](docs/export/README.md#segmentdetails) - Segment Details
* [segmentList](docs/export/README.md#segmentlist) - Segment List
* [sendAnalytics](docs/export/README.md#sendanalytics) - Send Analytics

### [kpi](docs/kpi/README.md)

* [dailyActiveUsersByDate](docs/kpi/README.md#dailyactiveusersbydate) - Daily Active Users by Date
* [dailyNewUsersByDate](docs/kpi/README.md#dailynewusersbydate) - Daily New Users by Date
* [kpIsForDailyAppUninstallsByDate](docs/kpi/README.md#kpisfordailyappuninstallsbydate) - KPIs for Daily App Uninstalls by Date
* [monthlyActiveUsersForLast30Days](docs/kpi/README.md#monthlyactiveusersforlast30days) - Monthly Active Users for Last 30 Days

### [messaging](docs/messaging/README.md)

* [getUpcomingScheduledCampaignsAndCanvases](docs/messaging/README.md#getupcomingscheduledcampaignsandcanvases) - Get Upcoming Scheduled Campaigns and Canvases
* [scheduleApiTriggeredCanvases](docs/messaging/README.md#scheduleapitriggeredcanvases) - Schedule API Triggered Canvases

### [newsFeed](docs/newsfeed/README.md)

* [newsFeedCardAnalytics](docs/newsfeed/README.md#newsfeedcardanalytics) - News Feed Card Analytics
* [newsFeedCardsDetails](docs/newsfeed/README.md#newsfeedcardsdetails) - News Feed Cards Details
* [newsFeedCardsList](docs/newsfeed/README.md#newsfeedcardslist) - News Feed Cards List

### [sms](docs/sms/README.md)

* [listUserSSubscriptionGroupSms](docs/sms/README.md#listuserssubscriptiongroupsms) - List User's Subscription Group - SMS
* [listUserSSubscriptionGroupStatusSms](docs/sms/README.md#listuserssubscriptiongroupstatussms) - List User's  Subscription Group Status - SMS

### [scheduleMesages](docs/schedulemesages/README.md)

* [getUpcomingScheduledCampaignsAndCanvases](docs/schedulemesages/README.md#getupcomingscheduledcampaignsandcanvases) - Get Upcoming Scheduled Campaigns and Canvases
* [scheduleApiTriggeredCanvases](docs/schedulemesages/README.md#scheduleapitriggeredcanvases) - Schedule API Triggered Canvases

### [segment](docs/segment/README.md)

* [segmentAnalytics](docs/segment/README.md#segmentanalytics) - Segment Analytics
* [segmentDetails](docs/segment/README.md#segmentdetails) - Segment Details
* [segmentList](docs/segment/README.md#segmentlist) - Segment List

### [sessionAnalytics](docs/sessionanalytics/README.md)

* [appSessionsByTime](docs/sessionanalytics/README.md#appsessionsbytime) - App Sessions by Time

### [subscriptionGroups](docs/subscriptiongroups/README.md)

* [listUserSSubscriptionGroupSms](docs/subscriptiongroups/README.md#listuserssubscriptiongroupsms) - List User's Subscription Group - SMS
* [listUserSSubscriptionGroupStatusSms](docs/subscriptiongroups/README.md#listuserssubscriptiongroupstatussms) - List User's  Subscription Group Status - SMS

### [templates](docs/templates/README.md)

* [listAvailableContentBlocks](docs/templates/README.md#listavailablecontentblocks) - List Available Content Blocks
* [listAvailableEmailTemplates](docs/templates/README.md#listavailableemailtemplates) - List Available Email Templates
* [seeContentBlockInformation](docs/templates/README.md#seecontentblockinformation) - See Content Block Information
* [seeEmailTemplateInformation](docs/templates/README.md#seeemailtemplateinformation) - See Email Template Information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
