<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateGatewayRouteRequest req = new CreateGatewayRouteRequest() {{
                pathParams = new CreateGatewayRoutePathParams() {{
                    meshName = "sit";
                    virtualGatewayName = "voluptas";
                }};
                queryParams = new CreateGatewayRouteQueryParams() {{
                    meshOwner = "culpa";
                }};
                headers = new CreateGatewayRouteHeaders() {{
                    xAmzAlgorithm = "expedita";
                    xAmzContentSha256 = "consequuntur";
                    xAmzCredential = "dolor";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "fugit";
                    xAmzSignedHeaders = "et";
                }};
                request = new CreateGatewayRouteRequestBody() {{
                    clientToken = "nihil";
                    gatewayRouteName = "rerum";
                    spec = new CreateGatewayRouteRequestBodySpec() {{
                        grpcRoute = new GrpcGatewayRoute() {{
                            action = new GrpcGatewayRouteAction() {{
                                rewrite = new GrpcGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "DISABLED";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "debitis";
                                    }};
                                }};
                            }};
                            match = new GrpcGatewayRouteMatch() {{
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "voluptatum";
                                    suffix = "et";
                                }};
                                metadata = new openapisdk.models.shared.GrpcGatewayRouteMetadata[]() {{
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = true;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "et";
                                            prefix = "voluptate";
                                            range = new MatchRange() {{
                                                end = 3287288577352441706;
                                                start = 3930927879439176946;
                                            }};
                                            regex = "totam";
                                            suffix = "dolores";
                                        }};
                                        name = "illum";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = true;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "vel";
                                            prefix = "odio";
                                            range = new MatchRange() {{
                                                end = 6303220950515014660;
                                                start = 4035568504096476779;
                                            }};
                                            regex = "aspernatur";
                                            suffix = "accusantium";
                                        }};
                                        name = "totam";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "quis";
                                            prefix = "est";
                                            range = new MatchRange() {{
                                                end = 5974317550424871033;
                                                start = 3317123977833389635;
                                            }};
                                            regex = "non";
                                            suffix = "voluptas";
                                        }};
                                        name = "omnis";
                                    }}),
                                }};
                                serviceName = "aut";
                            }};
                        }};
                        http2Route = new HttpGatewayRoute() {{
                            action = new HttpGatewayRouteAction() {{
                                rewrite = new HttpGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "ENABLED";
                                    }};
                                    path = new HttpGatewayRoutePathRewrite() {{
                                        exact = "sed";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "DISABLED";
                                        value = "autem";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "consectetur";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new openapisdk.models.shared.HttpGatewayRouteHeader[]() {{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "qui";
                                            prefix = "recusandae";
                                            range = new MatchRange() {{
                                                end = 7561811714888168464;
                                                start = 3959279844101328186;
                                            }};
                                            regex = "eveniet";
                                            suffix = "modi";
                                        }};
                                        name = "sint";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "inventore";
                                    suffix = "ut";
                                }};
                                method = "CONNECT";
                                path = new HttpPathMatch() {{
                                    exact = "aut";
                                    regex = "reprehenderit";
                                }};
                                prefix = "tempore";
                                queryParameters = new openapisdk.models.shared.HttpQueryParameter[]() {{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "incidunt";
                                        }};
                                        name = "dolor";
                                    }}),
                                }};
                            }};
                        }};
                        httpRoute = new HttpGatewayRoute() {{
                            action = new HttpGatewayRouteAction() {{
                                rewrite = new HttpGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "DISABLED";
                                    }};
                                    path = new HttpGatewayRoutePathRewrite() {{
                                        exact = "veritatis";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "ENABLED";
                                        value = "et";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "omnis";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new openapisdk.models.shared.HttpGatewayRouteHeader[]() {{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = true;
                                        match = new HeaderMatchMethod() {{
                                            exact = "dolores";
                                            prefix = "placeat";
                                            range = new MatchRange() {{
                                                end = 2118716725206170867;
                                                start = 2587000937929698613;
                                            }};
                                            regex = "mollitia";
                                            suffix = "voluptas";
                                        }};
                                        name = "quam";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "reprehenderit";
                                    suffix = "qui";
                                }};
                                method = "OPTIONS";
                                path = new HttpPathMatch() {{
                                    exact = "unde";
                                    regex = "in";
                                }};
                                prefix = "autem";
                                queryParameters = new openapisdk.models.shared.HttpQueryParameter[]() {{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "ut";
                                        }};
                                        name = "itaque";
                                    }}),
                                }};
                            }};
                        }};
                        priority = 2006924026344156168;
                    }};
                    tags = new openapisdk.models.shared.TagRef[]() {{
                        add(new TagRef() {{
                            key = "ullam";
                            value = "et";
                        }}),
                    }};
                }};
            }};

            CreateGatewayRouteResponse res = sdk.createGatewayRoute(req);

            if (res.createGatewayRouteOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->