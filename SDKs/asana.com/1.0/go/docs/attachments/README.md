# Attachments

## Overview

An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.

### Available Operations

* [CreateAttachmentForObject](#createattachmentforobject) - Upload an attachment
* [DeleteAttachment](#deleteattachment) - Delete an attachment
* [GetAttachment](#getattachment) - Get an attachment
* [GetAttachmentsForObject](#getattachmentsforobject) - Get attachments from an object

## CreateAttachmentForObject

Upload an attachment.

This method uploads an attachment on an object and returns the compact
record for the created attachment object. This is possible by either:

- Providing the URL of the external resource being attached, or
- Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
files from third party services such as Dropbox, Box, Vimeo & Google Drive via the API

The 100MB size limit on attachments in Asana is enforced on this endpoint.

This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.

Requests made should follow the HTTP/1.1 specification that line
terminators are of the form `CRLF` or `\r\n` outlined
[here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.CreateAttachmentForObject(ctx, operations.CreateAttachmentForObjectRequest{
        AttachmentRequest: shared.AttachmentRequest{
            ConnectToApp: sdk.Bool(false),
            File: &shared.AttachmentRequestFile{
                Content: []byte("magnam"),
                File: "debitis",
            },
            Name: sdk.String("Lucia Goldner"),
            Parent: sdk.String("minus"),
            ResourceSubtype: shared.AttachmentRequestResourceSubtypeEnumExternal.ToPointer(),
            URL: sdk.String("placeat"),
        },
        OptFields: []string{
            "iusto",
            "excepturi",
            "nisi",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAttachmentForObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAttachment

Deletes a specific, existing attachment.

Returns an empty data record.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.DeleteAttachment(ctx, operations.DeleteAttachmentRequest{
        AttachmentGid: "recusandae",
        OptFields: []string{
            "ab",
            "quis",
            "veritatis",
            "deserunt",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAttachment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAttachment

Get the full record for a single attachment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.GetAttachment(ctx, operations.GetAttachmentRequest{
        AttachmentGid: "perferendis",
        OptFields: []string{
            "repellendus",
            "sapiente",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAttachment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAttachmentsForObject

Returns the compact records for all attachments on the object.

There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.GetAttachmentsForObject(ctx, operations.GetAttachmentsForObjectRequest{
        Limit: sdk.Int64(778157),
        Offset: sdk.String("odit"),
        OptFields: []string{
            "at",
            "maiores",
            "molestiae",
            "quod",
        },
        OptPretty: sdk.Bool(false),
        Parent: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAttachmentsForObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
