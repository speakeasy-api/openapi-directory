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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "illum",
            InputType: "REAL_TIME",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 645894,
                            First: 384382,
                            Last: 437587,
                            StartTime: 297534,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 56713,
                            First: 963663,
                            Last: 272656,
                            StartPercentage: 383441,
                        },
                        Threshold: 477665,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 791725,
                            First: 812169,
                            Last: 528895,
                            StartTime: 479977,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 568045,
                            First: 392785,
                            Last: 925597,
                            StartPercentage: 836079,
                        },
                        Threshold: 71036,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 337396,
                            First: 87129,
                            Last: 648172,
                            StartTime: 20218,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 832620,
                            First: 957156,
                            Last: 778157,
                            StartPercentage: 140350,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                            "MIXED",
                            "NEGATIVE",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 800911,
                            First: 461479,
                            Last: 520478,
                            StartTime: 780529,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 118274,
                            First: 720633,
                            Last: 639921,
                            StartPercentage: 582020,
                        },
                        Targets: []string{
                            "deleniti",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 944669,
                            First: 758616,
                            Last: 521848,
                            StartTime: 105907,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 473600,
                            First: 264555,
                            Last: 186332,
                            StartPercentage: 774234,
                        },
                        Threshold: 736918,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 456150,
                            First: 216550,
                            Last: 568434,
                            StartTime: 135218,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 18789,
                            First: 324141,
                            Last: 617636,
                            StartPercentage: 149675,
                        },
                        Threshold: 612096,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 222321,
                            First: 616934,
                            Last: 386489,
                            StartTime: 943749,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 681820,
                            First: 449950,
                            Last: 359508,
                            StartPercentage: 613064,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "MIXED",
                            "NEUTRAL",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 99280,
                            First: 60225,
                            Last: 969810,
                            StartTime: 666767,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 670638,
                            First: 170909,
                            Last: 210382,
                            StartPercentage: 358152,
                        },
                        Targets: []string{
                            "nobis",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 315428,
                            First: 607831,
                            Last: 363711,
                            StartTime: 325047,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 38425,
                            First: 438601,
                            Last: 634274,
                            StartPercentage: 988374,
                        },
                        Threshold: 958950,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 102044,
                            First: 652790,
                            Last: 208876,
                            StartTime: 635059,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 161309,
                            First: 995300,
                            Last: 653108,
                            StartPercentage: 581850,
                        },
                        Threshold: 253291,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 414369,
                            First: 466311,
                            Last: 474697,
                            StartTime: 244425,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 158969,
                            First: 338007,
                            Last: 110375,
                            StartPercentage: 674752,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEGATIVE",
                            "POSITIVE",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 196582,
                            First: 949572,
                            Last: 368725,
                            StartTime: 662527,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 13571,
                            First: 97101,
                            Last: 622846,
                            StartPercentage: 837945,
                        },
                        Targets: []string{
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
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