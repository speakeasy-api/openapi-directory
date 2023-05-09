# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ivschat/2020-07-14/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateChatToken(ctx, operations.CreateChatTokenRequest{
        RequestBody: operations.CreateChatTokenRequestBody{
            Attributes: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Capabilities: []shared.ChatTokenCapabilityEnum{
                shared.ChatTokenCapabilityEnumDisconnectUser,
                shared.ChatTokenCapabilityEnumDisconnectUser,
                shared.ChatTokenCapabilityEnumDisconnectUser,
                shared.ChatTokenCapabilityEnumDisconnectUser,
            },
            RoomIdentifier: "iure",
            SessionDurationInMinutes: sdk.Int64(297534),
            UserID: "debitis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateChatTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateChatToken](docs/sdk/README.md#createchattoken) - <p>Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> <p>Use the <code>capabilities</code> field to permit an end user to send messages or moderate a room.</p> <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.</p> <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your application.</p>
* [CreateLoggingConfiguration](docs/sdk/README.md#createloggingconfiguration) - Creates a logging configuration that allows clients to store and record sent messages.
* [CreateRoom](docs/sdk/README.md#createroom) - Creates a room that allows clients to connect and pass messages.
* [DeleteLoggingConfiguration](docs/sdk/README.md#deleteloggingconfiguration) - Deletes the specified logging configuration.
* [DeleteMessage](docs/sdk/README.md#deletemessage) - Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* [DeleteRoom](docs/sdk/README.md#deleteroom) - Deletes the specified room.
* [DisconnectUser](docs/sdk/README.md#disconnectuser) - Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* [GetLoggingConfiguration](docs/sdk/README.md#getloggingconfiguration) - Gets the specified logging configuration.
* [GetRoom](docs/sdk/README.md#getroom) - Gets the specified room.
* [ListLoggingConfigurations](docs/sdk/README.md#listloggingconfigurations) - Gets summary information about all your logging configurations in the AWS region where the API request is processed.
* [ListRooms](docs/sdk/README.md#listrooms) - Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of <code>updateTime</code>.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [SendEvent](docs/sdk/README.md#sendevent) - Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
* [TagResource](docs/sdk/README.md#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from the resource with the specified ARN.
* [UpdateLoggingConfiguration](docs/sdk/README.md#updateloggingconfiguration) - Updates a specified logging configuration.
* [UpdateRoom](docs/sdk/README.md#updateroom) - Updates a room’s configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
