# SDK

## Overview

<p> <b>Introduction</b> </p> <p>The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat resources. You also need to integrate with the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging API</a>, to enable users to interact with chat rooms in real time.</p> <p>The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat HTTPS service endpoints, see the Amazon IVS Chat information on the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the <i>AWS General Reference</i>. </p> <p> <b>Notes on terminology:</b> </p> <ul> <li> <p>You create service applications using the Amazon IVS Chat API. We refer to these as <i>applications</i>.</p> </li> <li> <p>You create front-end client applications (browser and Android/iOS apps) using the Amazon IVS Chat Messaging API. We refer to these as <i>clients</i>. </p> </li> </ul> <p> <b>Resources</b> </p> <p>The following resources are part of Amazon IVS Chat:</p> <ul> <li> <p> <b>LoggingConfiguration</b> — A configuration that allows customers to store and record sent messages in a chat room. See the Logging Configuration endpoints for more information.</p> </li> <li> <p> <b>Room</b> — The central Amazon IVS Chat resource through which clients connect to and exchange chat messages. See the Room endpoints for more information.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no service-specific constraints beyond what is documented there.</p> <p>Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p> <p>The Amazon IVS Chat API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resource supports tagging: Room.</p> <p>At most 50 tags can be applied to a resource.</p> <p> <b>API Access Security</b> </p> <p>Your Amazon IVS Chat applications (service applications and clients) must be authenticated and authorized to access Amazon IVS Chat resources. Note the differences between these concepts:</p> <ul> <li> <p> <i>Authentication</i> is about verifying identity. Requests to the Amazon IVS Chat API must be signed to verify your identity.</p> </li> <li> <p> <i>Authorization</i> is about granting permissions. Your IAM roles need to have permissions for Amazon IVS Chat API requests.</p> </li> </ul> <p>Users (viewers) connect to a room using secure access tokens that you create using the <a>CreateChatToken</a> endpoint through the AWS SDK. You call CreateChatToken for every user’s chat session, passing identity and authorization information about the user.</p> <p> <b>Signing API Requests</b> </p> <p>HTTP API requests must be signed with an AWS SigV4 signature using your AWS security credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API directly, it’s your responsibility to sign the requests.</p> <p>You generate a signature using valid AWS credentials for an IAM role that has permission to perform the requested action. For example, DeleteMessage requests must be made using an IAM role that has the <code>ivschat:DeleteMessage</code> permission.</p> <p>For more information:</p> <ul> <li> <p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> <li> <p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on the Security page of the <i>Amazon IVS User Guide</i>.</p> </li> </ul> <p> <b>Amazon Resource Names (ARNs)</b> </p> <p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names</a> in the <i>AWS General Reference</i>.</p> <p> <b>Messaging Endpoints</b> </p> <ul> <li> <p> <a>DeleteMessage</a> — Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p> </li> <li> <p> <a>DisconnectUser</a> — Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p> </li> <li> <p> <a>SendEvent</a> — Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.</p> </li> </ul> <p> <b>Chat Token Endpoint</b> </p> <ul> <li> <p> <a>CreateChatToken</a> — Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> </li> </ul> <p> <b>Room Endpoints</b> </p> <ul> <li> <p> <a>CreateRoom</a> — Creates a room that allows clients to connect and pass messages.</p> </li> <li> <p> <a>DeleteRoom</a> — Deletes the specified room.</p> </li> <li> <p> <a>GetRoom</a> — Gets the specified room.</p> </li> <li> <p> <a>ListRooms</a> — Gets summary information about all your rooms in the AWS region where the API request is processed. </p> </li> <li> <p> <a>UpdateRoom</a> — Updates a room’s configuration.</p> </li> </ul> <p> <b>Logging Configuration Endpoints</b> </p> <ul> <li> <p> <a>CreateLoggingConfiguration</a> — Creates a logging configuration that allows clients to store and record sent messages.</p> </li> <li> <p> <a>DeleteLoggingConfiguration</a> — Deletes the specified logging configuration.</p> </li> <li> <p> <a>GetLoggingConfiguration</a> — Gets the specified logging configuration.</p> </li> <li> <p> <a>ListLoggingConfigurations</a> — Gets summary information about all your logging configurations in the AWS region where the API request is processed.</p> </li> <li> <p> <a>UpdateLoggingConfiguration</a> — Updates a specified logging configuration.</p> </li> </ul> <p> <b>Tags Endpoints</b> </p> <ul> <li> <p> <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p> </li> <li> <p> <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> </ul> <p>All the above are HTTP operations. There is a separate <i>messaging</i> API for managing Chat resources; see the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging API Reference</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ivschat/>
### Available Operations

