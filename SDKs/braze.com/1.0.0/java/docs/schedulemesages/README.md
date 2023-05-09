# scheduleMesages

### Available Operations

* [getUpcomingScheduledCampaignsAndCanvases](#getupcomingscheduledcampaignsandcanvases) - Get Upcoming Scheduled Campaigns and Canvases
* [scheduleApiTriggeredCanvases](#scheduleapitriggeredcanvases) - Schedule API Triggered Canvases

## getUpcomingScheduledCampaignsAndCanvases

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUpcomingScheduledCampaignsAndCanvasesRequest;
import org.openapis.openapi.models.operations.GetUpcomingScheduledCampaignsAndCanvasesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUpcomingScheduledCampaignsAndCanvasesRequest req = new GetUpcomingScheduledCampaignsAndCanvasesRequest() {{
                endTime = "2018-09-01T00:00:00-04:00";
            }};            

            GetUpcomingScheduledCampaignsAndCanvasesResponse res = sdk.scheduleMesages.getUpcomingScheduledCampaignsAndCanvases(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scheduleApiTriggeredCanvases

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesRequestBody;
import org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesRequestBodyAudience;
import org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesRequestBodyAudienceAND;
import org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesRequestBodyAudienceANDCustomAttribute;
import org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesRequestBodyRecipients;
import org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesRequestBodySchedule;
import org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScheduleApiTriggeredCanvasesRequestBody req = new ScheduleApiTriggeredCanvasesRequestBody() {{
                audience = new ScheduleApiTriggeredCanvasesRequestBodyAudience() {{
                    and = new org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesRequestBodyAudienceAND[]{{
                        add(new ScheduleApiTriggeredCanvasesRequestBodyAudienceAND() {{
                            customAttribute = new ScheduleApiTriggeredCanvasesRequestBodyAudienceANDCustomAttribute() {{
                                comparison = "equals";
                                customAttributeName = "eye_color";
                                value = "blue";
                            }};
                        }}),
                        add(new ScheduleApiTriggeredCanvasesRequestBodyAudienceAND() {{
                            customAttribute = new ScheduleApiTriggeredCanvasesRequestBodyAudienceANDCustomAttribute() {{
                                comparison = "equals";
                                customAttributeName = "eye_color";
                                value = "blue";
                            }};
                        }}),
                        add(new ScheduleApiTriggeredCanvasesRequestBodyAudienceAND() {{
                            customAttribute = new ScheduleApiTriggeredCanvasesRequestBodyAudienceANDCustomAttribute() {{
                                comparison = "equals";
                                customAttributeName = "eye_color";
                                value = "blue";
                            }};
                        }}),
                    }};
                }};;
                broadcast = false;
                canvasEntryProperties = new java.util.HashMap<String, Object>() {{
                    put("recusandae", "temporibus");
                    put("ab", "quis");
                }};
                canvasId = "canvas_identifier";
                recipients = new org.openapis.openapi.models.operations.ScheduleApiTriggeredCanvasesRequestBodyRecipients[]{{
                    add(new ScheduleApiTriggeredCanvasesRequestBodyRecipients() {{
                        canvasEntryProperties = new java.util.HashMap<String, Object>() {{
                            put("perferendis", "ipsam");
                            put("repellendus", "sapiente");
                            put("quo", "odit");
                        }};
                        externalUserId = "external_user_identifier";
                        triggerProperties = "at";
                        userAlias = "example_alias";
                    }}),
                }};
                schedule = new ScheduleApiTriggeredCanvasesRequestBodySchedule() {{
                    atOptimalTime = false;
                    inLocalTime = false;
                    time = "at";
                }};;
            }};            

            ScheduleApiTriggeredCanvasesResponse res = sdk.scheduleMesages.scheduleApiTriggeredCanvases(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
