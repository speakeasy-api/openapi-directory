<!-- Start SDK Example Usage -->
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
    res, err := s.CreateCallAnalyticsCategory(ctx, operations.CreateCallAnalyticsCategoryRequest{
        CreateCallAnalyticsCategoryRequest: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "corrupti",
            InputType: shared.InputTypeEnumPostCall.ToPointer(),
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(844266),
                            First: sdk.Int64(602763),
                            Last: sdk.Int64(857946),
                            StartTime: sdk.Int64(544883),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(423655),
                            First: sdk.Int64(623564),
                            Last: sdk.Int64(645894),
                            StartPercentage: sdk.Int64(384382),
                        },
                        Threshold: sdk.Int64(437587),
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(297534),
                            First: sdk.Int64(891773),
                            Last: sdk.Int64(56713),
                            StartTime: sdk.Int64(963663),
                        },
                        Negate: sdk.Bool(false),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(272656),
                            First: sdk.Int64(383441),
                            Last: sdk.Int64(477665),
                            StartPercentage: sdk.Int64(791725),
                        },
                        Threshold: sdk.Int64(812169),
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(528895),
                            First: sdk.Int64(479977),
                            Last: sdk.Int64(568045),
                            StartTime: sdk.Int64(392785),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(836079),
                            First: sdk.Int64(71036),
                            Last: sdk.Int64(337396),
                            StartPercentage: sdk.Int64(87129),
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            shared.SentimentValueEnumPositive,
                            shared.SentimentValueEnumNegative,
                            shared.SentimentValueEnumMixed,
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(957156),
                            First: sdk.Int64(778157),
                            Last: sdk.Int64(140350),
                            StartTime: sdk.Int64(870013),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(978619),
                            First: sdk.Int64(473608),
                            Last: sdk.Int64(799159),
                            StartPercentage: sdk.Int64(800911),
                        },
                        Targets: []string{
                            "totam",
                            "porro",
                        },
                        TranscriptFilterType: shared.TranscriptFilterTypeEnumExact,
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(678880),
                            First: sdk.Int64(118274),
                            Last: sdk.Int64(720633),
                            StartTime: sdk.Int64(639921),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(143353),
                            First: sdk.Int64(537373),
                            Last: sdk.Int64(944669),
                            StartPercentage: sdk.Int64(758616),
                        },
                        Threshold: sdk.Int64(521848),
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(105907),
                            First: sdk.Int64(414662),
                            Last: sdk.Int64(473600),
                            StartTime: sdk.Int64(264555),
                        },
                        Negate: sdk.Bool(false),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(186332),
                            First: sdk.Int64(774234),
                            Last: sdk.Int64(736918),
                            StartPercentage: sdk.Int64(456150),
                        },
                        Threshold: sdk.Int64(216550),
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(568434),
                            First: sdk.Int64(135218),
                            Last: sdk.Int64(18789),
                            StartTime: sdk.Int64(324141),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumCustomer.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(149675),
                            First: sdk.Int64(612096),
                            Last: sdk.Int64(222321),
                            StartPercentage: sdk.Int64(616934),
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            shared.SentimentValueEnumMixed,
                            shared.SentimentValueEnumMixed,
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(681820),
                            First: sdk.Int64(449950),
                            Last: sdk.Int64(359508),
                            StartTime: sdk.Int64(613064),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(902349),
                            First: sdk.Int64(697631),
                            Last: sdk.Int64(99280),
                            StartPercentage: sdk.Int64(60225),
                        },
                        Targets: []string{
                            "est",
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        TranscriptFilterType: shared.TranscriptFilterTypeEnumExact,
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(210382),
                            First: sdk.Int64(358152),
                            Last: sdk.Int64(128926),
                            StartTime: sdk.Int64(750686),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(607831),
                            First: sdk.Int64(363711),
                            Last: sdk.Int64(325047),
                            StartPercentage: sdk.Int64(570197),
                        },
                        Threshold: sdk.Int64(38425),
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(438601),
                            First: sdk.Int64(634274),
                            Last: sdk.Int64(988374),
                            StartTime: sdk.Int64(958950),
                        },
                        Negate: sdk.Bool(false),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(102044),
                            First: sdk.Int64(652790),
                            Last: sdk.Int64(208876),
                            StartPercentage: sdk.Int64(635059),
                        },
                        Threshold: sdk.Int64(161309),
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(995300),
                            First: sdk.Int64(653108),
                            Last: sdk.Int64(581850),
                            StartTime: sdk.Int64(253291),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(466311),
                            First: sdk.Int64(474697),
                            Last: sdk.Int64(244425),
                            StartPercentage: sdk.Int64(623510),
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            shared.SentimentValueEnumNegative,
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: sdk.Int64(110375),
                            First: sdk.Int64(674752),
                            Last: sdk.Int64(656330),
                            StartTime: sdk.Int64(317202),
                        },
                        Negate: sdk.Bool(false),
                        ParticipantRole: shared.ParticipantRoleEnumAgent.ToPointer(),
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: sdk.Int64(778346),
                            First: sdk.Int64(196582),
                            Last: sdk.Int64(949572),
                            StartPercentage: sdk.Int64(368725),
                        },
                        Targets: []string{
                            "possimus",
                            "aut",
                            "quasi",
                        },
                        TranscriptFilterType: shared.TranscriptFilterTypeEnumExact,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.CreateCallAnalyticsCategoryXAmzTargetEnumTranscribeCreateCallAnalyticsCategory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallAnalyticsCategoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->