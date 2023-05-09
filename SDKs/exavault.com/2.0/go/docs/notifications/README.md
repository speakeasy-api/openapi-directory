# Notifications

## Overview

The notifications APIs allow you to set up and manage notifications in your account. When an action is taken on a file folder, you can be notified via email or webhook.

### Available Operations

* [AddNotification](#addnotification) - Create a new notification
* [DeleteNotificationByID](#deletenotificationbyid) - Delete a notification
* [GetNotificationByID](#getnotificationbyid) - Get notification details
* [ListNotifications](#listnotifications) - Get a list of notifications
* [UpdateNotificationByID](#updatenotificationbyid) - Update a notification

## AddNotification

Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;

- To enable email, pass an array of email addresses to the `recipients` parameter of this call. 
- To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount). 

**Notes:**
  - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)


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
    res, err := s.Notifications.AddNotification(ctx, operations.AddNotificationRequest{
        RequestBody: &operations.AddNotificationAddNotificationRequestBody{
            Action: operations.AddNotificationAddNotificationRequestBodyActionEnumUpload,
            Message: sdk.String("laborum"),
            Recipients: []string{
                "Britney94@gmail.com",
                "Makayla9@yahoo.com",
                "Rodrigo97@yahoo.com",
            },
            Resource: "voluptatibus",
            SendEmail: true,
            Type: operations.AddNotificationAddNotificationRequestBodyTypeEnumFile,
            Usernames: []string{
                "nihil",
                "praesentium",
                "voluptatibus",
                "ipsa",
            },
        },
        EvAccessToken: "omnis",
        EvAPIKey: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationResponse != nil {
        // handle response
    }
}
```

## DeleteNotificationByID

Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.

**Notes:**

- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
- You can only delete notifications owned by your user account.

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
    res, err := s.Notifications.DeleteNotificationByID(ctx, operations.DeleteNotificationByIDRequest{
        EvAccessToken: "cum",
        EvAPIKey: "perferendis",
        ID: 39187,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## GetNotificationByID

Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification. 

**Notes**

- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification.
- You can only retrieve notifications owned by your user account.

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
    res, err := s.Notifications.GetNotificationByID(ctx, operations.GetNotificationByIDRequest{
        EvAccessToken: "reprehenderit",
        EvAPIKey: "ut",
        ID: 979587,
        Include: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationResponse != nil {
        // handle response
    }
}
```

## ListNotifications

Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.

**Notes:**
  - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)

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
    res, err := s.Notifications.ListNotifications(ctx, operations.ListNotificationsRequest{
        Action: operations.ListNotificationsActionEnumAll.ToPointer(),
        EvAccessToken: "corporis",
        EvAPIKey: "dolore",
        Include: operations.ListNotificationsIncludeEnumShare.ToPointer(),
        Limit: sdk.Int(118727),
        Offset: sdk.Int(688661),
        Sort: sdk.String("enim"),
        Type: operations.ListNotificationsTypeEnumFileDrop.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationCollectionResponse != nil {
        // handle response
    }
}
```

## UpdateNotificationByID

Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger. 

When updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails. 

**Notes:**

- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.
- You can only change notifications owned by your user account.

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
    res, err := s.Notifications.UpdateNotificationByID(ctx, operations.UpdateNotificationByIDRequest{
        RequestBody: &operations.UpdateNotificationByIDUpdateNotificationByIDRequestBody{
            Action: operations.UpdateNotificationByIDUpdateNotificationByIDRequestBodyActionEnumAll.ToPointer(),
            Message: sdk.String("commodi"),
            Recipients: []string{
                "Curt_Pouros@gmail.com",
                "Dimitri_Lang@hotmail.com",
                "Thelma92@gmail.com",
                "Emily_Altenwerth13@gmail.com",
            },
            SendEmail: sdk.Bool(true),
            Usernames: []string{
                "distinctio",
                "quibusdam",
                "labore",
            },
        },
        EvAccessToken: "modi",
        EvAPIKey: "qui",
        ID: 397821,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationResponse != nil {
        // handle response
    }
}
```
