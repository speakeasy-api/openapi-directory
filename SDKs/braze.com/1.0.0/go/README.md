# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/braze.com/1.0.0/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.CampaignAnalytics(ctx, operations.CampaignAnalyticsRequest{
        CampaignID: sdk.String("{{campaign_identifier}}"),
        EndingAt: sdk.String("2020-06-28T23:59:59-5:00"),
        Length: sdk.String("7"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Campaign](docs/campaign/README.md)

* [CampaignAnalytics](docs/campaign/README.md#campaignanalytics) - Campaign Analytics
* [CampaignDetails](docs/campaign/README.md#campaigndetails) - Campaign Details
* [CampaignList](docs/campaign/README.md#campaignlist) - Campaign List
* [SendAnalytics](docs/campaign/README.md#sendanalytics) - Send Analytics

### [Canvas](docs/canvas/README.md)

* [CanvasDataAnalyticsSummary](docs/canvas/README.md#canvasdataanalyticssummary) - Canvas Data Analytics Summary
* [CanvasDataSeriesAnalytics](docs/canvas/README.md#canvasdataseriesanalytics) - Canvas Data Series Analytics
* [CanvasDetails](docs/canvas/README.md#canvasdetails) - Canvas Details
* [CanvasList](docs/canvas/README.md#canvaslist) - Canvas List

### [ContentBlocks](docs/contentblocks/README.md)

* [ListAvailableContentBlocks](docs/contentblocks/README.md#listavailablecontentblocks) - List Available Content Blocks
* [SeeContentBlockInformation](docs/contentblocks/README.md#seecontentblockinformation) - See Content Block Information

### [CustomEvents](docs/customevents/README.md)

* [CustomEventsAnalytics](docs/customevents/README.md#customeventsanalytics) - Custom Events Analytics
* [CustomEventsList](docs/customevents/README.md#customeventslist) - Custom Events List

### [EmailListsAndAddresses](docs/emaillistsandaddresses/README.md)

* [QueryHardBouncedEmails](docs/emaillistsandaddresses/README.md#queryhardbouncedemails) - Query Hard Bounced Emails
* [QueryListOfUnsubscribedEmailAddresses](docs/emaillistsandaddresses/README.md#querylistofunsubscribedemailaddresses) - Query List of Unsubscribed Email Addresses

### [EmailTemplates](docs/emailtemplates/README.md)

* [ListAvailableEmailTemplates](docs/emailtemplates/README.md#listavailableemailtemplates) - List Available Email Templates
* [SeeEmailTemplateInformation](docs/emailtemplates/README.md#seeemailtemplateinformation) - See Email Template Information

### [Export](docs/export/README.md)

* [AppSessionsByTime](docs/export/README.md#appsessionsbytime) - App Sessions by Time
* [CampaignAnalytics](docs/export/README.md#campaignanalytics) - Campaign Analytics
* [CampaignDetails](docs/export/README.md#campaigndetails) - Campaign Details
* [CampaignList](docs/export/README.md#campaignlist) - Campaign List
* [CanvasDataAnalyticsSummary](docs/export/README.md#canvasdataanalyticssummary) - Canvas Data Analytics Summary
* [CanvasDataSeriesAnalytics](docs/export/README.md#canvasdataseriesanalytics) - Canvas Data Series Analytics
* [CanvasDetails](docs/export/README.md#canvasdetails) - Canvas Details
* [CanvasList](docs/export/README.md#canvaslist) - Canvas List
* [CustomEventsAnalytics](docs/export/README.md#customeventsanalytics) - Custom Events Analytics
* [CustomEventsList](docs/export/README.md#customeventslist) - Custom Events List
* [DailyActiveUsersByDate](docs/export/README.md#dailyactiveusersbydate) - Daily Active Users by Date
* [DailyNewUsersByDate](docs/export/README.md#dailynewusersbydate) - Daily New Users by Date
* [KpIsForDailyAppUninstallsByDate](docs/export/README.md#kpisfordailyappuninstallsbydate) - KPIs for Daily App Uninstalls by Date
* [MonthlyActiveUsersForLast30Days](docs/export/README.md#monthlyactiveusersforlast30days) - Monthly Active Users for Last 30 Days
* [NewsFeedCardAnalytics](docs/export/README.md#newsfeedcardanalytics) - News Feed Card Analytics
* [NewsFeedCardsDetails](docs/export/README.md#newsfeedcardsdetails) - News Feed Cards Details
* [NewsFeedCardsList](docs/export/README.md#newsfeedcardslist) - News Feed Cards List
* [SegmentAnalytics](docs/export/README.md#segmentanalytics) - Segment Analytics
* [SegmentDetails](docs/export/README.md#segmentdetails) - Segment Details
* [SegmentList](docs/export/README.md#segmentlist) - Segment List
* [SendAnalytics](docs/export/README.md#sendanalytics) - Send Analytics

### [Kpi](docs/kpi/README.md)

* [DailyActiveUsersByDate](docs/kpi/README.md#dailyactiveusersbydate) - Daily Active Users by Date
* [DailyNewUsersByDate](docs/kpi/README.md#dailynewusersbydate) - Daily New Users by Date
* [KpIsForDailyAppUninstallsByDate](docs/kpi/README.md#kpisfordailyappuninstallsbydate) - KPIs for Daily App Uninstalls by Date
* [MonthlyActiveUsersForLast30Days](docs/kpi/README.md#monthlyactiveusersforlast30days) - Monthly Active Users for Last 30 Days

### [Messaging](docs/messaging/README.md)

* [GetUpcomingScheduledCampaignsAndCanvases](docs/messaging/README.md#getupcomingscheduledcampaignsandcanvases) - Get Upcoming Scheduled Campaigns and Canvases
* [ScheduleAPITriggeredCanvases](docs/messaging/README.md#scheduleapitriggeredcanvases) - Schedule API Triggered Canvases

### [NewsFeed](docs/newsfeed/README.md)

* [NewsFeedCardAnalytics](docs/newsfeed/README.md#newsfeedcardanalytics) - News Feed Card Analytics
* [NewsFeedCardsDetails](docs/newsfeed/README.md#newsfeedcardsdetails) - News Feed Cards Details
* [NewsFeedCardsList](docs/newsfeed/README.md#newsfeedcardslist) - News Feed Cards List

### [Sms](docs/sms/README.md)

* [ListUserSSubscriptionGroupSms](docs/sms/README.md#listuserssubscriptiongroupsms) - List User's Subscription Group - SMS
* [ListUserSSubscriptionGroupStatusSms](docs/sms/README.md#listuserssubscriptiongroupstatussms) - List User's  Subscription Group Status - SMS

### [ScheduleMesages](docs/schedulemesages/README.md)

* [GetUpcomingScheduledCampaignsAndCanvases](docs/schedulemesages/README.md#getupcomingscheduledcampaignsandcanvases) - Get Upcoming Scheduled Campaigns and Canvases
* [ScheduleAPITriggeredCanvases](docs/schedulemesages/README.md#scheduleapitriggeredcanvases) - Schedule API Triggered Canvases

### [Segment](docs/segment/README.md)

* [SegmentAnalytics](docs/segment/README.md#segmentanalytics) - Segment Analytics
* [SegmentDetails](docs/segment/README.md#segmentdetails) - Segment Details
* [SegmentList](docs/segment/README.md#segmentlist) - Segment List

### [SessionAnalytics](docs/sessionanalytics/README.md)

* [AppSessionsByTime](docs/sessionanalytics/README.md#appsessionsbytime) - App Sessions by Time

### [SubscriptionGroups](docs/subscriptiongroups/README.md)

* [ListUserSSubscriptionGroupSms](docs/subscriptiongroups/README.md#listuserssubscriptiongroupsms) - List User's Subscription Group - SMS
* [ListUserSSubscriptionGroupStatusSms](docs/subscriptiongroups/README.md#listuserssubscriptiongroupstatussms) - List User's  Subscription Group Status - SMS

### [Templates](docs/templates/README.md)

* [ListAvailableContentBlocks](docs/templates/README.md#listavailablecontentblocks) - List Available Content Blocks
* [ListAvailableEmailTemplates](docs/templates/README.md#listavailableemailtemplates) - List Available Email Templates
* [SeeContentBlockInformation](docs/templates/README.md#seecontentblockinformation) - See Content Block Information
* [SeeEmailTemplateInformation](docs/templates/README.md#seeemailtemplateinformation) - See Email Template Information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
