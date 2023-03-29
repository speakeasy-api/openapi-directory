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

    req := operations.CreateGatewayRouteRequest{
        PathParams: operations.CreateGatewayRoutePathParams{
            MeshName: "unde",
            VirtualGatewayName: "deserunt",
        },
        QueryParams: operations.CreateGatewayRouteQueryParams{
            MeshOwner: "porro",
        },
        Headers: operations.CreateGatewayRouteHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
        },
        Request: operations.CreateGatewayRouteRequestBody{
            ClientToken: "facilis",
            GatewayRouteName: "eum",
            Spec: operations.CreateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "ENABLED",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 297534,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "saepe",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "inventore",
                            Suffix: "sapiente",
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "eum",
                                    Prefix: "voluptatum",
                                    Range: &shared.MatchRange{
                                        End: 791725,
                                        Start: 812169,
                                    },
                                    Regex: "non",
                                    Suffix: "deleniti",
                                },
                                Name: "similique",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "reprehenderit",
                                    Prefix: "molestiae",
                                    Range: &shared.MatchRange{
                                        End: 836079,
                                        Start: 71036,
                                    },
                                    Regex: "laboriosam",
                                    Suffix: "dicta",
                                },
                                Name: "est",
                            },
                        },
                        Port: 20218,
                        ServiceName: "consequatur",
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "DISABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "a",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "eos",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 870013,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "accusamus",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "rem",
                                    Prefix: "quibusdam",
                                    Range: &shared.MatchRange{
                                        End: 800911,
                                        Start: 461479,
                                    },
                                    Regex: "occaecati",
                                    Suffix: "dolor",
                                },
                                Name: "soluta",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "sed",
                                    Prefix: "quisquam",
                                    Range: &shared.MatchRange{
                                        End: 639921,
                                        Start: 582020,
                                    },
                                    Regex: "qui",
                                    Suffix: "sed",
                                },
                                Name: "rerum",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "possimus",
                                    Prefix: "occaecati",
                                    Range: &shared.MatchRange{
                                        End: 105907,
                                        Start: 414662,
                                    },
                                    Regex: "rem",
                                    Suffix: "voluptatem",
                                },
                                Name: "amet",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "est",
                                    Prefix: "id",
                                    Range: &shared.MatchRange{
                                        End: 456150,
                                        Start: 216550,
                                    },
                                    Regex: "similique",
                                    Suffix: "dolores",
                                },
                                Name: "sit",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "quia",
                            Suffix: "et",
                        },
                        Method: "HEAD",
                        Path: &shared.HTTPPathMatch{
                            Exact: "laborum",
                            Regex: "modi",
                        },
                        Port: 616934,
                        Prefix: "iure",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "ut",
                                },
                                Name: "soluta",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "qui",
                                },
                                Name: "ea",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "laborum",
                                },
                                Name: "iusto",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "ut",
                                },
                                Name: "optio",
                            },
                        },
                    },
                },
                HTTPRoute: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "ENABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "inventore",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "libero",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 653140,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "libero",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "non",
                                    Prefix: "ea",
                                    Range: &shared.MatchRange{
                                        End: 128926,
                                        Start: 750686,
                                    },
                                    Regex: "ipsam",
                                    Suffix: "est",
                                },
                                Name: "commodi",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "quia",
                            Suffix: "similique",
                        },
                        Method: "GET",
                        Path: &shared.HTTPPathMatch{
                            Exact: "odio",
                            Regex: "harum",
                        },
                        Port: 988374,
                        Prefix: "a",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "et",
                                },
                                Name: "non",
                            },
                        },
                    },
                },
                Priority: 635059,
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "asperiores",
                    Value: "et",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateGatewayRoute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGatewayRouteOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->