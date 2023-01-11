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
                    meshName = "omnis";
                    virtualGatewayName = "corporis";
                }};
                queryParams = new CreateGatewayRouteQueryParams() {{
                    meshOwner = "quasi";
                }};
                headers = new CreateGatewayRouteHeaders() {{
                    xAmzAlgorithm = "necessitatibus";
                    xAmzContentSha256 = "sit";
                    xAmzCredential = "minus";
                    xAmzDate = "sequi";
                    xAmzSecurityToken = "qui";
                    xAmzSignature = "quidem";
                    xAmzSignedHeaders = "iure";
                }};
                request = new CreateGatewayRouteRequestBody() {{
                    clientToken = "consequatur";
                    gatewayRouteName = "occaecati";
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
                                        virtualServiceName = "repudiandae";
                                    }};
                                }};
                            }};
                            match = new GrpcGatewayRouteMatch() {{
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "voluptas";
                                    suffix = "eligendi";
                                }};
                                metadata = new openapisdk.models.shared.GrpcGatewayRouteMetadata[]() {{
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "similique";
                                            prefix = "ad";
                                            range = new MatchRange() {{
                                                end = 4146470584718599470;
                                                start = 4854007963037812637;
                                            }};
                                            regex = "molestiae";
                                            suffix = "numquam";
                                        }};
                                        name = "aut";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = true;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "dolores";
                                            prefix = "et";
                                            range = new MatchRange() {{
                                                end = 1596246021614689099;
                                                start = 5903985231896006729;
                                            }};
                                            regex = "est";
                                            suffix = "neque";
                                        }};
                                        name = "explicabo";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = true;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "eius";
                                            prefix = "voluptatum";
                                            range = new MatchRange() {{
                                                end = 8758844135914746124;
                                                start = 285149591117881545;
                                            }};
                                            regex = "aut";
                                            suffix = "tempore";
                                        }};
                                        name = "debitis";
                                    }}),
                                }};
                                serviceName = "delectus";
                            }};
                        }};
                        http2Route = new HttpGatewayRoute() {{
                            action = new HttpGatewayRouteAction() {{
                                rewrite = new HttpGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "ENABLED";
                                    }};
                                    path = new HttpGatewayRoutePathRewrite() {{
                                        exact = "officiis";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "DISABLED";
                                        value = "quae";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "repellat";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new openapisdk.models.shared.HttpGatewayRouteHeader[]() {{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "magni";
                                            prefix = "voluptas";
                                            range = new MatchRange() {{
                                                end = 2177477502781941350;
                                                start = 2063521942541683052;
                                            }};
                                            regex = "nostrum";
                                            suffix = "et";
                                        }};
                                        name = "nemo";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = true;
                                        match = new HeaderMatchMethod() {{
                                            exact = "nostrum";
                                            prefix = "illum";
                                            range = new MatchRange() {{
                                                end = 5846570952474056546;
                                                start = 6317657026515785697;
                                            }};
                                            regex = "minus";
                                            suffix = "facilis";
                                        }};
                                        name = "facilis";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "officia";
                                    suffix = "vel";
                                }};
                                method = "PATCH";
                                path = new HttpPathMatch() {{
                                    exact = "saepe";
                                    regex = "ut";
                                }};
                                prefix = "ut";
                                queryParameters = new openapisdk.models.shared.HttpQueryParameter[]() {{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "dolor";
                                        }};
                                        name = "nemo";
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
                                        exact = "reiciendis";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "DISABLED";
                                        value = "voluptatem";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "velit";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new openapisdk.models.shared.HttpGatewayRouteHeader[]() {{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "dignissimos";
                                            prefix = "hic";
                                            range = new MatchRange() {{
                                                end = 8379567376222127698;
                                                start = 3081965838106123659;
                                            }};
                                            regex = "et";
                                            suffix = "quia";
                                        }};
                                        name = "qui";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "sint";
                                            prefix = "aperiam";
                                            range = new MatchRange() {{
                                                end = 7771700788967088893;
                                                start = 5927009572858680208;
                                            }};
                                            regex = "qui";
                                            suffix = "ea";
                                        }};
                                        name = "mollitia";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = true;
                                        match = new HeaderMatchMethod() {{
                                            exact = "reiciendis";
                                            prefix = "velit";
                                            range = new MatchRange() {{
                                                end = 8320974728239741942;
                                                start = 6004008708656253743;
                                            }};
                                            regex = "sequi";
                                            suffix = "ut";
                                        }};
                                        name = "aperiam";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "vel";
                                    suffix = "reprehenderit";
                                }};
                                method = "PUT";
                                path = new HttpPathMatch() {{
                                    exact = "tenetur";
                                    regex = "fugiat";
                                }};
                                prefix = "fuga";
                                queryParameters = new openapisdk.models.shared.HttpQueryParameter[]() {{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "enim";
                                        }};
                                        name = "animi";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "ut";
                                        }};
                                        name = "sit";
                                    }}),
                                }};
                            }};
                        }};
                        priority = 8888763846808868349;
                    }};
                    tags = new openapisdk.models.shared.TagRef[]() {{
                        add(new TagRef() {{
                            key = "est";
                            value = "id";
                        }}),
                        add(new TagRef() {{
                            key = "ea";
                            value = "omnis";
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