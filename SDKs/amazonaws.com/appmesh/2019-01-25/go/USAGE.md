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
    res, err := s.CreateGatewayRoute(ctx, operations.CreateGatewayRouteRequest{
        RequestBody: operations.CreateGatewayRouteRequestBody{
            ClientToken: sdk.String("corrupti"),
            GatewayRouteName: "provident",
            Spec: operations.CreateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(844266),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "unde",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("nulla"),
                            Suffix: sdk.String("corrupti"),
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("vel"),
                                    Prefix: sdk.String("error"),
                                    Range: &shared.MatchRange{
                                        End: 645894,
                                        Start: 384382,
                                    },
                                    Regex: sdk.String("iure"),
                                    Suffix: sdk.String("magnam"),
                                },
                                Name: "Larry Windler",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("molestiae"),
                                    Prefix: sdk.String("minus"),
                                    Range: &shared.MatchRange{
                                        End: 812169,
                                        Start: 528895,
                                    },
                                    Regex: sdk.String("iusto"),
                                    Suffix: sdk.String("excepturi"),
                                },
                                Name: "Mrs. Sophie Smith MD",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("perferendis"),
                                    Prefix: sdk.String("ipsam"),
                                    Range: &shared.MatchRange{
                                        End: 832620,
                                        Start: 957156,
                                    },
                                    Regex: sdk.String("quo"),
                                    Suffix: sdk.String("odit"),
                                },
                                Name: "Wilfred Wolff",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: sdk.Bool(false),
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: sdk.String("quod"),
                                    Prefix: sdk.String("esse"),
                                    Range: &shared.MatchRange{
                                        End: 520478,
                                        Start: 780529,
                                    },
                                    Regex: sdk.String("dolorum"),
                                    Suffix: sdk.String("dicta"),
                                },
                                Name: "Luke McCullough",
                            },
                        },
                        Port: sdk.Int64(944669),
                        ServiceName: sdk.String("optio"),
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumDisabled.ToPointer(),
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: sdk.String("beatae"),
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                                Value: sdk.String("molestiae"),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(264555),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "qui",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("cum"),
                                    Prefix: sdk.String("esse"),
                                    Range: &shared.MatchRange{
                                        End: 216550,
                                        Start: 568434,
                                    },
                                    Regex: sdk.String("aspernatur"),
                                    Suffix: sdk.String("perferendis"),
                                },
                                Name: "Faye Cormier",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("natus"),
                                    Prefix: sdk.String("laboriosam"),
                                    Range: &shared.MatchRange{
                                        End: 943749,
                                        Start: 902599,
                                    },
                                    Regex: sdk.String("fuga"),
                                    Suffix: sdk.String("in"),
                                },
                                Name: "Sheryl Kertzmann",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("architecto"),
                                    Prefix: sdk.String("ipsa"),
                                    Range: &shared.MatchRange{
                                        End: 969810,
                                        Start: 666767,
                                    },
                                    Regex: sdk.String("mollitia"),
                                    Suffix: sdk.String("laborum"),
                                },
                                Name: "Connie Herzog",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("enim"),
                                    Prefix: sdk.String("omnis"),
                                    Range: &shared.MatchRange{
                                        End: 363711,
                                        Start: 325047,
                                    },
                                    Regex: sdk.String("excepturi"),
                                    Suffix: sdk.String("accusantium"),
                                },
                                Name: "Cecilia Yundt MD",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("dolorem"),
                            Suffix: sdk.String("culpa"),
                        },
                        Method: shared.HTTPMethodEnumHead.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("repellat"),
                            Regex: sdk.String("mollitia"),
                        },
                        Port: sdk.Int64(581850),
                        Prefix: sdk.String("numquam"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("quam"),
                                },
                                Name: "Shannon Mueller",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("vitae"),
                                },
                                Name: "Matt Hamill",
                            },
                        },
                    },
                },
                HTTPRoute: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: sdk.String("tenetur"),
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: shared.DefaultGatewayRouteRewriteEnumEnabled.ToPointer(),
                                Value: sdk.String("id"),
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: sdk.Int64(820994),
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "aut",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: sdk.Bool(false),
                                Match: &shared.HeaderMatchMethod{
                                    Exact: sdk.String("error"),
                                    Prefix: sdk.String("temporibus"),
                                    Range: &shared.MatchRange{
                                        End: 673660,
                                        Start: 96098,
                                    },
                                    Regex: sdk.String("reiciendis"),
                                    Suffix: sdk.String("voluptatibus"),
                                },
                                Name: "Jessie Langosh V",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: sdk.String("voluptate"),
                            Suffix: sdk.String("cum"),
                        },
                        Method: shared.HTTPMethodEnumGet.ToPointer(),
                        Path: &shared.HTTPPathMatch{
                            Exact: sdk.String("doloremque"),
                            Regex: sdk.String("reprehenderit"),
                        },
                        Port: sdk.Int64(282807),
                        Prefix: sdk.String("maiores"),
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: sdk.String("corporis"),
                                },
                                Name: "Heidi Carter",
                            },
                        },
                    },
                },
                Priority: sdk.Int64(880476),
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "repudiandae",
                    Value: "quae",
                },
                shared.TagRef{
                    Key: "ipsum",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        MeshName: "quasi",
        MeshOwner: sdk.String("repudiandae"),
        VirtualGatewayName: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGatewayRouteOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->