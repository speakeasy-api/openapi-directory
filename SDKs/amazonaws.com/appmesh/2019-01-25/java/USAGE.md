<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateGatewayRoutePathParams;
import org.openapis.openapi.models.operations.CreateGatewayRouteQueryParams;
import org.openapis.openapi.models.operations.CreateGatewayRouteHeaders;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequestBodySpec;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequestBody;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequest;
import org.openapis.openapi.models.operations.CreateGatewayRouteResponse;
import org.openapis.openapi.models.shared.TagRef;
import org.openapis.openapi.models.shared.HttpGatewayRoute;
import org.openapis.openapi.models.shared.HttpGatewayRouteMatch;
import org.openapis.openapi.models.shared.HttpQueryParameter;
import org.openapis.openapi.models.shared.QueryParameterMatch;
import org.openapis.openapi.models.shared.HttpPathMatch;
import org.openapis.openapi.models.shared.HttpMethodEnum;
import org.openapis.openapi.models.shared.GatewayRouteHostnameMatch;
import org.openapis.openapi.models.shared.HttpGatewayRouteHeader;
import org.openapis.openapi.models.shared.HeaderMatchMethod;
import org.openapis.openapi.models.shared.MatchRange;
import org.openapis.openapi.models.shared.HttpGatewayRouteAction;
import org.openapis.openapi.models.shared.GatewayRouteTarget;
import org.openapis.openapi.models.shared.GatewayRouteVirtualService;
import org.openapis.openapi.models.shared.HttpGatewayRouteRewrite;
import org.openapis.openapi.models.shared.HttpGatewayRoutePrefixRewrite;
import org.openapis.openapi.models.shared.DefaultGatewayRouteRewriteEnum;
import org.openapis.openapi.models.shared.HttpGatewayRoutePathRewrite;
import org.openapis.openapi.models.shared.GatewayRouteHostnameRewrite;
import org.openapis.openapi.models.shared.GrpcGatewayRoute;
import org.openapis.openapi.models.shared.GrpcGatewayRouteMatch;
import org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata;
import org.openapis.openapi.models.shared.GrpcMetadataMatchMethod;
import org.openapis.openapi.models.shared.GrpcGatewayRouteAction;
import org.openapis.openapi.models.shared.GrpcGatewayRouteRewrite;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateGatewayRouteRequest req = new CreateGatewayRouteRequest() {{
                pathParams = new CreateGatewayRoutePathParams() {{
                    meshName = "corrupti";
                    virtualGatewayName = "provident";
                }};
                queryParams = new CreateGatewayRouteQueryParams() {{
                    meshOwner = "distinctio";
                }};
                headers = new CreateGatewayRouteHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                }};
                request = new CreateGatewayRouteRequestBody() {{
                    clientToken = "deserunt";
                    gatewayRouteName = "suscipit";
                    spec = new CreateGatewayRouteRequestBodySpec() {{
                        grpcRoute = new GrpcGatewayRoute() {{
                            action = new GrpcGatewayRouteAction() {{
                                rewrite = new GrpcGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "ENABLED";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 297534;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "debitis";
                                    }};
                                }};
                            }};
                            match = new GrpcGatewayRouteMatch() {{
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "ipsa";
                                    suffix = "delectus";
                                }};
                                metadata = new org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata[]{{
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "suscipit";
                                            prefix = "molestiae";
                                            range = new MatchRange() {{
                                                end = 791725;
                                                start = 812169;
                                            }};
                                            regex = "voluptatum";
                                            suffix = "iusto";
                                        }};
                                        name = "excepturi";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "nisi";
                                            prefix = "recusandae";
                                            range = new MatchRange() {{
                                                end = 836079;
                                                start = 71036;
                                            }};
                                            regex = "quis";
                                            suffix = "veritatis";
                                        }};
                                        name = "deserunt";
                                    }}),
                                }};
                                port = 20218;
                                serviceName = "ipsam";
                            }};
                        }};
                        http2Route = new HttpGatewayRoute() {{
                            action = new HttpGatewayRouteAction() {{
                                rewrite = new HttpGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "DISABLED";
                                    }};
                                    path = new HttpGatewayRoutePathRewrite() {{
                                        exact = "sapiente";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "DISABLED";
                                        value = "odit";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 870013;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "at";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "molestiae";
                                            prefix = "quod";
                                            range = new MatchRange() {{
                                                end = 800911;
                                                start = 461479;
                                            }};
                                            regex = "totam";
                                            suffix = "porro";
                                        }};
                                        name = "dolorum";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "dicta";
                                            prefix = "nam";
                                            range = new MatchRange() {{
                                                end = 639921;
                                                start = 582020;
                                            }};
                                            regex = "fugit";
                                            suffix = "deleniti";
                                        }};
                                        name = "hic";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "optio";
                                            prefix = "totam";
                                            range = new MatchRange() {{
                                                end = 105907;
                                                start = 414662;
                                            }};
                                            regex = "molestiae";
                                            suffix = "modi";
                                        }};
                                        name = "qui";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "impedit";
                                            prefix = "cum";
                                            range = new MatchRange() {{
                                                end = 456150;
                                                start = 216550;
                                            }};
                                            regex = "excepturi";
                                            suffix = "aspernatur";
                                        }};
                                        name = "perferendis";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "ad";
                                    suffix = "natus";
                                }};
                                method = "HEAD";
                                path = new HttpPathMatch() {{
                                    exact = "iste";
                                    regex = "dolor";
                                }};
                                port = 616934;
                                prefix = "laboriosam";
                                queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "saepe";
                                        }};
                                        name = "fuga";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "in";
                                        }};
                                        name = "corporis";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "iste";
                                        }};
                                        name = "iure";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "saepe";
                                        }};
                                        name = "quidem";
                                    }}),
                                }};
                            }};
                        }};
                        httpRoute = new HttpGatewayRoute() {{
                            action = new HttpGatewayRouteAction() {{
                                rewrite = new HttpGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "ENABLED";
                                    }};
                                    path = new HttpGatewayRoutePathRewrite() {{
                                        exact = "ipsa";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "DISABLED";
                                        value = "est";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 653140;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "laborum";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "dolorem";
                                            prefix = "corporis";
                                            range = new MatchRange() {{
                                                end = 128926;
                                                start = 750686;
                                            }};
                                            regex = "enim";
                                            suffix = "omnis";
                                        }};
                                        name = "nemo";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "minima";
                                    suffix = "excepturi";
                                }};
                                method = "GET";
                                path = new HttpPathMatch() {{
                                    exact = "iure";
                                    regex = "culpa";
                                }};
                                port = 988374;
                                prefix = "sapiente";
                                queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "mollitia";
                                        }};
                                        name = "dolorem";
                                    }}),
                                }};
                            }};
                        }};
                        priority = 635059;
                    }};
                    tags = new org.openapis.openapi.models.shared.TagRef[]{{
                        add(new TagRef() {{
                            key = "repellat";
                            value = "mollitia";
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