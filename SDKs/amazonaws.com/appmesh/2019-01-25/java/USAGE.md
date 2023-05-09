<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequest;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequestBody;
import org.openapis.openapi.models.operations.CreateGatewayRouteRequestBodySpec;
import org.openapis.openapi.models.operations.CreateGatewayRouteResponse;
import org.openapis.openapi.models.shared.DefaultGatewayRouteRewriteEnum;
import org.openapis.openapi.models.shared.GatewayRouteHostnameMatch;
import org.openapis.openapi.models.shared.GatewayRouteHostnameRewrite;
import org.openapis.openapi.models.shared.GatewayRouteTarget;
import org.openapis.openapi.models.shared.GatewayRouteVirtualService;
import org.openapis.openapi.models.shared.GrpcGatewayRoute;
import org.openapis.openapi.models.shared.GrpcGatewayRouteAction;
import org.openapis.openapi.models.shared.GrpcGatewayRouteMatch;
import org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata;
import org.openapis.openapi.models.shared.GrpcGatewayRouteRewrite;
import org.openapis.openapi.models.shared.GrpcMetadataMatchMethod;
import org.openapis.openapi.models.shared.HeaderMatchMethod;
import org.openapis.openapi.models.shared.HttpGatewayRoute;
import org.openapis.openapi.models.shared.HttpGatewayRouteAction;
import org.openapis.openapi.models.shared.HttpGatewayRouteHeader;
import org.openapis.openapi.models.shared.HttpGatewayRouteMatch;
import org.openapis.openapi.models.shared.HttpGatewayRoutePathRewrite;
import org.openapis.openapi.models.shared.HttpGatewayRoutePrefixRewrite;
import org.openapis.openapi.models.shared.HttpGatewayRouteRewrite;
import org.openapis.openapi.models.shared.HttpMethodEnum;
import org.openapis.openapi.models.shared.HttpPathMatch;
import org.openapis.openapi.models.shared.HttpQueryParameter;
import org.openapis.openapi.models.shared.MatchRange;
import org.openapis.openapi.models.shared.QueryParameterMatch;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagRef;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGatewayRouteRequest req = new CreateGatewayRouteRequest(                new CreateGatewayRouteRequestBody("provident",                 new CreateGatewayRouteRequestBodySpec() {{
                                                grpcRoute = new GrpcGatewayRoute(                new GrpcGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("distinctio");) {{
                                                                                    port = 844266L;
                                                                                }};) {{
                                                                    rewrite = new GrpcGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.DISABLED;
                                                                        }};;
                                                                    }};;
                                                                }};,                 new GrpcGatewayRouteMatch() {{
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "nulla";
                                                                        suffix = "corrupti";
                                                                    }};;
                                                                    metadata = new org.openapis.openapi.models.shared.GrpcGatewayRouteMetadata[]{{
                                                                        add(new GrpcGatewayRouteMetadata("placeat") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "vel";
                                                                                prefix = "error";
                                                                                range = new MatchRange(437587L, 297534L) {{
                                                                                    end = 645894L;
                                                                                    start = 384382L;
                                                                                }};
                                                                                regex = "debitis";
                                                                                suffix = "ipsa";
                                                                            }};
                                                                            name = "Ricky Hoppe";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("sapiente") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "voluptatum";
                                                                                prefix = "iusto";
                                                                                range = new MatchRange(925597L, 836079L) {{
                                                                                    end = 568045L;
                                                                                    start = 392785L;
                                                                                }};
                                                                                regex = "ab";
                                                                                suffix = "quis";
                                                                            }};
                                                                            name = "Iris Aufderhar";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("officia") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "quo";
                                                                                prefix = "odit";
                                                                                range = new MatchRange(978619L, 473608L) {{
                                                                                    end = 870013L;
                                                                                    start = 870088L;
                                                                                }};
                                                                                regex = "quod";
                                                                                suffix = "quod";
                                                                            }};
                                                                            name = "Deanna Sauer MD";
                                                                        }}),
                                                                        add(new GrpcGatewayRouteMetadata("esse") {{
                                                                            invert = false;
                                                                            match = new GrpcMetadataMatchMethod() {{
                                                                                exact = "occaecati";
                                                                                prefix = "fugit";
                                                                                range = new MatchRange(758616L, 521848L) {{
                                                                                    end = 537373L;
                                                                                    start = 944669L;
                                                                                }};
                                                                                regex = "beatae";
                                                                                suffix = "commodi";
                                                                            }};
                                                                            name = "Pauline Dibbert";
                                                                        }}),
                                                                    }};
                                                                    port = 216550L;
                                                                    serviceName = "excepturi";
                                                                }};);;
                                                http2Route = new HttpGatewayRoute(                new HttpGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("aspernatur");) {{
                                                                                    port = 18789L;
                                                                                }};) {{
                                                                    rewrite = new HttpGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                        }};;
                                                                        path = new HttpGatewayRoutePathRewrite() {{
                                                                            exact = "natus";
                                                                        }};;
                                                                        prefix = new HttpGatewayRoutePrefixRewrite() {{
                                                                            defaultPrefix = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                            value = "iste";
                                                                        }};;
                                                                    }};;
                                                                }};,                 new HttpGatewayRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                                                        add(new HttpGatewayRouteHeader("est") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "natus";
                                                                                prefix = "laboriosam";
                                                                                range = new MatchRange(681820L, 449950L) {{
                                                                                    end = 943749L;
                                                                                    start = 902599L;
                                                                                }};
                                                                                regex = "corporis";
                                                                                suffix = "iste";
                                                                            }};
                                                                            name = "Mr. Kerry Predovic";
                                                                        }}),
                                                                    }};
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "mollitia";
                                                                        suffix = "laborum";
                                                                    }};;
                                                                    method = HttpMethodEnum.HEAD;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "dolorem";
                                                                        regex = "corporis";
                                                                    }};;
                                                                    port = 128926L;
                                                                    prefix = "nobis";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("doloribus") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "omnis";
                                                                            }};
                                                                            name = "Ms. Cathy Marks";
                                                                        }}),
                                                                        add(new HttpQueryParameter("repellat") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "sapiente";
                                                                            }};
                                                                            name = "Angie Durgan";
                                                                        }}),
                                                                    }};
                                                                }};);;
                                                httpRoute = new HttpGatewayRoute(                new HttpGatewayRouteAction(                new GatewayRouteTarget(                new GatewayRouteVirtualService("mollitia");) {{
                                                                                    port = 581850L;
                                                                                }};) {{
                                                                    rewrite = new HttpGatewayRouteRewrite() {{
                                                                        hostname = new GatewayRouteHostnameRewrite() {{
                                                                            defaultTargetHostname = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                        }};;
                                                                        path = new HttpGatewayRoutePathRewrite() {{
                                                                            exact = "commodi";
                                                                        }};;
                                                                        prefix = new HttpGatewayRoutePrefixRewrite() {{
                                                                            defaultPrefix = DefaultGatewayRouteRewriteEnum.ENABLED;
                                                                            value = "molestiae";
                                                                        }};;
                                                                    }};;
                                                                }};,                 new HttpGatewayRouteMatch() {{
                                                                    headers = new org.openapis.openapi.models.shared.HttpGatewayRouteHeader[]{{
                                                                        add(new HttpGatewayRouteHeader("possimus") {{
                                                                            invert = false;
                                                                            match = new HeaderMatchMethod() {{
                                                                                exact = "error";
                                                                                prefix = "quia";
                                                                                range = new MatchRange(674752L, 656330L) {{
                                                                                    end = 338007L;
                                                                                    start = 110375L;
                                                                                }};
                                                                                regex = "enim";
                                                                                suffix = "odit";
                                                                            }};
                                                                            name = "Jimmy Wiegand";
                                                                        }}),
                                                                    }};
                                                                    hostname = new GatewayRouteHostnameMatch() {{
                                                                        exact = "aut";
                                                                        suffix = "quasi";
                                                                    }};;
                                                                    method = HttpMethodEnum.CONNECT;
                                                                    path = new HttpPathMatch() {{
                                                                        exact = "temporibus";
                                                                        regex = "laborum";
                                                                    }};;
                                                                    port = 96098L;
                                                                    prefix = "reiciendis";
                                                                    queryParameters = new org.openapis.openapi.models.shared.HttpQueryParameter[]{{
                                                                        add(new HttpQueryParameter("cum") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "vero";
                                                                            }};
                                                                            name = "Miss Irma Wolff";
                                                                        }}),
                                                                        add(new HttpQueryParameter("dolore") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "perferendis";
                                                                            }};
                                                                            name = "Bessie Grady II";
                                                                        }}),
                                                                        add(new HttpQueryParameter("repudiandae") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "iusto";
                                                                            }};
                                                                            name = "Maryann Hamill";
                                                                        }}),
                                                                        add(new HttpQueryParameter("modi") {{
                                                                            match = new QueryParameterMatch() {{
                                                                                exact = "quae";
                                                                            }};
                                                                            name = "Alison Mann";
                                                                        }}),
                                                                    }};
                                                                }};);;
                                                priority = 508969L;
                                            }};) {{
                                clientToken = "rem";
                                tags = new org.openapis.openapi.models.shared.TagRef[]{{
                                    add(new TagRef("sint", "veritatis") {{
                                        key = "quasi";
                                        value = "repudiandae";
                                    }}),
                                    add(new TagRef("enim", "consequatur") {{
                                        key = "itaque";
                                        value = "incidunt";
                                    }}),
                                    add(new TagRef("explicabo", "deserunt") {{
                                        key = "est";
                                        value = "quibusdam";
                                    }}),
                                    add(new TagRef("labore", "modi") {{
                                        key = "distinctio";
                                        value = "quibusdam";
                                    }}),
                                }};
                            }};, "qui", "aliquid") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
                meshOwner = "fugit";
            }};            

            CreateGatewayRouteResponse res = sdk.createGatewayRoute(req);

            if (res.createGatewayRouteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->