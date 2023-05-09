# Publishing

### Available Operations

* [PublishMessagesToChannelForm](#publishmessagestochannelform) - Publish a message to a channel
* [PublishMessagesToChannelJSON](#publishmessagestochanneljson) - Publish a message to a channel
* [PublishMessagesToChannelRaw](#publishmessagestochannelraw) - Publish a message to a channel

## PublishMessagesToChannelForm

Publish a message to the specified channel

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Publishing.PublishMessagesToChannelForm(ctx, operations.PublishMessagesToChannelFormRequest{
        MessageInput: &shared.MessageInput{
            ClientID: sdk.String("minus"),
            ConnectionID: sdk.String("placeat"),
            Data: sdk.String("voluptatum"),
            Encoding: sdk.String("iusto"),
            Extras: &shared.Extras{
                Push: &shared.Push{
                    Apns: &shared.PushApns{
                        Notification: &shared.Notification{
                            Body: sdk.String("excepturi"),
                            CollapseKey: sdk.String("nisi"),
                            Icon: sdk.String("recusandae"),
                            Sound: sdk.String("temporibus"),
                            Title: sdk.String("Mr."),
                        },
                    },
                    Data: sdk.String("quis"),
                    Fcm: &shared.PushFcm{
                        Notification: &shared.Notification{
                            Body: sdk.String("veritatis"),
                            CollapseKey: sdk.String("deserunt"),
                            Icon: sdk.String("perferendis"),
                            Sound: sdk.String("ipsam"),
                            Title: sdk.String("Dr."),
                        },
                    },
                    Notification: &shared.Notification{
                        Body: sdk.String("sapiente"),
                        CollapseKey: sdk.String("quo"),
                        Icon: sdk.String("odit"),
                        Sound: sdk.String("at"),
                        Title: sdk.String("Dr."),
                    },
                    Web: &shared.PushWeb{
                        Notification: &shared.Notification{
                            Body: sdk.String("maiores"),
                            CollapseKey: sdk.String("molestiae"),
                            Icon: sdk.String("quod"),
                            Sound: sdk.String("quod"),
                            Title: sdk.String("Ms."),
                        },
                    },
                },
            },
            Name: sdk.String("Miss Lowell Parisian"),
        },
        XAblyVersion: sdk.String("occaecati"),
        ChannelID: "fugit",
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishMessagesToChannelForm2XXApplicationJSONObject != nil {
        // handle response
    }
}
```

## PublishMessagesToChannelJSON

Publish a message to the specified channel

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Publishing.PublishMessagesToChannelJSON(ctx, operations.PublishMessagesToChannelJSONRequest{
        MessageInput: &shared.MessageInput{
            ClientID: sdk.String("hic"),
            ConnectionID: sdk.String("optio"),
            Data: sdk.String("totam"),
            Encoding: sdk.String("beatae"),
            Extras: &shared.Extras{
                Push: &shared.Push{
                    Apns: &shared.PushApns{
                        Notification: &shared.Notification{
                            Body: sdk.String("commodi"),
                            CollapseKey: sdk.String("molestiae"),
                            Icon: sdk.String("modi"),
                            Sound: sdk.String("qui"),
                            Title: sdk.String("Miss"),
                        },
                    },
                    Data: sdk.String("cum"),
                    Fcm: &shared.PushFcm{
                        Notification: &shared.Notification{
                            Body: sdk.String("esse"),
                            CollapseKey: sdk.String("ipsum"),
                            Icon: sdk.String("excepturi"),
                            Sound: sdk.String("aspernatur"),
                            Title: sdk.String("Mr."),
                        },
                    },
                    Notification: &shared.Notification{
                        Body: sdk.String("ad"),
                        CollapseKey: sdk.String("natus"),
                        Icon: sdk.String("sed"),
                        Sound: sdk.String("iste"),
                        Title: sdk.String("Mrs."),
                    },
                    Web: &shared.PushWeb{
                        Notification: &shared.Notification{
                            Body: sdk.String("natus"),
                            CollapseKey: sdk.String("laboriosam"),
                            Icon: sdk.String("hic"),
                            Sound: sdk.String("saepe"),
                            Title: sdk.String("Miss"),
                        },
                    },
                },
            },
            Name: sdk.String("Stacy Moore"),
        },
        XAblyVersion: sdk.String("quidem"),
        ChannelID: "architecto",
        Format: shared.ResponseFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishMessagesToChannelJSON2XXApplicationJSONObject != nil {
        // handle response
    }
}
```

## PublishMessagesToChannelRaw

Publish a message to the specified channel

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Publishing.PublishMessagesToChannelRaw(ctx, operations.PublishMessagesToChannelRawRequest{
        RequestBody: []byte("reiciendis"),
        XAblyVersion: sdk.String("est"),
        ChannelID: "mollitia",
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishMessagesToChannelRaw2XXApplicationJSONObject != nil {
        // handle response
    }
}
```
