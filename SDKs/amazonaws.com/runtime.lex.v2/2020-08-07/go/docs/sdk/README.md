# SDK

## Overview

This section contains documentation for the Amazon Lex V2 Runtime V2 API operations.

Amazon Web Services documentation
<https://docs.aws.amazon.com/runtime-v2-lex/>
### Available Operations

* [DeleteSession](#deletesession) - <p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>
* [GetSession](#getsession) - <p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>
* [PutSession](#putsession) - Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.
* [RecognizeText](#recognizetext) - <p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
* [RecognizeUtterance](#recognizeutterance) - <p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

## DeleteSession

<p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>

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
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        BotAliasID: "suscipit",
        BotID: "molestiae",
        LocaleID: "minus",
        SessionID: "placeat",
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

<p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>

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
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        BotAliasID: "quis",
        BotID: "veritatis",
        LocaleID: "deserunt",
        SessionID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSessionResponse != nil {
        // handle response
    }
}
```

## PutSession

Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.

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
        RequestBody: operations.PutSessionRequestBody{
            Messages: []shared.Message{
                shared.Message{
                    Content: sdk.String("repellendus"),
                    ContentType: shared.MessageContentTypeEnumSsml,
                    ImageResponseCard: &shared.ImageResponseCard{
                        Buttons: []shared.Button{
                            shared.Button{
                                Text: "odit",
                                Value: "at",
                            },
                            shared.Button{
                                Text: "at",
                                Value: "maiores",
                            },
                            shared.Button{
                                Text: "molestiae",
                                Value: "quod",
                            },
                            shared.Button{
                                Text: "quod",
                                Value: "esse",
                            },
                        },
                        ImageURL: sdk.String("totam"),
                        Subtitle: sdk.String("porro"),
                        Title: "Miss",
                    },
                },
                shared.Message{
                    Content: sdk.String("dicta"),
                    ContentType: shared.MessageContentTypeEnumPlainText,
                    ImageResponseCard: &shared.ImageResponseCard{
                        Buttons: []shared.Button{
                            shared.Button{
                                Text: "occaecati",
                                Value: "fugit",
                            },
                            shared.Button{
                                Text: "deleniti",
                                Value: "hic",
                            },
                            shared.Button{
                                Text: "optio",
                                Value: "totam",
                            },
                        },
                        ImageURL: sdk.String("beatae"),
                        Subtitle: sdk.String("commodi"),
                        Title: "Ms.",
                    },
                },
            },
            RequestAttributes: map[string]string{
                "qui": "impedit",
                "cum": "esse",
            },
            SessionState: operations.PutSessionRequestBodySessionState{
                ActiveContexts: []shared.ActiveContext{
                    shared.ActiveContext{
                        ContextAttributes: map[string]string{
                            "aspernatur": "perferendis",
                            "ad": "natus",
                            "sed": "iste",
                        },
                        Name: "Faye Howe",
                        TimeToLive: shared.ActiveContextTimeToLive{
                            TimeToLiveInSeconds: 681820,
                            TurnsToLive: 449950,
                        },
                    },
                },
                DialogAction: &shared.DialogAction{
                    SlotElicitationStyle: shared.StyleTypeEnumSpellByLetter.ToPointer(),
                    SlotToElicit: sdk.String("iste"),
                    SubSlotToElicit: &shared.ElicitSubSlot{
                        Name: "Mr. Kerry Predovic",
                        SubSlotToElicit: &shared.ElicitSubSlot{},
                    },
                    Type: shared.DialogActionTypeEnumElicitSlot,
                },
                Intent: &shared.Intent{
                    ConfirmationState: shared.ConfirmationStateEnumDenied.ToPointer(),
                    Name: "Ernest Ebert",
                    Slots: map[string]shared.Slot{
                        "enim": shared.Slot{
                            SubSlots: map[string]shared.Slot{
                                "nemo": shared.Slot{},
                                "minima": shared.Slot{},
                                "excepturi": shared.Slot{},
                            },
                            Value: &shared.Value{
                                InterpretedValue: "accusantium",
                                OriginalValue: sdk.String("iure"),
                                ResolvedValues: []string{
                                    "doloribus",
                                    "sapiente",
                                    "architecto",
                                },
                            },
                            Values: []shared.Slot{
                                shared.Slot{},
                                shared.Slot{},
                                shared.Slot{},
                            },
                        },
                        "dolorem": shared.Slot{
                            SubSlots: map[string]shared.Slot{
                                "consequuntur": shared.Slot{},
                                "repellat": shared.Slot{},
                                "mollitia": shared.Slot{},
                            },
                            Value: &shared.Value{
                                InterpretedValue: "occaecati",
                                OriginalValue: sdk.String("numquam"),
                                ResolvedValues: []string{
                                    "quam",
                                    "molestiae",
                                },
                            },
                            Values: []shared.Slot{
                                shared.Slot{},
                            },
                        },
                        "error": shared.Slot{
                            SubSlots: map[string]shared.Slot{
                                "quis": shared.Slot{},
                            },
                            Value: &shared.Value{
                                InterpretedValue: "vitae",
                                OriginalValue: sdk.String("laborum"),
                                ResolvedValues: []string{
                                    "enim",
                                    "odit",
                                    "quo",
                                },
                            },
                            Values: []shared.Slot{
                                shared.Slot{},
                            },
                        },
                        "tenetur": shared.Slot{
                            SubSlots: map[string]shared.Slot{
                                "id": shared.Slot{},
                                "possimus": shared.Slot{},
                            },
                            Value: &shared.Value{
                                InterpretedValue: "aut",
                                OriginalValue: sdk.String("quasi"),
                                ResolvedValues: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                            },
                            Values: []shared.Slot{
                                shared.Slot{},
                                shared.Slot{},
                                shared.Slot{},
                                shared.Slot{},
                            },
                        },
                    },
                    State: shared.IntentStateEnumFulfillmentInProgress.ToPointer(),
                },
                OriginatingRequestID: sdk.String("vero"),
                RuntimeHints: &shared.RuntimeHints{
                    SlotHints: map[string]map[string]shared.RuntimeHintDetails{
                        "praesentium": map[string]shared.RuntimeHintDetails{
                            "ipsa": shared.RuntimeHintDetails{
                                RuntimeHintValues: []shared.RuntimeHintValue{
                                    shared.RuntimeHintValue{
                                        Phrase: "voluptate",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "cum",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "perferendis",
                                    },
                                },
                                SubSlotHints: map[string]shared.RuntimeHintDetails{
                                    "reprehenderit": shared.RuntimeHintDetails{},
                                },
                            },
                            "ut": shared.RuntimeHintDetails{
                                RuntimeHintValues: []shared.RuntimeHintValue{
                                    shared.RuntimeHintValue{
                                        Phrase: "dicta",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "corporis",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "dolore",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "iusto",
                                    },
                                },
                                SubSlotHints: map[string]shared.RuntimeHintDetails{
                                    "harum": shared.RuntimeHintDetails{},
                                },
                            },
                            "enim": shared.RuntimeHintDetails{
                                RuntimeHintValues: []shared.RuntimeHintValue{
                                    shared.RuntimeHintValue{
                                        Phrase: "commodi",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "repudiandae",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "quae",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "ipsum",
                                    },
                                },
                                SubSlotHints: map[string]shared.RuntimeHintDetails{
                                    "molestias": shared.RuntimeHintDetails{},
                                    "excepturi": shared.RuntimeHintDetails{},
                                    "pariatur": shared.RuntimeHintDetails{},
                                },
                            },
                            "modi": shared.RuntimeHintDetails{
                                RuntimeHintValues: []shared.RuntimeHintValue{
                                    shared.RuntimeHintValue{
                                        Phrase: "rem",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "voluptates",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "quasi",
                                    },
                                },
                                SubSlotHints: map[string]shared.RuntimeHintDetails{
                                    "sint": shared.RuntimeHintDetails{},
                                    "veritatis": shared.RuntimeHintDetails{},
                                    "itaque": shared.RuntimeHintDetails{},
                                    "incidunt": shared.RuntimeHintDetails{},
                                },
                            },
                        },
                        "enim": map[string]shared.RuntimeHintDetails{
                            "est": shared.RuntimeHintDetails{
                                RuntimeHintValues: []shared.RuntimeHintValue{
                                    shared.RuntimeHintValue{
                                        Phrase: "explicabo",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "deserunt",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "distinctio",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "quibusdam",
                                    },
                                },
                                SubSlotHints: map[string]shared.RuntimeHintDetails{
                                    "modi": shared.RuntimeHintDetails{},
                                    "qui": shared.RuntimeHintDetails{},
                                },
                            },
                        },
                    },
                },
                SessionAttributes: map[string]string{
                    "cupiditate": "quos",
                    "perferendis": "magni",
                },
            },
        },
        ResponseContentType: sdk.String("assumenda"),
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
        BotAliasID: "tempore",
        BotID: "labore",
        LocaleID: "delectus",
        SessionID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutSessionResponse != nil {
        // handle response
    }
}
```

## RecognizeText

<p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

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
    res, err := s.SDK.RecognizeText(ctx, operations.RecognizeTextRequest{
        RequestBody: operations.RecognizeTextRequestBody{
            RequestAttributes: map[string]string{
                "eligendi": "sint",
            },
            SessionState: &operations.RecognizeTextRequestBodySessionState{
                ActiveContexts: []shared.ActiveContext{
                    shared.ActiveContext{
                        ContextAttributes: map[string]string{
                            "necessitatibus": "sint",
                            "officia": "dolor",
                            "debitis": "a",
                        },
                        Name: "Arnold Kirlin",
                        TimeToLive: shared.ActiveContextTimeToLive{
                            TimeToLiveInSeconds: 699479,
                            TurnsToLive: 116202,
                        },
                    },
                    shared.ActiveContext{
                        ContextAttributes: map[string]string{
                            "cumque": "facere",
                            "ea": "aliquid",
                        },
                        Name: "Tomas Friesen",
                        TimeToLive: shared.ActiveContextTimeToLive{
                            TimeToLiveInSeconds: 881736,
                            TurnsToLive: 965417,
                        },
                    },
                },
                DialogAction: &shared.DialogAction{
                    SlotElicitationStyle: shared.StyleTypeEnumSpellByWord.ToPointer(),
                    SlotToElicit: sdk.String("provident"),
                    SubSlotToElicit: &shared.ElicitSubSlot{
                        Name: "Lynn Kuvalis",
                        SubSlotToElicit: &shared.ElicitSubSlot{},
                    },
                    Type: shared.DialogActionTypeEnumConfirmIntent,
                },
                Intent: &shared.Intent{
                    ConfirmationState: shared.ConfirmationStateEnumDenied.ToPointer(),
                    Name: "Wilma Mosciski",
                    Slots: map[string]shared.Slot{
                        "nihil": shared.Slot{
                            SubSlots: map[string]shared.Slot{
                                "distinctio": shared.Slot{},
                                "id": shared.Slot{},
                            },
                            Value: &shared.Value{
                                InterpretedValue: "labore",
                                OriginalValue: sdk.String("labore"),
                                ResolvedValues: []string{
                                    "natus",
                                    "nobis",
                                },
                            },
                            Values: []shared.Slot{
                                shared.Slot{},
                                shared.Slot{},
                            },
                        },
                    },
                    State: shared.IntentStateEnumFulfillmentInProgress.ToPointer(),
                },
                OriginatingRequestID: sdk.String("aspernatur"),
                RuntimeHints: &shared.RuntimeHints{
                    SlotHints: map[string]map[string]shared.RuntimeHintDetails{
                        "magnam": map[string]shared.RuntimeHintDetails{
                            "excepturi": shared.RuntimeHintDetails{
                                RuntimeHintValues: []shared.RuntimeHintValue{
                                    shared.RuntimeHintValue{
                                        Phrase: "provident",
                                    },
                                    shared.RuntimeHintValue{
                                        Phrase: "quos",
                                    },
                                },
                                SubSlotHints: map[string]shared.RuntimeHintDetails{
                                    "accusantium": shared.RuntimeHintDetails{},
                                    "mollitia": shared.RuntimeHintDetails{},
                                    "reiciendis": shared.RuntimeHintDetails{},
                                },
                            },
                        },
                    },
                },
                SessionAttributes: map[string]string{
                    "ad": "eum",
                    "dolor": "necessitatibus",
                    "odit": "nemo",
                },
            },
            Text: "quasi",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        BotAliasID: "in",
        BotID: "architecto",
        LocaleID: "architecto",
        SessionID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecognizeTextResponse != nil {
        // handle response
    }
}
```

## RecognizeUtterance

<p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

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
    res, err := s.SDK.RecognizeUtterance(ctx, operations.RecognizeUtteranceRequest{
        ContentType: "ullam",
        RequestBody: operations.RecognizeUtteranceRequestBody{
            InputStream: sdk.String("expedita"),
        },
        ResponseContentType: sdk.String("nihil"),
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        BotAliasID: "praesentium",
        BotID: "natus",
        LocaleID: "magni",
        SessionID: "sunt",
        XAmzLexRequestAttributes: sdk.String("quo"),
        XAmzLexSessionState: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecognizeUtteranceResponse != nil {
        // handle response
    }
}
```
