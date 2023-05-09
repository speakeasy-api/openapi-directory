# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChatTokenRequest;
import org.openapis.openapi.models.operations.CreateChatTokenRequestBody;
import org.openapis.openapi.models.operations.CreateChatTokenResponse;
import org.openapis.openapi.models.shared.ChatTokenCapabilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateChatTokenRequest req = new CreateChatTokenRequest(                new CreateChatTokenRequestBody("provident", "distinctio") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("unde", "nulla");
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                }};
                                capabilities = new org.openapis.openapi.models.shared.ChatTokenCapabilityEnum[]{{
                                    add(ChatTokenCapabilityEnum.SEND_MESSAGE),
                                    add(ChatTokenCapabilityEnum.DELETE_MESSAGE),
                                }};
                                sessionDurationInMinutes = 56713L;
                            }};) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            CreateChatTokenResponse res = sdk.createChatToken(req);

            if (res.createChatTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createChatToken](docs/sdk/README.md#createchattoken) - <p>Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> <p>Use the <code>capabilities</code> field to permit an end user to send messages or moderate a room.</p> <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.</p> <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your application.</p>
* [createLoggingConfiguration](docs/sdk/README.md#createloggingconfiguration) - Creates a logging configuration that allows clients to store and record sent messages.
* [createRoom](docs/sdk/README.md#createroom) - Creates a room that allows clients to connect and pass messages.
* [deleteLoggingConfiguration](docs/sdk/README.md#deleteloggingconfiguration) - Deletes the specified logging configuration.
* [deleteMessage](docs/sdk/README.md#deletemessage) - Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* [deleteRoom](docs/sdk/README.md#deleteroom) - Deletes the specified room.
* [disconnectUser](docs/sdk/README.md#disconnectuser) - Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* [getLoggingConfiguration](docs/sdk/README.md#getloggingconfiguration) - Gets the specified logging configuration.
* [getRoom](docs/sdk/README.md#getroom) - Gets the specified room.
* [listLoggingConfigurations](docs/sdk/README.md#listloggingconfigurations) - Gets summary information about all your logging configurations in the AWS region where the API request is processed.
* [listRooms](docs/sdk/README.md#listrooms) - Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of <code>updateTime</code>.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [sendEvent](docs/sdk/README.md#sendevent) - Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the resource with the specified ARN.
* [updateLoggingConfiguration](docs/sdk/README.md#updateloggingconfiguration) - Updates a specified logging configuration.
* [updateRoom](docs/sdk/README.md#updateroom) - Updates a room’s configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
