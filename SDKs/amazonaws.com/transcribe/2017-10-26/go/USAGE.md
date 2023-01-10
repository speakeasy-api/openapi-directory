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
            XAmzAlgorithm: "dolorem",
            XAmzContentSha256: "quos",
            XAmzCredential: "deleniti",
            XAmzDate: "commodi",
            XAmzSecurityToken: "nobis",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "aspernatur",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "et",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6415833391072357588,
                            First: 3572998533988533354,
                            Last: 186115592639377320,
                            StartTime: 8371597839286912540,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 1737084578504854227,
                            First: 4072567731903858704,
                            Last: 4237085410032209086,
                            StartPercentage: 3111927870552615307,
                        },
                        Threshold: 5810679218075794205,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 4375415044152406675,
                            First: 6065226614949015610,
                            Last: 5255522860651016346,
                            StartTime: 4904486519077315581,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8950864482110226516,
                            First: 635778494545269976,
                            Last: 732909964824197774,
                            StartPercentage: 3574948044123775516,
                        },
                        Threshold: 8837983961987368305,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5910514474348776200,
                            First: 6822908827298521697,
                            Last: 6724775564262686261,
                            StartTime: 448293307772452745,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 5824651986652714030,
                            First: 6131616903038811778,
                            Last: 4594817126626365342,
                            StartPercentage: 5909463814165818777,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 4757942231363494366,
                            First: 6398098165847865044,
                            Last: 8555143277468378870,
                            StartTime: 2953219465361743600,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 9094254215425192755,
                            First: 8700678006278600136,
                            Last: 4987874047483574799,
                            StartPercentage: 1867551380647168719,
                        },
                        Targets: []string{
                            "voluptas",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 1354945883733857766,
                            First: 2429851522834465117,
                            Last: 4014337987995578881,
                            StartTime: 2407209082118264778,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8059088005692139324,
                            First: 1616693811299928439,
                            Last: 6166181411057100347,
                            StartPercentage: 7028536834256048015,
                        },
                        Threshold: 1174564792239911455,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 2323166218679581466,
                            First: 7469748512072958204,
                            Last: 7765873993746785792,
                            StartTime: 7182270801018086339,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3252394919724459204,
                            First: 4839093639110720179,
                            Last: 6513358929122907454,
                            StartPercentage: 7230693517838244503,
                        },
                        Threshold: 6854478643425791986,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 4432917687975454065,
                            First: 3838103805727716046,
                            Last: 5088282042390589507,
                            StartTime: 7067021397838106794,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 6950814023290779017,
                            First: 2685439770505515950,
                            Last: 301785877603363027,
                            StartPercentage: 3728036883544637968,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 1058936719184805791,
                            First: 9128763404757230253,
                            Last: 8358558923616582182,
                            StartTime: 6209843430664353487,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 777632575137638028,
                            First: 1039248335667233226,
                            Last: 1768953860407738737,
                            StartPercentage: 2732151556483902484,
                        },
                        Targets: []string{
                            "alias",
                            "id",
                            "in",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 8981508418491254011,
                            First: 2670592554296272629,
                            Last: 4609291726380021962,
                            StartTime: 2838559931627351935,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3011457315831140961,
                            First: 7813841376088152101,
                            Last: 5646368466189309592,
                            StartPercentage: 7279099440217309754,
                        },
                        Threshold: 8291728496659502847,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 3616220076055127616,
                            First: 1889402167586546675,
                            Last: 6631662835676981989,
                            StartTime: 2489959074308973683,
                        },
                        Negate: true,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3935710304177491303,
                            First: 3594503320079042333,
                            Last: 5067957230603510300,
                            StartPercentage: 4613481507084047686,
                        },
                        Threshold: 8645490517459002672,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6183506943487606482,
                            First: 7653920585589605553,
                            Last: 6151577229671946683,
                            StartTime: 26606651514557410,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3166852158880406779,
                            First: 927782600915074395,
                            Last: 2541103059884869503,
                            StartPercentage: 9089901266438170756,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "POSITIVE",
                            "NEGATIVE",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6741667782486366789,
                            First: 2142001216773853386,
                            Last: 58572451421529771,
                            StartTime: 8036607006448114164,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3450701776215534863,
                            First: 5317553351886277283,
                            Last: 3848007284071124204,
                            StartPercentage: 8598532481109664405,
                        },
                        Targets: []string{
                            "non",
                            "rerum",
                            "repellat",
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