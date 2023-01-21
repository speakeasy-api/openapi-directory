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
    
    req := operations.CreateGatewayRouteRequest{
        PathParams: operations.CreateGatewayRoutePathParams{
            MeshName: "sit",
            VirtualGatewayName: "voluptas",
        },
        QueryParams: operations.CreateGatewayRouteQueryParams{
            MeshOwner: "culpa",
        },
        Headers: operations.CreateGatewayRouteHeaders{
            XAmzAlgorithm: "expedita",
            XAmzContentSha256: "consequuntur",
            XAmzCredential: "dolor",
            XAmzDate: "expedita",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "fugit",
            XAmzSignedHeaders: "et",
        },
        Request: operations.CreateGatewayRouteRequestBody{
            ClientToken: "nihil",
            GatewayRouteName: "rerum",
            Spec: operations.CreateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "DISABLED",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "debitis",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "voluptatum",
                            Suffix: "et",
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: true,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "et",
                                    Prefix: "voluptate",
                                    Range: &shared.MatchRange{
                                        End: 3287288577352441706,
                                        Start: 3930927879439176946,
                                    },
                                    Regex: "totam",
                                    Suffix: "dolores",
                                },
                                Name: "illum",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: true,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "vel",
                                    Prefix: "odio",
                                    Range: &shared.MatchRange{
                                        End: 6303220950515014660,
                                        Start: 4035568504096476779,
                                    },
                                    Regex: "aspernatur",
                                    Suffix: "accusantium",
                                },
                                Name: "totam",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "quis",
                                    Prefix: "est",
                                    Range: &shared.MatchRange{
                                        End: 5974317550424871033,
                                        Start: 3317123977833389635,
                                    },
                                    Regex: "non",
                                    Suffix: "voluptas",
                                },
                                Name: "omnis",
                            },
                        },
                        ServiceName: "aut",
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "ENABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "sed",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "autem",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "consectetur",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "qui",
                                    Prefix: "recusandae",
                                    Range: &shared.MatchRange{
                                        End: 7561811714888168464,
                                        Start: 3959279844101328186,
                                    },
                                    Regex: "eveniet",
                                    Suffix: "modi",
                                },
                                Name: "sint",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "inventore",
                            Suffix: "ut",
                        },
                        Method: "CONNECT",
                        Path: &shared.HTTPPathMatch{
                            Exact: "aut",
                            Regex: "reprehenderit",
                        },
                        Prefix: "tempore",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "incidunt",
                                },
                                Name: "dolor",
                            },
                        },
                    },
                },
                HTTPRoute: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "DISABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "veritatis",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "ENABLED",
                                Value: "et",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "omnis",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: true,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "dolores",
                                    Prefix: "placeat",
                                    Range: &shared.MatchRange{
                                        End: 2118716725206170867,
                                        Start: 2587000937929698613,
                                    },
                                    Regex: "mollitia",
                                    Suffix: "voluptas",
                                },
                                Name: "quam",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "reprehenderit",
                            Suffix: "qui",
                        },
                        Method: "OPTIONS",
                        Path: &shared.HTTPPathMatch{
                            Exact: "unde",
                            Regex: "in",
                        },
                        Prefix: "autem",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "ut",
                                },
                                Name: "itaque",
                            },
                        },
                    },
                },
                Priority: 2006924026344156168,
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "ullam",
                    Value: "et",
                },
            },
        },
    }
    
    res, err := s.CreateGatewayRoute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGatewayRouteOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->