<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateCallAnalyticsCategoryRequest{
        CreateCallAnalyticsCategoryRequest: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "corrupti",
            InputType: "POST_CALL",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 844266,
                            First: 602763,
                            Last: 857946,
                            StartTime: 544883,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 423655,
                            First: 623564,
                            Last: 645894,
                            StartPercentage: 384382,
                        },
                        Threshold: 437587,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 297534,
                            First: 891773,
                            Last: 56713,
                            StartTime: 963663,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 272656,
                            First: 383441,
                            Last: 477665,
                            StartPercentage: 791725,
                        },
                        Threshold: 812169,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 528895,
                            First: 479977,
                            Last: 568045,
                            StartTime: 392785,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 836079,
                            First: 71036,
                            Last: 337396,
                            StartPercentage: 87129,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "POSITIVE",
                            "NEGATIVE",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 957156,
                            First: 778157,
                            Last: 140350,
                            StartTime: 870013,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 978619,
                            First: 473608,
                            Last: 799159,
                            StartPercentage: 800911,
                        },
                        Targets: []string{
                            "totam",
                            "porro",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 678880,
                            First: 118274,
                            Last: 720633,
                            StartTime: 639921,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 143353,
                            First: 537373,
                            Last: 944669,
                            StartPercentage: 758616,
                        },
                        Threshold: 521848,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 105907,
                            First: 414662,
                            Last: 473600,
                            StartTime: 264555,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 186332,
                            First: 774234,
                            Last: 736918,
                            StartPercentage: 456150,
                        },
                        Threshold: 216550,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 568434,
                            First: 135218,
                            Last: 18789,
                            StartTime: 324141,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 149675,
                            First: 612096,
                            Last: 222321,
                            StartPercentage: 616934,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 681820,
                            First: 449950,
                            Last: 359508,
                            StartTime: 613064,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 902349,
                            First: 697631,
                            Last: 99280,
                            StartPercentage: 60225,
                        },
                        Targets: []string{
                            "est",
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 210382,
                            First: 358152,
                            Last: 128926,
                            StartTime: 750686,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 607831,
                            First: 363711,
                            Last: 325047,
                            StartPercentage: 570197,
                        },
                        Threshold: 38425,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 438601,
                            First: 634274,
                            Last: 988374,
                            StartTime: 958950,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 102044,
                            First: 652790,
                            Last: 208876,
                            StartPercentage: 635059,
                        },
                        Threshold: 161309,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 995300,
                            First: 653108,
                            Last: 581850,
                            StartTime: 253291,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 466311,
                            First: 474697,
                            Last: 244425,
                            StartPercentage: 623510,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEGATIVE",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 110375,
                            First: 674752,
                            Last: 656330,
                            StartTime: 317202,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 778346,
                            First: 196582,
                            Last: 949572,
                            StartPercentage: 368725,
                        },
                        Targets: []string{
                            "possimus",
                            "aut",
                            "quasi",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
            },
        },
        XAmzAlgorithm: "error",
        XAmzContentSha256: "temporibus",
        XAmzCredential: "laborum",
        XAmzDate: "quasi",
        XAmzSecurityToken: "reiciendis",
        XAmzSignature: "voluptatibus",
        XAmzSignedHeaders: "vero",
        XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
    }

    ctx := context.Background()
    res, err := s.CreateCallAnalyticsCategory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallAnalyticsCategoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->