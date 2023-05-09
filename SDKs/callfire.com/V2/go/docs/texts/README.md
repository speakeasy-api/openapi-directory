# Texts

### Available Operations

* [AddTextBroadcastBatch](#addtextbroadcastbatch) - Add batches to a text broadcast
* [AddTextBroadcastRecipients](#addtextbroadcastrecipients) - Add recipients to a text broadcast
* [ArchiveTextBroadcast](#archivetextbroadcast) - Archive text broadcast
* [CreateTextAutoReply](#createtextautoreply) - Create an auto reply
* [CreateTextBroadcast](#createtextbroadcast) - Create a text broadcast
* [DeleteTextAutoReply](#deletetextautoreply) - Delete an auto reply
* [FindTextAutoReplys](#findtextautoreplys) - Find auto replies
* [FindTextBroadcasts](#findtextbroadcasts) - Find text broadcasts
* [FindTexts](#findtexts) - Find texts
* [GetText](#gettext) - Find a specific text
* [GetTextAutoReply](#gettextautoreply) - Find a specific auto reply
* [GetTextBroadcast](#gettextbroadcast) - Find a specific text broadcast
* [GetTextBroadcastBatches](#gettextbroadcastbatches) - Find batches in a text broadcast
* [GetTextBroadcastStats](#gettextbroadcaststats) - Get statistics on text broadcast
* [GetTextBroadcastTexts](#gettextbroadcasttexts) - Find texts in a text broadcast
* [SendTexts](#sendtexts) - Send texts
* [StartTextBroadcast](#starttextbroadcast) - Start text broadcast
* [StopTextBroadcast](#stoptextbroadcast) - Stop text broadcast
* [ToggleTextBroadcastRecipientsStatus](#toggletextbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [UpdateTextBroadcast](#updatetextbroadcast) - Update a text broadcast

## AddTextBroadcastBatch

Allows adding an extra batches to an already created text broadcast campaign. The batches which being  added pass the CallFire validation process (unlike in the recipients version of this API). That is why using of a scrubDuplicates flag remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.AddTextBroadcastBatch(ctx, operations.AddTextBroadcastBatchRequest{
        BatchRequest: &shared.BatchRequest{
            ContactListID: sdk.Int64(710337),
            Name: sdk.String("Barbara Koelpin IV"),
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "corporis": "et",
                        "blanditiis": "ex",
                        "sed": "sit",
                        "vel": "nostrum",
                    },
                    ContactID: sdk.Int64(906172),
                    FromNumber: sdk.String("error"),
                    PhoneNumber: sdk.String("consequatur"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "reiciendis": "dolorem",
                        "harum": "dicta",
                    },
                    ContactID: sdk.Int64(99416),
                    FromNumber: sdk.String("occaecati"),
                    PhoneNumber: sdk.String("labore"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "atque": "laborum",
                        "nam": "tenetur",
                        "laboriosam": "alias",
                    },
                    ContactID: sdk.Int64(227084),
                    FromNumber: sdk.String("deserunt"),
                    PhoneNumber: sdk.String("voluptate"),
                },
            },
            ScrubDuplicates: sdk.Bool(false),
        },
        ID: 600392,
        StrictValidation: sdk.Bool(false),
    }, operations.AddTextBroadcastBatchSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```

## AddTextBroadcastRecipients

Use this API to add recipients to a text broadcast which is already created. Post a list of Recipient objects to be immediately added to the text broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.AddTextBroadcastRecipients(ctx, operations.AddTextBroadcastRecipientsRequest{
        RequestBody: []shared.TextRecipient{
            shared.TextRecipient{
                Attributes: map[string]string{
                    "repellendus": "delectus",
                    "voluptates": "perferendis",
                    "est": "quidem",
                },
                ContactID: sdk.Int64(440666),
                FromNumber: sdk.String("facere"),
                Media: []shared.Media{
                    shared.Media{
                        AccountID: sdk.Int64(509807),
                        Created: sdk.Int64(648598),
                        ID: sdk.Int64(333965),
                        LengthInBytes: sdk.Int64(29100),
                        MediaType: sdk.String("quisquam"),
                        Name: sdk.String("Ryan Littel"),
                        PublicURL: sdk.String("totam"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(383103),
                        Created: sdk.Int64(693957),
                        ID: sdk.Int64(806670),
                        LengthInBytes: sdk.Int64(90885),
                        MediaType: sdk.String("esse"),
                        Name: sdk.String("Angelina Jenkins"),
                        PublicURL: sdk.String("officiis"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(886961),
                        Created: sdk.Int64(880107),
                        ID: sdk.Int64(618826),
                        LengthInBytes: sdk.Int64(328303),
                        MediaType: sdk.String("aspernatur"),
                        Name: sdk.String("Elisa Little"),
                        PublicURL: sdk.String("blanditiis"),
                    },
                },
                Message: sdk.String("suscipit"),
                PhoneNumber: sdk.String("repudiandae"),
            },
            shared.TextRecipient{
                Attributes: map[string]string{
                    "atque": "sunt",
                    "recusandae": "dolorum",
                    "repellendus": "labore",
                },
                ContactID: sdk.Int64(968287),
                FromNumber: sdk.String("doloremque"),
                Media: []shared.Media{
                    shared.Media{
                        AccountID: sdk.Int64(116098),
                        Created: sdk.Int64(36033),
                        ID: sdk.Int64(106429),
                        LengthInBytes: sdk.Int64(174772),
                        MediaType: sdk.String("enim"),
                        Name: sdk.String("Sheila Wilderman"),
                        PublicURL: sdk.String("saepe"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(160467),
                        Created: sdk.Int64(580107),
                        ID: sdk.Int64(886305),
                        LengthInBytes: sdk.Int64(597937),
                        MediaType: sdk.String("in"),
                        Name: sdk.String("Tricia McClure"),
                        PublicURL: sdk.String("id"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(335631),
                        Created: sdk.Int64(440264),
                        ID: sdk.Int64(625528),
                        LengthInBytes: sdk.Int64(76486),
                        MediaType: sdk.String("corporis"),
                        Name: sdk.String("Conrad Franey III"),
                        PublicURL: sdk.String("ipsa"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(517612),
                        Created: sdk.Int64(61078),
                        ID: sdk.Int64(474668),
                        LengthInBytes: sdk.Int64(907733),
                        MediaType: sdk.String("qui"),
                        Name: sdk.String("Elmer Treutel"),
                        PublicURL: sdk.String("distinctio"),
                    },
                },
                Message: sdk.String("voluptatum"),
                PhoneNumber: sdk.String("rem"),
            },
            shared.TextRecipient{
                Attributes: map[string]string{
                    "ad": "repellat",
                    "alias": "corporis",
                },
                ContactID: sdk.Int64(597303),
                FromNumber: sdk.String("nihil"),
                Media: []shared.Media{
                    shared.Media{
                        AccountID: sdk.Int64(378245),
                        Created: sdk.Int64(5189),
                        ID: sdk.Int64(979527),
                        LengthInBytes: sdk.Int64(970222),
                        MediaType: sdk.String("dolores"),
                        Name: sdk.String("Warren Greenholt"),
                        PublicURL: sdk.String("quae"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(925703),
                        Created: sdk.Int64(607249),
                        ID: sdk.Int64(309251),
                        LengthInBytes: sdk.Int64(477646),
                        MediaType: sdk.String("ex"),
                        Name: sdk.String("Molly Ferry"),
                        PublicURL: sdk.String("eum"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(367927),
                        Created: sdk.Int64(928219),
                        ID: sdk.Int64(456520),
                        LengthInBytes: sdk.Int64(592081),
                        MediaType: sdk.String("quis"),
                        Name: sdk.String("Johanna Medhurst"),
                        PublicURL: sdk.String("quasi"),
                    },
                },
                Message: sdk.String("animi"),
                PhoneNumber: sdk.String("nostrum"),
            },
            shared.TextRecipient{
                Attributes: map[string]string{
                    "provident": "possimus",
                    "animi": "ex",
                    "aliquid": "accusantium",
                },
                ContactID: sdk.Int64(999278),
                FromNumber: sdk.String("doloribus"),
                Media: []shared.Media{
                    shared.Media{
                        AccountID: sdk.Int64(448143),
                        Created: sdk.Int64(721407),
                        ID: sdk.Int64(937636),
                        LengthInBytes: sdk.Int64(637583),
                        MediaType: sdk.String("laborum"),
                        Name: sdk.String("Edwin Wolf"),
                        PublicURL: sdk.String("sapiente"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(764562),
                        Created: sdk.Int64(113486),
                        ID: sdk.Int64(698249),
                        LengthInBytes: sdk.Int64(272229),
                        MediaType: sdk.String("quis"),
                        Name: sdk.String("Mr. Denise Runolfsdottir"),
                        PublicURL: sdk.String("aspernatur"),
                    },
                },
                Message: sdk.String("eum"),
                PhoneNumber: sdk.String("eius"),
            },
        },
        Fields: sdk.String("rem"),
        ID: 871083,
        StrictValidation: sdk.Bool(false),
    }, operations.AddTextBroadcastRecipientsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextList != nil {
        // handle response
    }
}
```

## ArchiveTextBroadcast

Archives a text broadcast (and hides it in the search results)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.ArchiveTextBroadcast(ctx, operations.ArchiveTextBroadcastRequest{
        ID: 773084,
    }, operations.ArchiveTextBroadcastSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateTextAutoReply

CallFire gives you possibility to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number, keyword, and/or include a text to match, so that the auto reply would be sent only to those who text the matched text

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.CreateTextAutoReply(ctx, shared.TextAutoReply{
        ID: sdk.Int64(179410),
        Keyword: sdk.String("sapiente"),
        Match: sdk.String("eum"),
        Message: sdk.String("dicta"),
        Number: sdk.String("minima"),
    }, operations.CreateTextAutoReplySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```

## CreateTextBroadcast

Creates a text broadcast campaign using the Text Broadcast API. Send a TextBroadcast object in the message body to detail a text broadcast campaign. A campaign can be created without contacts and with bare minimum configuration, but contacts have to be added further on to use the campaign. It supports scheduling, retry logic, pattern-based messages.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.CreateTextBroadcast(ctx, operations.CreateTextBroadcastRequest{
        TextBroadcastInput: &shared.TextBroadcastInput{
            BigMessageStrategy: shared.TextBroadcastBigMessageStrategyEnumSendMultiple.ToPointer(),
            FromNumber: sdk.String("cupiditate"),
            ID: sdk.Int64(589695),
            Labels: []string{
                "soluta",
                "hic",
                "illum",
                "eaque",
            },
            LocalTimeRestriction: &shared.LocalTimeRestriction{
                BeginHour: sdk.Int(935833),
                BeginMinute: sdk.Int(596211),
                Enabled: sdk.Bool(false),
                EndHour: sdk.Int(983427),
                EndMinute: sdk.Int(891801),
            },
            MaxActive: sdk.Int(399802),
            Media: []shared.Media{
                shared.Media{
                    AccountID: sdk.Int64(380335),
                    Created: sdk.Int64(211534),
                    ID: sdk.Int64(147808),
                    LengthInBytes: sdk.Int64(764995),
                    MediaType: sdk.String("fuga"),
                    Name: sdk.String("Lynda Tromp Sr."),
                    PublicURL: sdk.String("et"),
                },
                shared.Media{
                    AccountID: sdk.Int64(497777),
                    Created: sdk.Int64(619183),
                    ID: sdk.Int64(581082),
                    LengthInBytes: sdk.Int64(382440),
                    MediaType: sdk.String("adipisci"),
                    Name: sdk.String("Anne Wyman"),
                    PublicURL: sdk.String("ipsa"),
                },
                shared.Media{
                    AccountID: sdk.Int64(271113),
                    Created: sdk.Int64(470621),
                    ID: sdk.Int64(473190),
                    LengthInBytes: sdk.Int64(115834),
                    MediaType: sdk.String("iusto"),
                    Name: sdk.String("Irma Wuckert"),
                    PublicURL: sdk.String("architecto"),
                },
                shared.Media{
                    AccountID: sdk.Int64(857125),
                    Created: sdk.Int64(39650),
                    ID: sdk.Int64(117315),
                    LengthInBytes: sdk.Int64(483706),
                    MediaType: sdk.String("tempora"),
                    Name: sdk.String("Carla Feil MD"),
                    PublicURL: sdk.String("sunt"),
                },
            },
            Message: sdk.String("nostrum"),
            Name: sdk.String("Damon Jacobs"),
            Recipients: []shared.TextRecipient{
                shared.TextRecipient{
                    Attributes: map[string]string{
                        "eum": "voluptas",
                    },
                    ContactID: sdk.Int64(614528),
                    FromNumber: sdk.String("id"),
                    Media: []shared.Media{
                        shared.Media{
                            AccountID: sdk.Int64(625358),
                            Created: sdk.Int64(822407),
                            ID: sdk.Int64(913992),
                            LengthInBytes: sdk.Int64(653421),
                            MediaType: sdk.String("laborum"),
                            Name: sdk.String("Derek Leuschke PhD"),
                            PublicURL: sdk.String("ex"),
                        },
                    },
                    Message: sdk.String("quo"),
                    PhoneNumber: sdk.String("ex"),
                },
                shared.TextRecipient{
                    Attributes: map[string]string{
                        "ad": "expedita",
                        "voluptatem": "molestias",
                    },
                    ContactID: sdk.Int64(737254),
                    FromNumber: sdk.String("aliquid"),
                    Media: []shared.Media{
                        shared.Media{
                            AccountID: sdk.Int64(530860),
                            Created: sdk.Int64(606308),
                            ID: sdk.Int64(85233),
                            LengthInBytes: sdk.Int64(703218),
                            MediaType: sdk.String("est"),
                            Name: sdk.String("Donald Williamson MD"),
                            PublicURL: sdk.String("pariatur"),
                        },
                    },
                    Message: sdk.String("debitis"),
                    PhoneNumber: sdk.String("voluptatem"),
                },
            },
            ResumeNextDay: sdk.Bool(false),
            Schedules: []shared.Schedule{
                shared.Schedule{
                    CampaignID: sdk.Int64(534917),
                    DaysOfWeek: []string{
                        "ex",
                        "sapiente",
                        "rem",
                        "minus",
                    },
                    ID: sdk.Int64(365100),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(992074),
                        Month: sdk.Int(190567),
                        Year: sdk.Int(355225),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(19122),
                        Minute: sdk.Int(848341),
                        Nano: sdk.Int(518150),
                        Second: sdk.Int(770675),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(842777),
                        Month: sdk.Int(720528),
                        Year: sdk.Int(373216),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(633415),
                        Minute: sdk.Int(222864),
                        Nano: sdk.Int(307376),
                        Second: sdk.Int(80532),
                    },
                    TimeZone: sdk.String("deleniti"),
                },
            },
        },
        Start: sdk.Bool(false),
        StrictValidation: sdk.Bool(false),
    }, operations.CreateTextBroadcastSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```

## DeleteTextAutoReply

Deletes a text auto reply and removes the configuration. Can not delete a TextAutoReply which is currently active for a campaign

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.DeleteTextAutoReply(ctx, operations.DeleteTextAutoReplyRequest{
        ID: 85311,
    }, operations.DeleteTextAutoReplySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FindTextAutoReplys

Find all text autoreplies created by user. Returns a paged list of TextAutoReply

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.FindTextAutoReplys(ctx, operations.FindTextAutoReplysRequest{
        Fields: sdk.String("tempora"),
        Limit: sdk.Int(221396),
        Number: sdk.String("consequatur"),
        Offset: sdk.Int(100014),
    }, operations.FindTextAutoReplysSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextAutoReplyPage != nil {
        // handle response
    }
}
```

## FindTextBroadcasts

Searches for all text broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of text broadcasts

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.FindTextBroadcasts(ctx, operations.FindTextBroadcastsRequest{
        Fields: sdk.String("sit"),
        IntervalBegin: sdk.Int64(265039),
        IntervalEnd: sdk.Int64(144286),
        Label: sdk.String("ab"),
        Limit: sdk.Int(513760),
        Name: sdk.String("Rosa Stiedemann"),
        Offset: sdk.Int(55107),
        Running: sdk.Bool(false),
        Scheduled: sdk.Bool(false),
    }, operations.FindTextBroadcastsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextBroadcastPage != nil {
        // handle response
    }
}
```

## FindTexts

Searches for texts sent or received by user. Use "campaignId=0" parameter to query for all texts sent through the POST /texts API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.FindTexts(ctx, operations.FindTextsRequest{
        BatchID: sdk.Int64(559682),
        CampaignID: sdk.Int64(911198),
        Fields: sdk.String("impedit"),
        FromNumber: sdk.String("officiis"),
        ID: []int64{
            897277,
            153369,
        },
        Inbound: sdk.Bool(false),
        IntervalBegin: sdk.Int64(332191),
        IntervalEnd: sdk.Int64(199596),
        Label: sdk.String("expedita"),
        Limit: sdk.Int(432984),
        Offset: sdk.Int(426943),
        Results: sdk.String("voluptatum"),
        States: sdk.String("magnam"),
        ToNumber: sdk.String("exercitationem"),
    }, operations.FindTextsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextPage != nil {
        // handle response
    }
}
```

## GetText

Returns a single Text instance for a given text id

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.GetText(ctx, operations.GetTextRequest{
        Fields: sdk.String("ab"),
        ID: 781480,
    }, operations.GetTextSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Text != nil {
        // handle response
    }
}
```

## GetTextAutoReply

Returns a single TextAutoReply instance for a given text auto reply id

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.GetTextAutoReply(ctx, operations.GetTextAutoReplyRequest{
        Fields: sdk.String("autem"),
        ID: 751022,
    }, operations.GetTextAutoReplySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextAutoReply != nil {
        // handle response
    }
}
```

## GetTextBroadcast

Returns a single TextBroadcast instance for a given text broadcast id

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.GetTextBroadcast(ctx, operations.GetTextBroadcastRequest{
        Fields: sdk.String("laboriosam"),
        ID: 927212,
    }, operations.GetTextBroadcastSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextBroadcast != nil {
        // handle response
    }
}
```

## GetTextBroadcastBatches

This endpoint will enable the user to page through all of the batches for a particular text broadcast campaign

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.GetTextBroadcastBatches(ctx, operations.GetTextBroadcastBatchesRequest{
        Fields: sdk.String("consequuntur"),
        ID: 28952,
        Limit: sdk.Int(350207),
        Offset: sdk.Int(895692),
    }, operations.GetTextBroadcastBatchesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPage != nil {
        // handle response
    }
}
```

## GetTextBroadcastStats

Returns the broadcast statistics. Example: total number of the sent/received actions, total cost, number of remaining outbound actions, error count, etc

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.GetTextBroadcastStats(ctx, operations.GetTextBroadcastStatsRequest{
        Begin: sdk.Int64(95619),
        End: sdk.Int64(392569),
        Fields: sdk.String("at"),
        ID: 878373,
    }, operations.GetTextBroadcastStatsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextBroadcastStatsDto != nil {
        // handle response
    }
}
```

## GetTextBroadcastTexts

This endpoint will enable the user to page through all of the texts for a particular text broadcast campaign

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.GetTextBroadcastTexts(ctx, operations.GetTextBroadcastTextsRequest{
        BatchID: sdk.Int64(667593),
        Fields: sdk.String("harum"),
        ID: 192718,
        Limit: sdk.Int(987349),
        Offset: sdk.Int(918092),
    }, operations.GetTextBroadcastTextsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextPage != nil {
        // handle response
    }
}
```

## SendTexts

Use the /texts API to send individual texts quickly. By default all texts are going out from CallFire's dedicated short code. Example: 67076, 818818 etc

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.SendTexts(ctx, operations.SendTextsRequest{
        RequestBody: []shared.TextRecipient{
            shared.TextRecipient{
                Attributes: map[string]string{
                    "nemo": "voluptate",
                    "blanditiis": "officia",
                    "voluptas": "numquam",
                },
                ContactID: sdk.Int64(364912),
                FromNumber: sdk.String("quos"),
                Media: []shared.Media{
                    shared.Media{
                        AccountID: sdk.Int64(131903),
                        Created: sdk.Int64(495970),
                        ID: sdk.Int64(200516),
                        LengthInBytes: sdk.Int64(681740),
                        MediaType: sdk.String("laudantium"),
                        Name: sdk.String("Joyce Leffler III"),
                        PublicURL: sdk.String("consequuntur"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(233078),
                        Created: sdk.Int64(46806),
                        ID: sdk.Int64(585432),
                        LengthInBytes: sdk.Int64(970732),
                        MediaType: sdk.String("soluta"),
                        Name: sdk.String("Belinda Daugherty"),
                        PublicURL: sdk.String("magni"),
                    },
                },
                Message: sdk.String("inventore"),
                PhoneNumber: sdk.String("fuga"),
            },
            shared.TextRecipient{
                Attributes: map[string]string{
                    "voluptatibus": "distinctio",
                    "omnis": "delectus",
                    "minima": "praesentium",
                    "maxime": "magnam",
                },
                ContactID: sdk.Int64(836364),
                FromNumber: sdk.String("quos"),
                Media: []shared.Media{
                    shared.Media{
                        AccountID: sdk.Int64(930819),
                        Created: sdk.Int64(415608),
                        ID: sdk.Int64(520761),
                        LengthInBytes: sdk.Int64(936618),
                        MediaType: sdk.String("modi"),
                        Name: sdk.String("Ignacio Bartoletti"),
                        PublicURL: sdk.String("alias"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(93894),
                        Created: sdk.Int64(247685),
                        ID: sdk.Int64(978548),
                        LengthInBytes: sdk.Int64(318233),
                        MediaType: sdk.String("sint"),
                        Name: sdk.String("Gerard Koch"),
                        PublicURL: sdk.String("est"),
                    },
                },
                Message: sdk.String("quis"),
                PhoneNumber: sdk.String("sint"),
            },
            shared.TextRecipient{
                Attributes: map[string]string{
                    "impedit": "hic",
                    "necessitatibus": "asperiores",
                    "ex": "voluptas",
                    "debitis": "delectus",
                },
                ContactID: sdk.Int64(65082),
                FromNumber: sdk.String("minus"),
                Media: []shared.Media{
                    shared.Media{
                        AccountID: sdk.Int64(675689),
                        Created: sdk.Int64(231070),
                        ID: sdk.Int64(244889),
                        LengthInBytes: sdk.Int64(538869),
                        MediaType: sdk.String("ipsum"),
                        Name: sdk.String("Victor Rogahn"),
                        PublicURL: sdk.String("dolore"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(482892),
                        Created: sdk.Int64(453094),
                        ID: sdk.Int64(194023),
                        LengthInBytes: sdk.Int64(493958),
                        MediaType: sdk.String("neque"),
                        Name: sdk.String("Casey Sporer"),
                        PublicURL: sdk.String("voluptatibus"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(426904),
                        Created: sdk.Int64(300824),
                        ID: sdk.Int64(842855),
                        LengthInBytes: sdk.Int64(78969),
                        MediaType: sdk.String("facere"),
                        Name: sdk.String("Juan Wolf"),
                        PublicURL: sdk.String("aliquam"),
                    },
                },
                Message: sdk.String("velit"),
                PhoneNumber: sdk.String("illo"),
            },
            shared.TextRecipient{
                Attributes: map[string]string{
                    "vel": "ea",
                },
                ContactID: sdk.Int64(107617),
                FromNumber: sdk.String("vero"),
                Media: []shared.Media{
                    shared.Media{
                        AccountID: sdk.Int64(431994),
                        Created: sdk.Int64(246557),
                        ID: sdk.Int64(284086),
                        LengthInBytes: sdk.Int64(596433),
                        MediaType: sdk.String("earum"),
                        Name: sdk.String("Pat Wolf"),
                        PublicURL: sdk.String("alias"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(391797),
                        Created: sdk.Int64(931505),
                        ID: sdk.Int64(242178),
                        LengthInBytes: sdk.Int64(673838),
                        MediaType: sdk.String("non"),
                        Name: sdk.String("Mr. Glenda Bailey"),
                        PublicURL: sdk.String("recusandae"),
                    },
                    shared.Media{
                        AccountID: sdk.Int64(408303),
                        Created: sdk.Int64(693153),
                        ID: sdk.Int64(377406),
                        LengthInBytes: sdk.Int64(705148),
                        MediaType: sdk.String("placeat"),
                        Name: sdk.String("Malcolm Lind"),
                        PublicURL: sdk.String("ullam"),
                    },
                },
                Message: sdk.String("unde"),
                PhoneNumber: sdk.String("necessitatibus"),
            },
        },
        CampaignID: sdk.Int64(654082),
        DefaultMessage: sdk.String("impedit"),
        Fields: sdk.String("ipsam"),
        StrictValidation: sdk.Bool(false),
    }, operations.SendTextsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextList != nil {
        // handle response
    }
}
```

## StartTextBroadcast

Starts a text broadcast

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.StartTextBroadcast(ctx, operations.StartTextBroadcastRequest{
        ID: 357425,
    }, operations.StartTextBroadcastSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopTextBroadcast

Stops a text broadcast

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.StopTextBroadcast(ctx, operations.StopTextBroadcastRequest{
        ID: 668234,
    }, operations.StopTextBroadcastSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ToggleTextBroadcastRecipientsStatus

This operation lets the user to disable/enable undialed contacts in created broadcast

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.ToggleTextBroadcastRecipientsStatus(ctx, operations.ToggleTextBroadcastRecipientsStatusRequest{
        RequestBody: []shared.Recipient{
            shared.Recipient{
                Attributes: map[string]string{
                    "labore": "veritatis",
                    "vero": "consectetur",
                },
                ContactID: sdk.Int64(112427),
                FromNumber: sdk.String("inventore"),
                PhoneNumber: sdk.String("dolorem"),
            },
            shared.Recipient{
                Attributes: map[string]string{
                    "qui": "iste",
                    "ex": "nemo",
                },
                ContactID: sdk.Int64(745233),
                FromNumber: sdk.String("libero"),
                PhoneNumber: sdk.String("rem"),
            },
            shared.Recipient{
                Attributes: map[string]string{
                    "odio": "fugit",
                    "alias": "magni",
                    "vel": "quae",
                },
                ContactID: sdk.Int64(63553),
                FromNumber: sdk.String("modi"),
                PhoneNumber: sdk.String("neque"),
            },
        },
        Enable: sdk.Bool(false),
        ID: 348357,
    }, operations.ToggleTextBroadcastRecipientsStatusSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateTextBroadcast

Allows modifying the configuration of existing text broadcast campaign. See TextBroadcast for more information on what can/can't be updated on this API

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Texts.UpdateTextBroadcast(ctx, operations.UpdateTextBroadcastRequest{
        TextBroadcastInput: &shared.TextBroadcastInput{
            BigMessageStrategy: shared.TextBroadcastBigMessageStrategyEnumMms.ToPointer(),
            FromNumber: sdk.String("et"),
            ID: sdk.Int64(215398),
            Labels: []string{
                "nulla",
                "distinctio",
                "maxime",
            },
            LocalTimeRestriction: &shared.LocalTimeRestriction{
                BeginHour: sdk.Int(157222),
                BeginMinute: sdk.Int(159146),
                Enabled: sdk.Bool(false),
                EndHour: sdk.Int(342137),
                EndMinute: sdk.Int(605712),
            },
            MaxActive: sdk.Int(727250),
            Media: []shared.Media{
                shared.Media{
                    AccountID: sdk.Int64(663318),
                    Created: sdk.Int64(727888),
                    ID: sdk.Int64(854460),
                    LengthInBytes: sdk.Int64(637462),
                    MediaType: sdk.String("quos"),
                    Name: sdk.String("Dr. Paul Kris Jr."),
                    PublicURL: sdk.String("totam"),
                },
            },
            Message: sdk.String("dolore"),
            Name: sdk.String("Kelvin Bartoletti"),
            Recipients: []shared.TextRecipient{
                shared.TextRecipient{
                    Attributes: map[string]string{
                        "beatae": "est",
                        "facere": "corrupti",
                        "molestiae": "provident",
                        "accusamus": "necessitatibus",
                    },
                    ContactID: sdk.Int64(733289),
                    FromNumber: sdk.String("sint"),
                    Media: []shared.Media{
                        shared.Media{
                            AccountID: sdk.Int64(421819),
                            Created: sdk.Int64(373511),
                            ID: sdk.Int64(702952),
                            LengthInBytes: sdk.Int64(515638),
                            MediaType: sdk.String("corporis"),
                            Name: sdk.String("Boyd Rippin Sr."),
                            PublicURL: sdk.String("quidem"),
                        },
                        shared.Media{
                            AccountID: sdk.Int64(684126),
                            Created: sdk.Int64(919508),
                            ID: sdk.Int64(34070),
                            LengthInBytes: sdk.Int64(710456),
                            MediaType: sdk.String("officiis"),
                            Name: sdk.String("Rosemarie Kub"),
                            PublicURL: sdk.String("explicabo"),
                        },
                    },
                    Message: sdk.String("corporis"),
                    PhoneNumber: sdk.String("error"),
                },
            },
            ResumeNextDay: sdk.Bool(false),
            Schedules: []shared.Schedule{
                shared.Schedule{
                    CampaignID: sdk.Int64(239337),
                    DaysOfWeek: []string{
                        "similique",
                        "ut",
                        "quidem",
                        "quis",
                    },
                    ID: sdk.Int64(106255),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(600213),
                        Month: sdk.Int(476946),
                        Year: sdk.Int(963198),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(585593),
                        Minute: sdk.Int(147801),
                        Nano: sdk.Int(253625),
                        Second: sdk.Int(256916),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(201010),
                        Month: sdk.Int(873557),
                        Year: sdk.Int(637856),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(491892),
                        Minute: sdk.Int(760744),
                        Nano: sdk.Int(898961),
                        Second: sdk.Int(359111),
                    },
                    TimeZone: sdk.String("qui"),
                },
                shared.Schedule{
                    CampaignID: sdk.Int64(708898),
                    DaysOfWeek: []string{
                        "cupiditate",
                        "minima",
                        "placeat",
                    },
                    ID: sdk.Int64(316542),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(204072),
                        Month: sdk.Int(446877),
                        Year: sdk.Int(796397),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(433077),
                        Minute: sdk.Int(266408),
                        Nano: sdk.Int(357347),
                        Second: sdk.Int(298264),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(914971),
                        Month: sdk.Int(978173),
                        Year: sdk.Int(731744),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(46013),
                        Minute: sdk.Int(727547),
                        Nano: sdk.Int(189753),
                        Second: sdk.Int(289913),
                    },
                    TimeZone: sdk.String("totam"),
                },
                shared.Schedule{
                    CampaignID: sdk.Int64(577709),
                    DaysOfWeek: []string{
                        "quo",
                        "velit",
                    },
                    ID: sdk.Int64(795591),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(684553),
                        Month: sdk.Int(344530),
                        Year: sdk.Int(669237),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(770873),
                        Minute: sdk.Int(963741),
                        Nano: sdk.Int(735894),
                        Second: sdk.Int(878601),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(141506),
                        Month: sdk.Int(997437),
                        Year: sdk.Int(865946),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(362888),
                        Minute: sdk.Int(441321),
                        Nano: sdk.Int(45234),
                        Second: sdk.Int(486410),
                    },
                    TimeZone: sdk.String("minima"),
                },
                shared.Schedule{
                    CampaignID: sdk.Int64(448369),
                    DaysOfWeek: []string{
                        "excepturi",
                        "dolores",
                    },
                    ID: sdk.Int64(621169),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(85076),
                        Month: sdk.Int(498180),
                        Year: sdk.Int(452729),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(866789),
                        Minute: sdk.Int(932666),
                        Nano: sdk.Int(627735),
                        Second: sdk.Int(763165),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(401428),
                        Month: sdk.Int(311486),
                        Year: sdk.Int(416692),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(888616),
                        Minute: sdk.Int(810839),
                        Nano: sdk.Int(697274),
                        Second: sdk.Int(348192),
                    },
                    TimeZone: sdk.String("quam"),
                },
            },
        },
        ID: 211455,
        StrictValidation: sdk.Bool(false),
    }, operations.UpdateTextBroadcastSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TextBroadcastCreateResponse != nil {
        // handle response
    }
}
```
