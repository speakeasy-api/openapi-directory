# Activity

## Overview

The activity APIs allow you to get logs from your account. We track multiple types of under the umbrellas; __Activity Logs__ that show an action a user performed or initiated on a file, folder or the account. __Webhooks Logs__ that show records of all outbound webhook calls made by ExaVault. Both can be optionally filtered to only return specific data you’re looking for.

### Available Operations

* [GetSessionLogs](#getsessionlogs) - Get activity logs
* [GetWebhookLogs](#getwebhooklogs) - Get webhook logs

## GetSessionLogs

Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges. 

**NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible. 
  
**Operation Types**
Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:

| File Manager Value | API Value | Notes |
|-----|----|---|
| Connect | PASS | |
| Disconnect | EXIT | |
| Upload | STOR | |
| Download | RETR | |
| Delete | DELE | |
| Create Folder | MKD | |
| Rename | RNTO | |
| Move | MOVE | |
| Copy | COPY | |
| Compress | COMPR | |
| Extract | EXTRACT | |
| Shared Folders | SHARE | |
| Send Files | SEND | |
| Receive Files | RECV | |
| _N/A_ | EDIT\_SEND | Update send. Not shown in file manager |
| Update Share | EDIT\_SHARE| | 
| Update Receive | EDIT\_RECV | |
| Delete Send | DELE\_SEND | |
| Delete Receive | DELE\_RECV | |
| Delete Share | DELE\_SHARE | |
| Create Notification | NOTIFY | |
| Update Notification | EDIT\_NTFY| |
| Delete Notification | DELE\_NTFY | |
| Create User | USER | |
| Update User | EDIT\_USER | |
| Delete User | DELE\_USER | |
| _N/A_ | DFA | Create direct link. Not shown in file manager |
| _N/A_ | EDIT\_DFA | Update direct link options. Not shown in file manager |
| _N/A_ | DELE\_DFA | Deactivate direct link. Not shown in file manager|


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Activity.GetSessionLogs(ctx, operations.GetSessionLogsRequest{
        EndDate: types.MustTimeFromString("2022-08-19T14:12:14.246Z"),
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        IPAddress: sdk.String("repellendus"),
        Limit: sdk.Int64(957156),
        Offset: sdk.Int64(778157),
        Path: sdk.String("odit"),
        Sort: sdk.String("-date"),
        StartDate: types.MustTimeFromString("2020-05-23T06:06:25.221Z"),
        Type: sdk.String("maiores"),
        Username: sdk.String("Jaren.Schmidt52"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionActivityResponse != nil {
        // handle response
    }
}
```

## GetWebhookLogs

Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.

**NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible. 

**Event Types**

Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:

- resources.upload
- resources.download
- resources.delete
- resources.createFolder
- resources.rename
- resources.move
- resources.copy
- resources.compress
- resources.extract
- shares.formSubmit


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Activity.GetWebhookLogs(ctx, operations.GetWebhookLogsRequest{
        EndDate: types.MustTimeFromString("2020-12-18T15:02:44.758Z"),
        EndpointURL: sdk.String("http://scaly-pathway.name"),
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        Event: sdk.String("resources.upload"),
        Limit: sdk.Int64(100),
        Offset: sdk.Int64(143353),
        ResourcePath: sdk.String("/Production"),
        Sort: sdk.String("deleniti"),
        StartDate: types.MustTimeFromString("2020-09-22T07:34:53.140Z"),
        StatusCode: sdk.Int64(200),
        Username: sdk.String("exampleuser"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookActivityResponse != nil {
        // handle response
    }
}
```
