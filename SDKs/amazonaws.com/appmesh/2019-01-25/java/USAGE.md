<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGatewayRouteRequest req = new CreateGatewayRouteRequest() {{
                requestBody = new CreateGatewayRouteRequestBody() {{
                    clientToken = "corrupti";
                    gatewayRouteName = "provident";
                    spec = new CreateGatewayRouteRequestBodySpec() {{
                        grpcRoute = new GrpcGatewayRoute() {{
                            action = new GrpcGatewayRouteAction() {{
                                rewrite = new GrpcGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "DISABLED";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 844266;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "unde";
                                    }};
                                }};
                            }};
                            match = new GrpcGatewayRouteMatch() {{
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "nulla";
                                    suffix = "corrupti";
                                }};
                                metadata = new org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata[]{{
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "vel";
                                            prefix = "error";
                                            range = new MatchRange() {{
                                                end = 645894;
                                                start = 384382;
                                            }};
                                            regex = "iure";
                                            suffix = "magnam";
                                        }};
                                        name = "debitis";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "ipsa";
                                            prefix = "delectus";
                                            range = new MatchRange() {{
                                                end = 272656;
                                                start = 383441;
                                            }};
                                            regex = "molestiae";
                                            suffix = "minus";
                                        }};
                                        name = "placeat";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "voluptatum";
                                            prefix = "iusto";
                                            range = new MatchRange() {{
                                                end = 568045;
                                                start = 392785;
                                            }};
                                            regex = "recusandae";
                                            suffix = "temporibus";
                                        }};
                                        name = "ab";
                                    }}),
                                    add(new GrpcGatewayRouteMetadata() {{
                                        invert = false;
                                        match = new GrpcMetadataMatchMethod() {{
                                            exact = "quis";
                                            prefix = "veritatis";
                                            range = new MatchRange() {{
                                                end = 648172;
                                                start = 20218;
                                            }};
                                            regex = "ipsam";
                                            suffix = "repellendus";
                                        }};
                                        name = "sapiente";
                                    }}),
                                }};
                                port = 778157;
                                serviceName = "odit";
                            }};
                        }};
                        http2Route = new HttpGatewayRoute() {{
                            action = new HttpGatewayRouteAction() {{
                                rewrite = new HttpGatewayRouteRewrite() {{
                                    hostname = new GatewayRouteHostnameRewrite() {{
                                        defaultTargetHostname = "DISABLED";
                                    }};
                                    path = new HttpGatewayRoutePathRewrite() {{
                                        exact = "at";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "DISABLED";
                                        value = "molestiae";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 799159;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "quod";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "totam";
                                            prefix = "porro";
                                            range = new MatchRange() {{
                                                end = 678880;
                                                start = 118274;
                                            }};
                                            regex = "nam";
                                            suffix = "officia";
                                        }};
                                        name = "occaecati";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "fugit";
                                            prefix = "deleniti";
                                            range = new MatchRange() {{
                                                end = 944669;
                                                start = 758616;
                                            }};
                                            regex = "totam";
                                            suffix = "beatae";
                                        }};
                                        name = "commodi";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "molestiae";
                                    suffix = "modi";
                                }};
                                method = "HEAD";
                                path = new HttpPathMatch() {{
                                    exact = "impedit";
                                    regex = "cum";
                                }};
                                port = 456150;
                                prefix = "ipsum";
                                queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "aspernatur";
                                        }};
                                        name = "perferendis";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "ad";
                                        }};
                                        name = "natus";
                                    }}),
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "sed";
                                        }};
                                        name = "iste";
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
                                        exact = "natus";
                                    }};
                                    prefix = new HttpGatewayRoutePrefixRewrite() {{
                                        defaultPrefix = "ENABLED";
                                        value = "hic";
                                    }};
                                }};
                                target = new GatewayRouteTarget() {{
                                    port = 902599;
                                    virtualService = new GatewayRouteVirtualService() {{
                                        virtualServiceName = "fuga";
                                    }};
                                }};
                            }};
                            match = new HttpGatewayRouteMatch() {{
                                headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "corporis";
                                            prefix = "iste";
                                            range = new MatchRange() {{
                                                end = 437032;
                                                start = 902349;
                                            }};
                                            regex = "quidem";
                                            suffix = "architecto";
                                        }};
                                        name = "ipsa";
                                    }}),
                                    add(new HttpGatewayRouteHeader() {{
                                        invert = false;
                                        match = new HeaderMatchMethod() {{
                                            exact = "reiciendis";
                                            prefix = "est";
                                            range = new MatchRange() {{
                                                end = 653140;
                                                start = 670638;
                                            }};
                                            regex = "dolores";
                                            suffix = "dolorem";
                                        }};
                                        name = "corporis";
                                    }}),
                                }};
                                hostname = new GatewayRouteHostnameMatch() {{
                                    exact = "explicabo";
                                    suffix = "nobis";
                                }};
                                method = "POST";
                                path = new HttpPathMatch() {{
                                    exact = "omnis";
                                    regex = "nemo";
                                }};
                                port = 325047;
                                prefix = "excepturi";
                                queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                    add(new HttpQueryParameter() {{
                                        match = new QueryParameterMatch() {{
                                            exact = "iure";
                                        }};
                                        name = "culpa";
                                    }}),
                                }};
                            }};
                        }};
                        priority = 988374;
                    }};
                    tags = new org.openapis.openapi.models.shared.TagRef[]{{
                        add(new TagRef() {{
                            key = "architecto";
                            value = "mollitia";
                        }}),
                        add(new TagRef() {{
                            key = "dolorem";
                            value = "culpa";
                        }}),
                        add(new TagRef() {{
                            key = "consequuntur";
                            value = "repellat";
                        }}),
                        add(new TagRef() {{
                            key = "mollitia";
                            value = "occaecati";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
                meshName = "quis";
                meshOwner = "vitae";
                virtualGatewayName = "laborum";
            }}            

            CreateGatewayRouteResponse res = sdk.createGatewayRoute(req);

            if (res.createGatewayRouteOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->