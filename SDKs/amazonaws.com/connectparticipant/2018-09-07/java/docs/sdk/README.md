# SDK

## Overview

<p>Amazon Connect is an easy-to-use omnichannel cloud contact center service that enables companies of any size to deliver superior customer service at a lower cost. Amazon Connect communications capabilities make it easy for companies to deliver personalized interactions across communication channels, including chat. </p> <p>Use the Amazon Connect Participant Service to manage participants (for example, agents, customers, and managers listening in), and to send messages and events within a chat contact. The APIs in the service enable the following: sending chat messages, attachment sharing, managing a participant's connection state and message events, and retrieving chat transcripts.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/connect/>
### Available Operations

* [completeAttachmentUpload](#completeattachmentupload) - <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [createParticipantConnection](#createparticipantconnection) - <p>Creates the participant's connection. </p> <note> <p> <code>ParticipantToken</code> is used for invoking this API instead of <code>ConnectionToken</code>.</p> </note> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <p> <b>Message streaming support</b>: This API can also be used together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p> <b>Feature specifications</b>: For information about feature specifications, such as the allowed number of open websocket connections per participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>
* [disconnectParticipant](#disconnectparticipant) - <p>Disconnects a participant. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [getAttachment](#getattachment) - <p>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [getTranscript](#gettranscript) - <p>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [sendEvent](#sendevent) - <p>Sends an event. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [sendMessage](#sendmessage) - <p>Sends a message.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [startAttachmentUpload](#startattachmentupload) - <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

## completeAttachmentUpload

<p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadRequest;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadRequestBody;
import org.openapis.openapi.models.operations.CompleteAttachmentUploadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompleteAttachmentUploadRequest req = new CompleteAttachmentUploadRequest(                new CompleteAttachmentUploadRequestBody(                new String[]{{
                                                add("delectus"),
                                            }}, "tempora");, "suscipit") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
            }};            

            CompleteAttachmentUploadResponse res = sdk.sdk.completeAttachmentUpload(req);

            if (res.completeAttachmentUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createParticipantConnection

<p>Creates the participant's connection. </p> <note> <p> <code>ParticipantToken</code> is used for invoking this API instead of <code>ConnectionToken</code>.</p> </note> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <p> <b>Message streaming support</b>: This API can also be used together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p> <b>Feature specifications</b>: For information about feature specifications, such as the allowed number of open websocket connections per participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParticipantConnectionRequest;
import org.openapis.openapi.models.operations.CreateParticipantConnectionRequestBody;
import org.openapis.openapi.models.operations.CreateParticipantConnectionResponse;
import org.openapis.openapi.models.shared.ConnectionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParticipantConnectionRequest req = new CreateParticipantConnectionRequest(                new CreateParticipantConnectionRequestBody() {{
                                connectParticipant = false;
                                type = new org.openapis.openapi.models.shared.ConnectionTypeEnum[]{{
                                    add(ConnectionTypeEnum.WEBSOCKET),
                                    add(ConnectionTypeEnum.WEBSOCKET),
                                    add(ConnectionTypeEnum.WEBSOCKET),
                                    add(ConnectionTypeEnum.CONNECTION_CREDENTIALS),
                                }};
                            }};, "perferendis") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            CreateParticipantConnectionResponse res = sdk.sdk.createParticipantConnection(req);

            if (res.createParticipantConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectParticipant

<p>Disconnects a participant. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectParticipantRequest;
import org.openapis.openapi.models.operations.DisconnectParticipantRequestBody;
import org.openapis.openapi.models.operations.DisconnectParticipantResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectParticipantRequest req = new DisconnectParticipantRequest(                new DisconnectParticipantRequestBody() {{
                                clientToken = "molestiae";
                            }};, "quod") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            DisconnectParticipantResponse res = sdk.sdk.disconnectParticipant(req);

            if (res.disconnectParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachment

<p>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttachmentRequest;
import org.openapis.openapi.models.operations.GetAttachmentRequestBody;
import org.openapis.openapi.models.operations.GetAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAttachmentRequest req = new GetAttachmentRequest(                new GetAttachmentRequestBody("occaecati");, "fugit") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetAttachmentResponse res = sdk.sdk.getAttachment(req);

            if (res.getAttachmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTranscript

<p>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTranscriptRequest;
import org.openapis.openapi.models.operations.GetTranscriptRequestBody;
import org.openapis.openapi.models.operations.GetTranscriptRequestBodyScanDirectionEnum;
import org.openapis.openapi.models.operations.GetTranscriptRequestBodySortOrderEnum;
import org.openapis.openapi.models.operations.GetTranscriptRequestBodyStartPosition;
import org.openapis.openapi.models.operations.GetTranscriptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTranscriptRequest req = new GetTranscriptRequest(                new GetTranscriptRequestBody() {{
                                contactId = "qui";
                                maxResults = 774234L;
                                nextToken = "cum";
                                scanDirection = GetTranscriptRequestBodyScanDirectionEnum.FORWARD;
                                sortOrder = GetTranscriptRequestBodySortOrderEnum.DESCENDING;
                                startPosition = new GetTranscriptRequestBodyStartPosition() {{
                                    absoluteTime = "excepturi";
                                    id = "20592939-6fea-4759-aeb1-0faaa2352c59";
                                    mostRecent = 363711L;
                                }};;
                            }};, "minima") {{
                maxResults = "excepturi";
                nextToken = "accusantium";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
            }};            

            GetTranscriptResponse res = sdk.sdk.getTranscript(req);

            if (res.getTranscriptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendEvent

<p>Sends an event. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

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
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendEventRequest req = new SendEventRequest(                new SendEventRequestBody("consequuntur") {{
                                clientToken = "repellat";
                                content = "mollitia";
                            }};, "occaecati") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
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

## sendMessage

<p>Sends a message.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendMessageRequest;
import org.openapis.openapi.models.operations.SendMessageRequestBody;
import org.openapis.openapi.models.operations.SendMessageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendMessageRequest req = new SendMessageRequest(                new SendMessageRequestBody("vitae", "laborum") {{
                                clientToken = "animi";
                            }};, "enim") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "quo";
                xAmzCredential = "sequi";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "possimus";
            }};            

            SendMessageResponse res = sdk.sdk.sendMessage(req);

            if (res.sendMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAttachmentUpload

<p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAttachmentUploadRequest;
import org.openapis.openapi.models.operations.StartAttachmentUploadRequestBody;
import org.openapis.openapi.models.operations.StartAttachmentUploadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAttachmentUploadRequest req = new StartAttachmentUploadRequest(                new StartAttachmentUploadRequestBody("quasi", 622846L, "temporibus", "laborum");, "quasi") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            StartAttachmentUploadResponse res = sdk.sdk.startAttachmentUpload(req);

            if (res.startAttachmentUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
