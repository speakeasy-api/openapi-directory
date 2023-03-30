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
            MeshName: "corrupti",
            VirtualGatewayName: "provident",
        },
        QueryParams: operations.CreateGatewayRouteQueryParams{
            MeshOwner: "distinctio",
        },
        Headers: operations.CreateGatewayRouteHeaders{
            XAmzAlgorithm: "quibusdam",
            XAmzContentSha256: "unde",
            XAmzCredential: "nulla",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "illum",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "error",
        },
        Request: operations.CreateGatewayRouteRequestBody{
            ClientToken: "deserunt",
            GatewayRouteName: "suscipit",
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
                                VirtualServiceName: "debitis",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "ipsa",
                            Suffix: "delectus",
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "suscipit",
                                    Prefix: "molestiae",
                                    Range: &shared.MatchRange{
                                        End: 791725,
                                        Start: 812169,
                                    },
                                    Regex: "voluptatum",
                                    Suffix: "iusto",
                                },
                                Name: "excepturi",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "nisi",
                                    Prefix: "recusandae",
                                    Range: &shared.MatchRange{
                                        End: 836079,
                                        Start: 71036,
                                    },
                                    Regex: "quis",
                                    Suffix: "veritatis",
                                },
                                Name: "deserunt",
                            },
                        },
                        Port: 20218,
                        ServiceName: "ipsam",
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "DISABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "sapiente",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "odit",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 870013,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "at",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "molestiae",
                                    Prefix: "quod",
                                    Range: &shared.MatchRange{
                                        End: 800911,
                                        Start: 461479,
                                    },
                                    Regex: "totam",
                                    Suffix: "porro",
                                },
                                Name: "dolorum",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "dicta",
                                    Prefix: "nam",
                                    Range: &shared.MatchRange{
                                        End: 639921,
                                        Start: 582020,
                                    },
                                    Regex: "fugit",
                                    Suffix: "deleniti",
                                },
                                Name: "hic",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "optio",
                                    Prefix: "totam",
                                    Range: &shared.MatchRange{
                                        End: 105907,
                                        Start: 414662,
                                    },
                                    Regex: "molestiae",
                                    Suffix: "modi",
                                },
                                Name: "qui",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "impedit",
                                    Prefix: "cum",
                                    Range: &shared.MatchRange{
                                        End: 456150,
                                        Start: 216550,
                                    },
                                    Regex: "excepturi",
                                    Suffix: "aspernatur",
                                },
                                Name: "perferendis",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "ad",
                            Suffix: "natus",
                        },
                        Method: "HEAD",
                        Path: &shared.HTTPPathMatch{
                            Exact: "iste",
                            Regex: "dolor",
                        },
                        Port: 616934,
                        Prefix: "laboriosam",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "saepe",
                                },
                                Name: "fuga",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "in",
                                },
                                Name: "corporis",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "iste",
                                },
                                Name: "iure",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "saepe",
                                },
                                Name: "quidem",
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
                                Exact: "ipsa",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "est",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 653140,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "laborum",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "dolorem",
                                    Prefix: "corporis",
                                    Range: &shared.MatchRange{
                                        End: 128926,
                                        Start: 750686,
                                    },
                                    Regex: "enim",
                                    Suffix: "omnis",
                                },
                                Name: "nemo",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "minima",
                            Suffix: "excepturi",
                        },
                        Method: "GET",
                        Path: &shared.HTTPPathMatch{
                            Exact: "iure",
                            Regex: "culpa",
                        },
                        Port: 988374,
                        Prefix: "sapiente",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "mollitia",
                                },
                                Name: "dolorem",
                            },
                        },
                    },
                },
                Priority: 635059,
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "repellat",
                    Value: "mollitia",
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