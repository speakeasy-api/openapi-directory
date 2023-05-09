# Messaging

## Overview

The Braze messaging API provides you with two distinct options for sending messages to your users. You can provide the message contents and configuration in the API request with the /messages/send and /messages/schedule endpoints. Alternatively, you can manage the details of your message with an API-Triggered Delivery campaign in the dashboard and just control when and to whom it is sent with the campaigns/trigger/send and campaigns/trigger/schedule endpoints. The following sections will detail the request specification for both methods.

The examples below contain the URL https://rest.iad-01.braze.com, but some customers will need to use a different endpoint URL, for example if you are hosted in Braze’s EU data center or have a dedicated Braze installation. Your Success Manager will inform you if you should use a different endpoint URL.

Similarly to other campaigns, you can limit the number of times a particular user can receive a Messaging API campaign by configuring re-eligibility settings in the Braze Dashboard. Braze will not deliver API messages to users that haven’t become re-eligible for the campaign regardless of how many API requests are sent.



### Available Operations

* [GetUpcomingScheduledCampaignsAndCanvases](#getupcomingscheduledcampaignsandcanvases) - Get Upcoming Scheduled Campaigns and Canvases
* [ScheduleAPITriggeredCanvases](#scheduleapitriggeredcanvases) - Schedule API Triggered Canvases

## GetUpcomingScheduledCampaignsAndCanvases

You can view a JSON list of upcoming and scheduled Campaigns and Canvases using the following information and parameters. The endpoint will return information about scheduled Campaigns and entry Canvases between now and the designated end_time (ISO 8601 format) specified in the request. Daily, recurring messages will only appear once with their next occurrence. Results returned in this endpoint are only for Campaigns and Canvases created and scheduled in Braze.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "scheduled_broadcasts": [
      # Example Canvas
      {
        "name" => String,
        "id" => String,
        "type" => "Canvas",
        "tags" => [String tag names],
        "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
        "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
      },
      # Example Campaign
      {
        "name" => String,
        "id" => String,
        "type" => "Campaign",
        "tags" => [String tag names],
        "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
        "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
      },
    ]
}
```

### Example Usage

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
    res, err := s.Messaging.GetUpcomingScheduledCampaignsAndCanvases(ctx, operations.GetUpcomingScheduledCampaignsAndCanvasesRequest{
        EndTime: sdk.String("2018-09-01T00:00:00-04:00"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ScheduleAPITriggeredCanvases

Use this endpoint to trigger API Triggered Canvases, which are created on the Dashboard and initiated via the API. You can pass in `canvas_entry_properties` that will be templated into the messages sent by the first steps of the Canvas.

This endpoint allows you to schedule Canvas messages (up to 90 days in advance) via API Triggered delivery, allowing you to decide what action should trigger the message to be sent. Please note that to send messages with this endpoint, you must have a Canvas ID, created when you build a Canvas.

### Request Parameters

| Parameter | Required | Data Type | Description |
| --------- | ---------| --------- | ----------- |
|`canvas_id`|Required|String| See canvas identifier|
|`send_id` | Optional | String | See send identifier |
|`recipients` | Optional | Array of recipient objects | See recipients object |
|`audience` | Optional | Connected audience object | See connected audience |
|`broadcast` | Optional | Boolean | See broadcast -- defaults to false on 8/31/17, must be set to true if "recipients" object is omitted |
| `trigger_properties` | Optional | Object | Personalization key value pairs for all users in this send; see trigger properties |
| `schedule` | Required | Schedule object | See schedule object |

## Request Components
- [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
- [Recipients](https://www.braze.com/docs/api/objects_filters/recipient_object/)
- [Connected Audience](https://www.braze.com/docs/api/objects_filters/connected_audience/)
- [Broadcast](https://www.braze.com/docs/api/parameters/#broadcast)
- [Trigger Properties](https://www.braze.com/docs/api/objects_filters/trigger_properties_object/)
- [Schedule Object](https://www.braze.com/docs/api/objects_filters/schedule_object/)

### Example Usage

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
    res, err := s.Messaging.ScheduleAPITriggeredCanvases(ctx, operations.ScheduleAPITriggeredCanvasesRequestBody{
        Audience: &operations.ScheduleAPITriggeredCanvasesRequestBodyAudience{
            And: []ScheduleAPITriggeredCanvasesRequestBodyAudienceAND{
                operations.ScheduleAPITriggeredCanvasesRequestBodyAudienceAND{
                    CustomAttribute: &operations.ScheduleAPITriggeredCanvasesRequestBodyAudienceANDCustomAttribute{
                        Comparison: sdk.String("equals"),
                        CustomAttributeName: sdk.String("eye_color"),
                        Value: sdk.String("blue"),
                    },
                },
                operations.ScheduleAPITriggeredCanvasesRequestBodyAudienceAND{
                    CustomAttribute: &operations.ScheduleAPITriggeredCanvasesRequestBodyAudienceANDCustomAttribute{
                        Comparison: sdk.String("equals"),
                        CustomAttributeName: sdk.String("eye_color"),
                        Value: sdk.String("blue"),
                    },
                },
                operations.ScheduleAPITriggeredCanvasesRequestBodyAudienceAND{
                    CustomAttribute: &operations.ScheduleAPITriggeredCanvasesRequestBodyAudienceANDCustomAttribute{
                        Comparison: sdk.String("equals"),
                        CustomAttributeName: sdk.String("eye_color"),
                        Value: sdk.String("blue"),
                    },
                },
            },
        },
        Broadcast: sdk.Bool(false),
        CanvasEntryProperties: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        CanvasID: sdk.String("canvas_identifier"),
        Recipients: []ScheduleAPITriggeredCanvasesRequestBodyRecipients{
            operations.ScheduleAPITriggeredCanvasesRequestBodyRecipients{
                CanvasEntryProperties: map[string]interface{}{
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                ExternalUserID: sdk.String("external_user_identifier"),
                TriggerProperties: sdk.String("delectus"),
                UserAlias: sdk.String("example_alias"),
            },
            operations.ScheduleAPITriggeredCanvasesRequestBodyRecipients{
                CanvasEntryProperties: map[string]interface{}{
                    "suscipit": "molestiae",
                    "minus": "placeat",
                },
                ExternalUserID: sdk.String("external_user_identifier"),
                TriggerProperties: sdk.String("voluptatum"),
                UserAlias: sdk.String("example_alias"),
            },
        },
        Schedule: &operations.ScheduleAPITriggeredCanvasesRequestBodySchedule{
            AtOptimalTime: sdk.Bool(false),
            InLocalTime: sdk.Bool(false),
            Time: sdk.String("iusto"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
