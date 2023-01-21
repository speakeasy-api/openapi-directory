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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "fugit",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 2661732831099943416,
                            First: 8325060299420976708,
                            Last: 7837839688282259259,
                            StartTime: 2518412263346885298,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 7144924247938981575,
                            First: 161231572858529631,
                            Last: 7259475919510918339,
                            StartPercentage: 7373105480197164748,
                        },
                        Threshold: 3287288577352441706,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 3930927879439176946,
                            First: 4706154865122290029,
                            Last: 2217592893536642650,
                            StartTime: 1929546706668609706,
                        },
                        Negate: true,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3706853784096366226,
                            First: 2627038740284806767,
                            Last: 6303220950515014660,
                            StartPercentage: 4035568504096476779,
                        },
                        Threshold: 959367522974354090,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 2914295034816259174,
                            First: 1395437218309923052,
                            Last: 6745438398739480977,
                            StartTime: 2897681629866238117,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3317123977833389635,
                            First: 5001958211167890979,
                            Last: 167566062957544642,
                            StartPercentage: 4778690082005258714,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "POSITIVE",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5558237345453186302,
                            First: 7845762441295307478,
                            Last: 771642788862502430,
                            StartTime: 8514850266767180993,
                        },
                        Negate: false,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 7699391924090763411,
                            First: 388440063886460141,
                            Last: 7561811714888168464,
                            StartPercentage: 3959279844101328186,
                        },
                        Targets: []string{
                            "modi",
                            "sint",
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