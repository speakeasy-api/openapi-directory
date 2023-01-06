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
            MeshName: "aut",
            VirtualGatewayName: "repudiandae",
        },
        QueryParams: operations.CreateGatewayRouteQueryParams{
            MeshOwner: "voluptas",
        },
        Headers: operations.CreateGatewayRouteHeaders{
            XAmzAlgorithm: "eligendi",
            XAmzContentSha256: "veniam",
            XAmzCredential: "dolorem",
            XAmzDate: "similique",
            XAmzSecurityToken: "ad",
            XAmzSignature: "ullam",
            XAmzSignedHeaders: "dolor",
        },
        Request: operations.CreateGatewayRouteRequestBody{
            ClientToken: "molestiae",
            GatewayRouteName: "numquam",
            Spec: operations.CreateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "ENABLED",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "consequatur",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "dolores",
                            Suffix: "et",
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: true,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "est",
                                    Prefix: "neque",
                                    Range: &shared.MatchRange{
                                        End: 580104165684934573,
                                        Start: 7373765891373584151,
                                    },
                                    Regex: "eius",
                                    Suffix: "voluptatum",
                                },
                                Name: "rerum",
                            },
                        },
                        ServiceName: "voluptas",
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "ENABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "tempore",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "delectus",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "mollitia",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "quae",
                                    Prefix: "repellat",
                                    Range: &shared.MatchRange{
                                        End: 1379718715816540355,
                                        Start: 3240937335941730803,
                                    },
                                    Regex: "magni",
                                    Suffix: "voluptas",
                                },
                                Name: "odio",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "nostrum",
                                    Prefix: "et",
                                    Range: &shared.MatchRange{
                                        End: 7051896623926270928,
                                        Start: 4398689318643636665,
                                    },
                                    Regex: "nostrum",
                                    Suffix: "illum",
                                },
                                Name: "aut",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "quo",
                            Suffix: "minus",
                        },
                        Method: "TRACE",
                        Path: &shared.HTTPPathMatch{
                            Exact: "facilis",
                            Regex: "officia",
                        },
                        Prefix: "vel",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "saepe",
                                },
                                Name: "ut",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "ut",
                                },
                                Name: "distinctio",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "dolor",
                                },
                                Name: "nemo",
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
                                Exact: "reiciendis",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "voluptatem",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "velit",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "dignissimos",
                                    Prefix: "hic",
                                    Range: &shared.MatchRange{
                                        End: 8379567376222127698,
                                        Start: 3081965838106123659,
                                    },
                                    Regex: "et",
                                    Suffix: "quia",
                                },
                                Name: "qui",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "sint",
                                    Prefix: "aperiam",
                                    Range: &shared.MatchRange{
                                        End: 7771700788967088893,
                                        Start: 5927009572858680208,
                                    },
                                    Regex: "qui",
                                    Suffix: "ea",
                                },
                                Name: "mollitia",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: true,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "reiciendis",
                                    Prefix: "velit",
                                    Range: &shared.MatchRange{
                                        End: 8320974728239741942,
                                        Start: 6004008708656253743,
                                    },
                                    Regex: "sequi",
                                    Suffix: "ut",
                                },
                                Name: "aperiam",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "vel",
                            Suffix: "reprehenderit",
                        },
                        Method: "PUT",
                        Path: &shared.HTTPPathMatch{
                            Exact: "tenetur",
                            Regex: "fugiat",
                        },
                        Prefix: "fuga",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "enim",
                                },
                                Name: "animi",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "ut",
                                },
                                Name: "sit",
                            },
                        },
                    },
                },
                Priority: 8888763846808868349,
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "est",
                    Value: "id",
                },
                shared.TagRef{
                    Key: "ea",
                    Value: "omnis",
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