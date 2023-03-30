# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/connectparticipant/2018-09-07/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CompleteAttachmentUploadRequest{
        Headers: operations.CompleteAttachmentUploadHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzBearer: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.CompleteAttachmentUploadRequestBody{
            AttachmentIds: []string{
                "error",
                "deserunt",
            },
            ClientToken: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.CompleteAttachmentUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteAttachmentUploadResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CompleteAttachmentUpload` - <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* `CreateParticipantConnection` - <p>Creates the participant's connection. </p> <note> <p> <code>ParticipantToken</code> is used for invoking this API instead of <code>ConnectionToken</code>.</p> </note> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <p> <b>Message streaming support</b>: This API can also be used together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p> <b>Feature specifications</b>: For information about feature specifications, such as the allowed number of open websocket connections per participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>
* `DisconnectParticipant` - <p>Disconnects a participant. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* `GetAttachment` - <p>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* `GetTranscript` - <p>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* `SendEvent` - <p>Sends an event. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* `SendMessage` - <p>Sends a message.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* `StartAttachmentUpload` - <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
