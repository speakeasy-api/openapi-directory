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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CampaignAnalyticsRequest{
        CampaignID: "{{campaign_identifier}}",
        EndingAt: "2020-06-28T23:59:59-5:00",
        Length: "7",
    }

    ctx := context.Background()
    res, err := s.Campaign.CampaignAnalytics(ctx, req)
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


### Campaign

* `CampaignAnalytics` - Campaign Analytics
* `CampaignDetails` - Campaign Details
* `CampaignList` - Campaign List
* `SendAnalytics` - Send Analytics

### Canvas

* `CanvasDataAnalyticsSummary` - Canvas Data Analytics Summary
* `CanvasDataSeriesAnalytics` - Canvas Data Series Analytics
* `CanvasDetails` - Canvas Details
* `CanvasList` - Canvas List

### ContentBlocks

* `ListAvailableContentBlocks` - List Available Content Blocks
* `SeeContentBlockInformation` - See Content Block Information

### CustomEvents

* `CustomEventsAnalytics` - Custom Events Analytics
* `CustomEventsList` - Custom Events List

### EmailListsAndAddresses

* `QueryHardBouncedEmails` - Query Hard Bounced Emails
* `QueryListOfUnsubscribedEmailAddresses` - Query List of Unsubscribed Email Addresses

### EmailTemplates

* `ListAvailableEmailTemplates` - List Available Email Templates
* `SeeEmailTemplateInformation` - See Email Template Information

### Export

* `AppSessionsByTime` - App Sessions by Time
* `CampaignAnalytics` - Campaign Analytics
* `CampaignDetails` - Campaign Details
* `CampaignList` - Campaign List
* `CanvasDataAnalyticsSummary` - Canvas Data Analytics Summary
* `CanvasDataSeriesAnalytics` - Canvas Data Series Analytics
* `CanvasDetails` - Canvas Details
* `CanvasList` - Canvas List
* `CustomEventsAnalytics` - Custom Events Analytics
* `CustomEventsList` - Custom Events List
* `DailyActiveUsersByDate` - Daily Active Users by Date
* `DailyNewUsersByDate` - Daily New Users by Date
* `KpIsForDailyAppUninstallsByDate` - KPIs for Daily App Uninstalls by Date
* `MonthlyActiveUsersForLast30Days` - Monthly Active Users for Last 30 Days
* `NewsFeedCardAnalytics` - News Feed Card Analytics
* `NewsFeedCardsDetails` - News Feed Cards Details
* `NewsFeedCardsList` - News Feed Cards List
* `SegmentAnalytics` - Segment Analytics
* `SegmentDetails` - Segment Details
* `SegmentList` - Segment List
* `SendAnalytics` - Send Analytics

### Kpi

* `DailyActiveUsersByDate` - Daily Active Users by Date
* `DailyNewUsersByDate` - Daily New Users by Date
* `KpIsForDailyAppUninstallsByDate` - KPIs for Daily App Uninstalls by Date
* `MonthlyActiveUsersForLast30Days` - Monthly Active Users for Last 30 Days

### Messaging

* `GetUpcomingScheduledCampaignsAndCanvases` - Get Upcoming Scheduled Campaigns and Canvases
* `ScheduleAPITriggeredCanvases` - Schedule API Triggered Canvases

### NewsFeed

* `NewsFeedCardAnalytics` - News Feed Card Analytics
* `NewsFeedCardsDetails` - News Feed Cards Details
* `NewsFeedCardsList` - News Feed Cards List

### Sms

* `ListUserSSubscriptionGroupSms` - List User's Subscription Group - SMS
* `ListUserSSubscriptionGroupStatusSms` - List User's  Subscription Group Status - SMS

### ScheduleMesages

* `GetUpcomingScheduledCampaignsAndCanvases` - Get Upcoming Scheduled Campaigns and Canvases
* `ScheduleAPITriggeredCanvases` - Schedule API Triggered Canvases

### Segment

* `SegmentAnalytics` - Segment Analytics
* `SegmentDetails` - Segment Details
* `SegmentList` - Segment List

### SessionAnalytics

* `AppSessionsByTime` - App Sessions by Time

### SubscriptionGroups

* `ListUserSSubscriptionGroupSms` - List User's Subscription Group - SMS
* `ListUserSSubscriptionGroupStatusSms` - List User's  Subscription Group Status - SMS

### Templates

* `ListAvailableContentBlocks` - List Available Content Blocks
* `ListAvailableEmailTemplates` - List Available Email Templates
* `SeeContentBlockInformation` - See Content Block Information
* `SeeEmailTemplateInformation` - See Email Template Information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
