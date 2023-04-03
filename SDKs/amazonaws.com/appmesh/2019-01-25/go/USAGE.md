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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateGatewayRouteRequest{
        RequestBody: operations.CreateGatewayRouteRequestBody{
            ClientToken: "corrupti",
            GatewayRouteName: "provident",
            Spec: operations.CreateGatewayRouteRequestBodySpec{
                GrpcRoute: &shared.GrpcGatewayRoute{
                    Action: shared.GrpcGatewayRouteAction{
                        Rewrite: &shared.GrpcGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "DISABLED",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 844266,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "unde",
                            },
                        },
                    },
                    Match: shared.GrpcGatewayRouteMatch{
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "nulla",
                            Suffix: "corrupti",
                        },
                        Metadata: []shared.GrpcGatewayRouteMetadata{
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "vel",
                                    Prefix: "error",
                                    Range: &shared.MatchRange{
                                        End: 645894,
                                        Start: 384382,
                                    },
                                    Regex: "iure",
                                    Suffix: "magnam",
                                },
                                Name: "debitis",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "ipsa",
                                    Prefix: "delectus",
                                    Range: &shared.MatchRange{
                                        End: 272656,
                                        Start: 383441,
                                    },
                                    Regex: "molestiae",
                                    Suffix: "minus",
                                },
                                Name: "placeat",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "voluptatum",
                                    Prefix: "iusto",
                                    Range: &shared.MatchRange{
                                        End: 568045,
                                        Start: 392785,
                                    },
                                    Regex: "recusandae",
                                    Suffix: "temporibus",
                                },
                                Name: "ab",
                            },
                            shared.GrpcGatewayRouteMetadata{
                                Invert: false,
                                Match: &shared.GrpcMetadataMatchMethod{
                                    Exact: "quis",
                                    Prefix: "veritatis",
                                    Range: &shared.MatchRange{
                                        End: 648172,
                                        Start: 20218,
                                    },
                                    Regex: "ipsam",
                                    Suffix: "repellendus",
                                },
                                Name: "sapiente",
                            },
                        },
                        Port: 778157,
                        ServiceName: "odit",
                    },
                },
                Http2Route: &shared.HTTPGatewayRoute{
                    Action: shared.HTTPGatewayRouteAction{
                        Rewrite: &shared.HTTPGatewayRouteRewrite{
                            Hostname: &shared.GatewayRouteHostnameRewrite{
                                DefaultTargetHostname: "DISABLED",
                            },
                            Path: &shared.HTTPGatewayRoutePathRewrite{
                                Exact: "at",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "DISABLED",
                                Value: "molestiae",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 799159,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "quod",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "totam",
                                    Prefix: "porro",
                                    Range: &shared.MatchRange{
                                        End: 678880,
                                        Start: 118274,
                                    },
                                    Regex: "nam",
                                    Suffix: "officia",
                                },
                                Name: "occaecati",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "fugit",
                                    Prefix: "deleniti",
                                    Range: &shared.MatchRange{
                                        End: 944669,
                                        Start: 758616,
                                    },
                                    Regex: "totam",
                                    Suffix: "beatae",
                                },
                                Name: "commodi",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "molestiae",
                            Suffix: "modi",
                        },
                        Method: "HEAD",
                        Path: &shared.HTTPPathMatch{
                            Exact: "impedit",
                            Regex: "cum",
                        },
                        Port: 456150,
                        Prefix: "ipsum",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "aspernatur",
                                },
                                Name: "perferendis",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "ad",
                                },
                                Name: "natus",
                            },
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "sed",
                                },
                                Name: "iste",
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
                                Exact: "natus",
                            },
                            Prefix: &shared.HTTPGatewayRoutePrefixRewrite{
                                DefaultPrefix: "ENABLED",
                                Value: "hic",
                            },
                        },
                        Target: shared.GatewayRouteTarget{
                            Port: 902599,
                            VirtualService: shared.GatewayRouteVirtualService{
                                VirtualServiceName: "fuga",
                            },
                        },
                    },
                    Match: shared.HTTPGatewayRouteMatch{
                        Headers: []shared.HTTPGatewayRouteHeader{
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "corporis",
                                    Prefix: "iste",
                                    Range: &shared.MatchRange{
                                        End: 437032,
                                        Start: 902349,
                                    },
                                    Regex: "quidem",
                                    Suffix: "architecto",
                                },
                                Name: "ipsa",
                            },
                            shared.HTTPGatewayRouteHeader{
                                Invert: false,
                                Match: &shared.HeaderMatchMethod{
                                    Exact: "reiciendis",
                                    Prefix: "est",
                                    Range: &shared.MatchRange{
                                        End: 653140,
                                        Start: 670638,
                                    },
                                    Regex: "dolores",
                                    Suffix: "dolorem",
                                },
                                Name: "corporis",
                            },
                        },
                        Hostname: &shared.GatewayRouteHostnameMatch{
                            Exact: "explicabo",
                            Suffix: "nobis",
                        },
                        Method: "POST",
                        Path: &shared.HTTPPathMatch{
                            Exact: "omnis",
                            Regex: "nemo",
                        },
                        Port: 325047,
                        Prefix: "excepturi",
                        QueryParameters: []shared.HTTPQueryParameter{
                            shared.HTTPQueryParameter{
                                Match: &shared.QueryParameterMatch{
                                    Exact: "iure",
                                },
                                Name: "culpa",
                            },
                        },
                    },
                },
                Priority: 988374,
            },
            Tags: []shared.TagRef{
                shared.TagRef{
                    Key: "architecto",
                    Value: "mollitia",
                },
                shared.TagRef{
                    Key: "dolorem",
                    Value: "culpa",
                },
                shared.TagRef{
                    Key: "consequuntur",
                    Value: "repellat",
                },
                shared.TagRef{
                    Key: "mollitia",
                    Value: "occaecati",
                },
            },
        },
        XAmzAlgorithm: "numquam",
        XAmzContentSha256: "commodi",
        XAmzCredential: "quam",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "velit",
        XAmzSignature: "error",
        XAmzSignedHeaders: "quia",
        MeshName: "quis",
        MeshOwner: "vitae",
        VirtualGatewayName: "laborum",
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