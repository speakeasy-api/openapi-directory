<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateCallAnalyticsCategoryRequest{
        Headers: operations.CreateCallAnalyticsCategoryHeaders{
            XAmzAlgorithm: "nemo",
            XAmzContentSha256: "voluptate",
            XAmzCredential: "harum",
            XAmzDate: "in",
            XAmzSecurityToken: "doloribus",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "fugit",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "quidem",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5336277454034406272,
                            First: 1218029543746308865,
                            Last: 8711323242707794750,
                            StartTime: 4786873994085620073,
                        },
                        Negate: true,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8681448736709792492,
                            First: 8843178762909941511,
                            Last: 5144550845621037084,
                            StartPercentage: 6580010265485859134,
                        },
                        Threshold: 6484329848990702586,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 9200300415099738243,
                            First: 9196412727204014287,
                            Last: 6045120471366708344,
                            StartTime: 6074370712228508279,
                        },
                        Negate: true,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8213733991439134579,
                            First: 6674178362169036754,
                            Last: 4021674889336767743,
                            StartPercentage: 4553174173746381904,
                        },
                        Threshold: 989091601292141376,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 1376927017588058395,
                            First: 6959983523951215426,
                            Last: 2428953924739529784,
                            StartTime: 1011461110648362546,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8528216463489172710,
                            First: 725235948094613350,
                            Last: 4233348973768874798,
                            StartPercentage: 1342125891621164403,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEUTRAL",
                            "POSITIVE",
                            "POSITIVE",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 8711730822118208836,
                            First: 5181346669559793201,
                            Last: 5574603858462484864,
                            StartTime: 9190244281140204256,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3663057658826620379,
                            First: 115823346082349085,
                            Last: 3363204431279602429,
                            StartPercentage: 57437767531503963,
                        },
                        Targets: []string{
                            "tempora",
                            "velit",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6613167672984031801,
                            First: 3584035640808979034,
                            Last: 7631329305858912387,
                            StartTime: 4883180688227366407,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 7011499513981219804,
                            First: 4471552887527204086,
                            Last: 4201207593044208891,
                            StartPercentage: 6463540908571642921,
                        },
                        Threshold: 8780590008709385125,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6903445559935402770,
                            First: 8411096056595132837,
                            Last: 2150676067792058941,
                            StartTime: 6642379958826014427,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 5389573714392081446,
                            First: 6521914908641398924,
                            Last: 6585424684882927481,
                            StartPercentage: 6108316656062704112,
                        },
                        Threshold: 7588503257562630111,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 3316505136672236965,
                            First: 3889838825141332195,
                            Last: 6006281059711840,
                            StartTime: 3007218505232506518,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 656218400201611567,
                            First: 7789084174083090295,
                            Last: 8259585080344169019,
                            StartPercentage: 2963641962930928403,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEGATIVE",
                            "MIXED",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6776125662575650986,
                            First: 6969188280212051739,
                            Last: 4912062599292149577,
                            StartTime: 5623759263480213541,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8278714757291536813,
                            First: 8862827163684169132,
                            Last: 2579969089363039556,
                            StartPercentage: 6220812115750260392,
                        },
                        Targets: []string{
                            "voluptatem",
                            "omnis",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5286065203460241242,
                            First: 4238138030004755645,
                            Last: 4360352506346374904,
                            StartTime: 1881072773164933129,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 5620368036922258373,
                            First: 8581312207893161575,
                            Last: 9198946798273129036,
                            StartPercentage: 6416643106480811624,
                        },
                        Threshold: 5731495313057977443,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 7376201324970210606,
                            First: 7776899679625897395,
                            Last: 186419219586351569,
                            StartTime: 4224250376210029763,
                        },
                        Negate: true,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 4212988410140770605,
                            First: 8296866676506619135,
                            Last: 6639369403309398831,
                            StartPercentage: 648832223801244656,
                        },
                        Threshold: 1240810409161554001,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 8885171940256243686,
                            First: 5866761042508268179,
                            Last: 5338749943273899601,
                            StartTime: 5150259423224589213,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 2908546562159264772,
                            First: 4630004974886566506,
                            Last: 144153526583668598,
                            StartPercentage: 6771010612534797755,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEUTRAL",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 421120806850004545,
                            First: 5595691125029894066,
                            Last: 6823661893871202900,
                            StartTime: 5247443146048660447,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 2684399817121960666,
                            First: 8289392119546275015,
                            Last: 8768690139785603795,
                            StartPercentage: 1569509831803725495,
                        },
                        Targets: []string{
                            "maxime",
                            "quibusdam",
                            "asperiores",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
            },
        },
    }
    
    res, err := s.CreateCallAnalyticsCategory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallAnalyticsCategoryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->