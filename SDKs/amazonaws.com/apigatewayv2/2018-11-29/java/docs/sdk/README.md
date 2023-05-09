# SDK

## Overview

Amazon API Gateway V2

Amazon Web Services documentation
<https://docs.aws.amazon.com/apigateway/>
### Available Operations

* [createApi](#createapi) - Creates an Api resource.
* [createApiMapping](#createapimapping) - Creates an API mapping.
* [createAuthorizer](#createauthorizer) - Creates an Authorizer for an API.
* [createDeployment](#createdeployment) - Creates a Deployment for an API.
* [createDomainName](#createdomainname) - Creates a domain name.
* [createIntegration](#createintegration) - Creates an Integration.
* [createIntegrationResponse](#createintegrationresponse) - Creates an IntegrationResponses.
* [createModel](#createmodel) - Creates a Model for an API.
* [createRoute](#createroute) - Creates a Route for an API.
* [createRouteResponse](#createrouteresponse) - Creates a RouteResponse for a Route.
* [createStage](#createstage) - Creates a Stage for an API.
* [createVpcLink](#createvpclink) - Creates a VPC link.
* [deleteAccessLogSettings](#deleteaccesslogsettings) - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
* [deleteApi](#deleteapi) - Deletes an Api resource.
* [deleteApiMapping](#deleteapimapping) - Deletes an API mapping.
* [deleteAuthorizer](#deleteauthorizer) - Deletes an Authorizer.
* [deleteCorsConfiguration](#deletecorsconfiguration) - Deletes a CORS configuration.
* [deleteDeployment](#deletedeployment) - Deletes a Deployment.
* [deleteDomainName](#deletedomainname) - Deletes a domain name.
* [deleteIntegration](#deleteintegration) - Deletes an Integration.
* [deleteIntegrationResponse](#deleteintegrationresponse) - Deletes an IntegrationResponses.
* [deleteModel](#deletemodel) - Deletes a Model.
* [deleteRoute](#deleteroute) - Deletes a Route.
* [deleteRouteRequestParameter](#deleterouterequestparameter) - Deletes a route request parameter.
* [deleteRouteResponse](#deleterouteresponse) - Deletes a RouteResponse.
* [deleteRouteSettings](#deleteroutesettings) - Deletes the RouteSettings for a stage.
* [deleteStage](#deletestage) - Deletes a Stage.
* [deleteVpcLink](#deletevpclink) - Deletes a VPC link.
* [exportApi](#exportapi)
* [getApi](#getapi) - Gets an Api resource.
* [getApiMapping](#getapimapping) - Gets an API mapping.
* [getApiMappings](#getapimappings) - Gets API mappings.
* [getApis](#getapis) - Gets a collection of Api resources.
* [getAuthorizer](#getauthorizer) - Gets an Authorizer.
* [getAuthorizers](#getauthorizers) - Gets the Authorizers for an API.
* [getDeployment](#getdeployment) - Gets a Deployment.
* [getDeployments](#getdeployments) - Gets the Deployments for an API.
* [getDomainName](#getdomainname) - Gets a domain name.
* [getDomainNames](#getdomainnames) - Gets the domain names for an AWS account.
* [getIntegration](#getintegration) - Gets an Integration.
* [getIntegrationResponse](#getintegrationresponse) - Gets an IntegrationResponses.
* [getIntegrationResponses](#getintegrationresponses) - Gets the IntegrationResponses for an Integration.
* [getIntegrations](#getintegrations) - Gets the Integrations for an API.
* [getModel](#getmodel) - Gets a Model.
* [getModelTemplate](#getmodeltemplate) - Gets a model template.
* [getModels](#getmodels) - Gets the Models for an API.
* [getRoute](#getroute) - Gets a Route.
* [getRouteResponse](#getrouteresponse) - Gets a RouteResponse.
* [getRouteResponses](#getrouteresponses) - Gets the RouteResponses for a Route.
* [getRoutes](#getroutes) - Gets the Routes for an API.
* [getStage](#getstage) - Gets a Stage.
* [getStages](#getstages) - Gets the Stages for an API.
* [getTags](#gettags) - Gets a collection of Tag resources.
* [getVpcLink](#getvpclink) - Gets a VPC link.
* [getVpcLinks](#getvpclinks) - Gets a collection of VPC links.
* [importApi](#importapi) - Imports an API.
* [reimportApi](#reimportapi) - Puts an Api resource.
* [resetAuthorizersCache](#resetauthorizerscache) - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
* [tagResource](#tagresource) - Creates a new Tag resource to represent a tag.
* [untagResource](#untagresource) - Deletes a Tag.
* [updateApi](#updateapi) - Updates an Api resource.
* [updateApiMapping](#updateapimapping) - The API mapping.
* [updateAuthorizer](#updateauthorizer) - Updates an Authorizer.
* [updateDeployment](#updatedeployment) - Updates a Deployment.
* [updateDomainName](#updatedomainname) - Updates a domain name.
* [updateIntegration](#updateintegration) - Updates an Integration.
* [updateIntegrationResponse](#updateintegrationresponse) - Updates an IntegrationResponses.
* [updateModel](#updatemodel) - Updates a Model.
* [updateRoute](#updateroute) - Updates a Route.
* [updateRouteResponse](#updaterouteresponse) - Updates a RouteResponse.
* [updateStage](#updatestage) - Updates a Stage.
* [updateVpcLink](#updatevpclink) - Updates a VPC link.

## createApi

Creates an Api resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiRequest;
import org.openapis.openapi.models.operations.CreateApiRequestBody;
import org.openapis.openapi.models.operations.CreateApiRequestBodyCorsConfiguration;
import org.openapis.openapi.models.operations.CreateApiRequestBodyProtocolTypeEnum;
import org.openapis.openapi.models.operations.CreateApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApiRequest req = new CreateApiRequest(                new CreateApiRequestBody("molestiae", CreateApiRequestBodyProtocolTypeEnum.HTTP) {{
                                apiKeySelectionExpression = "quod";
                                corsConfiguration = new CreateApiRequestBodyCorsConfiguration() {{
                                    allowCredentials = false;
                                    allowHeaders = new String[]{{
                                        add("totam"),
                                        add("porro"),
                                    }};
                                    allowMethods = new String[]{{
                                        add("dicta"),
                                        add("nam"),
                                        add("officia"),
                                    }};
                                    allowOrigins = new String[]{{
                                        add("fugit"),
                                        add("deleniti"),
                                        add("hic"),
                                    }};
                                    exposeHeaders = new String[]{{
                                        add("totam"),
                                        add("beatae"),
                                        add("commodi"),
                                        add("molestiae"),
                                    }};
                                    maxAge = 264555L;
                                }};;
                                credentialsArn = "qui";
                                description = "impedit";
                                disableExecuteApiEndpoint = false;
                                disableSchemaValidation = false;
                                routeKey = "cum";
                                routeSelectionExpression = "esse";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "aspernatur");
                                }};
                                target = "perferendis";
                                version = "ad";
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            CreateApiResponse res = sdk.sdk.createApi(req);

            if (res.createApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApiMapping

Creates an API mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiMappingRequest;
import org.openapis.openapi.models.operations.CreateApiMappingRequestBody;
import org.openapis.openapi.models.operations.CreateApiMappingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApiMappingRequest req = new CreateApiMappingRequest(                new CreateApiMappingRequestBody("fuga", "in") {{
                                apiMappingKey = "corporis";
                            }};, "iste") {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            CreateApiMappingResponse res = sdk.sdk.createApiMapping(req);

            if (res.createApiMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAuthorizer

Creates an Authorizer for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAuthorizerRequest;
import org.openapis.openapi.models.operations.CreateAuthorizerRequestBody;
import org.openapis.openapi.models.operations.CreateAuthorizerRequestBodyAuthorizerTypeEnum;
import org.openapis.openapi.models.operations.CreateAuthorizerRequestBodyJwtConfiguration;
import org.openapis.openapi.models.operations.CreateAuthorizerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAuthorizerRequest req = new CreateAuthorizerRequest(                new CreateAuthorizerRequestBody(CreateAuthorizerRequestBodyAuthorizerTypeEnum.JWT,                 new String[]{{
                                                add("dolorem"),
                                            }}, "corporis") {{
                                authorizerCredentialsArn = "explicabo";
                                authorizerPayloadFormatVersion = "nobis";
                                authorizerResultTtlInSeconds = 315428L;
                                authorizerUri = "omnis";
                                enableSimpleResponses = false;
                                identityValidationExpression = "nemo";
                                jwtConfiguration = new CreateAuthorizerRequestBodyJwtConfiguration() {{
                                    audience = new String[]{{
                                        add("excepturi"),
                                        add("accusantium"),
                                    }};
                                    issuer = "iure";
                                }};;
                            }};, "culpa") {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateAuthorizerResponse res = sdk.sdk.createAuthorizer(req);

            if (res.createAuthorizerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployment

Creates a Deployment for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentRequestBody;
import org.openapis.openapi.models.operations.CreateDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentRequest req = new CreateDeploymentRequest(                new CreateDeploymentRequestBody() {{
                                description = "mollitia";
                                stageName = "occaecati";
                            }};, "numquam") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestiae";
                xAmzDate = "velit";
                xAmzSecurityToken = "error";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quis";
            }};            

            CreateDeploymentResponse res = sdk.sdk.createDeployment(req);

            if (res.createDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDomainName

Creates a domain name.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomainNameRequest;
import org.openapis.openapi.models.operations.CreateDomainNameRequestBody;
import org.openapis.openapi.models.operations.CreateDomainNameRequestBodyMutualTlsAuthentication;
import org.openapis.openapi.models.operations.CreateDomainNameResponse;
import org.openapis.openapi.models.shared.DomainNameConfiguration;
import org.openapis.openapi.models.shared.DomainNameConfigurationDomainNameStatusEnum;
import org.openapis.openapi.models.shared.DomainNameConfigurationEndpointTypeEnum;
import org.openapis.openapi.models.shared.DomainNameConfigurationSecurityPolicyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDomainNameRequest req = new CreateDomainNameRequest(                new CreateDomainNameRequestBody("laborum") {{
                                domainNameConfigurations = new org.openapis.openapi.models.shared.DomainNameConfiguration[]{{
                                    add(new DomainNameConfiguration() {{
                                        apiGatewayDomainName = "enim";
                                        certificateArn = "odit";
                                        certificateName = "quo";
                                        certificateUploadDate = OffsetDateTime.parse("2022-01-19T09:45:27.272Z");
                                        domainNameStatus = DomainNameConfigurationDomainNameStatusEnum.UPDATING;
                                        domainNameStatusMessage = "id";
                                        endpointType = DomainNameConfigurationEndpointTypeEnum.EDGE;
                                        hostedZoneId = "aut";
                                        ownershipVerificationCertificateArn = "quasi";
                                        securityPolicy = DomainNameConfigurationSecurityPolicyEnum.TLS12;
                                    }}),
                                    add(new DomainNameConfiguration() {{
                                        apiGatewayDomainName = "temporibus";
                                        certificateArn = "laborum";
                                        certificateName = "quasi";
                                        certificateUploadDate = OffsetDateTime.parse("2020-01-27T18:38:42.890Z");
                                        domainNameStatus = DomainNameConfigurationDomainNameStatusEnum.PENDING_OWNERSHIP_VERIFICATION;
                                        domainNameStatusMessage = "nihil";
                                        endpointType = DomainNameConfigurationEndpointTypeEnum.EDGE;
                                        hostedZoneId = "voluptatibus";
                                        ownershipVerificationCertificateArn = "ipsa";
                                        securityPolicy = DomainNameConfigurationSecurityPolicyEnum.TLS12;
                                    }}),
                                    add(new DomainNameConfiguration() {{
                                        apiGatewayDomainName = "voluptate";
                                        certificateArn = "cum";
                                        certificateName = "perferendis";
                                        certificateUploadDate = OffsetDateTime.parse("2022-07-23T18:36:43.822Z");
                                        domainNameStatus = DomainNameConfigurationDomainNameStatusEnum.UPDATING;
                                        domainNameStatusMessage = "maiores";
                                        endpointType = DomainNameConfigurationEndpointTypeEnum.REGIONAL;
                                        hostedZoneId = "corporis";
                                        ownershipVerificationCertificateArn = "dolore";
                                        securityPolicy = DomainNameConfigurationSecurityPolicyEnum.TLS10;
                                    }}),
                                }};
                                mutualTlsAuthentication = new CreateDomainNameRequestBodyMutualTlsAuthentication() {{
                                    truststoreUri = "dicta";
                                    truststoreVersion = "harum";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("accusamus", "commodi");
                                    put("repudiandae", "quae");
                                }};
                            }};) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            CreateDomainNameResponse res = sdk.sdk.createDomainName(req);

            if (res.createDomainNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIntegration

Creates an Integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIntegrationRequest;
import org.openapis.openapi.models.operations.CreateIntegrationRequestBody;
import org.openapis.openapi.models.operations.CreateIntegrationRequestBodyConnectionTypeEnum;
import org.openapis.openapi.models.operations.CreateIntegrationRequestBodyContentHandlingStrategyEnum;
import org.openapis.openapi.models.operations.CreateIntegrationRequestBodyIntegrationTypeEnum;
import org.openapis.openapi.models.operations.CreateIntegrationRequestBodyPassthroughBehaviorEnum;
import org.openapis.openapi.models.operations.CreateIntegrationRequestBodyTlsConfig;
import org.openapis.openapi.models.operations.CreateIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIntegrationRequest req = new CreateIntegrationRequest(                new CreateIntegrationRequestBody(CreateIntegrationRequestBodyIntegrationTypeEnum.AWS_PROXY) {{
                                connectionId = "quasi";
                                connectionType = CreateIntegrationRequestBodyConnectionTypeEnum.VPC_LINK;
                                contentHandlingStrategy = CreateIntegrationRequestBodyContentHandlingStrategyEnum.CONVERT_TO_TEXT;
                                credentialsArn = "veritatis";
                                description = "itaque";
                                integrationMethod = "incidunt";
                                integrationSubtype = "enim";
                                integrationUri = "consequatur";
                                passthroughBehavior = CreateIntegrationRequestBodyPassthroughBehaviorEnum.WHEN_NO_TEMPLATES;
                                payloadFormatVersion = "quibusdam";
                                requestParameters = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "distinctio");
                                }};
                                requestTemplates = new java.util.HashMap<String, String>() {{
                                    put("labore", "modi");
                                    put("qui", "aliquid");
                                    put("cupiditate", "quos");
                                    put("perferendis", "magni");
                                }};
                                responseParameters = new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                                    put("ipsam", new java.util.HashMap<String, String>() {{
                                        put("fugit", "dolorum");
                                    }});
                                    put("excepturi", new java.util.HashMap<String, String>() {{
                                        put("facilis", "tempore");
                                        put("labore", "delectus");
                                    }});
                                    put("eum", new java.util.HashMap<String, String>() {{
                                        put("eligendi", "sint");
                                    }});
                                    put("aliquid", new java.util.HashMap<String, String>() {{
                                        put("necessitatibus", "sint");
                                        put("officia", "dolor");
                                        put("debitis", "a");
                                    }});
                                }};
                                templateSelectionExpression = "dolorum";
                                timeoutInMillis = 447125L;
                                tlsConfig = new CreateIntegrationRequestBodyTlsConfig() {{
                                    serverNameToVerify = "in";
                                }};;
                            }};, "illum") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            CreateIntegrationResponse res = sdk.sdk.createIntegration(req);

            if (res.createIntegrationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIntegrationResponse

Creates an IntegrationResponses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIntegrationResponseRequest;
import org.openapis.openapi.models.operations.CreateIntegrationResponseRequestBody;
import org.openapis.openapi.models.operations.CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum;
import org.openapis.openapi.models.operations.CreateIntegrationResponseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIntegrationResponseRequest req = new CreateIntegrationResponseRequest(                new CreateIntegrationResponseRequestBody("laborum") {{
                                contentHandlingStrategy = CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum.CONVERT_TO_TEXT;
                                responseParameters = new java.util.HashMap<String, String>() {{
                                    put("occaecati", "enim");
                                }};
                                responseTemplates = new java.util.HashMap<String, String>() {{
                                    put("delectus", "quidem");
                                    put("provident", "nam");
                                    put("id", "blanditiis");
                                    put("deleniti", "sapiente");
                                }};
                                templateSelectionExpression = "amet";
                            }};, "deserunt", "nisi") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            CreateIntegrationResponseResponse res = sdk.sdk.createIntegrationResponse(req);

            if (res.createIntegrationResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createModel

Creates a Model for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateModelRequest;
import org.openapis.openapi.models.operations.CreateModelRequestBody;
import org.openapis.openapi.models.operations.CreateModelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateModelRequest req = new CreateModelRequest(                new CreateModelRequestBody("id", "labore") {{
                                contentType = "labore";
                                description = "suscipit";
                            }};, "natus") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "vero";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "et";
            }};            

            CreateModelResponse res = sdk.sdk.createModel(req);

            if (res.createModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRoute

Creates a Route for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRouteRequest;
import org.openapis.openapi.models.operations.CreateRouteRequestBody;
import org.openapis.openapi.models.operations.CreateRouteRequestBodyAuthorizationTypeEnum;
import org.openapis.openapi.models.operations.CreateRouteResponse;
import org.openapis.openapi.models.shared.ParameterConstraints;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRouteRequest req = new CreateRouteRequest(                new CreateRouteRequestBody("ullam") {{
                                apiKeyRequired = false;
                                authorizationScopes = new String[]{{
                                    add("quos"),
                                    add("sint"),
                                    add("accusantium"),
                                }};
                                authorizationType = CreateRouteRequestBodyAuthorizationTypeEnum.CUSTOM;
                                authorizerId = "reiciendis";
                                modelSelectionExpression = "mollitia";
                                operationName = "ad";
                                requestModels = new java.util.HashMap<String, String>() {{
                                    put("dolor", "necessitatibus");
                                    put("odit", "nemo");
                                }};
                                requestParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.ParameterConstraints>() {{
                                    put("iure", new ParameterConstraints() {{
                                        required = false;
                                    }});
                                }};
                                routeResponseSelectionExpression = "doloribus";
                                target = "debitis";
                            }};, "eius") {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreateRouteResponse res = sdk.sdk.createRoute(req);

            if (res.createRouteResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRouteResponse

Creates a RouteResponse for a Route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRouteResponseRequest;
import org.openapis.openapi.models.operations.CreateRouteResponseRequestBody;
import org.openapis.openapi.models.operations.CreateRouteResponseResponse;
import org.openapis.openapi.models.shared.ParameterConstraints;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRouteResponseRequest req = new CreateRouteResponseRequest(                new CreateRouteResponseRequestBody("expedita") {{
                                modelSelectionExpression = "nihil";
                                responseModels = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "sed");
                                    put("saepe", "pariatur");
                                    put("accusantium", "consequuntur");
                                    put("praesentium", "natus");
                                }};
                                responseParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.ParameterConstraints>() {{
                                    put("sunt", new ParameterConstraints() {{
                                        required = false;
                                    }});
                                }};
                            }};, "quo", "illum") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "ea";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "odit";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "accusantium";
            }};            

            CreateRouteResponseResponse res = sdk.sdk.createRouteResponse(req);

            if (res.createRouteResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStage

Creates a Stage for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStageRequest;
import org.openapis.openapi.models.operations.CreateStageRequestBody;
import org.openapis.openapi.models.operations.CreateStageRequestBodyAccessLogSettings;
import org.openapis.openapi.models.operations.CreateStageRequestBodyDefaultRouteSettings;
import org.openapis.openapi.models.operations.CreateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum;
import org.openapis.openapi.models.operations.CreateStageResponse;
import org.openapis.openapi.models.shared.RouteSettings;
import org.openapis.openapi.models.shared.RouteSettingsLoggingLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStageRequest req = new CreateStageRequest(                new CreateStageRequestBody("maiores") {{
                                accessLogSettings = new CreateStageRequestBodyAccessLogSettings() {{
                                    destinationArn = "quidem";
                                    format = "ipsam";
                                }};;
                                autoDeploy = false;
                                clientCertificateId = "voluptate";
                                defaultRouteSettings = new CreateStageRequestBodyDefaultRouteSettings() {{
                                    dataTraceEnabled = false;
                                    detailedMetricsEnabled = false;
                                    loggingLevel = CreateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum.INFO;
                                    throttlingBurstLimit = 722056L;
                                    throttlingRateLimit = 505.88;
                                }};;
                                deploymentId = "pariatur";
                                description = "nemo";
                                routeSettings = new java.util.HashMap<String, org.openapis.openapi.models.shared.RouteSettings>() {{
                                    put("perferendis", new RouteSettings() {{
                                        dataTraceEnabled = false;
                                        detailedMetricsEnabled = false;
                                        loggingLevel = RouteSettingsLoggingLevelEnum.OFF;
                                        throttlingBurstLimit = 230742L;
                                        throttlingRateLimit = 117.14;
                                    }});
                                    put("cumque", new RouteSettings() {{
                                        dataTraceEnabled = false;
                                        detailedMetricsEnabled = false;
                                        loggingLevel = RouteSettingsLoggingLevelEnum.INFO;
                                        throttlingBurstLimit = 944124L;
                                        throttlingRateLimit = 7299.91;
                                    }});
                                    put("nobis", new RouteSettings() {{
                                        dataTraceEnabled = false;
                                        detailedMetricsEnabled = false;
                                        loggingLevel = RouteSettingsLoggingLevelEnum.ERROR;
                                        throttlingBurstLimit = 339404L;
                                        throttlingRateLimit = 5210.37;
                                    }});
                                    put("dignissimos", new RouteSettings() {{
                                        dataTraceEnabled = false;
                                        detailedMetricsEnabled = false;
                                        loggingLevel = RouteSettingsLoggingLevelEnum.ERROR;
                                        throttlingBurstLimit = 338985L;
                                        throttlingRateLimit = 1999.96;
                                    }});
                                }};
                                stageVariables = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "dolores");
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quam", "dolor");
                                    put("vero", "nostrum");
                                    put("hic", "recusandae");
                                    put("omnis", "facilis");
                                }};
                            }};, "perspiciatis") {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            CreateStageResponse res = sdk.sdk.createStage(req);

            if (res.createStageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVpcLink

Creates a VPC link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVpcLinkRequest;
import org.openapis.openapi.models.operations.CreateVpcLinkRequestBody;
import org.openapis.openapi.models.operations.CreateVpcLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVpcLinkRequest req = new CreateVpcLinkRequest(                new CreateVpcLinkRequestBody("adipisci",                 new String[]{{
                                                add("earum"),
                                                add("modi"),
                                                add("iste"),
                                                add("dolorum"),
                                            }}) {{
                                securityGroupIds = new String[]{{
                                    add("pariatur"),
                                    add("provident"),
                                    add("nobis"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("delectus", "quaerat");
                                    put("quos", "aliquid");
                                    put("dolorem", "dolorem");
                                }};
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            CreateVpcLinkResponse res = sdk.sdk.createVpcLink(req);

            if (res.createVpcLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccessLogSettings

Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessLogSettingsRequest;
import org.openapis.openapi.models.operations.DeleteAccessLogSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessLogSettingsRequest req = new DeleteAccessLogSettingsRequest("reiciendis", "amet") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odio";
            }};            

            DeleteAccessLogSettingsResponse res = sdk.sdk.deleteAccessLogSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApi

Deletes an Api resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiRequest;
import org.openapis.openapi.models.operations.DeleteApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApiRequest req = new DeleteApiRequest("accusamus") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            DeleteApiResponse res = sdk.sdk.deleteApi(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiMapping

Deletes an API mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiMappingRequest;
import org.openapis.openapi.models.operations.DeleteApiMappingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApiMappingRequest req = new DeleteApiMappingRequest("ab", "soluta") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "voluptate";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DeleteApiMappingResponse res = sdk.sdk.deleteApiMapping(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAuthorizer

Deletes an Authorizer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAuthorizerRequest;
import org.openapis.openapi.models.operations.DeleteAuthorizerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAuthorizerRequest req = new DeleteAuthorizerRequest("asperiores", "nihil") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteAuthorizerResponse res = sdk.sdk.deleteAuthorizer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCorsConfiguration

Deletes a CORS configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCorsConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteCorsConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCorsConfigurationRequest req = new DeleteCorsConfigurationRequest("optio") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            DeleteCorsConfigurationResponse res = sdk.sdk.deleteCorsConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeployment

Deletes a Deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeploymentRequest;
import org.openapis.openapi.models.operations.DeleteDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeploymentRequest req = new DeleteDeploymentRequest("totam", "similique") {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "at";
                xAmzCredential = "quaerat";
                xAmzDate = "tempora";
                xAmzSecurityToken = "vel";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "officiis";
            }};            

            DeleteDeploymentResponse res = sdk.sdk.deleteDeployment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomainName

Deletes a domain name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainNameRequest;
import org.openapis.openapi.models.operations.DeleteDomainNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainNameRequest req = new DeleteDomainNameRequest("dolorum") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "esse";
                xAmzCredential = "harum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "tenetur";
            }};            

            DeleteDomainNameResponse res = sdk.sdk.deleteDomainName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIntegration

Deletes an Integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIntegrationRequest;
import org.openapis.openapi.models.operations.DeleteIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIntegrationRequest req = new DeleteIntegrationRequest("tempore", "accusamus") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
            }};            

            DeleteIntegrationResponse res = sdk.sdk.deleteIntegration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIntegrationResponse

Deletes an IntegrationResponses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIntegrationResponseRequest;
import org.openapis.openapi.models.operations.DeleteIntegrationResponseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIntegrationResponseRequest req = new DeleteIntegrationResponseRequest("neque", "sed", "vel") {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            DeleteIntegrationResponseResponse res = sdk.sdk.deleteIntegrationResponse(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteModel

Deletes a Model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteModelRequest;
import org.openapis.openapi.models.operations.DeleteModelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteModelRequest req = new DeleteModelRequest("maxime", "pariatur") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "laborum";
                xAmzDate = "totam";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "dolores";
            }};            

            DeleteModelResponse res = sdk.sdk.deleteModel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRoute

Deletes a Route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRouteRequest;
import org.openapis.openapi.models.operations.DeleteRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRouteRequest req = new DeleteRouteRequest("facilis", "aliquid") {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "temporibus";
                xAmzDate = "qui";
                xAmzSecurityToken = "neque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "magni";
            }};            

            DeleteRouteResponse res = sdk.sdk.deleteRoute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRouteRequestParameter

Deletes a route request parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRouteRequestParameterRequest;
import org.openapis.openapi.models.operations.DeleteRouteRequestParameterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRouteRequestParameterRequest req = new DeleteRouteRequestParameterRequest("sunt", "ullam", "nam") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            DeleteRouteRequestParameterResponse res = sdk.sdk.deleteRouteRequestParameter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRouteResponse

Deletes a RouteResponse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRouteResponseRequest;
import org.openapis.openapi.models.operations.DeleteRouteResponseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRouteResponseRequest req = new DeleteRouteResponseRequest("veritatis", "nobis", "quos") {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "aperiam";
                xAmzDate = "delectus";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "labore";
            }};            

            DeleteRouteResponseResponse res = sdk.sdk.deleteRouteResponse(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRouteSettings

Deletes the RouteSettings for a stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRouteSettingsRequest;
import org.openapis.openapi.models.operations.DeleteRouteSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRouteSettingsRequest req = new DeleteRouteSettingsRequest("dolorum", "architecto", "quae") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
            }};            

            DeleteRouteSettingsResponse res = sdk.sdk.deleteRouteSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStage

Deletes a Stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStageRequest;
import org.openapis.openapi.models.operations.DeleteStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStageRequest req = new DeleteStageRequest("ut", "facilis") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "qui";
                xAmzCredential = "quae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "odio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteStageResponse res = sdk.sdk.deleteStage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVpcLink

Deletes a VPC link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVpcLinkRequest;
import org.openapis.openapi.models.operations.DeleteVpcLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVpcLinkRequest req = new DeleteVpcLinkRequest("vero") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "quis";
                xAmzCredential = "ipsum";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vero";
            }};            

            DeleteVpcLinkResponse res = sdk.sdk.deleteVpcLink(req);

            if (res.deleteVpcLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportApi

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportApiRequest;
import org.openapis.openapi.models.operations.ExportApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportApiRequest req = new ExportApiRequest("dignissimos", "hic", "distinctio") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
                exportVersion = "quibusdam";
                includeExtensions = false;
                stageName = "illum";
            }};            

            ExportApiResponse res = sdk.sdk.exportApi(req);

            if (res.exportApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApi

Gets an Api resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiRequest;
import org.openapis.openapi.models.operations.GetApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiRequest req = new GetApiRequest("natus") {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatibus";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "porro";
            }};            

            GetApiResponse res = sdk.sdk.getApi(req);

            if (res.getApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiMapping

Gets an API mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiMappingRequest;
import org.openapis.openapi.models.operations.GetApiMappingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiMappingRequest req = new GetApiMappingRequest("doloribus", "iusto") {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "alias";
                xAmzDate = "officia";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "ea";
            }};            

            GetApiMappingResponse res = sdk.sdk.getApiMapping(req);

            if (res.getApiMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiMappings

Gets API mappings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiMappingsRequest;
import org.openapis.openapi.models.operations.GetApiMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiMappingsRequest req = new GetApiMappingsRequest("vel") {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ratione";
                xAmzDate = "ex";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "dolor";
                maxResults = "maiores";
                nextToken = "quasi";
            }};            

            GetApiMappingsResponse res = sdk.sdk.getApiMappings(req);

            if (res.getApiMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApis

Gets a collection of Api resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApisRequest;
import org.openapis.openapi.models.operations.GetApisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApisRequest req = new GetApisRequest() {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
                maxResults = "ea";
                nextToken = "impedit";
            }};            

            GetApisResponse res = sdk.sdk.getApis(req);

            if (res.getApisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizer

Gets an Authorizer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthorizerRequest;
import org.openapis.openapi.models.operations.GetAuthorizerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuthorizerRequest req = new GetAuthorizerRequest("veniam", "aliquid") {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ea";
                xAmzDate = "quo";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetAuthorizerResponse res = sdk.sdk.getAuthorizer(req);

            if (res.getAuthorizerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizers

Gets the Authorizers for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthorizersRequest;
import org.openapis.openapi.models.operations.GetAuthorizersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuthorizersRequest req = new GetAuthorizersRequest("eaque") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "libero";
                xAmzCredential = "aut";
                xAmzDate = "aut";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "aliquam";
                maxResults = "fugit";
                nextToken = "accusamus";
            }};            

            GetAuthorizersResponse res = sdk.sdk.getAuthorizers(req);

            if (res.getAuthorizersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeployment

Gets a Deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentRequest;
import org.openapis.openapi.models.operations.GetDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentRequest req = new GetDeploymentRequest("non", "et") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "velit";
                xAmzSecurityToken = "eum";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nobis";
            }};            

            GetDeploymentResponse res = sdk.sdk.getDeployment(req);

            if (res.getDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeployments

Gets the Deployments for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentsRequest;
import org.openapis.openapi.models.operations.GetDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentsRequest req = new GetDeploymentsRequest("assumenda") {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
                maxResults = "provident";
                nextToken = "ipsa";
            }};            

            GetDeploymentsResponse res = sdk.sdk.getDeployments(req);

            if (res.getDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainName

Gets a domain name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainNameRequest;
import org.openapis.openapi.models.operations.GetDomainNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainNameRequest req = new GetDomainNameRequest("magnam") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "eius";
                xAmzCredential = "esse";
                xAmzDate = "esse";
                xAmzSecurityToken = "rem";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            GetDomainNameResponse res = sdk.sdk.getDomainName(req);

            if (res.getDomainNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainNames

Gets the domain names for an AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainNamesRequest;
import org.openapis.openapi.models.operations.GetDomainNamesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainNamesRequest req = new GetDomainNamesRequest() {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ut";
                xAmzCredential = "eum";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "praesentium";
                maxResults = "quisquam";
                nextToken = "veritatis";
            }};            

            GetDomainNamesResponse res = sdk.sdk.getDomainNames(req);

            if (res.getDomainNamesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntegration

Gets an Integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationRequest;
import org.openapis.openapi.models.operations.GetIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntegrationRequest req = new GetIntegrationRequest("id", "quidem") {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "quo";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "eos";
            }};            

            GetIntegrationResponse res = sdk.sdk.getIntegration(req);

            if (res.getIntegrationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntegrationResponse

Gets an IntegrationResponses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationResponseRequest;
import org.openapis.openapi.models.operations.GetIntegrationResponseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntegrationResponseRequest req = new GetIntegrationResponseRequest("ab", "cupiditate", "consequatur") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsam";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "esse";
            }};            

            GetIntegrationResponseResponse res = sdk.sdk.getIntegrationResponse(req);

            if (res.getIntegrationResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntegrationResponses

Gets the IntegrationResponses for an Integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationResponsesRequest;
import org.openapis.openapi.models.operations.GetIntegrationResponsesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntegrationResponsesRequest req = new GetIntegrationResponsesRequest("aperiam", "distinctio") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
                maxResults = "odio";
                nextToken = "occaecati";
            }};            

            GetIntegrationResponsesResponse res = sdk.sdk.getIntegrationResponses(req);

            if (res.getIntegrationResponsesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntegrations

Gets the Integrations for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationsRequest;
import org.openapis.openapi.models.operations.GetIntegrationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntegrationsRequest req = new GetIntegrationsRequest("sapiente") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
                maxResults = "praesentium";
                nextToken = "consequuntur";
            }};            

            GetIntegrationsResponse res = sdk.sdk.getIntegrations(req);

            if (res.getIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModel

Gets a Model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelRequest;
import org.openapis.openapi.models.operations.GetModelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetModelRequest req = new GetModelRequest("fugit", "fuga") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "atque";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "fugit";
            }};            

            GetModelResponse res = sdk.sdk.getModel(req);

            if (res.getModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModelTemplate

Gets a model template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelTemplateRequest;
import org.openapis.openapi.models.operations.GetModelTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetModelTemplateRequest req = new GetModelTemplateRequest("consequuntur", "ratione") {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "occaecati";
                xAmzDate = "atque";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "eveniet";
            }};            

            GetModelTemplateResponse res = sdk.sdk.getModelTemplate(req);

            if (res.getModelTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModels

Gets the Models for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetModelsRequest;
import org.openapis.openapi.models.operations.GetModelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetModelsRequest req = new GetModelsRequest("veritatis") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "quod";
                xAmzCredential = "nam";
                xAmzDate = "vero";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "saepe";
                maxResults = "vel";
                nextToken = "harum";
            }};            

            GetModelsResponse res = sdk.sdk.getModels(req);

            if (res.getModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRoute

Gets a Route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRouteRequest;
import org.openapis.openapi.models.operations.GetRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRouteRequest req = new GetRouteRequest("rerum", "occaecati") {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "eligendi";
                xAmzDate = "sit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "adipisci";
            }};            

            GetRouteResponse res = sdk.sdk.getRoute(req);

            if (res.getRouteResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRouteResponse

Gets a RouteResponse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRouteResponseRequest;
import org.openapis.openapi.models.operations.GetRouteResponseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRouteResponseRequest req = new GetRouteResponseRequest("consequuntur", "consequatur", "minus") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consectetur";
                xAmzDate = "esse";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "a";
            }};            

            GetRouteResponseResponse res = sdk.sdk.getRouteResponse(req);

            if (res.getRouteResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRouteResponses

Gets the RouteResponses for a Route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRouteResponsesRequest;
import org.openapis.openapi.models.operations.GetRouteResponsesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRouteResponsesRequest req = new GetRouteResponsesRequest("quas", "esse") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "a";
                xAmzCredential = "error";
                xAmzDate = "sint";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "quia";
                maxResults = "eveniet";
                nextToken = "asperiores";
            }};            

            GetRouteResponsesResponse res = sdk.sdk.getRouteResponses(req);

            if (res.getRouteResponsesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRoutes

Gets the Routes for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRoutesRequest;
import org.openapis.openapi.models.operations.GetRoutesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRoutesRequest req = new GetRoutesRequest("veritatis") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "similique";
                xAmzDate = "culpa";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quae";
                maxResults = "earum";
                nextToken = "vel";
            }};            

            GetRoutesResponse res = sdk.sdk.getRoutes(req);

            if (res.getRoutesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStage

Gets a Stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStageRequest;
import org.openapis.openapi.models.operations.GetStageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStageRequest req = new GetStageRequest("eius", "libero") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "accusantium";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "ullam";
            }};            

            GetStageResponse res = sdk.sdk.getStage(req);

            if (res.getStageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStages

Gets the Stages for an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStagesRequest;
import org.openapis.openapi.models.operations.GetStagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStagesRequest req = new GetStagesRequest("ullam") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatum";
                xAmzDate = "qui";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "deleniti";
                maxResults = "itaque";
                nextToken = "dolorum";
            }};            

            GetStagesResponse res = sdk.sdk.getStages(req);

            if (res.getStagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTags

Gets a collection of Tag resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsRequest;
import org.openapis.openapi.models.operations.GetTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTagsRequest req = new GetTagsRequest("omnis") {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "at";
                xAmzDate = "et";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "minima";
            }};            

            GetTagsResponse res = sdk.sdk.getTags(req);

            if (res.getTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVpcLink

Gets a VPC link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVpcLinkRequest;
import org.openapis.openapi.models.operations.GetVpcLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVpcLinkRequest req = new GetVpcLinkRequest("consectetur") {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "iste";
                xAmzCredential = "temporibus";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "laudantium";
            }};            

            GetVpcLinkResponse res = sdk.sdk.getVpcLink(req);

            if (res.getVpcLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVpcLinks

Gets a collection of VPC links.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVpcLinksRequest;
import org.openapis.openapi.models.operations.GetVpcLinksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVpcLinksRequest req = new GetVpcLinksRequest() {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ab";
                xAmzCredential = "corrupti";
                xAmzDate = "non";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "occaecati";
                maxResults = "numquam";
                nextToken = "impedit";
            }};            

            GetVpcLinksResponse res = sdk.sdk.getVpcLinks(req);

            if (res.getVpcLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importApi

Imports an API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportApiRequest;
import org.openapis.openapi.models.operations.ImportApiRequestBody;
import org.openapis.openapi.models.operations.ImportApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportApiRequest req = new ImportApiRequest(                new ImportApiRequestBody("voluptas");) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "dicta";
                xAmzDate = "maiores";
                xAmzSecurityToken = "natus";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "voluptatibus";
                basepath = "voluptas";
                failOnWarnings = false;
            }};            

            ImportApiResponse res = sdk.sdk.importApi(req);

            if (res.importApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reimportApi

Puts an Api resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReimportApiRequest;
import org.openapis.openapi.models.operations.ReimportApiRequestBody;
import org.openapis.openapi.models.operations.ReimportApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReimportApiRequest req = new ReimportApiRequest(                new ReimportApiRequestBody("aperiam");, "ea") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellendus";
                xAmzDate = "officia";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "officia";
                basepath = "asperiores";
                failOnWarnings = false;
            }};            

            ReimportApiResponse res = sdk.sdk.reimportApi(req);

            if (res.reimportApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetAuthorizersCache

Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetAuthorizersCacheRequest;
import org.openapis.openapi.models.operations.ResetAuthorizersCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResetAuthorizersCacheRequest req = new ResetAuthorizersCacheRequest("quae", "quaerat") {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "quod";
                xAmzCredential = "labore";
                xAmzDate = "ab";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "id";
            }};            

            ResetAuthorizersCacheResponse res = sdk.sdk.resetAuthorizersCache(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Creates a new Tag resource to represent a tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody() {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("culpa", "est");
                                }};
                            }};, "recusandae") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "vel";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "labore";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Deletes a Tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("facilis",                 new String[]{{
                                add("commodi"),
                                add("in"),
                                add("corporis"),
                            }}) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nemo";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "cum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApi

Updates an Api resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApiRequest;
import org.openapis.openapi.models.operations.UpdateApiRequestBody;
import org.openapis.openapi.models.operations.UpdateApiRequestBodyCorsConfiguration;
import org.openapis.openapi.models.operations.UpdateApiResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApiRequest req = new UpdateApiRequest(                new UpdateApiRequestBody() {{
                                apiKeySelectionExpression = "in";
                                corsConfiguration = new UpdateApiRequestBodyCorsConfiguration() {{
                                    allowCredentials = false;
                                    allowHeaders = new String[]{{
                                        add("earum"),
                                        add("facere"),
                                    }};
                                    allowMethods = new String[]{{
                                        add("doloribus"),
                                        add("suscipit"),
                                    }};
                                    allowOrigins = new String[]{{
                                        add("quidem"),
                                        add("saepe"),
                                        add("necessitatibus"),
                                        add("dolore"),
                                    }};
                                    exposeHeaders = new String[]{{
                                        add("asperiores"),
                                    }};
                                    maxAge = 241545L;
                                }};;
                                credentialsArn = "non";
                                description = "amet";
                                disableExecuteApiEndpoint = false;
                                disableSchemaValidation = false;
                                name = "Courtney Wiegand";
                                routeKey = "corporis";
                                routeSelectionExpression = "harum";
                                target = "laboriosam";
                                version = "ipsa";
                            }};, "voluptates") {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "accusamus";
                xAmzDate = "similique";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "voluptas";
            }};            

            UpdateApiResponse res = sdk.sdk.updateApi(req);

            if (res.updateApiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApiMapping

The API mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApiMappingRequest;
import org.openapis.openapi.models.operations.UpdateApiMappingRequestBody;
import org.openapis.openapi.models.operations.UpdateApiMappingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApiMappingRequest req = new UpdateApiMappingRequest(                new UpdateApiMappingRequestBody("voluptas") {{
                                apiMappingKey = "minima";
                                stage = "nobis";
                            }};, "dolorum", "adipisci") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "blanditiis";
                xAmzDate = "in";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdateApiMappingResponse res = sdk.sdk.updateApiMapping(req);

            if (res.updateApiMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAuthorizer

Updates an Authorizer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAuthorizerRequest;
import org.openapis.openapi.models.operations.UpdateAuthorizerRequestBody;
import org.openapis.openapi.models.operations.UpdateAuthorizerRequestBodyAuthorizerTypeEnum;
import org.openapis.openapi.models.operations.UpdateAuthorizerRequestBodyJwtConfiguration;
import org.openapis.openapi.models.operations.UpdateAuthorizerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAuthorizerRequest req = new UpdateAuthorizerRequest(                new UpdateAuthorizerRequestBody() {{
                                authorizerCredentialsArn = "ullam";
                                authorizerPayloadFormatVersion = "adipisci";
                                authorizerResultTtlInSeconds = 738391L;
                                authorizerType = UpdateAuthorizerRequestBodyAuthorizerTypeEnum.JWT;
                                authorizerUri = "quas";
                                enableSimpleResponses = false;
                                identitySource = new String[]{{
                                    add("nesciunt"),
                                    add("culpa"),
                                    add("corrupti"),
                                    add("pariatur"),
                                }};
                                identityValidationExpression = "totam";
                                jwtConfiguration = new UpdateAuthorizerRequestBodyJwtConfiguration() {{
                                    audience = new String[]{{
                                        add("exercitationem"),
                                        add("nobis"),
                                        add("sit"),
                                        add("rerum"),
                                    }};
                                    issuer = "sed";
                                }};;
                                name = "Benjamin Ziemann";
                            }};, "expedita", "ab") {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "laborum";
                xAmzDate = "sed";
                xAmzSecurityToken = "in";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quidem";
            }};            

            UpdateAuthorizerResponse res = sdk.sdk.updateAuthorizer(req);

            if (res.updateAuthorizerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeployment

Updates a Deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeploymentRequest;
import org.openapis.openapi.models.operations.UpdateDeploymentRequestBody;
import org.openapis.openapi.models.operations.UpdateDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeploymentRequest req = new UpdateDeploymentRequest(                new UpdateDeploymentRequestBody() {{
                                description = "voluptas";
                            }};, "unde", "architecto") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "debitis";
                xAmzDate = "illo";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "corrupti";
            }};            

            UpdateDeploymentResponse res = sdk.sdk.updateDeployment(req);

            if (res.updateDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainName

Updates a domain name.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainNameRequest;
import org.openapis.openapi.models.operations.UpdateDomainNameRequestBody;
import org.openapis.openapi.models.operations.UpdateDomainNameRequestBodyMutualTlsAuthentication;
import org.openapis.openapi.models.operations.UpdateDomainNameResponse;
import org.openapis.openapi.models.shared.DomainNameConfiguration;
import org.openapis.openapi.models.shared.DomainNameConfigurationDomainNameStatusEnum;
import org.openapis.openapi.models.shared.DomainNameConfigurationEndpointTypeEnum;
import org.openapis.openapi.models.shared.DomainNameConfigurationSecurityPolicyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainNameRequest req = new UpdateDomainNameRequest(                new UpdateDomainNameRequestBody() {{
                                domainNameConfigurations = new org.openapis.openapi.models.shared.DomainNameConfiguration[]{{
                                    add(new DomainNameConfiguration() {{
                                        apiGatewayDomainName = "sed";
                                        certificateArn = "provident";
                                        certificateName = "eius";
                                        certificateUploadDate = OffsetDateTime.parse("2022-05-09T23:54:09.125Z");
                                        domainNameStatus = DomainNameConfigurationDomainNameStatusEnum.UPDATING;
                                        domainNameStatusMessage = "occaecati";
                                        endpointType = DomainNameConfigurationEndpointTypeEnum.EDGE;
                                        hostedZoneId = "voluptatibus";
                                        ownershipVerificationCertificateArn = "tempora";
                                        securityPolicy = DomainNameConfigurationSecurityPolicyEnum.TLS10;
                                    }}),
                                    add(new DomainNameConfiguration() {{
                                        apiGatewayDomainName = "voluptate";
                                        certificateArn = "reiciendis";
                                        certificateName = "ex";
                                        certificateUploadDate = OffsetDateTime.parse("2022-10-02T07:53:52.364Z");
                                        domainNameStatus = DomainNameConfigurationDomainNameStatusEnum.PENDING_OWNERSHIP_VERIFICATION;
                                        domainNameStatusMessage = "praesentium";
                                        endpointType = DomainNameConfigurationEndpointTypeEnum.EDGE;
                                        hostedZoneId = "quaerat";
                                        ownershipVerificationCertificateArn = "incidunt";
                                        securityPolicy = DomainNameConfigurationSecurityPolicyEnum.TLS10;
                                    }}),
                                }};
                                mutualTlsAuthentication = new UpdateDomainNameRequestBodyMutualTlsAuthentication() {{
                                    truststoreUri = "debitis";
                                    truststoreVersion = "rem";
                                }};;
                            }};, "sit") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "error";
                xAmzCredential = "veniam";
                xAmzDate = "minima";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "nulla";
            }};            

            UpdateDomainNameResponse res = sdk.sdk.updateDomainName(req);

            if (res.updateDomainNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIntegration

Updates an Integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIntegrationRequest;
import org.openapis.openapi.models.operations.UpdateIntegrationRequestBody;
import org.openapis.openapi.models.operations.UpdateIntegrationRequestBodyConnectionTypeEnum;
import org.openapis.openapi.models.operations.UpdateIntegrationRequestBodyContentHandlingStrategyEnum;
import org.openapis.openapi.models.operations.UpdateIntegrationRequestBodyIntegrationTypeEnum;
import org.openapis.openapi.models.operations.UpdateIntegrationRequestBodyPassthroughBehaviorEnum;
import org.openapis.openapi.models.operations.UpdateIntegrationRequestBodyTlsConfig;
import org.openapis.openapi.models.operations.UpdateIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIntegrationRequest req = new UpdateIntegrationRequest(                new UpdateIntegrationRequestBody() {{
                                connectionId = "aperiam";
                                connectionType = UpdateIntegrationRequestBodyConnectionTypeEnum.VPC_LINK;
                                contentHandlingStrategy = UpdateIntegrationRequestBodyContentHandlingStrategyEnum.CONVERT_TO_BINARY;
                                credentialsArn = "veniam";
                                description = "in";
                                integrationMethod = "officiis";
                                integrationSubtype = "beatae";
                                integrationType = UpdateIntegrationRequestBodyIntegrationTypeEnum.MOCK;
                                integrationUri = "exercitationem";
                                passthroughBehavior = UpdateIntegrationRequestBodyPassthroughBehaviorEnum.NEVER;
                                payloadFormatVersion = "cum";
                                requestParameters = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "voluptatum");
                                    put("error", "hic");
                                }};
                                requestTemplates = new java.util.HashMap<String, String>() {{
                                    put("debitis", "neque");
                                    put("dolorum", "nostrum");
                                    put("officia", "dolorum");
                                }};
                                responseParameters = new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                                    put("accusamus", new java.util.HashMap<String, String>() {{
                                        put("atque", "fugit");
                                        put("ut", "fugiat");
                                    }});
                                    put("voluptatem", new java.util.HashMap<String, String>() {{
                                        put("expedita", "magnam");
                                        put("consequatur", "esse");
                                        put("ipsam", "sit");
                                    }});
                                    put("voluptatum", new java.util.HashMap<String, String>() {{
                                        put("repudiandae", "corporis");
                                        put("et", "blanditiis");
                                        put("ex", "sed");
                                    }});
                                }};
                                templateSelectionExpression = "sit";
                                timeoutInMillis = 425508L;
                                tlsConfig = new UpdateIntegrationRequestBodyTlsConfig() {{
                                    serverNameToVerify = "nostrum";
                                }};;
                            }};, "saepe", "error") {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "reiciendis";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "harum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "architecto";
            }};            

            UpdateIntegrationResponse res = sdk.sdk.updateIntegration(req);

            if (res.updateIntegrationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIntegrationResponse

Updates an IntegrationResponses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIntegrationResponseRequest;
import org.openapis.openapi.models.operations.UpdateIntegrationResponseRequestBody;
import org.openapis.openapi.models.operations.UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum;
import org.openapis.openapi.models.operations.UpdateIntegrationResponseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIntegrationResponseRequest req = new UpdateIntegrationResponseRequest(                new UpdateIntegrationResponseRequestBody() {{
                                contentHandlingStrategy = UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum.CONVERT_TO_BINARY;
                                integrationResponseKey = "quidem";
                                responseParameters = new java.util.HashMap<String, String>() {{
                                    put("laborum", "nam");
                                    put("tenetur", "laboriosam");
                                    put("alias", "amet");
                                }};
                                responseTemplates = new java.util.HashMap<String, String>() {{
                                    put("voluptate", "unde");
                                    put("reiciendis", "provident");
                                    put("repellendus", "delectus");
                                }};
                                templateSelectionExpression = "voluptates";
                            }};, "perferendis", "est", "quidem") {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "facere";
                xAmzCredential = "fuga";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "voluptatem";
            }};            

            UpdateIntegrationResponseResponse res = sdk.sdk.updateIntegrationResponse(req);

            if (res.updateIntegrationResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateModel

Updates a Model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateModelRequest;
import org.openapis.openapi.models.operations.UpdateModelRequestBody;
import org.openapis.openapi.models.operations.UpdateModelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateModelRequest req = new UpdateModelRequest(                new UpdateModelRequestBody() {{
                                contentType = "repudiandae";
                                description = "quasi";
                                name = "Mitchell Zboncak";
                                schema = "quidem";
                            }};, "maxime", "et") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "amet";
                xAmzCredential = "assumenda";
                xAmzDate = "ea";
                xAmzSecurityToken = "atque";
                xAmzSignature = "error";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdateModelResponse res = sdk.sdk.updateModel(req);

            if (res.updateModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoute

Updates a Route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRouteRequest;
import org.openapis.openapi.models.operations.UpdateRouteRequestBody;
import org.openapis.openapi.models.operations.UpdateRouteRequestBodyAuthorizationTypeEnum;
import org.openapis.openapi.models.operations.UpdateRouteResponse;
import org.openapis.openapi.models.shared.ParameterConstraints;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRouteRequest req = new UpdateRouteRequest(                new UpdateRouteRequestBody() {{
                                apiKeyRequired = false;
                                authorizationScopes = new String[]{{
                                    add("natus"),
                                    add("minima"),
                                    add("aspernatur"),
                                    add("ex"),
                                }};
                                authorizationType = UpdateRouteRequestBodyAuthorizationTypeEnum.JWT;
                                authorizerId = "corrupti";
                                modelSelectionExpression = "at";
                                operationName = "error";
                                requestModels = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "repudiandae");
                                    put("atque", "atque");
                                    put("sunt", "recusandae");
                                }};
                                requestParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.ParameterConstraints>() {{
                                    put("repellendus", new ParameterConstraints() {{
                                        required = false;
                                    }});
                                    put("labore", new ParameterConstraints() {{
                                        required = false;
                                    }});
                                    put("reiciendis", new ParameterConstraints() {{
                                        required = false;
                                    }});
                                }};
                                routeKey = "doloremque";
                                routeResponseSelectionExpression = "repudiandae";
                                target = "dicta";
                            }};, "accusantium", "beatae") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "enim";
                xAmzCredential = "laboriosam";
                xAmzDate = "velit";
                xAmzSecurityToken = "a";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "magnam";
            }};            

            UpdateRouteResponse res = sdk.sdk.updateRoute(req);

            if (res.updateRouteResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRouteResponse

Updates a RouteResponse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRouteResponseRequest;
import org.openapis.openapi.models.operations.UpdateRouteResponseRequestBody;
import org.openapis.openapi.models.operations.UpdateRouteResponseResponse;
import org.openapis.openapi.models.shared.ParameterConstraints;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRouteResponseRequest req = new UpdateRouteResponseRequest(                new UpdateRouteResponseRequestBody() {{
                                modelSelectionExpression = "consequuntur";
                                responseModels = new java.util.HashMap<String, String>() {{
                                    put("officiis", "perspiciatis");
                                    put("in", "adipisci");
                                    put("eveniet", "occaecati");
                                }};
                                responseParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.ParameterConstraints>() {{
                                    put("fugit", new ParameterConstraints() {{
                                        required = false;
                                    }});
                                }};
                                routeResponseKey = "id";
                            }};, "quis", "reprehenderit", "error") {{
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "quidem";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "non";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "doloremque";
            }};            

            UpdateRouteResponseResponse res = sdk.sdk.updateRouteResponse(req);

            if (res.updateRouteResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStage

Updates a Stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStageRequest;
import org.openapis.openapi.models.operations.UpdateStageRequestBody;
import org.openapis.openapi.models.operations.UpdateStageRequestBodyAccessLogSettings;
import org.openapis.openapi.models.operations.UpdateStageRequestBodyDefaultRouteSettings;
import org.openapis.openapi.models.operations.UpdateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum;
import org.openapis.openapi.models.operations.UpdateStageResponse;
import org.openapis.openapi.models.shared.RouteSettings;
import org.openapis.openapi.models.shared.RouteSettingsLoggingLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStageRequest req = new UpdateStageRequest(                new UpdateStageRequestBody() {{
                                accessLogSettings = new UpdateStageRequestBodyAccessLogSettings() {{
                                    destinationArn = "ipsa";
                                    format = "totam";
                                }};;
                                autoDeploy = false;
                                clientCertificateId = "quae";
                                defaultRouteSettings = new UpdateStageRequestBodyDefaultRouteSettings() {{
                                    dataTraceEnabled = false;
                                    detailedMetricsEnabled = false;
                                    loggingLevel = UpdateStageRequestBodyDefaultRouteSettingsLoggingLevelEnum.INFO;
                                    throttlingBurstLimit = 907733L;
                                    throttlingRateLimit = 1843.62;
                                }};;
                                deploymentId = "cum";
                                description = "iure";
                                routeSettings = new java.util.HashMap<String, org.openapis.openapi.models.shared.RouteSettings>() {{
                                    put("ratione", new RouteSettings() {{
                                        dataTraceEnabled = false;
                                        detailedMetricsEnabled = false;
                                        loggingLevel = RouteSettingsLoggingLevelEnum.OFF;
                                        throttlingBurstLimit = 715208L;
                                        throttlingRateLimit = 5289.4;
                                    }});
                                    put("rem", new RouteSettings() {{
                                        dataTraceEnabled = false;
                                        detailedMetricsEnabled = false;
                                        loggingLevel = RouteSettingsLoggingLevelEnum.ERROR;
                                        throttlingBurstLimit = 320565L;
                                        throttlingRateLimit = 9979.63;
                                    }});
                                    put("alias", new RouteSettings() {{
                                        dataTraceEnabled = false;
                                        detailedMetricsEnabled = false;
                                        loggingLevel = RouteSettingsLoggingLevelEnum.INFO;
                                        throttlingBurstLimit = 597303L;
                                        throttlingRateLimit = 4706.49;
                                    }});
                                    put("mollitia", new RouteSettings() {{
                                        dataTraceEnabled = false;
                                        detailedMetricsEnabled = false;
                                        loggingLevel = RouteSettingsLoggingLevelEnum.INFO;
                                        throttlingBurstLimit = 5189L;
                                        throttlingRateLimit = 9795.27;
                                    }});
                                }};
                                stageVariables = new java.util.HashMap<String, String>() {{
                                    put("dolores", "id");
                                    put("minima", "dolore");
                                    put("dolorum", "nesciunt");
                                    put("quae", "recusandae");
                                }};
                            }};, "omnis", "quaerat") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "ex";
                xAmzCredential = "ut";
                xAmzDate = "culpa";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "laudantium";
            }};            

            UpdateStageResponse res = sdk.sdk.updateStage(req);

            if (res.updateStageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVpcLink

Updates a VPC link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVpcLinkRequest;
import org.openapis.openapi.models.operations.UpdateVpcLinkRequestBody;
import org.openapis.openapi.models.operations.UpdateVpcLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVpcLinkRequest req = new UpdateVpcLinkRequest(                new UpdateVpcLinkRequestBody() {{
                                name = "Patti Klocko";
                            }};, "eum") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "aspernatur";
                xAmzDate = "ullam";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "nostrum";
            }};            

            UpdateVpcLinkResponse res = sdk.sdk.updateVpcLink(req);

            if (res.updateVpcLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
