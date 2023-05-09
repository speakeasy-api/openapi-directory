# SDK

## Overview

Amazon API Gateway V2

Amazon Web Services documentation
<https://docs.aws.amazon.com/apigateway/>
### Available Operations

* [CreateAPI](#createapi) - Creates an Api resource.
* [CreateAPIMapping](#createapimapping) - Creates an API mapping.
* [CreateAuthorizer](#createauthorizer) - Creates an Authorizer for an API.
* [CreateDeployment](#createdeployment) - Creates a Deployment for an API.
* [CreateDomainName](#createdomainname) - Creates a domain name.
* [CreateIntegration](#createintegration) - Creates an Integration.
* [CreateIntegrationResponse](#createintegrationresponse) - Creates an IntegrationResponses.
* [CreateModel](#createmodel) - Creates a Model for an API.
* [CreateRoute](#createroute) - Creates a Route for an API.
* [CreateRouteResponse](#createrouteresponse) - Creates a RouteResponse for a Route.
* [CreateStage](#createstage) - Creates a Stage for an API.
* [CreateVpcLink](#createvpclink) - Creates a VPC link.
* [DeleteAccessLogSettings](#deleteaccesslogsettings) - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
* [DeleteAPI](#deleteapi) - Deletes an Api resource.
* [DeleteAPIMapping](#deleteapimapping) - Deletes an API mapping.
* [DeleteAuthorizer](#deleteauthorizer) - Deletes an Authorizer.
* [DeleteCorsConfiguration](#deletecorsconfiguration) - Deletes a CORS configuration.
* [DeleteDeployment](#deletedeployment) - Deletes a Deployment.
* [DeleteDomainName](#deletedomainname) - Deletes a domain name.
* [DeleteIntegration](#deleteintegration) - Deletes an Integration.
* [DeleteIntegrationResponse](#deleteintegrationresponse) - Deletes an IntegrationResponses.
* [DeleteModel](#deletemodel) - Deletes a Model.
* [DeleteRoute](#deleteroute) - Deletes a Route.
* [DeleteRouteRequestParameter](#deleterouterequestparameter) - Deletes a route request parameter.
* [DeleteRouteResponse](#deleterouteresponse) - Deletes a RouteResponse.
* [DeleteRouteSettings](#deleteroutesettings) - Deletes the RouteSettings for a stage.
* [DeleteStage](#deletestage) - Deletes a Stage.
* [DeleteVpcLink](#deletevpclink) - Deletes a VPC link.
* [ExportAPI](#exportapi)
* [GetAPI](#getapi) - Gets an Api resource.
* [GetAPIMapping](#getapimapping) - Gets an API mapping.
* [GetAPIMappings](#getapimappings) - Gets API mappings.
* [GetApis](#getapis) - Gets a collection of Api resources.
* [GetAuthorizer](#getauthorizer) - Gets an Authorizer.
* [GetAuthorizers](#getauthorizers) - Gets the Authorizers for an API.
* [GetDeployment](#getdeployment) - Gets a Deployment.
* [GetDeployments](#getdeployments) - Gets the Deployments for an API.
* [GetDomainName](#getdomainname) - Gets a domain name.
* [GetDomainNames](#getdomainnames) - Gets the domain names for an AWS account.
* [GetIntegration](#getintegration) - Gets an Integration.
* [GetIntegrationResponse](#getintegrationresponse) - Gets an IntegrationResponses.
* [GetIntegrationResponses](#getintegrationresponses) - Gets the IntegrationResponses for an Integration.
* [GetIntegrations](#getintegrations) - Gets the Integrations for an API.
* [GetModel](#getmodel) - Gets a Model.
* [GetModelTemplate](#getmodeltemplate) - Gets a model template.
* [GetModels](#getmodels) - Gets the Models for an API.
* [GetRoute](#getroute) - Gets a Route.
* [GetRouteResponse](#getrouteresponse) - Gets a RouteResponse.
* [GetRouteResponses](#getrouteresponses) - Gets the RouteResponses for a Route.
* [GetRoutes](#getroutes) - Gets the Routes for an API.
* [GetStage](#getstage) - Gets a Stage.
* [GetStages](#getstages) - Gets the Stages for an API.
* [GetTags](#gettags) - Gets a collection of Tag resources.
* [GetVpcLink](#getvpclink) - Gets a VPC link.
* [GetVpcLinks](#getvpclinks) - Gets a collection of VPC links.
* [ImportAPI](#importapi) - Imports an API.
* [ReimportAPI](#reimportapi) - Puts an Api resource.
* [ResetAuthorizersCache](#resetauthorizerscache) - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
* [TagResource](#tagresource) - Creates a new Tag resource to represent a tag.
* [UntagResource](#untagresource) - Deletes a Tag.
* [UpdateAPI](#updateapi) - Updates an Api resource.
* [UpdateAPIMapping](#updateapimapping) - The API mapping.
* [UpdateAuthorizer](#updateauthorizer) - Updates an Authorizer.
* [UpdateDeployment](#updatedeployment) - Updates a Deployment.
* [UpdateDomainName](#updatedomainname) - Updates a domain name.
* [UpdateIntegration](#updateintegration) - Updates an Integration.
* [UpdateIntegrationResponse](#updateintegrationresponse) - Updates an IntegrationResponses.
* [UpdateModel](#updatemodel) - Updates a Model.
* [UpdateRoute](#updateroute) - Updates a Route.
* [UpdateRouteResponse](#updaterouteresponse) - Updates a RouteResponse.
* [UpdateStage](#updatestage) - Updates a Stage.
* [UpdateVpcLink](#updatevpclink) - Updates a VPC link.

## CreateAPI

Creates an Api resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAPI(ctx, operations.CreateAPIRequest{
        RequestBody: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: sdk.String("quod"),
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: sdk.Bool(false),
                AllowHeaders: []string{
                    "esse",
                    "totam",
                    "porro",
                    "dolorum",
                },
                AllowMethods: []string{
                    "nam",
                },
                AllowOrigins: []string{
                    "occaecati",
                    "fugit",
                    "deleniti",
                },
                ExposeHeaders: []string{
                    "optio",
                    "totam",
                    "beatae",
                    "commodi",
                },
                MaxAge: sdk.Int64(473600),
            },
            CredentialsArn: sdk.String("modi"),
            Description: sdk.String("qui"),
            DisableExecuteAPIEndpoint: sdk.Bool(false),
            DisableSchemaValidation: sdk.Bool(false),
            Name: "Jonathon Klocko",
            ProtocolType: operations.CreateAPIRequestBodyProtocolTypeEnumWebsocket,
            RouteKey: sdk.String("perferendis"),
            RouteSelectionExpression: sdk.String("ad"),
            Tags: map[string]string{
                "sed": "iste",
                "dolor": "natus",
                "laboriosam": "hic",
            },
            Target: sdk.String("saepe"),
            Version: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIResponse != nil {
        // handle response
    }
}
```

## CreateAPIMapping

Creates an API mapping.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAPIMapping(ctx, operations.CreateAPIMappingRequest{
        RequestBody: operations.CreateAPIMappingRequestBody{
            APIID: "ipsa",
            APIMappingKey: sdk.String("reiciendis"),
            Stage: "est",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        DomainName: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIMappingResponse != nil {
        // handle response
    }
}
```

## CreateAuthorizer

Creates an Authorizer for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAuthorizer(ctx, operations.CreateAuthorizerRequest{
        RequestBody: operations.CreateAuthorizerRequestBody{
            AuthorizerCredentialsArn: sdk.String("omnis"),
            AuthorizerPayloadFormatVersion: sdk.String("nemo"),
            AuthorizerResultTTLInSeconds: sdk.Int64(325047),
            AuthorizerType: operations.CreateAuthorizerRequestBodyAuthorizerTypeEnumJwt,
            AuthorizerURI: sdk.String("accusantium"),
            EnableSimpleResponses: sdk.Bool(false),
            IdentitySource: []string{
                "culpa",
                "doloribus",
            },
            IdentityValidationExpression: sdk.String("sapiente"),
            JwtConfiguration: &operations.CreateAuthorizerRequestBodyJwtConfiguration{
                Audience: []string{
                    "mollitia",
                },
                Issuer: sdk.String("dolorem"),
            },
            Name: "Carlos Ziemann",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
        APIID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthorizerResponse != nil {
        // handle response
    }
}
```

## CreateDeployment

Creates a Deployment for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDeployment(ctx, operations.CreateDeploymentRequest{
        RequestBody: operations.CreateDeploymentRequestBody{
            Description: sdk.String("vitae"),
            StageName: sdk.String("laborum"),
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        APIID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentResponse != nil {
        // handle response
    }
}
```

## CreateDomainName

Creates a domain name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDomainName(ctx, operations.CreateDomainNameRequest{
        RequestBody: operations.CreateDomainNameRequestBody{
            DomainName: "possimus",
            DomainNameConfigurations: []shared.DomainNameConfiguration{
                shared.DomainNameConfiguration{
                    APIGatewayDomainName: sdk.String("quasi"),
                    CertificateArn: sdk.String("error"),
                    CertificateName: sdk.String("temporibus"),
                    CertificateUploadDate: types.MustTimeFromString("2022-10-22T20:21:20.741Z"),
                    DomainNameStatus: shared.DomainNameConfigurationDomainNameStatusEnumPendingOwnershipVerification.ToPointer(),
                    DomainNameStatusMessage: sdk.String("voluptatibus"),
                    EndpointType: shared.DomainNameConfigurationEndpointTypeEnumEdge.ToPointer(),
                    HostedZoneID: sdk.String("nihil"),
                    OwnershipVerificationCertificateArn: sdk.String("praesentium"),
                    SecurityPolicy: shared.DomainNameConfigurationSecurityPolicyEnumTls12.ToPointer(),
                },
            },
            MutualTLSAuthentication: &operations.CreateDomainNameRequestBodyMutualTLSAuthentication{
                TruststoreURI: sdk.String("ipsa"),
                TruststoreVersion: sdk.String("omnis"),
            },
            Tags: map[string]string{
                "cum": "perferendis",
                "doloremque": "reprehenderit",
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainNameResponse != nil {
        // handle response
    }
}
```

## CreateIntegration

Creates an Integration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateIntegration(ctx, operations.CreateIntegrationRequest{
        RequestBody: operations.CreateIntegrationRequestBody{
            ConnectionID: sdk.String("harum"),
            ConnectionType: operations.CreateIntegrationRequestBodyConnectionTypeEnumInternet.ToPointer(),
            ContentHandlingStrategy: operations.CreateIntegrationRequestBodyContentHandlingStrategyEnumConvertToText.ToPointer(),
            CredentialsArn: sdk.String("commodi"),
            Description: sdk.String("repudiandae"),
            IntegrationMethod: sdk.String("quae"),
            IntegrationSubtype: sdk.String("ipsum"),
            IntegrationType: operations.CreateIntegrationRequestBodyIntegrationTypeEnumHTTPProxy,
            IntegrationURI: sdk.String("molestias"),
            PassthroughBehavior: operations.CreateIntegrationRequestBodyPassthroughBehaviorEnumNever.ToPointer(),
            PayloadFormatVersion: sdk.String("pariatur"),
            RequestParameters: map[string]string{
                "praesentium": "rem",
                "voluptates": "quasi",
            },
            RequestTemplates: map[string]string{
                "sint": "veritatis",
                "itaque": "incidunt",
                "enim": "consequatur",
                "est": "quibusdam",
            },
            ResponseParameters: map[string]map[string]string{
                "deserunt": map[string]string{
                    "quibusdam": "labore",
                    "modi": "qui",
                    "aliquid": "cupiditate",
                },
            },
            TemplateSelectionExpression: sdk.String("quos"),
            TimeoutInMillis: sdk.Int64(20107),
            TLSConfig: &operations.CreateIntegrationRequestBodyTLSConfig{
                ServerNameToVerify: sdk.String("magni"),
            },
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        APIID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIntegrationResult != nil {
        // handle response
    }
}
```

## CreateIntegrationResponse

Creates an IntegrationResponses.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateIntegrationResponse(ctx, operations.CreateIntegrationResponseRequest{
        RequestBody: operations.CreateIntegrationResponseRequestBody{
            ContentHandlingStrategy: operations.CreateIntegrationResponseRequestBodyContentHandlingStrategyEnumConvertToText.ToPointer(),
            IntegrationResponseKey: "labore",
            ResponseParameters: map[string]string{
                "eum": "non",
                "eligendi": "sint",
                "aliquid": "provident",
                "necessitatibus": "sint",
            },
            ResponseTemplates: map[string]string{
                "dolor": "debitis",
                "a": "dolorum",
                "in": "in",
            },
            TemplateSelectionExpression: sdk.String("illum"),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
        APIID: "aliquid",
        IntegrationID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIntegrationResponseResponse != nil {
        // handle response
    }
}
```

## CreateModel

Creates a Model for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateModel(ctx, operations.CreateModelRequest{
        RequestBody: operations.CreateModelRequestBody{
            ContentType: sdk.String("accusamus"),
            Description: sdk.String("non"),
            Name: "Jon Tillman",
            Schema: "provident",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        APIID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateModelResponse != nil {
        // handle response
    }
}
```

## CreateRoute

Creates a Route for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRoute(ctx, operations.CreateRouteRequest{
        RequestBody: operations.CreateRouteRequestBody{
            APIKeyRequired: sdk.Bool(false),
            AuthorizationScopes: []string{
                "natus",
                "omnis",
            },
            AuthorizationType: operations.CreateRouteRequestBodyAuthorizationTypeEnumAwsIam.ToPointer(),
            AuthorizerID: sdk.String("perferendis"),
            ModelSelectionExpression: sdk.String("nihil"),
            OperationName: sdk.String("magnam"),
            RequestModels: map[string]string{
                "id": "labore",
                "labore": "suscipit",
                "natus": "nobis",
            },
            RequestParameters: map[string]shared.ParameterConstraints{
                "vero": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
                "aspernatur": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
            },
            RouteKey: "architecto",
            RouteResponseSelectionExpression: sdk.String("magnam"),
            Target: sdk.String("et"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        APIID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRouteResult != nil {
        // handle response
    }
}
```

## CreateRouteResponse

Creates a RouteResponse for a Route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRouteResponse(ctx, operations.CreateRouteResponseRequest{
        RequestBody: operations.CreateRouteResponseRequestBody{
            ModelSelectionExpression: sdk.String("mollitia"),
            ResponseModels: map[string]string{
                "eum": "dolor",
                "necessitatibus": "odit",
            },
            ResponseParameters: map[string]shared.ParameterConstraints{
                "quasi": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
                "iure": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
            },
            RouteResponseKey: "doloribus",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        APIID: "architecto",
        RouteID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRouteResponseResponse != nil {
        // handle response
    }
}
```

## CreateStage

Creates a Stage for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateStage(ctx, operations.CreateStageRequest{
        RequestBody: operations.CreateStageRequestBody{
            AccessLogSettings: &operations.CreateStageRequestBodyAccessLogSettings{
                DestinationArn: sdk.String("ullam"),
                Format: sdk.String("expedita"),
            },
            AutoDeploy: sdk.Bool(false),
            ClientCertificateID: sdk.String("nihil"),
            DefaultRouteSettings: &operations.CreateStageRequestBodyDefaultRouteSettings{
                DataTraceEnabled: sdk.Bool(false),
                DetailedMetricsEnabled: sdk.Bool(false),
                LoggingLevel: operations.CreateStageRequestBodyDefaultRouteSettingsLoggingLevelEnumOff.ToPointer(),
                ThrottlingBurstLimit: sdk.Int64(841140),
                ThrottlingRateLimit: sdk.Float64(1494.48),
            },
            DeploymentID: sdk.String("saepe"),
            Description: sdk.String("pariatur"),
            RouteSettings: map[string]shared.RouteSettings{
                "consequuntur": shared.RouteSettings{
                    DataTraceEnabled: sdk.Bool(false),
                    DetailedMetricsEnabled: sdk.Bool(false),
                    LoggingLevel: shared.RouteSettingsLoggingLevelEnumInfo.ToPointer(),
                    ThrottlingBurstLimit: sdk.Int64(615560),
                    ThrottlingRateLimit: sdk.Float64(1668.47),
                },
            },
            StageName: "sunt",
            StageVariables: map[string]string{
                "illum": "pariatur",
                "maxime": "ea",
                "excepturi": "odit",
                "ea": "accusantium",
            },
            Tags: map[string]string{
                "maiores": "quidem",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        APIID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStageResponse != nil {
        // handle response
    }
}
```

## CreateVpcLink

Creates a VPC link.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateVpcLink(ctx, operations.CreateVpcLinkRequest{
        RequestBody: operations.CreateVpcLinkRequestBody{
            Name: "Miss Ginger Feeney",
            SecurityGroupIds: []string{
                "libero",
                "nobis",
                "dolores",
                "quis",
            },
            SubnetIds: []string{
                "dignissimos",
                "eaque",
                "quis",
            },
            Tags: map[string]string{
                "eos": "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVpcLinkResponse != nil {
        // handle response
    }
}
```

## DeleteAccessLogSettings

Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAccessLogSettings(ctx, operations.DeleteAccessLogSettingsRequest{
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        APIID: "blanditiis",
        StageName: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAPI

Deletes an Api resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAPI(ctx, operations.DeleteAPIRequest{
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
        APIID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAPIMapping

Deletes an API mapping.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAPIMapping(ctx, operations.DeleteAPIMappingRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
        APIMappingID: "quaerat",
        DomainName: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAuthorizer

Deletes an Authorizer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAuthorizer(ctx, operations.DeleteAuthorizerRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("hic"),
        APIID: "excepturi",
        AuthorizerID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCorsConfiguration

Deletes a CORS configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCorsConfiguration(ctx, operations.DeleteCorsConfigurationRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        APIID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeployment

Deletes a Deployment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDeployment(ctx, operations.DeleteDeploymentRequest{
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        APIID: "voluptas",
        DeploymentID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDomainName

Deletes a domain name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDomainName(ctx, operations.DeleteDomainNameRequest{
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        DomainName: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteIntegration

Deletes an Integration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteIntegration(ctx, operations.DeleteIntegrationRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        APIID: "nihil",
        IntegrationID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteIntegrationResponse

Deletes an IntegrationResponses.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteIntegrationResponse(ctx, operations.DeleteIntegrationResponseRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        APIID: "optio",
        IntegrationID: "accusamus",
        IntegrationResponseID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteModel

Deletes a Model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteModel(ctx, operations.DeleteModelRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
        APIID: "similique",
        ModelID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRoute

Deletes a Route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRoute(ctx, operations.DeleteRouteRequest{
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
        APIID: "dolorum",
        RouteID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRouteRequestParameter

Deletes a route request parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRouteRequestParameter(ctx, operations.DeleteRouteRequestParameterRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
        APIID: "tempore",
        RequestParameterKey: "accusamus",
        RouteID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRouteResponse

Deletes a RouteResponse.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRouteResponse(ctx, operations.DeleteRouteResponseRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
        APIID: "neque",
        RouteID: "sed",
        RouteResponseID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRouteSettings

Deletes the RouteSettings for a stage.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRouteSettings(ctx, operations.DeleteRouteSettingsRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        APIID: "cupiditate",
        RouteKey: "maxime",
        StageName: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteStage

Deletes a Stage.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteStage(ctx, operations.DeleteStageRequest{
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        APIID: "distinctio",
        StageName: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteVpcLink

Deletes a VPC link.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVpcLink(ctx, operations.DeleteVpcLinkRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        VpcLinkID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVpcLinkResponse != nil {
        // handle response
    }
}
```

## ExportAPI

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExportAPI(ctx, operations.ExportAPIRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("cumque"),
        APIID: "soluta",
        ExportVersion: sdk.String("nobis"),
        IncludeExtensions: sdk.Bool(false),
        OutputType: "et",
        Specification: "saepe",
        StageName: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAPIResponse != nil {
        // handle response
    }
}
```

## GetAPI

Gets an Api resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAPI(ctx, operations.GetAPIRequest{
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("delectus"),
        APIID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResponse != nil {
        // handle response
    }
}
```

## GetAPIMapping

Gets an API mapping.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAPIMapping(ctx, operations.GetAPIMappingRequest{
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("aut"),
        APIMappingID: "quas",
        DomainName: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIMappingResponse != nil {
        // handle response
    }
}
```

## GetAPIMappings

Gets API mappings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAPIMappings(ctx, operations.GetAPIMappingsRequest{
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("facilis"),
        DomainName: "cupiditate",
        MaxResults: sdk.String("qui"),
        NextToken: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIMappingsResponse != nil {
        // handle response
    }
}
```

## GetApis

Gets a collection of Api resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetApis(ctx, operations.GetApisRequest{
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
        MaxResults: sdk.String("quis"),
        NextToken: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApisResponse != nil {
        // handle response
    }
}
```

## GetAuthorizer

Gets an Authorizer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAuthorizer(ctx, operations.GetAuthorizerRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        APIID: "distinctio",
        AuthorizerID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthorizerResponse != nil {
        // handle response
    }
}
```

## GetAuthorizers

Gets the Authorizers for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAuthorizers(ctx, operations.GetAuthorizersRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        APIID: "illum",
        MaxResults: sdk.String("sequi"),
        NextToken: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthorizersResponse != nil {
        // handle response
    }
}
```

## GetDeployment

Gets a Deployment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDeployment(ctx, operations.GetDeploymentRequest{
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("porro"),
        APIID: "maiores",
        DeploymentID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentResponse != nil {
        // handle response
    }
}
```

## GetDeployments

Gets the Deployments for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDeployments(ctx, operations.GetDeploymentsRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        APIID: "ea",
        MaxResults: sdk.String("aspernatur"),
        NextToken: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentsResponse != nil {
        // handle response
    }
}
```

## GetDomainName

Gets a domain name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDomainName(ctx, operations.GetDomainNameRequest{
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
        DomainName: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainNameResponse != nil {
        // handle response
    }
}
```

## GetDomainNames

Gets the domain names for an AWS account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDomainNames(ctx, operations.GetDomainNamesRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        MaxResults: sdk.String("quisquam"),
        NextToken: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainNamesResponse != nil {
        // handle response
    }
}
```

## GetIntegration

Gets an Integration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetIntegration(ctx, operations.GetIntegrationRequest{
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("magnam"),
        APIID: "ea",
        IntegrationID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIntegrationResult != nil {
        // handle response
    }
}
```

## GetIntegrationResponse

Gets an IntegrationResponses.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetIntegrationResponse(ctx, operations.GetIntegrationResponseRequest{
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("libero"),
        APIID: "aut",
        IntegrationID: "aut",
        IntegrationResponseID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIntegrationResponseResponse != nil {
        // handle response
    }
}
```

## GetIntegrationResponses

Gets the IntegrationResponses for an Integration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetIntegrationResponses(ctx, operations.GetIntegrationResponsesRequest{
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("et"),
        APIID: "dolorum",
        IntegrationID: "laborum",
        MaxResults: sdk.String("placeat"),
        NextToken: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIntegrationResponsesResponse != nil {
        // handle response
    }
}
```

## GetIntegrations

Gets the Integrations for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetIntegrations(ctx, operations.GetIntegrationsRequest{
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        APIID: "libero",
        MaxResults: sdk.String("quasi"),
        NextToken: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIntegrationsResponse != nil {
        // handle response
    }
}
```

## GetModel

Gets a Model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetModel(ctx, operations.GetModelRequest{
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("odio"),
        APIID: "eius",
        ModelID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetModelResponse != nil {
        // handle response
    }
}
```

## GetModelTemplate

Gets a model template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetModelTemplate(ctx, operations.GetModelTemplateRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ut"),
        APIID: "eum",
        ModelID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetModelTemplateResponse != nil {
        // handle response
    }
}
```

## GetModels

Gets the Models for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetModels(ctx, operations.GetModelsRequest{
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("id"),
        APIID: "quidem",
        MaxResults: sdk.String("neque"),
        NextToken: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetModelsResponse != nil {
        // handle response
    }
}
```

## GetRoute

Gets a Route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRoute(ctx, operations.GetRouteRequest{
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("ab"),
        APIID: "cupiditate",
        RouteID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRouteResult != nil {
        // handle response
    }
}
```

## GetRouteResponse

Gets a RouteResponse.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRouteResponse(ctx, operations.GetRouteResponseRequest{
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("esse"),
        APIID: "recusandae",
        RouteID: "aperiam",
        RouteResponseID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRouteResponseResponse != nil {
        // handle response
    }
}
```

## GetRouteResponses

Gets the RouteResponses for a Route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRouteResponses(ctx, operations.GetRouteResponsesRequest{
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        APIID: "odio",
        MaxResults: sdk.String("occaecati"),
        NextToken: sdk.String("commodi"),
        RouteID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRouteResponsesResponse != nil {
        // handle response
    }
}
```

## GetRoutes

Gets the Routes for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRoutes(ctx, operations.GetRoutesRequest{
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("quas"),
        APIID: "praesentium",
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRoutesResponse != nil {
        // handle response
    }
}
```

## GetStage

Gets a Stage.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStage(ctx, operations.GetStageRequest{
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("minima"),
        APIID: "nisi",
        StageName: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStageResponse != nil {
        // handle response
    }
}
```

## GetStages

Gets the Stages for an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStages(ctx, operations.GetStagesRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("atque"),
        APIID: "et",
        MaxResults: sdk.String("esse"),
        NextToken: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStagesResponse != nil {
        // handle response
    }
}
```

## GetTags

Gets a collection of Tag resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTags(ctx, operations.GetTagsRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        ResourceArn: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTagsResponse != nil {
        // handle response
    }
}
```

## GetVpcLink

Gets a VPC link.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetVpcLink(ctx, operations.GetVpcLinkRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("minima"),
        VpcLinkID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVpcLinkResponse != nil {
        // handle response
    }
}
```

## GetVpcLinks

Gets a collection of VPC links.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetVpcLinks(ctx, operations.GetVpcLinksRequest{
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        MaxResults: sdk.String("consequatur"),
        NextToken: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVpcLinksResponse != nil {
        // handle response
    }
}
```

## ImportAPI

Imports an API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportAPI(ctx, operations.ImportAPIRequest{
        RequestBody: operations.ImportAPIRequestBody{
            Body: "quaerat",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("nulla"),
        Basepath: sdk.String("quas"),
        FailOnWarnings: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportAPIResponse != nil {
        // handle response
    }
}
```

## ReimportAPI

Puts an Api resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ReimportAPI(ctx, operations.ReimportAPIRequest{
        RequestBody: operations.ReimportAPIRequestBody{
            Body: "esse",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("quia"),
        APIID: "eveniet",
        Basepath: sdk.String("asperiores"),
        FailOnWarnings: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReimportAPIResponse != nil {
        // handle response
    }
}
```

## ResetAuthorizersCache

Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResetAuthorizersCache(ctx, operations.ResetAuthorizersCacheRequest{
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        APIID: "tenetur",
        StageName: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagResource

Creates a new Tag resource to represent a tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "vel": "in",
                "eius": "libero",
                "illum": "soluta",
                "accusantium": "aliquam",
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("aut"),
        ResourceArn: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Deletes a Tag.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
        ResourceArn: "omnis",
        TagKeys: []string{
            "quasi",
            "at",
            "et",
            "voluptate",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAPI

Updates an Api resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAPI(ctx, operations.UpdateAPIRequest{
        RequestBody: operations.UpdateAPIRequestBody{
            APIKeySelectionExpression: sdk.String("ipsa"),
            CorsConfiguration: &operations.UpdateAPIRequestBodyCorsConfiguration{
                AllowCredentials: sdk.Bool(false),
                AllowHeaders: []string{
                    "veritatis",
                    "consectetur",
                },
                AllowMethods: []string{
                    "iste",
                },
                AllowOrigins: []string{
                    "accusantium",
                    "rem",
                    "aut",
                    "laudantium",
                },
                ExposeHeaders: []string{
                    "mollitia",
                    "ab",
                },
                MaxAge: sdk.Int64(544591),
            },
            CredentialsArn: sdk.String("non"),
            Description: sdk.String("voluptatem"),
            DisableExecuteAPIEndpoint: sdk.Bool(false),
            DisableSchemaValidation: sdk.Bool(false),
            Name: sdk.String("Toni Fritsch"),
            RouteKey: sdk.String("voluptas"),
            RouteSelectionExpression: sdk.String("aut"),
            Target: sdk.String("dignissimos"),
            Version: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        APIID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAPIResponse != nil {
        // handle response
    }
}
```

## UpdateAPIMapping

The API mapping.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAPIMapping(ctx, operations.UpdateAPIMappingRequest{
        RequestBody: operations.UpdateAPIMappingRequestBody{
            APIID: "quaerat",
            APIMappingKey: sdk.String("consequuntur"),
            Stage: sdk.String("repellendus"),
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quae"),
        APIMappingID: "quaerat",
        DomainName: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAPIMappingResponse != nil {
        // handle response
    }
}
```

## UpdateAuthorizer

Updates an Authorizer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAuthorizer(ctx, operations.UpdateAuthorizerRequest{
        RequestBody: operations.UpdateAuthorizerRequestBody{
            AuthorizerCredentialsArn: sdk.String("quod"),
            AuthorizerPayloadFormatVersion: sdk.String("labore"),
            AuthorizerResultTTLInSeconds: sdk.Int64(70447),
            AuthorizerType: operations.UpdateAuthorizerRequestBodyAuthorizerTypeEnumRequest.ToPointer(),
            AuthorizerURI: sdk.String("fuga"),
            EnableSimpleResponses: sdk.Bool(false),
            IdentitySource: []string{
                "suscipit",
                "velit",
                "culpa",
            },
            IdentityValidationExpression: sdk.String("est"),
            JwtConfiguration: &operations.UpdateAuthorizerRequestBodyJwtConfiguration{
                Audience: []string{
                    "totam",
                    "fugiat",
                    "vel",
                    "ducimus",
                },
                Issuer: sdk.String("quos"),
            },
            Name: sdk.String("Clara Senger"),
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        APIID: "aliquid",
        AuthorizerID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAuthorizerResponse != nil {
        // handle response
    }
}
```

## UpdateDeployment

Updates a Deployment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDeployment(ctx, operations.UpdateDeploymentRequest{
        RequestBody: operations.UpdateDeploymentRequestBody{
            Description: sdk.String("cum"),
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        APIID: "suscipit",
        DeploymentID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeploymentResponse != nil {
        // handle response
    }
}
```

## UpdateDomainName

Updates a domain name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDomainName(ctx, operations.UpdateDomainNameRequest{
        RequestBody: operations.UpdateDomainNameRequestBody{
            DomainNameConfigurations: []shared.DomainNameConfiguration{
                shared.DomainNameConfiguration{
                    APIGatewayDomainName: sdk.String("saepe"),
                    CertificateArn: sdk.String("necessitatibus"),
                    CertificateName: sdk.String("dolore"),
                    CertificateUploadDate: types.MustTimeFromString("2022-01-03T21:58:53.395Z"),
                    DomainNameStatus: shared.DomainNameConfigurationDomainNameStatusEnumAvailable.ToPointer(),
                    DomainNameStatusMessage: sdk.String("non"),
                    EndpointType: shared.DomainNameConfigurationEndpointTypeEnumRegional.ToPointer(),
                    HostedZoneID: sdk.String("beatae"),
                    OwnershipVerificationCertificateArn: sdk.String("dignissimos"),
                    SecurityPolicy: shared.DomainNameConfigurationSecurityPolicyEnumTls12.ToPointer(),
                },
                shared.DomainNameConfiguration{
                    APIGatewayDomainName: sdk.String("debitis"),
                    CertificateArn: sdk.String("consectetur"),
                    CertificateName: sdk.String("corporis"),
                    CertificateUploadDate: types.MustTimeFromString("2022-03-25T18:38:24.627Z"),
                    DomainNameStatus: shared.DomainNameConfigurationDomainNameStatusEnumAvailable.ToPointer(),
                    DomainNameStatusMessage: sdk.String("voluptates"),
                    EndpointType: shared.DomainNameConfigurationEndpointTypeEnumEdge.ToPointer(),
                    HostedZoneID: sdk.String("vitae"),
                    OwnershipVerificationCertificateArn: sdk.String("accusamus"),
                    SecurityPolicy: shared.DomainNameConfigurationSecurityPolicyEnumTls12.ToPointer(),
                },
                shared.DomainNameConfiguration{
                    APIGatewayDomainName: sdk.String("tempora"),
                    CertificateArn: sdk.String("aspernatur"),
                    CertificateName: sdk.String("voluptas"),
                    CertificateUploadDate: types.MustTimeFromString("2022-08-17T09:09:54.947Z"),
                    DomainNameStatus: shared.DomainNameConfigurationDomainNameStatusEnumUpdating.ToPointer(),
                    DomainNameStatusMessage: sdk.String("nobis"),
                    EndpointType: shared.DomainNameConfigurationEndpointTypeEnumEdge.ToPointer(),
                    HostedZoneID: sdk.String("adipisci"),
                    OwnershipVerificationCertificateArn: sdk.String("minus"),
                    SecurityPolicy: shared.DomainNameConfigurationSecurityPolicyEnumTls10.ToPointer(),
                },
            },
            MutualTLSAuthentication: &operations.UpdateDomainNameRequestBodyMutualTLSAuthentication{
                TruststoreURI: sdk.String("blanditiis"),
                TruststoreVersion: sdk.String("in"),
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("cum"),
        DomainName: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainNameResponse != nil {
        // handle response
    }
}
```

## UpdateIntegration

Updates an Integration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateIntegration(ctx, operations.UpdateIntegrationRequest{
        RequestBody: operations.UpdateIntegrationRequestBody{
            ConnectionID: sdk.String("quas"),
            ConnectionType: operations.UpdateIntegrationRequestBodyConnectionTypeEnumVpcLink.ToPointer(),
            ContentHandlingStrategy: operations.UpdateIntegrationRequestBodyContentHandlingStrategyEnumConvertToBinary.ToPointer(),
            CredentialsArn: sdk.String("culpa"),
            Description: sdk.String("corrupti"),
            IntegrationMethod: sdk.String("pariatur"),
            IntegrationSubtype: sdk.String("totam"),
            IntegrationType: operations.UpdateIntegrationRequestBodyIntegrationTypeEnumAwsProxy.ToPointer(),
            IntegrationURI: sdk.String("exercitationem"),
            PassthroughBehavior: operations.UpdateIntegrationRequestBodyPassthroughBehaviorEnumWhenNoTemplates.ToPointer(),
            PayloadFormatVersion: sdk.String("sit"),
            RequestParameters: map[string]string{
                "sed": "reiciendis",
                "explicabo": "asperiores",
                "facilis": "voluptate",
            },
            RequestTemplates: map[string]string{
                "ab": "iste",
                "dolore": "laborum",
                "sed": "in",
            },
            ResponseParameters: map[string]map[string]string{
                "quidem": map[string]string{
                    "voluptas": "unde",
                },
                "architecto": map[string]string{
                    "sapiente": "debitis",
                    "illo": "reiciendis",
                },
            },
            TemplateSelectionExpression: sdk.String("perferendis"),
            TimeoutInMillis: sdk.Int64(546885),
            TLSConfig: &operations.UpdateIntegrationRequestBodyTLSConfig{
                ServerNameToVerify: sdk.String("maiores"),
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("ea"),
        APIID: "occaecati",
        IntegrationID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIntegrationResult != nil {
        // handle response
    }
}
```

## UpdateIntegrationResponse

Updates an IntegrationResponses.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateIntegrationResponse(ctx, operations.UpdateIntegrationResponseRequest{
        RequestBody: operations.UpdateIntegrationResponseRequestBody{
            ContentHandlingStrategy: operations.UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnumConvertToText.ToPointer(),
            IntegrationResponseKey: sdk.String("tempora"),
            ResponseParameters: map[string]string{
                "voluptate": "reiciendis",
                "ex": "sit",
            },
            ResponseTemplates: map[string]string{
                "officiis": "praesentium",
            },
            TemplateSelectionExpression: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("nobis"),
        APIID: "error",
        IntegrationID: "veniam",
        IntegrationResponseID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIntegrationResponseResponse != nil {
        // handle response
    }
}
```

## UpdateModel

Updates a Model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateModel(ctx, operations.UpdateModelRequest{
        RequestBody: operations.UpdateModelRequestBody{
            ContentType: sdk.String("recusandae"),
            Description: sdk.String("reiciendis"),
            Name: sdk.String("Martin Beatty"),
            Schema: sdk.String("veniam"),
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("cum"),
        APIID: "laboriosam",
        ModelID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateModelResponse != nil {
        // handle response
    }
}
```

## UpdateRoute

Updates a Route.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRoute(ctx, operations.UpdateRouteRequest{
        RequestBody: operations.UpdateRouteRequestBody{
            APIKeyRequired: sdk.Bool(false),
            AuthorizationScopes: []string{
                "error",
                "hic",
                "expedita",
            },
            AuthorizationType: operations.UpdateRouteRequestBodyAuthorizationTypeEnumJwt.ToPointer(),
            AuthorizerID: sdk.String("neque"),
            ModelSelectionExpression: sdk.String("dolorum"),
            OperationName: sdk.String("nostrum"),
            RequestModels: map[string]string{
                "dolorum": "corrupti",
                "accusamus": "tempora",
                "atque": "fugit",
            },
            RequestParameters: map[string]shared.ParameterConstraints{
                "fugiat": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
                "voluptatem": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
            },
            RouteKey: sdk.String("culpa"),
            RouteResponseSelectionExpression: sdk.String("expedita"),
            Target: sdk.String("magnam"),
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        APIID: "corporis",
        RouteID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRouteResult != nil {
        // handle response
    }
}
```

## UpdateRouteResponse

Updates a RouteResponse.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRouteResponse(ctx, operations.UpdateRouteResponseRequest{
        RequestBody: operations.UpdateRouteResponseRequestBody{
            ModelSelectionExpression: sdk.String("blanditiis"),
            ResponseModels: map[string]string{
                "sed": "sit",
                "vel": "nostrum",
            },
            ResponseParameters: map[string]shared.ParameterConstraints{
                "error": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
                "consequatur": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
                "incidunt": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
                "reiciendis": shared.ParameterConstraints{
                    Required: sdk.Bool(false),
                },
            },
            RouteResponseKey: sdk.String("dolorem"),
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("atque"),
        APIID: "laborum",
        RouteID: "nam",
        RouteResponseID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRouteResponseResponse != nil {
        // handle response
    }
}
```

## UpdateStage

Updates a Stage.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateStage(ctx, operations.UpdateStageRequest{
        RequestBody: operations.UpdateStageRequestBody{
            AccessLogSettings: &operations.UpdateStageRequestBodyAccessLogSettings{
                DestinationArn: sdk.String("laboriosam"),
                Format: sdk.String("alias"),
            },
            AutoDeploy: sdk.Bool(false),
            ClientCertificateID: sdk.String("amet"),
            DefaultRouteSettings: &operations.UpdateStageRequestBodyDefaultRouteSettings{
                DataTraceEnabled: sdk.Bool(false),
                DetailedMetricsEnabled: sdk.Bool(false),
                LoggingLevel: operations.UpdateStageRequestBodyDefaultRouteSettingsLoggingLevelEnumInfo.ToPointer(),
                ThrottlingBurstLimit: sdk.Int64(454860),
                ThrottlingRateLimit: sdk.Float64(6003.92),
            },
            DeploymentID: sdk.String("reiciendis"),
            Description: sdk.String("provident"),
            RouteSettings: map[string]shared.RouteSettings{
                "delectus": shared.RouteSettings{
                    DataTraceEnabled: sdk.Bool(false),
                    DetailedMetricsEnabled: sdk.Bool(false),
                    LoggingLevel: shared.RouteSettingsLoggingLevelEnumOff.ToPointer(),
                    ThrottlingBurstLimit: sdk.Int64(16871),
                    ThrottlingRateLimit: sdk.Float64(6672.85),
                },
                "quidem": shared.RouteSettings{
                    DataTraceEnabled: sdk.Bool(false),
                    DetailedMetricsEnabled: sdk.Bool(false),
                    LoggingLevel: shared.RouteSettingsLoggingLevelEnumInfo.ToPointer(),
                    ThrottlingBurstLimit: sdk.Int64(813679),
                    ThrottlingRateLimit: sdk.Float64(6850.92),
                },
                "praesentium": shared.RouteSettings{
                    DataTraceEnabled: sdk.Bool(false),
                    DetailedMetricsEnabled: sdk.Bool(false),
                    LoggingLevel: shared.RouteSettingsLoggingLevelEnumInfo.ToPointer(),
                    ThrottlingBurstLimit: sdk.Int64(333965),
                    ThrottlingRateLimit: sdk.Float64(291),
                },
                "quisquam": shared.RouteSettings{
                    DataTraceEnabled: sdk.Bool(false),
                    DetailedMetricsEnabled: sdk.Bool(false),
                    LoggingLevel: shared.RouteSettingsLoggingLevelEnumOff.ToPointer(),
                    ThrottlingBurstLimit: sdk.Int64(97243),
                    ThrottlingRateLimit: sdk.Float64(5424.57),
                },
            },
            StageVariables: map[string]string{
                "asperiores": "totam",
                "suscipit": "quidem",
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("atque"),
        APIID: "error",
        StageName: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStageResponse != nil {
        // handle response
    }
}
```

## UpdateVpcLink

Updates a VPC link.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVpcLink(ctx, operations.UpdateVpcLinkRequest{
        RequestBody: operations.UpdateVpcLinkRequestBody{
            Name: sdk.String("Tomas Mosciski"),
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        VpcLinkID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVpcLinkResponse != nil {
        // handle response
    }
}
```