* [createChatToken](#createchattoken) - <p>Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> <p>Use the <code>capabilities</code> field to permit an end user to send messages or moderate a room.</p> <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.</p> <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your application.</p>
* [createLoggingConfiguration](#createloggingconfiguration) - Creates a logging configuration that allows clients to store and record sent messages.
* [createRoom](#createroom) - Creates a room that allows clients to connect and pass messages.
* [deleteLoggingConfiguration](#deleteloggingconfiguration) - Deletes the specified logging configuration.
* [deleteMessage](#deletemessage) - Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* [deleteRoom](#deleteroom) - Deletes the specified room.
* [disconnectUser](#disconnectuser) - Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* [getLoggingConfiguration](#getloggingconfiguration) - Gets the specified logging configuration.
* [getRoom](#getroom) - Gets the specified room.
* [listLoggingConfigurations](#listloggingconfigurations) - Gets summary information about all your logging configurations in the AWS region where the API request is processed.
* [listRooms](#listrooms) - Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of <code>updateTime</code>.
* [listTagsForResource](#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [sendEvent](#sendevent) - Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
* [tagResource](#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [untagResource](#untagresource) - Removes tags from the resource with the specified ARN.
* [updateLoggingConfiguration](#updateloggingconfiguration) - Updates a specified logging configuration.
* [updateRoom](#updateroom) - Updates a room’s configuration.

## createChatToken

<p>Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> <p>Use the <code>capabilities</code> field to permit an end user to send messages or moderate a room.</p> <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.</p> <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your application.</p>

### Example Usage

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
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateChatTokenRequest req = new CreateChatTokenRequest(                new CreateChatTokenRequestBody("excepturi", "nisi") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                    put("deserunt", "perferendis");
                                    put("ipsam", "repellendus");
                                }};
                                capabilities = new org.openapis.openapi.models.shared.ChatTokenCapabilityEnum[]{{
                                    add(ChatTokenCapabilityEnum.DELETE_MESSAGE),
                                    add(ChatTokenCapabilityEnum.SEND_MESSAGE),
                                    add(ChatTokenCapabilityEnum.DELETE_MESSAGE),
                                    add(ChatTokenCapabilityEnum.DELETE_MESSAGE),
                                }};
                                sessionDurationInMinutes = 978619L;
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateChatTokenResponse res = sdk.sdk.createChatToken(req);

            if (res.createChatTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLoggingConfiguration

Creates a logging configuration that allows clients to store and record sent messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.CreateLoggingConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateLoggingConfigurationRequestBodyDestinationConfiguration;
import org.openapis.openapi.models.operations.CreateLoggingConfigurationResponse;
import org.openapis.openapi.models.shared.CloudWatchLogsDestinationConfiguration;
import org.openapis.openapi.models.shared.FirehoseDestinationConfiguration;
import org.openapis.openapi.models.shared.S3DestinationConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLoggingConfigurationRequest req = new CreateLoggingConfigurationRequest(                new CreateLoggingConfigurationRequestBody(                new CreateLoggingConfigurationRequestBodyDestinationConfiguration() {{
                                                cloudWatchLogs = new CloudWatchLogsDestinationConfiguration("nam");;
                                                firehose = new FirehoseDestinationConfiguration("officia");;
                                                s3 = new S3DestinationConfiguration("occaecati");;
                                            }};) {{
                                name = "Cassandra Welch";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("commodi", "molestiae");
                                }};
                            }};) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateLoggingConfigurationResponse res = sdk.sdk.createLoggingConfiguration(req);

            if (res.createLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRoom

Creates a room that allows clients to connect and pass messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRoomRequest;
import org.openapis.openapi.models.operations.CreateRoomRequestBody;
import org.openapis.openapi.models.operations.CreateRoomRequestBodyMessageReviewHandler;
import org.openapis.openapi.models.operations.CreateRoomResponse;
import org.openapis.openapi.models.shared.FallbackResultEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRoomRequest req = new CreateRoomRequest(                new CreateRoomRequestBody() {{
                                loggingConfigurationIdentifiers = new String[]{{
                                    add("ad"),
                                }};
                                maximumMessageLength = 617636L;
                                maximumMessageRatePerSecond = 149675L;
                                messageReviewHandler = new CreateRoomRequestBodyMessageReviewHandler() {{
                                    fallbackResult = FallbackResultEnum.DENY;
                                    uri = "http://periodic-glasses.org";
                                }};;
                                name = "Wilbur Kirlin";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("saepe", "quidem");
                                    put("architecto", "ipsa");
                                }};
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateRoomResponse res = sdk.sdk.createRoom(req);

            if (res.createRoomResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLoggingConfiguration

Deletes the specified logging configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteLoggingConfigurationRequestBody;
import org.openapis.openapi.models.operations.DeleteLoggingConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLoggingConfigurationRequest req = new DeleteLoggingConfigurationRequest(                new DeleteLoggingConfigurationRequestBody("nobis");) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
            }};            

            DeleteLoggingConfigurationResponse res = sdk.sdk.deleteLoggingConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMessage

Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessageRequest;
import org.openapis.openapi.models.operations.DeleteMessageRequestBody;
import org.openapis.openapi.models.operations.DeleteMessageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMessageRequest req = new DeleteMessageRequest(                new DeleteMessageRequestBody("doloribus", "sapiente") {{
                                reason = "architecto";
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeleteMessageResponse res = sdk.sdk.deleteMessage(req);

            if (res.deleteMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRoom

Deletes the specified room.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRoomRequest;
import org.openapis.openapi.models.operations.DeleteRoomRequestBody;
import org.openapis.openapi.models.operations.DeleteRoomResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRoomRequest req = new DeleteRoomRequest(                new DeleteRoomRequestBody("commodi");) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            DeleteRoomResponse res = sdk.sdk.deleteRoom(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectUser

Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectUserRequest;
import org.openapis.openapi.models.operations.DisconnectUserRequestBody;
import org.openapis.openapi.models.operations.DisconnectUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectUserRequest req = new DisconnectUserRequest(                new DisconnectUserRequestBody("animi", "enim") {{
                                reason = "odit";
                            }};) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
            }};            

            DisconnectUserResponse res = sdk.sdk.disconnectUser(req);

            if (res.disconnectUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoggingConfiguration

Gets the specified logging configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.GetLoggingConfigurationRequestBody;
import org.openapis.openapi.models.operations.GetLoggingConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoggingConfigurationRequest req = new GetLoggingConfigurationRequest(                new GetLoggingConfigurationRequestBody("error");) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            GetLoggingConfigurationResponse res = sdk.sdk.getLoggingConfiguration(req);

            if (res.getLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRoom

Gets the specified room.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRoomRequest;
import org.openapis.openapi.models.operations.GetRoomRequestBody;
import org.openapis.openapi.models.operations.GetRoomResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRoomRequest req = new GetRoomRequest(                new GetRoomRequestBody("voluptatibus");) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            GetRoomResponse res = sdk.sdk.getRoom(req);

            if (res.getRoomResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLoggingConfigurations

Gets summary information about all your logging configurations in the AWS region where the API request is processed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLoggingConfigurationsRequest;
import org.openapis.openapi.models.operations.ListLoggingConfigurationsRequestBody;
import org.openapis.openapi.models.operations.ListLoggingConfigurationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLoggingConfigurationsRequest req = new ListLoggingConfigurationsRequest(                new ListLoggingConfigurationsRequestBody() {{
                                maxResults = 979587L;
                                nextToken = "dicta";
                            }};) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "iusto";
                xAmzDate = "dicta";
                xAmzSecurityToken = "harum";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
                maxResults = "commodi";
                nextToken = "repudiandae";
            }};            

            ListLoggingConfigurationsResponse res = sdk.sdk.listLoggingConfigurations(req);

            if (res.listLoggingConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRooms

Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of <code>updateTime</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoomsRequest;
import org.openapis.openapi.models.operations.ListRoomsRequestBody;
import org.openapis.openapi.models.operations.ListRoomsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRoomsRequest req = new ListRoomsRequest(                new ListRoomsRequestBody() {{
                                loggingConfigurationIdentifier = "ipsum";
                                maxResults = 692472L;
                                messageReviewHandlerUri = "molestias";
                                name = "Ervin Gleason";
                                nextToken = "voluptates";
                            }};) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "sint";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "enim";
                maxResults = "consequatur";
                nextToken = "est";
            }};            

            ListRoomsResponse res = sdk.sdk.listRooms(req);

            if (res.listRoomsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets information about AWS tags for the specified ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("explicabo") {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "labore";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "aliquid";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendEvent

Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendEventRequest;
import org.openapis.openapi.models.operations.SendEventRequestBody;
import org.openapis.openapi.models.operations.SendEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendEventRequest req = new SendEventRequest(                new SendEventRequestBody("quos", "perferendis") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("assumenda", "ipsam");
                                }};
                            }};) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            SendEventResponse res = sdk.sdk.sendEvent(req);

            if (res.sendEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or updates tags for the AWS resource with the specified ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("eum", "non");
                                                put("eligendi", "sint");
                                                put("aliquid", "provident");
                                                put("necessitatibus", "sint");
                                            }});, "officia") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from the resource with the specified ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("rerum",                 new String[]{{
                                add("magnam"),
                            }}) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLoggingConfiguration

Updates a specified logging configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationRequestBodyDestinationConfiguration;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationResponse;
import org.openapis.openapi.models.shared.CloudWatchLogsDestinationConfiguration;
import org.openapis.openapi.models.shared.FirehoseDestinationConfiguration;
import org.openapis.openapi.models.shared.S3DestinationConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLoggingConfigurationRequest req = new UpdateLoggingConfigurationRequest(                new UpdateLoggingConfigurationRequestBody("enim") {{
                                destinationConfiguration = new UpdateLoggingConfigurationRequestBodyDestinationConfiguration() {{
                                    cloudWatchLogs = new CloudWatchLogsDestinationConfiguration("accusamus");;
                                    firehose = new FirehoseDestinationConfiguration("delectus");;
                                    s3 = new S3DestinationConfiguration("quidem");;
                                }};;
                                name = "Marco Olson";
                            }};) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "nisi";
                xAmzSecurityToken = "vel";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "omnis";
            }};            

            UpdateLoggingConfigurationResponse res = sdk.sdk.updateLoggingConfiguration(req);

            if (res.updateLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoom

Updates a room’s configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoomRequest;
import org.openapis.openapi.models.operations.UpdateRoomRequestBody;
import org.openapis.openapi.models.operations.UpdateRoomRequestBodyMessageReviewHandler;
import org.openapis.openapi.models.operations.UpdateRoomResponse;
import org.openapis.openapi.models.shared.FallbackResultEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRoomRequest req = new UpdateRoomRequest(                new UpdateRoomRequestBody("perferendis") {{
                                loggingConfigurationIdentifiers = new String[]{{
                                    add("magnam"),
                                    add("distinctio"),
                                }};
                                maximumMessageLength = 660174L;
                                maximumMessageRatePerSecond = 287991L;
                                messageReviewHandler = new UpdateRoomRequestBodyMessageReviewHandler() {{
                                    fallbackResult = FallbackResultEnum.ALLOW;
                                    uri = "http://perky-revolution.info";
                                }};;
                                name = "Brandon Brakus V";
                            }};) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateRoomResponse res = sdk.sdk.updateRoom(req);

            if (res.updateRoomResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
