# SDK

## Overview

This section contains documentation for the Amazon Lex V2 Runtime V2 API operations.

Amazon Web Services documentation
<https://docs.aws.amazon.com/runtime-v2-lex/>
### Available Operations

* [deleteSession](#deletesession) - <p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>
* [getSession](#getsession) - <p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>
* [putSession](#putsession) - Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.
* [recognizeText](#recognizetext) - <p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
* [recognizeUtterance](#recognizeutterance) - <p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

## deleteSession

<p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSessionRequest;
import org.openapis.openapi.models.operations.DeleteSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSessionRequest req = new DeleteSessionRequest("magnam", "debitis", "ipsa", "delectus") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            DeleteSessionResponse res = sdk.sdk.deleteSession(req);

            if (res.deleteSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSession

<p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSessionRequest;
import org.openapis.openapi.models.operations.GetSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSessionRequest req = new GetSessionRequest("nisi", "recusandae", "temporibus", "ab") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            GetSessionResponse res = sdk.sdk.getSession(req);

            if (res.getSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSession

Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSessionRequest;
import org.openapis.openapi.models.operations.PutSessionRequestBody;
import org.openapis.openapi.models.operations.PutSessionRequestBodySessionState;
import org.openapis.openapi.models.operations.PutSessionResponse;
import org.openapis.openapi.models.shared.ActiveContext;
import org.openapis.openapi.models.shared.ActiveContextTimeToLive;
import org.openapis.openapi.models.shared.Button;
import org.openapis.openapi.models.shared.ConfirmationStateEnum;
import org.openapis.openapi.models.shared.DialogAction;
import org.openapis.openapi.models.shared.DialogActionTypeEnum;
import org.openapis.openapi.models.shared.ElicitSubSlot;
import org.openapis.openapi.models.shared.ImageResponseCard;
import org.openapis.openapi.models.shared.Intent;
import org.openapis.openapi.models.shared.IntentStateEnum;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.MessageContentTypeEnum;
import org.openapis.openapi.models.shared.RuntimeHintDetails;
import org.openapis.openapi.models.shared.RuntimeHintValue;
import org.openapis.openapi.models.shared.RuntimeHints;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Slot;
import org.openapis.openapi.models.shared.StyleTypeEnum;
import org.openapis.openapi.models.shared.Value;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSessionRequest req = new PutSessionRequest(                new PutSessionRequestBody(                new PutSessionRequestBodySessionState() {{
                                                activeContexts = new org.openapis.openapi.models.shared.ActiveContext[]{{
                                                    add(new ActiveContext(                new java.util.HashMap<String, String>() {{
                                                                        put("beatae", "commodi");
                                                                        put("molestiae", "modi");
                                                                        put("qui", "impedit");
                                                                    }}, "cum",                 new ActiveContextTimeToLive(456150L, 216550L);) {{
                                                        contextAttributes = new java.util.HashMap<String, String>() {{
                                                            put("at", "maiores");
                                                            put("molestiae", "quod");
                                                            put("quod", "esse");
                                                            put("totam", "porro");
                                                        }};
                                                        name = "Samuel Reichel";
                                                        timeToLive = new ActiveContextTimeToLive(944669L, 758616L) {{
                                                            timeToLiveInSeconds = 143353L;
                                                            turnsToLive = 537373L;
                                                        }};
                                                    }}),
                                                }};
                                                dialogAction = new DialogAction(DialogActionTypeEnum.ELICIT_INTENT) {{
                                                    slotElicitationStyle = StyleTypeEnum.DEFAULT_;
                                                    slotToElicit = "perferendis";
                                                    subSlotToElicit = new ElicitSubSlot("ad") {{
                                                        subSlotToElicit = new ElicitSubSlot();;
                                                    }};;
                                                }};;
                                                intent = new Intent("natus") {{
                                                    confirmationState = ConfirmationStateEnum.CONFIRMED;
                                                    slots = new java.util.HashMap<String, org.openapis.openapi.models.shared.Slot>() {{
                                                        put("dolor", new Slot() {{
                                                            subSlots = new java.util.HashMap<String, org.openapis.openapi.models.shared.Slot>() {{
                                                                put("laboriosam", new Slot() {{}});
                                                                put("hic", new Slot() {{}});
                                                                put("saepe", new Slot() {{}});
                                                            }};
                                                            value = new Value("saepe") {{
                                                                interpretedValue = "fuga";
                                                                originalValue = "in";
                                                                resolvedValues = new String[]{{
                                                                    add("iste"),
                                                                    add("iure"),
                                                                }};
                                                            }};
                                                            values = new org.openapis.openapi.models.shared.Slot[]{{
                                                                add(new Slot() {{}}),
                                                                add(new Slot() {{}}),
                                                                add(new Slot() {{}}),
                                                            }};
                                                        }});
                                                        put("architecto", new Slot() {{
                                                            subSlots = new java.util.HashMap<String, org.openapis.openapi.models.shared.Slot>() {{
                                                                put("reiciendis", new Slot() {{}});
                                                            }};
                                                            value = new Value("explicabo") {{
                                                                interpretedValue = "est";
                                                                originalValue = "mollitia";
                                                                resolvedValues = new String[]{{
                                                                    add("dolores"),
                                                                    add("dolorem"),
                                                                    add("corporis"),
                                                                }};
                                                            }};
                                                            values = new org.openapis.openapi.models.shared.Slot[]{{
                                                                add(new Slot() {{}}),
                                                                add(new Slot() {{}}),
                                                                add(new Slot() {{}}),
                                                                add(new Slot() {{}}),
                                                            }};
                                                        }});
                                                        put("enim", new Slot() {{
                                                            subSlots = new java.util.HashMap<String, org.openapis.openapi.models.shared.Slot>() {{
                                                                put("nemo", new Slot() {{}});
                                                                put("minima", new Slot() {{}});
                                                                put("excepturi", new Slot() {{}});
                                                            }};
                                                            value = new Value("mollitia") {{
                                                                interpretedValue = "accusantium";
                                                                originalValue = "iure";
                                                                resolvedValues = new String[]{{
                                                                    add("doloribus"),
                                                                    add("sapiente"),
                                                                    add("architecto"),
                                                                }};
                                                            }};
                                                            values = new org.openapis.openapi.models.shared.Slot[]{{
                                                                add(new Slot() {{}}),
                                                            }};
                                                        }});
                                                    }};
                                                    state = IntentStateEnum.READY_FOR_FULFILLMENT;
                                                }};;
                                                originatingRequestId = "consequuntur";
                                                runtimeHints = new RuntimeHints() {{
                                                    slotHints = new java.util.HashMap<String, java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>>() {{
                                                        put("mollitia", new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                            put("numquam", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("molestiae") {{
                                                                        phrase = "quam";
                                                                    }}),
                                                                    add(new RuntimeHintValue("error") {{
                                                                        phrase = "velit";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("quis", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                            put("vitae", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("enim") {{
                                                                        phrase = "animi";
                                                                    }}),
                                                                    add(new RuntimeHintValue("quo") {{
                                                                        phrase = "odit";
                                                                    }}),
                                                                    add(new RuntimeHintValue("tenetur") {{
                                                                        phrase = "sequi";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("id", new RuntimeHintDetails() {{}});
                                                                    put("possimus", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                            put("aut", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("temporibus") {{
                                                                        phrase = "error";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("quasi", new RuntimeHintDetails() {{}});
                                                                    put("reiciendis", new RuntimeHintDetails() {{}});
                                                                    put("voluptatibus", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                        }});
                                                        put("vero", new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                            put("praesentium", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("omnis") {{
                                                                        phrase = "ipsa";
                                                                    }}),
                                                                    add(new RuntimeHintValue("cum") {{
                                                                        phrase = "voluptate";
                                                                    }}),
                                                                    add(new RuntimeHintValue("doloremque") {{
                                                                        phrase = "perferendis";
                                                                    }}),
                                                                    add(new RuntimeHintValue("ut") {{
                                                                        phrase = "reprehenderit";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("dicta", new RuntimeHintDetails() {{}});
                                                                    put("corporis", new RuntimeHintDetails() {{}});
                                                                    put("dolore", new RuntimeHintDetails() {{}});
                                                                    put("iusto", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                            put("dicta", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("accusamus") {{
                                                                        phrase = "enim";
                                                                    }}),
                                                                    add(new RuntimeHintValue("repudiandae") {{
                                                                        phrase = "commodi";
                                                                    }}),
                                                                    add(new RuntimeHintValue("ipsum") {{
                                                                        phrase = "quae";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("molestias", new RuntimeHintDetails() {{}});
                                                                    put("excepturi", new RuntimeHintDetails() {{}});
                                                                    put("pariatur", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                        }});
                                                        put("modi", new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                            put("rem", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("repudiandae") {{
                                                                        phrase = "quasi";
                                                                    }}),
                                                                    add(new RuntimeHintValue("veritatis") {{
                                                                        phrase = "sint";
                                                                    }}),
                                                                    add(new RuntimeHintValue("incidunt") {{
                                                                        phrase = "itaque";
                                                                    }}),
                                                                    add(new RuntimeHintValue("consequatur") {{
                                                                        phrase = "enim";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("quibusdam", new RuntimeHintDetails() {{}});
                                                                    put("explicabo", new RuntimeHintDetails() {{}});
                                                                    put("deserunt", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                            put("distinctio", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("modi") {{
                                                                        phrase = "labore";
                                                                    }}),
                                                                    add(new RuntimeHintValue("aliquid") {{
                                                                        phrase = "qui";
                                                                    }}),
                                                                    add(new RuntimeHintValue("quos") {{
                                                                        phrase = "cupiditate";
                                                                    }}),
                                                                    add(new RuntimeHintValue("magni") {{
                                                                        phrase = "perferendis";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("ipsam", new RuntimeHintDetails() {{}});
                                                                    put("alias", new RuntimeHintDetails() {{}});
                                                                    put("fugit", new RuntimeHintDetails() {{}});
                                                                    put("dolorum", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                            put("excepturi", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("tempore") {{
                                                                        phrase = "facilis";
                                                                    }}),
                                                                    add(new RuntimeHintValue("delectus") {{
                                                                        phrase = "labore";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("non", new RuntimeHintDetails() {{}});
                                                                    put("eligendi", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                        }});
                                                        put("sint", new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                            put("provident", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("officia") {{
                                                                        phrase = "sint";
                                                                    }}),
                                                                    add(new RuntimeHintValue("debitis") {{
                                                                        phrase = "dolor";
                                                                    }}),
                                                                    add(new RuntimeHintValue("dolorum") {{
                                                                        phrase = "a";
                                                                    }}),
                                                                    add(new RuntimeHintValue("in") {{
                                                                        phrase = "in";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("maiores", new RuntimeHintDetails() {{}});
                                                                    put("rerum", new RuntimeHintDetails() {{}});
                                                                    put("dicta", new RuntimeHintDetails() {{}});
                                                                    put("magnam", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                            put("cumque", new RuntimeHintDetails() {{
                                                                runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                                    add(new RuntimeHintValue("aliquid") {{
                                                                        phrase = "ea";
                                                                    }}),
                                                                    add(new RuntimeHintValue("accusamus") {{
                                                                        phrase = "laborum";
                                                                    }}),
                                                                    add(new RuntimeHintValue("occaecati") {{
                                                                        phrase = "non";
                                                                    }}),
                                                                    add(new RuntimeHintValue("accusamus") {{
                                                                        phrase = "enim";
                                                                    }}),
                                                                }};
                                                                subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                                    put("quidem", new RuntimeHintDetails() {{}});
                                                                    put("provident", new RuntimeHintDetails() {{}});
                                                                    put("nam", new RuntimeHintDetails() {{}});
                                                                    put("id", new RuntimeHintDetails() {{}});
                                                                }};
                                                            }});
                                                        }});
                                                    }};
                                                }};;
                                                sessionAttributes = new java.util.HashMap<String, String>() {{
                                                    put("deleniti", "sapiente");
                                                    put("amet", "deserunt");
                                                    put("nisi", "vel");
                                                }};
                                            }};) {{
                                messages = new org.openapis.openapi.models.shared.Message[]{{
                                    add(new Message(MessageContentTypeEnum.PLAIN_TEXT) {{
                                        content = "omnis";
                                        contentType = MessageContentTypeEnum.IMAGE_RESPONSE_CARD;
                                        imageResponseCard = new ImageResponseCard("natus") {{
                                            buttons = new org.openapis.openapi.models.shared.Button[]{{
                                                add(new Button("distinctio", "id") {{
                                                    text = "nihil";
                                                    value = "magnam";
                                                }}),
                                            }};
                                            imageUrl = "labore";
                                            subtitle = "labore";
                                            title = "Mrs.";
                                        }};
                                    }}),
                                    add(new Message(MessageContentTypeEnum.CUSTOM_PAYLOAD) {{
                                        content = "eum";
                                        contentType = MessageContentTypeEnum.SSML;
                                        imageResponseCard = new ImageResponseCard("sint") {{
                                            buttons = new org.openapis.openapi.models.shared.Button[]{{
                                                add(new Button("et", "excepturi") {{
                                                    text = "architecto";
                                                    value = "magnam";
                                                }}),
                                            }};
                                            imageUrl = "ullam";
                                            subtitle = "provident";
                                            title = "Ms.";
                                        }};
                                    }}),
                                    add(new Message(MessageContentTypeEnum.CUSTOM_PAYLOAD) {{
                                        content = "mollitia";
                                        contentType = MessageContentTypeEnum.SSML;
                                        imageResponseCard = new ImageResponseCard("architecto") {{
                                            buttons = new org.openapis.openapi.models.shared.Button[]{{
                                                add(new Button("dolor", "necessitatibus") {{
                                                    text = "ad";
                                                    value = "eum";
                                                }}),
                                                add(new Button("quasi", "iure") {{
                                                    text = "odit";
                                                    value = "nemo";
                                                }}),
                                                add(new Button("eius", "maxime") {{
                                                    text = "doloribus";
                                                    value = "debitis";
                                                }}),
                                            }};
                                            imageUrl = "deleniti";
                                            subtitle = "facilis";
                                            title = "Ms.";
                                        }};
                                    }}),
                                }};
                                requestAttributes = new java.util.HashMap<String, String>() {{
                                    put("ullam", "expedita");
                                    put("nihil", "repellat");
                                    put("quibusdam", "sed");
                                    put("saepe", "pariatur");
                                }};
                            }};, "accusantium", "consequuntur", "praesentium", "natus") {{
                responseContentType = "magni";
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            PutSessionResponse res = sdk.sdk.putSession(req);

            if (res.putSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recognizeText

<p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecognizeTextRequest;
import org.openapis.openapi.models.operations.RecognizeTextRequestBody;
import org.openapis.openapi.models.operations.RecognizeTextRequestBodySessionState;
import org.openapis.openapi.models.operations.RecognizeTextResponse;
import org.openapis.openapi.models.shared.ActiveContext;
import org.openapis.openapi.models.shared.ActiveContextTimeToLive;
import org.openapis.openapi.models.shared.ConfirmationStateEnum;
import org.openapis.openapi.models.shared.DialogAction;
import org.openapis.openapi.models.shared.DialogActionTypeEnum;
import org.openapis.openapi.models.shared.ElicitSubSlot;
import org.openapis.openapi.models.shared.Intent;
import org.openapis.openapi.models.shared.IntentStateEnum;
import org.openapis.openapi.models.shared.RuntimeHintDetails;
import org.openapis.openapi.models.shared.RuntimeHintValue;
import org.openapis.openapi.models.shared.RuntimeHints;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Slot;
import org.openapis.openapi.models.shared.StyleTypeEnum;
import org.openapis.openapi.models.shared.Value;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RecognizeTextRequest req = new RecognizeTextRequest(                new RecognizeTextRequestBody("ea") {{
                                requestAttributes = new java.util.HashMap<String, String>() {{
                                    put("ab", "maiores");
                                }};
                                sessionState = new RecognizeTextRequestBodySessionState() {{
                                    activeContexts = new org.openapis.openapi.models.shared.ActiveContext[]{{
                                        add(new ActiveContext(                new java.util.HashMap<String, String>() {{
                                                            put("nobis", "dolores");
                                                            put("quis", "totam");
                                                            put("dignissimos", "eaque");
                                                        }}, "quis",                 new ActiveContextTimeToLive(199996L, 179490L);) {{
                                            contextAttributes = new java.util.HashMap<String, String>() {{
                                                put("voluptate", "autem");
                                                put("nam", "eaque");
                                            }};
                                            name = "Dr. Herman Wolf";
                                            timeToLive = new ActiveContextTimeToLive(359978L, 944124L) {{
                                                timeToLiveInSeconds = 11714L;
                                                turnsToLive = 764912L;
                                            }};
                                        }}),
                                        add(new ActiveContext(                new java.util.HashMap<String, String>() {{
                                                            put("porro", "consequuntur");
                                                        }}, "blanditiis",                 new ActiveContextTimeToLive(621479L, 50370L);) {{
                                            contextAttributes = new java.util.HashMap<String, String>() {{
                                                put("dolores", "minus");
                                            }};
                                            name = "Rosa Swift";
                                            timeToLive = new ActiveContextTimeToLive(704415L, 596656L) {{
                                                timeToLiveInSeconds = 928082L;
                                                turnsToLive = 608253L;
                                            }};
                                        }}),
                                        add(new ActiveContext(                new java.util.HashMap<String, String>() {{
                                                            put("dolorem", "dolorem");
                                                            put("dolor", "qui");
                                                        }}, "ipsum",                 new ActiveContextTimeToLive(944373L, 569574L);) {{
                                            contextAttributes = new java.util.HashMap<String, String>() {{
                                                put("rerum", "adipisci");
                                                put("asperiores", "earum");
                                                put("modi", "iste");
                                            }};
                                            name = "Casey Stracke";
                                            timeToLive = new ActiveContextTimeToLive(311945L, 554242L) {{
                                                timeToLiveInSeconds = 730122L;
                                                turnsToLive = 964490L;
                                            }};
                                        }}),
                                    }};
                                    dialogAction = new DialogAction(DialogActionTypeEnum.ELICIT_SLOT) {{
                                        slotElicitationStyle = StyleTypeEnum.SPELL_BY_LETTER;
                                        slotToElicit = "dignissimos";
                                        subSlotToElicit = new ElicitSubSlot("reiciendis") {{
                                            subSlotToElicit = new ElicitSubSlot();;
                                        }};;
                                    }};;
                                    intent = new Intent("amet") {{
                                        confirmationState = ConfirmationStateEnum.NONE;
                                        slots = new java.util.HashMap<String, org.openapis.openapi.models.shared.Slot>() {{
                                            put("veritatis", new Slot() {{
                                                subSlots = new java.util.HashMap<String, org.openapis.openapi.models.shared.Slot>() {{
                                                    put("ipsa", new Slot() {{}});
                                                }};
                                                value = new Value("voluptatibus") {{
                                                    interpretedValue = "iure";
                                                    originalValue = "odio";
                                                    resolvedValues = new String[]{{
                                                        add("accusamus"),
                                                        add("quidem"),
                                                    }};
                                                }};
                                                values = new org.openapis.openapi.models.shared.Slot[]{{
                                                    add(new Slot() {{}}),
                                                    add(new Slot() {{}}),
                                                }};
                                            }});
                                            put("natus", new Slot() {{
                                                subSlots = new java.util.HashMap<String, org.openapis.openapi.models.shared.Slot>() {{
                                                    put("atque", new Slot() {{}});
                                                }};
                                                value = new Value("dolorum") {{
                                                    interpretedValue = "sit";
                                                    originalValue = "fugiat";
                                                    resolvedValues = new String[]{{
                                                        add("soluta"),
                                                    }};
                                                }};
                                                values = new org.openapis.openapi.models.shared.Slot[]{{
                                                    add(new Slot() {{}}),
                                                    add(new Slot() {{}}),
                                                }};
                                            }});
                                        }};
                                        state = IntentStateEnum.IN_PROGRESS;
                                    }};;
                                    originatingRequestId = "dolorum";
                                    runtimeHints = new RuntimeHints() {{
                                        slotHints = new java.util.HashMap<String, java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>>() {{
                                            put("omnis", new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                put("distinctio", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("ipsum") {{
                                                            phrase = "nihil";
                                                        }}),
                                                        add(new RuntimeHintValue("id") {{
                                                            phrase = "voluptate";
                                                        }}),
                                                        add(new RuntimeHintValue("eius") {{
                                                            phrase = "saepe";
                                                        }}),
                                                        add(new RuntimeHintValue("perferendis") {{
                                                            phrase = "aspernatur";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("optio", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                                put("accusamus", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("suscipit") {{
                                                            phrase = "saepe";
                                                        }}),
                                                        add(new RuntimeHintValue("provident") {{
                                                            phrase = "deserunt";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("repellendus", new RuntimeHintDetails() {{}});
                                                        put("totam", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                                put("similique", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("quaerat") {{
                                                            phrase = "at";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("vel", new RuntimeHintDetails() {{}});
                                                        put("quod", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                                put("officiis", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("a") {{
                                                            phrase = "dolorum";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("harum", new RuntimeHintDetails() {{}});
                                                        put("iusto", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                            }});
                                            put("ipsum", new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                put("tenetur", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("accusamus") {{
                                                            phrase = "tempore";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("enim", new RuntimeHintDetails() {{}});
                                                        put("dolorem", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                                put("sapiente", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("sit") {{
                                                            phrase = "nihil";
                                                        }}),
                                                        add(new RuntimeHintValue("neque") {{
                                                            phrase = "expedita";
                                                        }}),
                                                        add(new RuntimeHintValue("vel") {{
                                                            phrase = "sed";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("voluptas", new RuntimeHintDetails() {{}});
                                                        put("deserunt", new RuntimeHintDetails() {{}});
                                                        put("quam", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                                put("ipsum", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("cupiditate") {{
                                                            phrase = "qui";
                                                        }}),
                                                        add(new RuntimeHintValue("pariatur") {{
                                                            phrase = "maxime";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("dicta", new RuntimeHintDetails() {{}});
                                                        put("laborum", new RuntimeHintDetails() {{}});
                                                        put("totam", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                                put("incidunt", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("distinctio") {{
                                                            phrase = "dolores";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("aliquid", new RuntimeHintDetails() {{}});
                                                        put("quam", new RuntimeHintDetails() {{}});
                                                        put("molestias", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                            }});
                                            put("temporibus", new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                put("neque", new RuntimeHintDetails() {{
                                                    runtimeHintValues = new org.openapis.openapi.models.shared.RuntimeHintValue[]{{
                                                        add(new RuntimeHintValue("odio") {{
                                                            phrase = "magni";
                                                        }}),
                                                    }};
                                                    subSlotHints = new java.util.HashMap<String, org.openapis.openapi.models.shared.RuntimeHintDetails>() {{
                                                        put("ullam", new RuntimeHintDetails() {{}});
                                                    }};
                                                }});
                                            }});
                                        }};
                                    }};;
                                    sessionAttributes = new java.util.HashMap<String, String>() {{
                                        put("hic", "voluptatem");
                                        put("cumque", "soluta");
                                        put("nobis", "et");
                                    }};
                                }};;
                            }};, "saepe", "ipsum", "veritatis", "nobis") {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "cupiditate";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolore";
            }};            

            RecognizeTextResponse res = sdk.sdk.recognizeText(req);

            if (res.recognizeTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recognizeUtterance

<p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecognizeUtteranceRequest;
import org.openapis.openapi.models.operations.RecognizeUtteranceRequestBody;
import org.openapis.openapi.models.operations.RecognizeUtteranceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RecognizeUtteranceRequest req = new RecognizeUtteranceRequest("adipisci",                 new RecognizeUtteranceRequestBody() {{
                                inputStream = "dolorum";
                            }};, "architecto", "quae", "aut", "quas") {{
                responseContentType = "itaque";
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "repellendus";
                xAmzDate = "porro";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "facilis";
                xAmzLexRequestAttributes = "cupiditate";
                xAmzLexSessionState = "qui";
            }};            

            RecognizeUtteranceResponse res = sdk.sdk.recognizeUtterance(req);

            if (res.recognizeUtteranceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
