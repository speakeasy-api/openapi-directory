# Recipients

## Overview

The recipients APIs allow to retrieve, delete, or resend invitations for recipients of shared folders.

### Available Operations

* [ResendInvitationsForShare](#resendinvitationsforshare) - Resend invitations to share recipients

## ResendInvitationsForShare

Resend invitations to one or all recipients attached to specified share. The most recent message that was sent for the share will be re-used for this email.

You can use [GET /shares/{id}](#operation/getShareById) to view the recipient list and message history for a share. Use [PATCH /shares/{id}](#operation/updateShareById) to add or remove recipients.

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
    res, err := s.Recipients.ResendInvitationsForShare(ctx, operations.ResendInvitationsForShareRequest{
        RequestBody: &operations.ResendInvitationsForShareResendInvitationsRequestBody{
            RecipientID: sdk.Int(586513),
        },
        EvAccessToken: "quos",
        EvAPIKey: "perferendis",
        ShareID: 164940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareRecipientsResponse != nil {
        // handle response
    }
}
```
