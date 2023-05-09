# EmailLists

## Overview

The email lists APIs allow you to manage email lists that can be used for speeding up actions within the ExaVault File Manager such as adding your marketing team, Tom, Jane, and Harry, to a shared folder in a single action instead of three.

### Available Operations

* [AddEmailList](#addemaillist) - Create new email list
* [DeleteEmailListByID](#deleteemaillistbyid) - Delete an email group with given id
* [GetEmailListByID](#getemaillistbyid) - Get individual email group
* [GetEmailLists](#getemaillists) - Get all email groups
* [UpdateEmailListByID](#updateemaillistbyid) - Update an email group

## AddEmailList

Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.

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
    res, err := s.EmailLists.AddEmailList(ctx, operations.AddEmailListRequest{
        RequestBody: &operations.AddEmailListAddEmailListRequestBody{
            Emails: []string{
                "iure",
                "saepe",
                "quidem",
            },
            Name: "My friends list",
        },
        EvAccessToken: "architecto",
        EvAPIKey: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailListResponse != nil {
        // handle response
    }
}
```

## DeleteEmailListByID

Permanently delete an email group. This action is not reversible. We recommend making a user confirm this action before sending the API call. 

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
    res, err := s.EmailLists.DeleteEmailListByID(ctx, operations.DeleteEmailListByIDRequest{
        EvAccessToken: "reiciendis",
        EvAPIKey: "est",
        ID: 653140,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## GetEmailListByID

Retrieve all the details of a specific email list including it's name, when it was created and all the email addresses that belong to the group.

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
    res, err := s.EmailLists.GetEmailListByID(ctx, operations.GetEmailListByIDRequest{
        EvAccessToken: "laborum",
        EvAPIKey: "dolores",
        ID: 210382,
        Include: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailListResponse != nil {
        // handle response
    }
}
```

## GetEmailLists

List all email groups for authenticated user

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
    res, err := s.EmailLists.GetEmailLists(ctx, operations.GetEmailListsRequest{
        EvAccessToken: "explicabo",
        EvAPIKey: "nobis",
        Include: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailListCollectionResponse != nil {
        // handle response
    }
}
```

## UpdateEmailListByID

Add or remove emails from an email list that can be used to send and share files with groups. 

**Notes**

*This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.  

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
    res, err := s.EmailLists.UpdateEmailListByID(ctx, operations.UpdateEmailListByIDRequest{
        RequestBody: &operations.UpdateEmailListByIDUpdateEmailListRequestBody{
            Emails: []string{
                "nemo",
                "minima",
                "excepturi",
            },
            Name: sdk.String("My friends list"),
        },
        EvAccessToken: "accusantium",
        EvAPIKey: "iure",
        ID: 634274,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailListResponse != nil {
        // handle response
    }
}
```
