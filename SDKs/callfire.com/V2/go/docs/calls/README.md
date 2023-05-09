# Calls

### Available Operations

* [AddCallBroadcastBatch](#addcallbroadcastbatch) - Add batches to a call broadcast
* [AddCallBroadcastRecipients](#addcallbroadcastrecipients) - Add recipients to a call broadcast
* [ArchiveVoiceBroadcast](#archivevoicebroadcast) - Archive voice broadcast
* [CreateCallBroadcast](#createcallbroadcast) - Create a call broadcast
* [FindCallBroadcasts](#findcallbroadcasts) - Find call broadcasts
* [FindCalls](#findcalls) - Find calls
* [GetCall](#getcall) - Find a specific call
* [GetCallBroadcast](#getcallbroadcast) - Find a specific call broadcast
* [GetCallBroadcastBatches](#getcallbroadcastbatches) - Find batches in a call broadcast
* [GetCallBroadcastCalls](#getcallbroadcastcalls) - Find calls in a call broadcast
* [GetCallBroadcastStats](#getcallbroadcaststats) - Get statistics on call broadcast
* [GetCallRecording](#getcallrecording) - Get call recording by id
* [GetCallRecordingByName](#getcallrecordingbyname) - Get call recording by name
* [GetCallRecordingMp3](#getcallrecordingmp3) - Get call recording in mp3 format
* [GetCallRecordingMp3ByName](#getcallrecordingmp3byname) - Get call mp3 recording by name
* [GetCallRecordings](#getcallrecordings) - Get call recordings for a call
* [SendCalls](#sendcalls) - Send calls
* [StartVoiceBroadcast](#startvoicebroadcast) - Start voice broadcast
* [StopVoiceBroadcast](#stopvoicebroadcast) - Stop voice broadcast
* [ToggleCallBroadcastRecipientsStatus](#togglecallbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [UpdateCallBroadcast](#updatecallbroadcast) - Update a call broadcast

## AddCallBroadcastBatch

The 'add batch' API allows user to add additional batches to an already created voice broadcast campaign. The added batch will go through the CallFire validation process, unlike in the recipients version of this API. That is why you can use the scrubDuplicates flag to remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers

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
    res, err := s.Calls.AddCallBroadcastBatch(ctx, operations.AddCallBroadcastBatchRequest{
        BatchRequest: &shared.BatchRequest{
            ContactListID: sdk.Int64(978619),
            Name: sdk.String("Bernadette Schmidt"),
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "dicta": "nam",
                        "officia": "occaecati",
                        "fugit": "deleniti",
                    },
                    ContactID: sdk.Int64(944669),
                    FromNumber: sdk.String("optio"),
                    PhoneNumber: sdk.String("totam"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "commodi": "molestiae",
                    },
                    ContactID: sdk.Int64(264555),
                    FromNumber: sdk.String("qui"),
                    PhoneNumber: sdk.String("impedit"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "esse": "ipsum",
                        "excepturi": "aspernatur",
                        "perferendis": "ad",
                    },
                    ContactID: sdk.Int64(617636),
                    FromNumber: sdk.String("sed"),
                    PhoneNumber: sdk.String("iste"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "natus": "laboriosam",
                    },
                    ContactID: sdk.Int64(943749),
                    FromNumber: sdk.String("saepe"),
                    PhoneNumber: sdk.String("fuga"),
                },
            },
            ScrubDuplicates: sdk.Bool(false),
        },
        ID: 449950,
        StrictValidation: sdk.Bool(false),
    }, operations.AddCallBroadcastBatchSecurity{
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

## AddCallBroadcastRecipients

Use this API to add the recipients to an existing voice broadcast. Post a list of Recipient objects to be added to the voice broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers

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
    res, err := s.Calls.AddCallBroadcastRecipients(ctx, operations.AddCallBroadcastRecipientsRequest{
        RequestBody: []shared.Recipient{
            shared.Recipient{
                Attributes: map[string]string{
                    "iure": "saepe",
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                },
                ContactID: sdk.Int64(666767),
                FromNumber: sdk.String("mollitia"),
                PhoneNumber: sdk.String("laborum"),
            },
            shared.Recipient{
                Attributes: map[string]string{
                    "dolorem": "corporis",
                },
                ContactID: sdk.Int64(128926),
                FromNumber: sdk.String("nobis"),
                PhoneNumber: sdk.String("enim"),
            },
        },
        Fields: sdk.String("omnis"),
        ID: 363711,
        StrictValidation: sdk.Bool(false),
    }, operations.AddCallBroadcastRecipientsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallList != nil {
        // handle response
    }
}
```

## ArchiveVoiceBroadcast

Archives a voice broadcast (voice broadcast will be hidden in search results)

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
    res, err := s.Calls.ArchiveVoiceBroadcast(ctx, operations.ArchiveVoiceBroadcastRequest{
        ID: 325047,
    }, operations.ArchiveVoiceBroadcastSecurity{
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

## CreateCallBroadcast

Creates a call broadcast campaign using the Call Broadcast API. Send a CallBroadcast in the message body to add details in a voice broadcast campaign. The campaign can be created without contacts and bare minimum configuration, but contacts will have to be added further on to use the campaign

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
    res, err := s.Calls.CreateCallBroadcast(ctx, operations.CreateCallBroadcastRequest{
        CallBroadcastInput: &shared.CallBroadcastInput{
            AnsweringMachineConfig: shared.CallBroadcastAnsweringMachineConfigEnumLiveWithAmd.ToPointer(),
            DialplanXML: sdk.String("accusantium"),
            FromNumber: sdk.String("iure"),
            ID: sdk.Int64(634274),
            Labels: []string{
                "sapiente",
                "architecto",
                "mollitia",
                "dolorem",
            },
            LocalTimeRestriction: &shared.LocalTimeRestriction{
                BeginHour: sdk.Int(635059),
                BeginMinute: sdk.Int(161309),
                Enabled: sdk.Bool(false),
                EndHour: sdk.Int(995300),
                EndMinute: sdk.Int(653108),
            },
            MaxActive: sdk.Int(581850),
            MaxActiveTransfers: sdk.Int(253291),
            Name: sdk.String("Claudia Krajcik"),
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "vitae": "laborum",
                        "animi": "enim",
                    },
                    ContactID: sdk.Int64(138183),
                    FromNumber: sdk.String("quo"),
                    PhoneNumber: sdk.String("sequi"),
                },
            },
            ResumeNextDay: sdk.Bool(false),
            RetryConfig: &shared.RetryConfig{
                MaxAttempts: sdk.Int(949572),
                MinutesBetweenAttempts: sdk.Int(368725),
                RetryPhoneTypes: []string{
                    "possimus",
                    "aut",
                    "quasi",
                },
                RetryResults: []string{
                    "temporibus",
                    "laborum",
                    "quasi",
                },
            },
            Schedules: []shared.Schedule{
                shared.Schedule{
                    CampaignID: sdk.Int64(976460),
                    DaysOfWeek: []string{
                        "nihil",
                        "praesentium",
                        "voluptatibus",
                        "ipsa",
                    },
                    ID: sdk.Int64(604846),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(451159),
                        Month: sdk.Int(739264),
                        Year: sdk.Int(19987),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(39187),
                        Minute: sdk.Int(441711),
                        Nano: sdk.Int(282807),
                        Second: sdk.Int(979587),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(120196),
                        Month: sdk.Int(359444),
                        Year: sdk.Int(296140),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(480894),
                        Minute: sdk.Int(118727),
                        Nano: sdk.Int(688661),
                        Second: sdk.Int(317983),
                    },
                    TimeZone: sdk.String("accusamus"),
                },
                shared.Schedule{
                    CampaignID: sdk.Int64(414263),
                    DaysOfWeek: []string{
                        "quae",
                        "ipsum",
                        "quidem",
                        "molestias",
                    },
                    ID: sdk.Int64(566602),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(865103),
                        Month: sdk.Int(265389),
                        Year: sdk.Int(508969),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(523248),
                        Minute: sdk.Int(916723),
                        Nano: sdk.Int(93940),
                        Second: sdk.Int(921158),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(575947),
                        Month: sdk.Int(83112),
                        Year: sdk.Int(929297),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(277718),
                        Minute: sdk.Int(318569),
                        Nano: sdk.Int(9356),
                        Second: sdk.Int(667411),
                    },
                    TimeZone: sdk.String("quibusdam"),
                },
                shared.Schedule{
                    CampaignID: sdk.Int64(131797),
                    DaysOfWeek: []string{
                        "distinctio",
                        "quibusdam",
                        "labore",
                    },
                    ID: sdk.Int64(264730),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(183191),
                        Month: sdk.Int(397821),
                        Year: sdk.Int(586513),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(552822),
                        Minute: sdk.Int(20107),
                        Nano: sdk.Int(164940),
                        Second: sdk.Int(828940),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(369808),
                        Month: sdk.Int(4695),
                        Year: sdk.Int(146441),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(677817),
                        Minute: sdk.Int(569618),
                        Nano: sdk.Int(270008),
                        Second: sdk.Int(703737),
                    },
                    TimeZone: sdk.String("tempore"),
                },
                shared.Schedule{
                    CampaignID: sdk.Int64(288476),
                    DaysOfWeek: []string{
                        "eum",
                        "non",
                        "eligendi",
                        "sint",
                    },
                    ID: sdk.Int64(396098),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(592042),
                        Month: sdk.Int(896039),
                        Year: sdk.Int(572252),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(638921),
                        Minute: sdk.Int(223081),
                        Nano: sdk.Int(891555),
                        Second: sdk.Int(952749),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(680056),
                        Month: sdk.Int(447125),
                        Year: sdk.Int(449198),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(846409),
                        Minute: sdk.Int(978571),
                        Nano: sdk.Int(699479),
                        Second: sdk.Int(116202),
                    },
                    TimeZone: sdk.String("magnam"),
                },
            },
            Sounds: &shared.CallBroadcastSounds{
                DncDigit: sdk.String("cumque"),
                DncSoundID: sdk.Int64(813798),
                DncSoundText: sdk.String("ea"),
                DncSoundTextVoice: shared.CallBroadcastSoundsDncSoundTextVoiceEnumFemale1.ToPointer(),
                LiveSoundID: sdk.Int64(675439),
                LiveSoundText: sdk.String("accusamus"),
                LiveSoundTextVoice: shared.CallBroadcastSoundsLiveSoundTextVoiceEnumFemale1.ToPointer(),
                MachineSoundID: sdk.Int64(581273),
                MachineSoundText: sdk.String("enim"),
                MachineSoundTextVoice: shared.CallBroadcastSoundsMachineSoundTextVoiceEnumFrenchcanadian1.ToPointer(),
                TransferDigit: sdk.String("delectus"),
                TransferNumber: sdk.String("quidem"),
                TransferSoundID: sdk.Int64(588465),
                TransferSoundText: sdk.String("nam"),
                TransferSoundTextVoice: shared.CallBroadcastSoundsTransferSoundTextVoiceEnumSpanish1.ToPointer(),
            },
        },
        Start: sdk.Bool(false),
        StrictValidation: sdk.Bool(false),
    }, operations.CreateCallBroadcastSecurity{
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

## FindCallBroadcasts

Searches for all voice broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of voice broadcasts

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
    res, err := s.Calls.FindCallBroadcasts(ctx, operations.FindCallBroadcastsRequest{
        Fields: sdk.String("blanditiis"),
        IntervalBegin: sdk.Int64(533206),
        IntervalEnd: sdk.Int64(956084),
        Label: sdk.String("amet"),
        Limit: sdk.Int(643990),
        Name: sdk.String("Wilma Mosciski"),
        Offset: sdk.Int(19193),
        Running: sdk.Bool(false),
        Scheduled: sdk.Bool(false),
    }, operations.FindCallBroadcastsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallBroadcastPage != nil {
        // handle response
    }
}
```

## FindCalls

To search for all calls sent or received by the user. Use "id=0" for the campaignId parameter to query for all calls sent through the POST /calls API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)

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
    res, err := s.Calls.FindCalls(ctx, operations.FindCallsRequest{
        BatchID: sdk.Int64(470132),
        CampaignID: sdk.Int64(301575),
        Fields: sdk.String("distinctio"),
        FromNumber: sdk.String("id"),
        ID: []int64{
            290077,
            383462,
        },
        Inbound: sdk.Bool(false),
        IntervalBegin: sdk.Int64(618016),
        IntervalEnd: sdk.Int64(749170),
        Label: sdk.String("eum"),
        Limit: sdk.Int(878453),
        Offset: sdk.Int(135474),
        Results: sdk.String("architecto"),
        States: sdk.String("magnam"),
        ToNumber: sdk.String("et"),
    }, operations.FindCallsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallPage != nil {
        // handle response
    }
}
```

## GetCall

Returns a single Call instance for a given call id.

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
    res, err := s.Calls.GetCall(ctx, operations.GetCallRequest{
        Fields: sdk.String("excepturi"),
        ID: 354047,
    }, operations.GetCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Call != nil {
        // handle response
    }
}
```

## GetCallBroadcast

Returns a single CallBroadcast instance for a given call broadcast campaign id

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
    res, err := s.Calls.GetCallBroadcast(ctx, operations.GetCallBroadcastRequest{
        Fields: sdk.String("provident"),
        ID: 551816,
    }, operations.GetCallBroadcastSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallBroadcast != nil {
        // handle response
    }
}
```

## GetCallBroadcastBatches

This endpoint will enable the user to page through all of the batches for a particular voice broadcast campaign

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
    res, err := s.Calls.GetCallBroadcastBatches(ctx, operations.GetCallBroadcastBatchesRequest{
        Fields: sdk.String("sint"),
        ID: 33625,
        Limit: sdk.Int(653201),
        Offset: sdk.Int(968962),
    }, operations.GetCallBroadcastBatchesSecurity{
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

## GetCallBroadcastCalls

This endpoint will enable the user to page through all calls for a particular call broadcast campaign

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
    res, err := s.Calls.GetCallBroadcastCalls(ctx, operations.GetCallBroadcastCallsRequest{
        BatchID: sdk.Int64(652103),
        Fields: sdk.String("ad"),
        ID: 431418,
        Limit: sdk.Int(221262),
        Offset: sdk.Int(896547),
    }, operations.GetCallBroadcastCallsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallPage != nil {
        // handle response
    }
}
```

## GetCallBroadcastStats

Returns broadcast statistics like total number of sent/received actions, total cost, number of remaining outbound actions, error count, etc

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
    res, err := s.Calls.GetCallBroadcastStats(ctx, operations.GetCallBroadcastStatsRequest{
        Begin: sdk.Int64(141264),
        End: sdk.Int64(367562),
        Fields: sdk.String("quasi"),
        ID: 435865,
    }, operations.GetCallBroadcastStatsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallBroadcastStats != nil {
        // handle response
    }
}
```

## GetCallRecording

Returns metadata of recording of a particular call. Metadata contains a link to a MP3 recording

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
    res, err := s.Calls.GetCallRecording(ctx, operations.GetCallRecordingRequest{
        Fields: sdk.String("doloribus"),
        ID: 891924,
    }, operations.GetCallRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallRecording != nil {
        // handle response
    }
}
```

## GetCallRecordingByName

Returns recording metadata of particular call. Metadata contains link to a MP3 recording

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
    res, err := s.Calls.GetCallRecordingByName(ctx, operations.GetCallRecordingByNameRequest{
        Fields: sdk.String("eius"),
        ID: 806194,
        Name: "Mr. Andres King",
    }, operations.GetCallRecordingByNameSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallRecording != nil {
        // handle response
    }
}
```

## GetCallRecordingMp3

Returns an MP3 recording of particular call, response contains binary data, content type is 'audio/mpeg'

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
    res, err := s.Calls.GetCallRecordingMp3(ctx, operations.GetCallRecordingMp3Request{
        ID: 352312,
    }, operations.GetCallRecordingMp3Security{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InputStream != nil {
        // handle response
    }
}
```

## GetCallRecordingMp3ByName

Returns a MP3 recording of a particular call, response contains binary data, content type is 'audio/mpeg'

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
    res, err := s.Calls.GetCallRecordingMp3ByName(ctx, operations.GetCallRecordingMp3ByNameRequest{
        ID: 714242,
        Name: "Kristie Spencer",
    }, operations.GetCallRecordingMp3ByNameSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCallRecordings

Returns a list of recordings metadata of particular call. Metadata contains link to a MP3 recording

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
    res, err := s.Calls.GetCallRecordings(ctx, operations.GetCallRecordingsRequest{
        Fields: sdk.String("pariatur"),
        ID: 37559,
    }, operations.GetCallRecordingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallRecordingList != nil {
        // handle response
    }
}
```

## SendCalls

Use the /calls API to send individual calls quickly. A verified Caller ID and sufficient credits are required to make a call. CallRecipient represents a single recipient identified by phone number or contact id in CallFire system. You can attach user-defined attributes to a Call action via CallRecipient.attributes property, attributes are available in Call action response

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
    res, err := s.Calls.SendCalls(ctx, operations.SendCallsRequest{
        RequestBody: []shared.CallRecipient{
            shared.CallRecipient{
                Attributes: map[string]string{
                    "natus": "magni",
                    "sunt": "quo",
                    "illum": "pariatur",
                },
                ContactID: sdk.Int64(807319),
                DialplanXML: sdk.String("ea"),
                FromNumber: sdk.String("excepturi"),
                LiveMessage: sdk.String("odit"),
                LiveMessageSoundID: sdk.Int64(407183),
                MachineMessage: sdk.String("accusantium"),
                MachineMessageSoundID: sdk.Int64(69167),
                PhoneNumber: sdk.String("maiores"),
                TransferDigit: sdk.String("quidem"),
                TransferMessage: sdk.String("ipsam"),
                TransferMessageSoundID: sdk.Int64(453543),
                TransferNumber: sdk.String("autem"),
                Voice: shared.CallRecipientVoiceEnumSpanish1.ToPointer(),
            },
        },
        CampaignID: sdk.Int64(50588),
        DefaultLiveMessage: sdk.String("pariatur"),
        DefaultLiveMessageSoundID: sdk.Int64(365496),
        DefaultMachineMessage: sdk.String("voluptatibus"),
        DefaultMachineMessageSoundID: sdk.Int64(16627),
        DefaultVoice: operations.SendCallsDefaultVoiceEnumFrenchcanadian1.ToPointer(),
        Fields: sdk.String("amet"),
        StrictValidation: sdk.Bool(false),
    }, operations.SendCallsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallList != nil {
        // handle response
    }
}
```

## StartVoiceBroadcast

Start a voice broadcast

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
    res, err := s.Calls.StartVoiceBroadcast(ctx, operations.StartVoiceBroadcastRequest{
        ID: 11714,
    }, operations.StartVoiceBroadcastSecurity{
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

## StopVoiceBroadcast

Stop a voice broadcast

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
    res, err := s.Calls.StopVoiceBroadcast(ctx, operations.StopVoiceBroadcastRequest{
        ID: 764912,
    }, operations.StopVoiceBroadcastSecurity{
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

## ToggleCallBroadcastRecipientsStatus

This operation lets the user to disable/enable undialed recipients in created broadcast

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
    res, err := s.Calls.ToggleCallBroadcastRecipientsStatus(ctx, operations.ToggleCallBroadcastRecipientsStatusRequest{
        RequestBody: []shared.Recipient{
            shared.Recipient{
                Attributes: map[string]string{
                    "libero": "nobis",
                    "dolores": "quis",
                    "totam": "dignissimos",
                    "eaque": "quis",
                },
                ContactID: sdk.Int64(199996),
                FromNumber: sdk.String("eos"),
                PhoneNumber: sdk.String("perferendis"),
            },
            shared.Recipient{
                Attributes: map[string]string{
                    "minus": "quam",
                },
                ContactID: sdk.Int64(223924),
                FromNumber: sdk.String("vero"),
                PhoneNumber: sdk.String("nostrum"),
            },
        },
        Enable: sdk.Bool(false),
        ID: 944120,
    }, operations.ToggleCallBroadcastRecipientsStatusSecurity{
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

## UpdateCallBroadcast

This operation lets the user modify the configuration of a voice broadcast campaign after call broadcast campaign is created. See CallBroadcast for more information on what can/can't be updated on this API

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
    res, err := s.Calls.UpdateCallBroadcast(ctx, operations.UpdateCallBroadcastRequest{
        CallBroadcastInput: &shared.CallBroadcastInput{
            AnsweringMachineConfig: shared.CallBroadcastAnsweringMachineConfigEnumLiveImmediate.ToPointer(),
            DialplanXML: sdk.String("omnis"),
            FromNumber: sdk.String("facilis"),
            ID: sdk.Int64(596656),
            Labels: []string{
                "porro",
            },
            LocalTimeRestriction: &shared.LocalTimeRestriction{
                BeginHour: sdk.Int(164694),
                BeginMinute: sdk.Int(500026),
                Enabled: sdk.Bool(false),
                EndHour: sdk.Int(621479),
                EndMinute: sdk.Int(50370),
            },
            MaxActive: sdk.Int(577229),
            MaxActiveTransfers: sdk.Int(699098),
            Name: sdk.String("Ollie Watsica"),
            Recipients: []shared.Recipient{
                shared.Recipient{
                    Attributes: map[string]string{
                        "pariatur": "provident",
                        "nobis": "libero",
                        "delectus": "quaerat",
                    },
                    ContactID: sdk.Int64(554242),
                    FromNumber: sdk.String("aliquid"),
                    PhoneNumber: sdk.String("dolorem"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "dolor": "qui",
                    },
                    ContactID: sdk.Int64(218749),
                    FromNumber: sdk.String("hic"),
                    PhoneNumber: sdk.String("excepturi"),
                },
                shared.Recipient{
                    Attributes: map[string]string{
                        "voluptate": "dignissimos",
                        "reiciendis": "amet",
                        "dolorum": "numquam",
                    },
                    ContactID: sdk.Int64(85295),
                    FromNumber: sdk.String("ipsa"),
                    PhoneNumber: sdk.String("ipsa"),
                },
            },
            ResumeNextDay: sdk.Bool(false),
            RetryConfig: &shared.RetryConfig{
                MaxAttempts: sdk.Int(434417),
                MinutesBetweenAttempts: sdk.Int(487838),
                RetryPhoneTypes: []string{
                    "accusamus",
                    "quidem",
                },
                RetryResults: []string{
                    "voluptas",
                    "natus",
                    "eos",
                    "atque",
                },
            },
            Schedules: []shared.Schedule{
                shared.Schedule{
                    CampaignID: sdk.Int64(854614),
                    DaysOfWeek: []string{
                        "soluta",
                    },
                    ID: sdk.Int64(679393),
                    StartDate: &shared.LocalDate{
                        Day: sdk.Int(478596),
                        Month: sdk.Int(453697),
                        Year: sdk.Int(677082),
                    },
                    StartTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(536579),
                        Minute: sdk.Int(607045),
                        Nano: sdk.Int(896672),
                        Second: sdk.Int(714697),
                    },
                    StopDate: &shared.LocalDate{
                        Day: sdk.Int(990339),
                        Month: sdk.Int(469497),
                        Year: sdk.Int(216897),
                    },
                    StopTimeOfDay: &shared.LocalTime{
                        Hour: sdk.Int(456015),
                        Minute: sdk.Int(663078),
                        Nano: sdk.Int(906418),
                        Second: sdk.Int(263322),
                    },
                    TimeZone: sdk.String("aspernatur"),
                },
            },
            Sounds: &shared.CallBroadcastSounds{
                DncDigit: sdk.String("perferendis"),
                DncSoundID: sdk.Int64(229219),
                DncSoundText: sdk.String("optio"),
                DncSoundTextVoice: shared.CallBroadcastSoundsDncSoundTextVoiceEnumFrenchcanadian1.ToPointer(),
                LiveSoundID: sdk.Int64(320017),
                LiveSoundText: sdk.String("saepe"),
                LiveSoundTextVoice: shared.CallBroadcastSoundsLiveSoundTextVoiceEnumFemale1.ToPointer(),
                MachineSoundID: sdk.Int64(645785),
                MachineSoundText: sdk.String("provident"),
                MachineSoundTextVoice: shared.CallBroadcastSoundsMachineSoundTextVoiceEnumFemale1.ToPointer(),
                TransferDigit: sdk.String("repellendus"),
                TransferNumber: sdk.String("totam"),
                TransferSoundID: sdk.Int64(628982),
                TransferSoundText: sdk.String("alias"),
                TransferSoundTextVoice: shared.CallBroadcastSoundsTransferSoundTextVoiceEnumFrenchcanadian1.ToPointer(),
            },
        },
        ID: 311860,
        StrictValidation: sdk.Bool(false),
    }, operations.UpdateCallBroadcastSecurity{
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
