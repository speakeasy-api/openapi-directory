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
            MeshName: "omnis",
            VirtualGatewayName: "corporis",
        },
        QueryParams: operations.CreateGatewayRouteQueryParams{
            MeshOwner: "quasi",
        },
        Headers: operations.CreateGatewayRouteHeaders{
            XAmzAlgorithm: "necessitatibus",
            XAmzContentSha256: "sit",
            XAmzCredential: "minus",
            XAmzDate: "sequi",
            XAmzSecurityToken: "qui",
            XAmzSignature: "quidem",
            XAmzSignedHeaders: "iure",
        },
        Request: operations.CreateGatewayRouteRequestBody{
            ClientToken: "consequatur",
            GatewayRouteName: "occaecati",
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
                                VirtualServiceName: "repudiandae",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "voluptas",
                            Suffix: "eligendi",
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "similique",
                                    Prefix: "ad",
                                    Range: &shared.MatchRange{
                                        End: 4146470584718599470,
                                        Start: 4854007963037812637,
                                    },
                                    Regex: "molestiae",
                                    Suffix: "numquam",
                                },
                                Name: "aut",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: true,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "dolores",
                                    Prefix: "et",
                                    Range: &shared.MatchRange{
                                        End: 1596246021614689099,
                                        Start: 5903985231896006729,
                                    },
                                    Regex: "est",
                                    Suffix: "neque",
                                },
                                Name: "explicabo",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: true,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "eius",
                                    Prefix: "voluptatum",
                                    Range: &shared.MatchRange{
                                        End: 8758844135914746124,
                                        Start: 285149591117881545,
                                    },
                                    Regex: "aut",
                                    Suffix: "tempore",
                                },
                                Name: "debitis",
                            },
                        },
                        ServiceName: "delectus",
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "ENABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "officiis",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "quae",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "repellat",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "magni",
                                    Prefix: "voluptas",
                                    Range: &shared.MatchRange{
                                        End: 2177477502781941350,
                                        Start: 2063521942541683052,
                                    },
                                    Regex: "nostrum",
                                    Suffix: "et",
                                },
                                Name: "nemo",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: true,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "nostrum",
                                    Prefix: "illum",
                                    Range: &shared.MatchRange{
                                        End: 5846570952474056546,
                                        Start: 6317657026515785697,
                                    },
                                    Regex: "minus",
                                    Suffix: "facilis",
                                },
                                Name: "facilis",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "officia",
                            Suffix: "vel",
                        },
                        Method: "PATCH",
                        Path: &shared.HTTPPathMatch{
                            Exact: "saepe",
                            Regex: "ut",
                        },
                        Prefix: "ut",
                        QueryParameters: []shared.HTTPQueryParameter{
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