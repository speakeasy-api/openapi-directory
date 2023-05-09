# export

## Overview

With this collection of endpoints, you will be able to access and export various levels of details on your users, segments, campaigns, and Canvases. 

Please be sure to reference the correct Instance when making API requests.



### Available Operations

* [appSessionsByTime](#appsessionsbytime) - App Sessions by Time
* [campaignAnalytics](#campaignanalytics) - Campaign Analytics
* [campaignDetails](#campaigndetails) - Campaign Details
* [campaignList](#campaignlist) - Campaign List
* [canvasDataAnalyticsSummary](#canvasdataanalyticssummary) - Canvas Data Analytics Summary
* [canvasDataSeriesAnalytics](#canvasdataseriesanalytics) - Canvas Data Series Analytics
* [canvasDetails](#canvasdetails) - Canvas Details
* [canvasList](#canvaslist) - Canvas List
* [customEventsAnalytics](#customeventsanalytics) - Custom Events Analytics
* [customEventsList](#customeventslist) - Custom Events List
* [dailyActiveUsersByDate](#dailyactiveusersbydate) - Daily Active Users by Date
* [dailyNewUsersByDate](#dailynewusersbydate) - Daily New Users by Date
* [kpIsForDailyAppUninstallsByDate](#kpisfordailyappuninstallsbydate) - KPIs for Daily App Uninstalls by Date
* [monthlyActiveUsersForLast30Days](#monthlyactiveusersforlast30days) - Monthly Active Users for Last 30 Days
* [newsFeedCardAnalytics](#newsfeedcardanalytics) - News Feed Card Analytics
* [newsFeedCardsDetails](#newsfeedcardsdetails) - News Feed Cards Details
* [newsFeedCardsList](#newsfeedcardslist) - News Feed Cards List
* [segmentAnalytics](#segmentanalytics) - Segment Analytics
* [segmentDetails](#segmentdetails) - Segment Details
* [segmentList](#segmentlist) - Segment List
* [sendAnalytics](#sendanalytics) - Send Analytics

## appSessionsByTime

This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.

### Components Used
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "sessions" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppSessionsByTimeRequest;
import org.openapis.openapi.models.operations.AppSessionsByTimeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppSessionsByTimeRequest req = new AppSessionsByTimeRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "14";
                segmentId = "{{segment_identifier}}";
                unit = "day";
            }};            

            AppSessionsByTimeResponse res = sdk.export.appSessionsByTime(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## campaignAnalytics

This endpoint allows you to retrieve a daily series of various stats for a campaign over time. Data returned includes how many messages were sent, opened, clicked, converted, etc., broken down by message channel. 

### Components Used
-[Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)


### Responses

#### Multi-Channel Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "messages" : {
                "ios_push" : [
                    {
                      "variation_name": "iOS_Push",
                      "sent" : (int),
                      "direct_opens" : (int),
                      "total_opens" : (int),
                      "bounces" : (int),
                      "body_clicks" : (int)
                      "revenue": 0,
                      "unique_recipients": 1,
                      "conversions": 0,
                      "conversions_by_send_time": 0,
                      "conversions1": 0,
                      "conversions1_by_send_time": 0,
                      "conversions2": 0,
                      "conversions2_by_send_time": 0,
                      "conversions3": 0,
                      "conversions3_by_send_time": 0,
                      "carousel_slide_[NUM]_[TITLE]_click": (optional, int),
                      "notif_button_[NUM]_[TITLE]_click": (optional, int)
                    }
                ],
                "android_push" : [
                    {
                      "sent" : (int),
                      "direct_opens" : (int),
                      "total_opens" : (int),
                      "bounces" : (int),
                      "body_clicks" : (int)
                    }
                ],
                "webhook": [
                    {
                      "sent": (int),
                      "errors": (int)
                    }
                ],
                "email" : [
                    {
                      "sent": (int),
                      "opens": (int),
                      "unique_opens": (int),
                      "clicks": (int),
                      "unique_clicks": (int),
                      "unsubscribes": (int),
                      "bounces": (int),
                      "delivered": (int),
                      "reported_spam": (int)
                    }
                ],
                "sms" : [
                  {
                    "sent": (int),
                    "delivered": (int),
                    "undelivered": (int),
                    "delivery_failed": (int)
                  }
                ]
              },
           "conversions_by_send_time": (optional, int),
           "conversions1_by_send_time": (optional, int),
           "conversions2_by_send_time": (optional, int),
           "conversions3_by_send_time": (optional, int),
           "conversions": (int),
           "conversions1": (optional, int),
           "conversions2": (optional, int),
           "conversions3": (optional, int),
           "unique_recipients": (int),
           "revenue": (optional, float)
        },
        ...
    ],
    ...
}
```

#### Multivariate Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "conversions" : (int),
            "revenue": (float),
            "conversions_by_send_time": (int),
            "messages" : {
               "trigger_in_app_message": [{
      				"variation_name": (optional, string),
      				"impressions": (int),
      				"clicks": (int),
      				"first_button_clicks": (int),
      				"second_button_clicks": (int),
      				"revenue": (optional, float),,
      				"unique_recipients": (int),
      				"conversions": (optional, int),
      				"conversions_by_send_time": (optional, int),
      				"conversions1": (optional, int),
      				"conversions1_by_send_time": (optional, int),
      				"conversions2": (optional, int),
      				"conversions2_by_send_time": (optional, int),
      				"conversions3": (optional, int),
      				"conversions3_by_send_time": (optional, int)
      			}, {
      				"variation_name": (optional, string),
      				"impressions": (int),
      				"clicks": (int),
      				"first_button_clicks": (int),
      				"second_button_clicks": (int),
      				"revenue": (optional, float),,
      				"unique_recipients": (int),
      				"conversions": (optional, int),
      				"conversions_by_send_time": (optional, int),
      				"conversions1": (optional, int),
      				"conversions1_by_send_time": (optional, int),
      				"conversions2": (optional, int),
      				"conversions2_by_send_time": (optional, int),
      				"conversions3": (optional, int).
      				"conversions3_by_send_time": (optional, int)
      			}, {
      				"variation_name": (optional, string),
      				"revenue": (optional, float),,
      				"unique_recipients": (int),
      				"conversions": (optional, int),
      				"conversions_by_send_time": (optional, int),
      				"conversions1": (optional, int),
      				"conversions1_by_send_time": (optional, int),
      				"conversions2": (optional, int),
      				"conversions2_by_send_time": (optional, int),
      				"conversions3": (optional, int),
      				"conversions3_by_send_time": (optional, int),
      				"enrolled": (optional, int)
      			}]
      		},
      		"conversions_by_send_time": (optional, int),
      		"conversions1_by_send_time": (optional, int),
      		"conversions2_by_send_time": (optional, int),
      		"conversions3_by_send_time": (optional, int),
      		"conversions": (optional, int,
      		"conversions1": (optional, int),
      		"conversions2": (optional, int),
      		"conversions3": (optional, int),
      		"unique_recipients": (int),
      		"revenue": (optional, float)
         }],
         ...
}
```

Possible message types are `email`, `in_app_message`, `webhook`, `android_push`, `apple_push`, `kindle_push`, `web_push`, `windows_phone8_push`, and `windows_universal_push`. All push message types will have the same statistics shown for `android_push` above.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CampaignAnalyticsRequest;
import org.openapis.openapi.models.operations.CampaignAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignAnalyticsRequest req = new CampaignAnalyticsRequest() {{
                campaignId = "{{campaign_identifier}}";
                endingAt = "2020-06-28T23:59:59-5:00";
                length = "7";
            }};            

            CampaignAnalyticsResponse res = sdk.export.campaignAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## campaignDetails

This endpoint allows you to retrieve relevant information on a specified campaign, which can be identified by the `campaign_id`. 

> The campaign_id for API campaigns can be found on the Developer Console page and the campaign details page within your dashboard or you can use the Campaign List Endpoint.

### Components Used
- [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)


### Campaign Details Endpoint API Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "created_at" : (string) date created as ISO 8601 date,
    "updated_at" : (string) date last updated as ISO 8601 date,
    "archived": (boolean) whether this Campaign is archived,
    "draft": (boolean) whether this Campaign is a draft,
    "name" : (string) campaign name,
    "description" : (string) campaign description,
    "schedule_type" : (string) type of scheduling action,
    "channels" : (array) list of channels to send via,
    "first_sent" : (string) date and hour of first sent as ISO 8601 date,
    "last_sent" : (string) date and hour of last sent as ISO 8601 date,
    "tags" : (array) tag names associated with the campaign,
    "messages": {
        "message_variation_id": (string) { // <=This is the actual id
            "channel": (string) channel type of the message (as in, "email", "ios_push", "webhook", "content_card", "in-app_message", "sms"),
            "name": (string) name of the message in the Dashboard (eg., "Variation 1")
            ... channel-specific fields for this message, see below ...
        }
    },
    "conversion_behaviors": (array) conversion event behaviors assigned to the campaign (see below)
}
```

#### Messages

The `messages` response will contain information about each message. Example message responses for channels are below:

##### Push Channels

```json
{
    "channel": (string) description of the channel, such as "ios_push" or "android_push"
    "alert": (string) alert body text,
    "extras": (hash) any key value pairs provided
}
```

##### Email Channel

```json
{
    "channel": "email",
    "subject": (string) subject,
    "body": (string) HTML body,
    "from": (string) from address and display name,
    "reply_to": (string) reply-to for message, if different than "from" address,
    "title": (string) name of the email,
    "extras": (hash) any key value pairs provided
}
```

##### Content Card Channel

```json
{
    "channel": "content_cards",
    "name": (string) name of variant,
    "extras": (hash) any key value pairs provided; only present if at least one key-value pair has been set
}
```

##### Webhook Channel

```json
{
    "channel": "webhook",
    "url": (string) url for webhook,
    "body": (string) payload body,
    "type": (string) body content type,
    "headers": (hash) specified request headers,
    "method": (string) HTTP method (e.g., "POST" or "GET"),
}
```

##### SMS Channel

```json
{
  "channel": "sms",
  "body": (string) payload body,
  "from": (string) list of numbers associated with the subscription group,
  "subscription_group_id": (string) API id of the subscription group targeted in the SMS message
}
```

##### Control Messages

```json
{
    "channel": (string) description of the channel that the control is for,
    "type": "control"
}
```

#### Conversion Behaviors

The `conversion_behaviors` array will contain information about each conversion event behavior set for the campaign. These behaviors are in order as set by the campaign. For example, Conversion Event A will be the first item in the array, Conversion Event B will be second, etc. Example conversion event behavior responses for are below:

##### Clicks Email

```json
{
    "type": "Clicks Email",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
}
```

##### Opens Email

```json
{
    "type": "Opens Email",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
}
```

##### Makes Purchase (any purchase)

```json
{
    "type": "Makes Any Purchase",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
}
```

##### Makes Purchase (specific product)

```json
{
    "type": "Makes Specific Purchase",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
    "product": (string) name of the product, i.e. - "Feline Body Armor"
}
```

##### Performs Custom Event

```json
{
    "type": "Performs Custom Event",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
    "custom_event_name": (string) name of the event, i.e. - "Used Feline Body Armor"
}
```

##### Upgrades App

```json
{
    "type": "Upgrades App",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
    "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
}
```

##### Uses App

```json
{
    "type": "Starts Session",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
    "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CampaignDetailsRequest;
import org.openapis.openapi.models.operations.CampaignDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignDetailsRequest req = new CampaignDetailsRequest() {{
                campaignId = "{{campaign_identifier}}";
            }};            

            CampaignDetailsResponse res = sdk.export.campaignDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## campaignList

This endpoint allows you to export a list of campaigns, each of which will include its name, Campaign API Identifier, whether it is an API Campaign, and Tags associated with the campaign. The campaigns are returned in groups of 100 sorted by time of creation (oldest to newest by default).

## Campaign List Endpoint API Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "campaigns" : [
        {
            "id" : (string) Campaign API Identifier,
            "last_edited": (ISO 8601 string) the last edited time for the message 
            "name" : (string) campaign name,
            "is_api_campaign" : (boolean) whether the campaign is an API Campaign,
            "tags" : (array) tag names associated with the campaign
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CampaignListRequest;
import org.openapis.openapi.models.operations.CampaignListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignListRequest req = new CampaignListRequest() {{
                includeArchived = "false";
                lastEditTimeGt = "2020-06-28T23:59:59-5:00";
                page = "0";
                sortDirection = "desc";
            }};            

            CampaignListResponse res = sdk.export.campaignList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## canvasDataAnalyticsSummary

This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.

### Components Used
- [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "data": {
    "name": (string) Canvas name,
    "total_stats": {
      "revenue": (float),
      "conversions": (int),
      "conversions_by_entry_time": (int),
      "entries": (int)
    },
    "variant_stats": (optional) {
      "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
        "name": (string) name of variant,
        "revenue": (float),
        "conversions": (int),
        "entries": (int)
      },
      ... (more variants)
    },
    "step_stats": (optional) {
      "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
        "name": (string) name of step,
        "revenue": (float),
        "conversions": (int),
        "conversions_by_entry_time": (int),
        "messages": {
          "android_push": (name of channel) [
            {
              "sent": (int),
              "opens": (int),
              "influenced_opens": (int),
              "bounces": (int)
              ... (more stats for channel)
            }
          ],
          ... (more channels)
        }
      },
      ... (more steps)
    }
  },
  "message": (required, string) the status of the export, returns 'success' when completed without errors
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CanvasDataAnalyticsSummaryRequest;
import org.openapis.openapi.models.operations.CanvasDataAnalyticsSummaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CanvasDataAnalyticsSummaryRequest req = new CanvasDataAnalyticsSummaryRequest() {{
                canvasId = "{{canvas_id}}";
                endingAt = "2018-05-30T23:59:59-5:00";
                includeDeletedStepData = "true";
                includeStepBreakdown = "true";
                includeVariantBreakdown = "true";
                length = "5";
                startingAt = "2018-05-28T23:59:59-5:00";
            }};            

            CanvasDataAnalyticsSummaryResponse res = sdk.export.canvasDataAnalyticsSummary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## canvasDataSeriesAnalytics

This endpoint allows you to export time series data for a Canvas.

### Components Used
- [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response
```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "data": {
    "name": (string) Canvas name,
    "stats": [
      {
        "time": (string) date as ISO 8601 date,
        "total_stats": {
          "revenue": (float),
          "conversions": (int),
          "conversions_by_entry_time": (int),
          "entries": (int)
        },
        "variant_stats": (optional) {
          "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
            "name": (string) name of variant,
            "revenue": (int),
            "conversions": (int),
            "conversions_by_entry_time": (int),
            "entries": (int)
          },
          ... (more variants)
        },
        "step_stats": (optional) {
          "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
            "name": (string) name of step,
            "revenue": (float),
            "conversions": (int),
            "conversions_by_entry_time": (int),
            "messages": {
              "email": [
                {
                  "sent": (int),
                  "opens": (int),
                  "unique_opens": (int),
                  "clicks": (int),
                  ... (more stats)
                }
              ],
              ... (more channels)
            }
          },
          ... (more steps)
        }
      },
      ... (more stats by time)
    ]
  },
  "message": (required, string) the status of the export, returns 'success' when completed without errors
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CanvasDataSeriesAnalyticsRequest;
import org.openapis.openapi.models.operations.CanvasDataSeriesAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CanvasDataSeriesAnalyticsRequest req = new CanvasDataSeriesAnalyticsRequest() {{
                canvasId = "{{canvas_id}}";
                endingAt = "2018-05-30T23:59:59-5:00";
                includeDeletedStepData = "true";
                includeStepBreakdown = "true";
                includeVariantBreakdown = "true";
                length = "10";
                startingAt = "2018-05-28T23:59:59-5:00";
            }};            

            CanvasDataSeriesAnalyticsResponse res = sdk.export.canvasDataSeriesAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## canvasDetails

This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.

### Components Used
- [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "created_at": (string) date created as ISO 8601 date,
  "updated_at": (string) date updated as ISO 8601 date,
  "name": (string) Canvas name,
  "description": (string) Canvas description,
  "archived": (boolean) whether this Canvas is archived,
  "draft": (boolean) whether this Canvas is a draft,
  "schedule_type": (string) type of scheduling action,
  "first_entry": (string) date of first entry as ISO 8601 date,
  "last_entry": (string) date of last entry as ISO 8601 date,
  "channels": (array of strings) step channels used with Canvas,
  "variants": [
    {
      "name": (string) name of variant,
      "id": (string) API identifier of the variant,
      "first_step_ids": (array of strings) API identifiers for first steps in variant,
      "first_step_id": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)
    },
    ... (more variations)
  ],
  "tags": (array of strings) tag names associated with the Canvas,
  "steps": [
    {
      "name": (string) name of step,
      "id": (string) API identifier of the step,
      "next_step_ids": (array of strings) API identifiers of steps following step,
      "channels": (array of strings) channels used in step,
      "messages": {
          "message_variation_id": (string) {  // <=This is the actual id
              "channel": (string) channel type of the message (eg., "email"),
              ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...
          }
      }
    },
    ... (more steps)
  ],
  "message": (required, string) the status of the export, returns 'success' when completed without errors
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CanvasDetailsRequest;
import org.openapis.openapi.models.operations.CanvasDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CanvasDetailsRequest req = new CanvasDetailsRequest() {{
                canvasId = "{{canvas_identifier}}";
            }};            

            CanvasDetailsResponse res = sdk.export.canvasDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## canvasList

This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).

> Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "canvases" : [
  	{
  		"id" : (string) Canvas API Identifier,
  		"last_edited": (ISO 8601 string) the last edited time for the message,
  		"name" : (string) Canvas name,
  		"tags" : (array) tag names associated with the Canvas,
  	},
    ... (more Canvases)
  ],
  "message": (required, string) the status of the export, returns 'success' when completed without errors
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CanvasListRequest;
import org.openapis.openapi.models.operations.CanvasListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CanvasListRequest req = new CanvasListRequest() {{
                includeArchived = "false";
                lastEditTimeGt = "2020-06-28T23:59:59-5:00";
                page = "1";
                sortDirection = "desc";
            }};            

            CanvasListResponse res = sdk.export.canvasList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customEventsAnalytics

This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.

### Components Used
-[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "count" : (int)
        },
        ...
    ]
}
```

### Fatal Error Response Codes
The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.

| Error Code       | Reason / Cause                                                   |
| ---------------- | ---------------------------------------------------------------- |
| 400 Bad Request  | Bad Syntax                                                       |
| 401 Unauthorized | Unknown or missing REST API Key                                  |
| 429 Rate Limited | Over rate limit                                                  |
| 5XX              | Internal server error, you should retry with exponential backoff |

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomEventsAnalyticsRequest;
import org.openapis.openapi.models.operations.CustomEventsAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomEventsAnalyticsRequest req = new CustomEventsAnalyticsRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2014-12-10T23:59:59-05:00";
                event = "event_name";
                length = "24";
                segmentId = "{{segment_identifier}}";
                unit = "hour";
            }};            

            CustomEventsAnalyticsResponse res = sdk.export.customEventsAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customEventsList

This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "events" : [
        "Event A",
        "Event B",
        "Event C",
        ...
    ]
}
```

### Fatal Error Response Codes

The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.

| Error Code       | Reason / Cause                                                   |
| ---------------- | ---------------------------------------------------------------- |
| 400 Bad Request  | Bad Syntax                                                       |
| 401 Unauthorized | Unknown or missing REST API Key                                  |
| 429 Rate Limited | Over rate limit                                                  |
| 5XX              | Internal server error, you should retry with exponential backoff |

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomEventsListRequest;
import org.openapis.openapi.models.operations.CustomEventsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomEventsListRequest req = new CustomEventsListRequest() {{
                page = "3";
            }};            

            CustomEventsListResponse res = sdk.export.customEventsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dailyActiveUsersByDate

This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "dau" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DailyActiveUsersByDateRequest;
import org.openapis.openapi.models.operations.DailyActiveUsersByDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DailyActiveUsersByDateRequest req = new DailyActiveUsersByDateRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "10";
            }};            

            DailyActiveUsersByDateResponse res = sdk.export.dailyActiveUsersByDate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dailyNewUsersByDate

This endpoint allows you to retrieve a daily series of the total number of new users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "new_users" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DailyNewUsersByDateRequest;
import org.openapis.openapi.models.operations.DailyNewUsersByDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DailyNewUsersByDateRequest req = new DailyNewUsersByDateRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "14";
            }};            

            DailyNewUsersByDateResponse res = sdk.export.dailyNewUsersByDate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kpIsForDailyAppUninstallsByDate

This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "uninstalls" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KpIsForDailyAppUninstallsByDateRequest;
import org.openapis.openapi.models.operations.KpIsForDailyAppUninstallsByDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KpIsForDailyAppUninstallsByDateRequest req = new KpIsForDailyAppUninstallsByDateRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "14";
            }};            

            KpIsForDailyAppUninstallsByDateResponse res = sdk.export.kpIsForDailyAppUninstallsByDate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monthlyActiveUsersForLast30Days

This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "mau" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonthlyActiveUsersForLast30DaysRequest;
import org.openapis.openapi.models.operations.MonthlyActiveUsersForLast30DaysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonthlyActiveUsersForLast30DaysRequest req = new MonthlyActiveUsersForLast30DaysRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-05:00";
                length = "7";
            }};            

            MonthlyActiveUsersForLast30DaysResponse res = sdk.export.monthlyActiveUsersForLast30Days(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newsFeedCardAnalytics

This endpoint allows you to retrieve a daily series of engagement stats for a card over time.

### Components Used
- [Card ID](https://www.braze.com/docs/api/identifier_types/)
- [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "clicks" : (int) ,
            "impressions" : (int),
            "unique_clicks" : (int),
            "unique_impressions" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsFeedCardAnalyticsRequest;
import org.openapis.openapi.models.operations.NewsFeedCardAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewsFeedCardAnalyticsRequest req = new NewsFeedCardAnalyticsRequest() {{
                cardId = "{{card_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "14";
                unit = "day";
            }};            

            NewsFeedCardAnalyticsResponse res = sdk.export.newsFeedCardAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newsFeedCardsDetails

This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.

### Components Used
- [Card ID](https://www.braze.com/docs/api/identifier_types/)
- [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) The status of the export, returns 'success' when completed without errors,
    "created_at" : (string) Date created as ISO 8601 date,
    "updated_at" : (string) Date last updated as ISO 8601 date,
    "name" : (string) Card name,
    "publish_at" : (string) Date card was published as ISO 8601 date,
    "end_at" : (string) Date card will stop displaying for users as ISO 8601 date,
    "tags" : (array) Tag names associated with the card,
    "title" : (string) Title of the card,
    "image_url" : (string) Image URL used by this card,
    "extras" : (dictionary) Dictionary containing key-value pair data attached to this card,
    "description" : (string) Description text used by this card,
    "archived": (boolean) whether this Card is archived,
    "draft": (boolean) whether this Card is a draft,
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsFeedCardsDetailsRequest;
import org.openapis.openapi.models.operations.NewsFeedCardsDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewsFeedCardsDetailsRequest req = new NewsFeedCardsDetailsRequest() {{
                cardId = "{{card_identifier}}";
            }};            

            NewsFeedCardsDetailsResponse res = sdk.export.newsFeedCardsDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newsFeedCardsList

This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "cards" : [
        {
            "id" : (string) Card API Identifier,
            "type" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
            "title" : (string) title of the card,
            "tags" : (array) tag names associated with the card
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsFeedCardsListRequest;
import org.openapis.openapi.models.operations.NewsFeedCardsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewsFeedCardsListRequest req = new NewsFeedCardsListRequest() {{
                includeArchived = "true";
                page = "1";
                sortDirection = "desc";
            }};            

            NewsFeedCardsListResponse res = sdk.export.newsFeedCardsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## segmentAnalytics

This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "size" : (int) size of the segment on that date
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SegmentAnalyticsRequest;
import org.openapis.openapi.models.operations.SegmentAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SegmentAnalyticsRequest req = new SegmentAnalyticsRequest() {{
                endingAt = "2018-06-27T23:59:59-5:00";
                length = "14";
                segmentId = "{{segment_identifier}}";
            }};            

            SegmentAnalyticsResponse res = sdk.export.segmentAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## segmentDetails

This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
      "message": (required, string) the status of the export, returns 'success' when completed without errors,
      "created_at" : (string) date created as ISO 8601 date,
      "updated_at" : (string) date last updated as ISO 8601 date,
      "name" : (string) segment name,
      "description" : (string) human-readable description of filters,
      "text_description" : (string) segment description, 
      "tags" : (array) tag names associated with the segment
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SegmentDetailsRequest;
import org.openapis.openapi.models.operations.SegmentDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SegmentDetailsRequest req = new SegmentDetailsRequest() {{
                segmentId = "{{segment_identifier}}";
            }};            

            SegmentDetailsResponse res = sdk.export.segmentDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## segmentList

This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "segments" : [
        {
            "id" : (string) Segment API Identifier,
            "name" : (string) segment name,
            "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
            "tags" : (array) tag names associated with the segment
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SegmentListRequest;
import org.openapis.openapi.models.operations.SegmentListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SegmentListRequest req = new SegmentListRequest() {{
                page = "1";
                sortDirection = "desc";
            }};            

            SegmentListResponse res = sdk.export.segmentList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendAnalytics

This endpoint allows you to retrieve a daily series of various stats for a tracked `send_id`. Braze stores send analytics for 14 days after the send.

Campaign conversions will be attributed towards the most recent send id that a given user has received from the campaign.

> The `send_id` is only generated for API campaign sends targeting segments, connected audiences or broadcasts. When relevant, the `send_id` is included in response for the `messages/send`, `messages/schedule`, `campaign/trigger/send` and `campaign/trigger/schedule` endpoints.

### Components Used
- [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)

### Send Analytics Endpoint API Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
            "variation_name": (string) variation name,
            "sent": (int) the number of sends,
            "delivered": (int) the number of messages successfully delivered,
            "undelivered": (int) the number of undelivered,
            "delivery_failed": (int) the number of rejected,
            "direct_opens": (int) the number of direct opens,
            "total_opens": (int) the number of total opens,
            "bounces": (int) the number of bounces,
            "body_clicks": (int) the number of body clicks,
            "revenue": (float) the number of dollars of revenue (USD),
            "unique_recipients": (int) the number of unique recipients,
            "conversions": (int) the number of conversions,
            "conversions_by_send_time": (int) the number of conversions,
            "conversions1": (int, optional) the number of conversions for the second conversion event,
            "conversions1_by_send_time": (int, optional) the number of conversions for the second conversion event by send time,
            "conversions2": (int, optional) the number of conversions for the third conversion event,
            "conversions2_by_send_time": (int, optional) the number of conversions for the third conversion event by send time,
            "conversions3": (int, optional) the number of conversions for the fourth conversion event,
            "conversions3_by_send_time": (int, optional) the number of conversions for the fourth conversion event by send time
          }
        ]
      },
      "conversions_by_send_time": 0,
      "conversions1_by_send_time": 0,
      "conversions2_by_send_time": 0,
      "conversions3_by_send_time": 0,
      "conversions": 0,
      "conversions1": 0,
      "conversions2": 0,
      "conversions3": 0,
      "unique_recipients": 1,
      "revenue": 0
    }
  ],
  "message": "success"
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendAnalyticsRequest;
import org.openapis.openapi.models.operations.SendAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendAnalyticsRequest req = new SendAnalyticsRequest() {{
                campaignId = "{{campaign_identifier}}";
                endingAt = "2014-12-10T23:59:59-05:00";
                length = "30";
                sendId = "{{send_identifier}}";
            }};            

            SendAnalyticsResponse res = sdk.export.sendAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
