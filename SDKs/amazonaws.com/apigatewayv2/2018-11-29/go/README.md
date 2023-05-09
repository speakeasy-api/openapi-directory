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
    res, err := s.CreateAPI(ctx, operations.CreateAPIRequest{
        RequestBody: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: sdk.String("corrupti"),
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: sdk.Bool(false),
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
                MaxAge: sdk.Int64(477665),
            },
            CredentialsArn: sdk.String("minus"),
            Description: sdk.String("placeat"),
            DisableExecuteAPIEndpoint: sdk.Bool(false),
            DisableSchemaValidation: sdk.Bool(false),
            Name: "Ted Mante",
            ProtocolType: operations.CreateAPIRequestBodyProtocolTypeEnumHTTP,
            RouteKey: sdk.String("ab"),
            RouteSelectionExpression: sdk.String("quis"),
            Tags: map[string]string{
                "deserunt": "perferendis",
            },
            Target: sdk.String("ipsam"),
            Version: sdk.String("repellendus"),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
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

### [SDK](docs/sdk/README.md)

* [CreateAPI](docs/sdk/README.md#createapi) - Creates an Api resource.
* [CreateAPIMapping](docs/sdk/README.md#createapimapping) - Creates an API mapping.
* [CreateAuthorizer](docs/sdk/README.md#createauthorizer) - Creates an Authorizer for an API.
* [CreateDeployment](docs/sdk/README.md#createdeployment) - Creates a Deployment for an API.
* [CreateDomainName](docs/sdk/README.md#createdomainname) - Creates a domain name.
* [CreateIntegration](docs/sdk/README.md#createintegration) - Creates an Integration.
* [CreateIntegrationResponse](docs/sdk/README.md#createintegrationresponse) - Creates an IntegrationResponses.
* [CreateModel](docs/sdk/README.md#createmodel) - Creates a Model for an API.
* [CreateRoute](docs/sdk/README.md#createroute) - Creates a Route for an API.
* [CreateRouteResponse](docs/sdk/README.md#createrouteresponse) - Creates a RouteResponse for a Route.
* [CreateStage](docs/sdk/README.md#createstage) - Creates a Stage for an API.
* [CreateVpcLink](docs/sdk/README.md#createvpclink) - Creates a VPC link.
* [DeleteAccessLogSettings](docs/sdk/README.md#deleteaccesslogsettings) - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
* [DeleteAPI](docs/sdk/README.md#deleteapi) - Deletes an Api resource.
* [DeleteAPIMapping](docs/sdk/README.md#deleteapimapping) - Deletes an API mapping.
* [DeleteAuthorizer](docs/sdk/README.md#deleteauthorizer) - Deletes an Authorizer.
* [DeleteCorsConfiguration](docs/sdk/README.md#deletecorsconfiguration) - Deletes a CORS configuration.
* [DeleteDeployment](docs/sdk/README.md#deletedeployment) - Deletes a Deployment.
* [DeleteDomainName](docs/sdk/README.md#deletedomainname) - Deletes a domain name.
* [DeleteIntegration](docs/sdk/README.md#deleteintegration) - Deletes an Integration.
* [DeleteIntegrationResponse](docs/sdk/README.md#deleteintegrationresponse) - Deletes an IntegrationResponses.
* [DeleteModel](docs/sdk/README.md#deletemodel) - Deletes a Model.
* [DeleteRoute](docs/sdk/README.md#deleteroute) - Deletes a Route.
* [DeleteRouteRequestParameter](docs/sdk/README.md#deleterouterequestparameter) - Deletes a route request parameter.
* [DeleteRouteResponse](docs/sdk/README.md#deleterouteresponse) - Deletes a RouteResponse.
* [DeleteRouteSettings](docs/sdk/README.md#deleteroutesettings) - Deletes the RouteSettings for a stage.
* [DeleteStage](docs/sdk/README.md#deletestage) - Deletes a Stage.
* [DeleteVpcLink](docs/sdk/README.md#deletevpclink) - Deletes a VPC link.
* [ExportAPI](docs/sdk/README.md#exportapi)
* [GetAPI](docs/sdk/README.md#getapi) - Gets an Api resource.
* [GetAPIMapping](docs/sdk/README.md#getapimapping) - Gets an API mapping.
* [GetAPIMappings](docs/sdk/README.md#getapimappings) - Gets API mappings.
* [GetApis](docs/sdk/README.md#getapis) - Gets a collection of Api resources.
* [GetAuthorizer](docs/sdk/README.md#getauthorizer) - Gets an Authorizer.
* [GetAuthorizers](docs/sdk/README.md#getauthorizers) - Gets the Authorizers for an API.
* [GetDeployment](docs/sdk/README.md#getdeployment) - Gets a Deployment.
* [GetDeployments](docs/sdk/README.md#getdeployments) - Gets the Deployments for an API.
* [GetDomainName](docs/sdk/README.md#getdomainname) - Gets a domain name.
* [GetDomainNames](docs/sdk/README.md#getdomainnames) - Gets the domain names for an AWS account.
* [GetIntegration](docs/sdk/README.md#getintegration) - Gets an Integration.
* [GetIntegrationResponse](docs/sdk/README.md#getintegrationresponse) - Gets an IntegrationResponses.
* [GetIntegrationResponses](docs/sdk/README.md#getintegrationresponses) - Gets the IntegrationResponses for an Integration.
* [GetIntegrations](docs/sdk/README.md#getintegrations) - Gets the Integrations for an API.
* [GetModel](docs/sdk/README.md#getmodel) - Gets a Model.
* [GetModelTemplate](docs/sdk/README.md#getmodeltemplate) - Gets a model template.
* [GetModels](docs/sdk/README.md#getmodels) - Gets the Models for an API.
* [GetRoute](docs/sdk/README.md#getroute) - Gets a Route.
* [GetRouteResponse](docs/sdk/README.md#getrouteresponse) - Gets a RouteResponse.
* [GetRouteResponses](docs/sdk/README.md#getrouteresponses) - Gets the RouteResponses for a Route.
* [GetRoutes](docs/sdk/README.md#getroutes) - Gets the Routes for an API.
* [GetStage](docs/sdk/README.md#getstage) - Gets a Stage.
* [GetStages](docs/sdk/README.md#getstages) - Gets the Stages for an API.
* [GetTags](docs/sdk/README.md#gettags) - Gets a collection of Tag resources.
* [GetVpcLink](docs/sdk/README.md#getvpclink) - Gets a VPC link.
* [GetVpcLinks](docs/sdk/README.md#getvpclinks) - Gets a collection of VPC links.
* [ImportAPI](docs/sdk/README.md#importapi) - Imports an API.
* [ReimportAPI](docs/sdk/README.md#reimportapi) - Puts an Api resource.
* [ResetAuthorizersCache](docs/sdk/README.md#resetauthorizerscache) - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
* [TagResource](docs/sdk/README.md#tagresource) - Creates a new Tag resource to represent a tag.
* [UntagResource](docs/sdk/README.md#untagresource) - Deletes a Tag.
* [UpdateAPI](docs/sdk/README.md#updateapi) - Updates an Api resource.
* [UpdateAPIMapping](docs/sdk/README.md#updateapimapping) - The API mapping.
* [UpdateAuthorizer](docs/sdk/README.md#updateauthorizer) - Updates an Authorizer.
* [UpdateDeployment](docs/sdk/README.md#updatedeployment) - Updates a Deployment.
* [UpdateDomainName](docs/sdk/README.md#updatedomainname) - Updates a domain name.
* [UpdateIntegration](docs/sdk/README.md#updateintegration) - Updates an Integration.
* [UpdateIntegrationResponse](docs/sdk/README.md#updateintegrationresponse) - Updates an IntegrationResponses.
* [UpdateModel](docs/sdk/README.md#updatemodel) - Updates a Model.
* [UpdateRoute](docs/sdk/README.md#updateroute) - Updates a Route.
* [UpdateRouteResponse](docs/sdk/README.md#updaterouteresponse) - Updates a RouteResponse.
* [UpdateStage](docs/sdk/README.md#updatestage) - Updates a Stage.
* [UpdateVpcLink](docs/sdk/README.md#updatevpclink) - Updates a VPC link.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
