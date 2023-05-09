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
    res, err := s.BatchUpdateRule(ctx, operations.BatchUpdateRuleRequest{
        RequestBody: operations.BatchUpdateRuleRequestBody{
            Rules: []shared.RuleUpdate{
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 592845,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "quibusdam",
                                    Weight: sdk.Int64(602763),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "nulla",
                                    Weight: sdk.Int64(544883),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "illum",
                                    Weight: sdk.Int64(423655),
                                },
                            },
                        },
                    },
                    Match: &shared.RuleMatch{
                        HTTPMatch: &shared.HTTPMatch{
                            HeaderMatches: []shared.HeaderMatch{
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("deserunt"),
                                        Exact: sdk.String("suscipit"),
                                        Prefix: sdk.String("iure"),
                                    },
                                    Name: "Raquel Bednar",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("suscipit"),
                                        Exact: sdk.String("molestiae"),
                                        Prefix: sdk.String("minus"),
                                    },
                                    Name: "Ken Kshlerin",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("recusandae"),
                                        Exact: sdk.String("temporibus"),
                                        Prefix: sdk.String("ab"),
                                    },
                                    Name: "Mrs. Marie O'Connell",
                                },
                            },
                            Method: sdk.String("sapiente"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("quo"),
                                    Prefix: sdk.String("odit"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(870013),
                    RuleIdentifier: "at",
                },
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 978619,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "quod",
                                    Weight: sdk.Int64(800911),
                                },
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "esse",
                                    Weight: sdk.Int64(520478),
                                },
                            },
                        },
                    },
                    Match: &shared.RuleMatch{
                        HTTPMatch: &shared.HTTPMatch{
                            HeaderMatches: []shared.HeaderMatch{
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("dolorum"),
                                        Exact: sdk.String("dicta"),
                                        Prefix: sdk.String("nam"),
                                    },
                                    Name: "Seth Conroy",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("optio"),
                                        Exact: sdk.String("totam"),
                                        Prefix: sdk.String("beatae"),
                                    },
                                    Name: "Tanya Gleason",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("cum"),
                                        Exact: sdk.String("esse"),
                                        Prefix: sdk.String("ipsum"),
                                    },
                                    Name: "Brandon Auer",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("sed"),
                                        Exact: sdk.String("iste"),
                                        Prefix: sdk.String("dolor"),
                                    },
                                    Name: "Lester Welch",
                                },
                            },
                            Method: sdk.String("in"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("corporis"),
                                    Prefix: sdk.String("iste"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(437032),
                    RuleIdentifier: "saepe",
                },
                shared.RuleUpdate{
                    Action: &shared.RuleAction{
                        FixedResponse: &shared.FixedResponseAction{
                            StatusCode: 697631,
                        },
                        Forward: &shared.ForwardAction{
                            TargetGroups: []shared.WeightedTargetGroup{
                                shared.WeightedTargetGroup{
                                    TargetGroupIdentifier: "ipsa",
                                    Weight: sdk.Int64(969810),
                                },
                            },
                        },
                    },
                    Match: &shared.RuleMatch{
                        HTTPMatch: &shared.HTTPMatch{
                            HeaderMatches: []shared.HeaderMatch{
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("mollitia"),
                                        Exact: sdk.String("laborum"),
                                        Prefix: sdk.String("dolores"),
                                    },
                                    Name: "Stacy Champlin",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("omnis"),
                                        Exact: sdk.String("nemo"),
                                        Prefix: sdk.String("minima"),
                                    },
                                    Name: "Brian Kessler",
                                },
                                shared.HeaderMatch{
                                    CaseSensitive: sdk.Bool(false),
                                    Match: shared.HeaderMatchType{
                                        Contains: sdk.String("sapiente"),
                                        Exact: sdk.String("architecto"),
                                        Prefix: sdk.String("mollitia"),
                                    },
                                    Name: "Cecilia Crooks",
                                },
                            },
                            Method: sdk.String("occaecati"),
                            PathMatch: &shared.PathMatch{
                                CaseSensitive: sdk.Bool(false),
                                Match: shared.PathMatchType{
                                    Exact: sdk.String("numquam"),
                                    Prefix: sdk.String("commodi"),
                                },
                            },
                        },
                    },
                    Priority: sdk.Int64(466311),
                    RuleIdentifier: "molestiae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
        ListenerIdentifier: "enim",
        ServiceIdentifier: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateRuleResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->