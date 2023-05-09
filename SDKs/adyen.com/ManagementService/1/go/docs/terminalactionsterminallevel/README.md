# TerminalActionsTerminalLevel

### Available Operations

* [PostTerminalsScheduleActions](#postterminalsscheduleactions) - Create a terminal action

## PostTerminalsScheduleActions

Schedules a [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) by specifying the action and the terminals that the action must be applied to. 

The following restrictions apply:
* You can schedule only one action at a time. For example, to install a new app version and remove an old app version, you have to make two API requests. 
* The maximum number of terminals in a request is **100**. For example, to apply an action to 250 terminals, you have to divide the terminals over three API requests. 
* If there is an error with one or more terminal IDs in the request, the action is scheduled for none of the terminals. You need to fix the error and try again. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TerminalActionsTerminalLevel.PostTerminalsScheduleActions(ctx, shared.ScheduleTerminalActionsRequest{
        ActionDetails: &shared.ScheduleTerminalActionsRequestActionDetails{},
        ScheduledAt: sdk.String("soluta"),
        StoreID: sdk.String("dolorum"),
        TerminalIds: []string{
            "voluptate",
            "dolorum",
        },
    }, operations.PostTerminalsScheduleActionsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleTerminalActionsResponse != nil {
        // handle response
    }
}
```
