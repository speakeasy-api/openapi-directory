# SDK

## Overview

Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of operations (API). Your conversational bot uses the runtime API to understand user utterances (user input text or voice). For example, suppose a user says "I want pizza", your bot sends this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in user conversation on behalf of the bot to elicit required information (slot values, such as pizza size and crust type), and then performs fulfillment activity (that you configured when you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For a list of build-time operations, see the build-time API, . 

Amazon Web Services documentation
<https://docs.aws.amazon.com/lex/>
### Available Operations

* [DeleteSession](#deletesession) - Removes session information for a specified bot, alias, and user ID. 
* [GetSession](#getsession) - Returns session information for a specified bot, alias, and user ID.
* [PostContent](#postcontent) - <p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. </p> <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p> <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you like?". </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". </p> </li> <li> <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: </p> <ul> <li> <p> If the message is to elicit slot data, Amazon Lex returns the following context information: </p> <ul> <li> <p> <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code> </p> </li> <li> <p> <code>x-amz-lex-intent-name</code> header set to the intent name in the current context </p> </li> <li> <p> <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent with their current values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code> header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p> </li> <li> <p> If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
* [PostText](#posttext) - <p>Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. </p> <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an optional <code>responseCard</code> to display. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". </p> </li> <li> <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the <code>slotToElicit</code>, <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the response. Consider the following examples: </p> <ul> <li> <p>If the message is to elicit slot data, Amazon Lex returns the following context information:</p> <ul> <li> <p> <code>dialogState</code> set to ElicitSlot </p> </li> <li> <p> <code>intentName</code> set to the intent name in the current context </p> </li> <li> <p> <code>slotToElicit</code> set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>slots</code> set to a map of slots, configured for the intent, with currently known values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to ConfirmIntent and <code>SlotToElicit</code> is set to null. </p> </li> <li> <p>If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent and <code>slotToElicit</code> is set to null. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
* [PutSession](#putsession) - <p>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing Sessions</a>.</p>

## DeleteSession

Removes session information for a specified bot, alias, and user ID. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSession(ctx, operations.DeleteSessionRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("delectus"),
        BotAlias: "tempora",
        BotName: "suscipit",
        UserID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSessionResponse != nil {
        // handle response
    }
}
```

## GetSession

Returns session information for a specified bot, alias, and user ID.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSession(ctx, operations.GetSessionRequest{
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        BotAlias: "temporibus",
        BotName: "ab",
        CheckpointLabelFilter: sdk.String("quis"),
        UserID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSessionResponse != nil {
        // handle response
    }
}
```

## PostContent

<p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. </p> <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p> <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you like?". </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". </p> </li> <li> <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: </p> <ul> <li> <p> If the message is to elicit slot data, Amazon Lex returns the following context information: </p> <ul> <li> <p> <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code> </p> </li> <li> <p> <code>x-amz-lex-intent-name</code> header set to the intent name in the current context </p> </li> <li> <p> <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent with their current values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code> header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p> </li> <li> <p> If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostContent(ctx, operations.PostContentRequest{
        Accept: sdk.String("deserunt"),
        ContentType: "perferendis",
        RequestBody: operations.PostContentRequestBody{
            InputStream: "ipsam",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        BotAlias: "molestiae",
        BotName: "quod",
        UserID: "quod",
        XAmzLexActiveContexts: sdk.String("esse"),
        XAmzLexRequestAttributes: sdk.String("totam"),
        XAmzLexSessionAttributes: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostContentResponse != nil {
        // handle response
    }
}
```

## PostText

<p>Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. </p> <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an optional <code>responseCard</code> to display. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". </p> </li> <li> <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the <code>slotToElicit</code>, <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the response. Consider the following examples: </p> <ul> <li> <p>If the message is to elicit slot data, Amazon Lex returns the following context information:</p> <ul> <li> <p> <code>dialogState</code> set to ElicitSlot </p> </li> <li> <p> <code>intentName</code> set to the intent name in the current context </p> </li> <li> <p> <code>slotToElicit</code> set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>slots</code> set to a map of slots, configured for the intent, with currently known values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to ConfirmIntent and <code>SlotToElicit</code> is set to null. </p> </li> <li> <p>If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent and <code>slotToElicit</code> is set to null. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostText(ctx, operations.PostTextRequest{
        RequestBody: operations.PostTextRequestBody{
            ActiveContexts: []shared.ActiveContext{
                shared.ActiveContext{
                    Name: "Antoinette Nikolaus",
                    Parameters: map[string]string{
                        "hic": "optio",
                        "totam": "beatae",
                        "commodi": "molestiae",
                    },
                    TimeToLive: shared.ActiveContextTimeToLive{
                        TimeToLiveInSeconds: sdk.Int64(264555),
                        TurnsToLive: sdk.Int64(186332),
                    },
                },
                shared.ActiveContext{
                    Name: "Jonathon Klocko",
                    Parameters: map[string]string{
                        "perferendis": "ad",
                    },
                    TimeToLive: shared.ActiveContextTimeToLive{
                        TimeToLiveInSeconds: sdk.Int64(617636),
                        TurnsToLive: sdk.Int64(149675),
                    },
                },
                shared.ActiveContext{
                    Name: "Curtis Morissette",
                    Parameters: map[string]string{
                        "fuga": "in",
                        "corporis": "iste",
                        "iure": "saepe",
                        "quidem": "architecto",
                    },
                    TimeToLive: shared.ActiveContextTimeToLive{
                        TimeToLiveInSeconds: sdk.Int64(60225),
                        TurnsToLive: sdk.Int64(969810),
                    },
                },
            },
            InputText: "est",
            RequestAttributes: map[string]string{
                "laborum": "dolores",
                "dolorem": "corporis",
                "explicabo": "nobis",
            },
            SessionAttributes: map[string]string{
                "omnis": "nemo",
                "minima": "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        BotAlias: "dolorem",
        BotName: "culpa",
        UserID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostTextResponse != nil {
        // handle response
    }
}
```

## PutSession

<p>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing Sessions</a>.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutSession(ctx, operations.PutSessionRequest{
        Accept: sdk.String("repellat"),
        RequestBody: operations.PutSessionRequestBody{
            ActiveContexts: []shared.ActiveContext{
                shared.ActiveContext{
                    Name: "Francis Jerde",
                    Parameters: map[string]string{
                        "error": "quia",
                    },
                    TimeToLive: shared.ActiveContextTimeToLive{
                        TimeToLiveInSeconds: sdk.Int64(338007),
                        TurnsToLive: sdk.Int64(110375),
                    },
                },
                shared.ActiveContext{
                    Name: "Matt Hamill",
                    Parameters: map[string]string{
                        "tenetur": "ipsam",
                    },
                    TimeToLive: shared.ActiveContextTimeToLive{
                        TimeToLiveInSeconds: sdk.Int64(662527),
                        TurnsToLive: sdk.Int64(820994),
                    },
                },
                shared.ActiveContext{
                    Name: "Joyce Mueller",
                    Parameters: map[string]string{
                        "reiciendis": "voluptatibus",
                    },
                    TimeToLive: shared.ActiveContextTimeToLive{
                        TimeToLiveInSeconds: sdk.Int64(878194),
                        TurnsToLive: sdk.Int64(468651),
                    },
                },
            },
            DialogAction: &operations.PutSessionRequestBodyDialogAction{
                FulfillmentState: shared.FulfillmentStateEnumFailed.ToPointer(),
                IntentName: sdk.String("voluptatibus"),
                Message: sdk.String("ipsa"),
                MessageFormat: shared.MessageFormatTypeEnumSsml.ToPointer(),
                SlotToElicit: sdk.String("voluptate"),
                Slots: map[string]string{
                    "perferendis": "doloremque",
                    "reprehenderit": "ut",
                    "maiores": "dicta",
                },
                Type: shared.DialogActionTypeEnumConfirmIntent.ToPointer(),
            },
            RecentIntentSummaryView: []shared.IntentSummary{
                shared.IntentSummary{
                    CheckpointLabel: sdk.String("iusto"),
                    ConfirmationStatus: shared.ConfirmationStatusEnumNone.ToPointer(),
                    DialogActionType: shared.DialogActionTypeEnumClose,
                    FulfillmentState: shared.FulfillmentStateEnumFulfilled.ToPointer(),
                    IntentName: sdk.String("accusamus"),
                    SlotToElicit: sdk.String("commodi"),
                    Slots: map[string]string{
                        "quae": "ipsum",
                        "quidem": "molestias",
                        "excepturi": "pariatur",
                        "modi": "praesentium",
                    },
                },
                shared.IntentSummary{
                    CheckpointLabel: sdk.String("rem"),
                    ConfirmationStatus: shared.ConfirmationStatusEnumDenied.ToPointer(),
                    DialogActionType: shared.DialogActionTypeEnumElicitIntent,
                    FulfillmentState: shared.FulfillmentStateEnumReadyForFulfillment.ToPointer(),
                    IntentName: sdk.String("sint"),
                    SlotToElicit: sdk.String("veritatis"),
                    Slots: map[string]string{
                        "incidunt": "enim",
                        "consequatur": "est",
                        "quibusdam": "explicabo",
                        "deserunt": "distinctio",
                    },
                },
            },
            SessionAttributes: map[string]string{
                "labore": "modi",
                "qui": "aliquid",
                "cupiditate": "quos",
                "perferendis": "magni",
            },
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        BotAlias: "facilis",
        BotName: "tempore",
        UserID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutSessionResponse != nil {
        // handle response
    }
}
```
