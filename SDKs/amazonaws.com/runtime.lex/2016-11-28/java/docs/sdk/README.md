# SDK

## Overview

Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of operations (API). Your conversational bot uses the runtime API to understand user utterances (user input text or voice). For example, suppose a user says "I want pizza", your bot sends this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in user conversation on behalf of the bot to elicit required information (slot values, such as pizza size and crust type), and then performs fulfillment activity (that you configured when you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For a list of build-time operations, see the build-time API, . 

Amazon Web Services documentation
<https://docs.aws.amazon.com/lex/>
### Available Operations

* [deleteSession](#deletesession) - Removes session information for a specified bot, alias, and user ID. 
* [getSession](#getsession) - Returns session information for a specified bot, alias, and user ID.
* [postContent](#postcontent) - <p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. </p> <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p> <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you like?". </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". </p> </li> <li> <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: </p> <ul> <li> <p> If the message is to elicit slot data, Amazon Lex returns the following context information: </p> <ul> <li> <p> <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code> </p> </li> <li> <p> <code>x-amz-lex-intent-name</code> header set to the intent name in the current context </p> </li> <li> <p> <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent with their current values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code> header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p> </li> <li> <p> If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
* [postText](#posttext) - <p>Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. </p> <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an optional <code>responseCard</code> to display. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". </p> </li> <li> <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the <code>slotToElicit</code>, <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the response. Consider the following examples: </p> <ul> <li> <p>If the message is to elicit slot data, Amazon Lex returns the following context information:</p> <ul> <li> <p> <code>dialogState</code> set to ElicitSlot </p> </li> <li> <p> <code>intentName</code> set to the intent name in the current context </p> </li> <li> <p> <code>slotToElicit</code> set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>slots</code> set to a map of slots, configured for the intent, with currently known values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to ConfirmIntent and <code>SlotToElicit</code> is set to null. </p> </li> <li> <p>If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent and <code>slotToElicit</code> is set to null. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
* [putSession](#putsession) - <p>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing Sessions</a>.</p>

## deleteSession

Removes session information for a specified bot, alias, and user ID. 

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
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSessionRequest req = new DeleteSessionRequest("iure", "magnam", "debitis") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
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

Returns session information for a specified bot, alias, and user ID.

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
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSessionRequest req = new GetSessionRequest("iusto", "excepturi", "nisi") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
                checkpointLabelFilter = "ipsam";
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

## postContent

<p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. </p> <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p> <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you like?". </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". </p> </li> <li> <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: </p> <ul> <li> <p> If the message is to elicit slot data, Amazon Lex returns the following context information: </p> <ul> <li> <p> <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code> </p> </li> <li> <p> <code>x-amz-lex-intent-name</code> header set to the intent name in the current context </p> </li> <li> <p> <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent with their current values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code> header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p> </li> <li> <p> If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContentRequest;
import org.openapis.openapi.models.operations.PostContentRequestBody;
import org.openapis.openapi.models.operations.PostContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostContentRequest req = new PostContentRequest("sapiente",                 new PostContentRequestBody("quo");, "odit", "at", "at") {{
                accept = "maiores";
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
                xAmzLexActiveContexts = "dicta";
                xAmzLexRequestAttributes = "nam";
                xAmzLexSessionAttributes = "officia";
            }};            

            PostContentResponse res = sdk.sdk.postContent(req);

            if (res.postContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postText

<p>Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. </p> <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an optional <code>responseCard</code> to display. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". </p> </li> <li> <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the <code>slotToElicit</code>, <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the response. Consider the following examples: </p> <ul> <li> <p>If the message is to elicit slot data, Amazon Lex returns the following context information:</p> <ul> <li> <p> <code>dialogState</code> set to ElicitSlot </p> </li> <li> <p> <code>intentName</code> set to the intent name in the current context </p> </li> <li> <p> <code>slotToElicit</code> set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>slots</code> set to a map of slots, configured for the intent, with currently known values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to ConfirmIntent and <code>SlotToElicit</code> is set to null. </p> </li> <li> <p>If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent and <code>slotToElicit</code> is set to null. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTextRequest;
import org.openapis.openapi.models.operations.PostTextRequestBody;
import org.openapis.openapi.models.operations.PostTextResponse;
import org.openapis.openapi.models.shared.ActiveContext;
import org.openapis.openapi.models.shared.ActiveContextTimeToLive;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostTextRequest req = new PostTextRequest(                new PostTextRequestBody("fugit") {{
                                activeContexts = new org.openapis.openapi.models.shared.ActiveContext[]{{
                                    add(new ActiveContext("aspernatur",                 new java.util.HashMap<String, String>() {{
                                                        put("ad", "natus");
                                                    }},                 new ActiveContextTimeToLive() {{
                                                        timeToLiveInSeconds = 149675L;
                                                        turnsToLive = 612096L;
                                                    }};) {{
                                        name = "Ms. Earnest Lebsack";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("qui", "impedit");
                                            put("cum", "esse");
                                        }};
                                        timeToLive = new ActiveContextTimeToLive() {{
                                            timeToLiveInSeconds = 216550L;
                                            turnsToLive = 568434L;
                                        }};
                                    }}),
                                    add(new ActiveContext("reiciendis",                 new java.util.HashMap<String, String>() {{
                                                        put("mollitia", "laborum");
                                                        put("dolores", "dolorem");
                                                        put("corporis", "explicabo");
                                                    }},                 new ActiveContextTimeToLive() {{
                                                        timeToLiveInSeconds = 750686L;
                                                        turnsToLive = 315428L;
                                                    }};) {{
                                        name = "Faye Howe";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("in", "corporis");
                                            put("iste", "iure");
                                            put("saepe", "quidem");
                                        }};
                                        timeToLive = new ActiveContextTimeToLive() {{
                                            timeToLiveInSeconds = 99280L;
                                            turnsToLive = 60225L;
                                        }};
                                    }}),
                                    add(new ActiveContext("mollitia",                 new java.util.HashMap<String, String>() {{
                                                        put("numquam", "commodi");
                                                        put("quam", "molestiae");
                                                        put("velit", "error");
                                                    }},                 new ActiveContextTimeToLive() {{
                                                        timeToLiveInSeconds = 158969L;
                                                        turnsToLive = 338007L;
                                                    }};) {{
                                        name = "Corey Hane III";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("doloribus", "sapiente");
                                            put("architecto", "mollitia");
                                            put("dolorem", "culpa");
                                        }};
                                        timeToLive = new ActiveContextTimeToLive() {{
                                            timeToLiveInSeconds = 161309L;
                                            turnsToLive = 995300L;
                                        }};
                                    }}),
                                }};
                                requestAttributes = new java.util.HashMap<String, String>() {{
                                    put("laborum", "animi");
                                }};
                                sessionAttributes = new java.util.HashMap<String, String>() {{
                                    put("odit", "quo");
                                    put("sequi", "tenetur");
                                }};
                            }};, "ipsam", "id", "possimus") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "error";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "reiciendis";
            }};            

            PostTextResponse res = sdk.sdk.postText(req);

            if (res.postTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSession

<p>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing Sessions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSessionRequest;
import org.openapis.openapi.models.operations.PutSessionRequestBody;
import org.openapis.openapi.models.operations.PutSessionRequestBodyDialogAction;
import org.openapis.openapi.models.operations.PutSessionResponse;
import org.openapis.openapi.models.shared.ActiveContext;
import org.openapis.openapi.models.shared.ActiveContextTimeToLive;
import org.openapis.openapi.models.shared.ConfirmationStatusEnum;
import org.openapis.openapi.models.shared.DialogActionTypeEnum;
import org.openapis.openapi.models.shared.FulfillmentStateEnum;
import org.openapis.openapi.models.shared.IntentSummary;
import org.openapis.openapi.models.shared.MessageFormatTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSessionRequest req = new PutSessionRequest(                new PutSessionRequestBody() {{
                                activeContexts = new org.openapis.openapi.models.shared.ActiveContext[]{{
                                    add(new ActiveContext("iusto",                 new java.util.HashMap<String, String>() {{
                                                        put("harum", "enim");
                                                    }},                 new ActiveContextTimeToLive() {{
                                                        timeToLiveInSeconds = 880476L;
                                                        turnsToLive = 414263L;
                                                    }};) {{
                                        name = "Miss Irma Wolff";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("perferendis", "doloremque");
                                            put("reprehenderit", "ut");
                                            put("maiores", "dicta");
                                        }};
                                        timeToLive = new ActiveContextTimeToLive() {{
                                            timeToLiveInSeconds = 359444L;
                                            turnsToLive = 296140L;
                                        }};
                                    }}),
                                    add(new ActiveContext("veritatis",                 new java.util.HashMap<String, String>() {{
                                                        put("incidunt", "enim");
                                                        put("consequatur", "est");
                                                        put("quibusdam", "explicabo");
                                                        put("deserunt", "distinctio");
                                                    }},                 new ActiveContextTimeToLive() {{
                                                        timeToLiveInSeconds = 841386L;
                                                        turnsToLive = 289406L;
                                                    }};) {{
                                        name = "Eric Emmerich";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("pariatur", "modi");
                                            put("praesentium", "rem");
                                            put("voluptates", "quasi");
                                        }};
                                        timeToLive = new ActiveContextTimeToLive() {{
                                            timeToLiveInSeconds = 921158L;
                                            turnsToLive = 575947L;
                                        }};
                                    }}),
                                    add(new ActiveContext("fugit",                 new java.util.HashMap<String, String>() {{
                                                        put("excepturi", "tempora");
                                                        put("facilis", "tempore");
                                                        put("labore", "delectus");
                                                    }},                 new ActiveContextTimeToLive() {{
                                                        timeToLiveInSeconds = 433288L;
                                                        turnsToLive = 248753L;
                                                    }};) {{
                                        name = "Tina Jacobi";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("magni", "assumenda");
                                        }};
                                        timeToLive = new ActiveContextTimeToLive() {{
                                            timeToLiveInSeconds = 369808L;
                                            turnsToLive = 4695L;
                                        }};
                                    }}),
                                    add(new ActiveContext("maiores",                 new java.util.HashMap<String, String>() {{
                                                        put("dicta", "magnam");
                                                        put("cumque", "facere");
                                                        put("ea", "aliquid");
                                                    }},                 new ActiveContextTimeToLive() {{
                                                        timeToLiveInSeconds = 675439L;
                                                        turnsToLive = 881104L;
                                                    }};) {{
                                        name = "Sergio Hyatt";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("officia", "dolor");
                                            put("debitis", "a");
                                            put("dolorum", "in");
                                        }};
                                        timeToLive = new ActiveContextTimeToLive() {{
                                            timeToLiveInSeconds = 449198L;
                                            turnsToLive = 846409L;
                                        }};
                                    }}),
                                }};
                                dialogAction = new PutSessionRequestBodyDialogAction() {{
                                    fulfillmentState = FulfillmentStateEnum.FULFILLED;
                                    intentName = "occaecati";
                                    message = "enim";
                                    messageFormat = MessageFormatTypeEnum.COMPOSITE;
                                    slotToElicit = "delectus";
                                    slots = new java.util.HashMap<String, String>() {{
                                        put("provident", "nam");
                                        put("id", "blanditiis");
                                        put("deleniti", "sapiente");
                                    }};
                                    type = DialogActionTypeEnum.CONFIRM_INTENT;
                                }};;
                                recentIntentSummaryView = new org.openapis.openapi.models.shared.IntentSummary[]{{
                                    add(new IntentSummary(DialogActionTypeEnum.CONFIRM_INTENT) {{
                                        checkpointLabel = "nisi";
                                        confirmationStatus = ConfirmationStatusEnum.CONFIRMED;
                                        dialogActionType = DialogActionTypeEnum.CLOSE;
                                        fulfillmentState = FulfillmentStateEnum.FAILED;
                                        intentName = "molestiae";
                                        slotToElicit = "perferendis";
                                        slots = new java.util.HashMap<String, String>() {{
                                            put("magnam", "distinctio");
                                            put("id", "labore");
                                        }};
                                    }}),
                                    add(new IntentSummary(DialogActionTypeEnum.ELICIT_SLOT) {{
                                        checkpointLabel = "suscipit";
                                        confirmationStatus = ConfirmationStatusEnum.CONFIRMED;
                                        dialogActionType = DialogActionTypeEnum.CLOSE;
                                        fulfillmentState = FulfillmentStateEnum.FAILED;
                                        intentName = "vero";
                                        slotToElicit = "aspernatur";
                                        slots = new java.util.HashMap<String, String>() {{
                                            put("magnam", "et");
                                        }};
                                    }}),
                                    add(new IntentSummary(DialogActionTypeEnum.ELICIT_SLOT) {{
                                        checkpointLabel = "ullam";
                                        confirmationStatus = ConfirmationStatusEnum.CONFIRMED;
                                        dialogActionType = DialogActionTypeEnum.ELICIT_SLOT;
                                        fulfillmentState = FulfillmentStateEnum.FAILED;
                                        intentName = "accusantium";
                                        slotToElicit = "mollitia";
                                        slots = new java.util.HashMap<String, String>() {{
                                            put("mollitia", "ad");
                                            put("eum", "dolor");
                                            put("necessitatibus", "odit");
                                            put("nemo", "quasi");
                                        }};
                                    }}),
                                }};
                                sessionAttributes = new java.util.HashMap<String, String>() {{
                                    put("debitis", "eius");
                                    put("maxime", "deleniti");
                                    put("facilis", "in");
                                    put("architecto", "architecto");
                                }};
                            }};, "repudiandae", "ullam", "expedita") {{
                accept = "nihil";
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
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
