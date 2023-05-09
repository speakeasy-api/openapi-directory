# Shares

## Overview

The sharing APIs allow you create and manage shares. Shares can be used to send a single file, share a folder, or set up a receive folder and its input form.

### Available Operations

* [AddShare](#addshare) - Creates a share
* [CompleteDirectSend](#completedirectsend) - Complete send files
* [DeleteShareByID](#deletesharebyid) - Deactivate a share
* [GetShareByID](#getsharebyid) - Get a share
* [ListShares](#listshares) - Get a list of shares
* [UpdateShareByID](#updatesharebyid) - Update a share

## AddShare

Creates a new share object for the given path in your account. We support three types of shares:

  - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are 'live'; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.
  - A file **send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are 'point in time' -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.
  - A **receive** folder lets you receive files into your account. You can either send users a link, or optionally [embed a customized form](/docs/account/05-file-sharing/05-upload-widget) on your website.
  
**How to send files from your computer using the API**:

In order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:

1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` parameter to **true**. The response that is returned will include a "meta" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.
2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The "/" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**
3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**

**Setting the Share Permissions**

Only 5 different combinations of permissions are valid for the `accessMode` object:

- **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**
- **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**
- **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**
- **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**
- **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**

Any other combination of permissions provided as the `accessMode` will be rejected as a bad request.

**Notes:**

Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shares.AddShare(ctx, operations.AddShareRequest{
        RequestBody: &operations.AddShareAddShareRequestBody{
            AccessMode: &shared.AccessMode{
                Delete: sdk.Bool(false),
                Download: sdk.Bool(false),
                Modify: sdk.Bool(false),
                Upload: sdk.Bool(false),
            },
            Embed: sdk.Bool(false),
            Expiration: types.MustTimeFromString("2017-09-25T14:12:10Z"),
            FileDropCreateFolders: sdk.Bool(false),
            HasNotification: sdk.Bool(false),
            IsPublic: sdk.Bool(true),
            MessageBody: sdk.String("null"),
            MessageSubject: sdk.String("Invitation to a shared folder"),
            Name: "Shared Folder",
            NotificationEmails: []string{
                "Maximillian_Ferry26@yahoo.com",
            },
            Password: sdk.String("null"),
            Recipients: []AddShareAddShareRequestBodyRecipients{
                operations.AddShareAddShareRequestBodyRecipients{
                    Email: sdk.String("Kailee_Stracke@hotmail.com"),
                    Type: sdk.String("libero"),
                },
                operations.AddShareAddShareRequestBodyRecipients{
                    Email: sdk.String("Elvis.Luettgen@hotmail.com"),
                    Type: sdk.String("dolorem"),
                },
                operations.AddShareAddShareRequestBodyRecipients{
                    Email: sdk.String("Christy_Erdman73@gmail.com"),
                    Type: sdk.String("voluptate"),
                },
            },
            RequireEmail: sdk.Bool(false),
            Resources: []string{
                "reiciendis",
                "amet",
            },
            SendingLocalFiles: sdk.Bool(false),
            Type: operations.AddShareAddShareRequestBodyTypeEnumSharedFolder,
        },
        EvAccessToken: "dolorum",
        EvAPIKey: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareResponse != nil {
        // handle response
    }
}
```

## CompleteDirectSend

After uploading the file(s) to be sent, this method will trigger invitation emails and finish the send files setup. If you are not sending files from your own computer in a send, you will not need this step.
  
**How to send files from your computer using the API**:

In order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:

1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` paramter to **true**. The response that is returned will include a "meta" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.
2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The "/" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**
3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**


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
    res, err := s.Shares.CompleteDirectSend(ctx, operations.CompleteDirectSendRequest{
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        ID: 85295,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareResponse != nil {
        // handle response
    }
}
```

## DeleteShareByID

Deactivate a share. Deactivating a share does not remove the underlying files for **shared_folder** and **receive** share types; it merely removes the access URL. Deleting a **send** share type does remove the associated files, as files that have been sent are only associated with the share, and aren't stored anywhere else in the account.

**Notes:**

- You must have [sharing permissons](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
- You must have [admin-level access](/docs/account/04-users/01-admin-users), or you must be the owner of the specified share you wish to delete.

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
    res, err := s.Shares.DeleteShareByID(ctx, operations.DeleteShareByIDRequest{
        EvAccessToken: "ipsa",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        ID: 23241,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## GetShareByID

Get the details for a specific share entry. You can use the `include` parameter to also get the details of related records, such as the owning user or the resources involved in the share.

**Notes:**

- Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
- To get share objects with type send, authenticated user's role must be admin or master.

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
    res, err := s.Shares.GetShareByID(ctx, operations.GetShareByIDRequest{
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        ID: 23241,
        Include: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareResponse != nil {
        // handle response
    }
}
```

## ListShares

Get a list of shares that you would have access to view through the web interface. You can limit which results are returned by specifying specific types of shares you wish to view, finding things shared with a specific email address, as well as finding shares for specific folder names.


**Notes:**

- Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
- To get share objects with type send, authenticated user's role must be admin or master.

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
    res, err := s.Shares.ListShares(ctx, operations.ListSharesRequest{
        EvAccessToken: "iure",
        EvAPIKey: "odio",
        Include: sdk.String("quaerat"),
        Limit: sdk.Int64(881005),
        Message: sdk.String("submitted"),
        Name: sdk.String("Customer*"),
        Offset: sdk.Int64(696344),
        Recipient: sdk.String("test@example.com"),
        Scope: operations.ListSharesScopeEnumCurrentUser.ToPointer(),
        Search: sdk.String("voluptas"),
        Sort: operations.ListSharesSortEnumMinusCreated.ToPointer(),
        Type: operations.ListSharesTypeEnumReceive.ToPointer(),
        Username: sdk.String("example"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareCollectionResponse != nil {
        // handle response
    }
}
```

## UpdateShareByID

Change the settings on an active share. Any changes made will affect all users that have access to the share. 

When updating invitees, pass the `recipients` body paramater with the full list of people who should be included on the share. If you resend the list without an existing recipient, they will be removed from the share.

**Setting the Share Permissions**

Only 5 different combinations of permissions are valid for the `accessMode` object:

- **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**
- **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**
- **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**
- **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**
- **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**

Any other combination of permissions provided as the `accessMode` will be rejected as a bad request.

**Notes:**

  - Authenticated user should be the owner of the specified share.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shares.UpdateShareByID(ctx, operations.UpdateShareByIDRequest{
        RequestBody: operations.UpdateShareByIDUpdateShareRequestBody{
            AccessMode: &shared.AccessMode{
                Delete: sdk.Bool(false),
                Download: sdk.Bool(false),
                Modify: sdk.Bool(false),
                Upload: sdk.Bool(false),
            },
            Embed: sdk.Bool(false),
            Expiration: types.MustTimeFromString("2017-09-25T14:12:10Z"),
            FileDropCreateFolders: sdk.Bool(false),
            HasNotification: sdk.Bool(false),
            IsPublic: sdk.Bool(true),
            MessageBody: sdk.String("null"),
            MessageSubject: sdk.String("Invitation to a shared folder"),
            Name: sdk.String("Shared Folder"),
            NotificationEmails: []string{
                "Rudolph_Bergstrom47@gmail.com",
                "Marianna_Leuschke@yahoo.com",
                "Yessenia45@hotmail.com",
            },
            Password: sdk.String("null"),
            Recipients: []UpdateShareByIDUpdateShareRequestBodyRecipients{
                operations.UpdateShareByIDUpdateShareRequestBodyRecipients{
                    Email: sdk.String("Diamond22@hotmail.com"),
                    Type: sdk.String("optio"),
                },
                operations.UpdateShareByIDUpdateShareRequestBodyRecipients{
                    Email: sdk.String("Emmanuelle_Turner@hotmail.com"),
                    Type: sdk.String("provident"),
                },
                operations.UpdateShareByIDUpdateShareRequestBodyRecipients{
                    Email: sdk.String("Rickie.Leannon@gmail.com"),
                    Type: sdk.String("at"),
                },
            },
            RequireEmail: sdk.Bool(false),
            Resources: []string{
                "tempora",
                "vel",
            },
            Status: sdk.Int64(798047),
        },
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        ID: 23241,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareResponse != nil {
        // handle response
    }
}
```
