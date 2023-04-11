# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/braze.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/braze.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CampaignAnalyticsRequest,
  CampaignAnalyticsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CampaignAnalyticsRequest = {
  campaignId: "{{campaign_identifier}}",
  endingAt: "2020-06-28T23:59:59-5:00",
  length: "7",
};

sdk.campaign.campaignAnalytics(req).then((res: CampaignAnalyticsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### campaign

* `campaignAnalytics` - Campaign Analytics
* `campaignDetails` - Campaign Details
* `campaignList` - Campaign List
* `sendAnalytics` - Send Analytics

### canvas

* `canvasDataAnalyticsSummary` - Canvas Data Analytics Summary
* `canvasDataSeriesAnalytics` - Canvas Data Series Analytics
* `canvasDetails` - Canvas Details
* `canvasList` - Canvas List

### contentBlocks

* `listAvailableContentBlocks` - List Available Content Blocks
* `seeContentBlockInformation` - See Content Block Information

### customEvents

* `customEventsAnalytics` - Custom Events Analytics
* `customEventsList` - Custom Events List

### emailListsAndAddresses

* `queryHardBouncedEmails` - Query Hard Bounced Emails
* `queryListOfUnsubscribedEmailAddresses` - Query List of Unsubscribed Email Addresses

### emailTemplates

* `listAvailableEmailTemplates` - List Available Email Templates
* `seeEmailTemplateInformation` - See Email Template Information

### export

* `appSessionsByTime` - App Sessions by Time
* `campaignAnalytics` - Campaign Analytics
* `campaignDetails` - Campaign Details
* `campaignList` - Campaign List
* `canvasDataAnalyticsSummary` - Canvas Data Analytics Summary
* `canvasDataSeriesAnalytics` - Canvas Data Series Analytics
* `canvasDetails` - Canvas Details
* `canvasList` - Canvas List
* `customEventsAnalytics` - Custom Events Analytics
* `customEventsList` - Custom Events List
* `dailyActiveUsersByDate` - Daily Active Users by Date
* `dailyNewUsersByDate` - Daily New Users by Date
* `kpIsForDailyAppUninstallsByDate` - KPIs for Daily App Uninstalls by Date
* `monthlyActiveUsersForLast30Days` - Monthly Active Users for Last 30 Days
* `newsFeedCardAnalytics` - News Feed Card Analytics
* `newsFeedCardsDetails` - News Feed Cards Details
* `newsFeedCardsList` - News Feed Cards List
* `segmentAnalytics` - Segment Analytics
* `segmentDetails` - Segment Details
* `segmentList` - Segment List
* `sendAnalytics` - Send Analytics

### kpi

* `dailyActiveUsersByDate` - Daily Active Users by Date
* `dailyNewUsersByDate` - Daily New Users by Date
* `kpIsForDailyAppUninstallsByDate` - KPIs for Daily App Uninstalls by Date
* `monthlyActiveUsersForLast30Days` - Monthly Active Users for Last 30 Days

### messaging

* `getUpcomingScheduledCampaignsAndCanvases` - Get Upcoming Scheduled Campaigns and Canvases
* `scheduleApiTriggeredCanvases` - Schedule API Triggered Canvases

### newsFeed

* `newsFeedCardAnalytics` - News Feed Card Analytics
* `newsFeedCardsDetails` - News Feed Cards Details
* `newsFeedCardsList` - News Feed Cards List

### sms

* `listUserSSubscriptionGroupSms` - List User's Subscription Group - SMS
* `listUserSSubscriptionGroupStatusSms` - List User's  Subscription Group Status - SMS

### scheduleMesages

* `getUpcomingScheduledCampaignsAndCanvases` - Get Upcoming Scheduled Campaigns and Canvases
* `scheduleApiTriggeredCanvases` - Schedule API Triggered Canvases

### segment

* `segmentAnalytics` - Segment Analytics
* `segmentDetails` - Segment Details
* `segmentList` - Segment List

### sessionAnalytics

* `appSessionsByTime` - App Sessions by Time

### subscriptionGroups

* `listUserSSubscriptionGroupSms` - List User's Subscription Group - SMS
* `listUserSSubscriptionGroupStatusSms` - List User's  Subscription Group Status - SMS

### templates

* `listAvailableContentBlocks` - List Available Content Blocks
* `listAvailableEmailTemplates` - List Available Email Templates
* `seeContentBlockInformation` - See Content Block Information
* `seeEmailTemplateInformation` - See Email Template Information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

