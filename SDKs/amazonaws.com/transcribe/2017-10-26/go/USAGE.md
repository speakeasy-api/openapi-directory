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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateCallAnalyticsCategoryRequest{
        Headers: operations.CreateCallAnalyticsCategoryHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "nihil",
            InputType: "POST_CALL",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 384382,
                            First: 437587,
                            Last: 297534,
                            StartTime: 891773,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 963663,
                            First: 272656,
                            Last: 383441,
                            StartPercentage: 477665,
                        },
                        Threshold: 791725,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 812169,
                            First: 528895,
                            Last: 479977,
                            StartTime: 568045,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 392785,
                            First: 925597,
                            Last: 836079,
                            StartPercentage: 71036,
                        },
                        Threshold: 337396,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 87129,
                            First: 648172,
                            Last: 20218,
                            StartTime: 368241,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 957156,
                            First: 778157,
                            Last: 140350,
                            StartPercentage: 870013,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                            "NEGATIVE",
                            "MIXED",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 461479,
                            First: 520478,
                            Last: 780529,
                            StartTime: 678880,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 720633,
                            First: 639921,
                            Last: 582020,
                            StartPercentage: 143353,
                        },
                        Targets: []string{
                            "rerum",
                            "possimus",
                            "occaecati",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 414662,
                            First: 473600,
                            Last: 264555,
                            StartTime: 186332,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 736918,
                            First: 456150,
                            Last: 216550,
                            StartPercentage: 568434,
                        },
                        Threshold: 135218,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 18789,
                            First: 324141,
                            Last: 617636,
                            StartTime: 149675,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 612096,
                            First: 222321,
                            Last: 616934,
                            StartPercentage: 386489,
                        },
                        Threshold: 943749,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 902599,
                            First: 681820,
                            Last: 449950,
                            StartTime: 359508,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 437032,
                            First: 902349,
                            Last: 697631,
                            StartPercentage: 99280,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 666767,
                            First: 653140,
                            Last: 670638,
                            StartTime: 170909,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 358152,
                            First: 128926,
                            Last: 750686,
                            StartPercentage: 315428,
                        },
                        Targets: []string{
                            "commodi",
                            "quia",
                            "similique",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 438601,
                            First: 634274,
                            Last: 988374,
                            StartTime: 958950,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 652790,
                            First: 208876,
                            Last: 635059,
                            StartPercentage: 161309,
                        },
                        Threshold: 995300,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 653108,
                            First: 581850,
                            Last: 253291,
                            StartTime: 414369,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 466311,
                            First: 474697,
                            Last: 244425,
                            StartPercentage: 623510,
                        },
                        Threshold: 158969,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 338007,
                            First: 110375,
                            Last: 674752,
                            StartTime: 656330,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 138183,
                            First: 778346,
                            Last: 196582,
                            StartPercentage: 949572,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEUTRAL",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 13571,
                            First: 97101,
                            Last: 622846,
                            StartTime: 837945,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 96098,
                            First: 971945,
                            Last: 976460,
                            StartPercentage: 878194,
                        },
                        Targets: []string{
                            "molestias",
                            "reiciendis",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
            },
        },
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