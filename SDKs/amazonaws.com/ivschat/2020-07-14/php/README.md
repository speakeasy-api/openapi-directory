# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createChatToken` - <p>Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> <p>Use the <code>capabilities</code> field to permit an end user to send messages or moderate a room.</p> <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.</p> <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your application.</p>
* `createLoggingConfiguration` - Creates a logging configuration that allows clients to store and record sent messages.
* `createRoom` - Creates a room that allows clients to connect and pass messages.
* `deleteLoggingConfiguration` - Deletes the specified logging configuration.
* `deleteMessage` - Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* `deleteRoom` - Deletes the specified room.
* `disconnectUser` - Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* `getLoggingConfiguration` - Gets the specified logging configuration.
* `getRoom` - Gets the specified room.
* `listLoggingConfigurations` - Gets summary information about all your logging configurations in the AWS region where the API request is processed.
* `listRooms` - Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of <code>updateTime</code>.
* `listTagsForResource` - Gets information about AWS tags for the specified ARN.
* `sendEvent` - Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
* `tagResource` - Adds or updates tags for the AWS resource with the specified ARN.
* `untagResource` - Removes tags from the resource with the specified ARN.
* `updateLoggingConfiguration` - Updates a specified logging configuration.
* `updateRoom` - Updates a room’s configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
