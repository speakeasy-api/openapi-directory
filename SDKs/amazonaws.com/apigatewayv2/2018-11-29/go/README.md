# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/apigatewayv2/2018-11-29/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.CreateAPIRequest{
        RequestBody: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: "corrupti",
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: false,
                AllowHeaders: []string{
                    "distinctio",
                    "quibusdam",
                    "unde",
                },
                AllowMethods: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                AllowOrigins: []string{
                    "suscipit",
                    "iure",
                    "magnam",
                },
                ExposeHeaders: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
                MaxAge: 477665,
            },
            CredentialsArn: "minus",
            Description: "placeat",
            DisableExecuteAPIEndpoint: false,
            DisableSchemaValidation: false,
            Name: "voluptatum",
            ProtocolType: "WEBSOCKET",
            RouteKey: "excepturi",
            RouteSelectionExpression: "nisi",
            Tags: map[string]string{
                "temporibus": "ab",
                "quis": "veritatis",
                "deserunt": "perferendis",
                "ipsam": "repellendus",
            },
            Target: "sapiente",
            Version: "quo",
        },
        XAmzAlgorithm: "odit",
        XAmzContentSha256: "at",
        XAmzCredential: "at",
        XAmzDate: "maiores",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "quod",
        XAmzSignedHeaders: "quod",
    }

    ctx := context.Background()
    res, err := s.CreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateAPI` - Creates an Api resource.
* `CreateAPIMapping` - Creates an API mapping.
* `CreateAuthorizer` - Creates an Authorizer for an API.
* `CreateDeployment` - Creates a Deployment for an API.
* `CreateDomainName` - Creates a domain name.
* `CreateIntegration` - Creates an Integration.
* `CreateIntegrationResponse` - Creates an IntegrationResponses.
* `CreateModel` - Creates a Model for an API.
* `CreateRoute` - Creates a Route for an API.
* `CreateRouteResponse` - Creates a RouteResponse for a Route.
* `CreateStage` - Creates a Stage for an API.
* `CreateVpcLink` - Creates a VPC link.
* `DeleteAccessLogSettings` - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
* `DeleteAPI` - Deletes an Api resource.
* `DeleteAPIMapping` - Deletes an API mapping.
* `DeleteAuthorizer` - Deletes an Authorizer.
* `DeleteCorsConfiguration` - Deletes a CORS configuration.
* `DeleteDeployment` - Deletes a Deployment.
* `DeleteDomainName` - Deletes a domain name.
* `DeleteIntegration` - Deletes an Integration.
* `DeleteIntegrationResponse` - Deletes an IntegrationResponses.
* `DeleteModel` - Deletes a Model.
* `DeleteRoute` - Deletes a Route.
* `DeleteRouteRequestParameter` - Deletes a route request parameter.
* `DeleteRouteResponse` - Deletes a RouteResponse.
* `DeleteRouteSettings` - Deletes the RouteSettings for a stage.
* `DeleteStage` - Deletes a Stage.
* `DeleteVpcLink` - Deletes a VPC link.
* `ExportAPI`
* `GetAPI` - Gets an Api resource.
* `GetAPIMapping` - Gets an API mapping.
* `GetAPIMappings` - Gets API mappings.
* `GetApis` - Gets a collection of Api resources.
* `GetAuthorizer` - Gets an Authorizer.
* `GetAuthorizers` - Gets the Authorizers for an API.
* `GetDeployment` - Gets a Deployment.
* `GetDeployments` - Gets the Deployments for an API.
* `GetDomainName` - Gets a domain name.
* `GetDomainNames` - Gets the domain names for an AWS account.
* `GetIntegration` - Gets an Integration.
* `GetIntegrationResponse` - Gets an IntegrationResponses.
* `GetIntegrationResponses` - Gets the IntegrationResponses for an Integration.
* `GetIntegrations` - Gets the Integrations for an API.
* `GetModel` - Gets a Model.
* `GetModelTemplate` - Gets a model template.
* `GetModels` - Gets the Models for an API.
* `GetRoute` - Gets a Route.
* `GetRouteResponse` - Gets a RouteResponse.
* `GetRouteResponses` - Gets the RouteResponses for a Route.
* `GetRoutes` - Gets the Routes for an API.
* `GetStage` - Gets a Stage.
* `GetStages` - Gets the Stages for an API.
* `GetTags` - Gets a collection of Tag resources.
* `GetVpcLink` - Gets a VPC link.
* `GetVpcLinks` - Gets a collection of VPC links.
* `ImportAPI` - Imports an API.
* `ReimportAPI` - Puts an Api resource.
* `ResetAuthorizersCache` - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
* `TagResource` - Creates a new Tag resource to represent a tag.
* `UntagResource` - Deletes a Tag.
* `UpdateAPI` - Updates an Api resource.
* `UpdateAPIMapping` - The API mapping.
* `UpdateAuthorizer` - Updates an Authorizer.
* `UpdateDeployment` - Updates a Deployment.
* `UpdateDomainName` - Updates a domain name.
* `UpdateIntegration` - Updates an Integration.
* `UpdateIntegrationResponse` - Updates an IntegrationResponses.
* `UpdateModel` - Updates a Model.
* `UpdateRoute` - Updates a Route.
* `UpdateRouteResponse` - Updates a RouteResponse.
* `UpdateStage` - Updates a Stage.
* `UpdateVpcLink` - Updates a VPC link.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
